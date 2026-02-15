// Contact Component - Main Logic
import { contactStyles as styles } from './styles';

export function createContact(): string {
  return `
    <section id="contact" class="${styles.section}">
        <div class="${styles.container}">
            <div class="${styles.gridLayout}">
                <!-- Left side for quote/logo -->
                <div class="${styles.leftSide}">
                    <div class="${styles.quoteContainer}">
                        <p class="${styles.quoteText}">"Let's build something amazing together."</p>
                    </div>
                </div>
                
                <!-- Right side for form -->
                <div class="${styles.rightSide}">
                    <h2 class="${styles.title}">
                        Get In <span class="${styles.titleAccent}">Touch</span>
                    </h2>
                    <form id="contact-form" class="${styles.form}">
                        <div class="${styles.formGroup}">
                            <label class="${styles.label}" for="name">Name</label>
                            <input type="text" id="name" name="name" class="${styles.input}" required>
                        </div>
                        <div class="${styles.formGroup}">
                            <label class="${styles.label}" for="email">Email</label>
                            <input type="email" id="email" name="email" class="${styles.input}" required>
                        </div>
                        <div class="${styles.formGroup}">
                            <label class="${styles.label}" for="message">Message</label>
                            <textarea id="message" name="message" rows="4" class="${styles.textarea}" required></textarea>
                        </div>
                        <button type="submit" class="${styles.button}">Send Message</button>
                    </form>
                    
                    <div class="${styles.socialContainer}">
                        <a href="#" class="${styles.socialLink}" aria-label="GitHub">
                            <svg class="${styles.socialIcon}" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="#" class="${styles.socialLink}" aria-label="LinkedIn">
                            <svg class="${styles.socialIcon}" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a href="#" class="${styles.socialLink}" aria-label="Twitter">
                            <svg class="${styles.socialIcon}" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
}

export function initializeContact(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement;
  
  form?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  });
}
