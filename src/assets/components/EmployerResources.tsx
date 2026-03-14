import Header from "./Header";
import Footer from "./Footer";
import "./Employers.css";

const RESOURCES = [
  {
    icon: "📋",
    title: "Hiring Guides",
    description: "Best practices for manufacturing recruitment, interview techniques, and candidate evaluation. Comprehensive guides tailored for Japanese workplace culture.",
    link: "#",
    linkText: "Download Guides"
  },
  {
    icon: "📊",
    title: "Market Insights",
    description: "Industry trends, salary benchmarks, and labor market analysis. Quarterly reports on hiring trends and workforce dynamics in Japan.",
    link: "#",
    linkText: "View Reports"
  },
  {
    icon: "⚖️",
    title: "Legal Compliance",
    description: "Labor law updates, regulations, and compliance guidelines. Stay informed about changes in Japanese employment law and regulations.",
    link: "#",
    linkText: "Read Updates"
  },
  {
    icon: "💼",
    title: "Retention Strategies",
    description: "Employee engagement tips, retention best practices, and strategies for building long-term workforce stability. Reduce turnover and improve satisfaction.",
    link: "#",
    linkText: "Learn More"
  },
  {
    icon: "🎯",
    title: "Recruitment Templates",
    description: "Job description templates, interview question banks, and evaluation forms. Ready-to-use templates for efficient hiring processes.",
    link: "#",
    linkText: "Access Templates"
  },
  {
    icon: "📞",
    title: "HR Consulting",
    description: "Schedule a consultation with our HR experts for personalized advice on workforce planning, talent acquisition, and organizational development.",
    link: "#",
    linkText: "Book Consultation"
  }
];

const ARTICLES = [
  {
    title: "5 Strategies for Reducing Manufacturing Turnover",
    category: "Retention",
    date: "March 20, 2024",
    excerpt: "Learn proven strategies to improve employee retention in manufacturing environments and reduce costly turnover."
  },
  {
    title: "2024 Labor Market Trends in Japanese Manufacturing",
    category: "Market Insights",
    date: "March 15, 2024",
    excerpt: "Key trends shaping the manufacturing labor market, including skills demand, salary movements, and regional variations."
  },
  {
    title: "Understanding New Labor Law Changes in Japan",
    category: "Legal Compliance",
    date: "March 10, 2024",
    excerpt: "Important updates to Japanese labor regulations and how they affect your hiring and employment practices."
  },
  {
    title: "Building a Diverse Manufacturing Workforce",
    category: "Hiring Guides",
    date: "March 5, 2024",
    excerpt: "Best practices for recruiting and integrating diverse talent, including international workers, into your manufacturing operations."
  }
];

export default function EmployerResources() {
  return (
    <div className="emp">
      <Header />

      <section className="emp-hero">
        <div className="emp-wrap">
          <h1 className="emp-h1 emp-hero__h1">Employer Resources</h1>
          <p className="emp-hero__p">Tools, guides, and insights to help you build and manage a successful workforce in Japan.</p>
        </div>
      </section>

      <section className="emp-section" style={{ background: "var(--white)" }}>
        <div className="emp-wrap">
          <div className="emp-sh">
            <span className="emp-eyebrow">Resources</span>
            <h2 className="emp-h2">Knowledge & Tools</h2>
            <p className="emp-sh__p">Everything you need to make informed hiring decisions and build a strong workforce.</p>
          </div>

          <div className="emp-resources__grid">
            {RESOURCES.map((resource, i) => (
              <div key={i} className="emp-resource-card">
                <span className="emp-resource-card__icon">{resource.icon}</span>
                <h3 className="emp-resource-card__title">{resource.title}</h3>
                <p className="emp-resource-card__desc">{resource.description}</p>
                <a href={resource.link} className="emp-resource-card__link">
                  {resource.linkText} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="emp-section" style={{ background: "var(--off)" }}>
        <div className="emp-wrap">
          <div className="emp-sh">
            <span className="emp-eyebrow">Latest Updates</span>
            <h2 className="emp-h2">Industry News & Insights</h2>
            <p className="emp-sh__p">Stay updated with the latest trends, regulations, and best practices.</p>
          </div>

          <div style={{ display: "grid", gap: "2rem", marginTop: "3rem", maxWidth: "900px", margin: "3rem auto 0" }}>
            {ARTICLES.map((article, i) => (
              <div key={i} style={{ background: "var(--white)", padding: "2rem", borderRadius: "var(--r-lg)", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", fontSize: "0.85rem", color: "var(--txt-2)" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 600, color: "var(--navy)", marginBottom: "0.75rem" }}>
                  {article.title}
                </h3>
                <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                  {article.excerpt}
                </p>
                <a href="#" style={{ color: "var(--accent)", fontWeight: 600 }}>Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
