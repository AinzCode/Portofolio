// Projects Component - Main Logic
import { projectsStyles as styles } from './styles';

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

const projectsData: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with cart functionality and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'bg-gradient-to-br from-purple-600 to-blue-500'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates and team features.',
    tags: ['Vue.js', 'Firebase', 'Tailwind'],
    gradient: 'bg-gradient-to-br from-green-500 to-teal-500'
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with forecasts and location-based data.',
    tags: ['TypeScript', 'API', 'Charts'],
    gradient: 'bg-gradient-to-br from-orange-500 to-red-500'
  }
];

export function createProjects(): string {
  const projectCards = projectsData.map(project => `
    <div class="${styles.card}">
      <div class="${styles.imageContainer} ${project.gradient}">
        💼
      </div>
      <div class="${styles.content}">
        <h3 class="${styles.projectTitle}">${project.title}</h3>
        <p class="${styles.description}">${project.description}</p>
        <div class="${styles.tagContainer}">
          ${project.tags.map(tag => `
            <span class="${styles.tag}">${tag}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section id="projects" class="${styles.section}">
        <div class="${styles.container}">
            <h2 class="${styles.title}">
                My <span class="${styles.titleAccent}">Projects</span>
            </h2>
            <div class="${styles.grid}">
                ${projectCards}
            </div>
        </div>
    </section>
  `;
}
