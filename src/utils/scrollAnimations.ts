// Intersection Observer for scroll animations
export function initializeScrollAnimations(): void {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections and cards
  const elementsToAnimate = document.querySelectorAll('section > div, .bg-gray-800, .bg-gray-900');
  elementsToAnimate.forEach(el => {
    if (el.parentElement?.tagName === 'SECTION') {
      observer.observe(el);
    }
  });
}
