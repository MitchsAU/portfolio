// import { useState } from "react";
// import { IoChevronBack, IoChevronForward } from "react-icons/io5";
// import { FiBook } from "react-icons/fi";
// import { ArrowRight } from "lucide-react";
// import { useNavigate, Link } from "react-router-dom";
// import "./carousel2D.css";

// const projects = [
//   {
//     id: 1,
//     title: "3D Asteroid Web App Visualisation",
//     description:
//       "Explore real-time asteroid data from NASA/JPL with interactive 3D visualisations showing size, distance and speed of near-Earth objects.",
//     image:
//       "/images/asteroids.jpg",
//     tags: ["HTML", "CSS", "Javascript", "Three.js", "Bootstrap"],
//   },
//   {
//     id: 2,
//     title: "AI Chatbot Interactive Portfolio",
//     description:
//       "Portfolio featuring an AI chatbot trained on my project data, capable of answering any questions you have about my work.",
//     image:
//       "/images/portfolio.jpg",
//     tags: ["React", "HTML", "CSS", "Bootstrap", "OpenAI"],
//   },
//   {
//     id: 3,
//     title: "UK Crime Tracker Web App",
//     description:
//       "View crime data across England, Wales and Northern Ireland in real-time.",
//     image:
//       "/images/crimeuk.jpg",
//     tags: ["HTML", "CSS", "Javascript"],
//   },
//   {
//     id: 4,
//     title: "Tanks Mania",
//     description:
//       "A 2D top-down shooter where the players advance through levels by battling enemy AI tanks with unique abilities.",
//     image:
//       "/images/tanksmania.jpg",
//     tags: ["Unity", "C#"],
//   },
//   {
//     id: 5,
//     title: "Essential Connect",
//     description:
//       "Essential Connect is a senior-friendly app designed to simplify access to essential services, communication with friends and family, and daily tasks through an intuitive, easy-to-use interface.",
//     image:
//       "/images/essentialconnect.png",
//     tags: ["Figma"],
//   },
//   {
//     id: 6,
//     title: "Housing Affordability Crisis Awareness Motion Graphic Video",
//     description:
//       "A motion graphic video raising awareness about Australia’s housing affordability crisis, highlighting challenges, impacts, and potential solutions through engaging visuals and storytelling.",
//     image:
//       "/images/housingcrisis.jpg",
//     tags: ["Adobe After Effects", "Adobe Illustrator", "Javascript"],
//   },
// ];

// export default function ProjectCarousel() {
//   const [activeIndex, setActiveIndex] = useState(2);
//   const navigate = useNavigate();

//   const handlePrev = () => setActiveIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
//   const handleNext = () => setActiveIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));

//   const getCardStyle = (index) => {
//     let diff = index - activeIndex;
//     if (diff > projects.length / 2) diff -= projects.length;
//     else if (diff < -projects.length / 2) diff += projects.length;

//     if (Math.abs(diff) > 1) return { opacity: 0, transform: "translateX(0) scale(0.8) rotateY(0deg)", zIndex: 0, pointerEvents: "none" };
//     if (diff === 0) return { opacity: 1, transform: "translateX(0) scale(1) rotateY(0deg)", zIndex: 30, pointerEvents: "auto" };
//     if (diff === -1) return { opacity: 0.6, transform: "translateX(-65%) scale(0.85) rotateY(25deg)", zIndex: 20, pointerEvents: "auto", transformOrigin: "right center" };
//     if (diff === 1) return { opacity: 0.6, transform: "translateX(65%) scale(0.85) rotateY(-25deg)", zIndex: 20, pointerEvents: "auto", transformOrigin: "left center" };
//     return { opacity: 0, transform: "translateX(0) scale(0.8)", zIndex: 0, pointerEvents: "none" };
//   };

//   return (
//     <div className="project-carousel d-flex flex-column align-items-center justify-content-center w-100 px-3 position-relative">
//       <div className="project-carousel-header text-center mb-4" id="projects">
//         <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-2 rounded-pill glass-card">
//             <FiBook size={16} />
//             <span className="fw-medium small">Projects</span>
//           </div>
//         <h2 className="fw-bold display-4 mb-3">Featured Projects</h2>
//         <p className="text-white-50 fs-5 fw-normal">Explore my latest work</p>
//       </div>

//       <div className="carousel-wrapper">
//         <div className="carousel-cards">
//           {projects.map((project, index) => {
//             const style = getCardStyle(index);
//             const isActive = index === activeIndex;

//             return (
//               <div
//                 key={project.id}
//                 className="carousel-card-wrapper"
//                 style={{
//                   opacity: style.opacity,
//                   transform: style.transform,
//                   zIndex: style.zIndex,
//                   pointerEvents: style.pointerEvents,
//                   transformOrigin: style.transformOrigin || "center center",
//                 }}
//               >
//                 <div className={`carousel-card ${isActive ? "active" : ""}`} style={{ position: "relative" }}>
//                     {/* Image + Overlay */}
//                     <div className="carousel-card-image">
//                         <img src={project.image} alt={project.title} />
//                         <div className="carousel-card-overlay" />
//                     </div>

//                     {/* Content */}
//                     <div className="carousel-card-content">
//                         <h3 className="fw-semibold">{project.title}</h3>
//                         <p className="text-white-50 fw-light">{project.description}</p>
//                         <div className="carousel-card-tags d-flex flex-wrap gap-2">
//                         {project.tags.map(tag => (
//                             <span
//                             key={tag}
//                             className="badge bg-dark bg-opacity-50 text-light fw-normal"
//                             >
//                             {tag}
//                             </span>
//                         ))}
//                         </div>
//                         <button 
//                           className="btn d-flex align-items-center justify-content-center w-100 glass-btn rounded-3 p-2 text-white"
//                           size="lg"
//                           >
//                           View Project <ArrowRight size={16} className="ms-2"/>
//                         </button>

