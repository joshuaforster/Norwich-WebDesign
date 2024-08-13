import React from 'react';

const StarsAnimation: React.FC = () => {
  return (
    <div className="absolute inset-x-0 top-0 z-0 pt-24 max-w-full overflow-visible">
      {/* Star 1 */}
      <img
        src="/images/star1.png"
        alt="Star 1"
        className="absolute w-8 h-8 animate-slowBounceLeft"
        style={{ top: '40%', left: '5%' }}
      />
      {/* Star 2 */}
      <img
        src="/images/star2.png"
        alt="Star 2"
        className="absolute w-10 h-10 animate-slowBounceRight"
        style={{ top: '45%', left: '30%' }}
      />
      {/* Star 3 */}
      <img
        src="/images/star3.png"
        alt="Star 3"
        className="absolute w-6 h-6 animate-slowBounceLeft"
        style={{ top: '35%', right: '20%' }}
      />
      {/* Star 4 */}
      <img
        src="/images/star4.png"
        alt="Star 4"
        className="absolute w-9 h-9 animate-slowBounceRight"
        style={{ top: '38%', right: '40%' }}
      />
      {/* Star 5 */}
      <img
        src="/images/star5.png"
        alt="Star 5"
        className="absolute w-7 h-7 animate-slowBounceLeft"
        style={{ top: '42%', left: '50%' }}
      />
      {/* Star 6 */}
      <img
        src="/images/star6.png"
        alt="Star 6"
        className="absolute w-12 h-12 animate-slowBounceRight"
        style={{ top: '40%', right: '10%' }}
      />
    </div>
  );
};

export default StarsAnimation;
