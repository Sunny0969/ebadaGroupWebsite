import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="cdp-footer">
      <div className="cdp-wrap">
        <div className="cdp-footer__top">
          <div className="cdp-footer__brand">
            <div className="cdp-logo cdp-logo--light">
              <span className="cdp-logo__mark">CDP</span>
              <span className="cdp-logo__sub cdp-logo__sub--light">JAPAN</span>
            </div>
            <p className="cdp-footer__tagline">Career Development Program —<br />Sharing the Joy of Working.</p>
            <div className="cdp-footer__socials">
              {["𝕏", "in", "f", "▶"].map((s, i) => (
                <a key={i} href="#" className="cdp-footer__social">{s}</a>
              ))}
            </div>
          </div>
          <nav className="cdp-footer__nav">
            <div className="cdp-footer__col">
              <strong>Company</strong>
              <Link to="/about">About Us</Link>
              <a href="#">CEO Message</a>
              <a href="#">History</a>
              <a href="#">Branch Offices</a>
            </div>
            <div className="cdp-footer__col">
              <strong>Services</strong>
              <a href="#">Manufacturing Dispatch</a>
              <a href="#">Recruitment</a>
              <a href="#">Engineer Dispatch</a>
              <a href="#">Foreign Employment</a>
            </div>
            <div className="cdp-footer__col">
              <strong>For You</strong>
              <a href="#">Job Seekers</a>
              <a href="#">Employers</a>
              <a href="#">Sustainability</a>
              <a href="#">Join Our Team</a>
            </div>
            <div className="cdp-footer__col">
              <strong>Contact</strong>
              <a href="#">Head Office</a>
              <a href="#">Branch Locations</a>
              <a href="#">FAQ</a>
              <a href="#">Support</a>
            </div>
          </nav>
        </div>
        <div className="cdp-footer__bottom">
          <span>© 2026 CDP Japan Co., Ltd. All rights reserved.</span>
          <div className="cdp-footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
