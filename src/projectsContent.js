// import { useParams, Link, useNavigate } from "react-router-dom";
// import { FiFileText, FiGithub, FiArrowLeft, FiExternalLink } from "react-icons/fi";
// import { useState } from "react";
// import Beams from './Beams';
// import Dock, { dockItemsOuter } from './Dock';
// import "./projectContent.css";

// const projects = {
//   1: {
//     id: 1,
//     title: "3D Asteroid Web App Visualisation",
//     description:
//       "Explore real-time asteroid data from NASA/JPL with interactive 3D visualisations showing size, distance and speed of near-Earth objects.",
//     image:
//       "/images/asteroids.jpg",
//     tags: ["Web Application", "Data Visualisation", "Educational / STEM", "Interactive Experience", "UX/UI Design", "3D Visualisation / Graphics"],
//     fullDescription:
//       "The 3D Asteroids App is an interactive web application that allows users to explore near-Earth asteroids in a fully immersive 3D environment. Leveraging real astronomical data, the app provides detailed information about asteroid size, speed, trajectory, and closest approach distance, making space exploration accessible and engaging. Users can navigate the solar system using intuitive controls to rotate, zoom, and pan around objects. A filter panel enables refinement of visible asteroids by diameter, speed, or approach distance, while manual input options allow for precise data exploration. Clicking on an asteroid reveals detailed statistics, enhancing educational and analytical value. Designed with usability and immersion in mind, the app combines realistic 3D visualisation with interactive data tools, encouraging exploration and learning. It demonstrates the potential of combining scientific data with interactive design, offering a visually compelling and informative experience for space enthusiasts, students, and researchers alike.",
//     features: [
//       "Interactive 3D Visualisation – Explore near-Earth asteroids in a fully immersive 3D environment.",
//       "Real-Time Data – Displays asteroid size, speed, trajectory, and closest approach distance using real astronomical data.",
//       "Filtering & Search – Refine visible asteroids by diameter, speed, or approach distance, with manual input options.",
//       "Detailed Information Panels – Click on asteroids to view detailed statistics and enhance educational value.",
//       "Real-Time Data Panel – Displays live statistics and updates for selected asteroids, linking the 3D visualisation with detailed numerical insights.",
//     ],
//     technologies: ["HTML", "CSS", "Javascript", "Three.js", "Bootstrap"],
//     githubUrl: "https://github.com/MitchsAU/asteroid-web-app",
//     liveUrl: "https://asteroid-web-app.pages.dev",
//   },
//   2: {
//   id: 2,
//   title: "AI Chatbot Interactive Portfolio",
//   description:
//     "Portfolio featuring an AI chatbot trained on my project data, capable of answering any questions you have about my work.",
//   image:
//     "/images/portfolio.jpg",
//   tags: ["Artificial Intelligence / Machine Learning", "UX/UI Design", "Emerging Technologies", "Interactive Experience", "Web Application"],
//   fullDescription:
//     "This portfolio features an AI-powered chatbot designed to enhance user interaction by providing intelligent, real-time responses about the projects showcased. Trained on data from my own work, the chatbot can answer questions about each project, offering detailed explanations, insights, and guidance tailored to the visitor’s inquiries. The integration of the AI chatbot transforms the portfolio from a static showcase into an interactive experience, making it easier for users to explore projects, understand design and development decisions, and gain a deeper appreciation for the work. By combining natural language processing with a user-friendly interface, the chatbot provides a seamless and engaging way to navigate the portfolio. This project demonstrates the potential of AI in improving accessibility and engagement in digital experiences. It highlights my focus on innovative solutions, user-centered design, and the integration of emerging technologies to create meaningful, interactive, and intelligent online experiences.",
//   features: [
//     "Interactive Chatbot – Answers questions about portfolio projects in real time.",
//     "Project-Specific Knowledge – Trained on data from my own projects for accurate responses.",
//     "Natural Language Processing – Understands and responds to user queries conversationally.",
//     "User-Friendly Interface – Seamlessly integrated into the portfolio for intuitive navigation.",
//     "Adaptive Responses – Learns from queries to provide increasingly relevant and helpful answers.",
//   ],
//   technologies: ["React", "HTML", "CSS", "Bootstrap", "OpenAI"],
//   githubUrl: "https://github.com/MitchsAU/portfolio",
//   liveUrl: "https://mitchellskelton.dev",
// },
// 3: {
//   id: 3,
//   title: "UK Crime Tracker Web App",
//   description:
//     "View crime data across England, Wales and Northern Ireland in real-time.",
//   image:
//     "/images/crimeuk.jpg",
//   tags: ["UX/UI Design", "Data Visualisation", "Interactive Mapping", "Web Application"],
//   fullDescription: 
//   "The UK Crime Tracker is a web application that visualises real crime data on an interactive map using official UK Police API data. Initially planned to display information on a separate webpage, the design evolved to present data directly on the map for improved clarity and user engagement. Users can pin any location in the UK to view surrounding crime data, including category, outcome, and outcome date, neatly displayed in a readable table. A severity system distinguishes between minor, moderate, and severe crimes, while full-screen mode enhances map usability. The app also integrates the Nominatim geolocation API, allowing users to search and instantly navigate to any UK location. A dedicated heat map section lets users select three points, filter crime categories and dates, and view statistics beneath. Focused on usability and visual clarity, the project combines data accuracy with an intuitive, map-driven experience.",
//   features: [
//     "Interactive Map – Pin locations to see nearby crime data.",
//     "Crime Severity – Highlights minor, moderate, and severe crimes.",
//     "Geolocation Search – Quickly navigate to any UK location.",
//     "Heat Map – Select points, filter by type/date, and view stats.",
//     "Data Table Display – Crime details are neatly shown in a table for readability.",
//   ],
//   technologies: ["HTML", "CSS", "Javascript"],
//   githubUrl: "https://github.com/MitchsAU/UK-Crime-Data-Site",
//   liveUrl: "#",
// },
// 4: {
//   id: 4,
//   title: "Tanks Mania",
//   description:
//     "A 2D top-down shooter where the players advance through levels by battling enemy AI tanks with unique abilities.",
//   image:
//     "/images/tanksmania.jpg",
//   tags: ["Video Game", "Top-Down Shooter", "Strategy / Tactical Gameplay", "Single-Player"],
//   fullDescription:
//     "Tanks Mania is a top-down action shooter where players navigate through multiple levels, strategically battling enemy tanks to progress. Players have 100 health points and must eliminate all enemies on each level to advance. Gameplay combines shooting and tactical placement of landmines, with a maximum of three landmines per level. Enemy tanks vary in type and behavior, ranging from static units to patrol tanks, and can differ in size, turret count, or firing speed. Players can interact with the environment by pushing enemies into landmines or using obstacles to their advantage, adding a layer of strategy and challenge. If the player’s health reaches zero, they can retry the current level, promoting skill development and strategic planning. Designed to combine reflex-based action with tactical gameplay, Tanks Mania emphasizes responsive controls, varied enemy encounters, and progressively challenging levels, offering an engaging and competitive experience for players seeking both strategy and fast-paced combat.",
//   features: [
//     "Multiple Enemy Types – Encounter static, patrolling, and varying-sized tanks with different turrets.",
//     "Landmine Mechanics – Lay up to three landmines per level to destroy enemies strategically.",
//     "Level Progression – Clear all enemies to advance, with the option to retry upon defeat.",
//     "Interactive Environment – Push enemies into landmines or obstacles to gain a tactical advantage.",
//     "Progressive Challenge – Levels increase in difficulty with more complex enemy patterns and stronger tanks.",
//   ],
//   technologies: ["Unity", "C#"],
//   githubUrl: "#",
//   liveUrl: "https://mitchsau.itch.io/tanks-mania",
// },
// 5: {
//   id: 5,
//   title: "Essential Connect",
//   description:
//     "Essential Connect is a senior-friendly app designed to simplify access to essential services, communication with friends and family, and daily tasks through an intuitive, easy-to-use interface.",
//   image:
//     "/images/essentialconnect.png",
//   tags: ["Mobile Application", "UX/UI Design", "Accessibility / Inclusive Design", "User-Centered Design", "Communication Tools"],
//   fullDescription:
//     "Essential Connect is a mobile application designed to simplify access to essential services for seniors in Australia. The app focuses on usability, featuring a clean, intuitive interface with large text, consistent buttons, and straightforward navigation to ensure a seamless user experience for individuals aged 65 and above. Key functionalities include easy communication with friends and family through built-in video and voice calling, quick access to essential services such as healthcare, transport, and community support, and customizable settings that allow users to adjust font size, button layout, and notifications according to their preferences. Text-to-speech functionality further enhances accessibility, enabling users to interact with the app effortlessly. By combining simplicity, accessibility, and comprehensive service access, Essential Connect empowers seniors to stay connected, independent, and informed. The project demonstrates a user-centered design approach, focusing on real-world needs, improving quality of life, and bridging the digital accessibility gap for older adults in Australia.",
//   features: [
//     "Senior-Friendly Interface – Large text, clear buttons, and simple navigation for easy use.",
//     "Access to Essential Services – Quick links to healthcare, transport, and community support.",
//     "Video & Voice Calling – Communicate effortlessly with friends and family.",
//     "Customizable Settings – Adjust font size, button layout, and notifications for personal preference.",
//     "Text-to-Speech Functionality – Enhances accessibility by reading content aloud for users.",
//   ],
//   technologies: ["Figma"],
//   githubUrl: "#",
//   liveUrl: "https://www.figma.com/proto/sLMfn42Qs8g5tpuc8rEqyR/start-of-stage-2-design?node-id=0-1&t=WjIU551ZmTciTDtr-1",
// },
// 6: {
//   id: 6,
//   title: "Housing Affordability Crisis Awareness Motion Graphic Video",
//   description:
//     "A motion graphic video raising awareness about Australia’s housing affordability crisis, highlighting challenges, impacts, and potential solutions through engaging visuals and storytelling.",
//   image:
//     "/images/housingcrisis.jpg",
//   tags: ["Motion Graphics / Animation", "Video Production", "Educational Content", "Social Awareness", "Graphic Design"],
//   fullDescription:
//     "This motion graphic video raises awareness about the housing affordability crisis in Australia, highlighting its causes, impacts, and potential solutions. Using a combination of engaging visuals, animated data, and concise storytelling, the video presents complex information in a clear and accessible way for a broad audience. The video explores rising property prices, rent increases, and the socio-economic effects on different demographics, emphasizing how the lack of affordable housing affects families, young adults, and vulnerable communities. Animated charts, graphs, and iconography illustrate key statistics, while motion design techniques guide viewers through the narrative, keeping them engaged and informed. By blending education with visual storytelling, the project aims to inform and inspire action, encouraging viewers to consider policy, community initiatives, and personal choices that contribute to addressing housing affordability. The video demonstrates the potential of motion graphics as a tool for social awareness and public engagement.",
//   features: [
//     "Motion Graphics Storytelling – Uses animated visuals to communicate complex information clearly.",
//     "Data Visualisation – Charts, graphs, and infographics highlight key housing statistics.",
//     "Social Awareness Focus – Educates viewers about the causes and impacts of the housing crisis.",
//     "Educational & Action-Oriented – Encourages understanding and inspires consideration of solutions.",
//     "Accessible Design – Combines clear visuals, readable text, and pacing to ensure comprehension for a broad audience.",
//   ],
//   technologies: ["Adobe After Effects", "Adobe Illustrator", "Javascript"],
//   githubUrl: "#",
//   liveUrl: "https://youtu.be/xtY_zrbh3E4",
// },
// };

