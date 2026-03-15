import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Employers.css";

const SERVICES = [
  {
    icon: "🏭",
    title: "Manufacturing Dispatch",
    description: "Rapid placement of skilled production workers. Average placement time: 7-10 days. 7-stage quality screening process.",
    benefits: [
      "Nationwide coverage across 47 prefectures",
      "Flexible contracts: short-term, long-term, seasonal",
      "Dedicated HR support throughout placement",
      "96% client retention rate"
    ]
  },
  {
    icon: "👔",
    title: "Recruitment Services",
    description: "Find the right talent from entry-level to executive positions. Precision matching with 94% success rate.",
    benefits: [
      "4-6 weeks average time-to-fill",
      "90-day replacement guarantee",
      "Access to passive and active candidates",
      "Executive search capabilities"
    ]
  },
  {
    icon: "💼",
    title: "Business Outsourcing",
    description: "Delegate non-core functions to our professional teams. Reduce costs by up to 50% while maintaining quality.",
    benefits: [
      "Customer service, accounting, admin support",
      "Rapid deployment within 2-4 weeks",
      "Scalable team solutions",
      "Full quality monitoring"
    ]
  },
  {
    icon: "⚙️",
    title: "Engineer Dispatch",
    description: "Specialized engineers for R&D, manufacturing, and technical projects. Certified professionals across all disciplines.",
    benefits: [
      "2-3 weeks average placement time",
      "Verified certifications and qualifications",
      "Project-based or long-term engagement",
      "Strict confidentiality protocols"
    ]
  },
  {
    icon: "🌍",
    title: "Foreign Employment Support",
    description: "Complete international workforce solutions. From recruitment to integration, visa processing, and cultural training.",
    benefits: [
      "Global recruitment network",
      "Pre-departure training programs",
      "Complete visa support",
      "Ongoing integration assistance"
    ]
  },
  {
    icon: "🔄",
    title: "Re-employment Support",
    description: "Help individuals re-enter the workforce with career counseling, skills training, and job placement services.",
    benefits: [
      "Personalized career counseling",
      "Skills enhancement programs",
      "Job matching across industries",
      "Ongoing support after placement"
    ]
  }
];

const SUCCESS_STORIES = [
  {
    icon: "🏆",
    title: "Automotive Manufacturer Expansion",
    client: "Major Automotive Parts Company",
    challenge: "Needed 200 skilled production workers within 3 weeks for new production line launch.",
    solution: "CDP Japan deployed rapid placement system, conducting targeted recruitment across 5 prefectures with accelerated screening.",
    result: "200 workers placed in 18 days. Zero safety incidents. 95% retention after one year.",
    metrics: [
      { value: "18 Days", label: "Time to Fill" },
      { value: "95%", label: "Retention Rate" },
      { value: "0", label: "Safety Incidents" }
    ]
  },
  {
    icon: "⭐",
    title: "Executive Recruitment Success",
    client: "Leading Manufacturing Firm",
    challenge: "Required bilingual Operations Director with 15+ years experience in automotive manufacturing.",
    solution: "Leveraged executive search network, identifying 8 qualified candidates within 2 weeks through targeted approach.",
    result: "Position filled in 6 weeks. Candidate exceeded expectations and led 20% efficiency improvement.",
    metrics: [
      { value: "6 Weeks", label: "Time to Fill" },
      { value: "8", label: "Qualified Candidates" },
      { value: "20%", label: "Efficiency Gain" }
    ]
  },
  {
    icon: "💡",
    title: "Seasonal Workforce Scaling",
    client: "Electronics Manufacturer",
    challenge: "Required flexible workforce scaling for peak production without long-term commitments.",
    solution: "Implemented flexible dispatch contracts with pre-screened worker pool, enabling rapid scaling.",
    result: "Reduced labor costs by 30% during off-peak. Maintained 100% on-time delivery during peak seasons.",
    metrics: [
      { value: "30%", label: "Cost Reduction" },
      { value: "100%", label: "On-Time Delivery" },
      { value: "Flexible", label: "Scaling Model" }
    ]
  }
];

const INDUSTRIES = [
  { icon: "🚗", name: "Automotive", desc: "Assembly, quality control, engineering" },
  { icon: "📱", name: "Electronics", desc: "Component assembly, testing, R&D" },
  { icon: "🏗️", name: "Construction", desc: "Skilled trades, project management" },
  { icon: "⚙️", name: "Heavy Machinery", desc: "Production, maintenance, engineering" },
  { icon: "📦", name: "Logistics", desc: "Warehouse, distribution, delivery" },
  { icon: "🧪", name: "Chemicals", desc: "Process operations, safety specialists" },
  { icon: "🏥", name: "Healthcare", desc: "Medical staff, care workers" },
  { icon: "💻", name: "Technology", desc: "IT professionals, software engineers" }
];

