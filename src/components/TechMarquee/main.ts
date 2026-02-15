// Tech Marquee Component - Main Logic
import { techMarqueeStyles as styles } from './styles';

interface TechIcon {
  name: string;
  icon: string;
}

const techStack: TechIcon[] = [
  { name: 'GitHub', icon: 'fab fa-github' },
  { name: 'VS Code', icon: 'fas fa-code' },
  { name: 'TypeScript', icon: 'fas fa-code' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'Java', icon: 'fab fa-java' },
  { name: 'Supabase', icon: 'fas fa-database' },
  { name: 'Figma', icon: 'fab fa-figma' },
];

export function createTechMarquee(): string {
  const techIcons = techStack.map(tech => `
    <div class="${styles.techItem}">
      <i class="${tech.icon} ${styles.icon}"></i>
      <span class="${styles.techName}">${tech.name}</span>
    </div>
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
