import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./About.css";

/* ─── DATA ─────────────────────────────────── */

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

const TIMELINE = [
  { year: "1994", title: "Foundation", desc: "CDP Japan was founded in Tokyo with a vision to bridge the gap between skilled workers and Japan's growing manufacturing sector." },
  { year: "1998", title: "First Major Expansion", desc: "Opened regional offices in Osaka and Nagoya, establishing our presence in the industrial heartland of Japan." },
  { year: "2003", title: "Engineer Division Launch", desc: "Launched the Engineer Dispatch division to serve the growing demand for specialized technical talent in automotive and electronics." },
  { year: "2008", title: "Navigating the Global Crisis", desc: "Successfully guided over 1,000 client companies through the global financial downturn with flexible staffing solutions." },
  { year: "2012", title: "Foreign Employment Support", desc: "Introduced our Foreign Employment Support program, pioneering international talent integration in Japanese factories." },
  { year: "2016", title: "Digital Transformation", desc: "Launched our proprietary ATS platform and digital candidate portal, reducing placement time by 40%." },
  { year: "2019", title: "Group Expansion", desc: "Established CDP Group with three subsidiary companies covering logistics, IT, and sustainability consulting." },
  { year: "2022", title: "Nationwide Network Complete", desc: "Completed our nationwide branch network with offices in all major industrial regions, including Kyushu and Tohoku." },
  { year: "2024", title: "30th Anniversary", desc: "Celebrated 30 years of connecting talent with opportunity — 50,000+ placements and counting." },
  { year: "2026", title: "AI-Powered Future", desc: "Integrating AI-powered candidate matching and predictive retention analytics into our core service platform." },
];

const STRENGTHS = [
  { icon: "🏭", title: "Industry Specialization", desc: "30 years of exclusive focus on manufacturing, engineering, and technical staffing means unmatched domain knowledge and client relationships." },
  { icon: "🔍", title: "Rigorous Quality Control", desc: "Every candidate goes through a 7-stage screening process including skills assessment, background check, and behavioral interview before placement." },
  { icon: "💻", title: "Technology Integration", desc: "Our proprietary platform digitizes every step from job matching to onboarding, cutting placement time and eliminating manual errors." },
  { icon: "📈", title: "Client Retention Rate", desc: "96% of our clients renew contracts year-over-year — a testament to consistent delivery and proactive account management." },
  { icon: "🌐", title: "Nationwide Coverage", desc: "47 branches across Japan ensure local expertise, rapid response, and deep community relationships in every industrial region." },
  { icon: "🎓", title: "Post-Placement Support", desc: "Dedicated HR coordinators provide ongoing support for placed workers, reducing attrition and improving long-term performance." },
];

const BRANCHES = [
  { name: "Tokyo Head Office", region: "Kanto", address: "2-5-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005", phone: "03-1234-5678", email: "tokyo@cdpjp.com", manager: "Hiroshi Tanaka", hours: "Mon–Fri 9:00–18:00", lat: 35.6812, lng: 139.7671 },
  { name: "Osaka Branch", region: "Kansai", address: "1-3-2 Umeda, Kita-ku, Osaka 530-0001", phone: "06-2345-6789", email: "osaka@cdpjp.com", manager: "Yuki Yamamoto", hours: "Mon–Fri 9:00–18:00", lat: 34.7024, lng: 135.4959 },
  { name: "Nagoya Branch", region: "Chubu", address: "3-28-12 Meieki, Nakamura-ku, Nagoya 450-0002", phone: "052-345-6789", email: "nagoya@cdpjp.com", manager: "Kenji Suzuki", hours: "Mon–Fri 9:00–18:00", lat: 35.1709, lng: 136.8815 },
  { name: "Fukuoka Branch", region: "Kyushu", address: "1-2-10 Hakata-Ekimae, Hakata-ku, Fukuoka 812-0011", phone: "092-456-7890", email: "fukuoka@cdpjp.com", manager: "Saki Nakamura", hours: "Mon–Fri 9:00–18:00", lat: 33.5902, lng: 130.4202 },
  { name: "Sapporo Branch", region: "Hokkaido", address: "2-1-5 Kita 3-jo, Chuo-ku, Sapporo 060-0003", phone: "011-567-8901", email: "sapporo@cdpjp.com", manager: "Tomoki Ito", hours: "Mon–Fri 9:00–18:00", lat: 43.0618, lng: 141.3545 },
  { name: "Sendai Branch", region: "Tohoku", address: "4-6-1 Ichibancho, Aoba-ku, Sendai 980-0811", phone: "022-678-9012", email: "sendai@cdpjp.com", manager: "Rie Kobayashi", hours: "Mon–Fri 9:00–18:00", lat: 38.2688, lng: 140.8721 },
];

