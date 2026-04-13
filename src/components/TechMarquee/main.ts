// Tech Marquee Component - Main Logic
import { techMarqueeStyles as styles } from './styles';

interface TechIcon {
  name: string;
  icon: string;
  url: string;
}

const techStack: TechIcon[] = [
  { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com' },
  { name: 'VS Code', icon: 'fas fa-code', url: 'https://code.visualstudio.com' },
  { name: 'TypeScript', icon: 'fab fa-js-square', url: 'https://www.typescriptlang.org' },
  { name: 'React', icon: 'fab fa-react', url: 'https://react.dev' },
  { name: 'HTML', icon: 'fab fa-html5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', icon: 'fab fa-css3-alt', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'Java', icon: 'fab fa-java', url: 'https://www.java.com' },
  { name: 'Supabase', icon: 'fas fa-database', url: 'https://supabase.com' },
  { name: 'Figma', icon: 'fab fa-figma', url: 'https://figma.com' },
];

export function createTechMarquee(): string {
  const techIcons = techStack.map(tech => `
    <a href="${tech.url}" target="_blank" rel="noopener noreferrer" class="${styles.techItem}">
      <i class="${tech.icon} ${styles.icon}"></i>
      <span class="${styles.techName}">${tech.name}</span>
    </a>
  `).join('');

  return `
    <section class="${styles.section}">
      <div class="${styles.marqueeContainer}">
        <div class="${styles.marqueeContent}">
          ${techIcons}
          ${techIcons}
        </div>
      </div>
    </section>
  `;
}
