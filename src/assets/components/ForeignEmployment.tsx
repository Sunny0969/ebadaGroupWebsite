import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Services.css";

const PROCESS_STEPS = [
  { num: 1, icon: "🌍", title: "Recruitment & Selection", desc: "Sourcing qualified international candidates through our global partner network." },
  { num: 2, icon: "📚", title: "Pre-Departure Training", desc: "Comprehensive training in Japanese language, culture, and workplace practices." },
  { num: 3, icon: "📋", title: "Visa & Documentation", desc: "Complete support for work visas, permits, and all required documentation." },
  { num: 4, icon: "✈️", title: "Arrival & Integration", desc: "Airport pickup, accommodation support, and workplace integration assistance." },
];

const INDUSTRIES = [
  { icon: "🏭", name: "Manufacturing", desc: "Production workers, assembly operators" },
  { icon: "🏗️", name: "Construction", desc: "Construction workers, skilled trades" },
  { icon: "🌾", name: "Agriculture", desc: "Farm workers, agricultural specialists" },
  { icon: "🏥", name: "Healthcare", desc: "Nurses, care workers, medical staff" },
  { icon: "🍽️", name: "Hospitality", desc: "Hotel staff, restaurant workers" },
  { icon: "📦", name: "Logistics", desc: "Warehouse workers, delivery staff" },
];

const SUCCESS_STORIES = [
  {
    icon: "🏆",
    title: "Manufacturing Workforce Integration",
    client: "Automotive Parts Manufacturer",
    challenge: "Needed 150 skilled production workers to address labor shortage. Required workers with technical training and Japanese language basics.",
    solution: "CDP Japan recruited candidates from Southeast Asia, provided 3-month pre-departure training in Japanese and technical skills, and managed complete visa process.",
    result: "150 workers successfully integrated. 98% retention rate after 12 months. Production capacity increased by 35%."
  },
  {
    icon: "⭐",
    title: "Healthcare Worker Program",
    client: "Healthcare Facility Network",
    challenge: "Critical shortage of care workers for elderly care facilities across multiple prefectures.",
    solution: "Recruited certified nurses and care workers, provided specialized training in Japanese healthcare protocols, and coordinated placements across 12 facilities.",
    result: "60 healthcare workers placed. All passed Japanese certification exams. Patient satisfaction scores improved significantly."
  }
];

const WHY_CHOOSE = [
  { icon: "🌐", title: "Global Network", desc: "Partnerships with recruitment agencies across Asia, enabling access to qualified candidates." },
  { icon: "📚", title: "Comprehensive Training", desc: "Pre-departure training programs covering language, culture, and job-specific skills." },
  { icon: "📋", title: "Full Visa Support", desc: "Complete handling of visa applications, work permits, and documentation." },
  { icon: "🤝", title: "Integration Support", desc: "Ongoing support for workers including accommodation, language classes, and cultural adaptation." },
];

const FAQS = [
  { q: "Which countries do you recruit from?", a: "We recruit from Southeast Asia (Vietnam, Philippines, Indonesia, Thailand), South Asia (Nepal, Bangladesh), and other regions based on visa eligibility." },
  { q: "What training do workers receive before arrival?", a: "Pre-departure training includes Japanese language (basic to intermediate), workplace culture, safety protocols, and job-specific technical skills." },
  { q: "How long does the visa process take?", a: "Typical timeline is 3-6 months from recruitment to arrival, depending on visa type and country of origin." },
  { q: "Do you provide accommodation support?", a: "Yes, we assist with finding suitable accommodation and provide ongoing support for housing-related matters." },
  { q: "What happens if a worker doesn't adapt well?", a: "We provide comprehensive support including additional language training, cultural counseling, and if needed, replacement options." },
];

