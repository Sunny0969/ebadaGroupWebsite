import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Sustainability.css";

const DEI_STATS = [
  { value: "42%", label: "Women in Workforce" },
  { value: "18%", label: "International Workers" },
  { value: "35%", label: "Management Diversity" },
  { value: "95%", label: "Equal Pay Compliance" }
];

const DEI_INITIATIVES = [
  {
    title: "Gender Equality Program",
    description: "Active promotion of women into leadership roles, equal pay initiatives, and flexible work arrangements to support work-life balance.",
    icon: "👩‍💼"
  },
  {
    title: "International Worker Integration",
    description: "Comprehensive support programs for international workers including language training, cultural orientation, and career development opportunities.",
    icon: "🌍"
  },
  {
    title: "Inclusive Hiring Practices",
    description: "Blind recruitment processes, diverse interview panels, and partnerships with organizations supporting underrepresented groups.",
    icon: "🤝"
  },
  {
    title: "Employee Resource Groups",
    description: "Supporting employee-led groups for women, LGBTQ+, international workers, and other communities to foster inclusion and belonging.",
    icon: "👥"
  }
];

const SAFETY_METRICS = [
  { value: "0.2", label: "Lost Time Injury Rate", desc: "Per 200,000 hours worked" },
  { value: "100%", label: "Safety Training Completion", desc: "All placed workers" },
  { value: "ISO 45001", label: "Safety Certification", desc: "Occupational Health & Safety" },
  { value: "24/7", label: "Safety Support", desc: "Emergency response system" }
];

const COMMUNITY_PROGRAMS = [
  {
    title: "Local Sports Sponsorships",
    description: "Supporting youth sports teams and community athletic programs across 12 prefectures. Promoting health, teamwork, and community spirit.",
    icon: "⚽"
  },
  {
    title: "Educational Scholarships",
    description: "Annual scholarship program for children of placed workers, supporting access to higher education and vocational training.",
    icon: "🎓"
  },
  {
    title: "Disaster Relief Support",
    description: "Rapid response teams and financial support for communities affected by natural disasters. Employee volunteer programs.",
    icon: "🏘️"
  },
  {
    title: "Cultural Exchange Programs",
    description: "Organizing cultural events and exchange programs to bridge communities and celebrate diversity in the workplace.",
    icon: "🎌"
  }
];

export default function SocialResponsibility() {
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
          <h1 className="sus-h1 sus-hero__h1">Social Responsibility</h1>
          <p className="sus-hero__p">Building inclusive workplaces, ensuring worker rights, and creating positive impact in our communities.</p>
        </div>
      </section>

      <section className={`sus-section ${visible.has("rights") ? "sus--in" : ""}`} data-obs="rights" ref={obs("rights")} style={{ background: "var(--white)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Human Rights</span>
            <h2 className="sus-h2">Human Rights Policy</h2>
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto", background: "var(--off)", padding: "3rem", borderRadius: "var(--r-lg)", borderLeft: "4px solid var(--accent)" }}>
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              CDP Japan is committed to respecting and promoting human rights in all our operations. We believe that every worker deserves dignity, fair treatment, and safe working conditions, regardless of nationality, gender, age, or background.
            </p>
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Our human rights policy ensures zero tolerance for discrimination, harassment, forced labor, or child labor. We conduct regular audits of our operations and client workplaces, provide grievance mechanisms, and work with partners who share our commitment to human rights.
            </p>
            <p style={{ color: "var(--txt-2)", fontSize: "1.05rem", lineHeight: 1.9 }}>
              We are signatories to the UN Global Compact and align our practices with international human rights standards, including the Universal Declaration of Human Rights and ILO conventions.
            </p>
          </div>
        </div>
      </section>

      <section className={`sus-section ${visible.has("dei") ? "sus--in" : ""}`} data-obs="dei" ref={obs("dei")} style={{ background: "var(--off)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Diversity & Inclusion</span>
            <h2 className="sus-h2">DEI Initiatives</h2>
            <p className="sus-sh__p">Building diverse, inclusive workplaces where everyone can thrive.</p>
          </div>

          <div className="sus-stats__grid" style={{ marginTop: "2rem", marginBottom: "3rem" }}>
            {DEI_STATS.map((stat, i) => (
              <div key={i} className="sus-stat" style={{ background: "var(--white)", color: "var(--txt)" }}>
                <div className="sus-stat__value" style={{ color: "var(--accent)" }}>{stat.value}</div>
                <div className="sus-stat__label" style={{ color: "var(--txt-2)" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
            {DEI_INITIATIVES.map((initiative, i) => (
              <div key={i} style={{ background: "var(--white)", padding: "2rem", borderRadius: "var(--r-lg)", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{initiative.icon}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 600, color: "var(--navy)", marginBottom: "0.75rem" }}>
                  {initiative.title}
                </h3>
                <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`sus-section ${visible.has("safety") ? "sus--in" : ""}`} data-obs="safety" ref={obs("safety")} style={{ background: "var(--white)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Safety & Health</span>
            <h2 className="sus-h2">Workplace Safety & Health</h2>
            <p className="sus-sh__p">Ensuring safe working conditions and promoting employee wellbeing.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
            {SAFETY_METRICS.map((metric, i) => (
              <div key={i} style={{ background: "var(--off)", padding: "2rem", borderRadius: "var(--r-lg)", borderLeft: "3px solid var(--accent)", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.5rem" }}>
                  {metric.value}
                </div>
                <div style={{ fontWeight: 600, color: "var(--navy)", marginBottom: "0.25rem", fontSize: "1.1rem" }}>
                  {metric.label}
                </div>
                <div style={{ color: "var(--txt-2)", fontSize: "0.85rem" }}>
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem", maxWidth: "900px", margin: "3rem auto 0", background: "var(--off)", padding: "2.5rem", borderRadius: "var(--r-lg)" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 600, color: "var(--navy)", marginBottom: "1rem" }}>
              Health & Wellness Programs
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Annual health checkups for all employees",
                "Mental health support and counseling services",
                "Ergonomic workplace assessments",
                "Stress management workshops",
                "Smoking cessation programs",
                "Fitness and wellness activities"
              ].map((item, i) => (
                <li key={i} style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.75rem", 
                  padding: "0.75rem 0",
                  color: "var(--txt-2)",
                  fontSize: "1rem",
                  lineHeight: 1.7
                }}>
                  <span style={{ color: "var(--accent)", fontWeight: 700 }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`sus-section ${visible.has("community") ? "sus--in" : ""}`} data-obs="community" ref={obs("community")} style={{ background: "var(--off)" }}>
        <div className="sus-wrap">
          <div className="sus-sh">
            <span className="sus-eyebrow">Community Engagement</span>
            <h2 className="sus-h2">Community Programs</h2>
            <p className="sus-sh__p">Supporting local communities through initiatives, sponsorships, and volunteer programs.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
            {COMMUNITY_PROGRAMS.map((program, i) => (
              <div key={i} style={{ background: "var(--white)", padding: "2rem", borderRadius: "var(--r-lg)", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{program.icon}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 600, color: "var(--navy)", marginBottom: "0.75rem" }}>
                  {program.title}
                </h3>
                <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
