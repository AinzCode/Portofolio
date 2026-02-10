// Portfolio Configuration File
// Edit this file to customize your portfolio content

export const config = {
  // Personal Information
  personal: {
    name: 'Patrick Licuanan',
    title: 'Full Stack Developer',
    subtitle: 'Creative Problem Solver | Tech Enthusiast',
    about: {
      paragraph1: "I'm a passionate developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create elegant solutions to complex problems.",
      paragraph2: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, sharing knowledge with the developer community or mostly playing Online Games."
    }
  },

  // Social Links
  social: {
    github: 'https://github.com/AinzCode',
    linkedin: '#',
    twitter: '#'

  },

  // Skills Data
  skills: [
    {
      title: 'Frontend',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      skills: [
        '• HTML5, CSS3, TypeScript',
        '• React, Vue, Angular',
        '• Tailwind CSS, Bootstrap',
        '• Responsive Design and Professional Website'
      ]
    },
    {
      title: 'Backend',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
      skills: [
        '• Node.js, Express',
        '• Python, Django, Supabase',
        '• RESTful APIs, GraphQL',
        '• Database Design'
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      skills: [
        '• Git, GitHub, GitLab',
        '• Docker, Kubernetes',
        '• CI/CD Pipelines',
        '• AWS, Azure, GCP'
      ]
    }
  ],

  // Projects Data
  projects: [
    {
      title: 'The Pinesva: Recruitment Agency / Employment Agency',
      description: 'A full-featured Job Recruitment Agency for Virtual Assistants, Admin Dashboard, Endorsement and Professional looking web desugb.',
      tags: ['React', 'Node.js', 'SupaBase'],
      demoUrl: 'https://www.thepinesva.com',
      githubUrl: '#',
      gradient: 'from-primary-400 to-primary-600',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      tagColor: 'bg-primary-500/20 text-primary-300 border-primary-500/30',
      linkColor: 'text-primary-400 hover:text-primary-300'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.',
      tags: ['Vue', 'Firebase', 'Tailwind'],
      demoUrl: '#',
      githubUrl: '#',
      gradient: 'from-purple-500 to-purple-700',
      icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
      tagColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      linkColor: 'text-purple-400 hover:text-purple-300'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with interactive charts, custom reports, and data export capabilities.',
      tags: ['Angular', 'D3.js', 'Express'],
      demoUrl: '#',
      githubUrl: '#',
      gradient: 'from-green-500 to-green-700',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      tagColor: 'bg-green-500/20 text-green-300 border-green-500/30',
      linkColor: 'text-green-400 hover:text-green-300'
    }
  ]
};
