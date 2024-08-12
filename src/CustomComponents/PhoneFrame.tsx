// components/PhoneFrame.tsx
import React from 'react';

interface PhoneFrameProps {
  className?: string;
  children: React.ReactNode;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ className, children }) => {
  return (
    <div className={`relative mx-auto w-full max-w-[366px] ${className}`}>
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-200 rounded-xl p-4">
        {children}
      </div>
      <div className="relative w-full">
        <img
          src="/path-to-your-mockup-image.png" // Update this path to your actual mockup image
          alt="Phone Mockup"
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default PhoneFrame;
