import "./SkeletonLoader.css";

interface SkeletonLoaderProps {
  type?: "text" | "card" | "avatar" | "button";
  width?: string;
  height?: string;
  lines?: number;
}

export default function SkeletonLoader({ 
  type = "text", 
  width, 
  height, 
  lines = 1 
}: SkeletonLoaderProps) {
  if (type === "text") {
    return (
      <div className="skeleton skeleton--text">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="skeleton__line"
            style={{
              width: i === lines - 1 ? "80%" : width || "100%",
              height: height || "1rem"
            }}
          />
        ))}
      </div>
    );
  }

  if (type === "card") {
    return (
      <div className="skeleton skeleton--card" style={{ width, height }}>
        <div className="skeleton__header" />
        <div className="skeleton__content">
          <div className="skeleton__line" style={{ width: "100%", height: "1rem" }} />
          <div className="skeleton__line" style={{ width: "80%", height: "1rem" }} />
          <div className="skeleton__line" style={{ width: "60%", height: "1rem" }} />
        </div>
      </div>
    );
  }

  if (type === "avatar") {
    return (
      <div 
        className="skeleton skeleton--avatar" 
        style={{ width: width || "48px", height: height || "48px" }}
      />
    );
  }

  if (type === "button") {
    return (
      <div 
        className="skeleton skeleton--button" 
        style={{ width: width || "120px", height: height || "40px" }}
      />
    );
  }

  return null;
}
