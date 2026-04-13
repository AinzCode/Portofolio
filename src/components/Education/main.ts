// Timeline Component - Main Logic
import { timelineStyles as styles } from './styles';

export function createEducation(): string {
  return `
    <section id="timeline-section" class="${styles.section}">
        <div class="${styles.container}">
            <!-- Skills Subsection -->
            <div class="${styles.subsection}" id="skills">
                <h2 class="${styles.title}">
                    My <span class="${styles.titleAccent}">Skills</span>
                </h2>
                <div class="${styles.skillsGrid}">
                    <!-- Skill Box 1 -->
                    <div class="${styles.skillBox}">
                        <h3 class="${styles.skillName}">Multitasking</h3>
                        <p class="${styles.skillCategory}">Personal Strength</p>
                        <p class="${styles.skillDescription}">Able to manage multiple tasks effectively while maintaining quality and focus.</p>
                    </div>

                    <!-- Skill Box 2 -->
                    <div class="${styles.skillBox}">
                        <h3 class="${styles.skillName}">Communication</h3>
                        <p class="${styles.skillCategory}">Interpersonal Skill</p>
                        <p class="${styles.skillDescription}">Clear and confident in sharing ideas, collaborating with teammates, and understanding client needs.</p>
                    </div>

                    <!-- Skill Box 3 -->
                    <div class="${styles.skillBox}">
                        <h3 class="${styles.skillName}">Problem Solving</h3>
                        <p class="${styles.skillCategory}">Professional Skill</p>
                        <p class="${styles.skillDescription}">Comfortable analyzing issues and creating practical solutions in fast-paced environments.</p>
                    </div>

                    <!-- Skill Box 4 -->
                    <div class="${styles.skillBox}">
                        <h3 class="${styles.skillName}">Cooking</h3>
                        <p class="${styles.skillCategory}">Life Skill</p>
                        <p class="${styles.skillDescription}">Strong attention to detail, timing, and creativity through preparing meals and trying new recipes.</p>
                    </div>
                </div>
            </div>

            <!-- Education Subsection -->
            <div class="${styles.subsection}" id="education">
                <h2 class="${styles.title}">
                    My <span class="${styles.titleAccent}">Education</span>
                </h2>
                <div class="${styles.timeline}">
                    <!-- Timeline Item 1 -->
                    <div class="${styles.timelineItem}">
                        <div class="${styles.timelineDot}"></div>
                        <div class="${styles.timelineContent}">
                            <div class="${styles.year}">2021 - Present</div>
                            <h3 class="${styles.degree}">Bachelor OF Science in Information Technology</h3>
                            <p class="${styles.school}">University of the Cordilleras</p>
                            <p class="${styles.description}">Studied software development, algorithms, and data structures.</p>
                        </div>
                    </div>

                    <!-- Timeline Item 2 -->
                    <div class="${styles.timelineItem}">
                        <div class="${styles.timelineDot}"></div>
                        <div class="${styles.timelineContent}">
                            <div class="${styles.year}">2020 - 2022</div>
                            <h3 class="${styles.degree}">Senior High School Graduate</h3>
                            <p class="${styles.school}">Juan G. Macaraeg National High School</p>
                            <p class="${styles.description}">ICT Program with focus on web development and graduating with high honors.</p>
                        </div>
                    </div>

                    <!-- Timeline Item 3 -->
                    <div class="${styles.timelineItem}">
                        <div class="${styles.timelineDot}"></div>
                        <div class="${styles.timelineContent}">
                            <div class="${styles.year}">2022</div>
                            <h3 class="${styles.degree}">National Certificate II (NC II)</h3>
                            <p class="${styles.school}">Computer Systems Servicing</p>
                            <p class="${styles.description}">A TESDA-certified program in the Philippines that validates proficiency in installing, configuring, diagnosing, and maintaining computer systems and networks. It prepares individuals for roles such as computer technicians or IT support staff by covering hardware assembly, software installation, and network setup.</p>
                        </div>
                    </div>

                     <!-- Timeline Item 4 -->
                    <div class="${styles.timelineItem}">
                        <div class="${styles.timelineDot}"></div>
                        <div class="${styles.timelineContent}">
                            <div class="${styles.year}">2018 - 2020</div>
                            <h3 class="${styles.degree}">High School Graduate</h3>
                            <p class="${styles.school}">Juan G. Macaraeg National High School</p>
                            <p class="${styles.description}">Graduating with honors.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Projects Subsection -->
            <div class="${styles.subsection}" id="projects">
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
        </div>
    </section>
  `;
}
