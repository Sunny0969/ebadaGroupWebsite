import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./News.css";

const ARTICLE_DATA: Record<number, any> = {
  1: {
    title: "CDP Japan Celebrates 30th Anniversary with Major Expansion",
    category: "Company News",
    date: "2024-03-15",
    thumbnail: "🏢",
    content: `
      <p>CDP Japan is proud to announce a significant milestone in our company's history: 30 years of connecting people with opportunities across Japan's manufacturing sector. To mark this occasion, we are launching several major initiatives that will strengthen our position as Japan's leading staffing agency.</p>
      
      <h3>Three New Regional Offices</h3>
      <p>We are expanding our nationwide network with the opening of three new regional offices in Kyushu, Tohoku, and Chugoku regions. These strategic locations will bring our total branch count to 15 offices, ensuring local expertise and rapid response capabilities across all of Japan's major industrial corridors.</p>
      
      <h3>AI-Powered Candidate Matching Platform</h3>
      <p>In partnership with leading technology providers, we are launching an advanced AI-powered candidate matching platform. This innovative system will reduce placement time by an additional 30% while improving match quality through machine learning algorithms that analyze skills, experience, and cultural fit.</p>
      
      <p>The platform will be available to all clients starting in Q2 2024, with full rollout expected by the end of the year. Early testing has shown remarkable results, with 95% client satisfaction and 40% faster time-to-fill compared to traditional methods.</p>
      
      <h3>Commitment to Excellence</h3>
      <p>As we celebrate 30 years of service, we remain committed to our core values: quality, integrity, and genuine care for every worker we place and every client we serve. This expansion represents not just growth, but our dedication to meeting the evolving needs of Japan's manufacturing sector.</p>
      
      <p>We thank our clients, partners, and employees for their trust and support over the past three decades. Together, we will continue building a stronger, more connected workforce for Japan's future.</p>
    `,
    related: [2, 4, 8]
  },
  2: {
    title: "New Partnership with Leading Automotive Manufacturers",
    category: "Press Releases",
    date: "2024-03-12",
    thumbnail: "🚗",
    content: `
      <p>CDP Japan is excited to announce strategic partnerships with three of Japan's leading automotive manufacturers. These partnerships will focus on providing specialized engineering talent for electric vehicle (EV) development and production.</p>
      
      <h3>Partnership Details</h3>
      <p>The partnerships will enable CDP Japan to provide dedicated engineering teams specializing in EV battery technology, power electronics, and autonomous driving systems. We will establish dedicated recruitment pipelines and specialized training programs to meet the unique requirements of these cutting-edge projects.</p>
      
      <h3>Impact and Opportunities</h3>
      <p>This collaboration is expected to create over 500 new engineering positions over the next 18 months, with opportunities ranging from entry-level technicians to senior R&D engineers. All positions will offer competitive compensation, comprehensive benefits, and opportunities for career growth in the rapidly evolving EV sector.</p>
      
      <p>CDP Japan's 30 years of experience in technical staffing, combined with our partners' industry leadership, positions us to make a significant contribution to Japan's transition to sustainable transportation.</p>
    `,
    related: [1, 3, 5]
  }
};

const SAMPLE_NEWS = [
  { id: 1, title: "CDP Japan Celebrates 30th Anniversary with Major Expansion", category: "Company News", date: "2024-03-15" },
  { id: 2, title: "New Partnership with Leading Automotive Manufacturers", category: "Press Releases", date: "2024-03-12" },
  { id: 3, title: "Annual HR Excellence Seminar - Registration Open", category: "Seminars", date: "2024-03-10" },
  { id: 4, title: "CDP Japan Wins Best Staffing Agency Award 2024", category: "Company News", date: "2024-03-08" }
];

export default function NewsArticle() {
  const { id } = useParams<{ id: string }>();
  const articleId = id ? parseInt(id) : 1;
  const article = ARTICLE_DATA[articleId] || ARTICLE_DATA[1];
  const relatedArticles = article.related.map((rid: number) => SAMPLE_NEWS.find(n => n.id === rid)).filter(Boolean);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = article.title;

  return (
    <div className="news">
      <Header />

      <article className="news-article" itemScope itemType="https://schema.org/NewsArticle">
        <div className="news-wrap">
          <header className="news-article__header">
            <div className="news-article__meta">
              <span className="news-article__badge" itemProp="articleSection">{article.category}</span>
              <time dateTime={article.date} itemProp="datePublished">📅 {formatDate(article.date)}</time>
            </div>
            <h1 className="news-article__title" itemProp="headline">{article.title}</h1>
          </header>

          <div className="news-article__featured-img" itemProp="image">
            {article.thumbnail}
          </div>

          <div className="news-article__body" itemProp="articleBody" dangerouslySetInnerHTML={{ __html: article.content }} />

          <div className="news-article__share">
            <span className="news-article__share-label">Share:</span>
            <a 
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="news-article__share-btn"
              aria-label="Share on Twitter"
            >
              🐦
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="news-article__share-btn"
              aria-label="Share on Facebook"
            >
              📘
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="news-article__share-btn"
              aria-label="Share on LinkedIn"
            >
              💼
            </a>
            <button 
              className="news-article__share-btn"
              onClick={() => navigator.clipboard.writeText(shareUrl)}
              aria-label="Copy link"
            >
              🔗
            </button>
          </div>

          {relatedArticles.length > 0 && (
            <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "2px solid var(--border)" }}>
              <h2 className="news-h2" style={{ marginBottom: "2rem" }}>Related Articles</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                {relatedArticles.map((related: any) => (
                  <Link key={related.id} to={`/news/article/${related.id}`} style={{ textDecoration: "none" }}>
                    <div style={{ 
                      background: "var(--off)", 
                      padding: "1.5rem", 
                      borderRadius: "var(--r-lg)", 
                      border: "1px solid var(--border)",
                      transition: "transform var(--trans), box-shadow var(--trans)"
                    }} className="news-card">
                      <div style={{ 
                        padding: "0.2rem 0.6rem", 
                        borderRadius: "100px", 
                        background: "var(--white)", 
                        color: "var(--txt-2)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        display: "inline-block",
                        marginBottom: "0.75rem"
                      }}>
                        {related.category}
                      </div>
                      <h3 style={{ 
                        fontFamily: "var(--font-serif)", 
                        fontSize: "1.2rem", 
                        fontWeight: 600, 
                        color: "var(--navy)", 
                        marginBottom: "0.5rem",
                        lineHeight: 1.3
                      }}>
                        {related.title}
                      </h3>
                      <div style={{ color: "var(--txt-2)", fontSize: "0.85rem" }}>
                        📅 {formatDate(related.date)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}
