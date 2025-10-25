// Footer Component - Main Logic
import { footerStyles as styles } from './styles';

export function createFooter(): string {
  const currentYear = new Date().getFullYear();
  
  return `
    <footer class="${styles.footer}">
        <div class="${styles.container}">
            <p class="${styles.text}">
                © ${currentYear} <span class="${styles.highlight}">Your Portfolio</span>. Built with TypeScript & Tailwind CSS.
            </p>
        </div>
    </footer>
  `;
}
