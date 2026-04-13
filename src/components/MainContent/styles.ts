// Main Content Component - Styles
export const mainStyles = {
  section: 'py-20 bg-gradient-to-br from-red-950 to-black flex items-center',
  container: 'container mx-auto px-6',
  subsection: 'mb-16 last:mb-0 min-h-fit flex flex-col justify-center',
  title: 'text-4xl font-bold text-center mb-12 text-gray-100',
  titleAccent: 'text-red-500',
  // About styles
  card: 'max-w-3xl mx-auto bg-black/40 border border-red-900/50 rounded-lg p-8',
  paragraph: 'text-gray-300 text-lg leading-relaxed mb-6 last:mb-0',
  // Skills styles
  skillsGrid: 'grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto',
  skillBox: 'bg-black/40 border border-red-900/50 rounded-lg p-6 hover:border-red-500/80 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105',
  skillName: 'text-xl font-bold text-red-400 mb-2',
  skillCategory: 'text-sm text-red-300/80 mb-3 font-medium',
  skillDescription: 'text-gray-300 text-sm leading-relaxed',
  // Timeline styles
  timeline: 'max-w-3xl mx-auto relative',
  timelineItem: 'relative pl-8 pb-12 last:pb-0 border-l-2 border-red-900/30 hover:border-red-500/50 transition-colors duration-300',
  timelineDot: 'absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full border-4 border-gray-950 hover:bg-red-400 transition-all duration-300 shadow-lg shadow-red-500/50',
  timelineContent: 'ml-4',
  year: 'inline-block px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm font-medium mb-2',
  degree: 'text-xl font-bold text-gray-100 mb-1',
  school: 'text-red-500 font-medium mb-2',
  description: 'text-gray-400 text-sm',
  projectLink: 'text-gray-100 hover:text-red-400 transition-colors duration-300 underline',
  // Contact styles
  gridLayout: 'grid md:grid-cols-2 gap-12 max-w-5xl mx-auto',
  leftSide: 'flex items-center justify-center',
  quoteContainer: 'text-center',
  quoteText: 'text-3xl md:text-4xl font-bold text-red-500 italic',
  rightSide: 'space-y-8',
  form: 'space-y-6',
  formGroup: 'flex flex-col',
  label: 'text-red-400 font-semibold mb-2',
  input: 'bg-black/50 border border-red-900/50 text-gray-100 px-4 py-3 rounded-md focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all',
  textarea: 'bg-black/50 border border-red-900/50 text-gray-100 px-4 py-3 rounded-md focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none',
  button: 'bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-md hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-red-500/50 hover:scale-105',
  socialContainer: 'flex gap-4 justify-center md:justify-start',
  socialLink: 'text-red-400 hover:text-red-300 transition-colors duration-300',
  socialIcon: 'w-6 h-6'
};
