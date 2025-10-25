// Navbar scroll utility
export function initializeNavbarScroll(): void {
  const navbar = document.getElementById('navbar') as HTMLElement;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      navbar?.classList.add('shadow-md');
    } else {
      navbar?.classList.remove('shadow-md');
    }
  });
}
