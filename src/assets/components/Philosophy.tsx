import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./About.css";
import "./Philosophyextras.css";

/* ─── DATA — sourced from cdpjp.com/company/philosophy ──────── */

// const PRECEPTS = [
//   {
//     icon: "🤝",
//     title: "Integrity",
//     body: "Always be honest, meet every expectation, and earn the trust of every person we work with — workers, clients, and colleagues alike.",
//   },
//   {
//     icon: "⚖️",
//     title: "Fairness & Impartiality",
//     body: "Respect diversity in employment opportunity, and eliminate all forms of misconduct and bias from our professional conduct.",
//   },
//   {
//     icon: "⚡",
//     title: "Speed",
//     body: "Make decisions swiftly and act without hesitation. In a fast-moving industry, the ability to move quickly is a competitive advantage we cultivate every day.",
//   },
//   {
//     icon: "🚀",
//     title: "Challenge",
//     body: "Embrace new stages and adapt boldly to a changing environment. We do not shy away from difficulty — we see it as an invitation to grow.",
//   },
//   {
//     icon: "🤜",
//     title: "Teamwork",
//     body: "Cooperate to achieve shared goals and demonstrate the full strength of the collective. No individual achievement matches what a committed team can accomplish together.",
//   },
//   {
//     icon: "🎓",
//     title: "Professionalism",
//     body: "Aspire to high standards and continue growing as a member of this organization. We are dedicated practitioners who take pride in our craft and in the people we serve.",
//   },
// ];

/* ─── COMPONENT ─────────────────────────────────────────────── */
export default function Philosophy() {
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const refMap = useRef<Map<string, HTMLElement>>(new Map());

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

  const obs = (id: string) => (el: HTMLElement | null) => {
    if (el) refMap.current.set(id, el);
  };

  return (
    <div className="au">
      <Header />

      {/* ══════════════════════════════════════
          CORPORATE SPIRIT — "Employment Creation"
          (社是：雇用創造)
      ══════════════════════════════════════ */}
      <section
        className={`au-section au-phil ${visible.has("phil") ? "au--in" : ""}`}
        data-obs="phil"
        ref={obs("phil")}
        style={{ background: "var(--navy)", paddingTop: "8rem" }}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow au-eyebrow--light">Our Belief System</span>
            <h2 className="au-h2 au-h2--light">Company Philosophy</h2>
            <p className="au-sh__p au-sh__p--light">
              The principles that define who we are, why we exist, and how every member of
              Ebadah Group Japan works and makes decisions each day.
            </p>
          </div>

          <div className="au-phil__layout">
            {/* ── Left: Corporate Spirit & Purpose ── */}
            <div className="au-phil__statement">
              {/* Corporate Spirit Badge */}
              <div className="au-phil__spirit-badge">
                <span className="au-phil__spirit-en">CORPORATE SPIRIT</span>
                <strong className="au-phil__spirit-title">Employment Creation</strong>
              </div>

              <div className="au-phil__quote-mark">"</div>
              <blockquote className="au-phil__quote">
                Creating employment opportunities for all people,<br />
                and creating the joy of working for all people.
              </blockquote>
              <cite className="au-phil__cite">Ebadah Group Japan — Corporate Purpose</cite>

              <p className="au-phil__purpose-body">
                "Employment Creation" is the corporate spirit that Ebadah Group Japan has shared
                among all its employees since its founding — an unwavering axis of judgment that
                guides every decision we make.
              </p>
              <p className="au-phil__purpose-body">
                Our management philosophy presents a clear vision for the company, grounded in
                themes common to our employees, our clients, and the society we serve. Our code
                of conduct defines how each individual should act — shared, understood, and
                practiced as the standard for every professional decision.
              </p>
            </div>

            {/* ── Right: 6 Philosophical Pillars ── */}
            <div className="au-phil__pillars">
              <p className="au-phil__pillars-head">PHILOSOPHY</p>
              {[
                {
                  title: "People First",
                  body: "Every business decision begins with one question: is this good for the people involved? Workers, clients, and our own team are equally valued at every level of this organization.",
                },
                {
                  title: "Long-term Thinking",
                  body: "We resist short-term shortcuts. Building enduring partnerships requires patience, consistency, and a willingness to invest in what is right over what is merely convenient.",
                },
                {
                  title: "Social Responsibility",
                  body: "As a significant employer in Japan's industrial sector, we take seriously our responsibility to support communities, champion diversity, and advance sustainable workforce practices.",
                },
                {
                  title: "Continuous Innovation",
                  body: "The staffing industry is changing faster than ever. We lead that change through technology adoption, process innovation, and a culture that welcomes bold experimentation.",
                },
              ].map((p, i) => (
                <div
                  className="au-phil__pillar"
                  key={i}
                  style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
                >
                  <div className="au-phil__pillar-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
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
          CODE OF CONDUCT — 6 PRECEPTS
          (行動指針)
      ══════════════════════════════════════ */}
     

      {/* ══════════════════════════════════════
          PURPOSE CLOSING STATEMENT
      ══════════════════════════════════════ */}
      {/* <section
        className={`au-section au-purpose-close ${visible.has("close") ? "au--in" : ""}`}
        data-obs="close"
        ref={obs("close")}
        style={{ background: "var(--white)" }}
      >
        <div className="au-wrap">
          <div className="au-purpose-close__inner">
            <div className="au-purpose-close__left">
              <span className="au-eyebrow">Our Purpose</span>
              <h2 className="au-h2">
                Sharing the Joy<br />of Working.
              </h2>
              <p>
                At Ebadah Group Japan, our purpose is not simply a statement on a wall — it is the
                lived experience of every worker we place and every company we support. We measure
                our success not only in placements made, but in careers built, businesses
                strengthened, and communities enriched.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Since our founding in 1987, this purpose has been the constant north star
                guiding our decisions across every business unit, every branch, and every
                interaction we have with the people who trust us.
              </p>
            </div>
            <div className="au-purpose-close__right">
              <div className="au-purpose-close__card">
                <span className="au-purpose-close__card-label">MISSION</span>
                <p>Create employment opportunities for all people and foster the joy of working throughout Japan.</p>
              </div>
              <div className="au-purpose-close__card au-purpose-close__card--accent">
                <span className="au-purpose-close__card-label">VISION</span>
                <p>To be Japan's most trusted workforce solutions partner — recognized for integrity, innovation, and social impact.</p>
              </div>
              <div className="au-purpose-close__card">
                <span className="au-purpose-close__card-label">VALUES</span>
                <p>Integrity · Fairness · Speed · Challenge · Teamwork · Professionalism</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ══════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════ */}
      <section className="au-cta-band">
        <div className="au-wrap au-cta-band__inner">
          <div>
            <h2 className="au-cta-band__h2">Ready to Work with Ebadah Group Japan?</h2>
            <p>
              Whether you're seeking your next career step or building a high-performance
              workforce, our team is here to help.
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