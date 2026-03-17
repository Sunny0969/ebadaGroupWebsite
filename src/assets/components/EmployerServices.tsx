import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Employers.css";

/* ─── DATA — sourced from cdpjp.com/service ─────────────────── */

const SERVICES = [
  {
    icon: "🏭",
    title: "Manufacturing Dispatch",
    description:
      "Secure the right manpower — at the right time, in the right quantity, with the right skills. We respond to your timely production floor requirements with workers who can operate under your direct instruction across all phases of manufacturing activity.",
    benefits: [
      "Just-in-time staffing aligned to your production schedule",
      "Reduces over-hiring risk — scale up or down with demand",
      "Ebadah Group Japan bears payroll, social insurance, and welfare costs",
      "Proprietary retention management to minimise worker turnover",
    ],
  },
  {
    icon: "👔",
    title: "Recruitment (Employment Agency)",
    description:
      "We connect companies seeking talent with highly qualified candidates in real time. Because fees are only charged upon confirmed hire, you eliminate the cost of hiring mismatches. In FY2022, CDP-model placement services achieved 416 confirmed hires.",
    benefits: [
      "Streamlined hiring — only pre-screened candidates reach interview stage",
      "Zero cost until placement is confirmed — no risk of sunk recruitment spend",
      "Confidential hiring for new business ventures without public job postings",
      "Rigorous candidate evaluation: skills, cultural fit, and team compatibility",
    ],
  },
  // {
  //   icon: "💼",
  //   title: "Business Process Outsourcing",
  //   description:
  //     "Delegate non-core factory and office operations to Ebadah Group Japan's managed teams. Our outsourcing model allows your in-house staff to focus entirely on core business functions while we handle execution with accountability.",
  //   benefits: [
  //     "Reduces administrative burden on internal staff",
  //     "Ebadah manages team supervision, quality control, and attendance",
  //     "Flexible scope — from single-line packing to multi-function back office",
  //     "Cost-transparent model with clear SLA-based performance metrics",
  //   ],
  // },
  {
    icon: "⚙️",
    title: "Engineer Dispatch",
    description:
      "Place certified technical engineers — mechanical, electrical, process, and IT — into your R&D, production, and quality divisions. Our engineers pass rigorous technical assessments and are matched precisely to your discipline and project requirements.",
    benefits: [
      "Verified credentials: qualifications, certifications, and work history confirmed",
      "Covers mechanical design, electrical maintenance, CAD, process engineering",
      "Project-based or long-term engagement — flexible contract structure",
      "Strict confidentiality protocols for R&D and proprietary projects",
    ],
  },
  {
    icon: "🌍",
    title: "Foreign Employment Support",
    description:
      "A complete one-stop service for hiring and integrating international workers under Japan's Technical Intern Training (技能実習) and Specified Skilled Worker (特定技能) programmes. We manage compliance, coordination, and post-arrival support end-to-end.",
    benefits: [
      "One-stop support: interviews, visas, language, daily life, and attendance management",
      "Partners only with carefully vetted supervising organisations for full compliance",
      "Pre-departure training covering Japanese language and workplace culture",
      "Ongoing multilingual coordinator support after placement begins",
    ],
  },
  {
    icon: "🔄",
    title: "Re-employment Support",
    description:
      "A structured programme helping workers — particularly those 40 and older — return to stable employment. We provide personalised career counselling, skills refresher training, and direct placement coordination with our client network.",
    benefits: [
      "Individually tailored career counselling and job matching",
      "Skills enhancement programmes aligned to current industry requirements",
      "Placement support across manufacturing, logistics, and office sectors",
      "Ongoing follow-up after placement to ensure long-term stability",
    ],
  },
];

