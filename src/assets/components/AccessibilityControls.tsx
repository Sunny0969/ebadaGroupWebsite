import { useState, useEffect } from "react";
import { enableHighContrast, disableHighContrast, setFontSize, initFontSize, initHighContrast } from "../../utils/accessibility";
import "./AccessibilityControls.css";

export default function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [currentFontSize, setCurrentFontSize] = useState<'small' | 'medium' | 'large' | 'xlarge'>('medium');

  useEffect(() => {
    initFontSize();
    initHighContrast();
    const saved = localStorage.getItem('highContrast') === 'true';
    setHighContrast(saved);
  }, []);

  const handleHighContrastToggle = () => {
    if (highContrast) {
      disableHighContrast();
      setHighContrast(false);
    } else {
      enableHighContrast();
      setHighContrast(true);
    }
  };

  const handleFontSizeChange = (size: 'small' | 'medium' | 'large' | 'xlarge') => {
    setFontSize(size);
    setCurrentFontSize(size);
  };

  return (
    <>
      <button
        className="accessibility-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility options"
        aria-expanded={isOpen}
      >
        ♿
      </button>

      {isOpen && (
        <div className="accessibility-panel" role="dialog" aria-labelledby="accessibility-title">
          <div className="accessibility-panel__header">
            <h3 id="accessibility-title">Accessibility Options</h3>
            <button
              className="accessibility-panel__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>

          <div className="accessibility-panel__content">
            <div className="accessibility-option">
              <label className="accessibility-option__label">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={handleHighContrastToggle}
                  className="accessibility-option__checkbox"
                />
                <span>High Contrast Mode</span>
              </label>
              <p className="accessibility-option__description">
                Increase contrast for better visibility
              </p>
            </div>

            <div className="accessibility-option">
              <label className="accessibility-option__label">Text Size</label>
              <div className="accessibility-option__buttons">
                {(['small', 'medium', 'large', 'xlarge'] as const).map((size) => (
                  <button
                    key={size}
                    className={`accessibility-option__btn ${currentFontSize === size ? 'active' : ''}`}
                    onClick={() => handleFontSizeChange(size)}
                    aria-label={`Set text size to ${size}`}
                  >
                    {size.charAt(0).toUpperCase()}
                  </button>
                ))}
              </div>
              <p className="accessibility-option__description">
                Adjust text size for comfortable reading
              </p>
            </div>

            <div className="accessibility-option">
              <p className="accessibility-option__info">
                <strong>Keyboard Navigation:</strong> Use Tab to navigate, Enter to activate, Esc to close dialogs.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
