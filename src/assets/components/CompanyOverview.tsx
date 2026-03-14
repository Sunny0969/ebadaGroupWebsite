import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./About.css";

const CORE_VALUES = [
  { icon: "🤝", title: "Trust & Integrity", desc: "We build every relationship on honesty, transparency, and a commitment to doing what's right — for our clients, our workers, and our communities." },
  { icon: "⭐", title: "Excellence", desc: "We hold ourselves to the highest standards in every placement, every interaction, and every service we deliver across Japan." },
  { icon: "🌱", title: "Growth Mindset", desc: "We invest in continuous learning — for our employees, the workers we place, and the companies we partner with." },
  { icon: "🌏", title: "Diversity & Inclusion", desc: "We celebrate differences. A diverse workforce is a stronger workforce, and we champion equal opportunity at every level." },
  { icon: "⚡", title: "Agility", desc: "Japan's manufacturing landscape moves fast. We move faster — adapting quickly to meet evolving client and candidate needs." },
  { icon: "💡", title: "Innovation", desc: "From AI-powered matching to digital onboarding, we embrace technology to deliver smarter, faster staffing solutions." },
];

const STATS = [
  { value: "2,400+", label: "Employees Placed Annually" },
  { value: "30+", label: "Years of Experience" },
  { value: "47", label: "Prefectures Covered" },
  { value: "12", label: "Industries Served" },
];

export default function CompanyOverview() {
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const [videoOpen, setVideoOpen] = useState(false);
  const [counterOn, setCounterOn] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const refMap = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.getAttribute("data-obs");
          if (id) setVisible((p) => new Set([...p, id]));
        }
      }),
      { threshold: 0.1 }
    );
    refMap.current.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCounterOn(true); }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const obs = (id: string) => (el: HTMLElement | null) => { if (el) refMap.current.set(id, el); };

  return (
    <div className="au">
      <Header />

      {/* ── HERO ── */}
      <section className="au-hero">
        <div className="au-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
            alt="CDP Japan Office"
          />
          <div className="au-hero__veil" />
        </div>
        <div className="au-wrap au-hero__content">
          <h1 className="au-hero__h1">Connecting People.<br />Building Industry.</h1>
          <p className="au-hero__sub">For over 30 years, CDP Japan has been the trusted staffing partner for manufacturers across Japan — placing skilled workers, engineers, and international talent with precision and care.</p>
          <div className="au-hero__chips">
            <span>Est. 1994</span>
            <span>50,000+ Placements</span>
            <span>47 Prefectures</span>
            <span>12 Industries</span>
          </div>
        </div>
        <div className="au-hero__scroll">
          <span>SCROLL</span>
          <div className="au-hero__scroll-line" />
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ── */}
      <section
        className={`au-section au-mv ${visible.has("mv") ? "au--in" : ""}`}
        data-obs="mv"
        ref={obs("mv")}
      >
        <div className="au-wrap au-mv__grid">
          <div className="au-mv__card au-mv__card--mission">
            <span className="au-mv__icon">🎯</span>
            <h3 className="au-mv__label">Our Mission</h3>
            <p>To connect people with meaningful work opportunities, and companies with skilled talent that drives growth — fostering a Japan where every worker can build a fulfilling career.</p>
          </div>
          <div className="au-mv__card au-mv__card--vision">
            <span className="au-mv__icon">🔭</span>
            <h3 className="au-mv__label">Our Vision</h3>
            <p>To be Japan's most trusted and innovative workforce solutions partner — recognized for our integrity, our people, and our positive impact on industry and society.</p>
          </div>
          <div className="au-mv__card au-mv__card--values">
            <span className="au-mv__icon">💎</span>
            <h3 className="au-mv__label">Our Promise</h3>
            <p>We don't just fill positions — we build lasting partnerships. Every placement is backed by our 30-year commitment to quality, care, and continuous support.</p>
          </div>
        </div>
      </section>

      {/* ── STATISTICS ── */}
      <div
        className={`au-stats ${counterOn ? "au-stats--go" : ""}`}
        ref={statsRef}
      >
        <div className="au-wrap au-stats__row">
          {STATS.map((s, i) => (
            <div className="au-stat" key={i} style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
              <span className="au-stat__n">{s.value}</span>
              <span className="au-stat__l">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── COMPANY INTRO + VIDEO ── */}
      <section
        className={`au-section au-intro ${visible.has("intro") ? "au--in" : ""}`}
        data-obs="intro"
        ref={obs("intro")}
      >
        <div className="au-wrap au-intro__layout">
          <div className="au-intro__text">
            <span className="au-eyebrow">Our Story</span>
            <h2 className="au-h2">Three Decades of Workforce Excellence</h2>
            <p>CDP Japan was born from a simple but powerful belief: that matching the right person to the right job creates ripples of positive change — for individuals, for companies, and for Japanese society as a whole.</p>
            <p>Founded in 1994 by industry veterans who saw a critical gap in manufacturing staffing quality, we built our business on rigorous screening, genuine care for candidates, and uncompromising service to clients.</p>
            <p>Today, with 12 branches nationwide and a team of over 800 HR professionals, we continue to lead Japan's staffing industry through innovation, technology, and an unwavering human touch.</p>
            <a href="#contact" className="au-btn au-btn--primary" style={{ marginTop: "1.5rem", display: "inline-flex" }}>Learn More →</a>
          </div>
          <div className="au-intro__video-wrap">
            <button className="au-video-thumb" onClick={() => setVideoOpen(true)} aria-label="Play introduction video">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="CDP Japan Team"
              />
              <div className="au-video-thumb__overlay" />
              <div className="au-video-thumb__play">
                <span className="au-play-icon">▶</span>
                <span className="au-play-label">Watch Our Story</span>
              </div>
            </button>
            {videoOpen && (
              <div className="au-video-modal" onClick={() => setVideoOpen(false)}>
                <div className="au-video-modal__box" onClick={(e) => e.stopPropagation()}>
                  <button className="au-video-modal__close" onClick={() => setVideoOpen(false)}>✕</button>
                  <div className="au-video-modal__frame">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="CDP Japan Introduction"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section
        className={`au-section au-values ${visible.has("values") ? "au--in" : ""}`}
        data-obs="values"
        ref={obs("values")}
        style={{ background: "var(--off)" }}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow">What Drives Us</span>
            <h2 className="au-h2">Core Values</h2>
            <p className="au-sh__p">These six principles guide every decision we make — from how we screen candidates to how we support our team.</p>
          </div>
          <div className="au-values__grid">
            {CORE_VALUES.map((v, i) => (
              <div className="au-val" key={i} style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
                <span className="au-val__icon">{v.icon}</span>
                <h3 className="au-val__h3">{v.title}</h3>
                <p className="au-val__p">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER BAND ── */}
      <section className="au-cta-band">
        <div className="au-wrap au-cta-band__inner">
          <div>
            <h2 className="au-cta-band__h2">Ready to Work with CDP Japan?</h2>
            <p>Whether you're seeking your next career step or building your workforce, we're here to help.</p>
          </div>
          <div className="au-cta-band__actions">
            <a href="#seekers" className="au-btn au-btn--white">Find a Job</a>
            <a href="#employers" className="au-btn au-btn--ghost">Hire Talent</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
