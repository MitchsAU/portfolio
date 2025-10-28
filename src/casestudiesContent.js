// import React from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { FiFileText, FiGithub, FiArrowLeft, FiExternalLink, FiCalendar, FiClock } from "react-icons/fi";
// import Beams from './Beams';
// import Dock, { dockItemsOuter } from './Dock';
// import "./casestudiesContent.css";

// const caseStudies = {
//   1: {
//     id: 1,
//     title: "E-Commerce Platform Redesign",
//     subtitle: "Transforming User Experience & Conversion Rates",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
//     tags: ["UX Design", "Frontend", "Performance"],
//     readTime: "8 min read",
//     date: "March 2024",
//     problem: {
//       title: "The Problem",
//       description:
//         "The client's e-commerce platform was experiencing high bounce rates and cart abandonment. Users found the interface confusing, and the checkout process was too complex.",
//       keyPoints: [
//         "75% cart abandonment rate",
//         "Slow page load times (4-5 seconds)",
//         "Outdated UI not optimized for mobile",
//         "Complicated multi-step checkout",
//       ],
//     },
//     process: {
//       title: "My Development Process",
//       steps: [
//         {
//           phase: "1. Discovery & Analysis",
//           description:
//             "I started by analyzing user behavior data and conducting usability tests to identify pain points.",
//           actions: [
//             "Reviewed analytics to understand user drop-off points",
//             "Conducted user interviews and surveys",
//             "Analyzed competitor platforms",
//             "Created user journey maps",
//           ],
//         },
//         {
//           phase: "2. Design & Prototyping",
//           description: "Based on insights, I designed a streamlined interface focusing on simplicity and speed.",
//           actions: [
//             "Created wireframes with simplified navigation",
//             "Designed mobile-first responsive layouts",
//             "Built interactive prototypes in Figma",
//             "Conducted A/B testing on key features",
//           ],
//         },
//         {
//           phase: "3. Development & Optimization",
//           description: "I rebuilt the frontend with modern React patterns and implemented performance optimizations.",
//           actions: [
//             "Migrated to React with TypeScript for type safety",
//             "Implemented lazy loading and code splitting",
//             "Optimized images and assets",
//             "Reduced checkout to single-page flow",
//           ],
//         },
//         {
//           phase: "4. Testing & Refinement",
//           description: "Rigorous testing ensured the new platform was bug-free and performant.",
//           actions: [
//             "Cross-browser and device testing",
//             "Performance testing and optimization",
//             "User acceptance testing",
//             "Iterative improvements based on feedback",
//           ],
//         },
//       ],
//     },
//     solution: {
//       title: "The Solution",
//       description:
//         "A completely redesigned platform with intuitive navigation, streamlined checkout, and blazing-fast performance.",
//       outcomes: [
//         "Reduced cart abandonment from 75% to 35%",
//         "Page load time decreased to under 1.5 seconds",
//         "40% increase in mobile conversions",
//         "Customer satisfaction score improved by 60%",
//       ],
//     },
//     technicalDetails: {
//       title: "Technical Highlights",
//       stack: ["React", "Bootstrap", "React Query", "Stripe"],
//       highlights: [
//         "Implemented virtual scrolling for product lists",
//         "Used optimistic UI updates for cart interactions",
//         "Created a custom design system for consistency",
//         "Built progressive web app (PWA) capabilities",
//       ],
//     },
//   },
//    2: {
//     id: 2,
//     title: "Essential Connect Case Study",
//     subtitle: "Senior Friendly App for essential services, communication, and daily tasks.",
//     image: "/images/essentialconnect.png",
//     tags: ["UX Design", "Frontend", "Performance"],
//     readTime: "8 min read",
//     date: "September 2023",
//     problem: {
//       title: "The Problem",
//       description:
//         "As Australia’s aging population continues to grow, many seniors struggle to integrate modern technology into their daily lives. Complex interfaces, inconsistent navigation, and small text often create barriers that hinder their ability to communicate and access essential services. This digital divide leads to social isolation and reduces seniors’ confidence in using technology. The challenge was to design a solution that empowers seniors to confidently use modern technology through a simple, consistent, and intuitive experience.",
//       keyPoints: [
//         "16% of Australians are over the age of 65",
//         "Seniors struggle with complex digital interfaces and inconsistant app designs",
//         "Low digital literacy limits access to key services such as healthcare.",
//         "Social isolation among seniors is rising due to difficulties using modern communication tools.",
//       ],
//     },
//     process: {
//       title: "My Development Process",
//       steps: [
//         {
//           phase: "1. Research & Problem Definition",
//           description:
//             "Research from the Australian Institute of Health and Welfare and ACMA identified that 16% of Australians are over 65, with 78% owning smartphones but facing usability challenges. Insights from studies revealed that seniors value simplicity, clarity, and consistency above all else.",
//           actions: [
//             "Collected demographic data to understand senior digital behaviour and device use.",
//             "Analysed existing apps to identify navigation and accessibility pain points.",
//             "Reviewed academic studies to understand seniors’ perceptions of technology.",
//             "Created user personas to represent varying levels of tech literacy and confidence.",
//           ],
//         },
//         {
//           phase: "2. Ideation & Concept Creation",
//           description: "Using the Lotus Blossom Technique, multiple ideas were explored, including workshops, tutorials, and multi-purpose apps. The most feasible and desirable concept was a single, easy-to-use app that combines access to essential services and communication in one consistent interface.",
//           actions: [
//             "Brainstormed multiple solutions using the Lotus Blossom method to expand creative thinking.",
//             "Grouped ideas into feasibility, viability, and desirability categories.",
//             "Mapped user journeys for each concept to identify the most intuitive experience.",
//             "Selected the multi-task app concept as it aligned best with user needs and research insights.",
//           ],
//            image: "/images/lotusblossom.png",
//         },
//         {
//           phase: "3. Design & Prototyping",
//           description: "The interface was designed with large text, clear icons, and colour consistency. Navigation avoided gestures and swipes, focusing instead on buttons and visible actions. Features like speech-to-text, video calling, and text prompts were added to improve accessibility and comfort.",
//           actions: [
//             "Designed wireframes focusing on clarity and minimal cognitive load.",
//             "Applied accessible colour contrasts and scalable text for readability.",
//             "Implemented clear iconography paired with supporting text for recognition.",
//             "Created an interactive prototype for early-stage usability testing.",
//           ],
//         },
//         {
//           phase: "4. User Testing & Refinement",
//           description: "User testing with seniors provided valuable feedback on functionality and clarity. Improvements included visible text prompts, service search options, and customizable contact layouts. The testing confirmed the app’s simplicity and effectiveness for its intended audience.",
//           actions: [
//             "Conducted think-aloud usability sessions with real seniors to capture live feedback.",
//             "Observed navigation habits to identify potential confusion or hesitation points.",
//             "Collected qualitative data through participant interviews post-testing.",
//             "Iterated interface layouts and interaction flows based on user feedback.",
//           ],
//         },
//       ],
//     },
//     solution: {
//       title: "The Solution",
//       description:
//         "Essential Connect is a senior-focused mobile app designed to simplify digital interaction. It provides access to essential services, video and text communication, and customisable settings—all in one intuitive interface. By prioritising accessibility and consistency, Essential Connect bridges the technological gap for seniors, improving their independence and digital confidence.",
//       outcomes: [
//         "Seniors successfully navigated the app without needing external assistance.",
//         "Participants reported increased confidence using mobile technology.",
//         "The app streamlined communication and access to essential services in one place.",
//         "Testers praised the clear design consistency and large, readable interface.",
//       ],
//     },
//     technicalDetails: {
//       title: "Technical Highlights",
//       stack: ["React", "Bootstrap", "React Query", "Stripe"],
//       highlights: [
//         "Speech-to-text and text-to-speech for effortless communication.",
//         "Responsive, senior-friendly interface with large text and clear icons.",
//         "Integrated contact and service database for quick access.",
//         "Fully consistent navigation system with button-based actions only.",
//       ],
//     },
//   },
// };