//                         {/* Make whole card clickable */}
//                         <Link to={`/project/${project.id}`} className="stretched-link"></Link>
//                     </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <button onClick={handlePrev} className="carousel-btn btn btn-outline-light position-absolute top-50 start-0 translate-middle-y rounded-circle shadow-sm">
//           <IoChevronBack size={24} />
//         </button>
//         <button onClick={handleNext} className="carousel-btn btn btn-outline-light position-absolute top-50 end-0 translate-middle-y rounded-circle shadow-sm">
//           <IoChevronForward size={24} />
//         </button>
//       </div>
//         <div className="carousel-indicators d-flex gap-2 mt-5">
//             {projects.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={index === activeIndex ? "active" : ""}
//                 aria-label={`Go to project ${index + 1}`}
//               />
//             ))}
//         </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FiBook } from "react-icons/fi";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./carousel2D.css";

export default function ProjectCarousel() {
  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fetch projects from WordPress
  useEffect(() => {
    fetch("https://wordpress-1541460-5957272.cloudwaysapps.com/wp-json/wp/v2/projects?_embed")
      .then((res) => res.json())
      .then((data) => {
        const mappedProjects = data.map((p) => ({
          id: p.id,
          title: p.acf?.project_title,
          description: p.acf?.project_description || "",
          image: p.acf?.project_image || "",
          tags: p.acf?.technologies || [],
          fullDescription: p.acf?.fullDescription || "",
          features: p.acf?.features || [],
          technologies: p.acf?.technologies || [],
          githubUrl: p.acf?.github_url || "#",
          liveUrl: p.acf?.live_url || "#",
          slug: p.slug,
        }));
        setProjects(mappedProjects);
        setActiveIndex(0); // Set first project as active
      })
      .catch((err) => console.error(err));
  }, []);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () =>
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const getCardStyle = (index) => {
    let diff = index - activeIndex;
    if (diff > projects.length / 2) diff -= projects.length;
    else if (diff < -projects.length / 2) diff += projects.length;

    if (Math.abs(diff) > 1)
      return {
        opacity: 0,
        transform: "translateX(0) scale(0.8) rotateY(0deg)",
        zIndex: 0,
        pointerEvents: "none",
      };
    if (diff === 0)
      return {
        opacity: 1,
        transform: "translateX(0) scale(1) rotateY(0deg)",
        zIndex: 30,
        pointerEvents: "auto",
      };
    if (diff === -1)
      return {
        opacity: 0.6,
        transform: "translateX(-65%) scale(0.85) rotateY(25deg)",
        zIndex: 20,
        pointerEvents: "auto",
        transformOrigin: "right center",
      };
    if (diff === 1)
      return {
        opacity: 0.6,
        transform: "translateX(65%) scale(0.85) rotateY(-25deg)",
        zIndex: 20,
        pointerEvents: "auto",
        transformOrigin: "left center",
      };
    return { opacity: 0, transform: "translateX(0) scale(0.8)", zIndex: 0, pointerEvents: "none" };
  };

  if (!projects.length) {
    return <div className="text-center text-white py-5">Loading projects...</div>;
  }

  return (
    <div className="project-carousel d-flex flex-column align-items-center justify-content-center w-100 px-3 position-relative">
      <div className="project-carousel-header text-center mb-4" id="projects">
        <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-2 rounded-pill glass-card">
          <FiBook size={16} />
          <span className="fw-medium small">Projects</span>
        </div>
        <h2 className="fw-bold display-4 mb-3">Featured Projects</h2>
        <p className="text-white-50 fs-5 fw-normal">Explore my latest work</p>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-cards">
          {projects.map((project, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={project.id}
                className="carousel-card-wrapper"
                style={{
                  opacity: style.opacity,
                  transform: style.transform,
                  zIndex: style.zIndex,
                  pointerEvents: style.pointerEvents,
                  transformOrigin: style.transformOrigin || "center center",
                }}
              >
                <div className={`carousel-card ${isActive ? "active" : ""}`} style={{ position: "relative" }}>
                  <div className="carousel-card-image">
                    <img src={project.image} alt={project.title} />
                    <div className="carousel-card-overlay" />
                  </div>

                  <div className="carousel-card-content">
                    <h3 className="fw-semibold">{project.title}</h3>
                    <p className="text-white-50 fw-light">{project.description}</p>
                    <div className="carousel-card-tags d-flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="badge bg-dark bg-opacity-50 text-light fw-normal">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      className="btn d-flex align-items-center justify-content-center w-100 glass-btn rounded-3 p-2 text-white"
                      size="lg"
                    >
                      View Project <ArrowRight size={16} className="ms-2" />
                    </button>

                    <Link to={`/project/${project.slug}`} className="stretched-link"></Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handlePrev}
          className="carousel-btn btn btn-outline-light position-absolute top-50 start-0 translate-middle-y rounded-circle shadow-sm"
        >
          <IoChevronBack size={24} />
        </button>
        <button
          onClick={handleNext}
          className="carousel-btn btn btn-outline-light position-absolute top-50 end-0 translate-middle-y rounded-circle shadow-sm"
        >
          <IoChevronForward size={24} />
        </button>
      </div>

      <div className="carousel-indicators d-flex gap-2 mt-5">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={index === activeIndex ? "active" : ""}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
