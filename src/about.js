import { useState, useEffect} from "react";
import { Github, Linkedin, Mail, Instagram, Headset } from "lucide-react";
import { MdSportsTennis } from "react-icons/md";
import { SiPcgamingwiki } from "react-icons/si";
import { FiUser, FiMapPin, FiCalendar } from "react-icons/fi";
import "./about.css";

export default function AboutSection() {
  const [workExperiences, setWorkExperiences] = useState([]);

  useEffect(() => {
    fetch("https://wordpress-1541460-5957272.cloudwaysapps.com//wp-json/wp/v2/work?_embed")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((item) => ({
          id: item.id,
          title: item.acf?.job_title || item.title?.rendered || "Untitled Role",
          company: item.acf?.company || "Unknown Company",
          date: item.acf?.date || "",
          locationSelector: item.acf?.location_selector || "",
          location: item.acf?.location || "",
          desc: item.acf?.description || "",
          skills: item.acf?.skills || [],
        }));
        setWorkExperiences(mapped);
      })
      .catch((err) => console.error("Error fetching work experience:", err));
  }, []);
  
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/MitchsAU" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mitchell-skelton/" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/mitchsdesign_" },
    { icon: Mail, label: "Email", href: "mailto:mitchellskeltondesign@gmail.com" },
  ];

  const skills = [
    { icon: Headset, title: "Gaming", desc: "Currently playing Call of Duty, Rust and Diablo IV" },
    { icon: MdSportsTennis, title: "Tennis", desc: "Playing tennis for 12+ years" },
    { icon: SiPcgamingwiki, title: "PC Building", desc: "Built my first ever computer 6 years ago and continued ever since" },
  ];

  return (
    <section className="about-section py-5 px-3">
      <div className="container" id="about">
        {/* Header */}
        <div className="text-center mb-5 fade-in">
          <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-2 rounded-pill glass-card">
            <FiUser size={16} />
            <span className="fw-medium small">About</span>
          </div>
          <h2 className="fw-bold display-5 mb-3 text-white">Crafting Digital Experiences</h2>
          <p className="text-white-50 fs-5 mx-auto" style={{ maxWidth: "600px" }}>
            Turning ideas into elegant solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="row g-4 mb-5">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="glass-card p-4 rounded-4 fade-in h-100">
              <div className="profile-pic mx-auto mb-4">
                <div className="profile-inner d-flex align-items-center justify-content-center">
                  <img
                    src="/images/portrait.jpg"
                    alt="Profile"
                    className="profile-img"
                />
                </div>
              </div>

              <h3 className="text-center fw-bold mb-3">Mitchell Skelton</h3>
              <p className="text-white-50 text-center mb-4">
                Front-End Developer • UX/UI Designer • Tech Enthusiast
              </p>

              <p className="text-secondary mb-3">
                I'm a Front-End developer who loves building beautiful, functional web applications.
                My journey in tech has been driven by curiosity and a constant desire to learn and improve.
              </p>
              <p className="text-secondary mb-4">
                Whether it's crafting pixel-perfect interfaces or architecting robust web applications,
                I approach every project with dedication and attention to detail.
              </p>

              {/* Social Icons */}
              <div className="d-flex justify-content-center gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-icon d-flex align-items-center justify-content-center rounded-circle fade-in text-white"
                    style={{ animationDelay: `${i * 100}ms` }}
                    aria-label={social.label}
                  >
                    <social.icon size={20}/>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 d-flex flex-column gap-3">
            {skills.map((skill, i) => (
              <div
                key={skill.title}
                className="glass-card p-4 rounded-4 fade-in skill-card"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="d-flex align-items-start gap-3">
                  <div className="icon-box d-flex align-items-center justify-content-center flex-shrink-0">
                    <skill.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2">{skill.title}</h4>
                    <p className="text-white-50 mb-0">{skill.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats Card */}
            <div className="glass-card p-4 rounded-4 fade-in" style={{ animationDelay: "400ms" }}>
              <h5 className="fw-semibold mb-3">By The Numbers</h5>
              <div className="row text-center">
                <div className="col">
                  <div className="fw-bold fs-3 gradient-text">18+</div>
                  <div className="small text-secondary">Projects</div>
                </div>
                <div className="col">
                  <div className="fw-bold fs-3 gradient-text">1+</div>
                  <div className="small text-secondary">Years</div>
                </div>
                <div className="col">
                  <div className="fw-bold fs-3 gradient-text">100%</div>
                  <div className="small text-secondary">Dedicated</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5">
            <h2 className="fw-bold mb-4 text-white text-center fade-in">My Work Experience</h2>
            <div className="d-flex flex-column gap-3">
              {workExperiences.map((work, i) => (
                <div
                  key={work.id}
                  className="glass-card p-4 rounded-4 fade-in work-card"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="d-flex flex-column gap-2">
                    <h4 className="fw-bold mb-1">{work.title}</h4>
                    <div className="d-flex justify-content-between text-white-50 small mb-2">
                      <span>{work.company}</span>
                      <div className="text-end">
                        <div className="d-flex align-items-center gap-1">
                          <FiCalendar size={14} />
                          <span>{work.date}</span>
                        </div>
                        <div className="d-flex align-items-center gap-1 mt-1">
                          <FiMapPin size={14} />
                          <span>{work.locationSelector}, {work.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-white-50 mb-2">{work.desc}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {work.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="badge bg-dark bg-opacity-50 text-light fw-normal fs-6"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Fallback if no work experience found */}
              {workExperiences.length === 0 && (
                <p className="text-center text-white-50">No work experience found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
