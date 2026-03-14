import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Services.css";

const PROCESS_STEPS = [
  { num: 1, icon: "📋", title: "Career Assessment", desc: "Evaluation of skills, experience, and career goals to identify suitable opportunities." },
  { num: 2, icon: "🎯", title: "Job Matching", desc: "Matching candidates with appropriate positions based on skills and preferences." },
  { num: 3, icon: "📚", title: "Skills Enhancement", desc: "Training and certification programs to update skills and improve employability." },
  { num: 4, icon: "🤝", title: "Placement & Support", desc: "Job placement followed by ongoing support to ensure successful re-employment." },
];

const INDUSTRIES = [
  { icon: "🏭", name: "Manufacturing", desc: "Production roles, quality control" },
  { icon: "💼", name: "Office Work", desc: "Administrative, clerical positions" },
  { icon: "🏪", name: "Retail", desc: "Sales, customer service roles" },
  { icon: "🚚", name: "Logistics", desc: "Warehouse, delivery positions" },
  { icon: "🏥", name: "Healthcare", desc: "Care workers, support staff" },
  { icon: "🍽️", name: "Food Service", desc: "Restaurant, catering staff" },
];

const SUCCESS_STORIES = [
  {
    icon: "🏆",
    title: "Career Transition Success",
    client: "Mid-Career Professional",
    challenge: "55-year-old professional seeking re-employment after company restructuring. Needed to transition from corporate role to new industry.",
    solution: "CDP Japan provided career counseling, skills assessment, and matched candidate with manufacturing quality control role requiring transferable skills.",
    result: "Successfully placed in new role. Candidate has been with company for 3 years and received promotion. High job satisfaction reported."
  },
  {
    icon: "⭐",
    title: "Skills Update Program",
    client: "Group of 20 Re-employment Candidates",
    challenge: "Group of workers needed updated skills and certifications to re-enter manufacturing sector after extended absence.",
    solution: "Organized intensive skills training program covering safety protocols, new technologies, and industry standards. Coordinated with employers for placement.",
    result: "18 out of 20 candidates successfully placed. All passed required certifications. Average placement time: 6 weeks after training completion."
  }
];

const WHY_CHOOSE = [
  { icon: "🎯", title: "Personalized Support", desc: "Individual career counseling and customized job matching for each candidate." },
  { icon: "📚", title: "Skills Development", desc: "Access to training programs and certifications to enhance employability." },
  { icon: "🤝", title: "Employer Network", desc: "Extensive network of employers open to re-employment candidates." },
  { icon: "💼", title: "Ongoing Support", desc: "Continued support after placement to ensure successful re-integration into workforce." },
];

const FAQS = [
  { q: "Who is eligible for re-employment support?", a: "Anyone seeking to re-enter the workforce, including those who have been unemployed, career changers, retirees seeking part-time work, and individuals returning after extended leave." },
  { q: "What types of positions are available?", a: "We place candidates across all industries including manufacturing, office work, retail, logistics, healthcare, and food service, from entry-level to experienced positions." },
  { q: "Do you provide training?", a: "Yes, we offer skills enhancement programs, safety certifications, and industry-specific training to help candidates update their skills and improve employability." },
  { q: "How long does the re-employment process take?", a: "Typical timeline is 4-8 weeks from initial assessment to placement, depending on candidate needs and training requirements." },
  { q: "Is there ongoing support after placement?", a: "Yes, we provide continued support including check-ins, workplace integration assistance, and additional training if needed to ensure successful re-employment." },
];

export default function ReemploymentSupport() {
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
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80" alt="Re-employment Support" />
          <div className="sv-hero__veil" />
        </div>
        <div className="sv-wrap sv-hero__content">
          <h1 className="sv-hero__h1">Re-employment Support</h1>
          <p className="sv-hero__sub">Helping people return to work. Career counseling, skills training, and job placement for re-entering the workforce.</p>
        </div>
      </section>

      <section className={`sv-section sv-overview ${visible.has("overview") ? "sv--in" : ""}`} data-obs="overview" ref={obs("overview")}>
        <div className="sv-wrap sv-overview__layout">
          <div className="sv-overview__text">
            <span className="sv-eyebrow">Service Overview</span>
            <h2 className="sv-h2">Supporting Workforce Re-entry</h2>
            <p>CDP Japan's Re-employment Support service helps individuals re-enter the workforce through personalized career counseling, skills enhancement, and job placement services.</p>
            <p>Whether you've been unemployed, are changing careers, or returning after extended leave, we provide comprehensive support to help you find meaningful employment that matches your skills and goals.</p>
            <ul className="sv-overview__benefits">
              <li>Personalized career counseling and assessment</li>
              <li>Skills enhancement and certification programs</li>
              <li>Job matching across all industries</li>
              <li>Ongoing support after placement</li>
              <li>Flexible work arrangements available</li>
            </ul>
          </div>
          <div className="sv-overview__img">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80" alt="Re-employment" />
          </div>
        </div>
      </section>

      <section className={`sv-section sv-process ${visible.has("process") ? "sv--in" : ""}`} data-obs="process" ref={obs("process")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Our Process</span>
            <h2 className="sv-h2">How It Works</h2>
            <p className="sv-sh__p">A supportive approach to re-employment.</p>
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
            <h2 className="sv-h2">Employment Opportunities</h2>
            <p className="sv-sh__p">Re-employment opportunities across diverse industries.</p>
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
            <h2 className="sv-h2">Real Re-employment Success</h2>
            <p className="sv-sh__p">See how we've helped people successfully return to work.</p>
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
            <p className="sv-sh__p">Our competitive advantages in re-employment support.</p>
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
          <h2 className="sv-h2 sv-pricing__h2">Get Started Today</h2>
          <p className="sv-pricing__p">Our re-employment support services are available to help you return to work. Contact us to learn more about our programs and services.</p>
          {/* <a href="#contact" className="sv-btn sv-btn--primary">Request Consultation</a> */}
        </div>
      </section>

      <section className={`sv-section sv-faq ${visible.has("faq") ? "sv--in" : ""}`} data-obs="faq" ref={obs("faq")}>
        <div className="sv-wrap">
          <div className="sv-sh">
            <span className="sv-eyebrow">Frequently Asked Questions</span>
            <h2 className="sv-h2">Common Questions About Re-employment</h2>
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
          <h2 className="sv-h2 sv-cta__h2">Ready to Return to Work?</h2>
          <p className="sv-cta__p">Let's discuss how CDP Japan can help you find your next opportunity and successfully re-enter the workforce.</p>
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
