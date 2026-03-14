import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./JobSeekers.css";

const RESOURCES = [
  {
    icon: "📄",
    title: "Resume Templates",
    description: "Download professional resume templates tailored for Japanese job market. Available in Japanese and English formats.",
    link: "/contact",
    linkText: "Download Templates"
  },
  {
    icon: "💼",
    title: "Interview Tips",
    description: "Comprehensive guides on interview preparation, common questions, and how to make a great impression in Japanese workplace culture.",
    link: "/job-seekers/how-to-apply",
    linkText: "Read Guide"
  },
  {
    icon: "💰",
    title: "Salary Guides",
    description: "Industry-wise salary benchmarks to help you understand market rates and negotiate effectively. Updated quarterly.",
    link: "/contact",
    linkText: "View Salary Guide"
  },
  {
    icon: "📚",
    title: "Career Advice Blog",
    description: "Regular articles on career development, workplace culture, skill building, and job search strategies in Japan.",
    link: "/careers/blog",
    linkText: "Read Articles"
  },
  {
    icon: "🎯",
    title: "Career Assessment",
    description: "Take our free career assessment to identify your strengths, interests, and ideal career paths in the Japanese job market.",
    link: "/job-seekers/register",
    linkText: "Take Assessment"
  },
  {
    icon: "📞",
    title: "Career Counseling",
    description: "Schedule a one-on-one session with our career counselors for personalized advice and guidance on your job search journey.",
    link: "/contact",
    linkText: "Book Session"
  }
];

const ARTICLES = [
  {
    title: "10 Tips for Writing a Japanese-Style Resume",
    category: "Resume Writing",
    date: "March 15, 2024",
    excerpt: "Learn the key differences between Western and Japanese resume formats and how to create a resume that stands out."
  },
  {
    title: "Understanding Japanese Workplace Culture",
    category: "Career Advice",
    date: "March 10, 2024",
    excerpt: "Essential insights into Japanese business etiquette, communication styles, and workplace expectations."
  },
  {
    title: "Salary Negotiation in Japan: A Complete Guide",
    category: "Salary Guides",
    date: "March 5, 2024",
    excerpt: "How to approach salary negotiations in Japan, including when and how to discuss compensation respectfully."
  },
  {
    title: "Top 5 In-Demand Skills for 2024",
    category: "Career Development",
    date: "February 28, 2024",
    excerpt: "Discover which skills are most sought after by Japanese employers and how to develop them."
  }
];

export default function CareerResources() {
  return (
    <div className="js">
      <Header />

      <section className="js-hero">
        <div className="js-wrap">
          <h1 className="js-h1 js-hero__h1">Career Resources</h1>
          <p className="js-hero__p">Tools, guides, and advice to help you succeed in your job search and career development in Japan.</p>
        </div>
      </section>

      <section className="js-section" style={{ background: "var(--white)" }}>
        <div className="js-wrap">
          <div className="js-sh">
            <span className="js-eyebrow">Resources</span>
            <h2 className="js-h2">Tools & Guides</h2>
            <p className="js-sh__p">Everything you need to advance your career.</p>
          </div>

          <div className="js-resources__grid">
            {RESOURCES.map((resource, i) => (
              <div key={i} className="js-resource-card">
                <span className="js-resource-card__icon">{resource.icon}</span>
                <h3 className="js-resource-card__title">{resource.title}</h3>
                <p className="js-resource-card__desc">{resource.description}</p>
                <Link to={resource.link} className="js-resource-card__link">
                  {resource.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="js-section" style={{ background: "var(--off)" }}>
        <div className="js-wrap">
          <div className="js-sh">
            <span className="js-eyebrow">Career Advice</span>
            <h2 className="js-h2">Latest Articles</h2>
            <p className="js-sh__p">Stay updated with the latest career advice and job market insights.</p>
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
                <Link to="/careers/blog" style={{ color: "var(--accent)", fontWeight: 600 }}>Read More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
