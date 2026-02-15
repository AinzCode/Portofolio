// Hero Component - Tailwind CSS Classes
export const heroStyles = {
  section: 'relative min-h-screen flex items-center justify-center overflow-hidden',
  backgroundImage: 'absolute inset-0 w-full h-full bg-gradient-to-br from-black via-red-950 to-black dark:from-black dark:via-red-950 dark:to-black bg-[url("/Public/profile-placeholder.svg")] bg-cover bg-center bg-no-repeat transform transition-transform duration-1000',
  overlay: 'absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm',
  container: 'relative z-10 container mx-auto px-6 text-center',
  greeting: 'text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl animate-fade-in-down',
  name: 'text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-wide drop-shadow-lg',
  nameHighlight: 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-300 inline-block animate-gradient-x',
  subtitle: 'text-lg md:text-xl lg:text-2xl text-gray-100 dark:text-gray-200 mb-12 font-light tracking-wide drop-shadow-md',
  ctaContainer: 'flex flex-col sm:flex-row gap-4 justify-center items-center mb-16',
  primaryButton: 'group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold shadow-2xl hover:shadow-red-500/50 hover:scale-105 transform flex items-center gap-2',
  secondaryButton: 'group px-8 py-4 border-2 border-red-500 text-red-400 rounded-full hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-semibold shadow-xl hover:scale-105 transform flex items-center gap-2 backdrop-blur-sm',
  scrollIndicator: 'absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce',
  scrollArrow: 'text-red-400 text-3xl hover:text-red-300 transition-colors duration-300'
};
