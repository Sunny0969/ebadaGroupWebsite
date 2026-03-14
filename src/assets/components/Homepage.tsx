import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Homepage.css";

const HERO_LEFT = [
  "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80",
  "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
  "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
];

const HERO_CENTER = [
  "https://images.unsplash.com/photo-1492366254240-43affaefc3e3?w=400&q=80",
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80",
  "https://images.unsplash.com/photo-1492366254240-43affaefc3e3?w=400&q=80",
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80",
];

const HERO_RIGHT = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
];

const SERVICES = [
  { icon: "⚙️", title: "Manufacturing Dispatch", desc: "Skilled workers placed in Japan's leading manufacturing facilities with full compliance and ongoing support.", tag: "Core Service" },
  { icon: "🤝", title: "Human Resources & Recruitment", desc: "Direct placement of permanent staff across engineering, operations, and management roles.", tag: "Permanent" },
  { icon: "📋", title: "Business Outsourcing", desc: "End-to-end operational outsourcing to streamline your production and back-office workflows.", tag: "Flexible" },
  { icon: "🔬", title: "Engineer Dispatch", desc: "Specialized technical engineers dispatched for R&D, QA, mechanical, and IT projects.", tag: "Technical" },
  { icon: "🌏", title: "Foreign Employment Support", desc: "Full-cycle support for hiring and integrating international talent into Japanese workplaces.", tag: "Global" },
  { icon: "🔄", title: "Re-employment Support", desc: "Career transition programs helping workers re-enter the workforce with confidence.", tag: "Support" },
];

const STATS = [
  { value: "30+", label: "Years in Business" },
  { value: "50,000+", label: "Total Placements" },
  { value: "1,200+", label: "Active Clients" },
  { value: "96%", label: "Success Rate" },
];

const WHY = [
  { icon: "🏭", title: "Industry Expertise", desc: "Deep specialization in manufacturing, engineering, and technical staffing across all major Japanese industries." },
  { icon: "⚡", title: "Quick Placement", desc: "Our streamlined process ensures candidates are placed 40% faster than industry average." },
  { icon: "📞", title: "Post-Placement Support", desc: "Dedicated account managers provide ongoing support to both clients and placed workers." },
  { icon: "🌐", title: "Nationwide Network", desc: "Offices across Japan's key industrial regions with local expertise and deep relationships." },
];

