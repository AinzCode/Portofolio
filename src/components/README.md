# Components Directory

This directory contains all the reusable components for the portfolio website.

## Component Structure

Each component is now organized in its own folder with two files:
- **`main.ts`** - Contains the component logic and HTML generation functions
- **`styles.ts`** - Contains Tailwind CSS class definitions as exportable constants

This separation allows for:
- Better organization and maintainability
- Easy style updates without touching component logic
- Reusable style constants across the component
- Clear separation of concerns

## Available Components

### Navigation/
- `main.ts` - Creates the site navigation bar with mobile menu functionality
- `styles.ts` - Navigation styling classes (navbar, links, mobile menu)
- Features: Sticky navigation, mobile menu toggle, scroll effects

### Hero/
- `main.ts` - Landing section with animated name typing effect
- `styles.ts` - Hero section styling (gradient background, CTA buttons)
- Features: Typing animation, call-to-action buttons

### About/
- `main.ts` - About section with personal information
- `styles.ts` - About section styling (card layout, typography)
- Features: Styled card layout with multiple paragraphs

### Skills/
- `main.ts` - Technical skills showcase with data array
- `styles.ts` - Skills section styling (grid, cards, icons)
- Features: Grid layout with skill categories, hover effects

### Projects/
- `main.ts` - Portfolio projects display with data array
- `styles.ts` - Projects section styling (cards, tags, gradients)
- Features: Card-based layout, project tags, gradient headers

### Contact/
- `main.ts` - Contact form with validation and social links
- `styles.ts` - Contact section styling (form, inputs, social icons)
- Features: Form validation, submission handling, social media links

### Footer/
- `main.ts` - Page footer with copyright and credits
- `styles.ts` - Footer styling classes
- Features: Dynamic year, tech stack credits

## Usage

Components are imported and used in `src/main.ts`:

```typescript
import {
  createNavigation,
  createHero,
  createAbout,
  // ... other components
} from './components';

// Build the page
document.getElementById('app')!.innerHTML = `
  ${createNavigation()}
  ${createHero()}
  ${createAbout()}
  // ... other components
`;
```

## Modifying Components

### To modify component logic:
1. Edit the `main.ts` file in the component folder
2. Changes will hot-reload in development

### To modify component styles:
1. Edit the `styles.ts` file in the component folder
2. Update the class strings in the exported style objects
3. All styling uses Tailwind CSS utility classes

### Example:
```typescript
// In Navigation/styles.ts
export const navigationStyles = {
  nav: 'fixed top-0 w-full bg-gray-900/95 ...',
  logo: 'text-2xl font-bold text-primary-400 ...'
};

// In Navigation/main.ts
import { navigationStyles as styles } from './styles';

export function createNavigation(): string {
  return `<nav class="${styles.nav}">...`;
}
```

## Folder Structure

```
components/
├── index.ts          # Export all components
├── README.md         # This file
├── Navigation/
│   ├── main.ts       # Component logic
│   └── styles.ts     # Style classes
├── Hero/
│   ├── main.ts
│   └── styles.ts
├── About/
│   ├── main.ts
│   └── styles.ts
├── Skills/
│   ├── main.ts
│   └── styles.ts
├── Projects/
│   ├── main.ts
│   └── styles.ts
├── Contact/
│   ├── main.ts
│   └── styles.ts
└── Footer/
    ├── main.ts
    └── styles.ts
```

## Benefits of This Structure

1. **Separation of Concerns**: Logic and styles are separated
2. **Easier Maintenance**: Find and update styles quickly
3. **Reusability**: Export and reuse style constants
4. **Scalability**: Easy to add new components with the same pattern
5. **Type Safety**: Full TypeScript support for both logic and styles
