import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Services.css";

const PROCESS_STEPS = [
  { num: 1, icon: "📊", title: "Needs Analysis", desc: "Comprehensive assessment of your business functions suitable for outsourcing." },
  { num: 2, icon: "📋", title: "Solution Design", desc: "Customized outsourcing plan aligned with your business objectives and budget." },
  { num: 3, icon: "👥", title: "Team Deployment", desc: "Rapid deployment of skilled professionals to handle your outsourced functions." },
  { num: 4, icon: "📈", title: "Performance Management", desc: "Ongoing monitoring, reporting, and optimization to ensure quality delivery." },
];

const INDUSTRIES = [
  { icon: "📞", name: "Customer Service", desc: "Call centers, support teams" },
  { icon: "📝", name: "Data Entry", desc: "Data processing, transcription" },
  { icon: "📊", name: "Accounting", desc: "Bookkeeping, payroll, invoicing" },
  { icon: "📧", name: "Administrative", desc: "Virtual assistants, admin support" },
  { icon: "📦", name: "Logistics", desc: "Order processing, inventory management" },
  { icon: "💻", name: "IT Support", desc: "Help desk, technical support" },
];

const SUCCESS_STORIES = [
  {
    icon: "🏆",
    title: "Customer Service Outsourcing",
    client: "E-commerce Platform",
    challenge: "Needed 24/7 multilingual customer support without the overhead of in-house team management.",
    solution: "CDP Japan deployed a dedicated team of 3customer service specialists with language capabilities in Japanese, English, and Chinese.",
    result: "Customer satisfaction increased by 35%. Reduced operational costs by 40% while improving response times."
  },
  {
    icon: "⭐",
    title: "Accounting Function Outsourcing",
    client: "Manufacturing Company",
    challenge: "Required professional accounting services without hiring full-time staff.",
    solution: "Provided dedicated accounting team handling bookkeeping, payroll, and financial reporting.",
    result: "100% compliance rate. Reduced accounting costs by 50% while improving financial reporting accuracy."
  }
];

const WHY_CHOOSE = [
  { icon: "💰", title: "Cost Efficiency", desc: "Reduce operational costs by up to 50% compared to in-house teams." },
  { icon: "⚡", title: "Rapid Deployment", desc: "Get your outsourced team operational within 2-4 weeks." },
  { icon: "🎯", title: "Specialized Expertise", desc: "Access to professionals with deep expertise in specific functions." },
  { icon: "📊", title: "Scalable Solutions", desc: "Easily scale up or down based on business needs without hiring overhead." },
];

const FAQS = [
  { q: "What business functions can be outsourced?", a: "We handle customer service, data entry, accounting, administrative tasks, logistics support, and IT help desk functions." },
  { q: "How quickly can you deploy an outsourced team?", a: "Standard deployment takes 2-4 weeks, depending on function complexity and team size requirements." },
  { q: "Do you provide dedicated or shared teams?", a: "We offer both options. Dedicated teams work exclusively for you, while shared teams handle multiple clients efficiently." },
  { q: "How do you ensure quality and security?", a: "All team members undergo background checks, sign NDAs, and follow strict quality protocols with regular performance monitoring." },
  { q: "Can we scale the team size?", a: "Yes, our flexible model allows you to scale team size up or down based on business needs with minimal notice." },
];

export default function BusinessOutsourcing() {
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
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80" alt="Business Outsourcing" />
          <div className="sv-hero__veil" />
        </div>
        <div className="sv-wrap sv-hero__content">
          <h1 className="sv-hero__h1">Business Outsourcing</h1>
          <p className="sv-hero__sub">Streamline operations, reduce costs, focus on core business. Professional teams for customer service, accounting, and more.</p>
        </div>
      </section>

      <section className={`sv-section sv-overview ${visible.has("overview") ? "sv--in" : ""}`} data-obs="overview" ref={obs("overview")}>
        <div className="sv-wrap sv-overview__layout">
          <div className="sv-overview__text">
            <span className="sv-eyebrow">Service Overview</span>
            <h2 className="sv-h2">Comprehensive Business Process Outsourcing</h2>
            <p>CDP Japan's Business Outsourcing service allows you to delegate non-core functions to our professional teams, enabling you to focus on strategic growth while reducing operational costs.</p>
            <p>From customer service to accounting, we provide skilled professionals who integrate seamlessly into your business operations, delivering quality results while you maintain control and oversight.</p>
            <ul className="sv-overview__benefits">
              <li>Reduce operational costs by up to 50%</li>
              <li>Rapid deployment within 2-4 weeks</li>
              <li>Dedicated or shared team options</li>
              <li>Scalable solutions for growing businesses</li>
              <li>Full quality monitoring and reporting</li>
            </ul>
          </div>
          <div className="sv-overview__img">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Business Outsourcing" />
          </div>
        </div>
      </section>

      <section className={`sv-section sv-process ${visible.has("process") ? "sv--in" : ""}`} data-obs="process" ref={obs("process")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Our Process</span>
            <h2 className="sv-h2">How It Works</h2>
            <p className="sv-sh__p">A streamlined approach to business process outsourcing.</p>
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
            <span className="sv-eyebrow">Services Offered</span>
            <h2 className="sv-h2">Business Functions We Handle</h2>
            <p className="sv-sh__p">Comprehensive outsourcing solutions across multiple business functions.</p>
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
            <h2 className="sv-h2">Real Outsourcing Results</h2>
            <p className="sv-sh__p">See how we've helped businesses streamline operations.</p>
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
            <p className="sv-sh__p">Our competitive advantages in business outsourcing.</p>
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
          <p className="sv-pricing__p">Outsourcing costs vary based on function, team size, and service level. Contact us for a detailed quote tailored to your needs.</p>
          <a href="#contact" className="sv-btn sv-btn--primary">Request Consultation</a>
        </div>
      </section>

      <section className={`sv-section sv-faq ${visible.has("faq") ? "sv--in" : ""}`} data-obs="faq" ref={obs("faq")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Frequently Asked Questions</span>
            <h2 className="sv-h2">Common Questions About Business Outsourcing</h2>
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
          <h2 className="sv-h2 sv-cta__h2">Ready to Streamline Your Operations?</h2>
          <p className="sv-cta__p">Let's discuss how CDP Japan can help you reduce costs and focus on core business growth.</p>
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
