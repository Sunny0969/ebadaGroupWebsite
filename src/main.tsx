import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/components/GlobalResponsive.css'
import App from './App.tsx'
import { initAccessibility } from './utils/accessibility'
import { initPerformance } from './utils/performance'

// Initialize accessibility features
initAccessibility();

// Initialize performance optimizations
initPerformance();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
