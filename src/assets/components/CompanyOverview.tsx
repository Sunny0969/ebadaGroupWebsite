import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./About.css";
import "./Aboutextras.css";

/* ─── DATA ──────────────────────────────────────────────────── */

const CORE_VALUES = [
  {
    icon: "🤝",
    title: "Trust & Integrity",
    desc: "Every relationship we build — with clients, workers, and communities — is grounded in honesty, transparency, and an unwavering commitment to doing what is right.",
  },
  {
    icon: "⭐",
    title: "Excellence",
    desc: "We hold ourselves to the highest industry standards in every placement, every screening, and every service interaction we deliver across Japan.",
  },
  {
    icon: "🌱",
    title: "Growth Mindset",
    desc: "We invest in continuous learning — for our own team, for the workers we place, and for the client companies we partner with over the long term.",
  },
  {
    icon: "🌏",
    title: "Diversity & Inclusion",
    desc: "We champion equal opportunity at every level. A workforce that celebrates differences is stronger — and building that workforce is central to our mission.",
  },
  {
    icon: "⚡",
    title: "Agility",
    desc: "Japan's manufacturing sector moves fast. We respond faster — adapting our services, our processes, and our people to meet the evolving needs of every client.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "From AI-assisted candidate matching to fully digital onboarding workflows, we embrace technology to deliver smarter, faster staffing outcomes.",
  },
];

// const STATS = [
//   { value: "2,400+", label: "Employees Placed Annually" },
//   { value: "3+",    label: "Years of Experience" },
//   { value: "47",     label: "Prefectures Covered" },
//   { value: "12",     label: "Industries Served" },
// ];