// export default function ProjectContent() {
//   const { id } = useParams();
//   const projectId = id ? parseInt(id) : null;
//   const project = projectId ? projects[projectId] : null;

//   const [showTLDR, setShowTLDR] = useState(false);

//   const handleTLDR = () => {
//     setShowTLDR(true);
//     setTimeout(() => setShowTLDR(false), 4000);
//   };

//   const navigate = useNavigate();

//   const handleBackClick = () => {
//     navigate("/"); // go to home
//     setTimeout(() => {
//       const section = document.getElementById("projects");
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 100); // small delay to ensure the page is rendered
//   };

//   if (!project) {
//     return (
//       <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark">
//         <div className="text-center">
//           <h1 className="display-5 mb-4 fw-semibold">Project Not Found</h1>
//           <Link to="/#projects">
//             <button className="btn btn-secondary px-4 py-2" onClick={handleBackClick}>
//               <FiArrowLeft className="me-2" />
//               Back to Projects
//             </button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//   <div className="position-relative mobile-padding">
//     {/* ✅ Background Beams */}
//     <div
//       className="position-fixed top-0 start-0 w-100 h-100"
//       style={{
//         zIndex: 0,
//         pointerEvents: "none",
//         overflow: "hidden",
//       }}
//     >
//       <Beams />
//       <div className="beams-overlay"></div>
//     </div>

