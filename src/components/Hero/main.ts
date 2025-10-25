// Hero Component - Main Logic
import { heroStyles as styles } from './styles';

export function createHero(): string {
  return `
    <section id="home" class="${styles.section}">
        <div class="${styles.container}">
            <p class="${styles.greeting}">Hello, I'm</p>
            <h1 class="${styles.name}">
                <span class="${styles.nameStatic}">Your</span>
                <span class="${styles.nameAnimated}" id="hero-name"></span>
            </h1>
            <p class="${styles.role}">Full Stack Developer</p>
            <div class="${styles.ctaContainer}">
                <a href="#contact" class="${styles.primaryButton}">Get In Touch</a>
                <a href="#projects" class="${styles.secondaryButton}">View Work</a>
            </div>
        </div>
    </section>
  `;
}

export function initializeHero(): void {
  const heroNameElement = document.getElementById('hero-name') as HTMLSpanElement;
  const name = ' Name';
  let index = 0;

  function typeName(): void {
    if (index < name.length) {
      heroNameElement.textContent += name.charAt(index);
      index++;
      setTimeout(typeName, 100);
    }
  }

  typeName();
}
