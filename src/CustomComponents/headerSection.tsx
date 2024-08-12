import React, { useEffect, useState } from 'react';
import CloudAnimation from './Animations/CloudAnimations';
import StarsAnimation from './Animations/StarsAnimation'; // Import StarsAnimation
import { useTheme } from '../CustomComponents/darkmode'; // Import useTheme for dark mode

interface HeaderSectionProps {
  image: string;
  title: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ image, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme(); // Access the current theme

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // slight delay for smoother animation
  }, []);

  return (
    <div className="relative w-full h-96 transition-all duration-500">
      {/* Background Gradient based on theme */}
      <div
        className={`absolute inset-0 z-0 transition-all duration-500 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-[#02051E] to-[#274662]'
            : 'bg-gradient-to-b from-[#0760C3] to-[#69CDFF]'
        }`}
      ></div>
      
      {/* Conditional Animation */}
      {theme === 'dark' ? <StarsAnimation /> : <CloudAnimation />}
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-96 object-cover z-10 relative transition-opacity duration-500"
      />
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1
          className={`text-4xl font-bold text-white mb-8 transition-transform ${
            isVisible ? 'translate-x-0' : 'translate-x-[100vw]'
          }`}
          style={{
            transitionDuration: '3s',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeaderSection;
