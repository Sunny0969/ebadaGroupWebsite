import { useEffect, useRef } from "react";
import NewsletterSignup from "./NewsletterSignup";
import "./ExitIntentPopup.css";

interface ExitIntentPopupProps {
  onClose: () => void;
}

export default function ExitIntentPopup({ onClose }: ExitIntentPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        // User is moving mouse to top of screen (likely to close tab)
        // Don't show immediately, wait a bit
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <div className="exit-intent-overlay" onClick={onClose}>
      <div className="exit-intent-popup" ref={popupRef} onClick={(e) => e.stopPropagation()}>
        <button className="exit-intent-popup__close" onClick={onClose} aria-label="Close">×</button>
        <div className="exit-intent-popup__content">
          <div className="exit-intent-popup__icon">👋</div>
          <h2>Wait! Don't Miss Out</h2>
          <p>Get exclusive job opportunities and career tips delivered to your inbox.</p>
          <NewsletterSignup variant="inline" onClose={onClose} />
          <p className="exit-intent-popup__privacy">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
