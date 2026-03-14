import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./StickyCTA.css";

interface StickyCTAProps {
  text?: string;
  buttonText?: string;
  link?: string;
  variant?: "job-seekers" | "employers" | "contact";
}

export default function StickyCTA({ 
  text, 
  buttonText, 
  link,
  variant = "contact"
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const getContent = () => {
    switch (variant) {
      case "job-seekers":
        return {
          text: text || "Looking for a job?",
          buttonText: buttonText || "Browse Jobs",
          link: link || "/job-seekers/listings"
        };
      case "employers":
        return {
          text: text || "Need to hire?",
          buttonText: buttonText || "Post a Job",
          link: link || "/employers/post-job"
        };
      default:
        return {
          text: text || "Have questions?",
          buttonText: buttonText || "Contact Us",
          link: link || "/contact"
        };
    }
  };

  const content = getContent();

  if (!isVisible) return null;

  return (
    <div className="sticky-cta">
      <div className="sticky-cta__content">
        <p className="sticky-cta__text">{content.text}</p>
        <Link to={content.link} className="sticky-cta__button">
          {content.buttonText}
        </Link>
      </div>
    </div>
  );
}
