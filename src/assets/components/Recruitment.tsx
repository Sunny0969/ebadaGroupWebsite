import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Services.css";

const PROCESS_STEPS = [
  { num: 1, icon: "📝", title: "Job Analysis", desc: "We work with you to define role requirements, company culture fit, and ideal candidate profile." },
  { num: 2, icon: "🔎", title: "Candidate Search", desc: "Leveraging our extensive network and database to identify qualified candidates across Japan." },
  { num: 3, icon: "🤝", title: "Interview & Selection", desc: "We conduct initial screenings and coordinate interviews, presenting only the best-fit candidates." },
  { num: 4, icon: "✅", title: "Offer & Onboarding", desc: "Support through offer negotiation, background checks, and seamless onboarding process." },
];

const INDUSTRIES = [
  { icon: "💼", name: "Corporate", desc: "Office staff, administrative roles" },
  { icon: "🏭", name: "Manufacturing", desc: "Production managers, quality engineers" },
  { icon: "💻", name: "Technology", desc: "IT professionals, software engineers" },
  { icon: "📊", name: "Finance", desc: "Accountants, financial analysts" },
  { icon: "🏥", name: "Healthcare", desc: "Medical staff, healthcare administrators" },
  { icon: "🎓", name: "Education", desc: "Teachers, educational coordinators" },
];

const SUCCESS_STORIES = [
  {
    icon: "🏆",
    title: "Executive Recruitment Success",
    client: "Leading Manufacturing Firm",
    challenge: "Needed a bilingual Operations Director with 15+ years experience in automotive manufacturing.",
    solution: "CDP Japan leveraged our executive search network, identifying 8 qualified candidates within 2 weeks.",
    result: "Position filled in 6 weeks. Candidate has exceeded performance expectations and led 20% efficiency improvement."
  },
  {
    icon: "⭐",
    title: "Bulk Recruitment Campaign",
    client: "Retail Chain Expansion",
    challenge: "Required 50 store managers and 200 sales associates for nationwide expansion within 3 months.",
    solution: "Implemented multi-channel recruitment strategy with regional assessment centers and streamlined screening.",
    result: "All positions filled on schedule. 92% of new hires still with company after 12 months."
  }
];

const WHY_CHOOSE = [
  { icon: "🌐", title: "Extensive Network", desc: "Access to passive and active candidates across all industries and regions." },
  { icon: "🎯", title: "Precision Matching", desc: "Advanced candidate profiling ensures cultural and skill alignment." },
  { icon: "⚡", title: "Fast Turnaround", desc: "Average time-to-fill: 4-6 weeks for mid-level, 8-12 weeks for executive roles." },
  { icon: "💎", title: "Quality Guarantee", desc: "90-day replacement guarantee if candidate doesn't meet expectations." },
];

const FAQS = [
  { q: "What types of positions do you recruit for?", a: "We recruit across all levels from entry-level to C-suite executives, in manufacturing, corporate, IT, finance, healthcare, and education sectors." },
  { q: "How long does the recruitment process take?", a: "Typical timeline is 4-6 weeks for mid-level positions and 8-12 weeks for executive roles, depending on role complexity and market availability." },
  { q: "Do you offer replacement guarantees?", a: "Yes, we provide a 90-day replacement guarantee. If a placed candidate doesn't meet expectations, we'll find a replacement at no additional cost." },
  { q: "Can you handle bulk recruitment?", a: "Absolutely. We specialize in large-scale recruitment campaigns, managing multiple positions simultaneously with dedicated project teams." },
  { q: "What is your success rate?", a: "Our placement success rate is 94%, with 88% of placed candidates still in their roles after 12 months." },
];

export default function Recruitment() {
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
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80" alt="Recruitment" />
          <div className="sv-hero__veil" />
        </div>
        <div className="sv-wrap sv-hero__content">
          <h1 className="sv-hero__h1">Human Resources & Recruitment</h1>
          <p className="sv-hero__sub">Find the right talent, from entry-level to executive positions. Precision matching, nationwide network, guaranteed results.</p>
        </div>
      </section>

      <section className={`sv-section sv-overview ${visible.has("overview") ? "sv--in" : ""}`} data-obs="overview" ref={obs("overview")}>
        <div className="sv-wrap sv-overview__layout">
          <div className="sv-overview__text">
            <span className="sv-eyebrow">Service Overview</span>
            <h2 className="sv-h2">Comprehensive Recruitment Solutions</h2>
            <p>CDP Japan's Recruitment service connects employers with qualified candidates across all industries and experience levels. Whether you need a single executive hire or a bulk recruitment campaign, we deliver results through our extensive network and proven methodology.</p>
            <p>Our recruitment specialists understand Japan's job market dynamics, cultural nuances, and the importance of finding candidates who align with your company values and long-term goals.</p>
            <ul className="sv-overview__benefits">
              <li>Access to passive and active candidates nationwide</li>
              <li>Average time-to-fill: 4-6 weeks for mid-level roles</li>
              <li>90-day replacement guarantee</li>
              <li>94% placement success rate</li>
              <li>Dedicated recruitment consultants</li>
            </ul>
          </div>
          <div className="sv-overview__img">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" alt="Recruitment" />
          </div>
        </div>
      </section>

      <section className={`sv-section sv-process ${visible.has("process") ? "sv--in" : ""}`} data-obs="process" ref={obs("process")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Our Process</span>
            <h2 className="sv-h2">How It Works</h2>
            <p className="sv-sh__p">A systematic approach to finding the perfect candidate.</p>
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
            <h2 className="sv-h2">Sectors We Recruit For</h2>
            <p className="sv-sh__p">From corporate to manufacturing, we find talent across all industries.</p>
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
            <h2 className="sv-h2">Real Recruitment Results</h2>
            <p className="sv-sh__p">See how we've helped companies find exceptional talent.</p>
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
            <p className="sv-sh__p">Our competitive advantages in recruitment.</p>
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
          <p className="sv-pricing__p">Recruitment fees vary based on role level, complexity, and volume. Contact us for transparent pricing tailored to your needs.</p>
          <a href="#contact" className="sv-btn sv-btn--primary">Request Consultation</a>
        </div>
      </section>

      <section className={`sv-section sv-faq ${visible.has("faq") ? "sv--in" : ""}`} data-obs="faq" ref={obs("faq")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Frequently Asked Questions</span>
            <h2 className="sv-h2">Common Questions About Recruitment</h2>
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
          <h2 className="sv-h2 sv-cta__h2">Ready to Find Your Next Great Hire?</h2>
          <p className="sv-cta__p">Let's discuss how CDP Japan can help you find the perfect candidate for your team.</p>
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