//     {/* ✅ Foreground content (above beams) */}
//     <div
//       className="container py-5 project-content position-relative"
//       style={{ zIndex: 1 }}
//     >
//       {/* TL;DR Alert */}
//       {showTLDR && (
//         <div
//           className="alert alert-info alert-dismissible fade show shadow-sm"
//           role="alert"
//         >
//           <strong>{project.title}:</strong> {project.description}
//           <button
//             type="button"
//             className="btn-close"
//             onClick={() => setShowTLDR(false)}
//           ></button>
//         </div>
//       )}

//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <Link to="/#projects" className="text-decoration-none">
//           <button className="btn btn-glass d-flex align-items-center px-3 py-2 text-white rounded-3" onClick={handleBackClick}>
//             <FiArrowLeft className="me-2" />
//             Back to Projects
//           </button>
//         </Link>

//         <button
//           className="btn btn-glass d-flex align-items-center px-3 py-2 text-white rounded-3"
//           onClick={handleTLDR}
//         >
//           <FiFileText className="me-2" />
//           TL;DR
//         </button>
//       </div>

//       {/* Hero Section */}
//       <div className="card border-1 shadow-lg mb-5 overflow-hidden text-white glass-card animate-fade-in rounded-3">
//         <div className="position-relative">
//           <img
//             src={project.image}
//             className="card-img-top img-fluid"
//             alt={project.title}
//             style={{ objectFit: "cover", maxHeight: "450px", width: "100%" }}
//           />
//           <div className="card-img-overlay d-flex flex-column justify-content-end p-4 bg-gradient-dark">
//             <h1 className="card-title display-5 fw-bold">{project.title}</h1>
//             <p className="lead mb-0 text-light">{project.description}</p>
//           </div>
//         </div>
//       </div>

