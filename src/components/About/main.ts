// About Component - Main Logic
import { aboutStyles as styles } from './styles';

export function createAbout(): string {
  return `
    <section id="about" class="${styles.section}">
        <div class="${styles.container}">
            <h2 class="${styles.title}">
                About <span class="${styles.titleAccent}">Me</span>
            </h2>
            <div class="${styles.card}">
                <p class="${styles.paragraph}">
                    I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                    I love creating beautiful, responsive, and user-friendly applications that solve real-world problems.
                </p>
                <p class="${styles.paragraph}">
                    With a strong foundation in both frontend and backend development, I bring ideas to life 
                    through clean code and elegant solutions. I'm constantly learning and adapting to new technologies 
                    to stay at the forefront of web development.
                </p>
            </div>
        </div>
    </section>
  `;
}
