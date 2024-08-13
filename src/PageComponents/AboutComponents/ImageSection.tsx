import React from 'react';

export default function ImageSection() {
  return (
    <div className="relative mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      {/* Darkened Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4A90E2] to-[#1C75BC] dark:from-[#02051E] dark:to-[#274662] xl:rounded-3xl"></div>
      <img
        alt="What We Use"
        src="images/whatweuse.png"
        className="relative aspect-[5/2] w-full object-cover xl:rounded-3xl"
      />
    </div>
  );
}
