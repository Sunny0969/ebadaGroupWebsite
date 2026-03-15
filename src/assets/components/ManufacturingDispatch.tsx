import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Services.css";

const PROCESS_STEPS = [
  { num: 1, icon: "📋", title: "Needs Assessment", desc: "We analyze your production requirements, peak seasons, and workforce gaps to design a tailored staffing solution." },
  { num: 2, icon: "🔍", title: "Candidate Screening", desc: "Rigorous 7-stage screening process ensures every worker meets your quality standards and safety requirements." },
  { num: 3, icon: "👥", title: "Placement & Onboarding", desc: "Seamless integration with your team, including orientation, safety training, and compliance documentation." },
  { num: 4, icon: "📊", title: "Ongoing Support", desc: "Dedicated HR coordinators provide continuous support, performance monitoring, and replacement if needed." },
];

const INDUSTRIES = [
  { icon: "🚗", name: "Automotive", desc: "Assembly line workers, quality inspectors" },
  { icon: "📱", name: "Electronics", desc: "Component assembly, testing specialists" },
  { icon: "🏭", name: "Heavy Machinery", desc: "Production operators, maintenance staff" },
  { icon: "📦", name: "Packaging", desc: "Packaging operators, quality control" },
  { icon: "🔧", name: "Metalworking", desc: "Welders, machinists, fabricators" },
  { icon: "🧪", name: "Chemicals", desc: "Process operators, safety specialists" },
];

const SUCCESS_STORIES = [
  {
    icon: "🏆",
    title: "Automotive Assembly Line Expansion",
    client: "Major Automotive Manufacturer",
    challenge: "Needed 200 skilled assembly workers within 3 weeks for a new production line launch.",
    solution: "CDP Japan deployed our rapid placement system, conducting targeted recruitment and accelerated screening across 5 prefectures.",
    result: "200 workers placed in 18 days. Zero safety incidents in first 6 months. 95% retention rate after one year."
  },
  {
    icon: "⭐",
    title: "Seasonal Production Support",
    client: "Electronics Manufacturer",
    challenge: "Required flexible workforce scaling for peak production periods without long-term commitments.",
    solution: "Implemented flexible dispatch contracts with pre-screened worker pool, allowing rapid scaling up and down.",
    result: "Reduced labor costs by 30% during off-peak periods. Maintained 100% on-time delivery during peak seasons."
  }
];

const WHY_CHOOSE = [
  { icon: "⚡", title: "Rapid Placement", desc: "Average placement time of 7-10 days, significantly faster than industry standard." },
  { icon: "✅", title: "Quality Guaranteed", desc: "7-stage screening process ensures only qualified, safety-certified workers." },
  { icon: "🌐", title: "Nationwide Coverage", desc: "Access to skilled workers across all 47 prefectures of Japan." },
  { icon: "💼", title: "Flexible Contracts", desc: "Short-term, long-term, and seasonal options tailored to your needs." },
];

const FAQS = [
  { q: "What types of manufacturing roles can you fill?", a: "We place workers across all manufacturing sectors including assembly, quality control, machine operation, maintenance, packaging, and logistics support." },
  { q: "How quickly can you provide workers?", a: "Standard placements take 7-10 business days. For urgent needs, we offer expedited placement within 3-5 days." },
  { q: "What screening process do you use?", a: "Our 7-stage process includes skills assessment, background checks, safety certification verification, behavioral interviews, and reference checks." },
  { q: "Can you handle seasonal workforce scaling?", a: "Yes, we specialize in flexible staffing solutions for peak production periods, allowing you to scale up or down as needed." },
  { q: "What happens if a placed worker doesn't meet expectations?", a: "We provide replacement workers at no additional cost within 48 hours, ensuring minimal disruption to your operations." },
];

