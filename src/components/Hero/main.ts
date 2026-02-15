// Hero Component - Main Logic
import { heroStyles as styles } from './styles';

export function createHero(): string {
  return `
    <section id="home" class="${styles.section}">
        <div class="${styles.overlay}"></div>
        <div class="${styles.backgroundImage}"></div>
        <div class="${styles.container}">
            <h1 class="${styles.greeting}" data-aos="fade-down" data-aos-delay="100">Hello World!</h1>
            <h2 class="${styles.name}" data-aos="fade-up" data-aos-delay="300">
                I am <span class="${styles.nameHighlight}" id="hero-name">Patrick</span>!
            </h2>
            <p class="${styles.subtitle}" data-aos="fade-up" data-aos-delay="500">
                <i class="fas fa-code"></i> Full Stack Developer & Creative Problem Solver
            </p>
            <div class="${styles.ctaContainer}" data-aos="zoom-in" data-aos-delay="700">
                <a href="#contact" class="${styles.primaryButton}">
                    <i class="fas fa-envelope"></i> Get In Touch
                </a>
                <a href="#education" class="${styles.secondaryButton}">
                    <i class="fas fa-folder-open"></i> View Work
                </a>
            </div>
        </div>
    </section>
  `;
}

export function initializeHero(): void {
  // Add typing effect to name
  const heroNameElement = document.getElementById('hero-name') as HTMLSpanElement;
  
  if (heroNameElement) {
    const name = 'Patrick';
    heroNameElement.textContent = '';
    let index = 0;

    function typeName(): void {
      if (index < name.length) {
        heroNameElement.textContent += name.charAt(index);
        index++;
        setTimeout(typeName, 150);
      }
    }

    // Start typing after a brief delay
    setTimeout(() => typeName(), 800);
  }
  
  // Add parallax effect to background
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bgImage = document.querySelector(`.${styles.backgroundImage}`) as HTMLElement;
    
    if (bgImage) {
      bgImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
}
