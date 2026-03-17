import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./About.css";

/* ─── TIMELINE DATA ─────────────────────────────────────────────
   Ebadah Group Japan — founded 2023
   Milestones structured in the style of cdpjp.com/company/history/
   ─────────────────────────────────────────────────────────────── */
const TIMELINE = [
  {
    year: "October 2023",
    title: "Foundation of Ebadah Group Japan",
    desc: "Ebadah Group Japan Co., Ltd. was established in Utsunomiya, Tochigi Prefecture, with an initial capital of ¥10 million. Operations began in manufacturing dispatch and on-site outsourcing services, primarily serving major electronics manufacturers in the Kanto region.",
  },
  {
    year: "September 2024",
    title: "Worker Dispatch License Acquired",
    desc: "Successfully obtained the Worker Dispatch Business license from the Ministry of Health, Labour and Welfare of Japan, enabling the full-scale launch of our manufacturing dispatch division across Tochigi and neighboring prefectures.",
  },
  {
    year: "November 2024",
    title: "Paid Employment Placement License Acquired",
    desc: "Received the Paid Employment Placement Business license, allowing Ebadah Group Japan to operate a full direct-hire recruitment service for permanent and contract positions in manufacturing, engineering, and logistics.",
  },
    {
      year: "January 2025",
      title: "First Branch Office Opened — Tochigi",
      desc: "Opened our first regional branch in Tochigi, expanding our service coverage to the southern industrial corridor and strengthening our response capacity for clients in the automotive supply chain.",
    },
  {
    year: "April 2025",
    title: "Engineer Dispatch Division Launched",
    desc: "Launched a dedicated Engineer Dispatch division to meet growing demand for specialized technical talent in automotive, precision manufacturing, and electronics sectors across the Greater Kanto area.",
  },
  {
    year: "July 2025",
    title: "Foreign Employment Support Program Introduced",
    desc: "Introduced our Foreign Employment Support service, providing end-to-end support for hiring and integrating international workers — including visa guidance, pre-arrival orientation, and Japanese workplace training.",
  },
 
  {
    year: "January 2026",
    title: "Privacy Mark Certification Obtained",
    desc: "Received Privacy Mark certification under Japan's Personal Information Protection framework, reinforcing our commitment to the secure and responsible handling of candidate and client data across all operations.",
  },
  {
    year: "April 2026",
    title: "Re-employment Support Service Launched",
    desc: "Launched a dedicated Re-employment Support program in collaboration with public employment agencies, offering structured career transition support for workers seeking to re-enter Japan's manufacturing and technical workforce.",
  },
 
  {
    year: "October 2026",
    title: "Registered as SDGs Promotion Enterprise",
    desc: "Officially registered as an SDGs Promotion Enterprise by Tochigi Prefecture, recognizing Ebadah Group Japan's ongoing initiatives in diversity employment, environmental responsibility, and community workforce development.",
  },
  {
    year: "March 2027",
    title: "Digital Platform & AI Matching Launch",
    desc: "Launched our next-generation digital candidate portal and AI-assisted matching platform, reducing average placement time by 35% and enabling real-time job alert delivery, digital document submission, and automated onboarding workflows.",
  },
];

/* ─── COMPONENT ──────────────────────────────────────────────── */
export default function History() {
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

      <section
        className={`au-section au-hist ${visible.has("hist") ? "au--in" : ""}`}
        data-obs="hist"
        ref={obs("hist")}
        style={{ paddingTop: "8rem" }}
      >
        <div className="au-wrap">

          {/* Section heading */}
          <div className="au-sh">
            <span className="au-eyebrow">Our Journey</span>
            <h2 className="au-h2">Company History</h2>
            <p className="au-sh__p">
              From our founding in April 2023 to a growing nationwide network — every milestone
              in Ebadah Group Japan's story reflects our commitment to connecting people with
              meaningful work across Japan.
            </p>
          </div>

          {/* Timeline */}
          <div className="au-timeline">
            <div className="au-timeline__spine" />
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className={`au-tl-item ${
                  i % 2 === 0 ? "au-tl-item--left" : "au-tl-item--right"
                }`}
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

      {/* CTA band */}
      <section className="au-cta-band">
        <div className="au-wrap au-cta-band__inner">
          <div>
            <h2 className="au-cta-band__h2">The Journey Continues.</h2>
            <p>
              Ebadah Group Japan is still writing its story — and we'd love for you to be part of
              the next chapter, whether as a client, a candidate, or a future colleague.
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