import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import "./casestudiesSection.css";

export default function CaseStudiesSection() {
  const navigate = useNavigate();
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const res = await fetch(
          "https://wordpress-1541460-5957272.cloudwaysapps.com/wp-json/wp/v2/casestudies?_embed"
        );
        const data = await res.json();

        const mapped = data.map((c) => ({
          id: c.id,
          title: c.acf?.casestudy_title || c.title?.rendered || "Untitled",
          subtitle: c.acf?.casestudy_description || "",
          challenge: c.acf?.challenge || "",
          image: c.acf?.casestudy_image || "",
          tags: c.acf?.tags || [],
          slug: c.slug,
        }));

        setCaseStudies(mapped);
      } catch (err) {
        console.error("Error fetching case studies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  if (loading) {
    return (
      <section className="py-5 px-3 text-center text-light">
        <p>Loading case studies...</p>
      </section>
    );
  }

  return (
    <section className="py-5 px-3 mt-lg-5 mt-0">
      <div className="container" id="casestudies">
        {/* Section Header */}
        <div className="text-center mb-5 fade-in">
          <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-2 rounded-pill glass-card">
            <BookOpen size={16} />
            <span className="fw-medium small">Case Studies</span>
          </div>
          <h2 className="fw-bold display-5 mb-3">How I Solve Problems</h2>
          <p
            className="text-white-50 fw-normal fs-5 mx-auto"
            style={{ maxWidth: "650px" }}
          >
            Deep dives into my development process, challenges faced, and
            solutions implemented
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="row g-4 mb-5">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="col-md-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="fade-in-blur">
                <div
                  className="card case-card hoverCard"
                  onClick={() => navigate(`/case-study/${study.slug}`)}
                  role="button"
                >
                  {/* Image */}
                  <div className="card-img-top position-relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="img-fluid w-100 case-image"
                    />
                    <div className="gradient-overlay"></div>
                  </div>

                  {/* Content */}
                  <div className="card-body">
                    <h3 className="h4 fw-bold mb-2 text-light">
                      {study.title}
                    </h3>
                    <p className="text-white-50 mb-3">{study.subtitle}</p>

                    {study.challenge && (
                      <div className="mb-3">
                        <span className="fw-semibold text-light d-block">
                          The Challenge:
                        </span>
                        <p className="text-white-50 small mb-0">
                          {study.challenge}
                        </p>
                      </div>
                    )}

                    {/* Tags */}
                    {study.tags?.length > 0 && (
                      <div className="mb-3">
                        {study.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="me-2 mb-2 badge bg-dark bg-opacity-50 text-light fw-normal fs-6"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <button className="btn d-flex align-items-center justify-content-center w-100 glass-btn rounded-3 p-2 text-white gap-2">
                      Read Case Study
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
