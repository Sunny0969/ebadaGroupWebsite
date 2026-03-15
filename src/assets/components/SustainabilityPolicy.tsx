import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Sustainability.css";

const MATERIALITY_AREAS = [
  {
    icon: "🌱",
    title: "Environmental Stewardship",
    description: "Reducing our carbon footprint, promoting resource conservation, and supporting sustainable business practices across all operations."
  },
  {
    icon: "👥",
    title: "Human Rights & Labor",
    description: "Ensuring fair treatment, safe working conditions, and respect for human rights for all workers in our network and supply chain."
  },
  {
    icon: "🤝",
    title: "Diversity & Inclusion",
    description: "Building diverse teams, promoting equal opportunities, and creating inclusive workplaces where everyone can thrive."
  },
  {
    icon: "🏛️",
    title: "Corporate Governance",
    description: "Maintaining transparent governance structures, ethical business practices, and strong compliance frameworks."
  },
  {
    icon: "🏘️",
    title: "Community Engagement",
    description: "Supporting local communities through initiatives, sponsorships, and programs that create positive social impact."
  },
  {
    icon: "📊",
    title: "Data & Privacy",
    description: "Protecting candidate and client data, ensuring privacy compliance, and maintaining secure information systems."
  }
];

export default function SustainabilityPolicy() {
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
          <h1 className="sus-h1 sus-hero__h1">Sustainability Policy</h1>
          <p className="sus-hero__p">Our commitment to environmental responsibility, social equity, and ethical governance in everything we do.</p>
        </div>
      </section>

      <section className={`sus-section sus-policy ${visible.has("policy") ? "sus--in" : ""}`} data-obs="policy" ref={obs("policy")}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Policy Statement</span>
            <h2 className="sus-h2">Message from Leadership</h2>
          </div>

          <div className="sus-policy__statement">
            <p>
              At CDP Japan, we believe that sustainable business practices are not optional—they are essential to our long-term success and our responsibility to society. For 3years, we have been connecting people with opportunities, and we recognize that this mission extends beyond job placement to creating positive impact in our communities and environment.
            </p>
            <p>
              Our sustainability commitment encompasses three core pillars: environmental stewardship, social responsibility, and strong governance. We are dedicated to reducing our environmental footprint, promoting diversity and inclusion, ensuring fair labor practices, and maintaining the highest standards of ethical conduct.
            </p>
            <p>
              As Japan's leading staffing agency, we have a unique opportunity and responsibility to influence positive change. Through our operations, we touch the lives of thousands of workers, hundreds of companies, and countless communities. We take this responsibility seriously and are committed to using our platform to drive sustainable practices across the industries we serve.
            </p>
            <p>
              This policy reflects our values and our commitment to continuous improvement. We will regularly review and update our sustainability initiatives, set measurable goals, and transparently report on our progress. Together with our employees, clients, and partners, we are building a more sustainable future for Japan's workforce.
            </p>
            <div className="sus-policy__signature">
              <div className="sus-policy__signature-name">Masato Fujiwara</div>
              <div className="sus-policy__signature-role">President & CEO, CDP Japan Co., Ltd.</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`sus-section ${visible.has("materiality") ? "sus--in" : ""}`} data-obs="materiality" ref={obs("materiality")} style={{ background: "var(--off)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Materiality</span>
            <h2 className="sus-h2">Key Focus Areas</h2>
            <p className="sus-sh__p">The priority areas where we focus our sustainability efforts and create the greatest impact.</p>
          </div>

          <div className="sus-materiality__grid">
            {MATERIALITY_AREAS.map((area, i) => (
              <div key={i} className="sus-materiality-card" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <span className="sus-materiality-card__icon">{area.icon}</span>
                <h3 className="sus-materiality-card__title">{area.title}</h3>
                <p className="sus-materiality-card__desc">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sus-section" style={{ background: "var(--white)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Leadership Commitment</span>
            <h2 className="sus-h2">Our Pledge</h2>
            <p className="sus-sh__p">CDP Japan's leadership team is committed to embedding sustainability into every aspect of our business.</p>
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ background: "var(--off)", padding: "2.5rem", borderRadius: "var(--r-lg)", borderLeft: "4px solid var(--accent)" }}>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {[
                  "Integrate sustainability considerations into all business decisions",
                  "Set annual sustainability goals and track progress transparently",
                  "Invest in programs that create positive social and environmental impact",
                  "Engage employees, clients, and partners in our sustainability journey",
                  "Comply with all environmental and labor regulations and exceed where possible",
                  "Report on sustainability performance annually"
                ].map((item, i) => (
                  <li key={i} style={{ 
                    display: "flex", 
                    alignItems: "flex-start", 
                    gap: "1rem", 
                    padding: "1rem 0",
                    borderBottom: i < 5 ? "1px solid var(--border)" : "none",
                    color: "var(--txt-2)",
                    fontSize: "1.05rem",
                    lineHeight: 1.8
                  }}>
                    <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "1.2rem", flexShrink: 0 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