// export default function CaseStudyPage() {
//   const { id } = useParams();
//   const caseStudy = id ? caseStudies[parseInt(id)] : null;

//     const navigate = useNavigate();
  
//     const handleBackClick = () => {
//       navigate("/"); // go to home
//       setTimeout(() => {
//         const section = document.getElementById("casestudies");
//         if (section) {
//           section.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 100); // small delay to ensure the page is rendered
//     };

//   if (!caseStudy) {
//     return (
//       <div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
//         <div className="text-center">
//           <h1 className="display-5 mb-4 fw-semibold">Case Study Not Found</h1>
//           <Link to="/" className="text-decoration-none">
//              <button className="btn btn-glass align-items-center px-3 py-2 text-white rounded-3 mb-4" onClick={handleBackClick}>
//             <FiArrowLeft className="me-2" /> Back to Case Studies
//             </button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="position-relative mobile-padding">
//         <div
//             className="position-fixed top-0 start-0 w-100 h-100"
//             style={{
//                 zIndex: 0,
//                 pointerEvents: "none",
//                 overflow: "hidden",
//             }}
//             >
//             <Beams />
//             <div className="beams-overlay"></div>
//         </div>
//         <div className="container py-5 project-content position-relative">
//         {/* Back Button */}
//         <Link to="/" className="text-decoration-none">
//             <button className="btn btn-glass d-flex align-items-center px-3 py-2 text-white rounded-3 mb-4" onClick={handleBackClick}>
//             <FiArrowLeft className="me-2" />
//             Back to Case Studies
//             </button>
//         </Link>

