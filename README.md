# Portfolio Website

A modern, responsive portfolio website built with Tailwind CSS and TypeScript.

## Features

- 🎨 Modern and clean design with Tailwind CSS
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🔧 TypeScript for type safety
- ✨ Smooth animations and transitions
- 📧 Contact form with validation
- 🎯 Navigation highlighting based on scroll position
- 🍔 Mobile-friendly navigation menu

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🚀 Deploy to Vercel

### Option 1: Using Vercel CLI (Recommended for Development)

1. Install Vercel CLI globally (if not installed):
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Run development server with Vercel:
```bash
vercel dev
```

4. Deploy to production:
```bash
vercel --prod
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Vite and configure everything
6. Click "Deploy"

Your site will be live at: `https://your-project-name.vercel.app`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

Edit `index.html` to update:
- Your name
- Job title
- About section content
- Projects
- Social media links

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Modify Styles

Additional styles can be added in `src/styles.css`

### Add Functionality

TypeScript code is in `src/main.ts` - add your custom JavaScript functionality here.

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── tsconfig.json       # TypeScript configuration
└── src/
    ├── main.ts         # Main TypeScript file
    └── styles.css      # Custom styles and Tailwind directives
```

## Technologies Used

- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [PostCSS](https://postcss.org/) - CSS processor

## License

MIT License - feel free to use this template for your own portfolio!