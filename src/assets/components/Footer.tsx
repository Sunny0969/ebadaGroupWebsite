import { Link } from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="cdp-footer">
      <div className="cdp-wrap">
        <div className="cdp-footer__top">
          <div className="cdp-footer__brand">
            <div className="cdp-logo cdp-logo--light">
              <img 
                src="/Images/Ebada-Group.png" 
                alt="Ebadah Group Logo" 
                className="cdp-logo__img"
                height="100"
                width="auto"
              />
            </div>
            <p className="cdp-footer__tagline">Career Development Program —<br />Sharing the Joy of Working.</p>
            <div className="cdp-footer__socials">
              <a href="https://twitter.com/ebadagroup" target="_blank" rel="noopener noreferrer" className="cdp-footer__social" aria-label="Twitter">𝕏</a>
              <a href="https://linkedin.com/company/ebadagroup" target="_blank" rel="noopener noreferrer" className="cdp-footer__social" aria-label="LinkedIn">in</a>
              <a href="https://facebook.com/ebadagroup" target="_blank" rel="noopener noreferrer" className="cdp-footer__social" aria-label="Facebook">f</a>
              <a href="https://youtube.com/@ebadagroup" target="_blank" rel="noopener noreferrer" className="cdp-footer__social" aria-label="YouTube">▶</a>
            </div>
          </div>
          <nav className="cdp-footer__nav">
            <div className="cdp-footer__col">
              <strong>Company</strong>
              <Link to="/about/overview">About Us</Link>
              <Link to="/about/ceo">CEO Message</Link>
              <Link to="/about/history">History</Link>
              <Link to="/about/locations">Branch Offices</Link>
            </div>
            <div className="cdp-footer__col">
              <strong>Services</strong>
              <Link to="/services/manufacturing">Manufacturing Dispatch</Link>
              <Link to="/services/recruitment">Recruitment</Link>
              <Link to="/services/engineer">Engineer Dispatch</Link>
              <Link to="/services/foreign">Foreign Employment</Link>
            </div>
            <div className="cdp-footer__col">
              <strong>For You</strong>
              <Link to="/job-seekers/listings">Job Seekers</Link>
              <Link to="/employers/services">Employers</Link>
              <Link to="/sustainability/policy">Sustainability</Link>
              <Link to="/careers/join">Join Our Team</Link>
            </div>
            <div className="cdp-footer__col">
              <strong>Contact</strong>
              <div style={{ marginTop: "0.5rem", fontSize: "0.9rem", lineHeight: "1.8" }}>
                <p style={{ marginBottom: "0.5rem" }}>
                  <strong>Office:</strong> <a href="tel:0283416300" style={{ color: "inherit", textDecoration: "none" }}>0283 41 6300</a>
                </p>
                <p style={{ marginBottom: "0.5rem" }}>
                  <strong>Mobile:</strong> <a href="tel:07021818345" style={{ color: "inherit", textDecoration: "none" }}> 0283 41 6300</a>
                </p>
                <p style={{ marginBottom: "0.5rem" }}>
                  <strong>Email:</strong> <a href="mailto:sheikrahmanjp@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>sheikrahmanjp@gmail.com</a>
                </p>
                <p style={{ marginBottom: "0.5rem", fontSize: "0.85rem", opacity: 0.9 }}>
                  2F Tonoike Shukugo Bldg.,<br />
                  2-10-16 Shukugo,<br />
                  Utsunomiya-shi, Tochigi
                </p>
                <p style={{ marginTop: "0.75rem", fontSize: "0.85rem", opacity: 0.9 }}>
                  <strong>Representative Director:</strong><br />
                  RAHMAN SHEIK HABIBUR
                </p>
              </div>
            </div>
          </nav>
        </div>
        <div style={{ marginTop: "3rem", paddingTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <NewsletterSignup variant="footer" />
        </div>
        <div className="cdp-footer__bottom">
          <span>© 2026 Ebadah Group. All rights reserved.</span>
          <div className="cdp-footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
