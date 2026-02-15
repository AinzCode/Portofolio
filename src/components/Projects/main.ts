// Projects Component - Main Logic
import { projectsStyles as styles } from './styles';

export function createProjects(): string {
  return `
    <section id="projects" class="${styles.section}">
        <div class="${styles.container}">
            <h2 class="${styles.title}">
                My <span class="${styles.titleAccent}">Projects</span>
            </h2>
            <div class="${styles.grid}">
                <!-- Projects will be added here later -->
            </div>
        </div>
    </section>
  `;
}
