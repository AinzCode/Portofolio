// Hero Component - Tailwind CSS Classes
export const heroStyles = {
  section: 'relative min-h-screen flex items-center justify-center overflow-hidden bg-black',
  backgroundImage: 'absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat',
  overlay: 'absolute inset-0 bg-black/40 dark:bg-black/50 backdrop-blur-sm',
  container: 'relative z-10 container mx-auto px-6',
  contentWrapper: 'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center',
  imageColumn: 'flex justify-center lg:justify-end',
  profileImage: 'w-full max-w-xs lg:max-w-sm h-auto rounded-lg object-cover shadow-2xl hover:shadow-red-500/50 transition-all duration-500 hover:scale-105',
  textColumn: 'text-white space-y-6 lg:space-y-8',
  name: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide drop-shadow-lg',
  nameHighlight: 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-300 inline-block',
  jobTitle: 'text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide drop-shadow-md',
  description: 'max-w-2xl text-base md:text-lg text-gray-200/90 font-light leading-relaxed tracking-wide drop-shadow-md',
  bibleVerseReference: 'block mt-4 text-xs md:text-sm uppercase tracking-[0.2em] text-red-300/90 not-italic font-semibold',
  ctaContainer: 'flex flex-col sm:flex-row gap-4 pt-4',
  primaryButton: 'group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold shadow-2xl hover:shadow-red-500/50 hover:scale-105 transform inline-flex items-center justify-center gap-2 w-fit',
  secondaryButton: 'group px-8 py-4 border-2 border-red-500 text-red-400 rounded-md hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-semibold shadow-xl hover:scale-105 transform inline-flex items-center gap-2 backdrop-blur-sm w-fit',
  scrollIndicator: 'absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce',
  scrollArrow: 'text-red-400 text-3xl hover:text-red-300 transition-colors duration-300',
  greeting: 'hidden',
  subtitle: 'hidden',
  bibleVerse: 'hidden'
};
