// Advanced Intersection Observer for scroll animations (AOS - Animate On Scroll)
export function initializeScrollAnimations(): void {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add aos-animate class to trigger animations
        entry.target.classList.add('aos-animate');
        
        // Optional: Unobserve after animation (one-time animation)
        // Comment out the line below if you want animations to repeat
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with data-aos attribute
  const elementsToAnimate = document.querySelectorAll('[data-aos]');
  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });

  // Additional animations for sections and cards
  const sections = document.querySelectorAll('section:not(#home)');
  sections.forEach((section, index) => {
    section.setAttribute('data-aos', 'fade-up');
    section.setAttribute('data-aos-delay', String(index * 100));
    observer.observe(section);
  });

  // Animate cards, projects, and skill items
  const cards = document.querySelectorAll('.bg-gray-800, .bg-white, [class*="card"]');
  cards.forEach((card, index) => {
    if (!card.hasAttribute('data-aos')) {
      card.setAttribute('data-aos', 'zoom-in');
      card.setAttribute('data-aos-delay', String((index % 3) * 100));
      observer.observe(card);
    }
  });
}

// Add stagger animation to lists
export function addStaggerAnimation(selector: string, delay: number = 100): void {
  const items = document.querySelectorAll(selector);
  items.forEach((item, index) => {
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-delay', String(index * delay));
  });
}