export default function ForeignEmployment() {
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

      <section className="sv-hero">
        <div className="sv-hero__bg">
          <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45f?w=1600&q=80" alt="Foreign Employment" />
          <div className="sv-hero__veil" />
        </div>
        <div className="sv-wrap sv-hero__content">
          <h1 className="sv-hero__h1">Foreign Employment Support</h1>
          <p className="sv-hero__sub">International talent for Japan's workforce. Complete support from recruitment to integration, visa processing, and cultural training.</p>
        </div>
      </section>

      <section className={`sv-section sv-overview ${visible.has("overview") ? "sv--in" : ""}`} data-obs="overview" ref={obs("overview")}>
        <div className="sv-wrap sv-overview__layout">
          <div className="sv-overview__text">
            <span className="sv-eyebrow">Service Overview</span>
            <h2 className="sv-h2">International Workforce Solutions</h2>
            <p>CDP Japan's Foreign Employment Support service helps Japanese companies address labor shortages by recruiting, training, and integrating qualified international workers.</p>
            <p>From recruitment in source countries to pre-departure training, visa processing, and ongoing integration support, we provide end-to-end solutions for international workforce needs.</p>
            <ul className="sv-overview__benefits">
              <li>Global recruitment network across Asia</li>
              <li>Comprehensive pre-departure training programs</li>
              <li>Complete visa and documentation support</li>
              <li>Cultural integration and language support</li>
              <li>Ongoing worker support and retention programs</li>
            </ul>
          </div>
          <div className="sv-overview__img">
            <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45f?w=800&q=80" alt="International Workers" />
          </div>
        </div>
      </section>

      <section className={`sv-section sv-process ${visible.has("process") ? "sv--in" : ""}`} data-obs="process" ref={obs("process")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Our Process</span>
            <h2 className="sv-h2">How It Works</h2>
            <p className="sv-sh__p">A comprehensive approach to international workforce integration.</p>
          </div>
          <div className="sv-process__grid">
            {PROCESS_STEPS.map((step, i) => (
              <div className="sv-step" key={i}>
                <div className="sv-step__num">{step.num}</div>
                <span className="sv-step__icon">{step.icon}</span>
                <h3 className="sv-step__title">{step.title}</h3>
                <p className="sv-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`sv-section sv-industries ${visible.has("industries") ? "sv--in" : ""}`} data-obs="industries" ref={obs("industries")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Industries Served</span>
            <h2 className="sv-h2">Sectors We Support</h2>
            <p className="sv-sh__p">International workers across multiple industries in Japan.</p>
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

      <section className={`sv-section sv-stories ${visible.has("stories") ? "sv--in" : ""}`} data-obs="stories" ref={obs("stories")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Success Stories</span>
            <h2 className="sv-h2">Real International Workforce Results</h2>
            <p className="sv-sh__p">See how we've helped companies integrate international talent.</p>
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

      <section className={`sv-section sv-why ${visible.has("why") ? "sv--in" : ""}`} data-obs="why" ref={obs("why")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Why Choose Us</span>
            <h2 className="sv-h2">What Sets CDP Japan Apart</h2>
            <p className="sv-sh__p">Our competitive advantages in international employment.</p>
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

      <section className="sv-section sv-pricing">
        <div className="sv-wrap sv-pricing__content">
          <h2 className="sv-h2 sv-pricing__h2">Get a Custom Quote</h2>
          <p className="sv-pricing__p">International employment costs vary based on recruitment volume, training requirements, and visa types. Contact us for detailed pricing.</p>
          <a href="#contact" className="sv-btn sv-btn--primary">Request Consultation</a>
        </div>
      </section>

      <section className={`sv-section sv-faq ${visible.has("faq") ? "sv--in" : ""}`} data-obs="faq" ref={obs("faq")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Frequently Asked Questions</span>
            <h2 className="sv-h2">Common Questions About Foreign Employment</h2>
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

      <section className="sv-section sv-cta">
        <div className="sv-wrap sv-cta__content">
          <h2 className="sv-h2 sv-cta__h2">Ready to Build Your International Workforce?</h2>
          <p className="sv-cta__p">Let's discuss how CDP Japan can help you access qualified international talent.</p>
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
