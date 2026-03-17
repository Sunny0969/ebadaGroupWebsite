import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Sustainability.css";

const INITIATIVES = [
  {
    icon: "💡",
    title: "LED & Energy Efficiency Upgrade",
    description: "All fluorescent lighting across Ebadah Group offices has been replaced with LED, reducing power consumption by approximately 30% compared to conventional lighting while also cutting CO₂ emissions and lowering running costs.",
    metrics: [
      { value: "~30%", label: "Power Reduction" },
      { value: "All", label: "Offices Upgraded" }
    ]
  },
  {
    icon: "🚗",
    title: "EV Vehicles & Charging Infrastructure",
    description: "In line with our carbon-neutral goals, Ebadah Group has introduced electric company vehicles and installed EV charging stations at our main offices, supporting both corporate and employee EV/PHV use.",
    metrics: [
      { value: "0", label: "Direct Emissions" },
      { value: "EV", label: "Fleet Vehicles" }
    ]
  },
  {
    icon: "💻",
    title: "Digital Transformation (DX)",
    description: "Through early adoption of digitalization, Ebadah Group has built internal sharing systems enabling paperless operations, remote work, and fully digital approval workflows — reducing paper waste and improving operational efficiency.",
    metrics: [
      { value: "100%", label: "Digital Approvals" },
      { value: "Paperless", label: "Operations" }
    ]
  },
  {
    icon: "♻️",
    title: "3R Recycling Program",
    description: "Ebadah Group collects PET bottle caps company-wide for recycling. Revenue from recycled materials is donated via the Japan Committee for Vaccines for the World's Children (JCV), combining environmental and humanitarian impact.",
    metrics: [
      { value: "3R", label: "Reduce Reuse Recycle" },
      { value: "JCV", label: "Charity Partner" }
    ]
  }
];

const CONSERVATION_ACTIVITIES = [
  {
    title: "Forest Development Initiative",
    description: "Ebadah Group participates in a collaborative forest management program, conducting tree planting, undergrowth clearing, thinning, and forest floor maintenance. Increased CO₂ absorption through afforestation contributes to climate change mitigation and biodiversity conservation.",
    year: "Ongoing"
  },
  {
    title: "\"Ebadah Connecting Forest\" — Named & Planted",
    description: "Following an internal naming campaign, our forest was named 'Ebadah Connecting Forest' to reflect our ties with employees, clients, and nature. Tree planting of magnolia, hydrangea, and maple was carried out by the Sustainability Promotion Committee.",
    year: "2025"
  },
  {
    title: "Community Clean-Up Campaign",
    description: "Ebadah Group organizes regular 'Clean Campaigns' in local parks and public spaces as part of our environmental conservation and community contribution activities. Employee volunteers participate to strengthen social responsibility and team unity.",
    year: "Ongoing"
  },
  {
    title: "Sustainability Certification",
    description: "Ebadah Group employees have obtained the Sustainability Management Certification Level 2, strengthening internal knowledge and commitment to sustainable business practices across all departments.",
    year: "2025"
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
              Ebadah Group is committed to participating in environmental conservation through our business activities, aiming to achieve a circular economy and carbon-neutral society. We contribute to the effective use of limited resources and the realization of a sustainable coexistence with our planet.
            </p>
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              We comply with international agreements, laws, regulations, and ordinances related to environmental conservation. We actively promote environmental education and awareness among all officers and employees, linking these efforts directly to our business operations.
            </p>
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9 }}>
              Our goal is to achieve carbon neutrality and continuously improve our environmental performance across all areas of operation. We set environmental targets, review them regularly, and disclose our progress to all stakeholders.
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
              <div className="sus-stat__value">~30%</div>
              <div className="sus-stat__label">Energy Reduction via LED</div>
            </div>
            <div className="sus-stat">
              <div className="sus-stat__value">100%</div>
              <div className="sus-stat__label">Paperless Operations</div>
            </div>
            <div className="sus-stat">
              <div className="sus-stat__value">EV</div>
              <div className="sus-stat__label">Zero-Emission Fleet</div>
            </div>
            <div className="sus-stat">
              <div className="sus-stat__value">3R+</div>
              <div className="sus-stat__label">Recycling & Charity</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}