import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/MitchsAU" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mitchell-skelton/" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/mitchsdesign_" },
    { icon: Mail, label: "Email", href: "mailto:mitchellskeltondesign@gmail.com" },
  ];

  return (
    <footer className="footer-section position-relative mt-5 border-top">
      <div className="container py-5">
        <div className="row g-5 mb-4">
          {/* Brand Section */}
          <div className="col-md-8">
            <h3 className="text-white fw-bold">
              Mitchell Skelton
            </h3>
            <p className="text-white-50 small">
              Crafting innovative digital experiences through elegant code and thoughtful design.
            </p>
          </div>

          {/* Social Links */}
          <div className="col-md-4">
            <h4 className="h6 fw-semibold text-white mb-3">Connect</h4>
            <div className="d-flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon d-flex align-items-center justify-content-center"
                    aria-label={social.label}
                  >
                    <Icon className="icon" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 border-top">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p className="small text-white-50 mb-0">
              © {currentYear} Mitchell Skelton. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="footer-bg">
        <div className="footer-circle primary"></div>
        <div className="footer-circle secondary"></div>
      </div>
    </footer>
  );
}
