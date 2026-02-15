// Navbar scroll utility
export function initializeNavbarScroll(): void {
  const navbar = document.getElementById('navbar') as HTMLElement;
  let lastScrollTop = 0;
  let isScrolling: number;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Clear timeout
    window.clearTimeout(isScrolling);

    // Add shadow when scrolled
    if (scrollTop > 100) {
      navbar?.classList.add('shadow-md');
    } else {
      navbar?.classList.remove('shadow-md');
    }

    // Hide/show navbar based on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down - hide navbar
      navbar?.classList.add('-translate-y-full');
    } else {
      // Scrolling up - show navbar
      navbar?.classList.remove('-translate-y-full');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    // Set a timeout to run after scrolling ends
    isScrolling = window.setTimeout(() => {
      // Show navbar when scrolling stops
      navbar?.classList.remove('-translate-y-full');
    }, 150);
  });
}