const SUCCESS_STORIES = [
  {
    icon: "🏆",
    title: "Rapid Scale-up for New Production Line",
    client: "Major Automotive Parts Manufacturer — Tochigi",
    challenge:
      "A client needed 150 production workers within three weeks to staff a newly commissioned automotive assembly line, with no existing pool of pre-screened candidates.",
    solution:
      "Ebadah Group Japan activated a targeted cross-prefecture recruitment drive across Tochigi, Saitama, and Ibaraki, conducting accelerated 7-stage screening and onboarding in parallel with factory safety induction.",
    result:
      "150 workers placed in 17 days. All met the client's skills requirements. Zero safety incidents in the first 90 days. 94% of workers renewed their contracts after the initial dispatch period.",
    // metrics: [
    //   { value: "17 Days", label: "Time to Fill" },
    //   { value: "94%", label: "Contract Renewal Rate" },
    //   { value: "0", label: "Safety Incidents" },
    // ],
  },
  {
    icon: "⭐",
    title: "Confidential Direct Hire — Technical Manager",
    client: "Precision Manufacturing Company — Oyama",
    challenge:
      "A client required a bilingual Production Technology Manager with 10+ years of experience in precision machining, without disclosing the vacancy publicly to avoid alerting competitors.",
    solution:
      "Leveraged Ebadah Group Japan's private candidate database and professional network to identify and approach 6 qualified passive candidates. Full process managed under strict confidentiality from search to offer.",
    result:
      "Position filled in 5 weeks with zero public advertising. The placed candidate led a process improvement initiative that reduced line downtime by 22% within six months.",
    metrics: [
      { value: "5 Weeks", label: "Time to Fill" },
      { value: "6", label: "Qualified Candidates Presented" },
      { value: "22%", label: "Downtime Reduction" },
    ],
  },
  {
    icon: "🌏",
    title: "Foreign Worker Integration — Specified Skilled Worker Programme",
    client: "Food Processing Plant — Kanazawa",
    challenge:
      "A client sought to hire 30 Specified Skilled Workers from Vietnam and Indonesia for production roles, but lacked the internal capacity to manage visa procedures, compliance obligations, and post-arrival support.",
    solution:
      "Ebadah Group Japan provided full one-stop support: overseas recruitment coordination, supervising organisation selection, visa documentation, pre-departure Japanese language training, and on-site multilingual coordinator assignment after arrival.",
    result:
      "30 workers placed and fully onboarded within the client's timeline. 100% visa approval rate. Worker retention at 12 months: 92%. Client renewed the programme for a further 20 placements.",
    metrics: [
      { value: "100%", label: "Visa Approval Rate" },
      { value: "92%", label: "12-Month Retention" },
      { value: "30 Workers", label: "Placed On Schedule" },
    ],
  },
];

