import { useState } from "react";
import "./NewsletterSignup.css";

interface NewsletterSignupProps {
  variant?: "inline" | "modal" | "footer";
  onClose?: () => void;
}

export default function NewsletterSignup({ variant = "inline", onClose }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setEmail("");
      if (onClose) onClose();
    }, 3000);
  };

  if (variant === "modal") {
    return (
      <div className="newsletter-modal-overlay" onClick={onClose}>
        <div className="newsletter-modal" onClick={(e) => e.stopPropagation()}>
          <button className="newsletter-modal__close" onClick={onClose}>×</button>
          <div className="newsletter-modal__content">
            <h3>Stay Updated</h3>
            <p>Get the latest job opportunities and industry insights delivered to your inbox.</p>
            {isSuccess ? (
              <div className="newsletter-success">
                <div className="newsletter-success__icon">✓</div>
                <p>Thank you for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <div className="newsletter-form__group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="newsletter-form__input"
                    disabled={isSubmitting}
                  />
                  {error && <span className="newsletter-form__error">{error}</span>}
                </div>
                <button
                  type="submit"
                  className="newsletter-form__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className="newsletter-footer">
        <h4>Subscribe to Our Newsletter</h4>
        <p>Get job alerts and industry updates</p>
        {isSuccess ? (
          <div className="newsletter-success">
            <p>✓ Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form newsletter-form--footer">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="newsletter-form__input newsletter-form__input--footer"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="newsletter-form__submit newsletter-form__submit--footer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "..." : "Subscribe"}
            </button>
            {error && <span className="newsletter-form__error">{error}</span>}
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="newsletter-inline">
      <div className="newsletter-inline__content">
        <h3>Stay Connected</h3>
        <p>Subscribe to receive job alerts, career tips, and company updates.</p>
        {isSuccess ? (
          <div className="newsletter-success">
            <div className="newsletter-success__icon">✓</div>
            <p>Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form newsletter-form--inline">
            <div className="newsletter-form__group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="newsletter-form__input"
                disabled={isSubmitting}
              />
              {error && <span className="newsletter-form__error">{error}</span>}
            </div>
            <button
              type="submit"
              className="newsletter-form__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe Now"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
