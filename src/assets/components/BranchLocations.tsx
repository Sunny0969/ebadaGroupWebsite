import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./About.css";

const BRANCHES = [
  { name: "Tokyo Head Office", region: "Kanto", address: "2-5-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005", phone: "03-1234-5678", email: "tokyo@cdpjp.com", manager: "Hiroshi Tanaka", hours: "Mon–Fri 9:00–18:00", lat: 35.6812, lng: 139.7671 },
  { name: "Osaka Branch", region: "Kansai", address: "1-3-2 Umeda, Kita-ku, Osaka 530-0001", phone: "06-2345-6789", email: "osaka@cdpjp.com", manager: "Yuki Yamamoto", hours: "Mon–Fri 9:00–18:00", lat: 34.7024, lng: 135.4959 },
  { name: "Nagoya Branch", region: "Chubu", address: "3-28-12 Meieki, Nakamura-ku, Nagoya 450-0002", phone: "052-345-6789", email: "nagoya@cdpjp.com", manager: "Kenji Suzuki", hours: "Mon–Fri 9:00–18:00", lat: 35.1709, lng: 136.8815 },
  { name: "Fukuoka Branch", region: "Kyushu", address: "1-2-10 Hakata-Ekimae, Hakata-ku, Fukuoka 812-0011", phone: "092-456-7890", email: "fukuoka@cdpjp.com", manager: "Saki Nakamura", hours: "Mon–Fri 9:00–18:00", lat: 33.5902, lng: 130.4202 },
  { name: "Sapporo Branch", region: "Hokkaido", address: "2-1-5 Kita 3-jo, Chuo-ku, Sapporo 060-0003", phone: "011-567-8901", email: "sapporo@cdpjp.com", manager: "Tomoki Ito", hours: "Mon–Fri 9:00–18:00", lat: 43.0618, lng: 141.3545 },
  { name: "Sendai Branch", region: "Tohoku", address: "4-6-1 Ichibancho, Aoba-ku, Sendai 980-0811", phone: "022-678-9012", email: "sendai@cdpjp.com", manager: "Rie Kobayashi", hours: "Mon–Fri 9:00–18:00", lat: 38.2688, lng: 140.8721 },
];

export default function BranchLocations() {
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const [activeBranch, setActiveBranch] = useState(0);
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
        className={`au-section au-branch ${visible.has("branch") ? "au--in" : ""}`}
        data-obs="branch"
        ref={obs("branch")}
        style={{ paddingTop: "8rem" }}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow">Our Presence</span>
            <h2 className="au-h2">Branch Locations</h2>
            <p className="au-sh__p">12 offices strategically positioned across Japan's key industrial corridors.</p>
          </div>
          <div className="au-branch__layout">
            <div className="au-branch__map">
              <div className="au-map-wrap">
                <img
                  src="https://images.unsplash.com/photo-1578592170957-4a1bf9f49e15?w=900&q=80"
                  alt="Japan Map"
                  className="au-map-img"
                />
                <div className="au-map-overlay" />
                {BRANCHES.map((b, i) => {
                  const positions = [
                    { x: "52%", y: "57%" },
                    { x: "40%", y: "63%" },
                    { x: "44%", y: "60%" },
                    { x: "28%", y: "74%" },
                    { x: "55%", y: "22%" },
                    { x: "60%", y: "44%" },
                  ];
                  const pos = positions[i] || { x: "50%", y: "50%" };
                  return (
                    <button
                      key={i}
                      className={`au-map-pin ${activeBranch === i ? "au-map-pin--active" : ""}`}
                      style={{ left: pos.x, top: pos.y }}
                      onClick={() => setActiveBranch(i)}
                      title={b.name}
                    >
                      <span className="au-map-pin__dot" />
                      <span className="au-map-pin__label">{b.region}</span>
                    </button>
                  );
                })}
              </div>
              <div className="au-map-legend">
                {BRANCHES.map((b, i) => (
                  <button
                    key={i}
                    className={`au-map-legend__btn ${activeBranch === i ? "au-map-legend__btn--on" : ""}`}
                    onClick={() => setActiveBranch(i)}
                  >
                    {b.region}
                  </button>
                ))}
              </div>
            </div>
            <div className="au-branch__detail">
              {BRANCHES[activeBranch] && (() => {
                const b = BRANCHES[activeBranch];
                return (
                  <div className="au-bcard" key={activeBranch}>
                    <div className="au-bcard__header">
                      <span className="au-bcard__region">{b.region}</span>
                      <h3 className="au-bcard__name">{b.name}</h3>
                    </div>
                    <ul className="au-bcard__list">
                      <li>
                        <span className="au-bcard__ico">📍</span>
                        <span>{b.address}</span>
                      </li>
                      <li>
                        <span className="au-bcard__ico">📞</span>
                        <a href={`tel:${b.phone}`}>{b.phone}</a>
                      </li>
                      <li>
                        <span className="au-bcard__ico">✉️</span>
                        <a href={`mailto:${b.email}`}>{b.email}</a>
                      </li>
                      <li>
                        <span className="au-bcard__ico">👤</span>
                        <span>Branch Manager: <strong>{b.manager}</strong></span>
                      </li>
                      <li>
                        <span className="au-bcard__ico">🕐</span>
                        <span>{b.hours}</span>
                      </li>
                    </ul>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="au-btn au-btn--primary au-bcard__map-btn"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                );
              })()}
              <div className="au-branch__all-list">
                {BRANCHES.map((b, i) => (
                  <button
                    key={i}
                    className={`au-branch__row ${activeBranch === i ? "au-branch__row--on" : ""}`}
                    onClick={() => setActiveBranch(i)}
                  >
                    <span className="au-branch__row-name">{b.name}</span>
                    <span className="au-branch__row-region">{b.region}</span>
                    <span className="au-branch__row-arrow">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
