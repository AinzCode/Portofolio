# Project Structure

```
Portofolio/
├── public/                    # Static assets (copied by Vite)
│   ├── profile.jpg           # Profile picture
│   └── profile-placeholder.svg
├── src/
│   ├── components/           # UI components
│   │   ├── Hero/            # Hero section with profile image
│   │   ├── MainContent/     # About, Skills, Education, Projects, Contact
│   │   ├── TechMarquee/     # Scrolling tech stack
│   │   ├── Navigation/      # Navbar with scroll-to navigation
│   │   ├── Footer/          # Footer section
│   │   └── ScrollProgress/  # Scroll progress indicator
│   ├── lib/                 # Utility functions
│   └── styles.css           # Global styles with Tailwind
├── index.html               # Entry point
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
├── vite.config.js           # (uses defaults)
└── vercel.json              # Vercel deployment config
```

## Key Features

- **Build Tool**: Vite + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Intersection Observer + Lenis smooth scroll
- **Dark Mode**: Implemented with localStorage
- **Responsive**: Mobile-first design with Tailwind breakpoints
