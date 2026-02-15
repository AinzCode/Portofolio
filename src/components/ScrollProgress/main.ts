// Scroll Progress Component
export function createScrollProgress(): string {
  return `
    <div id="scroll-progress" class="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
      <div id="scroll-progress-bar" class="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-700 transition-all duration-100 ease-out" style="width: 0%"></div>
    </div>
  `;
}

export function initializeScrollProgress(): void {
  const progressBar = document.getElementById('scroll-progress-bar');
  
  if (!progressBar) return;

  const updateProgressBar = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const scrollPercentage = (scrollTop / documentHeight) * 100;
    progressBar.style.width = `${Math.min(scrollPercentage, 100)}%`;
  };

  window.addEventListener('scroll', updateProgressBar);
  window.addEventListener('resize', updateProgressBar);
  
  // Initial update
  updateProgressBar();
}
