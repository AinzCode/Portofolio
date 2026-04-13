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
                    <a href="#education" class="${styles.navLink}">Education</a>
                    <a href="#projects" class="${styles.navLink}">Projects</a>
                    <a href="#contact" class="${styles.navLink}">Contact</a>
                    <button id="dark-mode-toggle" class="${styles.darkModeButton}">
                        <svg id="sun-icon" class="${styles.icon}" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm11-9a1 1 0 10-2 0 1 1 0 012 0zM4 12a1 1 0 10-2 0 1 1 0 012 0zm16.657-5.657a1 1 0 10-1.414-1.414l-1.414 1.414a1 1 0 001.414 1.414l1.414-1.414zM6.464 17.536a1 1 0 10-1.414-1.414L3.636 17.536a1 1 0 001.414 1.414l1.414-1.414zm11.072-11.072a1 1 0 10-1.414-1.414L15.464 6.464a1 1 0 001.414 1.414l1.414-1.414zM6.464 6.464a1 1 0 10-1.414 1.414L5.464 9.292a1 1 0 001.414-1.414L6.464 6.464zm11.072 11.072a1 1 0 10-1.414 1.414l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414zM12 6a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z"></path>
                        </svg>
                        <svg id="moon-icon" class="${styles.icon} hidden" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                        </svg>
                    </button>
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
                <a href="#education" class="${styles.mobileLink}">Education</a>
                <a href="#projects" class="${styles.mobileLink}">Projects</a>
                <a href="#contact" class="${styles.mobileLink}">Contact</a>
                <button id="dark-mode-toggle-mobile" class="${styles.darkModeButtonMobile}">
                    <svg id="sun-icon-mobile" class="${styles.icon}" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm11-9a1 1 0 10-2 0 1 1 0 012 0zM4 12a1 1 0 10-2 0 1 1 0 012 0zm16.657-5.657a1 1 0 10-1.414-1.414l-1.414 1.414a1 1 0 001.414 1.414l1.414-1.414zM6.464 17.536a1 1 0 10-1.414-1.414L3.636 17.536a1 1 0 001.414 1.414l1.414-1.414zm11.072-11.072a1 1 0 10-1.414-1.414L15.464 6.464a1 1 0 001.414 1.414l1.414-1.414zM6.464 6.464a1 1 0 10-1.414 1.414L5.464 9.292a1 1 0 001.414-1.414L6.464 6.464zm11.072 11.072a1 1 0 10-1.414 1.414l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414zM12 6a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z"></path>
                    </svg>
                    <svg id="moon-icon-mobile" class="${styles.icon} hidden" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                    </svg>
                    <span>Dark Mode</span>
                </button>
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

  // Handle dark mode toggle buttons
  const darkModeButton = document.getElementById('dark-mode-toggle') as HTMLButtonElement;
  const darkModeButtonMobile = document.getElementById('dark-mode-toggle-mobile') as HTMLButtonElement;

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    updateDarkModeIcons();
  };

  const updateDarkModeIcons = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const sunIconMobile = document.getElementById('sun-icon-mobile');
    const moonIconMobile = document.getElementById('moon-icon-mobile');

    if (isDark) {
      sunIcon?.classList.add('hidden');
      moonIcon?.classList.remove('hidden');
      sunIconMobile?.classList.add('hidden');
      moonIconMobile?.classList.remove('hidden');
    } else {
      sunIcon?.classList.remove('hidden');
      moonIcon?.classList.add('hidden');
      sunIconMobile?.classList.remove('hidden');
      moonIconMobile?.classList.add('hidden');
    }
  };

  darkModeButton?.addEventListener('click', toggleDarkMode);
  darkModeButtonMobile?.addEventListener('click', toggleDarkMode);

  // Initialize icons on load
  updateDarkModeIcons();
}
