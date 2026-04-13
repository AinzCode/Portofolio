// Hero Component - Tailwind CSS Classes
export const heroStyles = {
  section: 'relative min-h-screen flex items-center justify-center overflow-hidden bg-black dark:bg-black light:bg-white',
  backgroundImage: 'absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat',
  overlay: 'absolute inset-0 bg-black/40 dark:bg-black/40 light:bg-white/20 backdrop-blur-sm dark:backdrop-blur-sm light:backdrop-blur-sm',
  container: 'relative z-10 container mx-auto px-6',
  contentWrapper: 'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center',
  imageColumn: 'flex justify-center lg:justify-end',
  profileImage: 'w-full max-w-xs lg:max-w-sm h-auto rounded-lg object-cover shadow-2xl hover:shadow-red-500/50 dark:hover:shadow-red-500/50 light:hover:shadow-red-400/30 transition-all duration-500 hover:scale-105',
  textColumn: 'text-white dark:text-white light:text-gray-900 space-y-6 lg:space-y-8',
  name: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide drop-shadow-lg dark:text-white light:text-gray-900',
  nameHighlight: 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-300 dark:from-red-500 dark:via-red-400 dark:to-red-300 light:from-red-600 light:via-red-500 light:to-red-400 inline-block',
  jobTitle: 'text-lg md:text-xl lg:text-2xl text-gray-300 dark:text-gray-300 light:text-gray-700 font-light tracking-wide drop-shadow-md',
  description: 'max-w-2xl text-base md:text-lg text-gray-200/90 dark:text-gray-200/90 light:text-gray-700 font-light leading-relaxed tracking-wide drop-shadow-md',
  bibleVerseReference: 'block mt-4 text-xs md:text-sm uppercase tracking-[0.2em] text-red-300/90 dark:text-red-300/90 light:text-red-600/80 not-italic font-semibold',
  ctaContainer: 'flex flex-col sm:flex-row gap-4 pt-4',
  primaryButton: 'group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-600 dark:to-red-700 light:from-red-500 light:to-red-600 text-white dark:text-white light:text-white rounded-md hover:from-red-700 hover:to-red-800 dark:hover:from-red-700 dark:hover:to-red-800 light:hover:from-red-600 light:hover:to-red-700 transition-all duration-300 font-semibold shadow-2xl dark:hover:shadow-red-500/50 light:hover:shadow-red-400/30 hover:scale-105 transform inline-flex items-center justify-center gap-2 w-fit',
  secondaryButton: 'group px-8 py-4 border-2 border-red-500 dark:border-red-500 light:border-red-400 text-red-400 dark:text-red-400 light:text-red-600 rounded-md hover:bg-red-600 dark:hover:bg-red-600 light:hover:bg-red-100 hover:text-white dark:hover:text-white light:hover:text-red-700 hover:border-red-600 dark:hover:border-red-600 light:hover:border-red-400 transition-all duration-300 font-semibold shadow-xl hover:scale-105 transform inline-flex items-center gap-2 backdrop-blur-sm w-fit',
  scrollIndicator: 'absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce',
  scrollArrow: 'text-red-400 dark:text-red-400 light:text-red-600 text-3xl hover:text-red-300 dark:hover:text-red-300 light:hover:text-red-500 transition-colors duration-300',
  greeting: 'hidden',
  subtitle: 'hidden',
  bibleVerse: 'hidden'
};
