// Navigation Component - Main Logic
import { navigationStyles as styles } from './styles';

export function createNavigation(): string {
  return `
    <nav class="${styles.nav}" id="navbar">
        <div class="${styles.container}">
            <div class="${styles.flexContainer}">
                <a href="#home" class="${styles.logo}">
                    AinzCode
                </a>
                
                <!-- Desktop Menu -->
                <div class="${styles.desktopMenu}">
                    <a href="#home" class="${styles.navLink}">Home</a>
                    <a href="#about" class="${styles.navLink}">About</a>
                    <a href="#skills" class="${styles.navLink}">Skills</a>
                    <a href="#projects" class="${styles.navLink}">Projects</a>
                    <a href="#contact" class="${styles.navLink}">Contact</a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-button" class="${styles.mobileButton}">
                    <svg class="${styles.icon}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path id="menu-open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        <path id="menu-close" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="${styles.mobileMenu}">
                <a href="#home" class="${styles.mobileLink}">Home</a>
                <a href="#about" class="${styles.mobileLink}">About</a>
                <a href="#skills" class="${styles.mobileLink}">Skills</a>
                <a href="#projects" class="${styles.mobileLink}">Projects</a>
                <a href="#contact" class="${styles.mobileLink}">Contact</a>
            </div>
        </div>
    </nav>
  `;
}

export function initializeNavigation(): void {
  const mobileMenuButton = document.getElementById('mobile-menu-button') as HTMLButtonElement;
  const mobileMenu = document.getElementById('mobile-menu') as HTMLDivElement;
  const menuOpen = document.getElementById('menu-open') as unknown as SVGPathElement;
  const menuClose = document.getElementById('menu-close') as unknown as SVGPathElement;

  mobileMenuButton?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
    menuOpen?.classList.toggle('hidden');
    menuClose?.classList.toggle('hidden');
  });

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
  mobileMenuLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
      menuOpen?.classList.remove('hidden');
      menuClose?.classList.add('hidden');
    });
  });
}
