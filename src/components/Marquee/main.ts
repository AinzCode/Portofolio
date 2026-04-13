// Marquee Component - Tech Stack Showcase
import { marqueeStyles as styles } from './styles';

export function createMarquee(): string {
  const technologies = [
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'React',
    'Git',
    'GitHub',
    'VSCode',
    'Figma',
    'Node.js',
    'Web APIs'
  ];

  const techItems = technologies
    .map(tech => `<div class="${styles.item}">${tech}</div>`)
    .join('');

  return `
    <div class="${styles.marqueeContainer}">
      <div class="${styles.marqueeTrack}" id="marquee-track">
        ${techItems}
        ${techItems}
      </div>
    </div>
  `;
}

export function initializeMarquee(): void {
  const marqueeTrack = document.getElementById('marquee-track') as HTMLDivElement;

  if (!marqueeTrack) return;

  let isHovering = false;

  marqueeTrack.addEventListener('mouseenter', () => {
    isHovering = true;
    marqueeTrack.style.animationPlayState = 'paused';
    marqueeTrack.style.animation = 'marqueeSlowSlow 60s linear infinite';
    marqueeTrack.style.animationPlayState = 'running';
  });

  marqueeTrack.addEventListener('mouseleave', () => {
    isHovering = false;
    marqueeTrack.style.animation = 'marqueeSlide 30s linear infinite';
  });
}
