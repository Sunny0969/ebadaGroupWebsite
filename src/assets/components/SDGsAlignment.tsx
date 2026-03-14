import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Sustainability.css";

const SDG_GOALS = [
  { number: 3, title: "Good Health and Well-being", desc: "Workplace safety programs, health checkups, and wellness initiatives for all workers." },
  { number: 4, title: "Quality Education", desc: "Skills training, career development programs, and educational scholarships for workers and their families." },
  { number: 5, title: "Gender Equality", desc: "Promoting women in leadership, equal pay initiatives, and gender-balanced hiring practices." },
  { number: 8, title: "Decent Work and Economic Growth", desc: "Creating quality employment opportunities, fair wages, and safe working conditions across Japan." },
  { number: 10, title: "Reduced Inequalities", desc: "Diversity and inclusion programs, support for underrepresented groups, and equal opportunity employment." },
  { number: 12, title: "Responsible Consumption", desc: "Waste reduction, resource conservation, and sustainable office practices." },
  { number: 13, title: "Climate Action", desc: "Carbon reduction initiatives, energy efficiency, and environmental conservation programs." },
  { number: 17, title: "Partnerships for the Goals", desc: "Collaborating with clients, communities, and organizations to achieve sustainable development." }
];

const SDG_ACTIONS = [
  {
    goal: 8,
    title: "Decent Work and Economic Growth",
    actions: [
      "Placed 2,400+ workers annually in quality positions",
      "Ensured 100% compliance with minimum wage laws",
      "Provided safety training to all placed workers",
      "Maintained 96% client retention rate"
    ],
    progress: 85
  },
  {
    goal: 5,
    title: "Gender Equality",
    actions: [
      "42% women in workforce (above industry average)",
      "35% women in management positions",
      "Equal pay audits and adjustments",
      "Flexible work arrangements for work-life balance"
    ],
    progress: 78
  },
  {
    goal: 13,
    title: "Climate Action",
    actions: [
      "25% carbon reduction achieved (target: 30% by 2026)",
      "60% waste reduction through recycling programs",
      "40% energy savings through efficiency measures",
      "500+ trees planted in community initiatives"
    ],
    progress: 72
  },
  {
    goal: 10,
    title: "Reduced Inequalities",
    actions: [
      "18% international workers in placements",
      "Support programs for underrepresented groups",
      "Blind recruitment processes",
      "Partnerships with diversity organizations"
    ],
    progress: 80
  }
];

export default function SDGsAlignment() {
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
          <h1 className="sus-h1 sus-hero__h1">SDGs Alignment</h1>
          <p className="sus-hero__p">Contributing to the United Nations Sustainable Development Goals through our business operations and initiatives.</p>
        </div>
      </section>

      <section className={`sus-section ${visible.has("goals") ? "sus--in" : ""}`} data-obs="goals" ref={obs("goals")} style={{ background: "var(--white)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">UN Sustainable Development Goals</span>
            <h2 className="sus-h2">SDG Goals We Support</h2>
            <p className="sus-sh__p">CDP Japan actively contributes to 8 of the 17 UN Sustainable Development Goals through our operations and initiatives.</p>
          </div>

          <div className="sus-sdgs__grid">
            {SDG_GOALS.map((sdg, i) => (
              <div key={i} className="sus-sdg">
                <div className="sus-sdg__number">{sdg.number}</div>
                <div className="sus-sdg__title">{sdg.title}</div>
                <div className="sus-sdg__desc">{sdg.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`sus-section ${visible.has("actions") ? "sus--in" : ""}`} data-obs="actions" ref={obs("actions")} style={{ background: "var(--off)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Actions & Impact</span>
            <h2 className="sus-h2">Specific Initiatives for Each Goal</h2>
            <p className="sus-sh__p">Concrete actions we're taking to contribute to the SDGs.</p>
          </div>

          <div style={{ display: "grid", gap: "2rem", marginTop: "3rem", maxWidth: "1000px", margin: "3rem auto 0" }}>
            {SDG_ACTIONS.map((action, i) => (
              <div key={i} style={{ background: "var(--white)", padding: "2.5rem", borderRadius: "var(--r-lg)", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    borderRadius: "50%", 
                    background: "var(--accent)", 
                    color: "var(--white)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    flexShrink: 0
                  }}>
                    {action.goal}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 600, color: "var(--navy)", marginBottom: "0.5rem" }}>
                      {action.title}
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
                      {action.actions.map((act, j) => (
                        <li key={j} style={{ 
                          display: "flex", 
                          alignItems: "flex-start", 
                          gap: "0.75rem", 
                          padding: "0.5rem 0",
                          color: "var(--txt-2)",
                          fontSize: "0.95rem",
                          lineHeight: 1.7
                        }}>
                          <span style={{ color: "var(--accent)", fontWeight: 700 }}>•</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sus-progress">
                  <div className="sus-progress__header">
                    <div className="sus-progress__title">Progress</div>
                    <div className="sus-progress__percentage">{action.progress}%</div>
                  </div>
                  <div className="sus-progress__bar">
                    <div className="sus-progress__fill" style={{ width: `${action.progress}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`sus-section ${visible.has("metrics") ? "sus--in" : ""}`} data-obs="metrics" ref={obs("metrics")} style={{ background: "var(--white)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Progress Metrics</span>
            <h2 className="sus-h2">Measurable Outcomes</h2>
            <p className="sus-sh__p">Tracking our progress toward SDG contributions with transparent metrics.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
            <div style={{ background: "var(--off)", padding: "2rem", borderRadius: "var(--r-lg)", borderLeft: "3px solid var(--accent)", textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.5rem" }}>2,400+</div>
              <div style={{ fontWeight: 600, color: "var(--navy)", marginBottom: "0.25rem" }}>Workers Placed</div>
              <div style={{ color: "var(--txt-2)", fontSize: "0.85rem" }}>Annually (SDG 8)</div>
            </div>
            <div style={{ background: "var(--off)", padding: "2rem", borderRadius: "var(--r-lg)", borderLeft: "3px solid var(--accent)", textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.5rem" }}>42%</div>
              <div style={{ fontWeight: 600, color: "var(--navy)", marginBottom: "0.25rem" }}>Women in Workforce</div>
              <div style={{ color: "var(--txt-2)", fontSize: "0.85rem" }}>Above industry avg (SDG 5)</div>
            </div>
            <div style={{ background: "var(--off)", padding: "2rem", borderRadius: "var(--r-lg)", borderLeft: "3px solid var(--accent)", textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.5rem" }}>25%</div>
              <div style={{ fontWeight: 600, color: "var(--navy)", marginBottom: "0.25rem" }}>Carbon Reduction</div>
              <div style={{ color: "var(--txt-2)", fontSize: "0.85rem" }}>Achieved (SDG 13)</div>
            </div>
            <div style={{ background: "var(--off)", padding: "2rem", borderRadius: "var(--r-lg)", borderLeft: "3px solid var(--accent)", textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.5rem" }}>18%</div>
              <div style={{ fontWeight: 600, color: "var(--navy)", marginBottom: "0.25rem" }}>International Workers</div>
              <div style={{ color: "var(--txt-2)", fontSize: "0.85rem" }}>In placements (SDG 10)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sus-section sus-stats">
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Our Commitment</span>
            <h2 className="sus-h2" style={{ color: "var(--white)" }}>Building a Sustainable Future</h2>
            <p className="sus-sh__p" style={{ color: "rgba(255,255,255,0.75)" }}>
              CDP Japan is committed to contributing to the UN Sustainable Development Goals and creating positive impact for people, planet, and prosperity.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
