// Dark Mode Toggle Utility
export function initializeDarkMode(): void {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
  const html = document.documentElement;
  const body = document.body;
  
  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  // Apply saved theme
  if (savedTheme === 'light') {
    html.classList.remove('dark');
    body.classList.remove('dark');
    body.classList.add('light');
  } else {
    html.classList.add('dark');
    body.classList.add('dark');
    body.classList.remove('light');
  }
  
  // Function to toggle theme
  const toggleTheme = () => {
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
      html.classList.remove('dark');
      body.classList.remove('dark');
      body.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      body.classList.add('dark');
      body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
    
    // Update toggle icons
    updateDarkModeIcon();
  };
  
  // Add event listeners to both toggles
  darkModeToggle?.addEventListener('click', toggleTheme);
  darkModeToggleMobile?.addEventListener('click', toggleTheme);
  
  // Initial icon update
  updateDarkModeIcon();
}

function updateDarkModeIcon(): void {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
  const isDark = document.documentElement.classList.contains('dark');
  
  // Update desktop icon
  const desktopIcon = darkModeToggle?.querySelector('i');
  if (desktopIcon) {
    desktopIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  }
  
  // Update mobile icon
  const mobileIcon = darkModeToggleMobile?.querySelector('i');
  if (mobileIcon) {
    mobileIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  }
}
