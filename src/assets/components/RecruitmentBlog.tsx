import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Careers.css";

const BLOG_POSTS = [
  {
    id: 1,
    title: "A Day in the Life: Working at CDP Japan",
    date: "2024-03-15",
    category: "Company Updates",
    excerpt: "Join us as we take you through a typical day at CDP Japan, from morning team meetings to client interactions and everything in between.",
    image: "🏢"
  },
  {
    id: 2,
    title: "Employee Spotlight: Yuki's Journey to Senior Consultant",
    date: "2024-03-10",
    category: "Employee Stories",
    excerpt: "Discover how Yuki Tanaka started as a junior recruiter and worked her way up to become one of our most successful senior consultants.",
    image: "👤"
  },
  {
    id: 3,
    title: "The Future of Recruitment in Japan",
    date: "2024-03-05",
    category: "Industry Insights",
    excerpt: "Exploring trends, challenges, and opportunities in the Japanese recruitment market. What does the future hold for talent acquisition?",
    image: "📊"
  },
  {
    id: 4,
    title: "Behind the Scenes: Our Training Program",
    date: "2024-02-28",
    category: "Company Updates",
    excerpt: "Get an inside look at how we train new employees, from onboarding to advanced skill development programs.",
    image: "📚"
  },
  {
    id: 5,
    title: "Team Building: Our Annual Company Retreat",
    date: "2024-02-20",
    category: "Company Updates",
    excerpt: "Photos and stories from our annual team retreat in Hakone. Building stronger bonds and creating lasting memories.",
    image: "🏔️"
  },
  {
    id: 6,
    title: "Diversity & Inclusion at CDP Japan",
    date: "2024-02-15",
    category: "Company Culture",
    excerpt: "Learn about our commitment to creating an inclusive workplace where everyone can thrive and contribute their unique perspectives.",
    image: "🤝"
  },
  {
    id: 7,
    title: "Tech Innovation in Recruitment",
    date: "2024-02-10",
    category: "Industry Insights",
    excerpt: "How we're leveraging technology to improve our recruitment processes and provide better service to clients and candidates.",
    image: "💻"
  },
  {
    id: 8,
    title: "Work-Life Balance: Our Flexible Work Policy",
    date: "2024-02-05",
    category: "Company Culture",
    excerpt: "Understanding our flexible work arrangements and how we support employees in maintaining a healthy work-life balance.",
    image: "⚖️"
  }
];

export default function RecruitmentBlog() {
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const refMap = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    // SEO: Update document title and meta
    document.title = "Recruitment Blog - CDP Japan | Company Updates & Employee Stories";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read the latest updates from CDP Japan. Company news, employee stories, industry insights, and behind-the-scenes content about our recruitment and workforce solutions.');
    }

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

  const categories = ["All", ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))];
  const filteredPosts = selectedCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="careers">
      <Header />

      <section className="careers-hero">
        <div className="careers-hero__content">
          <h1 className="careers-h1 careers-hero__h1">Recruitment Blog</h1>
          <p className="careers-hero__p">
            Stay updated with company news, employee stories, industry insights, and behind-the-scenes content from CDP Japan.
          </p>
        </div>
      </section>

      <section className={`careers-section ${visible.has("blog") ? "careers--in" : ""}`} data-obs="blog" ref={obs("blog")} style={{ background: "var(--white)" }}>
        <div className="careers-wrap">
          <div className="careers-sh">
            <span className="careers-eyebrow">Blog Articles</span>
            <h2 className="careers-h2">Latest Updates</h2>
            <p className="careers-sh__p">Read about our company culture, employee experiences, and industry perspectives.</p>
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="careers-btn"
                style={{
                  background: selectedCategory === category ? "var(--accent)" : "var(--off)",
                  color: selectedCategory === category ? "var(--white)" : "var(--navy)",
                  border: selectedCategory === category ? "none" : "1px solid var(--border)",
                  padding: "0.6rem 1.5rem",
                  fontSize: "0.9rem"
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="careers-blog-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="careers-blog-card">
                <div className="careers-blog-card__image">{post.image}</div>
                <div className="careers-blog-card__content">
                  <div className="careers-blog-card__date">{formatDate(post.date)}</div>
                  <div style={{ 
                    display: "inline-block",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "100px",
                    background: "var(--off)",
                    color: "var(--accent)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    marginBottom: "0.75rem"
                  }}>
                    {post.category}
                  </div>
                  <h3 className="careers-blog-card__title">{post.title}</h3>
                  <p className="careers-blog-card__excerpt">{post.excerpt}</p>
                  <Link to={`/careers/blog/${post.id}`} className="careers-blog-card__link">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div style={{ textAlign: "center", padding: "3rem", color: "var(--txt-2)" }}>
              <p>No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className={`careers-section ${visible.has("cta") ? "careers--in" : ""}`} data-obs="cta" ref={obs("cta")} style={{ background: "var(--off)" }}>
        <div className="careers-wrap">
          <div className="careers-sh">
            <h2 className="careers-h2">Interested in Joining Us?</h2>
            <p className="careers-sh__p">Explore our open positions and find your next career opportunity at CDP Japan.</p>
            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/careers/join" className="careers-btn">
                View Open Positions
              </Link>
              <Link to="/careers/process" className="careers-btn careers-btn--outline">
                Learn How to Apply
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
