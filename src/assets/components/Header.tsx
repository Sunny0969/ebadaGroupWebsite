import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import "./Header.css";

const NAV_LINKS = [
  { 
    label: "About Us", 
    href: "/about/overview", 
    sub: [
      { label: "Company Overview", href: "/about/overview" },
      { label: "CEO Message", href: "/about/ceo" },
      { label: "Philosophy", href: "/about/philosophy" },
      { label: "History", href: "/about/history" },
      { label: "Branch Locations", href: "/about/locations" }
    ] 
  },
  { 
    label: "Services", 
    href: "/services/manufacturing", 
    sub: [
      { label: "Manufacturing Dispatch", href: "/services/manufacturing" },
      { label: "Recruitment", href: "/services/recruitment" },
      { label: "Business Outsourcing", href: "/services/outsourcing" },
      { label: "Engineer Dispatch", href: "/services/engineer" },
      { label: "Foreign Employment", href: "/services/foreign" },
      { label: "Re-employment Support", href: "/services/reemployment" }
    ] 
  },
  { 
    label: "For Job Seekers", 
    href: "/job-seekers/listings", 
    sub: [
      { label: "Job Listings", href: "/job-seekers/listings" },
      { label: "How to Apply", href: "/job-seekers/how-to-apply" },
      { label: "Career Resources", href: "/job-seekers/resources" },
      { label: "Register", href: "/job-seekers/register" }
    ] 
  },
  { 
    label: "For Employers", 
    href: "/employers/services", 
    sub: [
      { label: "Services Overview", href: "/employers/services" },
      { label: "Post a Job", href: "/employers/post-job" },
      { label: "Resources", href: "/employers/resources" },
      { label: "Client Portal", href: "/employers/portal" }
    ] 
  },
  { 
    label: "Sustainability", 
    href: "/sustainability/policy", 
    sub: [
      { label: "Policy", href: "/sustainability/policy" },
      { label: "Environment", href: "/sustainability/environment" },
      { label: "Social", href: "/sustainability/social" },
      { label: "Governance", href: "/sustainability/governance" },
      { label: "SDGs", href: "/sustainability/sdgs" }
    ] 
  },
  { 
    label: "News & Events", 
    href: "/news", 
    sub: [
      { label: "News Listings", href: "/news" },
      { label: "Events Calendar", href: "/news/events" }
    ] 
  },
  { 
    label: "Careers", 
    href: "/careers/join", 
    sub: [
      { label: "Join Our Team", href: "/careers/join" },
      { label: "Recruitment Blog", href: "/careers/blog" },
      { label: "Application Process", href: "/careers/process" }
    ] 
  },
];

export default function Header() {
  // const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`cdp-header ${scrolled ? "cdp-header--scrolled" : ""}`}>
      <div className="cdp-wrap cdp-header__inner">
        <Link to="/" className="cdp-logo">
          <span className="cdp-logo__mark">CDP</span>
          <span className="cdp-logo__sub">JAPAN</span>
        </Link>

        <nav className="cdp-nav" role="navigation">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="cdp-nav__item"
              onMouseEnter={() => link.sub && setActiveNav(link.label)}
              onMouseLeave={() => setActiveNav(null)}
            >
              {link.href.startsWith('/') ? (
                <Link to={link.href} className="cdp-nav__link">
                  {link.label}
                  {link.sub && <span className="cdp-nav__chevron">›</span>}
                </Link>
              ) : (
                <a href={link.href} className="cdp-nav__link">
                  {link.label}
                  {link.sub && <span className="cdp-nav__chevron">›</span>}
                </a>
              )}
              {link.sub && (
                <div className={`cdp-dropdown ${activeNav === link.label ? "cdp-dropdown--open" : ""}`}>
                  {link.sub.map((s) => (
                    typeof s === 'string' ? (
                      <a key={s} href="#" className="cdp-dropdown__link">{s}</a>
                    ) : (
                      <Link key={s.label} to={s.href} className="cdp-dropdown__link">{s.label}</Link>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="cdp-header__right">
          <div 
            className="cdp-header__lang"
            onMouseEnter={() => setShowLangDropdown(true)}
            onMouseLeave={() => setShowLangDropdown(false)}
          >
            {/* <button className="cdp-header__lang-btn">
              {language === "ja" ? "日本語" : "English"}
            </button>
            {showLangDropdown && (
              <div className="cdp-dropdown cdp-dropdown--open" style={{ right: 0, left: "auto" }}>
                <button 
                  className="cdp-dropdown__link"
                  onClick={() => { setLanguage("ja"); setShowLangDropdown(false); }}
                  style={{ display: "block", width: "100%", textAlign: "left" }}
                >
                  日本語
                </button>
                <button 
                  className="cdp-dropdown__link"
                  onClick={() => { setLanguage("en"); setShowLangDropdown(false); }}
                  style={{ display: "block", width: "100%", textAlign: "left" }}
                >
                  English
                </button>
              </div>
            )} */}
          </div>
          <Link to="/contact" className="cdp-btn cdp-btn--sm">Contact Us</Link>
          <button className="cdp-burger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="cdp-mobile-nav">
          {NAV_LINKS.map((link) => (
            link.href.startsWith('/') ? (
              <Link key={link.label} to={link.href} className="cdp-mobile-nav__link" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="cdp-mobile-nav__link" onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            )
          ))}
          <Link to="/contact" className="cdp-btn cdp-btn--primary" style={{ marginTop: "1rem" }}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
