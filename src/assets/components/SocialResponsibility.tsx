import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Sustainability.css";

/* ─── DATA — sourced from cdpjp.com/sustainability/society ──────
   human_rights_policy / dei / safety_and_health / regional_development
   ──────────────────────────────────────────────────────────────── */

const DEI_STATS = [
  { value: "Platinum", label: "Kurumin Certification", sub: "Ministry of Health, Labour & Welfare" },
  { value: "Eruboshi", label: "3-Star Certification", sub: "Women's Advancement Promotion Act" },
  { value: "多様性", label: "Diversity Management", sub: "Core corporate strategy" },
  { value: "公平", label: "Equity & Inclusion", sub: "Equal opportunity for all" },
];

const DEI_INITIATIVES = [
  {
    title: "Gender Equality & Women's Advancement",
    description:
      "Ebada Group holds both the Platinum Kurumin (子育てサポート企業) certification and the Eruboshi three-star rating under Japan's Women's Advancement Promotion Act. We provide education programmes, awareness activities, and a workplace culture that enables women to advance into leadership roles while balancing work and family life.",
    icon: "👩‍💼",
  },
  {
    title: "International Worker Integration",
    description:
      "Diversity management at Ebada Group means maximising the contribution of all talent — including foreign national workers, who bring unique skills, international perspectives, and new ideas to our clients. We provide language support, cultural orientation, and dedicated multilingual coordinators to ensure full integration.",
    icon: "🌍",
  },
  {
    title: "Support for Workers with Disabilities",
    description:
      "Ebada Group operates the Dinkle Job Support Centre, a registered disability employment support office designated by Utsunomiya City. We are committed to creating meaningful employment pathways for individuals with disabilities, providing tailored placement support and ongoing workplace accommodation.",
    icon: "🤝",
  },
  {
    title: "Work-Life Balance & Flexible Working",
    description:
      "Recognising that individuals do not all start from the same position, Ebada Group applies an equity-based approach — providing different tools and resources according to each person's circumstances. Flexible working arrangements, childcare and nursing care support, and work-life balance initiatives are core to our inclusive culture.",
    icon: "⚖️",
  },
];

const SAFETY_METRICS = [
  {
    value: "Zero",
    label: "Workplace Injury Target",
    desc: "Zero lost-time injuries and zero occupational illness — our annual safety goal across all sites",
  },
  {
    value: "100%",
    label: "Safety Education",
    desc: "Continuous safety training for all employees, dispatched workers, and business partners",
  },
  {
    value: "5 Pillars",
    label: "Safety Policy Framework",
    desc: "Continuous improvement, legal compliance, safety culture, risk reduction, health promotion",
  },
  {
    value: "Committee",
    label: "Safety & Health Committee",
    desc: "Dedicated committee with hygiene managers in every department, reporting to executive board",
  },
];

