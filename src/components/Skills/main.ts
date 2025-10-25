// Skills Component - Main Logic
import { skillsStyles as styles } from './styles';

interface Skill {
  category: string;
  items: string[];
}

const skillsData: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Next.js']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'VS Code', 'Figma', 'Vercel']
  }
];

export function createSkills(): string {
  const skillCards = skillsData.map(skill => `
    <div class="${styles.card}">
      <h3 class="${styles.cardTitle}">${skill.category}</h3>
      <ul class="${styles.skillsList}">
        ${skill.items.map(item => `
          <li class="${styles.skillItem}">
            <span class="text-primary-400">${styles.skillIcon}</span>
            ${item}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');

  return `
    <section id="skills" class="${styles.section}">
        <div class="${styles.container}">
            <h2 class="${styles.title}">
                My <span class="${styles.titleAccent}">Skills</span>
            </h2>
            <div class="${styles.grid}">
                ${skillCards}
            </div>
        </div>
    </section>
  `;
}
