// Navigation Component - Tailwind CSS Classes
export const navigationStyles = {
  nav: 'fixed top-0 w-full bg-black/95 dark:bg-black/95 light:bg-white/95 backdrop-blur-sm shadow-lg dark:shadow-red-900/20 light:shadow-gray-300/20 z-50 transition-all duration-300 border-b dark:border-red-800 light:border-red-100',
  container: 'container mx-auto px-6 py-4',
  flexContainer: 'flex justify-between items-center',
  logo: 'text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 dark:from-red-500 dark:to-red-700 light:from-red-600 light:to-red-700 hover:from-red-400 hover:to-red-600 dark:hover:from-red-400 dark:hover:to-red-600 light:hover:from-red-500 light:hover:to-red-600 transition-all duration-300',
  desktopMenu: 'hidden md:flex space-x-8 items-center',
  navLink: 'nav-link text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-red-500 dark:hover:text-red-400 light:hover:text-red-600 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 dark:after:bg-red-500 light:after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full',
  darkModeButton: 'ml-4 p-2 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-red-400 dark:hover:text-red-300 light:hover:text-red-600 transition-all duration-300 rounded-lg hover:bg-gray-900/50 dark:hover:bg-gray-800/50 light:hover:bg-red-100',
  mobileButton: 'md:hidden text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-red-500 dark:hover:text-red-500 light:hover:text-red-600 focus:outline-none transition-colors duration-300',
  mobileMenu: 'hidden md:hidden mt-4 pb-4 space-y-2 animate-slide-down bg-black dark:bg-black light:bg-white rounded-lg',
  mobileLink: 'block py-3 px-4 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-red-500 dark:hover:text-red-400 light:hover:text-red-600 hover:bg-gray-900/50 dark:hover:bg-gray-800/50 light:hover:bg-red-50 rounded-lg transition-all duration-300',
  darkModeButtonMobile: 'w-full text-left py-3 px-4 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-red-400 dark:hover:text-red-300 light:hover:text-red-600 hover:bg-gray-900/50 dark:hover:bg-gray-800/50 light:hover:bg-red-50 rounded-lg transition-all duration-300 flex items-center gap-2',
  icon: 'w-6 h-6'
};
