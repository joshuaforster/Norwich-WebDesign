import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface KitchenBathroomHeaderProps {
  images: string[];
  title: string;
  subtitle: string;
  height?: string;
}

const KitchenBathroomHeader: React.FC<KitchenBathroomHeaderProps> = ({
  images,
  title,
  subtitle,
  height = '60vh',
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setInitialLoad(false); // Disable the initial load flag after the first interval
    }, 4000); // Change every 4 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: subtitleRef, inView: subtitleInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    // Preload the LCP image
    const linkWebP = document.createElement('link');
    linkWebP.rel = 'preload';
    linkWebP.href = images[0];
    linkWebP.as = 'image';
    linkWebP.type = 'image/webp';
    document.head.appendChild(linkWebP);

    return () => {
      document.head.removeChild(linkWebP);
    };
  }, [images]);

  return (
    <div className="relative isolate overflow-hidden" style={{ height }}>
      <div className="absolute inset-0 -z-10 w-full h-full">
        {images.map((image, index) => (
          <picture key={index} className="absolute inset-0 w-full h-full">
            <source srcSet={image} type="image/webp" />
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: index === currentImageIndex ? 1 : 0,
                transition: 'opacity 2s ease-in-out, transform 4s ease-in-out',
                transform: index === currentImageIndex || (index === 0 && initialLoad) ? 'scale(1.1)' : 'scale(1)',
              }}
              className="absolute inset-0 w-full h-full"
              loading={index === 0 ? 'eager' : 'lazy'} // Load the first image eagerly
            />
          </picture>
        ))}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="w-full px-4 lg:px-6 max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full text-center">
        <h1
          ref={headerRef}
          className={`text-4xl font-bold text-white ${
            headerInView ? 'animate-slideInRight' : 'opacity-0'
          }`}
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Adjust the shadow to your preference
            lineHeight: '1.5', // Set the line height to 1.5 times the font size
          }}
        >
          {title}
        </h1>
        <p
          ref={subtitleRef}
          className={`mt-4 text-xl text-white ${
            subtitleInView ? 'animate-slideInLeft' : 'opacity-0'
          }`}
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Adjust the shadow to your preference
            lineHeight: '1.5', // Set the line height to 1.5 times the font size
          }}
        >
          {subtitle}
        </p>
      </div>

      <style>
        {`
          @keyframes slideInRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slideInRight {
            animation: slideInRight 2s ease-in-out forwards;
          }

          .animate-slideInLeft {
            animation: slideInLeft 2s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default KitchenBathroomHeader;
