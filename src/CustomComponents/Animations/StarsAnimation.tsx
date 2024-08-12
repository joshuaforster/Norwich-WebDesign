import React from 'react';

const StarsAnimation: React.FC = () => {
  return (
    <div className="absolute inset-x-0 top-0 flex justify-between items-start z-0 animate-stars pt-10 max-w-full overflow-hidden">
      <img
        src="/images/stars.png"
        alt="Stars"
        className="w-full h-full object-cover animate-slightMove"
      />
      <div className="absolute inset-0 w-full h-full animate-flicker" />
    </div>
  );
};

export default StarsAnimation;
