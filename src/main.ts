import './styles.css';

// Import all components
import {
  createNavigation,
  createHero,
  createAbout,
  createSkills,
  createProjects,
  createContact,
  createFooter,
  initializeNavigation,
  initializeHero,
  initializeContact
} from './components';

// Import all utilities
import {
  initializeSmoothScroll,
  initializeNavbarScroll,
  initializeNavHighlight,
  initializeScrollAnimations
} from './utils';

// Build the page
function buildPage(): void {
  const app = document.getElementById('app');
  
  if (app) {
    app.innerHTML = `
      ${createNavigation()}
      ${createHero()}
      ${createAbout()}
      ${createSkills()}
      ${createProjects()}
      ${createContact()}
      ${createFooter()}
    `;
  }
}

// Initialize all functionality
function initializeApp(): void {
  // Initialize component-specific features
  initializeNavigation();
  initializeHero();
  initializeContact();
  
  // Initialize utilities
  initializeSmoothScroll();
  initializeNavbarScroll();
  initializeNavHighlight();
  initializeScrollAnimations();
  
  console.log('Portfolio website initialized successfully!');
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  buildPage();
  initializeApp();
});
