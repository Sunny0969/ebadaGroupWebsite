import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Employers.css";

/* ─── DATA — sourced from cdpjp.com/company/strengths & sustainability ── */

const RESOURCES = [
  {
    icon: "🧩",
    title: "Problem-Solving Capability",
    description:
      "Ebadah Group Japan identifies the root causes of your workforce challenges and proposes innovative, effective HR solutions using industry expertise built over years of hands-on manufacturing experience. We continuously track market trends and industry shifts to ensure our advice is always current and actionable.",
    link: "/contact",
    linkText: "Request a Consultation",
  },
  {
    icon: "🎯",
    title: "Recruitment Planning Capability",
    description:
      "We operate high-traffic owned media channels and run multi-channel paid advertising — web ads, SNS campaigns, and job boards — to attract candidates that precisely match your requirements. Our referral and word-of-mouth network is one of our strongest sourcing channels, built on our reputation for caring for our staff.",
    link: "/contact",
    linkText: "Discuss Your Hiring Needs",
  },
  {
    icon: "🤝",
    title: "Dedicated Account Management",
    description:
      "Each client is assigned a dedicated manager or team who handles worker follow-up, training coordination, and full labour management. Through smooth, continuous communication, problems are resolved before they escalate — driving high worker retention and improved on-site productivity.",
    link: "/contact",
    linkText: "Meet Your Account Team",
  },
  {
    icon: "🎓",
    title: "Talent Development Programme",
    description:
      "Ebadah Group Japan prioritises human development. All dispatched staff complete internal pre-assignment training to reach a defined skill level before placement. Ongoing training, e-learning programmes, and qualification support keep workers growing — and reskilling initiatives ensure continued long-term contribution.",
    link: "/contact",
    linkText: "View Training Details",
  },
  {
    icon: "⚖️",
    title: "Compliance Standards",
    description:
      "We maintain the highest compliance standards and enforce full legal adherence across all operations. Ebadah Group Japan holds Privacy Mark certification and actively educates all staff and associates on ethical conduct. We believe compliance is the foundation of trustworthiness and long-term sustainability.",
    link: "/contact",
    linkText: "View Compliance Policy",
  },
  {
    icon: "🌱",
    title: "Sustainability Commitment",
    description:
      "Based on our founding principle of 'Employment Creation', Ebadah Group Japan is committed to contributing to a sustainable society — protecting human rights, promoting diversity, supporting next-generation workers, and advancing women's participation in the workforce. We align our activities with SDGs and international CSR frameworks.",
    link: "/contact",
    linkText: "Read Our Sustainability Policy",
  },
];

/* Unused - preserved for future use */
/*
const ARTICLES = [
  {
    title: "5 Proven Strategies for Reducing Turnover on the Manufacturing Floor",
    category: "Retention",
    date: "March 20, 2025",
    excerpt:
      "High turnover in manufacturing is costly — financially and operationally. This guide draws on Ebadah Group Japan's retention management framework to present five evidence-based strategies that improve worker stability and reduce churn in production environments.",
  },
  {
    title: "2025 Labour Market Trends in Japanese Manufacturing",
    category: "Market Insights",
    date: "March 15, 2025",
    excerpt:
      "Japan's manufacturing sector faces a tightening labour supply, rising wage expectations, and growing demand for foreign worker integration. This quarterly report covers the key trends shaping hiring decisions across Tochigi, Kanto, and Tohoku in 2025.",
  },
  {
    title: "Understanding Japan's Specified Skilled Worker System (特定技能) for Employers",
    category: "Legal Compliance",
    date: "March 10, 2025",
    excerpt:
      "The Specified Skilled Worker programme is one of the most important tools available to Japanese manufacturers facing labour shortages. This guide explains employer obligations, eligible industries, and how Ebadah Group Japan handles end-to-end compliance support.",
  },
  {
    title: "Building an Inclusive Manufacturing Workforce: DEI Best Practices for Japanese Factories",
    category: "Hiring Guides",
    date: "March 5, 2025",
    excerpt:
      "Diversity, Equity & Inclusion (DEI) is no longer optional — it is a competitive advantage. This article shares practical guidance on recruiting and integrating international workers, women, and career-changers into your manufacturing operations, based on real Ebadah Group Japan client experience.",
  },
];
*/

