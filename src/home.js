import ProjectCarousel from './carousel2D';
import Dock, { dockItems } from './Dock';
import AnimatedContent from './animate';
import Beams from './Beams';
import Bot from './Bot';
import { FiArrowRight } from "react-icons/fi";
import LogoLoop from './LogoLoop';
import CaseStudiesSection from './casestudiesSection';
import AboutSection from './about';
import ContactSection from './contact';
import Footer from './footer';
import './App.css';

export default function Home() {
  return (
    <div className="position-relative">
      {/* Beams Background */}
      <div
      className="position-fixed top-0 start-0 w-100 h-100"
      style={{
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <Beams />
      <div className="beams-overlay"></div>
    </div>

      {/* Main content */}
      <div className="container-fluid position-relative" id="home" style={{ zIndex: 1 }}>
        <div className="container position-relative">
          <div className="row g-0 position-relative" style={{ zIndex: 1 }}>
            {/* Hero Column */}
            <div className="col-12 col-lg-7 d-flex flex-column text-lg-start text-center pt-lg-20vh" style={{ minHeight: '50vh', paddingTop: '10vh' }}>
              {/* Top content */}
              <div>
                <h1 className="display-1 fw-semibold pb-4">Hi, I'm Mitch</h1>
                <h2 className="display-5 fw-medium pb-4 fst-italic">UX/UI Designer <br /> Web/Game Developer</h2>
                <h3 className="fw-regular fs-5 pe-lg-12vw">
                  I focus on clean, user-friendly digital experiences that blend design and functionality. I enjoy solving complex problems with simple, thoughtful solutions that bring ideas to life.
                </h3>
                <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start align-items-center py-4">
                  <a href="#projects" className="btn cta-btn px-3 py-2 mb-2 rounded-3 d-inline-block text-white">
                    View My Work
                    <FiArrowRight className="cta-arrow ms-1" size={20} />
                  </a>
                </div>
              </div>

              {/* Push LogoLoop to bottom */}
              <div className="mt-auto">
                <LogoLoop className="pt-5" />
              </div>
            </div>

            {/* Chat Column */}
            <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center text-center p-4" style={{ minHeight: '50vh' }}>
              <div className="w-100" style={{ marginTop: '5vw', minWidth: '25vw' }}>
                <Bot />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects & Case Studies */}
      <div className=''>
        <ProjectCarousel />
        <CaseStudiesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>

      <Dock items={dockItems} />
      <AnimatedContent direction="vertical" distance={100} duration={0.8} stagger={0.1}></AnimatedContent>
    </div>
  );
}
