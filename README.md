# Portfolio Website

A modern, responsive, and interactive portfolio website built with HTML, CSS, and JavaScript.

## Features

### 🎨 Design
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices (mobile, tablet, desktop)
- **Custom Color Scheme**: Beautiful gradient colors with CSS variables for easy customization

### 📱 Sections
- **Hero Section**: Eye-catching landing page with animated text and call-to-action buttons
- **About Me**: Personal introduction with stats counter
- **Skills**: Interactive skill cards with animated progress bars
- **Projects**: Portfolio showcase with hover effects and project tags
- **Contact**: Functional contact form with validation and social media links

### ⚡ Interactivity
- **Smooth Scrolling**: Seamless navigation between sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Scroll Animations**: Elements animate into view as you scroll
- **Form Validation**: Real-time validation for contact form
- **Hover Effects**: Interactive hover effects on cards and buttons
- **Active Navigation**: Current section highlighted in navigation

## Technologies Used

- **HTML5**: Semantic markup for better SEO and accessibility
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (Vanilla)**: No frameworks - pure JavaScript for interactions
- **Font Awesome**: Icons for enhanced visual appeal

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.) for customization

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AinzCode/Portofolio.git
cd Portofolio
```

2. Open `index.html` in your web browser:
   - Double-click the `index.html` file, or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

3. Visit `http://localhost:8000` in your browser

## Customization

### Personal Information
Edit the `index.html` file to update:
- Your name in the hero section
- About me content
- Skills and proficiency levels
- Project details
- Contact information

### Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --dark-color: #1e293b;
    --light-color: #f8fafc;
    /* ... other colors */
}
```

### Content
- Update text content directly in `index.html`
- Replace placeholder icons with your own images
- Modify project cards with your actual projects
- Update social media links

## Features in Detail

### Responsive Breakpoints
- **Desktop**: > 768px
- **Tablet**: 480px - 768px
- **Mobile**: < 480px

### Animations
- Fade-in animations on page load
- Scroll-triggered animations for sections
- Smooth hover transitions
- Skill bar progress animations
- Form validation feedback

### Accessibility
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Reduced motion support for users with motion sensitivity

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Project Structure

```
Portofolio/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Future Enhancements

Potential features to add:
- Blog section
- Dark mode toggle
- Multi-language support
- Backend integration for contact form
- CMS integration
- Additional animations
- Performance optimizations

## Contributing

Feel free to fork this project and customize it for your own use. If you have suggestions for improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available for personal and commercial use.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/AinzCode/Portofolio](https://github.com/AinzCode/Portofolio)

## Acknowledgments

- Font Awesome for icons
- Inspiration from modern portfolio designs
- Community feedback and contributions