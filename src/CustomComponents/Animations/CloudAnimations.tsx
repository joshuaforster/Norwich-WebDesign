import React from 'react';

export default function CloudAnimation() {
  return (
    <div className="absolute inset-x-0 top-0 z-0 flex justify-between items-start max-w-full py-12 overflow-visible">
      <img
        src="/images/cloud1.png"
        alt="Cloud 1"
        className="cloud w-[8%] max-w-[80px]"
      />
      <img
        src="/images/cloud2.png"
        alt="Cloud 2"
        className="cloud w-[10%] max-w-[100px]"
      />
      <img
        src="/images/cloud3.png"
        alt="Cloud 3"
        className="cloud w-[12%] max-w-[120px]"
      />
      <img
        src="/images/cloud4.png"
        alt="Cloud 4"
        className="cloud w-[7%] max-w-[70px]"
      />
    </div>
  );
}
