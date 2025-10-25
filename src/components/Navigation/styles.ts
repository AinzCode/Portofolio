// Navigation Component - Tailwind CSS Classes
export const navigationStyles = {
  nav: 'fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-black/20 z-50 transition-all duration-300 border-b border-gray-800',
  container: 'container mx-auto px-6 py-4',
  flexContainer: 'flex justify-between items-center',
  logo: 'text-2xl font-bold text-primary-400 hover:text-primary-300 transition',
  desktopMenu: 'hidden md:flex space-x-8',
  navLink: 'nav-link text-gray-300 hover:text-primary-400 transition font-medium',
  mobileButton: 'md:hidden text-gray-300 hover:text-primary-400 focus:outline-none',
  mobileMenu: 'hidden md:hidden mt-4 pb-4 animate-slide-down',
  mobileLink: 'block py-2 text-gray-300 hover:text-primary-400 transition',
  icon: 'w-6 h-6'
};
