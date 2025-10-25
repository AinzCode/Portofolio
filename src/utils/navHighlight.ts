// Active navigation highlighting
export function initializeNavHighlight(): void {
  const sections = document.querySelectorAll('section[id]');

  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const htmlSection = section as HTMLElement;
      const sectionHeight = htmlSection.offsetHeight;
      const sectionTop = htmlSection.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('text-primary-400');
      } else {
        document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('text-primary-400');
      }
    });
  }

  window.addEventListener('scroll', highlightNavigation);
}