//         {/* Header */}
//         <div className="mb-5 animate-fade-in">
//             <div className="d-flex flex-wrap gap-2 mb-3">
//             {caseStudy.tags.map((tag) => (
//                 <span key={tag} className="badge bg-secondary bg-opacity-75 px-3 py-2 text-white fw-normal fs-6">
//                 {tag}
//                 </span>
//             ))}
//             </div>
//             <h1 className="display-5 fw-bold mb-3">{caseStudy.title}</h1>
//             <p className="lead text-white mb-3">{caseStudy.subtitle}</p>
//             <div className="d-flex gap-3 small text-white-50">
//             <div className="d-flex align-items-center gap-1 ">
//                 <FiCalendar className="icon-small" />
//                 {caseStudy.date}
//             </div>
//             <div className="d-flex align-items-center gap-1">
//                 <FiClock className="icon-small" />
//                 {caseStudy.readTime}
//             </div>
//             </div>
//         </div>

//         {/* Hero Image */}
//         <div className="mb-5 rounded-3 overflow-hidden animate-fade-in">
//             <img
//             src={caseStudy.image}
//             alt={caseStudy.title}
//             className="img-fluid hero-img"
//             />
//         </div>

//         {/* Problem Section */}
//         <section className="p-4 mb-5 glass-card animate-fade-in rounded-3">
//             <h2 className="h3 mb-3">{caseStudy.problem.title}</h2>
//             <p className="text-white mb-3">{caseStudy.problem.description}</p>
//             <div className="row g-3">
//             {caseStudy.problem.keyPoints.map((point, index) => (
//                 <div key={index} className="col-md-6 d-flex align-items-start gap-2 ">
//                 <div className="bullet-dot mt-1"></div>
//                 <p className="mb-0 text-white">{point}</p>
//                 </div>
//             ))}
//             </div>
//         </section>

//         {/* Process Section */}
//         <section className="mb-5">
//           <h2 className="h3 mb-4">{caseStudy.process.title}</h2>

