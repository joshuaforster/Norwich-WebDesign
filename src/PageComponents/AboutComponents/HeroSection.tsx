// HeroSection.tsx
import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative isolate -z-10">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-display tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                About Norwich Web Design
              </h1>
              <p className="relative mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:max-w-md lg:max-w-none">
                My name is Josh, the founder and lead developer of Norwich Web Design. My journey into web development began as I sought a career that would allow me to work from home while being a stay-at-home dad. Over two years, I taught myself how to code websites from scratch, driven by a passion to help small businesses thrive online.
              </p>
            </div>
            {/* Add your image section here */}
          </div>
        </div>
      </div>
    </div>
  );
}
