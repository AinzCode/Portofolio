import './styles.css';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Import all components
import {
  createNavigation,
  createHero,
  createAbout,
  createEducation,
  createContact,
  createFooter,
  createScrollProgress,
  initializeNavigation,
  initializeHero,
  initializeContact,
  initializeScrollProgress
} from './components';

// Import all utilities
import {
  initializeSmoothScroll,
  initializeNavbarScroll,
  initializeNavHighlight,
  initializeScrollAnimations,
  initializeDarkMode
} from './utils';

// Build the page
function buildPage(): void {
  const app = document.getElementById('app');
  
  if (app) {
    app.innerHTML = `
      ${createScrollProgress()}
      ${createNavigation()}
      ${createHero()}
      ${createAbout()}
      ${createEducation()}
      ${createContact()}
      ${createFooter()}
    `;
  }
}

// Initialize all functionality
function initializeApp(): void {
  // Initialize Lenis smooth scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Initialize component-specific features
  initializeNavigation();
  initializeHero();
  initializeContact();
  initializeScrollProgress();
  
  // Initialize utilities
  initializeSmoothScroll();
  initializeNavbarScroll();
  initializeNavHighlight();
  initializeScrollAnimations();
  initializeDarkMode();
  
  console.log('🚀 Awesome Portfolio initialized successfully!');
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  buildPage();
  initializeApp();
});
