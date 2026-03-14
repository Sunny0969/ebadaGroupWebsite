import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./About.css";

const TIMELINE = [
  { year: "1994", title: "Foundation", desc: "CDP Japan was founded in Tokyo with a vision to bridge the gap between skilled workers and Japan's growing manufacturing sector." },
  { year: "1998", title: "First Major Expansion", desc: "Opened regional offices in Osaka and Nagoya, establishing our presence in the industrial heartland of Japan." },
  { year: "2003", title: "Engineer Division Launch", desc: "Launched the Engineer Dispatch division to serve the growing demand for specialized technical talent in automotive and electronics." },
  { year: "2008", title: "Navigating the Global Crisis", desc: "Successfully guided over 1,000 client companies through the global financial downturn with flexible staffing solutions." },
  { year: "2012", title: "Foreign Employment Support", desc: "Introduced our Foreign Employment Support program, pioneering international talent integration in Japanese factories." },
  { year: "2016", title: "Digital Transformation", desc: "Launched our proprietary ATS platform and digital candidate portal, reducing placement time by 40%." },
  { year: "2019", title: "Group Expansion", desc: "Established CDP Group with three subsidiary companies covering logistics, IT, and sustainability consulting." },
  { year: "2022", title: "Nationwide Network Complete", desc: "Completed our nationwide branch network with offices in all major industrial regions, including Kyushu and Tohoku." },
  { year: "2024", title: "30th Anniversary", desc: "Celebrated 30 years of connecting talent with opportunity — 50,000+ placements and counting." },
  { year: "2026", title: "AI-Powered Future", desc: "Integrating AI-powered candidate matching and predictive retention analytics into our core service platform." },
];

export default function History() {
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
        className={`au-section au-hist ${visible.has("hist") ? "au--in" : ""}`}
        data-obs="hist"
        ref={obs("hist")}
        style={{ paddingTop: "8rem" }}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow">Our Journey</span>
            <h2 className="au-h2">Company History</h2>
            <p className="au-sh__p">30 years of milestones, growth, and unwavering commitment to workforce excellence.</p>
          </div>
          <div className="au-timeline">
            <div className="au-timeline__spine" />
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className={`au-tl-item ${i % 2 === 0 ? "au-tl-item--left" : "au-tl-item--right"}`}
                style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
              >
                <div className="au-tl-item__card">
                  <div className="au-tl-item__year">{item.year}</div>
                  <h3 className="au-tl-item__title">{item.title}</h3>
                  <p className="au-tl-item__desc">{item.desc}</p>
                </div>
                <div className="au-tl-item__dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
