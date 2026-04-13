// Hero Component - Main Logic
import { heroStyles as styles } from './styles';

type BibleVerse = {
  text: string;
  reference: string;
};

const bibleVerses: BibleVerse[] = [
  {
    text: 'Trust in the Lord with all your heart and lean not on your own understanding.',
    reference: 'Proverbs 3:5'
  },
  {
    text: 'I can do all this through Him who gives me strength.',
    reference: 'Philippians 4:13'
  },
  {
    text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you.',
    reference: 'Jeremiah 29:11'
  },
  {
    text: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.',
    reference: 'Joshua 1:9'
  },
  {
    text: 'The Lord is my shepherd, I lack nothing.',
    reference: 'Psalm 23:1'
  },
  {
    text: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.',
    reference: 'Colossians 3:23'
  }
];

const MIN_VERSE_INTERVAL_MS = 30 * 60 * 1000;
const MAX_VERSE_INTERVAL_MS = 60 * 60 * 1000;

function getRandomVerseIndex(excludeIndex?: number): number {
  if (bibleVerses.length <= 1) {
    return 0;
  }

  let randomIndex = Math.floor(Math.random() * bibleVerses.length);

  while (randomIndex === excludeIndex) {
    randomIndex = Math.floor(Math.random() * bibleVerses.length);
  }

  return randomIndex;
}

function getRandomVerseInterval(): number {
  const intervalRange = MAX_VERSE_INTERVAL_MS - MIN_VERSE_INTERVAL_MS;
  return MIN_VERSE_INTERVAL_MS + Math.floor(Math.random() * (intervalRange + 1));
}

function setVerse(verseTextElement: HTMLElement, verseReferenceElement: HTMLElement, verseIndex: number): void {
  const verse = bibleVerses[verseIndex];
  verseTextElement.textContent = `"${verse.text}"`;
  verseReferenceElement.textContent = verse.reference;
}

function startVerseRotation(verseTextElement: HTMLElement, verseReferenceElement: HTMLElement): void {
  let currentVerseIndex = getRandomVerseIndex();
  setVerse(verseTextElement, verseReferenceElement, currentVerseIndex);

  const scheduleNextVerse = (): void => {
    const delay = getRandomVerseInterval();

    setTimeout(() => {
      currentVerseIndex = getRandomVerseIndex(currentVerseIndex);
      setVerse(verseTextElement, verseReferenceElement, currentVerseIndex);
      scheduleNextVerse();
    }, delay);
  };

  scheduleNextVerse();
}

export function createHero(): string {
  return `
    <section id="home" class="${styles.section}">
        <div class="${styles.backgroundImage}"></div>
        <div class="${styles.overlay}"></div>
        <div class="${styles.container}">
            <div class="${styles.contentWrapper}">
                <div class="${styles.imageColumn}" data-aos="fade-right" data-aos-delay="100">
                    <img src="/public/profile.jpg" alt="Profile" class="${styles.profileImage}" />
                </div>
                <div class="${styles.textColumn}" data-aos="fade-left" data-aos-delay="200">
                    <h1 class="${styles.name}" data-aos="fade-up" data-aos-delay="300">
                        I'm <span class="${styles.nameHighlight}" id="hero-name">Patrick</span>
                    </h1>
                    <p class="${styles.jobTitle}" data-aos="fade-up" data-aos-delay="400">
                        Full Stack Developer & Creative Problem Solver
                    </p>
                    <p class="${styles.description}" data-aos="fade-up" data-aos-delay="500">
                        <span id="hero-verse-text"></span>
                        <span id="hero-verse-reference" class="${styles.bibleVerseReference}"></span>
                    </p>
                    <div class="${styles.ctaContainer}" data-aos="zoom-in" data-aos-delay="600">
                        <a href="#contact" class="${styles.primaryButton}">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
}

export function initializeHero(): void {
  // Add typing effect to name
  const heroNameElement = document.getElementById('hero-name') as HTMLSpanElement;
  
  if (heroNameElement) {
    const name = 'Patrick';
    heroNameElement.textContent = '';
    let index = 0;

    function typeName(): void {
      if (index < name.length) {
        heroNameElement.textContent += name.charAt(index);
        index++;
        setTimeout(typeName, 150);
      }
    }

    // Start typing after a brief delay
    setTimeout(() => typeName(), 800);
  }

  const heroVerseTextElement = document.getElementById('hero-verse-text') as HTMLSpanElement;
  const heroVerseReferenceElement = document.getElementById('hero-verse-reference') as HTMLSpanElement;

  if (heroVerseTextElement && heroVerseReferenceElement) {
    startVerseRotation(heroVerseTextElement, heroVerseReferenceElement);
  }
  
  // Add parallax effect to background
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bgImage = document.querySelector(`.${styles.backgroundImage}`) as HTMLElement;
    
    if (bgImage) {
      bgImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
}
