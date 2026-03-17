import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./About.css";

const BRANCHES = [
  { 
    name: "Ebadah Group Head Office", 
    region: "Tochigi", 
    address: "2F Tonoike Shukugo Bldg., 2-10-16 Shukugo, Utsunomiya-shi, Tochigi, Japan", 
    phone: "0283 41 6300", 
    mobile: " 0283 41 6300",
    email: "sheikrahmanjp@gmail.com", 
    representativeDirector: "RAHMAN SHEIK HABIBUR",
    company: "Ebadah Group Co., Ltd.",
    hours: "Mon–Fri 9:00–18:00", 
    lat: 36.5658, 
    lng: 139.8836 
  },
];

export default function BranchLocations() {
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
        className={`au-section au-branch ${visible.has("branch") ? "au--in" : ""}`}
        data-obs="branch"
        ref={obs("branch")}
        style={{ paddingTop: "8rem" }}
      >
        <div className="au-wrap">
          <div className="au-sh">
            <span className="au-eyebrow">Our Presence</span>
            <h2 className="au-h2">Head Office Location</h2>
            <p className="au-sh__p">Ebadah Group Co., Ltd. - Your trusted partner in workforce solutions.</p>
          </div>
          <div className="au-branch__layout">
            <div className="au-branch__map">
              <div className="au-map-wrap">
                <img
                  src="https://images.unsplash.com/photo-1578592170957-4a1bf9f49e15?w=900&q=80"
                  alt="Japan Map - Tochigi Location"
                  className="au-map-img"
                />
                <div className="au-map-overlay" />
                {/* Single pin for Tochigi location */}
                {BRANCHES.map((b, i) => (
                  <button
                    key={i}
                    className="au-map-pin au-map-pin--active"
                    style={{ left: "55%", top: "50%" }}
                    title={b.name}
                  >
                    <span className="au-map-pin__dot" />
                    <span className="au-map-pin__label">{b.region}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="au-branch__detail">
              {BRANCHES[0] && (() => {
                const b = BRANCHES[0];
                return (
                  <div className="au-bcard">
                    <div className="au-bcard__header">
                      <span className="au-bcard__region">{b.region}</span>
                      <h3 className="au-bcard__name">{b.name}</h3>
                      <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "var(--txt-2)" }}>
                        {b.company}
                      </p>
                    </div>
                    <ul className="au-bcard__list">
                      <li>
                        <span className="au-bcard__ico">📍</span>
                        <span>{b.address}</span>
                      </li>
                      <li>
                        <span className="au-bcard__ico">📞</span>
                        <a href={`tel:${b.phone.replace(/\s/g, '')}`}>{b.phone}</a>
                      </li>
                      {b.mobile && (
                        <li>
                          <span className="au-bcard__ico">📱</span>
                          <a href={`tel:${b.mobile.replace(/\s/g, '').replace(/-/g, '')}`}>{b.mobile}</a>
                        </li>
                      )}
                      <li>
                        <span className="au-bcard__ico">✉️</span>
                        <a href={`mailto:${b.email}`}>{b.email}</a>
                      </li>
                      <li>
                        <span className="au-bcard__ico">👤</span>
                        <span>Representative Director: <strong>{b.representativeDirector}</strong></span>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
