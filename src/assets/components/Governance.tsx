import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Sustainability.css";

/* ─── DATA — sourced from cdpjp.com/sustainability/governance ───
   governance/policy  +  governance/compliance
   ─────────────────────────────────────────────────────────────── */

const GOVERNANCE_PRINCIPLES = [
  {
    title: "Transparent Decision-Making",
    description:
      "Ebadah Group prioritises highly transparent decision-making. Through the disclosure of information and data, and open communication with stakeholders, we clearly explain the processes and reasons behind our decisions — building trust and ensuring the validity of all sustainability-related choices.",
  },
  {
    title: "Effective Corporate Governance",
    description:
      "We adhere to sound corporate governance principles — ensuring the independence and diversity of leadership, fulfilling oversight responsibilities appropriately, and establishing specialist committees to address sustainability issues. We strive to enable all internal stakeholders to participate actively in governance.",
  },
  {
    title: "Risk Management & Compliance",
    description:
      "Ebadah Group has established a risk management framework to assess and manage sustainability-related risks appropriately — covering risk identification, evaluation, countermeasure design, and monitoring. We implement compliance programmes that ensure full legal adherence and thorough ethical conduct.",
  },
  {
    title: "Stakeholder Co-creation",
    description:
      "Our governance philosophy positions sustainability as a strategic organisational objective — pursued through active collaboration with all stakeholders: employees, clients, placed workers, business partners, and local communities.",
  },
];

const COMPLIANCE_AREAS = [
  {
    title: "Labour Law Compliance",
    description:
      "As a licensed staffing agency, Ebadah Group is fully committed to compliance with the Labour Standards Act (労働基準法), the Worker Dispatch Act (労働者派遣法), and all related employment regulations. We require all employees to adhere strictly to applicable laws and rules, and we work to eliminate any form of violation.",
    icon: "⚖️",
  },
  {
    title: "Personal Information Protection",
    description:
      "Ebadah Group handles the personal information of clients, placed workers, and candidates with the utmost care and respect for privacy. We implement appropriate security measures to prevent unauthorised access, loss, destruction, or alteration of personal data. We hold Privacy Mark certification in recognition of this commitment.",
    icon: "🔒",
  },
  {
    title: "Ethical Conduct",
    description:
      "Ebadah Group demands fair and sincere conduct toward society from all officers and employees. We educate our team on ethics and social responsibility, and we pursue social trust through the consistent practice of ethical behaviour in every business activity.",
    icon: "🤝",
  },
  {
    title: "Environmental Consideration",
    description:
      "Ebadah Group operates with consideration for environmental protection, aiming to minimise the environmental impact of all business activities. We comply fully with environmental laws and regulations, and actively pursue energy conservation, recycling, and other environmental protection initiatives.",
    icon: "🌱",
  },
  {
    title: "Social Responsibility",
    description:
      "We place the highest importance on contributing to society and fulfilling our corporate social responsibilities. This includes supporting employee volunteer activities, engaging in regional contribution initiatives, and delivering services that respond to genuine social needs.",
    icon: "🏘️",
  },
  {
    title: "Sound Management",
    description:
      "Ebadah Group pursues sound management practices to earn the trust of clients and all stakeholders, and to achieve sustainable growth. This means establishing appropriate internal control systems, enforcing rigorous risk management, and maintaining the integrity of all financial and operational practices.",
    icon: "📋",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */
export default function Governance() {
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
    <div className="sus">
      <Header />

      {/* ── HERO ── */}
      <section className="sus-hero">
        <div className="sus-wrap">
          <h1 className="sus-h1 sus-hero__h1">Governance</h1>
          <p className="sus-hero__p">
            Ebadah Group recognises the critical importance of governance in realising a sustainable
            future — providing the framework to ensure organisational sustainability, transparency,
            and accountability in everything we do.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CORPORATE GOVERNANCE
      ══════════════════════════════════════ */}
      <section
        className={`sus-section ${visible.has("governance") ? "sus--in" : ""}`}
        data-obs="governance"
        ref={obs("governance")}
        style={{ background: "var(--white)" }}
      >
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Corporate Governance</span>
            <h2 className="sus-h2">Governance Philosophy</h2>
            <p className="sus-sh__p">
              Ebadah Group's governance philosophy positions sustainability as a core strategic
              objective — taking responsibility for environmental impacts and social challenges,
              and pursuing management that consistently considers long-term sustainability.
            </p>
          </div>

          {/* Intro statement */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto 3rem",
              background: "var(--off)",
              padding: "3rem",
              borderRadius: "var(--r-lg)",
              borderLeft: "4px solid var(--accent)",
            }}
          >
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Ebadah Group recognises governance as an essential framework for ensuring
              organisational sustainability with an emphasis on transparency and accountability.
              Our governance structure reflects our commitment to responsible management — with
              clear leadership, proactive risk management, and open engagement with every
              stakeholder group.
            </p>
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9 }}>
              The Sustainability Promotion Committee, established under our management council,
              is responsible for overseeing the implementation of our governance policies and
              monitoring progress across all sustainability-related activities.
            </p>
          </div>

          {/* 4 Governance Principles */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {GOVERNANCE_PRINCIPLES.map((principle, i) => (
              <div
                key={i}
                style={{
                  background: "var(--white)",
                  padding: "2rem",
                  borderRadius: "var(--r-lg)",
                  border: "1px solid var(--border)",
                  borderTop: "3px solid var(--accent)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "var(--navy)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {principle.title}
                </h3>
                <p style={{ color: "var(--txt-2)", fontSize: "0.92rem", lineHeight: 1.75 }}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPLIANCE POLICY
      ══════════════════════════════════════ */}
      <section
        className={`sus-section ${visible.has("compliance") ? "sus--in" : ""}`}
        data-obs="compliance"
        ref={obs("compliance")}
        style={{ background: "var(--off)" }}
      >
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Compliance Policy</span>
            <h2 className="sus-h2">Corporate Compliance Framework</h2>
            <p className="sus-sh__p">
              As a licensed worker dispatch and employment placement agency, Ebadah Group's mission
              is to comply fully with the Labour Standards Act, the Worker Dispatch Act, and all
              applicable laws and business ethics — fulfilling our social responsibilities and
              contributing positively to society through our business activities.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            {COMPLIANCE_AREAS.map((area, i) => (
              <div
                key={i}
                style={{
                  background: "var(--white)",
                  padding: "2rem",
                  borderRadius: "var(--r-lg)",
                  border: "1px solid var(--border)",
                }}
              >
                <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{area.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--navy)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.35,
                  }}
                >
                  {area.title}
                </h3>
                <p style={{ color: "var(--txt-2)", fontSize: "0.9rem", lineHeight: 1.75 }}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}