//       <div className="row g-4">
//         {/* Main Content */}
//         <div className="col-md-8">
//           <div className="card p-4 mb-4 shadow-sm border-1 rounded-3 glass-card animate-fade-in">
//             <h2 className="h4 mb-3 fw-bold fs-3 text-white">About This Project</h2>
//             <p className="text-light lh-lg">{project.fullDescription}</p>
//           </div>
//           <div className="card p-4 mb-4 shadow-sm border-1 rounded-3 glass-card animate-fade-in">
//             <h2 className="h4 mb-3 fw-bold fs-3 text-white">Key Features</h2>
//             <ul className="list-unstyled mb-0">
//               {project.features.map((feature, index) => (
//                 <li
//                   key={index}
//                   className="mb-2 d-flex align-items-start text-light"
//                 >
//                   <span className="text-light me-2 fs-5">•</span>
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="col-md-4 d-flex flex-column gap-3">
//           <div className="card p-3 shadow-sm border-1 rounded-3 glass-card animate-fade-in">
//             <h3 className="h5 mb-3 fw-bold fs-4 text-white">Technologies</h3>
//             <div className="d-flex flex-wrap gap-2">
//               {project.technologies.map((tech) => (
//                 <span
//                   key={tech}
//                   className="badge bg-secondary bg-opacity-75 px-3 py-2 text-white fw-normal fs-6"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="card p-3 shadow-sm border-1 rounded-3 glass-card animate-fade-in">
//             <h3 className="h5 mb-3 fw-bold fs-4 text-white">Categories</h3>
//             <div className="d-flex flex-wrap gap-2">
//               {project.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="badge bg-secondary bg-opacity-75 px-3 py-2 text-white fw-normal fs-6"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="d-grid gap-2 mt-2 animate-fade-in">
//             <a
//               className="btn btn-lg btn-secondary d-flex align-items-center justify-content-center shadow-sm btn-demo text-white rounded-3"
//               href={project.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FiExternalLink className="me-2" />
//               Live Demo
//             </a>
//             <a
//               className="btn btn-lg btn-secondary d-flex align-items-center justify-content-center shadow-sm btn-glass text-white rounded-3"
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FiGithub className="me-2" />
//               View Code
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Dock items={dockItemsOuter} />
//   </div>
//   );
// }


