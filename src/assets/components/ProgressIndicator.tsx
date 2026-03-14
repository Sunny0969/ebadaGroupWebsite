import "./ProgressIndicator.css";

interface ProgressIndicatorProps {
  steps: string[];
  currentStep: number;
}

export default function ProgressIndicator({ steps, currentStep }: ProgressIndicatorProps) {
  return (
    <div className="progress-indicator">
      <div className="progress-indicator__bar">
        <div 
          className="progress-indicator__fill" 
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>
      <div className="progress-indicator__steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`progress-indicator__step ${
              index <= currentStep ? "progress-indicator__step--active" : ""
            } ${index === currentStep ? "progress-indicator__step--current" : ""}`}
          >
            <div className="progress-indicator__step-number">
              {index < currentStep ? "✓" : index + 1}
            </div>
            <div className="progress-indicator__step-label">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
