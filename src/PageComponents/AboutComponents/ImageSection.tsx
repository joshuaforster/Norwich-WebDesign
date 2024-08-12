// ImageSection.tsx
import React from 'react';

export default function ImageSection() {
  return (
    <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      <img
        alt="What We Use"
        src="images/whatweuse.png"
        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
      />
    </div>
  );
}