export default function EmployerServices() {
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
    <div className="emp">
      <Header />

      <section className="emp-hero">
        <div className="emp-wrap">
          <h1 className="emp-h1 emp-hero__h1">Workforce Solutions for Employers</h1>
          <p className="emp-hero__p">Partner with CDP Japan to find the right talent, scale your workforce, and drive business growth. 3years of excellence in Japanese staffing.</p>
        </div>
      </section>

      <section className={`emp-section ${visible.has("services") ? "emp--in" : ""}`} data-obs="services" ref={obs("services")} style={{ background: "var(--white)" }}>
        <div className="emp-wrap">
          <div className="emp-sh">
            <span className="emp-eyebrow">Our Services</span>
            <h2 className="emp-h2">Comprehensive Workforce Solutions</h2>
            <p className="emp-sh__p">From manufacturing dispatch to executive recruitment, we provide end-to-end staffing solutions tailored to your needs.</p>
          </div>

          <div className="emp-services__grid">
            {SERVICES.map((service, i) => (
              <div key={i} className="emp-service-card" style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
                <span className="emp-service-card__icon">{service.icon}</span>
                <h3 className="emp-service-card__title">{service.title}</h3>
                <p className="emp-service-card__desc">{service.description}</p>
                <ul className="emp-service-card__benefits">
                  {service.benefits.map((benefit, j) => (
                    <li key={j}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`emp-section ${visible.has("stories") ? "emp--in" : ""}`} data-obs="stories" ref={obs("stories")} style={{ background: "var(--off)" }}>
        <div className="emp-wrap">
          <div className="emp-sh">
            <span className="emp-eyebrow">Client Success</span>
            <h2 className="emp-h2">Real Results, Real ROI</h2>
            <p className="emp-sh__p">See how we've helped companies across Japan achieve their workforce goals.</p>
          </div>

          <div className="emp-stories__grid">
            {SUCCESS_STORIES.map((story, i) => (
              <div key={i} className="emp-story">
                <div className="emp-story__header">
                  <span className="emp-story__icon">{story.icon}</span>
                  <div>
                    <h3 className="emp-story__title">{story.title}</h3>
                    <div className="emp-story__client">{story.client}</div>
                  </div>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "var(--accent)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Challenge</strong>
                  <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.7, marginTop: "0.5rem" }}>{story.challenge}</p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "var(--accent)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Solution</strong>
                  <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.7, marginTop: "0.5rem" }}>{story.solution}</p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "var(--accent)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Result</strong>
                  <p style={{ color: "var(--txt-2)", fontSize: "0.95rem", lineHeight: 1.7, marginTop: "0.5rem" }}>{story.result}</p>
                </div>
                <div className="emp-story__metric">
                  {story.metrics.map((metric, j) => (
                    <div key={j} className="emp-story__metric-item">
                      <div className="emp-story__metric-value">{metric.value}</div>
                      <div className="emp-story__metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`emp-section ${visible.has("industries") ? "emp--in" : ""}`} data-obs="industries" ref={obs("industries")} style={{ background: "var(--white)" }}>
        <div className="emp-wrap">
          <div className="emp-sh">
            <span className="emp-eyebrow">Industry Specializations</span>
            <h2 className="emp-h2">Industries We Serve</h2>
            <p className="emp-sh__p">Deep expertise across Japan's key industrial sectors.</p>
          </div>

          <div className="emp-industries__grid">
            {INDUSTRIES.map((industry, i) => (
              <div key={i} className="emp-industry">
                <span className="emp-industry__icon">{industry.icon}</span>
                <div className="emp-industry__name">{industry.name}</div>
                <div className="emp-industry__desc">{industry.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="emp-section" style={{ background: "var(--navy)", color: "var(--white)", textAlign: "center" }}>
        <div className="emp-wrap">
          <h2 className="emp-h2" style={{ color: "var(--white)", marginBottom: "1.5rem" }}>Ready to Build Your Workforce?</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "700px", margin: "0 auto 2rem" }}>
            Let's discuss how CDP Japan can help you find the right talent and scale your operations.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/employers/post-job" className="emp-btn emp-btn--primary">Post a Job</Link>
            <Link to="/employers/post-job" className="emp-btn emp-btn--ghost">Request Consultation</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
