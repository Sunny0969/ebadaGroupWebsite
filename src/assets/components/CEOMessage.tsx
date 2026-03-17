import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./About.css";

export default function CEOMessage() {
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
        className={`au-section au-ceo ${visible.has("ceo") ? "au--in" : ""}`}
        data-obs="ceo"
        ref={obs("ceo")}
        style={{ paddingTop: "8rem" }}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow">Leadership</span>
            <h2 className="au-h2">Message from the President</h2>
          </div>
          <div className="au-ceo__layout">
            <div className="au-ceo__portrait-col">
              <div className="au-ceo__img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt="Ebadah Group Japan President"
                />
                <div className="au-ceo__nameplate">
                  <strong>RAHMAN SHEIK HABIBUR</strong>
                  <span>President & CEO, Ebadah Group Japan</span>
                </div>
              </div>
              <div className="au-ceo__signature-wrap">
                <div className="au-ceo__sig-text">RAHMAN SHEIK HABIBUR</div>
                <span className="au-ceo__sig-role">President & CEO</span>
              </div>
            </div>
            <div className="au-ceo__message">
              <p className="au-ceo__salutation">Dear Valued Partners and Friends,</p>
              <p>In 2023, Ebadah Group Japan was founded on a singular conviction: that work is not merely a transaction — it is the foundation of dignity, purpose, and belonging. Three decades later, that conviction is more relevant than ever.</p>
              <p>Japan's manufacturing sector faces profound challenges: an aging workforce, accelerating automation, and the urgent need to welcome and integrate international talent. These are not problems to fear — they are opportunities for companies and individuals who are prepared.</p>
              <p>At Ebadah Group Japan, our role is to be that preparation. We invest deeply in understanding each client's unique needs, in screening candidates with genuine rigor, and in providing the post-placement support that ensures every placement becomes a long-term success story.</p>
              <p>As we look ahead to the next 30 years, I am energized by what we are building: an AI-augmented matching platform, an expanded network of international recruitment partners, and a sustainability-led HR framework that we believe will define the future of Japanese staffing.</p>
              <p>Thank you for trusting Ebadah Group Japan. We will continue to earn that trust — every day, with every placement, in every region of this extraordinary country.</p>
              <p className="au-ceo__closing">With sincere gratitude,</p>
              <div className="au-ceo__sig-final">
                <div className="au-ceo__sig-text au-ceo__sig-text--lg">RAHMAN SHEIK HABIBUR</div>
                <span>President & CEO, Ebadah Group Japan Co., Ltd.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