//           <div className="d-flex flex-column gap-4">
//             {caseStudy.process.steps.map((step, index) => (
//               <div
//                 key={index}
//                 className="p-4 glass-card animate-fade-in rounded-3"
//               >
//                 <div className="row g-4">
//                   {/* Left Column — Text */}
//                   <div className={`col-md-${step.image ? "6" : "12"}`}>
//                     <h3 className="h5 mb-2">{step.phase}</h3>
//                     <p className="text-white mb-3">{step.description}</p>
//                     <div className="d-flex flex-column gap-2">
//                       {step.actions.map((action, idx) => (
//                         <div key={idx} className="d-flex align-items-start gap-2">
//                           <div className="bullet-dot-small mt-1"></div>
//                           <p className="small text-white mb-0">{action}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Right Column — Image (optional) */}
//                   {step.image && (
//                     <div className="col-md-6">
//                       <img
//                         src={step.image}
//                         alt={step.phase}
//                         className="img-fluid rounded-3 shadow-sm"
//                       />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Solution Section */}
//         <section className="p-4 mb-5 glass-card animate-fade-in rounded-3">
//             <h2 className="h3 mb-3">{caseStudy.solution.title}</h2>
//             <p className="text-white mb-3">{caseStudy.solution.description}</p>
// <div className="d-flex flex-wrap gap-3">
//   {caseStudy.solution.outcomes.map((outcome, index) => (
//     <div key={index} className="flex-grow-1 flex-basis-48 p-3 rounded-3 glass-card d-flex align-items-start gap-3 align-items-center">
//       <div className="fw-bold text-white-50 fs-4">{index + 1}</div>
//       <p className="mb-0 text-white flex-grow-1">{outcome}</p>
//     </div>
//   ))}
// </div>

//         </section>

//         {/* Technical Details */}
//         <section className="p-4 mb-5 glass-card animate-fade-in rounded-3">
//             <h2 className="h3 mb-4">{caseStudy.technicalDetails.title}</h2>

//             <div className="mb-3">
//             <h3 className="h6 mb-2">Tech Stack</h3>
//             <div className="d-flex flex-wrap gap-2">
//                 {caseStudy.technicalDetails.stack.map((tech, index) => (
//                 <span key={index} className="badge bg-secondary bg-opacity-75 px-3 py-2 text-white fw-normal fs-6">
//                     {tech}
//                 </span>
//                 ))}
//             </div>
//             </div>

//             <div>
//             <h3 className="h6 mb-2">Key Highlights</h3>
//             <div className="d-flex flex-column gap-2">
//                 {caseStudy.technicalDetails.highlights.map((highlight, idx) => (
//                 <div key={idx} className="d-flex align-items-start gap-2">
//                     <div className="bullet-dot mt-1"></div>
//                     <p className="mb-0 text-white">{highlight}</p>
//                 </div>
//                 ))}
//             </div>
//             </div>
//         </section>

//         {/* CTA */}
//         <div className="text-center mt-4">
//             <Link to="/" className="text-decoration-none">
//             <button className="btn btn-glass d-flex align-items-center px-3 py-2 text-white rounded-3 mb-4" onClick={handleBackClick}>
//             <FiArrowLeft className="me-2" /> Back to Case Studies
//             </button>
//             </Link>
//         </div>
//         </div>
//         <Dock items={dockItemsOuter} />
//     </div>
//   );
// };


import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";
import Beams from "./Beams";
import Dock, { dockItemsOuter } from "./Dock";
import { ClipLoader } from "react-spinners";
import "./casestudiesContent.css";

