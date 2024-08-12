import React from 'react';

export default function CloudAnimation() {
  return (
    <div className="absolute inset-x-0 top-0 flex justify-between items-start z-0 animate-clouds pt-10 max-w-full overflow-hidden">
      <img
        src="/images/cloud1.png"
        alt="Cloud 1"
        className="w-[10%] max-w-[120px] ml-[-2.5%]"
      />
      <img
        src="/images/cloud2.png"
        alt="Cloud 2"
        className="w-[12%] max-w-[140px] ml-[-2.5%]"
      />
      <img
        src="/images/cloud3.png"
        alt="Cloud 3"
        className="w-[15%] max-w-[160px] ml-[-2.5%]"
      />
      <img
        src="/images/cloud4.png"
        alt="Cloud 4"
        className="w-[8%] max-w-[100px] ml-[-2.5%]"
      />
    </div>
  );
}
