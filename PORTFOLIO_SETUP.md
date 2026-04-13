# Portfolio Setup Guide

## 🎯 Quick Start - Image Setup

**IMPORTANT**: Save your profile image to complete the portfolio:

1. Download the profile image you provided
2. Save it as: `Public/profile.jpg`
3. Your portfolio is ready!

The image will now display in your Hero section with professional styling and hover effects.

---

## ✨ Portfolio Features

### ✅ Implemented
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints
- **Dark/Light Mode** - Toggle with sun/moon icons, saved to localStorage
- **Scroll Animations** - Fade-up, fade-down, zoom-in, fade-left, fade-right effects
- **Smooth Scrolling** - Powered by Lenis library
- **Hero Section** - 2-column layout (photo + text)
- **Education Timeline** - Skills and education history
- **Projects Timeline** - Your project showcase
- **Contact Form** - With validation
- **Bible Verses** - Random verse rotation in hero
- **Custom Scrollbar** - Red theme with gradient

### 🎨 Visual Effects
- Hover effects on buttons and cards
- Timeline dots with glow on hover
- Image scale-up on hover
- Border color transitions
- Shadow effects with red accent

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero/           # Hero section with profile image
│   ├── Navigation/     # Nav bar with mobile menu
│   ├── About/          # About section
│   ├── Education/      # Timeline with skills & education
│   ├── Projects/       # Project timeline
│   ├── Contact/        # Contact form
│   ├── Footer/         # Footer
│   └── ScrollProgress/ # Progress bar
├── utils/
│   ├── darkMode.ts     # Dark/Light toggle
│   ├── scrollAnimations.ts  # Scroll reveal effects
│   └── ...
└── styles.css          # Global styles + animations
```

---

## 🚀 Running the Project

```bash
npm install        # Install dependencies
npm run dev        # Start dev server
npm run build      # Build for production
```

---

## 🎨 Customization

### Change Accent Color
Edit `src/styles.css` and search for `#dc2626` (red) to your preferred color.

### Add Your Information
- Update hero name in `src/components/Hero/main.ts`
- Update bio sections in `src/components/About/main.ts`
- Add projects in `src/components/Projects/main.ts`
- Add education in `src/components/Education/main.ts`

### Modify Animation Timing
In `src/styles.css`, find `[data-aos]` and adjust `transition-duration`.

---

## 📝 Bible Verse Rotation

The hero section rotates through inspirational Bible verses. They change every 30-60 minutes.
Edit `src/components/Hero/main.ts` to customize verses.

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 641px - 1024px
- **Desktop**: > 1024px

---

## ✨ Next Steps (Optional)

1. **Add More Projects** - Edit `src/components/Projects/main.ts`
2. **Connect Contact Form** - Currently shows alert, can integrate email service
3. **Add Blog Section** - Create new component for blog posts
4. **SEO Optimization** - Add meta tags and structured data
5. **Analytics** - Integrate Google Analytics

---

## 🔗 Social Links

Update social links in `src/components/Contact/main.ts` with your actual URLs.

---

All set! Your portfolio is now responsive, animated, and ready to impress! 🎉
