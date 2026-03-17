import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Services.css";

const PROCESS_STEPS = [
  { num: 1, icon: "🔧", title: "Technical Assessment", desc: "Evaluation of your engineering requirements, project scope, and technical specifications." },
  { num: 2, icon: "👨‍💻", title: "Engineer Matching", desc: "Matching qualified engineers with relevant experience and certifications to your needs." },
  { num: 3, icon: "📋", title: "Project Integration", desc: "Seamless onboarding and integration of engineers into your project teams." },
  { num: 4, icon: "📊", title: "Performance Monitoring", desc: "Ongoing support and performance tracking to ensure project success." },
];

const INDUSTRIES = [
  { icon: "🚗", name: "Automotive", desc: "Design engineers, test engineers" },
  { icon: "📱", name: "Electronics", desc: "Hardware engineers, firmware developers" },
  { icon: "🏗️", name: "Construction", desc: "Structural engineers, project managers" },
  { icon: "⚙️", name: "Mechanical", desc: "Mechanical engineers, CAD specialists" },
  { icon: "🔌", name: "Electrical", desc: "Electrical engineers, power systems" },
  { icon: "💻", name: "Software", desc: "Software engineers, system architects" },
];

const SUCCESS_STORIES = [
  {
    icon: "🏆",
    title: "Automotive R&D Project",
    client: "Major Auto Manufacturer",
    challenge: "Needed 15 specialized engineers for 18-month R&D project in electric vehicle development.",
    solution: "Ebadah Group  Japan assembled a team of electrical, mechanical, and software engineers with EV experience, deployed within 4 weeks.",
    result: "Project completed on schedule. All engineers received performance bonuses. Client extended contract for next phase."
  },
  {
    icon: "⭐",
    title: "Electronics Manufacturing Support",
    client: "Electronics Company",
    challenge: "Required temporary engineering support for production line optimization during peak season.",
    solution: "Deployed 8 process engineers and quality engineers for 6-month assignment with flexible extension options.",
    result: "Production efficiency improved by 22%. Zero quality issues. Client converted 5 engineers to permanent roles."
  }
];

const WHY_CHOOSE = [
  { icon: "🎓", title: "Technical Expertise", desc: "Engineers with specialized certifications and industry experience." },
  { icon: "⚡", title: "Rapid Deployment", desc: "Average placement time: 2-3 weeks for standard roles, 4-6 weeks for specialized positions." },
  { icon: "🔒", title: "Project Confidentiality", desc: "Strict NDAs and security protocols for sensitive R&D projects." },
  { icon: "📈", title: "Flexible Engagement", desc: "Short-term projects, long-term assignments, or permanent placement options." },
];

const FAQS = [
  { q: "What types of engineers do you provide?", a: "We place engineers across all disciplines: mechanical, electrical, software, automotive, electronics, construction, and more." },
  { q: "How quickly can you provide engineers?", a: "Standard placements take 2-3 weeks. For specialized roles requiring specific certifications, expect 4-6 weeks." },
  { q: "Do engineers work on-site or remotely?", a: "We provide both options. Most engineering roles are on-site, but we also support remote work arrangements when suitable." },
  { q: "What certifications do your engineers have?", a: "All engineers are verified for relevant certifications including PE licenses, technical certifications, and industry-specific qualifications." },
  { q: "Can engineers be converted to permanent employees?", a: "Yes, many clients convert dispatched engineers to permanent roles. We facilitate smooth transitions." },
];

export default function EngineerDispatch() {
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
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80" alt="Engineer Dispatch" />
          <div className="sv-hero__veil" />
        </div>
        <div className="sv-wrap sv-hero__content">
          <h1 className="sv-hero__h1">Engineer Dispatch</h1>
          <p className="sv-hero__sub">Specialized engineers for R&D, manufacturing, and technical projects. Certified professionals, flexible engagement, project-focused.</p>
        </div>
      </section>

      <section className={`sv-section sv-overview ${visible.has("overview") ? "sv--in" : ""}`} data-obs="overview" ref={obs("overview")}>
        <div className="sv-wrap sv-overview__layout">
          <div className="sv-overview__text">
            <span className="sv-eyebrow">Service Overview</span>
            <h2 className="sv-h2">Technical Engineering Solutions</h2>
            <p>Ebadah Group  Japan's Engineer Dispatch service provides qualified engineers across all technical disciplines for R&D projects, manufacturing support, and specialized technical assignments.</p>
            <p>Whether you need a single specialist or an entire engineering team, we match certified professionals with the right expertise to drive your technical projects forward.</p>
            <ul className="sv-overview__benefits">
              <li>Engineers across all technical disciplines</li>
              <li>Average placement: 2-3 weeks for standard roles</li>
              <li>Verified certifications and qualifications</li>
              <li>Flexible engagement: project-based or long-term</li>
              <li>Strict confidentiality for R&D projects</li>
            </ul>
          </div>
          <div className="sv-overview__img">
            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80" alt="Engineers" />
          </div>
        </div>
      </section>

      <section className={`sv-section sv-process ${visible.has("process") ? "sv--in" : ""}`} data-obs="process" ref={obs("process")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Our Process</span>
            <h2 className="sv-h2">How It Works</h2>
            <p className="sv-sh__p">A systematic approach to engineering placement.</p>
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
            <span className="sv-eyebrow">Engineering Disciplines</span>
            <h2 className="sv-h2">Technical Specializations</h2>
            <p className="sv-sh__p">Engineers across all technical fields and industries.</p>
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
            <h2 className="sv-h2">Real Engineering Project Results</h2>
            <p className="sv-sh__p">See how we've supported technical projects across industries.</p>
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
            <h2 className="sv-h2">What Sets Ebadah Group  Japan Apart</h2>
            <p className="sv-sh__p">Our competitive advantages in engineering placement.</p>
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

      {/* <section className="sv-section sv-pricing">
        <div className="sv-wrap sv-pricing__content">
          <h2 className="sv-h2 sv-pricing__h2">Get a Custom Quote</h2>
          <p className="sv-pricing__p">Engineering placement fees vary based on specialization, project duration, and engagement type. Contact us for detailed pricing.</p>
          <a href="#contact" className="sv-btn sv-btn--primary">Request Consultation</a>
        </div>
      </section> */}

      <section className={`sv-section sv-faq ${visible.has("faq") ? "sv--in" : ""}`} data-obs="faq" ref={obs("faq")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Frequently Asked Questions</span>
            <h2 className="sv-h2">Common Questions About Engineer Dispatch</h2>
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
          <h2 className="sv-h2 sv-cta__h2">Ready to Strengthen Your Engineering Team?</h2>
          <p className="sv-cta__p">Let's discuss how Ebadah Group  Japan can provide the technical expertise your projects need.</p>
          <div className="sv-cta__actions">
            <Link to="/contact" className="sv-btn sv-btn--primary">Get Started</Link>
            <Link to="/contact" className="sv-btn sv-btn--ghost">Request Consultation</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
