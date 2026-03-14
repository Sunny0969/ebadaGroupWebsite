// Accessibility utilities

export const initAccessibility = () => {
  // Add skip to main content link
  if (!document.getElementById('skip-to-main')) {
    const skipLink = document.createElement('a');
    skipLink.id = 'skip-to-main';
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 0;
      background: var(--accent);
      color: var(--white);
      padding: 0.5rem 1rem;
      text-decoration: none;
      z-index: 10000;
      border-radius: 0 0 var(--r) 0;
    `;
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '0';
    });
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  // Add main content landmark
  const main = document.querySelector('main') || document.querySelector('[role="main"]');
  if (main && !main.id) {
    main.id = 'main-content';
  }
};

export const enableHighContrast = () => {
  document.documentElement.setAttribute('data-theme', 'high-contrast');
  localStorage.setItem('highContrast', 'true');
};

export const disableHighContrast = () => {
  document.documentElement.removeAttribute('data-theme');
  localStorage.setItem('highContrast', 'false');
};

export const setFontSize = (size: 'small' | 'medium' | 'large' | 'xlarge') => {
  const sizes = {
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px'
  };
  document.documentElement.style.fontSize = sizes[size];
  localStorage.setItem('fontSize', size);
};

export const initFontSize = () => {
  const savedSize = localStorage.getItem('fontSize') as 'small' | 'medium' | 'large' | 'xlarge' | null;
  if (savedSize) {
    setFontSize(savedSize);
  }
};

export const initHighContrast = () => {
  const saved = localStorage.getItem('highContrast');
  if (saved === 'true') {
    enableHighContrast();
  }
};

// Keyboard navigation helpers
export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleTab = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener('keydown', handleTab);
  return () => element.removeEventListener('keydown', handleTab);
};