const GROUP_COMPANIES = [
  { name: "CDP Logistics Japan", tag: "Subsidiary", type: "Logistics Staffing", desc: "Specialist dispatch and direct hire services for Japan's warehousing, distribution, and last-mile delivery sectors.", logo: "🚛" },
  { name: "CDP Tech Solutions", tag: "Subsidiary", type: "IT Staffing", desc: "Software engineers, data scientists, and IT infrastructure specialists placed at Japan's leading tech and manufacturing firms.", logo: "💻" },
  { name: "CDP Global Partners", tag: "Affiliate", type: "International Recruitment", desc: "Overseas recruitment and pre-departure training for international workers joining Japanese manufacturing operations.", logo: "🌏" },
  { name: "GreenWork Consulting", tag: "Partner", type: "Sustainability HR", desc: "ESG-aligned workforce strategy consulting, helping manufacturers build sustainable and compliant HR practices.", logo: "🌱" },
];

/* ─── COMPONENT ─────────────────────────────── */
export default function AboutUs() {
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const [activeBranch, setActiveBranch] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [counterOn, setCounterOn] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const refMap = useRef<Map<string, HTMLElement>>(new Map());

  /* Intersection Observer */
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

      {/* ══════════════════════════════════════
          2.1 COMPANY OVERVIEW
      ══════════════════════════════════════ */}
      <section id="section-overview" className="au-hero">
        <div className="au-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
            alt="CDP Japan Office"
          />
          <div className="au-hero__veil" />
        </div>
        <div className="au-wrap au-hero__content">
          {/* <span className="au-eyebrow">About CDP Japan</span> */}
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
        id="section-mission"
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
            {/* <a href="#contact" className="au-btn au-btn--primary" style={{ marginTop: "1.5rem", display: "inline-flex" }}>Learn More →</a> */}
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

      {/* ══════════════════════════════════════
          2.2 CEO / PRESIDENT MESSAGE
      ══════════════════════════════════════ */}
      <section
        id="section-ceo"
        className={`au-section au-ceo ${visible.has("ceo") ? "au--in" : ""}`}
        data-obs="ceo"
        ref={obs("ceo")}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow">Leadership</span>
            <h2 className="au-h2">Message from the President</h2>
          </div>
          <div className="au-ceo__layout">
            <div className="au-ceo__portrait-col">
              <div className="au-ceo__img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt="CDP Japan President"
                />
                <div className="au-ceo__nameplate">
                  <strong>Masato Fujiwara</strong>
                  <span>President & CEO, CDP Japan</span>
                </div>
              </div>
              <div className="au-ceo__signature-wrap">
                <div className="au-ceo__sig-text">Masato Fujiwara</div>
                <span className="au-ceo__sig-role">President & CEO</span>
              </div>
            </div>
            <div className="au-ceo__message">
              <p className="au-ceo__salutation">Dear Valued Partners and Friends,</p>
              <p>In 1994, CDP Japan was founded on a singular conviction: that work is not merely a transaction — it is the foundation of dignity, purpose, and belonging. Three decades later, that conviction is more relevant than ever.</p>
              <p>Japan's manufacturing sector faces profound challenges: an aging workforce, accelerating automation, and the urgent need to welcome and integrate international talent. These are not problems to fear — they are opportunities for companies and individuals who are prepared.</p>
              <p>At CDP Japan, our role is to be that preparation. We invest deeply in understanding each client's unique needs, in screening candidates with genuine rigor, and in providing the post-placement support that ensures every placement becomes a long-term success story.</p>
              <p>As we look ahead to the next 30 years, I am energized by what we are building: an AI-augmented matching platform, an expanded network of international recruitment partners, and a sustainability-led HR framework that we believe will define the future of Japanese staffing.</p>
              <p>Thank you for trusting CDP Japan. We will continue to earn that trust — every day, with every placement, in every region of this extraordinary country.</p>
              <p className="au-ceo__closing">With sincere gratitude,</p>
              <div className="au-ceo__sig-final">
                <div className="au-ceo__sig-text au-ceo__sig-text--lg">Masato Fujiwara</div>
                <span>President & CEO, CDP Japan Co., Ltd.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2.3 PHILOSOPHY
      ══════════════════════════════════════ */}
      <section
        id="section-philosophy"
        className={`au-section au-phil ${visible.has("phil") ? "au--in" : ""}`}
        data-obs="phil"
        ref={obs("phil")}
        style={{ background: "var(--navy)" }}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow au-eyebrow--light">Our Belief System</span>
            <h2 className="au-h2 au-h2--light">Company Philosophy</h2>
            <p className="au-sh__p au-sh__p--light">The principles that define who we are, why we exist, and how we work.</p>
          </div>
          <div className="au-phil__layout">
            <div className="au-phil__statement">
              <div className="au-phil__quote-mark">"</div>
              <blockquote className="au-phil__quote">
                Sharing the joy of working — not just as a tagline, but as our daily commitment to every worker we place and every company we serve.
              </blockquote>
              <cite className="au-phil__cite">CDP Japan Corporate Purpose</cite>
            </div>
            <div className="au-phil__pillars">
              {[
                { title: "People First", body: "Every business decision begins with one question: is this good for the people involved? Workers, clients, and our own team are equally valued." },
                { title: "Long-term Thinking", body: "We resist short-term shortcuts. Building enduring partnerships requires patience, consistency, and a willingness to invest in what's right over what's convenient." },
                { title: "Social Responsibility", body: "As a major employer in Japan's industrial sector, we take seriously our responsibility to support communities, champion diversity, and advance sustainable practices." },
                { title: "Continuous Innovation", body: "The staffing industry is changing faster than ever. We lead that change through technology adoption, process innovation, and a culture of bold experimentation." },
              ].map((p, i) => (
                <div className="au-phil__pillar" key={i} style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                  <div className="au-phil__pillar-num">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h4 className="au-phil__pillar-h4">{p.title}</h4>
                    <p className="au-phil__pillar-p">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2.4 COMPANY HISTORY — TIMELINE
      ══════════════════════════════════════ */}
      <section
        id="section-history"
        className={`au-section au-hist ${visible.has("hist") ? "au--in" : ""}`}
        data-obs="hist"
        ref={obs("hist")}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow">Our Journey</span>
            <h2 className="au-h2">Company History</h2>
            <p className="au-sh__p">30 years of milestones, growth, and unwavering commitment to workforce excellence.</p>
          </div>
          <div className="au-timeline">
            <div className="au-timeline__spine" />
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className={`au-tl-item ${i % 2 === 0 ? "au-tl-item--left" : "au-tl-item--right"}`}
                style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
              >
                <div className="au-tl-item__card">
                  <div className="au-tl-item__year">{item.year}</div>
                  <h3 className="au-tl-item__title">{item.title}</h3>
                  <p className="au-tl-item__desc">{item.desc}</p>
                </div>
                <div className="au-tl-item__dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2.5 OUR STRENGTHS
      ══════════════════════════════════════ */}
      <section
        id="section-strengths"
        className={`au-section au-str ${visible.has("str") ? "au--in" : ""}`}
        data-obs="str"
        ref={obs("str")}
        style={{ background: "var(--off)" }}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow">Why Choose CDP</span>
            <h2 className="au-h2">Our Competitive Strengths</h2>
            <p className="au-sh__p">Six pillars that set CDP Japan apart from every other staffing agency in the industry.</p>
          </div>
          <div className="au-str__grid">
            {STRENGTHS.map((s, i) => (
              <div className="au-strength" key={i} style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
                <div className="au-strength__ico-wrap">
                  <span className="au-strength__ico">{s.icon}</span>
                </div>
                <div className="au-strength__body">
                  <h3 className="au-strength__h3">{s.title}</h3>
                  <p className="au-strength__p">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* accent band */}
          <div className="au-str__band">
            <div className="au-str__band-item">
              <strong>96%</strong>
              <span>Client Renewal Rate</span>
            </div>
            <div className="au-str__band-div" />
            <div className="au-str__band-item">
              <strong>7-Stage</strong>
              <span>Candidate Screening</span>
            </div>
            <div className="au-str__band-div" />
            <div className="au-str__band-item">
              <strong>40% Faster</strong>
              <span>Placement vs Industry Avg</span>
            </div>
            <div className="au-str__band-div" />
            <div className="au-str__band-item">
              <strong>98%</strong>
              <span>Placement Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2.6 BRANCH LOCATIONS
      ══════════════════════════════════════ */}
      <section
        id="section-locations"
        className={`au-section au-branch ${visible.has("branch") ? "au--in" : ""}`}
        data-obs="branch"
        ref={obs("branch")}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow">Our Presence</span>
            <h2 className="au-h2">Branch Locations</h2>
            <p className="au-sh__p">12 offices strategically positioned across Japan's key industrial corridors.</p>
          </div>
          <div className="au-branch__layout">
            {/* Map placeholder with pins */}
            <div className="au-branch__map">
              <div className="au-map-wrap">
                <img
                  src="https://images.unsplash.com/photo-1578592170957-4a1bf9f49e15?w=900&q=80"
                  alt="Japan Map"
                  className="au-map-img"
                />
                <div className="au-map-overlay" />
                {/* SVG pins on the map approximations */}
                {BRANCHES.map((b, i) => {
                  const positions = [
                    { x: "52%", y: "57%" }, // Tokyo
                    { x: "40%", y: "63%" }, // Osaka
                    { x: "44%", y: "60%" }, // Nagoya
                    { x: "28%", y: "74%" }, // Fukuoka
                    { x: "55%", y: "22%" }, // Sapporo
                    { x: "60%", y: "44%" }, // Sendai
                  ];
                  const pos = positions[i] || { x: "50%", y: "50%" };
                  return (
                    <button
                      key={i}
                      className={`au-map-pin ${activeBranch === i ? "au-map-pin--active" : ""}`}
                      style={{ left: pos.x, top: pos.y }}
                      onClick={() => setActiveBranch(i)}
                      title={b.name}
                    >
                      <span className="au-map-pin__dot" />
                      <span className="au-map-pin__label">{b.region}</span>
                    </button>
                  );
                })}
              </div>
              <div className="au-map-legend">
                {BRANCHES.map((b, i) => (
                  <button
                    key={i}
                    className={`au-map-legend__btn ${activeBranch === i ? "au-map-legend__btn--on" : ""}`}
                    onClick={() => setActiveBranch(i)}
                  >
                    {b.region}
                  </button>
                ))}
              </div>
            </div>
            {/* Branch detail card */}
            <div className="au-branch__detail">
              {BRANCHES[activeBranch] && (() => {
                const b = BRANCHES[activeBranch];
                return (
                  <div className="au-bcard" key={activeBranch}>
                    <div className="au-bcard__header">
                      <span className="au-bcard__region">{b.region}</span>
                      <h3 className="au-bcard__name">{b.name}</h3>
                    </div>
                    <ul className="au-bcard__list">
                      <li>
                        <span className="au-bcard__ico">📍</span>
                        <span>{b.address}</span>
                      </li>
                      <li>
                        <span className="au-bcard__ico">📞</span>
                        <a href={`tel:${b.phone}`}>{b.phone}</a>
                      </li>
                      <li>
                        <span className="au-bcard__ico">✉️</span>
                        <a href={`mailto:${b.email}`}>{b.email}</a>
                      </li>
                      <li>
                        <span className="au-bcard__ico">👤</span>
                        <span>Branch Manager: <strong>{b.manager}</strong></span>
                      </li>
                      <li>
                        <span className="au-bcard__ico">🕐</span>
                        <span>{b.hours}</span>
                      </li>
                    </ul>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="au-btn au-btn--primary au-bcard__map-btn"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                );
              })()}
              <div className="au-branch__all-list">
                {BRANCHES.map((b, i) => (
                  <button
                    key={i}
                    className={`au-branch__row ${activeBranch === i ? "au-branch__row--on" : ""}`}
                    onClick={() => setActiveBranch(i)}
                  >
                    <span className="au-branch__row-name">{b.name}</span>
                    <span className="au-branch__row-region">{b.region}</span>
                    <span className="au-branch__row-arrow">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2.7 GROUP COMPANIES
      ══════════════════════════════════════ */}
      <section
        id="section-group"
        className={`au-section au-group ${visible.has("group") ? "au--in" : ""}`}
        data-obs="group"
        ref={obs("group")}
        style={{ background: "var(--off)" }}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow">CDP Group</span>
            <h2 className="au-h2">Group Companies & Partners</h2>
            <p className="au-sh__p">Our ecosystem of specialized subsidiaries and affiliates extends CDP Japan's capabilities across logistics, technology, and global recruitment.</p>
          </div>
          <div className="au-group__grid">
            {GROUP_COMPANIES.map((g, i) => (
              <div className="au-gc" key={i} style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <div className="au-gc__top">
                  <span className="au-gc__logo">{g.logo}</span>
                  <span className={`au-gc__tag au-gc__tag--${g.tag.toLowerCase()}`}>{g.tag}</span>
                </div>
                <h3 className="au-gc__name">{g.name}</h3>
                <span className="au-gc__type">{g.type}</span>
                <p className="au-gc__desc">{g.desc}</p>
                <a href="/contact" className="au-gc__link" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/contact";
                }}>Contact Us →</a>
              </div>
            ))}
          </div>
          <div className="au-group__ecosystem">
            <div className="au-eco__center">
              <span className="au-eco__logo">CDP</span>
              <span className="au-eco__label">Japan</span>
            </div>
            {GROUP_COMPANIES.map((g, i) => (
              <div
                key={i}
                className="au-eco__node"
                style={{
                  "--angle": `${(i * 360) / GROUP_COMPANIES.length}deg`,
                  "--d": `${i * 100}ms`
                } as React.CSSProperties}
              >
                <span>{g.logo}</span>
                <span className="au-eco__node-label">{g.name.split(" ").slice(1).join(" ")}</span>
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