export default function CaseStudyPage() {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    fetch(`https://wordpress-1541460-5957272.cloudwaysapps.com/wp-json/wp/v2/casestudies?slug=${id}&_embed`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0 && data[0].acf) {
          const c = data[0];
          setCaseStudy({
            id: c.id,
            title: c.acf.casestudy_title || "",
            subtitle: c.acf.casestudy_description || "",
            image: c.acf.casestudy_image || "",
            tags: c.acf.tags || [],
            readTime: c.acf.time || "",
            date: c.acf.date || "",
            problem: c.acf.problem || "",
            keypoints: c.acf.keypoints || [],
            processtitle1: c.acf.first_process_title || "",
            processDescription1: c.acf.first_process_description || "",
            processActions1: c.acf.first_actions || [],
            processtitle2: c.acf.second_process_title || "",
            processDescription2: c.acf.second_process_description || "",
            processActions2: c.acf.second_actions || [],
            processImage: c.acf.process_image?.url || "",
            processtitle3: c.acf.third_process_title || "",
            processDescription3: c.acf.third_process_description || "",
            processActions3: c.acf.third_actions || [],
            processtitle4: c.acf.fourth_process_title || "",
            processDescription4: c.acf.fourth_process_description || "",
            processActions4: c.acf.fourth_actions || [],
            solution: c.acf.solution_description || "",
            solutionOutcomes: c.acf.solution_outcomes || [],
            techStack: c.acf.techstack || [],
            technicalHighlights: c.acf.technical_highlights || [],
          });
        } else {
          setCaseStudy(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setCaseStudy(null);
        setLoading(false);
      });
  }, [id]);

  const handleBackClick = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("casestudies");
      if (section) section.scrollIntoView({ behavior: "smooth" });
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
          <ClipLoader color="#fff" size={20} className="me-2" />
          <span>Loading Case Study...</span>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
        <div className="text-center">
          <h1 className="display-5 mb-4 fw-semibold">Case Study Not Found</h1>
          <button className="btn btn-glass align-items-center px-3 py-2 text-white rounded-3 mb-4" onClick={handleBackClick}>
            <FiArrowLeft className="me-2" /> Back to Case Studies
          </button>
        </div>
      </div>
    );
  }

  // Collect process steps dynamically
  const processSteps = [
    {
      title: caseStudy.processtitle1,
      description: caseStudy.processDescription1,
      actions: caseStudy.processActions1,
      image: "",
    },
    {
      title: caseStudy.processtitle2,
      description: caseStudy.processDescription2,
      actions: caseStudy.processActions2,
      image: caseStudy.processImage,
    },
    {
      title: caseStudy.processtitle3,
      description: caseStudy.processDescription3,
      actions: caseStudy.processActions3,
      image: "",
    },
    {
      title: caseStudy.processtitle4,
      description: caseStudy.processDescription4,
      actions: caseStudy.processActions4,
      image: "",
    },
  ].filter((step) => step.title || step.description);

  return (
    <div className="position-relative mobile-padding">
      {/* Beams Background */}
      <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <Beams />
        <div className="beams-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="container py-5 project-content position-relative">
        {/* Back Button */}
        <button className="btn btn-glass d-flex align-items-center px-3 py-2 text-white rounded-3 mb-4" onClick={handleBackClick}>
          <FiArrowLeft className="me-2" />
          Back to Case Studies
        </button>

        {/* Header */}
        <div className="mb-5 animate-fade-in">
          <div className="d-flex flex-wrap gap-2 mb-3">
            {caseStudy.tags.map((tag) => (
              <span key={tag} className="badge bg-secondary bg-opacity-75 px-3 py-2 text-white fw-normal fs-6">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="display-5 fw-bold mb-3">{caseStudy.title}</h1>
          <p className="lead text-white mb-3">{caseStudy.subtitle}</p>
          <div className="d-flex gap-3 small text-white-50">
            {caseStudy.date && (
              <div className="d-flex align-items-center gap-2">
                <FiCalendar className="icon-small" />
                {caseStudy.date}
              </div>
            )}
            {caseStudy.readTime && (
              <div className="d-flex align-items-center gap-2">
                <FiClock className="icon-small" />
                {caseStudy.readTime} min read
              </div>
            )}
          </div>
        </div>

        {/* Hero Image */}
        {caseStudy.image && (
          <div className="mb-5 rounded-3 overflow-hidden animate-fade-in">
            <img src={caseStudy.image} alt={caseStudy.title} className="img-fluid hero-img" />
          </div>
        )}

        {/* Problem Section */}
        {caseStudy.problem && (
          <section className="p-4 mb-5 glass-card animate-fade-in rounded-3">
            <h2 className="h3 mb-3">The Problem</h2>
            <p className="text-white mb-3">{caseStudy.problem}</p>
            <div className="row g-3">
              {caseStudy.keypoints.map((point, index) => (
                <div key={index} className="col-md-6 d-flex align-items-start gap-2">
                  <div className="bullet-dot mt-1"></div>
                  <p className="mb-0 text-white">{point}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Process Section */}
        {processSteps.length > 0 && (
          <section className="mb-5">
            <h2 className="h3 mb-4">My Development Process</h2>
            <div className="d-flex flex-column gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="p-4 glass-card animate-fade-in rounded-3">
                  <div className="row g-4">
                    <div className={`col-md-${step.image ? "6" : "12"}`}>
                      <h3 className="h5 mb-2">{step.title}</h3>
                      <p className="text-white mb-3">{step.description}</p>
                      <div className="d-flex flex-column gap-2">
                        {step.actions.map((action, idx) => (
                          <div key={idx} className="d-flex align-items-start gap-2">
                            <div className="bullet-dot-small mt-1"></div>
                            <p className="small text-white mb-0">{action}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {step.image && (
                      <div className="col-md-6">
                        <img src={step.image} alt={step.title} className="img-fluid rounded-3 shadow-sm" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Solution Section */}
        {caseStudy.solution && (
          <section className="p-4 mb-5 glass-card animate-fade-in rounded-3">
            <h2 className="h3 mb-3">The Solution</h2>
            <p className="text-white mb-3">{caseStudy.solution}</p>
            <div className="d-flex flex-wrap gap-3">
              {caseStudy.solutionOutcomes.map((outcome, index) => (
                <div key={index} className="flex-grow-1 flex-basis-48 p-3 rounded-3 glass-card d-flex align-items-center gap-3">
                  <div className="fw-bold text-white-50 fs-4">{index + 1}</div>
                  <p className="mb-0 text-white flex-grow-1">{outcome}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technical Details */}
        {(caseStudy.techStack.length > 0 || caseStudy.technicalHighlights.length > 0) && (
          <section className="p-4 mb-5 glass-card animate-fade-in rounded-3">
            <h2 className="h3 mb-4">Technical Highlights</h2>
            {caseStudy.techStack.length > 0 && (
              <div className="mb-3">
                <h3 className="h6 mb-2">Tech Stack</h3>
                <div className="d-flex flex-wrap gap-2">
                  {caseStudy.techStack.map((tech, index) => (
                    <span key={index} className="badge bg-secondary bg-opacity-75 px-3 py-2 text-white fw-normal fs-6">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {caseStudy.technicalHighlights.length > 0 && (
              <div>
                <h3 className="h6 mb-2">Key Highlights</h3>
                <div className="d-flex flex-column gap-2">
                  {caseStudy.technicalHighlights.map((highlight, idx) => (
                    <div key={idx} className="d-flex align-items-start gap-2">
                      <div className="bullet-dot mt-1"></div>
                      <p className="mb-0 text-white">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* CTA */}
        <div className="text-center mt-4">
          <button className="btn btn-glass d-flex align-items-center px-3 py-2 text-white rounded-3 mb-4" onClick={handleBackClick}>
            <FiArrowLeft className="me-2" /> Back to Case Studies
          </button>
        </div>
      </div>
      <Dock items={dockItemsOuter} />
    </div>
  );
}