/* ─── COMPONENT ─────────────────────────────────────────────── */
export default function EmployerResources() {
  return (
    <div className="emp">
      <Header />

      {/* ── HERO ── */}
      <section className="emp-hero">
        <div className="emp-wrap">
          <h1 className="emp-h1 emp-hero__h1">Employer Resources</h1>
          <p className="emp-hero__p">
            Tools, guides, and insights from Ebadah Group Japan — helping you build, manage, and
            retain a high-performing workforce across Japan's manufacturing and technical sectors.
          </p>
        </div>
      </section>

      {/* ── 5 STRENGTHS + SUSTAINABILITY AS RESOURCES ── */}
      <section className="emp-section" style={{ background: "var(--white)" }}>
        <div className="emp-wrap">
          <div className="emp-sh">
            <span className="emp-eyebrow">Why Partner with Us</span>
            <h2 className="emp-h2">Our Five Strengths & Commitments</h2>
            <p className="emp-sh__p">
              Ebadah Group Japan's promise to every client: through our five core strengths and an
              unwavering commitment to compliance and sustainability, we contribute to your business
              performance and provide reliable service — consistently, and for the long term.
              Each client is assigned a dedicated manager or team, ensuring focused, drift-free
              support at every stage.
            </p>
          </div>

          <div className="emp-resources__grid">
            {RESOURCES.map((resource, i) => (
              <div key={i} className="emp-resource-card">
                <span className="emp-resource-card__icon">{resource.icon}</span>
                <h3 className="emp-resource-card__title">{resource.title}</h3>
                <p className="emp-resource-card__desc">{resource.description}</p>
                <Link to={resource.link} className="emp-resource-card__link">
                  {resource.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      {/* <section className="emp-section" style={{ background: "var(--off)" }}>
        <div className="emp-wrap">
          <div className="emp-sh">
            <span className="emp-eyebrow">Latest Updates</span>
            <h2 className="emp-h2">Industry News & Insights</h2>
            <p className="emp-sh__p">
              Stay current with the latest workforce trends, legal changes, and hiring best
              practices relevant to Japan's manufacturing and technical industries.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "2rem",
              marginTop: "3rem",
              maxWidth: "900px",
              margin: "3rem auto 0",
            }}
          >
            {ARTICLES.map((article, i) => (
              <div
                key={i}
                style={{
                  background: "var(--white)",
                  padding: "2rem",
                  borderRadius: "var(--r-lg)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1rem",
                    fontSize: "0.85rem",
                    color: "var(--txt-2)",
                  }}
                >
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "var(--navy)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.35,
                  }}
                >
                  {article.title}
                </h3>
                <p
                  style={{
                    color: "var(--txt-2)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  {article.excerpt}
                </p>
                <Link to="/news" style={{ color: "var(--accent)", fontWeight: 600 }}>
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── SUSTAINABILITY STATEMENT BAND ── */}
      <section className="emp-section" style={{ background: "var(--navy)" }}>
        <div className="emp-wrap">
          <div
            style={{
              maxWidth: "820px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            >
              Our Commitment
            </span>
            <h2
              className="emp-h2"
              style={{ color: "var(--white)", marginBottom: "1.5rem" }}
            >
              Sustainability Policy
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1rem",
                lineHeight: 1.85,
                marginBottom: "1rem",
              }}
            >
              Under our founding principle of "Employment Creation" — creating employment
              opportunities for all people, and creating the joy of working for all people —
              Ebadah Group Japan faces the environmental, social, and economic challenges
              confronting international society with sincerity.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1rem",
                lineHeight: 1.85,
                marginBottom: "2rem",
              }}
            >
              Through our business activities, our officers and employees stand united to share
              value with all stakeholders, and to work toward the realisation of a sustainable
              society — a future in which people can continue to work with security and confidence,
              for as long as they choose.
            </p>
            <div
              style={{
                display: "inline-block",
                borderTop: "1px solid rgba(255,255,255,0.15)",
                paddingTop: "1.25rem",
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.85rem",
              }}
            >
              Sustainability Promotion Committee · Ebadah Group Japan Co., Ltd.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}