import { useParams, useNavigate } from "react-router-dom";
import { FiFileText, FiGithub, FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { useState, useEffect } from "react";
import Beams from './Beams';
import Dock, { dockItemsOuter } from './Dock';
import { ClipLoader } from "react-spinners";
import "./projectContent.css";

export default function ProjectContent() {
  const { id } = useParams(); // get project ID from URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showTLDR, setShowTLDR] = useState(false);
  const navigate = useNavigate();

 useEffect(() => {
  if (!id) return;

  setLoading(true);

  // Fetch project by slug
  fetch(`https://wordpress-1541460-5957272.cloudwaysapps.com//wp-json/wp/v2/project?slug=${id}&_embed`)
    .then(res => res.json())
    .then(data => {
      if (data && data.length > 0 && data[0].acf) {
        const p = data[0];
        setProject({
          id: p.id,
          title: p.acf.project_title,
          description: p.acf.project_description || "",
          image: p.acf.project_image || "",
          technologies: p.acf.technologies || [],
          fullDescription: p.acf.fulldescription || "",
          features: p.acf.features || [],
          categories: p.acf.categories || [],
          githubUrl: p.acf.githuburl.url || "#",
          urlTitle: p.acf.urltitle || "#",
          liveUrl: p.acf.liveurl.url || "#",
          slug: p.slug,
        });
      } else {
        setProject(null);
      }
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setProject(null);
      setLoading(false);
    });
}, [id]);

  const handleTLDR = () => {
    setShowTLDR(true);
    setTimeout(() => setShowTLDR(false), 4000);
  };

  const handleBackClick = () => {
    navigate("/"); // go to home
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (loading) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark text-white">
        <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <Beams />
        <div className="beams-overlay"></div>
      </div>
        <div className="d-flex align-items-center text-start">
                  <ClipLoader className="me-2"
                    color={'#fff'}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"/>
                  <span>Loading Project...</span>
                </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark">
        <div className="text-center">
          <h1 className="display-5 mb-4 fw-semibold">Project Not Found</h1>
          <button className="btn btn-secondary px-4 py-2" onClick={handleBackClick}>
            <FiArrowLeft className="me-2" />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="position-relative mobile-padding">
      {/* Background Beams */}
      <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <Beams />
        <div className="beams-overlay"></div>
      </div>

      {/* Foreground content */}
      <div className="container py-5 project-content position-relative" style={{ zIndex: 1 }}>
        {/* TL;DR Alert */}
        {showTLDR && (
          <div className="alert alert-info alert-dismissible fade show shadow-sm" role="alert">
            <strong>{project.title}:</strong> {project.description}
            <button type="button" className="btn-close" onClick={() => setShowTLDR(false)}></button>
          </div>
        )}

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button className="btn btn-glass d-flex align-items-center px-3 py-2 text-white rounded-3" onClick={handleBackClick}>
            <FiArrowLeft className="me-2" />
            Back to Projects
          </button>

          <button className="btn btn-glass d-flex align-items-center px-3 py-2 text-white rounded-3" onClick={handleTLDR}>
            <FiFileText className="me-2" />
            TL;DR
          </button>
        </div>

        {/* Hero Section */}
        <div className="card border-1 shadow-lg mb-5 overflow-hidden text-white glass-card animate-fade-in rounded-3">
          <div className="position-relative">
            <img
              src={project.image}
              className="card-img-top img-fluid"
              alt={project.title}
              style={{ objectFit: "cover", maxHeight: "450px", width: "100%" }}
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end p-4 bg-gradient-dark">
              <h1 className="card-title display-5 fw-bold">{project.title}</h1>
              <p className="lead mb-0 text-light">{project.description}</p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Main Content */}
          <div className="col-md-8">
            <div className="card p-4 mb-4 shadow-sm border-1 rounded-3 glass-card animate-fade-in">
              <h2 className="h4 mb-3 fw-bold fs-3 text-white">About This Project</h2>
              <p className="text-light lh-lg">{project.fullDescription}</p>
            </div>
            <div className="card p-4 mb-4 shadow-sm border-1 rounded-3 glass-card animate-fade-in">
              <h2 className="h4 mb-3 fw-bold fs-3 text-white">Key Features</h2>
              <ul className="list-unstyled mb-0">
                {project.features.map((feature, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start text-light">
                    <span className="text-light me-2 fs-5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-md-4 d-flex flex-column gap-3">
            <div className="card p-3 shadow-sm border-1 rounded-3 glass-card animate-fade-in">
              <h3 className="h5 mb-3 fw-bold fs-4 text-white">Technologies</h3>
              <div className="d-flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="badge bg-secondary bg-opacity-75 px-3 py-2 text-white fw-normal fs-6">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-3 shadow-sm border-1 rounded-3 glass-card animate-fade-in">
              <h3 className="h5 mb-3 fw-bold fs-4 text-white">Categories</h3>
              <div className="d-flex flex-wrap gap-2">
                {project.categories.map((cat) => (
                  <span key={cat} className="badge bg-secondary bg-opacity-75 px-3 py-2 text-white fw-normal fs-6">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
              <div className="d-grid gap-2 mt-2 animate-fade-in">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    className="btn btn-lg btn-secondary d-flex align-items-center justify-content-center shadow-sm btn-demo text-white rounded-3"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="me-2" />
                    {project.urlTitle}
                  </a>
                )}

                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    className="btn btn-lg btn-secondary d-flex align-items-center justify-content-center shadow-sm btn-glass text-white rounded-3"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="me-2" />
                    View Code
                  </a>
                )}
              </div>
          </div>
        </div>
      </div>
      <Dock items={dockItemsOuter} />
    </div>
  );
}

