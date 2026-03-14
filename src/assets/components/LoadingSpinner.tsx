import "./LoadingSpinner.css";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
}

export default function LoadingSpinner({ size = "md", fullScreen = false }: LoadingSpinnerProps) {
  const sizeClass = `spinner--${size}`;
  const containerClass = fullScreen ? "spinner-container--fullscreen" : "spinner-container";

  return (
    <div className={containerClass}>
      <div className={`spinner ${sizeClass}`}>
        <div className="spinner__circle"></div>
        <div className="spinner__circle"></div>
        <div className="spinner__circle"></div>
      </div>
    </div>
  );
}
