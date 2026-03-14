import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Sustainability.css";

const GOVERNANCE_PRINCIPLES = [
  {
    title: "Transparency",
    description: "Open communication with stakeholders, clear reporting on performance, and accessible information about our operations and decisions."
  },
  {
    title: "Accountability",
    description: "Clear responsibility structures, regular performance reviews, and mechanisms for addressing concerns and feedback."
  },
  {
    title: "Ethical Conduct",
    description: "Strict adherence to ethical standards, zero tolerance for corruption, and promotion of integrity throughout the organization."
  },
  {
    title: "Stakeholder Engagement",
    description: "Regular consultation with employees, clients, workers, and communities to inform decision-making and ensure diverse perspectives."
  }
];

const COMPLIANCE_AREAS = [
  {
    title: "Labor Law Compliance",
    description: "Full compliance with Japanese labor laws including working hours, wages, safety regulations, and employment contracts. Regular audits and training programs.",
    icon: "⚖️"
  },
  {
    title: "Data Protection",
    description: "GDPR-aligned data protection practices, secure handling of candidate and client information, and regular security assessments.",
    icon: "🔒"
  },
  {
    title: "Anti-Corruption",
    description: "Comprehensive anti-corruption policy, employee training, and zero-tolerance enforcement. Regular compliance reviews and reporting mechanisms.",
    icon: "🚫"
  },
  {
    title: "Financial Compliance",
    description: "Adherence to accounting standards, tax regulations, and financial reporting requirements. External audits and transparent financial practices.",
    icon: "💰"
  }
];

const RISK_MANAGEMENT = [
  {
    category: "Operational Risk",
    description: "Comprehensive safety protocols, quality control systems, and contingency planning to minimize operational disruptions and ensure service continuity.",
    mitigation: "Regular safety audits, employee training, backup systems, and emergency response procedures."
  },
  {
    category: "Compliance Risk",
    description: "Proactive monitoring of regulatory changes, legal compliance reviews, and adaptation of policies to meet evolving requirements.",
    mitigation: "Legal counsel, compliance team, regular training, and automated compliance monitoring systems."
  },
  {
    category: "Reputational Risk",
    description: "Protecting brand reputation through ethical practices, quality service delivery, and transparent communication with stakeholders.",
    mitigation: "Stakeholder engagement, crisis management protocols, media relations, and continuous improvement programs."
  },
  {
    category: "Financial Risk",
    description: "Sound financial management, diversified revenue streams, and prudent financial planning to ensure long-term stability.",
    mitigation: "Financial controls, risk assessment, insurance coverage, and conservative financial practices."
  }
];

export default function Governance() {
  const [visible, setVisible] = useState<Set<string>>(new Set());
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

  const obs = (id: string) => (el: HTMLElement | null) => { if (el) refMap.current.set(id, el); };

  return (
    <div className="sus">
      <Header />

      <section className="sus-hero">
        <div className="sus-wrap">
          <h1 className="sus-h1 sus-hero__h1">Governance</h1>
          <p className="sus-hero__p">Strong governance, ethical practices, and risk management to ensure long-term sustainability and trust.</p>
        </div>
      </section>

      <section className={`sus-section ${visible.has("governance") ? "sus--in" : ""}`} data-obs="governance" ref={obs("governance")} style={{ background: "var(--white)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Corporate Governance</span>
            <h2 className="sus-h2">Governance Structure & Principles</h2>
            <p className="sus-sh__p">Transparent, accountable, and ethical governance practices.</p>
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto", background: "var(--off)", padding: "3rem", borderRadius: "var(--r-lg)", borderLeft: "4px solid var(--accent)", marginBottom: "3rem" }}>
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              CDP Japan maintains a robust corporate governance framework that ensures transparency, accountability, and ethical decision-making at all levels of the organization.
            </p>
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9 }}>
              Our Board of Directors provides strategic oversight, while management implements policies and procedures that align with our values and legal requirements. Regular board meetings, independent audits, and stakeholder engagement ensure effective governance.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
            {GOVERNANCE_PRINCIPLES.map((principle, i) => (
              <div key={i} style={{ background: "var(--white)", padding: "2rem", borderRadius: "var(--r-lg)", border: "1px solid var(--border)", borderTop: "3px solid var(--accent)" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 600, color: "var(--navy)", marginBottom: "0.75rem" }}>
                  {principle.title}
                </h3>
                <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`sus-section ${visible.has("compliance") ? "sus--in" : ""}`} data-obs="compliance" ref={obs("compliance")} style={{ background: "var(--off)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Compliance Policy</span>
            <h2 className="sus-h2">Legal Compliance Framework</h2>
            <p className="sus-sh__p">Comprehensive compliance with all applicable laws and regulations.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
            {COMPLIANCE_AREAS.map((area, i) => (
              <div key={i} style={{ background: "var(--white)", padding: "2rem", borderRadius: "var(--r-lg)", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{area.icon}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 600, color: "var(--navy)", marginBottom: "0.75rem" }}>
                  {area.title}
                </h3>
                <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`sus-section ${visible.has("risk") ? "sus--in" : ""}`} data-obs="risk" ref={obs("risk")} style={{ background: "var(--white)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Risk Management</span>
            <h2 className="sus-h2">Risk Mitigation Strategies</h2>
            <p className="sus-sh__p">Proactive identification and management of risks to protect our business and stakeholders.</p>
          </div>

          <div style={{ display: "grid", gap: "2rem", marginTop: "3rem", maxWidth: "900px", margin: "3rem auto 0" }}>
            {RISK_MANAGEMENT.map((risk, i) => (
              <div key={i} style={{ background: "var(--off)", padding: "2.5rem", borderRadius: "var(--r-lg)", borderLeft: "3px solid var(--accent)" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 600, color: "var(--navy)", marginBottom: "1rem" }}>
                  {risk.category}
                </h3>
                <p style={{ color: "var(--txt-2)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                  {risk.description}
                </p>
                <div style={{ background: "var(--white)", padding: "1.5rem", borderRadius: "var(--r)", marginTop: "1rem" }}>
                  <strong style={{ color: "var(--accent)", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem" }}>
                    Mitigation Strategies
                  </strong>
                  <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                    {risk.mitigation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