export default function ManufacturingDispatch() {
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
    <div className="sv">
      <Header />

      {/* ── HERO ── */}
      <section className="sv-hero">
        <div className="sv-hero__bg">
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80" alt="Manufacturing" />
          <div className="sv-hero__veil" />
        </div>
        <div className="sv-wrap sv-hero__content">
          <h1 className="sv-hero__h1">Manufacturing Dispatch</h1>
          <p className="sv-hero__sub">Reliable, skilled workers for Japan's manufacturing sector. Fast placement, quality guaranteed, nationwide coverage.</p>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className={`sv-section sv-overview ${visible.has("overview") ? "sv--in" : ""}`} data-obs="overview" ref={obs("overview")}>
        <div className="sv-wrap sv-overview__layout">
          <div className="sv-overview__text">
            <span className="sv-eyebrow">Service Overview</span>
            <h2 className="sv-h2">Skilled Workers for Manufacturing Excellence</h2>
            <p>CDP Japan's Manufacturing Dispatch service connects manufacturers with qualified, safety-certified workers across all production roles. From assembly line operators to quality control specialists, we provide the workforce you need to maintain production schedules and meet quality standards.</p>
            <p>With 3years of experience in Japan's manufacturing sector, we understand the unique demands of production environments and the importance of reliable, skilled workers who can integrate seamlessly into your operations.</p>
            <ul className="sv-overview__benefits">
              <li>7-stage screening process ensures quality</li>
              <li>Average placement time: 7-10 business days</li>
              <li>Nationwide coverage across all 47 prefectures</li>
              <li>Flexible contracts: short-term, long-term, seasonal</li>
              <li>Dedicated HR support throughout placement</li>
            </ul>
          </div>
          <div className="sv-overview__img">
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" alt="Manufacturing Workers" />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={`sv-section sv-process ${visible.has("process") ? "sv--in" : ""}`} data-obs="process" ref={obs("process")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Our Process</span>
            <h2 className="sv-h2">How It Works</h2>
            <p className="sv-sh__p">A streamlined 4-step process designed for speed, quality, and reliability.</p>
          </div>
          <div className="sv-process__grid">
            {PROCESS_STEPS.map((step, i) => (
              <div className="sv-step" key={i} style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
                <div className="sv-step__num">{step.num}</div>
                <span className="sv-step__icon">{step.icon}</span>
                <h3 className="sv-step__title">{step.title}</h3>
                <p className="sv-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className={`sv-section sv-industries ${visible.has("industries") ? "sv--in" : ""}`} data-obs="industries" ref={obs("industries")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Industries Served</span>
            <h2 className="sv-h2">Manufacturing Sectors We Support</h2>
            <p className="sv-sh__p">From automotive to electronics, we provide skilled workers across all manufacturing industries.</p>
          </div>
          <div className="sv-industries__grid">
            {INDUSTRIES.map((industry, i) => (
              <div className="sv-industry" key={i}>
                <span className="sv-industry__icon">{industry.icon}</span>
                <div className="sv-industry__name">{industry.name}</div>
                <div className="sv-industry__desc">{industry.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ── */}
      <section className={`sv-section sv-stories ${visible.has("stories") ? "sv--in" : ""}`} data-obs="stories" ref={obs("stories")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Success Stories</span>
            <h2 className="sv-h2">Real Results for Manufacturing Clients</h2>
            <p className="sv-sh__p">See how we've helped manufacturers meet their workforce needs.</p>
          </div>
          <div className="sv-stories__grid">
            {SUCCESS_STORIES.map((story, i) => (
              <div className="sv-story" key={i}>
                <div className="sv-story__header">
                  <span className="sv-story__icon">{story.icon}</span>
                  <div>
                    <h3 className="sv-story__title">{story.title}</h3>
                    <div className="sv-story__client">{story.client}</div>
                  </div>
                </div>
                <div className="sv-story__challenge">
                  <span className="sv-story__label">Challenge</span>
                  <p className="sv-story__text">{story.challenge}</p>
                </div>
                <div className="sv-story__solution">
                  <span className="sv-story__label">Solution</span>
                  <p className="sv-story__text">{story.solution}</p>
                </div>
                <div className="sv-story__result">
                  <span className="sv-story__label">Result</span>
                  <p className="sv-story__text">{story.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className={`sv-section sv-why ${visible.has("why") ? "sv--in" : ""}`} data-obs="why" ref={obs("why")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Why Choose Us</span>
            <h2 className="sv-h2">What Sets CDP Japan Apart</h2>
            <p className="sv-sh__p">Our competitive advantages in manufacturing staffing.</p>
          </div>
          <div className="sv-why__grid">
            {WHY_CHOOSE.map((feature, i) => (
              <div className="sv-feature" key={i}>
                <span className="sv-feature__icon">{feature.icon}</span>
                <h3 className="sv-feature__title">{feature.title}</h3>
                <p className="sv-feature__desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="sv-section sv-pricing">
        <div className="sv-wrap sv-pricing__content">
          <h2 className="sv-h2 sv-pricing__h2">Get a Custom Quote</h2>
          <p className="sv-pricing__p">Every manufacturing operation is unique. Contact us for a personalized quote based on your specific workforce needs, timeline, and requirements.</p>
          <a href="#contact" className="sv-btn sv-btn--primary">Request Consultation</a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`sv-section sv-faq ${visible.has("faq") ? "sv--in" : ""}`} data-obs="faq" ref={obs("faq")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Frequently Asked Questions</span>
            <h2 className="sv-h2">Common Questions About Manufacturing Dispatch</h2>
          </div>
          <div className="sv-faq__list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`sv-faq-item ${openFaq === i ? "sv-faq-item--open" : ""}`}>
                <button className="sv-faq-item__question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="sv-faq-item__icon">▼</span>
                </button>
                <div className="sv-faq-item__answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sv-section sv-cta">
        <div className="sv-wrap sv-cta__content">
          <h2 className="sv-h2 sv-cta__h2">Ready to Strengthen Your Manufacturing Workforce?</h2>
          <p className="sv-cta__p">Let's discuss how CDP Japan can provide the skilled workers you need to meet production goals and maintain quality standards.</p>
          <div className="sv-cta__actions">
            <a href="#contact" className="sv-btn sv-btn--primary">Get Started</a>
            <a href="#contact" className="sv-btn sv-btn--ghost">Request Consultation</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
