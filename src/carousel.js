import { useState, useRef, useEffect } from "react";
import "./carousel.css";

const projects = [
  { id: 1, title: "3D Asteroid Visualiser", image: "/images/asteroids.jpg" },
  { id: 2, title: "Tanks Mania", image: "/images/tanksmania.jpg" },
  { id: 3, title: "AI Chatbot Portfolio", image: "/images/portfolio.jpg" },
  { id: 4, title: "Crime Map UK", image: "/images/crimeuk.jpg" },
  { id: 5, title: "3D Asteroid Visualiser", image: "/images/asteroids.jpg" },
  { id: 6, title: "Tanks Mania", image: "/images/tanksmania.jpg" },
  { id: 7, title: "AI Chatbot Portfolio", image: "/images/portfolio.jpg" },
  { id: 8, title: "Crime Map UK", image: "/images/crimeuk.jpg" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [angle, setAngle] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);
  const startX = useRef(0);
  const startAngle = useRef(0);
  const isDragging = useRef(false);
  const containerRef = useRef(null);

  const itemCount = projects.length;
  const anglePerItem = 360 / itemCount;

  const next = () => snapTo(currentIndex + 1);
  const prev = () => snapTo(currentIndex - 1);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX || e.touches?.[0]?.clientX;
    startAngle.current = angle;
    setIsSnapping(false);
    e.preventDefault();
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const x = e.clientX || e.touches?.[0]?.clientX;
    const deltaX = x - startX.current;
    setAngle(startAngle.current + deltaX * 0.3);
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    snapToNearestCard();
  };

  const snapTo = (index) => {
    setCurrentIndex(index);
    setIsSnapping(true);
    setAngle(-index * anglePerItem);
    setTimeout(() => setIsSnapping(false), 500);
  };

  const snapToNearestCard = () => {
    const snappedIndex = Math.round(-angle / anglePerItem);
    snapTo(snappedIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e) => handlePointerDown(e);
    const handleMouseMove = (e) => handlePointerMove(e);
    const handleMouseUp = () => handlePointerUp();

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    container.addEventListener("touchstart", handleMouseDown);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("touchstart", handleMouseDown);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [angle]);

  return (
    <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-black text-white overflow-hidden">
      <div className="carousel-3d" ref={containerRef}>
        <div
          className="carousel-inner-3d"
          style={{
            transform: `translateZ(-600px) rotateY(${angle}deg)`,
            transition: isSnapping ? "transform 0.5s ease" : "none",
            cursor: isDragging.current ? "grabbing" : "grab",
          }}
        >
          {projects.map((project, i) => {
            const realIndex = ((i - currentIndex) + itemCount * 10) % itemCount;
            const isVisible =
              realIndex === 0 || realIndex === 1 || realIndex === itemCount - 1;

            return (
            <div
                key={project.id}
                className="carousel-item-3d rounded-4"
                style={{
                    transform: `
                    rotateY(${i * anglePerItem}deg)
                    translateZ(900px)
                    scale(${
                        i === currentIndex
                        ? 1
                        : i === (currentIndex + 1) % itemCount || i === (currentIndex - 1 + itemCount) % itemCount
                        ? 0.9
                        : 1
                    })
                    `,
                    opacity: isVisible ? 1 : 0,
                    transition: isSnapping
                    ? "transform 0.8s cubic-bezier(0.77,0,0.175,1), opacity 0.6s ease"
                    : "none",
                    cursor: isDragging.current ? "grabbing" : "grab",
                }}
            >
                <div className="card border-0 text-center text-light shadow-lg rounded-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top rounded-top-4"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-white fs-4">{project.title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="d-flex mt-4 gap-3">
        <button className="btn btn-outline-light px-4" onClick={prev}>
          ‹ Prev
        </button>
        <button className="btn btn-outline-light px-4" onClick={next}>
          Next ›
        </button>
      </div>
    </div>
  );
}
