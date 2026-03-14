import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./News.css";

const CATEGORIES = ["All", "Press Releases", "Events", "Seminars", "Company News"];

const SAMPLE_NEWS = [
  {
    id: 1,
    title: "CDP Japan Celebrates 30th Anniversary with Major Expansion",
    category: "Company News",
    date: "2024-03-15",
    excerpt: "CDP Japan marks three decades of excellence with the opening of three new regional offices and the launch of AI-powered candidate matching platform.",
    thumbnail: "🏢",
    featured: false
  },
  {
    id: 2,
    title: "New Partnership with Leading Automotive Manufacturers",
    category: "Press Releases",
    date: "2024-03-12",
    excerpt: "CDP Japan announces strategic partnerships with top automotive manufacturers to provide specialized engineering talent for electric vehicle development.",
    thumbnail: "🚗",
    featured: true
  },
  {
    id: 3,
    title: "Annual HR Excellence Seminar - Registration Open",
    category: "Seminars",
    date: "2024-03-10",
    excerpt: "Join us on April 20th for our annual HR Excellence Seminar featuring industry leaders discussing the future of workforce management in Japan.",
    thumbnail: "🎓",
    featured: false
  },
  {
    id: 4,
    title: "CDP Japan Wins Best Staffing Agency Award 2024",
    category: "Company News",
    date: "2024-03-08",
    excerpt: "Recognized for excellence in candidate placement, client service, and innovation at the Japan Staffing Industry Awards 2024.",
    thumbnail: "🏆",
    featured: true
  },
  {
    id: 5,
    title: "Spring Career Fair 2024 - Tokyo & Osaka",
    category: "Events",
    date: "2024-03-05",
    excerpt: "Connect with top employers and explore career opportunities at our Spring Career Fair. Free admission, 200+ companies participating.",
    thumbnail: "📅",
    featured: false
  },
  {
    id: 6,
    title: "Sustainability Report 2023 Released",
    category: "Press Releases",
    date: "2024-03-01",
    excerpt: "CDP Japan publishes annual sustainability report highlighting environmental initiatives, social responsibility programs, and SDG contributions.",
    thumbnail: "🌱",
    featured: false
  },
  {
    id: 7,
    title: "Workshop: Building Inclusive Workplaces",
    category: "Seminars",
    date: "2024-02-28",
    excerpt: "Free workshop for HR professionals on creating inclusive workplaces. Learn best practices for diversity, equity, and inclusion.",
    thumbnail: "🤝",
    featured: false
  },
  {
    id: 8,
    title: "New Foreign Employment Support Program Launched",
    category: "Company News",
    date: "2024-02-25",
    excerpt: "Expanded international recruitment services with enhanced pre-departure training and integration support for workers from Southeast Asia.",
    thumbnail: "🌍",
    featured: false
  }
];

export default function NewsListings() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filteredNews = SAMPLE_NEWS.filter(item => {
    if (activeCategory !== "All" && item.category !== activeCategory) return false;
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortBy === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime();
    return 0;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="news">
      <Header />

      <section className="news-hero">
        <div className="news-wrap">
          <h1 className="news-h1 news-hero__h1">News & Updates</h1>
          <p className="news-hero__p">Stay informed about CDP Japan's latest news, events, and industry insights.</p>
        </div>
      </section>

      <section className="news-filters">
        <div className="news-wrap">
          <div className="news-filters__inner">
            <div className="news-filters__categories">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`news-filter-btn ${activeCategory === cat ? "news-filter-btn--active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="news-filters__search">
              <span className="news-filters__search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search news..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="news-filters__sort">
              <label style={{ fontSize: "0.9rem", color: "var(--txt-2)" }}>Sort:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="news-listings">
        <div className="news-wrap">
          <div className="news-listings__header">
            <div className="news-listings__count">{filteredNews.length} Articles Found</div>
          </div>

          <div className="news-listings__grid">
            {filteredNews.map(item => (
              <article key={item.id} className="news-card" itemScope itemType="https://schema.org/NewsArticle">
                <div className="news-card__img">
                  {item.thumbnail}
                  {item.featured && <div className="news-card__badge">Featured</div>}
                </div>
                <div className="news-card__content">
                  <div className="news-card__meta">
                    <div className="news-card__date">📅 {formatDate(item.date)}</div>
                    <div style={{ 
                      padding: "0.2rem 0.6rem", 
                      borderRadius: "100px", 
                      background: "var(--off)", 
                      color: "var(--txt-2)",
                      fontSize: "0.75rem",
                      fontWeight: 600
                    }}>
                      {item.category}
                    </div>
                  </div>
                  <h2 className="news-card__title" itemProp="headline">{item.title}</h2>
                  <p className="news-card__excerpt" itemProp="description">{item.excerpt}</p>
                  <Link to={`/news/article/${item.id}`} className="news-card__link" itemProp="url">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="news-pagination">
            <button className="news-pagination__btn">‹ Previous</button>
            <button className="news-pagination__btn news-pagination__btn--active">1</button>
            <button className="news-pagination__btn">2</button>
            <button className="news-pagination__btn">3</button>
            <button className="news-pagination__btn">Next ›</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