const COMMUNITY_PROGRAMS = [
  {
    title: "Regional Revitalisation & Community Development",
    description:
      "Ebada Group actively participates in regional revitalisation initiatives — addressing Japan's population concentration in Tokyo and supporting local industrial communities. We are registered members of the Tochigi SDGs Promotion Enterprise programme and the Utsunomiya SDGs Human Resource Development Platform.",
    icon: "🏘️",
  },
  {
    title: "Sports & Culture Sponsorship",
    description:
      "Ebada Group is an Official Sponsor of Utsunomiya Brex (B.League basketball), supporting local sports culture and community engagement. We actively promote health, teamwork, and community spirit through sports sponsorships across the regions where we operate.",
    icon: "⚽",
  },
  {
    title: "Single-Parent Employment Support",
    description:
      "In partnership with Utsunomiya City, Ebada Group operates a single-parent employment support programme — providing dedicated job matching, career counselling, and flexible employment arrangements for single-parent households re-entering the workforce.",
    icon: "🌱",
  },
  {
    title: "Next-Generation Development & Education",
    description:
      "Ebada Group supports the next generation of workers through vocational education partnerships, pre-employment training programmes, and ongoing qualification support. We believe investing in young talent today is essential to sustaining Japan's industrial workforce tomorrow.",
    icon: "🎓",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */
export default function SocialResponsibility() {
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
          <h1 className="sus-h1 sus-hero__h1">Social Responsibility</h1>
          <p className="sus-hero__p">
            Protecting human rights, building inclusive workplaces, ensuring worker safety, and
            investing in the communities where we operate — these are not aspirations at Ebada Group.
            They are obligations we take seriously every day.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HUMAN RIGHTS POLICY
      ══════════════════════════════════════ */}
      <section
        className={`sus-section ${visible.has("rights") ? "sus--in" : ""}`}
        data-obs="rights"
        ref={obs("rights")}
        style={{ background: "var(--white)" }}
      >
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Human Rights</span>
            <h2 className="sus-h2">Human Rights Policy</h2>
          </div>

          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              background: "var(--off)",
              padding: "3rem",
              borderRadius: "var(--r-lg)",
              borderLeft: "4px solid var(--accent)",
            }}
          >
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Ebada Group is founded on the principle of creating employment opportunities and the
              joy of working for all people. In upholding this, we deeply respect the spirit of
              Article 1 of the Universal Declaration of Human Rights: that all human beings are
              born free and equal in dignity and rights. This Human Rights Policy governs all
              corporate activities and all stakeholders affected by our operations.
            </p>
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Ebada Group respects and upholds the human rights of all employees and all persons
              involved across our supply chain. We provide healthy and safe working environments,
              and we eliminate — without exception — any form of human rights violation including
              harassment, physical punishment, violence, intimidation, forced labour, child labour,
              and human trafficking. We respect worker rights and privacy in all employment
              management activities.
            </p>
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              We recognise and respect diversity in gender, age, race, nationality, ethnicity,
              belief, religion, social status, sexual orientation, disability, physical
              characteristics, and employment type. This policy applies to all executives and
              employees of Ebada Group, and we ask all business partners and associated parties
              to comply with and support these principles.
            </p>

            {/* Policy pillars */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.25rem",
                marginTop: "2rem",
              }}
            >
              {[
                { label: "Scope",              body: "All executives, employees, business partners, and related parties across all Ebada Group operations." },
                { label: "International Norms", body: "We support the UN Global Compact 10 Principles, ILO Declaration on Fundamental Principles and Rights at Work, and the UN Guiding Principles on Business and Human Rights." },
                { label: "Due Diligence",       body: "We have established a human rights due diligence framework to assess and identify human rights risks, and to prevent and mitigate negative impacts." },
                { label: "Remedy",              body: "If a human rights violation is alleged in our operations, we promptly investigate, implement corrective measures, and take action to prevent recurrence." },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--white)",
                    padding: "1.5rem",
                    borderRadius: "var(--r)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <strong
                    style={{
                      display: "block",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.label}
                  </strong>
                  <p style={{ fontSize: "0.88rem", color: "var(--txt-2)", lineHeight: 1.65 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DEI
      ══════════════════════════════════════ */}
      <section
        className={`sus-section ${visible.has("dei") ? "sus--in" : ""}`}
        data-obs="dei"
        ref={obs("dei")}
        style={{ background: "var(--off)" }}
      >
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Diversity & Inclusion</span>
            <h2 className="sus-h2">Diversity, Equity & Inclusion</h2>
            <p className="sus-sh__p">
              Ebada Group pursues diversity management as a core business strategy — maximising
              the capabilities of all talent regardless of background, and building an
              organisational culture where every individual's uniqueness is recognised and valued.
            </p>
          </div>

          {/* Certifications */}
          <div className="sus-stats__grid" style={{ marginTop: "2rem", marginBottom: "3rem" }}>
            {DEI_STATS.map((stat, i) => (
              <div
                key={i}
                className="sus-stat"
                style={{ background: "var(--white)", color: "var(--txt)" }}
              >
                <div className="sus-stat__value" style={{ color: "var(--accent)", fontSize: "1.4rem" }}>
                  {stat.value}
                </div>
                <div className="sus-stat__label" style={{ color: "var(--navy)", fontWeight: 700, fontSize: "0.92rem" }}>
                  {stat.label}
                </div>
                <div style={{ color: "var(--muted)", fontSize: "0.75rem", marginTop: "0.25rem" }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Initiatives */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            {DEI_INITIATIVES.map((initiative, i) => (
              <div
                key={i}
                style={{
                  background: "var(--white)",
                  padding: "2rem",
                  borderRadius: "var(--r-lg)",
                  border: "1px solid var(--border)",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{initiative.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "var(--navy)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.35,
                  }}
                >
                  {initiative.title}
                </h3>
                <p style={{ color: "var(--txt-2)", fontSize: "0.92rem", lineHeight: 1.75 }}>
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SAFETY & HEALTH
      ══════════════════════════════════════ */}
      <section
        className={`sus-section ${visible.has("safety") ? "sus--in" : ""}`}
        data-obs="safety"
        ref={obs("safety")}
        style={{ background: "var(--white)" }}
      >
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Safety & Health</span>
            <h2 className="sus-h2">Occupational Safety & Health</h2>
            <p className="sus-sh__p">
              Ensuring the safety and health of all employees, dispatched workers, and related
              parties is Ebada Group's highest priority in all business activities. Our goal is
              zero workplace injuries and zero occupational illness.
            </p>
          </div>

          {/* 4 metric cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            {SAFETY_METRICS.map((metric, i) => (
              <div
                key={i}
                style={{
                  background: "var(--off)",
                  padding: "2rem",
                  borderRadius: "var(--r-lg)",
                  borderLeft: "3px solid var(--accent)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.1,
                  }}
                >
                  {metric.value}
                </div>
                <div style={{ fontWeight: 600, color: "var(--navy)", marginBottom: "0.35rem", fontSize: "1rem" }}>
                  {metric.label}
                </div>
                <div style={{ color: "var(--txt-2)", fontSize: "0.83rem", lineHeight: 1.55 }}>
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>

          {/* 5 Safety Policy Pillars */}
          <div
            style={{
              marginTop: "3rem",
              maxWidth: "900px",
              margin: "3rem auto 0",
              background: "var(--off)",
              padding: "2.5rem",
              borderRadius: "var(--r-lg)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "var(--navy)",
                marginBottom: "1.5rem",
              }}
            >
              Ebada Group Safety & Health Policy — Five Pillars
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Continuous improvement of the occupational safety and health management system under top management leadership",
                "Full compliance with all applicable laws, regulations, and agreements on occupational safety and health in every region of operation",
                "Ongoing safety education to build a safety-conscious culture throughout the organisation",
                "Identification and elimination of workplace hazards and harmful factors; continuous improvement of the working environment through open internal communication",
                "Continuous support for the mental and physical health and wellbeing of all employees, based on the concept of Well-Being",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "0.85rem 0",
                    color: "var(--txt-2)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    borderBottom: i < 4 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <span
                    style={{
                      color: "var(--white)",
                      background: "var(--accent)",
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      minWidth: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMMUNITY ENGAGEMENT
      ══════════════════════════════════════ */}
      <section
        className={`sus-section ${visible.has("community") ? "sus--in" : ""}`}
        data-obs="community"
        ref={obs("community")}
        style={{ background: "var(--off)" }}
      >
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Community Engagement</span>
            <h2 className="sus-h2">Regional Development & Community</h2>
            <p className="sus-sh__p">
              Ebada Group believes that as a staffing company, we have a direct responsibility to
              support the regions where our workers live and work. Regional revitalisation,
              sports culture, and inclusive employment are at the heart of our community activities.
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
            {COMMUNITY_PROGRAMS.map((program, i) => (
              <div
                key={i}
                style={{
                  background: "var(--white)",
                  padding: "2rem",
                  borderRadius: "var(--r-lg)",
                  border: "1px solid var(--border)",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{program.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "var(--navy)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.35,
                  }}
                >
                  {program.title}
                </h3>
                <p style={{ color: "var(--txt-2)", fontSize: "0.92rem", lineHeight: 1.75 }}>
                  {program.description}
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