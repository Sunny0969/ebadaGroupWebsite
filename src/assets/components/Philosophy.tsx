import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./About.css";

export default function Philosophy() {
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
    <div className="au">
      <Header />

      <section
        className={`au-section au-phil ${visible.has("phil") ? "au--in" : ""}`}
        data-obs="phil"
        ref={obs("phil")}
        style={{ background: "var(--navy)", paddingTop: "8rem" }}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow au-eyebrow--light">Our Belief System</span>
            <h2 className="au-h2 au-h2--light">Company Philosophy</h2>
            <p className="au-sh__p au-sh__p--light">The principles that define who we are, why we exist, and how we work.</p>
          </div>
          <div className="au-phil__layout">
            <div className="au-phil__statement">
              <div className="au-phil__quote-mark">"</div>
              <blockquote className="au-phil__quote">
                Sharing the joy of working — not just as a tagline, but as our daily commitment to every worker we place and every company we serve.
              </blockquote>
              <cite className="au-phil__cite">CDP Japan Corporate Purpose</cite>
            </div>
            <div className="au-phil__pillars">
              {[
                { title: "People First", body: "Every business decision begins with one question: is this good for the people involved? Workers, clients, and our own team are equally valued." },
                { title: "Long-term Thinking", body: "We resist short-term shortcuts. Building enduring partnerships requires patience, consistency, and a willingness to invest in what's right over what's convenient." },
                { title: "Social Responsibility", body: "As a major employer in Japan's industrial sector, we take seriously our responsibility to support communities, champion diversity, and advance sustainable practices." },
                { title: "Continuous Innovation", body: "The staffing industry is changing faster than ever. We lead that change through technology adoption, process innovation, and a culture of bold experimentation." },
              ].map((p, i) => (
                <div className="au-phil__pillar" key={i} style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                  <div className="au-phil__pillar-num">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h4 className="au-phil__pillar-h4">{p.title}</h4>
                    <p className="au-phil__pillar-p">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
