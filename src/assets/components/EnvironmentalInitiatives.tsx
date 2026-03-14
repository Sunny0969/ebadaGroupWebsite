import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Sustainability.css";

const INITIATIVES = [
  {
    icon: "🌳",
    title: "Carbon Footprint Reduction",
    description: "Committed to reducing our carbon emissions by 30% by 2026 through office energy efficiency, remote work policies, and sustainable transportation.",
    metrics: [
      { value: "25%", label: "Reduction Achieved" },
      { value: "2026", label: "Target Year" }
    ]
  },
  {
    icon: "♻️",
    title: "Waste Reduction Program",
    description: "Comprehensive recycling and waste reduction initiatives across all offices. Paperless operations where possible, and responsible disposal of electronic waste.",
    metrics: [
      { value: "60%", label: "Waste Reduction" },
      { value: "12", label: "Offices" }
    ]
  },
  {
    icon: "💡",
    title: "Energy Efficiency",
    description: "Upgraded to LED lighting, energy-efficient HVAC systems, and smart building technologies. Solar panel installation at headquarters planned for 2025.",
    metrics: [
      { value: "40%", label: "Energy Savings" },
      { value: "2025", label: "Solar Target" }
    ]
  },
  {
    icon: "🌿",
    title: "Green Office Spaces",
    description: "Creating healthier work environments with indoor plants, natural lighting optimization, and eco-friendly office supplies and materials.",
    metrics: [
      { value: "100%", label: "Eco Supplies" },
      { value: "8", label: "Green Offices" }
    ]
  }
];

const CONSERVATION_ACTIVITIES = [
  {
    title: "Tree Planting Initiative",
    description: "Annual tree planting events in partnership with local municipalities. 500+ trees planted across Japan since 2020.",
    year: "2020-2024"
  },
  {
    title: "Coastal Cleanup Program",
    description: "Quarterly beach and coastal cleanup activities organized by employee volunteers. 2,000+ kg of waste collected annually.",
    year: "Ongoing"
  },
  {
    title: "Water Conservation",
    description: "Installation of water-saving fixtures and rainwater collection systems at major offices. 35% reduction in water usage.",
    year: "2022-2024"
  },
  {
    title: "Biodiversity Support",
    description: "Sponsoring local conservation projects and supporting biodiversity initiatives in industrial regions where we operate.",
    year: "2023-2024"
  }
];

export default function EnvironmentalInitiatives() {
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
          <h1 className="sus-h1 sus-hero__h1">Environmental Initiatives</h1>
          <p className="sus-hero__p">Protecting our planet through sustainable practices, conservation efforts, and environmental responsibility.</p>
        </div>
      </section>

      <section className={`sus-section ${visible.has("policy") ? "sus--in" : ""}`} data-obs="policy" ref={obs("policy")} style={{ background: "var(--white)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Environmental Policy</span>
            <h2 className="sus-h2">Our Commitment</h2>
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto", background: "var(--off)", padding: "3rem", borderRadius: "var(--r-lg)", borderLeft: "4px solid var(--accent)" }}>
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              CDP Japan is committed to minimizing our environmental impact and contributing to a sustainable future. Our environmental policy guides all operations and decision-making processes.
            </p>
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              We strive to reduce energy consumption, minimize waste, conserve resources, and support conservation efforts. All employees are encouraged to participate in environmental initiatives, and we regularly review and update our practices to align with best practices and emerging technologies.
            </p>
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9 }}>
              Our goal is to achieve carbon neutrality by 2030 and to continuously improve our environmental performance across all areas of operation.
            </p>
          </div>
        </div>
      </section>

      <section className={`sus-section ${visible.has("initiatives") ? "sus--in" : ""}`} data-obs="initiatives" ref={obs("initiatives")} style={{ background: "var(--off)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Green Initiatives</span>
            <h2 className="sus-h2">Our Environmental Programs</h2>
            <p className="sus-sh__p">Active initiatives to reduce our environmental footprint and promote sustainability.</p>
          </div>

          <div className="sus-initiatives__grid">
            {INITIATIVES.map((initiative, i) => (
              <div key={i} className="sus-initiative">
                <div className="sus-initiative__img">{initiative.icon}</div>
                <div className="sus-initiative__content">
                  <h3 className="sus-initiative__title">{initiative.title}</h3>
                  <p className="sus-initiative__desc">{initiative.description}</p>
                  <div className="sus-initiative__metrics">
                    {initiative.metrics.map((metric, j) => (
                      <div key={j} className="sus-initiative__metric">
                        <div className="sus-initiative__metric-value">{metric.value}</div>
                        <div className="sus-initiative__metric-label">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`sus-section ${visible.has("conservation") ? "sus--in" : ""}`} data-obs="conservation" ref={obs("conservation")} style={{ background: "var(--white)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Conservation Activities</span>
            <h2 className="sus-h2">Community Environmental Projects</h2>
            <p className="sus-sh__p">Our hands-on conservation efforts and community engagement programs.</p>
          </div>

          <div style={{ display: "grid", gap: "2rem", marginTop: "3rem", maxWidth: "900px", margin: "3rem auto 0" }}>
            {CONSERVATION_ACTIVITIES.map((activity, i) => (
              <div key={i} style={{ background: "var(--off)", padding: "2rem", borderRadius: "var(--r-lg)", borderLeft: "3px solid var(--accent)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: "1rem" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 600, color: "var(--navy)" }}>
                    {activity.title}
                  </h3>
                  <span style={{ 
                    padding: "0.25rem 0.75rem", 
                    borderRadius: "100px", 
                    background: "var(--white)", 
                    color: "var(--txt-2)", 
                    fontSize: "0.85rem",
                    fontWeight: 600
                  }}>
                    {activity.year}
                  </span>
                </div>
                <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sus-section sus-stats">
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Environmental Impact</span>
            <h2 className="sus-h2" style={{ color: "var(--white)" }}>Our Progress</h2>
            <p className="sus-sh__p" style={{ color: "rgba(255,255,255,0.75)" }}>Measurable results from our environmental initiatives.</p>
          </div>

          <div className="sus-stats__grid">
            <div className="sus-stat">
              <div className="sus-stat__value">30%</div>
              <div className="sus-stat__label">Carbon Reduction Target</div>
            </div>
            <div className="sus-stat">
              <div className="sus-stat__value">60%</div>
              <div className="sus-stat__label">Waste Reduction</div>
            </div>
            <div className="sus-stat">
              <div className="sus-stat__value">40%</div>
              <div className="sus-stat__label">Energy Savings</div>
            </div>
            <div className="sus-stat">
              <div className="sus-stat__value">500+</div>
              <div className="sus-stat__label">Trees Planted</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
