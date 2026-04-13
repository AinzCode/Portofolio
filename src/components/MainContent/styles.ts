// Main Content Component - Styles
export const mainStyles = {
  section: 'py-20 bg-gradient-to-br from-black via-red-900 to-black dark:from-black dark:via-red-900 dark:to-black light:from-white light:via-red-50 light:to-white flex items-center',
  container: 'container mx-auto px-6',
  subsection: 'mb-16 last:mb-0 min-h-fit flex flex-col justify-center',
  title: 'text-4xl font-bold text-center mb-12 text-gray-100 dark:text-gray-100 light:text-gray-900',
  titleAccent: 'text-red-500 dark:text-red-500 light:text-red-600',
  // About styles
  card: 'max-w-3xl mx-auto bg-black/40 dark:bg-black/40 light:bg-red-50 border border-red-900/50 dark:border-red-900/50 light:border-red-200 rounded-lg p-8 hover:border-red-500/80 dark:hover:border-red-500/80 light:hover:border-red-400 hover:shadow-lg dark:hover:shadow-red-500/30 light:hover:shadow-red-300/20 transition-all duration-300',
  paragraph: 'text-gray-300 dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6 last:mb-0',
  // Skills styles
  skillsGrid: 'grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto',
  skillBox: 'bg-black/40 dark:bg-black/40 light:bg-red-50 border border-red-900/50 dark:border-red-900/50 light:border-red-200 rounded-lg p-6 hover:border-red-500/80 dark:hover:border-red-500/80 light:hover:border-red-400 hover:shadow-lg dark:hover:shadow-red-500/30 light:hover:shadow-red-300/20 transition-all duration-300 hover:scale-105',
  skillName: 'text-xl font-bold text-red-400 dark:text-red-400 light:text-red-600 mb-2',
  skillCategory: 'text-sm text-red-300/80 dark:text-red-300/80 light:text-red-500/80 mb-3 font-medium',
  skillDescription: 'text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm leading-relaxed',
  // Timeline styles
  timeline: 'max-w-3xl mx-auto relative',
  timelineItem: 'relative pl-8 pb-12 last:pb-0 border-l-2 border-red-900/30 dark:border-red-900/30 light:border-red-200 hover:border-red-500/50 dark:hover:border-red-500/50 light:hover:border-red-400 transition-colors duration-300',
  timelineDot: 'absolute -left-[9px] top-0 w-4 h-4 bg-red-600 dark:bg-red-600 light:bg-red-500 rounded-full border-4 border-gray-950 dark:border-gray-950 light:border-white hover:bg-red-400 dark:hover:bg-red-400 light:hover:bg-red-400 transition-all duration-300 shadow-lg dark:shadow-red-500/50 light:shadow-red-400/30',
  timelineContent: 'ml-4',
  year: 'inline-block px-3 py-1 bg-red-600/20 dark:bg-red-600/20 light:bg-red-100 text-red-400 dark:text-red-400 light:text-red-600 rounded-full text-sm font-medium mb-2',
  degree: 'text-xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900 mb-1',
  school: 'text-red-500 dark:text-red-500 light:text-red-600 font-medium mb-2',
  description: 'text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm',
  projectLink: 'text-gray-100 dark:text-gray-100 light:text-gray-900 hover:text-red-400 dark:hover:text-red-400 light:hover:text-red-600 transition-colors duration-300 underline',
  // Contact styles
  gridLayout: 'grid md:grid-cols-2 gap-12 max-w-5xl mx-auto',
  leftSide: 'flex items-center justify-center',
  quoteContainer: 'text-center',
  quoteText: 'text-3xl md:text-4xl font-bold text-red-500 dark:text-red-500 light:text-red-600 italic',
  rightSide: 'space-y-8',
  form: 'space-y-6',
  formGroup: 'flex flex-col',
  label: 'text-red-400 dark:text-red-400 light:text-red-600 font-semibold mb-2',
  input: 'bg-black/50 dark:bg-black/50 light:bg-white border border-red-900/50 dark:border-red-900/50 light:border-red-200 text-gray-100 dark:text-gray-100 light:text-gray-900 px-4 py-3 rounded-md focus:outline-none focus:border-red-500 dark:focus:border-red-500 light:focus:border-red-400 focus:ring-2 focus:ring-red-500/20 dark:focus:ring-red-500/20 light:focus:ring-red-400/20 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-500 light:placeholder:text-gray-400',
  textarea: 'bg-black/50 dark:bg-black/50 light:bg-white border border-red-900/50 dark:border-red-900/50 light:border-red-200 text-gray-100 dark:text-gray-100 light:text-gray-900 px-4 py-3 rounded-md focus:outline-none focus:border-red-500 dark:focus:border-red-500 light:focus:border-red-400 focus:ring-2 focus:ring-red-500/20 dark:focus:ring-red-500/20 light:focus:ring-red-400/20 transition-all resize-none placeholder:text-gray-500 dark:placeholder:text-gray-500 light:placeholder:text-gray-400',
  button: 'bg-gradient-to-r from-red-600 to-red-700 dark:from-red-600 dark:to-red-700 light:from-red-500 light:to-red-600 text-white px-8 py-3 rounded-md hover:from-red-700 hover:to-red-800 dark:hover:from-red-700 dark:hover:to-red-800 light:hover:from-red-600 light:hover:to-red-700 transition-all duration-300 font-semibold shadow-lg dark:hover:shadow-red-500/50 light:hover:shadow-red-400/30 hover:scale-105',
  socialContainer: 'flex gap-4 justify-center md:justify-start',
  socialLink: 'text-red-400 dark:text-red-400 light:text-red-600 hover:text-red-300 dark:hover:text-red-300 light:hover:text-red-500 transition-colors duration-300',
  socialIcon: 'w-6 h-6'
};
