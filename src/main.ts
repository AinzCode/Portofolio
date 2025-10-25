import './styles.css';

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button') as HTMLButtonElement;
const mobileMenu = document.getElementById('mobile-menu') as HTMLDivElement;
const menuOpen = document.getElementById('menu-open') as unknown as SVGPathElement;
const menuClose = document.getElementById('menu-close') as unknown as SVGPathElement;

mobileMenuButton?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('hidden');
  menuOpen?.classList.toggle('hidden');
  menuClose?.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
mobileMenuLinks?.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu?.classList.add('hidden');
    menuOpen?.classList.remove('hidden');
    menuClose?.classList.add('hidden');
  });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    if (targetId && targetId !== '#') {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Navbar background change on scroll
const navbar = document.getElementById('navbar') as HTMLElement;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    navbar?.classList.add('shadow-md');
  } else {
    navbar?.classList.remove('shadow-md');
  }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const htmlSection = section as HTMLElement;
    const sectionHeight = htmlSection.offsetHeight;
    const sectionTop = htmlSection.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('text-primary-400');
    } else {
      document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('text-primary-400');
    }
  });
}

window.addEventListener('scroll', highlightNavigation);

// Contact form handling
const contactForm = document.getElementById('contact-form') as HTMLFormElement;
const formMessage = document.getElementById('form-message') as HTMLDivElement;

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };

  // Simulate form submission (replace with actual API call)
  try {
    // Simulating API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success message
    formMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
    formMessage.className = 'mt-4 text-center text-green-600 font-medium';
    formMessage.classList.remove('hidden');
    
    // Reset form
    contactForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.classList.add('hidden');
    }, 5000);
    
    console.log('Form submitted:', data);
  } catch (error) {
    // Show error message
    formMessage.textContent = 'Oops! Something went wrong. Please try again.';
    formMessage.className = 'mt-4 text-center text-red-600 font-medium';
    formMessage.classList.remove('hidden');
    
    console.error('Form submission error:', error);
  }
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-slide-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and cards
const elementsToAnimate = document.querySelectorAll('section > div, .bg-white, .bg-gray-50');
elementsToAnimate.forEach(el => {
  if (el.parentElement?.tagName === 'SECTION') {
    observer.observe(el);
  }
});

// Add typing effect to hero title (optional enhancement)
const heroTitle = document.querySelector('h1 span') as HTMLElement;
if (heroTitle) {
  const text = heroTitle.textContent || '';
  heroTitle.textContent = '';
  let i = 0;
  
  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  
  // Start typing effect after a short delay
  setTimeout(typeWriter, 500);
}

console.log('Portfolio website initialized successfully!');