const INDUSTRIES = [
  { icon: "🚗", name: "Automotive",         desc: "Assembly lines, quality control, press & welding, component inspection" },
  { icon: "📱", name: "Electronics",         desc: "Component assembly, clean-room operations, circuit board testing, R&D" },
  { icon: "🏗️", name: "Precision Machinery", desc: "CNC operation, die casting, moulding, mechanical maintenance" },
  { icon: "⚙️", name: "Heavy Industry",      desc: "Steel, metalwork, large-scale production, equipment operation" },
  { icon: "📦", name: "Logistics",           desc: "Warehouse operations, forklift, picking & packing, inventory management" },
  { icon: "🧪", name: "Chemicals",           desc: "Process operations, safety-critical environments, laboratory support" },
  { icon: "🍱", name: "Food Processing",     desc: "Production line, sanitary environments, packaging, inspection" },
  { icon: "💻", name: "IT & Engineering",    desc: "Software engineers, CAD designers, infrastructure, technical support" },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */
export default function EmployerServices() {
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
    <div className="emp">
      <Header />

      {/* ── HERO ── */}
      <section className="emp-hero">
        <div className="emp-wrap">
          <h1 className="emp-h1 emp-hero__h1">Workforce Solutions for Employers</h1>
          <p className="emp-hero__p">
            Partner with Ebadah Group Japan to find the right talent, scale your workforce, and
            drive sustainable business growth. As a licensed worker dispatch and paid employment
            placement agency, we cover every staffing need — from production floor to executive
            suite.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        className={`emp-section ${visible.has("services") ? "emp--in" : ""}`}
        data-obs="services"
        ref={obs("services")}
        style={{ background: "var(--white)" }}
      >
        <div className="emp-wrap">
          <div className="emp-sh">
            <span className="emp-eyebrow">Our Services</span>
            <h2 className="emp-h2">Comprehensive Workforce Solutions</h2>
            <p className="emp-sh__p">
              Ebadah Group Japan operates as a comprehensive human resources services company,
              covering a wide range of staffing needs across manufacturing, engineering, and
              business operations — with customised solutions for every client.
            </p>
          </div>

          <div className="emp-services__grid">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className="emp-service-card"
                style={{ "--d": `${i * 100}ms` } as React.CSSProperties}
              >
                <span className="emp-service-card__icon">{service.icon}</span>
                <h3 className="emp-service-card__title">{service.title}</h3>
                <p className="emp-service-card__desc">{service.description}</p>
                <ul className="emp-service-card__benefits">
                  {service.benefits.map((benefit, j) => (
                    <li key={j}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ── */}
      <section
        className={`emp-section ${visible.has("stories") ? "emp--in" : ""}`}
        data-obs="stories"
        ref={obs("stories")}
        style={{ background: "var(--off)" }}
      >
        <div className="emp-wrap">
          <div className="emp-sh">
            <span className="emp-eyebrow">Client Success</span>
            <h2 className="emp-h2">Real Results, Real ROI</h2>
            <p className="emp-sh__p">
              How Ebadah Group Japan has helped companies across Japan solve their most
              challenging workforce problems — with measurable outcomes.
            </p>
          </div>

          <div className="emp-stories__grid">
            {SUCCESS_STORIES.map((story, i) => (
              <div key={i} className="emp-story">
                <div className="emp-story__header">
                  <span className="emp-story__icon">{story.icon}</span>
                  <div>
                    <h3 className="emp-story__title">{story.title}</h3>
                    <div className="emp-story__client">{story.client}</div>
                  </div>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "var(--accent)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Challenge
                  </strong>
                  <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.7, marginTop: "0.5rem" }}>
                    {story.challenge}
                  </p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "var(--accent)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Solution
                  </strong>
                  <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.7, marginTop: "0.5rem" }}>
                    {story.solution}
                  </p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "var(--accent)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Result
                  </strong>
                  <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.7, marginTop: "0.5rem" }}>
                    {story.result}
                  </p>
                </div>
                {/* <div className="emp-story__metric">
                  {story.metrics.map((metric, j) => (
                    <div key={j} className="emp-story__metric-item">
                      <div className="emp-story__metric-value">{metric.value}</div>
                      <div className="emp-story__metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section
        className={`emp-section ${visible.has("industries") ? "emp--in" : ""}`}
        data-obs="industries"
        ref={obs("industries")}
        style={{ background: "var(--white)" }}
      >
        <div className="emp-wrap">
          <div className="emp-sh">
            <span className="emp-eyebrow">Industry Specialisations</span>
            <h2 className="emp-h2">Industries We Serve</h2>
            <p className="emp-sh__p">
              Ebadah Group Japan brings deep expertise across Japan's key industrial sectors —
              combining long-term client relationships with up-to-date knowledge of each
              sector's skills requirements and labour market conditions.
            </p>
          </div>

          <div className="emp-industries__grid">
            {INDUSTRIES.map((industry, i) => (
              <div key={i} className="emp-industry">
                <span className="emp-industry__icon">{industry.icon}</span>
                <div className="emp-industry__name">{industry.name}</div>
                <div className="emp-industry__desc">{industry.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="emp-section"
        style={{ background: "var(--navy)", color: "var(--white)", textAlign: "center" }}
      >
        <div className="emp-wrap">
          <h2 className="emp-h2" style={{ color: "var(--white)", marginBottom: "1.5rem" }}>
            Ready to Build Your Workforce?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1.1rem",
              marginBottom: "2rem",
              maxWidth: "700px",
              margin: "0 auto 2rem",
            }}
          >
            Tell us your hiring needs and an Ebadah Group Japan consultant will respond within
            one business day with a tailored proposal.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/employers/post-job"     className="emp-btn emp-btn--primary">Post a Job</Link>
            <Link to="/employers/consultation" className="emp-btn emp-btn--ghost">Request Consultation</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}