const NEWS = [
  { date: "Mar 01, 2026", category: "Campaign", title: "Spring Campaign: Digital Gift for New Registrants", img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&q=80" },
  { date: "Feb 17, 2026", category: "Event", title: "Utsunomiya Brex Home Game Ticket Presentation Ceremony", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80" },
  { date: "Feb 05, 2026", category: "Press Release", title: "CDP Japan Expands Operations to Kyushu Region", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80" },
  { date: "Jan 20, 2026", category: "Notice", title: "2026 New Year Greetings from CDP President", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&q=80" },
];

const TESTIMONIALS = [
  { name: "Takashi Yamamoto", position: "Plant Manager", company: "Honda Suppliers Co.", quote: "CDP Japan's dispatch service transformed our production line. The workers were highly skilled and adapted quickly to our environment.", rating: 5 },
  { name: "Sarah Chen", position: "HR Director", company: "Mitsubishi Electric Partner", quote: "The foreign employment support program made our international hiring seamless. CDP handled everything professionally from visa to onboarding.", rating: 5 },
  { name: "Kenji Nakamura", position: "Operations Head", company: "Toyota Manufacturing", quote: "Over 8 years of partnership, CDP has never failed to deliver quality talent when we needed it most. Truly reliable.", rating: 5 },
];

const PARTNERS = ["Toyota", "Honda", "Panasonic", "Hitachi", "Mitsubishi", "Canon", "Fujitsu", "NEC", "Denso", "Yamaha"];

export default function HomePage() {
  const [testSlide, setTestSlide] = useState(0);
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const [counterStarted, setCounterStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  // Handle smooth scrolling with offset for fixed header
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (link) {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const headerHeight = 72; // Header height
            const targetPosition = targetElement.offsetTop - headerHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.getAttribute("data-observe");
            if (id) setVisible((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.12 }
    );
    sectionRefs.current.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCounterStarted(true); }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTestSlide((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const reg = (id: string) => (el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el);
  };

  return (
    <div className="cdp">
      <Header />

      {/* ── HERO ── */}
      <section className="cdp-hero">
        <div className="cdp-hero__cols">
          <div className="cdp-hero__col cdp-hero__col--up">
            {HERO_LEFT.map((src, i) => (
              <div key={i} className="cdp-hero__tile"><img src={src} alt="" loading={i < 2 ? "eager" : "lazy"} /></div>
            ))}
          </div>
          <div className="cdp-hero__col cdp-hero__col--down">
            {HERO_CENTER.map((src, i) => (
              <div key={i} className="cdp-hero__tile"><img src={src} alt="" loading={i < 2 ? "eager" : "lazy"} /></div>
            ))}
          </div>
          <div className="cdp-hero__col cdp-hero__col--up">
            {HERO_RIGHT.map((src, i) => (
              <div key={i} className="cdp-hero__tile"><img src={src} alt="" loading={i < 2 ? "eager" : "lazy"} /></div>
            ))}
          </div>
        </div>

        <div className="cdp-hero__veil" />

        <div className="cdp-hero__content">
          <p className="cdp-hero__eyebrow">Career Development Program</p>
          <h1 className="cdp-hero__h1">
            Sharing the Joy<br />of Working.
          </h1>
          <p className="cdp-hero__lead">
            Japan's trusted partner in manufacturing staffing, engineer dispatch, and workforce solutions — connecting talent with opportunity since 1994.
          </p>
          <div className="cdp-hero__actions">
            <Link to="/job-seekers/listings" className="cdp-btn cdp-btn--white">Find a Job</Link>
            <Link to="/employers/services" className="cdp-btn cdp-btn--ghost">Hire Talent</Link>
          </div>
        </div>

        <div className="cdp-hero__scroll-cue">
          <span>SCROLL</span>
          <div className="cdp-hero__scroll-bar" />
        </div>
      </section>

      {/* ── QUICK SEARCH ── */}
      <section className="cdp-qsearch">
        <div className="cdp-wrap cdp-qsearch__inner">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const category = formData.get('category') as string;
              const location = formData.get('location') as string;
              const type = formData.get('type') as string;
              const params = new URLSearchParams();
              if (category) params.append('category', category);
              if (location) params.append('location', location);
              if (type) params.append('type', type);
              window.location.href = `/job-seekers/listings${params.toString() ? '?' + params.toString() : ''}`;
            }}
            style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}
          >
            <span className="cdp-qsearch__label">Quick Job Search</span>
            <select name="category" className="cdp-sel" defaultValue="">
              <option value="">Category</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Engineering">Engineering</option>
              <option value="Logistics">Logistics</option>
              <option value="IT / Tech">IT / Tech</option>
            </select>
            <select name="location" className="cdp-sel" defaultValue="">
              <option value="">Location</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Osaka">Osaka</option>
              <option value="Nagoya">Nagoya</option>
              <option value="Fukuoka">Fukuoka</option>
            </select>
            <select name="type" className="cdp-sel" defaultValue="">
              <option value="">Type</option>
              <option value="Dispatch">Dispatch</option>
              <option value="Direct Hire">Direct Hire</option>
              <option value="Part-time">Part-time</option>
            </select>
            <button type="submit" className="cdp-btn cdp-btn--primary">Search Jobs →</button>
          </form>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        className={`cdp-section cdp-services ${visible.has("services") ? "is-in" : ""}`}
        data-observe="services"
        ref={reg("services")}
      >
        <div className="cdp-wrap">
          <div className="cdp-sh">
            <span className="cdp-eyebrow">What We Offer</span>
            <h2 className="cdp-sh__h2">Our Services</h2>
            <p className="cdp-sh__p">Comprehensive workforce solutions for Japan's manufacturing and technical industries.</p>
          </div>
          <div className="cdp-services__grid">
            {SERVICES.map((s, i) => (
              <article className="cdp-svc" key={i} style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}>
                <span className="cdp-svc__badge">{s.tag}</span>
                <div className="cdp-svc__icon">{s.icon}</div>
                <h3 className="cdp-svc__h3">{s.title}</h3>
                <p className="cdp-svc__p">{s.desc}</p>
                {/* <a href="#services" className="cdp-svc__more">Learn More →</a> */}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className={`cdp-stats ${counterStarted ? "cdp-stats--go" : ""}`} ref={statsRef}>
        <div className="cdp-wrap cdp-stats__row">
          {STATS.map((s, i) => (
            <div className="cdp-stat" key={i} style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}>
              <span className="cdp-stat__n">{s.value}</span>
              <span className="cdp-stat__l">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHY CDP ── */}
      <section
        id="about"
        className={`cdp-section cdp-why ${visible.has("why") ? "is-in" : ""}`}
        data-observe="why"
        ref={reg("why")}
      >
        <div className="cdp-wrap cdp-why__layout">
          <div className="cdp-why__left">
            <span className="cdp-eyebrow">Why CDP Japan</span>
            <h2 className="cdp-why__h2">Built on Trust.<br />Driven by Results.</h2>
            <p className="cdp-why__body">For over 30 years, CDP Japan has been the staffing partner of choice for Japan's leading manufacturers. Our commitment to quality, speed, and support sets us apart.</p>
            <Link to="/about/overview" className="cdp-btn cdp-btn--primary">Discover Our Story →</Link>
          </div>
          <div className="cdp-why__cards">
            {WHY.map((w, i) => (
              <div className="cdp-why__card" key={i} style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}>
                <span className="cdp-why__ico">{w.icon}</span>
                <div>
                  <h4 className="cdp-why__h4">{w.title}</h4>
                  <p className="cdp-why__cp">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DUAL CTA ── */}
      <section className="cdp-dual">
        <div className="cdp-dual__half cdp-dual__half--a">
          <div className="cdp-dual__img" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80)" }} />
          <div className="cdp-dual__content">
            <span className="cdp-eyebrow cdp-eyebrow--light">For Job Seekers</span>
            <h3 className="cdp-dual__h3">Find Your Next Career Opportunity</h3>
            <p>Browse thousands of manufacturing and engineering positions across Japan.</p>
            <Link to="/job-seekers/listings" className="cdp-btn cdp-btn--white">Browse Jobs →</Link>
          </div>
        </div>
        <div className="cdp-dual__half cdp-dual__half--b">
          <div className="cdp-dual__img" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80)" }} />
          <div className="cdp-dual__content">
            <span className="cdp-eyebrow cdp-eyebrow--light">For Employers</span>
            <h3 className="cdp-dual__h3">Build Your Dream Team</h3>
            <p>Access Japan's largest pool of vetted manufacturing talent with fast placement guaranteed.</p>
            <Link to="/employers/services" className="cdp-btn cdp-btn--white">Request Talent →</Link>
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section
        id="news"
        className={`cdp-section cdp-news ${visible.has("news") ? "is-in" : ""}`}
        data-observe="news"
        ref={reg("news")}
      >
        <div className="cdp-wrap">
          <div className="cdp-sh">
            <span className="cdp-eyebrow">Latest Updates</span>
            <h2 className="cdp-sh__h2">News & Events</h2>
          </div>
          <div className="cdp-news__grid">
            {NEWS.map((n, i) => (
              <article className="cdp-nc" key={i} style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}>
                <div className="cdp-nc__thumb">
                  <img src={n.img} alt={n.title} loading="lazy" />
                  <span className="cdp-nc__cat">{n.category}</span>
                </div>
                <div className="cdp-nc__body">
                  <time className="cdp-nc__date">{n.date}</time>
                  <h3 className="cdp-nc__h3">{n.title}</h3>
                  <Link to="/news" className="cdp-nc__more">Read More →</Link>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/news" className="cdp-btn cdp-btn--outline">View All News →</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className={`cdp-section cdp-testi ${visible.has("testi") ? "is-in" : ""}`}
        data-observe="testi"
        ref={reg("testi")}
      >
        <div className="cdp-wrap">
          <div className="cdp-sh">
            <span className="cdp-eyebrow">Client Stories</span>
            <h2 className="cdp-sh__h2">What Our Partners Say</h2>
          </div>
          <div className="cdp-testi__slider">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`cdp-testi__slide ${i === testSlide ? "cdp-testi__slide--on" : ""}`}>
                <div className="cdp-testi__stars">{"★".repeat(t.rating)}</div>
                <p className="cdp-testi__q">"{t.quote}"</p>
                <div className="cdp-testi__author">
                  <div className="cdp-testi__avatar">{t.name[0]}</div>
                  <div>
                    <strong className="cdp-testi__name">{t.name}</strong>
                    <span className="cdp-testi__role">{t.position}, {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="cdp-testi__dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`cdp-testi__dot ${i === testSlide ? "cdp-testi__dot--on" : ""}`}
                  onClick={() => setTestSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="cdp-partners">
        <div className="cdp-wrap">
          <p className="cdp-partners__label">Trusted by Industry Leaders</p>
          <div className="cdp-partners__reel">
            <div className="cdp-partners__track">
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <span className="cdp-partners__pill" key={i}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}