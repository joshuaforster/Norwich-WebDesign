import React, { useRef, useState, useEffect } from 'react';

interface HeadProps {
  heading: string;
  images: string[];
  paragraphs: string[];
}

const Head: React.FC<HeadProps> = ({ heading, images, paragraphs }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="bg-gray-900 py-12">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <div className="text-base leading-7 text-white lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {heading}
              </h1>
              <div className="max-w-xl">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="mt-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden lg:h-full lg:pl-4 lg:sticky lg:top-24 lg:flex lg:items-stretch">
            {images.map((image, index) => (
              <img
                key={index}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                src={image}
                alt={`Slide ${index + 1}`}
                loading={index === 0 ? 'eager' : 'lazy'} // Load the first image eagerly
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
