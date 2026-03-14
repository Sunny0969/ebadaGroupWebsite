import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";

export default function NotFound() {
  return (
    <div className="contact">
      <Header />

      <section className="contact-hero" style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%)", minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="contact-hero__content" style={{ textAlign: "center", width: "100%" }}>
          <div style={{ fontSize: "8rem", fontWeight: "700", color: "var(--accent)", marginBottom: "1rem", lineHeight: "1" }}>
            404
          </div>
          <h1 className="contact-h1 contact-h1--light" style={{ marginBottom: "1rem" }}>
            Page Not Found
          </h1>
          <p className="contact-hero__p" style={{ color: "rgba(255,255,255,0.9)", maxWidth: "600px", margin: "0 auto 2rem" }}>
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>
      </section>

      <section className="contact-section" style={{ background: "var(--white)" }}>
        <div className="contact-wrap" style={{ maxWidth: "800px", textAlign: "center" }}>
          <div style={{ marginBottom: "3rem" }}>
            <h2 className="contact-h2" style={{ marginBottom: "1.5rem" }}>What would you like to do?</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
              <Link to="/" className="contact-btn" style={{ display: "block", padding: "1.5rem", background: "var(--accent)", color: "var(--white)" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🏠</div>
                <div style={{ fontWeight: "600" }}>Go to Homepage</div>
              </Link>

              <Link to="/job-seekers/listings" className="contact-btn contact-btn--outline" style={{ display: "block", padding: "1.5rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>💼</div>
                <div style={{ fontWeight: "600" }}>Browse Jobs</div>
              </Link>

              <Link to="/contact" className="contact-btn contact-btn--outline" style={{ display: "block", padding: "1.5rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📞</div>
                <div style={{ fontWeight: "600" }}>Contact Us</div>
              </Link>

              <Link to="/faq" className="contact-btn contact-btn--outline" style={{ display: "block", padding: "1.5rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>❓</div>
                <div style={{ fontWeight: "600" }}>View FAQ</div>
              </Link>
            </div>

            <div style={{ background: "var(--off)", padding: "2rem", borderRadius: "var(--r-lg)", marginBottom: "2rem" }}>
              <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", marginBottom: "1rem", color: "var(--txt)" }}>
                Popular Pages
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <Link to="/about/overview" style={{ color: "var(--accent)", textDecoration: "underline" }}>About Us</Link>
                <Link to="/services/manufacturing" style={{ color: "var(--accent)", textDecoration: "underline" }}>Services</Link>
                <Link to="/employers/services" style={{ color: "var(--accent)", textDecoration: "underline" }}>For Employers</Link>
                <Link to="/sustainability/policy" style={{ color: "var(--accent)", textDecoration: "underline" }}>Sustainability</Link>
                <Link to="/news" style={{ color: "var(--accent)", textDecoration: "underline" }}>News & Events</Link>
                <Link to="/careers/join" style={{ color: "var(--accent)", textDecoration: "underline" }}>Careers</Link>
              </div>
            </div>

            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", textAlign: "left" }}>
              <p style={{ color: "var(--txt-2)", marginBottom: "0.5rem" }}>
                <strong>Need help?</strong> If you believe this is an error, please contact our support team.
              </p>
              <Link to="/support" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                Contact Support →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