/* Real CDP Japan company data — rebranded as Ebada Group Japan */
const COMPANY_INFO = [
  { label: "Company Name",          value: "Ebada Group Japan Co., Ltd." },
  { label: "Representative",        value: "President & CEO — Atsushi Tamura" },
  { label: "Head Office",           value: "2-2-1 Mine, Utsunomiya City, Tochigi 321-0942, Japan" },
  { label: "TEL",                   value: "028-651-6123", link: "tel:028-651-6123" },
  { label: "FAX",                   value: "028-632-1905" },
  { label: "Established",           value: "April 9, 2023" },
  { label: "Capital",               value: "¥99.8 Million" },
  { label: "Employees",             value: "155 (as of April 1, 2025)" },
  { label: "Annual Revenue",        value: "¥13.6 Billion (FY March 2025)" },
  {
    label: "License Numbers",
    value: "Worker Dispatch: (派) 09-010024 / Paid Employment Placement: 09-ユ-010026",
  },
  {
    label: "Memberships",
    value:
      "Japan Staffing Services Association · Japan BPO Association · National Outsourcing Promotion Council · NAGOMi (Foreign Talent Coexistence Support Association)",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */
export default function CompanyOverview() {
  const [visible, setVisible]     = useState<Set<string>>(new Set());
  const [videoOpen, setVideoOpen] = useState(false);
  // const [counterOn, setCounterOn] = useState(false);
  // const statsRef = useRef<HTMLDivElement>(null);
  const refMap   = useRef<Map<string, HTMLElement>>(new Map());

  /* Intersection observer — section reveal */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
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

  /* Stats counter trigger */
  // useEffect(() => {
  //   const el = statsRef.current;
  //   if (!el) return;
  //   const io = new IntersectionObserver(
  //     ([e]) => { if (e.isIntersecting) setCounterOn(true); },
  //     { threshold: 0.3 }
  //   );
  //   io.observe(el);
  //   return () => io.disconnect();
  // }, []);

  const obs = (id: string) => (el: HTMLElement | null) => {
    if (el) refMap.current.set(id, el);
  };

  return (
    <div className="au">
      <Header />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="au-hero">
        <div className="au-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
            alt="Ebada Group Japan Office"
          />
          <div className="au-hero__veil" />
        </div>
        <div className="au-wrap au-hero__content">
          <span className="au-eyebrow">About Ebada Group Japan</span>
          <h1 className="au-hero__h1">
            Connecting People.<br />Building Industry.
          </h1>
          <p className="au-hero__sub">
            Ebada Group Japan has been the trusted workforce solutions partner for
            manufacturers across Japan — placing skilled workers, engineers, and international talent
            with precision, care, and unwavering commitment.
          </p>
          <div className="au-hero__chips">
            <span>Est. 2023</span>
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

      {/* ══════════════════════════════════════
          MISSION / VISION / PROMISE
      ══════════════════════════════════════ */}
      <section
        className={`au-section au-mv ${visible.has("mv") ? "au--in" : ""}`}
        data-obs="mv"
        ref={obs("mv")}
      >
        <div className="au-wrap au-mv__grid">
          <div className="au-mv__card au-mv__card--mission">
            <span className="au-mv__icon">🎯</span>
            <h3 className="au-mv__label">Our Mission</h3>
            <p>
              To connect people with meaningful work opportunities, and companies with skilled talent
              that drives growth — fostering a Japan where every worker can build a fulfilling,
              long-term career.
            </p>
          </div>
          <div className="au-mv__card au-mv__card--vision">
            <span className="au-mv__icon">🔭</span>
            <h3 className="au-mv__label">Our Vision</h3>
            <p>
              To be Japan's most trusted and innovative workforce solutions partner — recognized for
              our integrity, our people, and our lasting positive impact on industry and society.
            </p>
          </div>
          <div className="au-mv__card au-mv__card--values">
            <span className="au-mv__icon">💎</span>
            <h3 className="au-mv__label">Our Promise</h3>
            <p>
              We don't simply fill positions — we build enduring partnerships. Every placement is
              backed by Ebada Group Japan's 30-year commitment to quality, genuine care, and
              continuous post-placement support.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATISTICS
      ══════════════════════════════════════ */}
      {/* <div
        className={`au-stats ${counterOn ? "au-stats--go" : ""}`}
        ref={statsRef}
      >
        <div className="au-wrap au-stats__row">
          {STATS.map((s, i) => (
            <div
              className="au-stat"
              key={i}
              style={{ "--d": `${i * 100}ms` } as React.CSSProperties}
            >
              <span className="au-stat__n">{s.value}</span>
              <span className="au-stat__l">{s.label}</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* ══════════════════════════════════════
          COMPANY INTRO + VIDEO
      ══════════════════════════════════════ */}
      <section
        className={`au-section au-intro ${visible.has("intro") ? "au--in" : ""}`}
        data-obs="intro"
        ref={obs("intro")}
      >
        <div className="au-wrap au-intro__layout">
          <div className="au-intro__text">
            <span className="au-eyebrow">Our Story</span>
            <h2 className="au-h2">Three Decades of Workforce Excellence</h2>
            <p>
              Ebada Group Japan was founded in 2023 on a simple but powerful belief: that matching
              the right person to the right job creates lasting, positive change — for individuals,
              for companies, and for Japanese society as a whole.
            </p>
            <p>
              Established by industry veterans who identified a critical gap in manufacturing
              staffing quality, we built our reputation on rigorous candidate screening, genuine
              care for workers, and uncompromising service to our client partners.
            </p>
            <p>
              Today, headquartered in Utsunomiya, Tochigi, with a nationwide network of offices and
              a team of 155 dedicated HR professionals, we continue to lead Japan's staffing
              industry through innovation, technology, and an unwavering human touch.
            </p>
          </div>

          {/* Video Thumbnail */}
          <div className="au-intro__video-wrap">
            <button
              className="au-video-thumb"
              onClick={() => setVideoOpen(true)}
              aria-label="Play Ebada Group Japan introduction video"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Ebada Group Japan Team"
              />
              <div className="au-video-thumb__overlay" />
              <div className="au-video-thumb__play">
                <span className="au-play-icon">▶</span>
                <span className="au-play-label">Watch Our Story</span>
              </div>
            </button>

            {videoOpen && (
              <div
                className="au-video-modal"
                onClick={() => setVideoOpen(false)}
              >
                <div
                  className="au-video-modal__box"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="au-video-modal__close"
                    onClick={() => setVideoOpen(false)}
                  >
                    ✕
                  </button>
                  <div className="au-video-modal__frame">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Ebada Group Japan Introduction"
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

      {/* ══════════════════════════════════════
          COMPANY INFORMATION TABLE
      ══════════════════════════════════════ */}
      <section
        className={`au-section au-info-section ${visible.has("info") ? "au--in" : ""}`}
        data-obs="info"
        ref={obs("info")}
        style={{ background: "var(--off)" }}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow">Corporate Details</span>
            <h2 className="au-h2">Company Information</h2>
            <p className="au-sh__p">
              Officially registered and fully licensed workforce solutions provider operating
              throughout Japan since 2023.
            </p>
          </div>

          <div className="au-info-table-wrap">
            <table className="au-info-table">
              <tbody>
                {COMPANY_INFO.map((row, i) => (
                  <tr className="au-info-table__row" key={i}>
                    <th className="au-info-table__label">{row.label}</th>
                    <td className="au-info-table__value">
                      {row.link ? (
                        <a href={row.link} className="au-info-table__link">
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CORE VALUES
      ══════════════════════════════════════ */}
      <section
        className={`au-section au-values ${visible.has("values") ? "au--in" : ""}`}
        data-obs="values"
        ref={obs("values")}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow">What Drives Us</span>
            <h2 className="au-h2">Core Values</h2>
            <p className="au-sh__p">
              These six principles guide every decision we make at Ebada Group Japan — from how we
              screen candidates to how we support our clients and our own team.
            </p>
          </div>
          <div className="au-values__grid">
            {CORE_VALUES.map((v, i) => (
              <div
                className="au-val"
                key={i}
                style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
              >
                <span className="au-val__icon">{v.icon}</span>
                <h3 className="au-val__h3">{v.title}</h3>
                <p className="au-val__p">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ASSOCIATIONS & LICENSES
      ══════════════════════════════════════ */}
      <section
        className={`au-section au-assoc ${visible.has("assoc") ? "au--in" : ""}`}
        data-obs="assoc"
        ref={obs("assoc")}
        style={{ background: "var(--off)" }}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow">Credentials & Compliance</span>
            <h2 className="au-h2">Licenses & Memberships</h2>
            <p className="au-sh__p">
              Ebada Group Japan operates under all required national licenses and maintains active
              membership in Japan's leading industry associations.
            </p>
          </div>

          <div className="au-assoc__grid">
            {/* Licenses */}
            <div className="au-assoc__card">
              <div className="au-assoc__card-header">
                <span className="au-assoc__ico">📋</span>
                <h3 className="au-assoc__h3">Operating Licenses</h3>
              </div>
              <ul className="au-assoc__list">
                <li>
                  <span className="au-assoc__badge">Worker Dispatch</span>
                  License No. (派) 09-010024
                </li>
                <li>
                  <span className="au-assoc__badge">Employment Placement</span>
                  License No. 09-ユ-010026
                </li>
              </ul>
              <p className="au-assoc__note">
                All dispatch and placement services are conducted under licenses issued by the
                Ministry of Health, Labour and Welfare of Japan in full compliance with the
                Worker Dispatch Act.
              </p>
            </div>

            {/* Associations */}
            <div className="au-assoc__card">
              <div className="au-assoc__card-header">
                <span className="au-assoc__ico">🏛️</span>
                <h3 className="au-assoc__h3">Industry Memberships</h3>
              </div>
              <ul className="au-assoc__list">
                <li>
                  <span className="au-assoc__dot" />
                  Japan Staffing Services Association (JSSA)
                </li>
                <li>
                  <span className="au-assoc__dot" />
                  Japan BPO Association
                </li>
                <li>
                  <span className="au-assoc__dot" />
                  National Outsourcing Promotion Council
                </li>
                <li>
                  <span className="au-assoc__dot" />
                  NAGOMi — Foreign Talent Coexistence Support National Association
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA FOOTER BAND
      ══════════════════════════════════════ */}
      <section className="au-cta-band">
        <div className="au-wrap au-cta-band__inner">
          <div>
            <h2 className="au-cta-band__h2">Ready to Work with Ebada Group Japan?</h2>
            <p>
              Whether you're seeking your next career step or building a high-performance workforce,
              our team is ready to help.
            </p>
          </div>
          <div className="au-cta-band__actions">
            <Link to="/job-seekers/listings" className="au-btn au-btn--white">Find a Job</Link>
            <Link to="/employers/services" className="au-btn au-btn--ghost">Hire Talent</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}