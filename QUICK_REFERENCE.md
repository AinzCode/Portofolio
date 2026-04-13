# Quick Reference Card

## 🎯 ONE THING TO DO
Save the portrait image you showed me as: **`Public/profile.jpg`**

That's all! Your portfolio is complete after this.

---

## 📂 Key Files to Know

| File | Purpose |
|------|---------|
| `src/components/Hero/main.ts` | Hero section layout |
| `src/components/Hero/styles.ts` | Hero styling |
| `src/styles.css` | Global styles + animations |
| `src/utils/darkMode.ts` | Dark/Light toggle |
| `src/utils/scrollAnimations.ts` | Scroll effects |
| `Public/profile.jpg` | **YOUR IMAGE** (needs saving) |

---

## 🎨 Customize These

**Change hero name:**
`src/components/Hero/main.ts` line 93

**Change job title:**
`src/components/Hero/main.ts` line 96

**Change description/bio:**
`src/components/Hero/main.ts` line 98-101

**Add projects:**
`src/components/Projects/main.ts` (add new timeline items)

**Change accent color:**
`src/styles.css` (replace `#dc2626` with your color)

---

## 🚀 Commands

```bash
npm install     # First time setup
npm run dev     # Development server
npm run build   # Production build
```

---

## ✨ Features Working

- ✅ Responsive 2-column hero layout
- ✅ Scroll animations (fade-up, fade-left, fade-right)
- ✅ Hover effects on all interactive elements
- ✅ Dark/Light mode toggle
- ✅ Smooth scrolling
- ✅ Education & Projects timelines
- ✅ Contact form
- ✅ Bible verse rotation
- ✅ Mobile menu
- ✅ Scroll progress bar

---

## 🖼️ Hero Section

**Desktop Layout:**
```
[IMAGE] | Name
[PHOTO] | Job Title
[HOVER] | Description
        | [Button]
```

**Mobile Layout:**
```
[IMAGE]
Name
Job Title
Description
[Button]
```

---

## 📱 Responsive Breakpoints

| Device | Width | Columns |
|--------|-------|---------|
| Mobile | < 640px | 1 |
| Tablet | 641-1024px | Auto |
| Desktop | > 1024px | 2 |

---

## 💭 Social Icons Locations

Contact form: `src/components/Contact/main.ts`

Update GitHub, LinkedIn, Twitter links there.

---

## 🔧 Animations

All animations are 0.8 seconds with ease timing.

**Available animations:**
- `data-aos="fade-up"` (slide up from below)
- `data-aos="fade-down"` (slide down from above)
- `data-aos="fade-left"` (slide from left)
- `data-aos="fade-right"` (slide from right)
- `data-aos="zoom-in"` (scale up from smaller)

---

**Status: 99% Complete ✅**
**Action Needed: Save image 🖼️**

That's it! 🎉
