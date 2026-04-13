// Education Component - Styles
export const educationStyles = {
  section: 'py-20 bg-gradient-to-br from-red-950 to-black min-h-screen flex items-center',
  container: 'container mx-auto px-6',
  subsection: 'mb-32 last:mb-0',
  title: 'text-4xl font-bold text-center mb-12 text-gray-100',
  titleAccent: 'text-red-500',
  timeline: 'max-w-3xl mx-auto relative',
  timelineItem: 'relative pl-8 pb-12 last:pb-0 border-l-2 border-red-900/30 hover:border-red-500/50 transition-colors duration-300 data-aos="fade-up"',
  timelineDot: 'absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full border-4 border-gray-950 hover:bg-red-400 transition-all duration-300 shadow-lg shadow-red-500/50',
  timelineContent: 'ml-4',
  year: 'inline-block px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm font-medium mb-2',
  degree: 'text-xl font-bold text-gray-100 mb-1',
  school: 'text-red-500 font-medium mb-2',
  description: 'text-gray-400 text-sm',
  projectLink: 'text-gray-100 hover:text-red-400 transition-colors duration-300 underline',
  skillsGrid: 'grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto',
  skillBox: 'bg-black/40 border border-red-900/50 rounded-lg p-6 hover:border-red-500/80 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105',
  skillName: 'text-xl font-bold text-red-400 mb-2',
  skillCategory: 'text-sm text-red-300/80 mb-3 font-medium',
  skillDescription: 'text-gray-300 text-sm leading-relaxed'
};

// Timeline alias for backward compatibility
export const timelineStyles = educationStyles;
