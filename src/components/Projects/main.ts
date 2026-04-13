// Projects Component - Main Logic
import { projectsStyles as styles } from './styles';

export function createProjects(): string {
  return `
    <section id="projects" class="${styles.section}">
        <div class="${styles.container}">
            <h2 class="${styles.title}">
              My <span class="${styles.titleAccent}">Projects</span>
            </h2>
            <div class="${styles.timeline}">
              <!-- Project Timeline Item 1 -->
              <div class="${styles.timelineItem}">
                <div class="${styles.timelineDot}"></div>
                <div class="${styles.timelineContent}">
                  <div class="${styles.year}">2025</div>
                  <h3 class="${styles.degree}">
                    <a
                      href="https://www.thepinesva.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="${styles.projectLink}"
                    >
                      ThePinesVA : VA Services
                    </a>
                  </h3>
                  <p class="${styles.school}">React, Node.js, MongoDB</p>
                  <p class="${styles.description}">A full-featured online platform for virtual assistant services with user management, booking, medical, and administrative features.</p>
                </div>
              </div>

              <!-- Project Timeline Item 2 -->
              <div class="${styles.timelineItem}">
                <div class="${styles.timelineDot}"></div>
                <div class="${styles.timelineContent}">
                  <div class="${styles.year}">2023</div>
                  <h3 class="${styles.degree}">Task Management App</h3>
                  <p class="${styles.school}">Vue.js, Firebase, Tailwind</p>
                  <p class="${styles.description}">Collaborative task manager with real-time updates and team features.</p>
                </div>
              </div>

              <!-- Project Timeline Item 3 -->
              <div class="${styles.timelineItem}">
                <div class="${styles.timelineDot}"></div>
                <div class="${styles.timelineContent}">
                  <div class="${styles.year}">2023</div>
                  <h3 class="${styles.degree}">Weather Dashboard</h3>
                  <p class="${styles.school}">TypeScript, API, Charts</p>
                  <p class="${styles.description}">Beautiful weather app with forecasts and location-based data visualization.</p>
                </div>
              </div>
            </div>
        </div>
    </section>
  `;
}
