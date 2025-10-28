import React, { useState } from "react";
import { Mail, Send, MapPin, Clock } from "lucide-react";
import emailjs from "emailjs-com";
import "./contact.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "mitchellskeltondesign@gmail.com", href: "mailto:mitchellskeltondesign@gmail.com" },
    { icon: MapPin, label: "Location", value: "Canberra, Australia" },
    { icon: Clock, label: "Response Time", value: "Within 24 hours" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
e.preventDefault();
setIsSubmitting(true);

emailjs.send(
    "service_dn3cm5p",
    "template_u8e2bv6",
    formData,
    "IQjrJrL2lQLGbWJp-"
).then(() => {
    alert("Message sent! Thank you for reaching out.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
}).catch((error) => {
    console.error("Email send error:", error);
    alert("There was an error sending your message. Please try again later.");
    setIsSubmitting(false);
});
};

  return (
    <section className="contact-section py-5 px-3">
      <div className="container mb-5" id="contact">
        {/* Header */}
        <div className="text-center mb-5 fade-in">
          <div className="d-inline-flex align-items-center gap-2 mb-3 px-4 py-2 rounded-pill glass-card">
            <Send size={16} />
            <span className="fw-medium small">Contact</span>
          </div>
          <h2 className="fw-bold display-5 mb-3 text-white">
            Let's Build Something Amazing
          </h2>
          <p className="text-white-50 fs-5 mx-auto" style={{ maxWidth: "600px" }}>
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        {/* Columns - make equal height */}
        <div className="row g-4 align-items-stretch">
          {/* Left Column */}
          <div className="col-lg-5 d-flex flex-column">
            <div className="glass-card p-4 rounded-4 mb-4 fade-in flex-grow-1">
              <h3 className="fw-bold mb-3 fs-4">Get in Touch</h3>
              <p className="text-white-50 mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="d-flex align-items-start gap-3 fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="icon-box d-flex align-items-center justify-content-center rounded-3 mb-2">
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="small text-white-50 mb-1">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="fw-medium text-decoration-none hover-primary">
                        {info.value}
                      </a>
                    ) : (
                      <div className="fw-medium">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-4 rounded-4 fade-in">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="status-dot bg-success"></div>
                <span className="fw-semibold">Available for Projects</span>
              </div>
              <p className="text-white-50 small mb-0">
                I’m open to freelance, contract, and full-time opportunities - let’s connect!
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-7 d-flex">
            <div className="glass-card p-4 rounded-4 fade-in h-100 w-100">
              <form onSubmit={handleSubmit} className="h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="form-control glass-input"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="form-control glass-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3 flex-grow-1">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, or anything else..."
                      rows="9"
                      className="form-control glass-input contact-textarea"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-glass btn-secondary w-100 d-flex align-items-center justify-content-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner-border spinner-border-sm" role="status"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
