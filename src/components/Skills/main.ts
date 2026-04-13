// Skills Component - Main Logic
import { skillsStyles as styles } from './styles';

export function createSkills(): string {
  return `
    <section id="skills" class="${styles.section}">
        <div class="${styles.container}">
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
    </section>
  `;
}
