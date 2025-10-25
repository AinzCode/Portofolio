# Project Structure Guide

## 📁 Directory Overview

```
Portofolio/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navigation/    # Top navbar
│   │   │   ├── main.ts    # Component logic
│   │   │   └── styles.ts  # Tailwind classes
│   │   ├── Hero/          # Landing section
│   │   │   ├── main.ts
│   │   │   └── styles.ts
│   │   ├── About/         # About section
│   │   │   ├── main.ts
│   │   │   └── styles.ts
│   │   ├── Skills/        # Skills showcase
│   │   │   ├── main.ts
│   │   │   └── styles.ts
│   │   ├── Projects/      # Project portfolio
│   │   │   ├── main.ts
│   │   │   └── styles.ts
│   │   ├── Contact/       # Contact form
│   │   │   ├── main.ts
│   │   │   └── styles.ts
│   │   ├── Footer/        # Page footer
│   │   │   ├── main.ts
│   │   │   └── styles.ts
│   │   ├── index.ts       # Component exports
│   │   └── README.md      # Component documentation
│   │
│   ├── utils/             # Utility functions
│   │   ├── smoothScroll.ts      # Smooth scrolling
│   │   ├── navbarScroll.ts      # Navbar scroll effect
│   │   ├── navHighlight.ts      # Active nav highlighting
│   │   ├── scrollAnimations.ts  # Scroll animations
│   │   └── index.ts             # Utility exports
│   │
│   ├── types/             # TypeScript type definitions
│   │
│   ├── config.ts          # ⭐ Site configuration (EDIT THIS!)
│   ├── main.ts            # Main application entry
│   └── styles.css         # Global styles & Tailwind
│
├── index.html             # HTML entry point
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── postcss.config.js      # PostCSS configuration
├── vercel.json            # Vercel deployment config
└── README.md              # Project documentation
```

## 🎯 Quick Start - How to Customize

### 1. Edit Personal Information
**File**: `src/config.ts`

```typescript
export const config = {
  personal: {
    name: 'John Doe',              // Your name
    title: 'Frontend Developer',   // Your job title
    subtitle: 'UI/UX Enthusiast',  // Your tagline
  },
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername'
  }
};
```

### 2. Update Skills
**File**: `src/components/Skills.ts`

```typescript
export const skillsData: Skill[] = [
  {
    title: 'Your Skill Category',
    icon: 'SVG_PATH',
    skills: [
      '• Your Skill 1',
      '• Your Skill 2'
    ]
  }
];
```

### 3. Add/Edit Projects
**File**: `src/components/Projects.ts`

```typescript
export const projectsData: Project[] = [
  {
    title: 'Your Project',
    description: 'Project description',
    tags: ['React', 'TypeScript'],
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com/user/repo'
  }
];
```

### 4. Modify Styles
**File**: `tailwind.config.js`

Change primary colors:
```javascript
colors: {
  primary: {
    400: '#YOUR_COLOR',
    500: '#YOUR_COLOR',
    600: '#YOUR_COLOR',
  }
}
```

## 🔧 Common Modifications

### Add a New Section
1. Create component file: `src/components/NewSection.ts`
2. Export in: `src/components/index.ts`
3. Import and use in: `src/main.ts`

### Change Color Theme
Edit `tailwind.config.js`:
- `primary`: Main accent color
- Background colors are in the components (gray-900, gray-800)

### Modify Navigation Links
Edit `src/components/Navigation.ts`:
```typescript
<a href="#new-section">New Link</a>
```

### Update About Section
Edit `src/components/About.ts` or add content to `src/config.ts`

### Change Animations
Edit `tailwind.config.js` → `theme.extend.animation`

## 🐛 Fixing Issues

### Component Not Showing
1. Check if exported in `src/components/index.ts`
2. Check if imported in `src/main.ts`
3. Check if added to `buildPage()` function

### Styling Not Working
1. Verify Tailwind classes are correct
2. Check `tailwind.config.js` content paths
3. Restart dev server: `npm run dev`

### TypeScript Errors
1. Check imports are correct
2. Verify types in `src/components/*.ts`
3. Run: `npm run build` to see all errors

### Form Not Submitting
Edit `src/components/Contact.ts` → `initializeContact()`
- Replace simulation with real API call
- Add email service (EmailJS, SendGrid, etc.)

## 📝 Development Workflow

### Local Development
```bash
npm run dev          # Start dev server
```

### Build for Production
```bash
npm run build        # Build static files
npm run preview      # Preview production build
```

### Deploy to Vercel
```bash
vercel dev          # Local Vercel environment
vercel --prod       # Deploy to production
```

## 🎨 Component Architecture

### How It Works
1. **main.ts** imports all components
2. **buildPage()** assembles HTML from components
3. **initializeApp()** sets up all functionality
4. Each component is self-contained and modular

### Benefits
- ✅ Easy to find and fix issues
- ✅ Reusable components
- ✅ Clean code organization
- ✅ Simple to add new sections
- ✅ TypeScript type safety

## 📚 File Responsibilities

| File | Purpose | Edit Frequency |
|------|---------|---------------|
| `config.ts` | Site content & data | Very Often |
| `components/*.ts` | UI structure | Sometimes |
| `utils/*.ts` | Functionality | Rarely |
| `styles.css` | Global styles | Sometimes |
| `tailwind.config.js` | Theme colors | Sometimes |
| `main.ts` | App initialization | Rarely |

## 🚀 Next Steps

1. Edit `src/config.ts` with your information
2. Update projects in `src/components/Projects.ts`
3. Customize colors in `tailwind.config.js`
4. Add your social links in `src/config.ts`
5. Deploy to Vercel: `vercel --prod`

## 📞 Need Help?

- Check component README: `src/components/README.md`
- Check main README: `README.md`
- Review Tailwind docs: https://tailwindcss.com
- Review TypeScript docs: https://www.typescriptlang.org
