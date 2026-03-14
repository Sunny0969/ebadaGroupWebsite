import "./TrustBadges.css";

interface TrustBadgesProps {
  variant?: "inline" | "compact";
}

export default function TrustBadges({ variant = "inline" }: TrustBadgesProps) {
  const badges = [
    { icon: "✓", text: "Licensed & Certified", subtext: "Employment Placement License" },
    { icon: "🔒", text: "Secure & Private", subtext: "Data Protection Compliant" },
    { icon: "⭐", text: "Trusted by 10,000+", subtext: "Companies & Candidates" },
    { icon: "🏆", text: "Award Winning", subtext: "Best Recruitment Agency 2025" },
  ];

  if (variant === "compact") {
    return (
      <div className="trust-badges trust-badges--compact">
        {badges.map((badge, index) => (
          <div key={index} className="trust-badge trust-badge--compact">
            <span className="trust-badge__icon">{badge.icon}</span>
            <span className="trust-badge__text">{badge.text}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="trust-badges">
      {badges.map((badge, index) => (
        <div key={index} className="trust-badge">
          <div className="trust-badge__icon">{badge.icon}</div>
          <div className="trust-badge__content">
            <div className="trust-badge__text">{badge.text}</div>
            <div className="trust-badge__subtext">{badge.subtext}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
