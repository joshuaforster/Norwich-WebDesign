import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../CustomComponents/darkmode'; // Import the dark mode hook

const logos = [
  "images/logos/[removal.ai]_cf4611e9-5a39-49b2-9fef-23de702a2fe5-logogrey-66a388691126f 1.png",
  "images/logos/image 23.png",  // Light mode version
  "images/logos/image 26.png",
  "images/logos/image 24.png",
  "images/logos/image 22.png"
];

const darkModeLogos = [
 "images/lambertDark.png",
  "images/AD Forster Logo Dark.png",  // Dark mode version of the logo at index 1
  "images/sampsonDark.png",
  "images/NuaDark.png",
  "images/logos/image 22.png"
];

export default function Logo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme(); // Get the current theme

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.9) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 transition-colors duration-500">
      <div
        ref={sectionRef}
        className={`py-12 mx-auto max-w-screen-xl px-6 lg:px-8 transition-opacity duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-3 gap-8 text-gray-500 dark:text-gray-400 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 mt-8">
          {(theme === 'dark' ? darkModeLogos : logos).map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <picture>
                <img
                  className="h-14 w-full max-w-xs object-contain"
                  src={logo}
                  loading="lazy"
                  alt={`Logo ${index + 1}`}
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
