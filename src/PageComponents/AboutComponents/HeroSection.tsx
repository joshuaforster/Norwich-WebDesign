import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative isolate">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-36 sm:pt-60 lg:px-8 pb-12 lg:pt-32">
          <div className="mx-auto max-w-2xl flex flex-col items-center text-center">
            <div className="w-full max-w-xl xl:max-w-2xl">
              <h1 className="text-4xl pt-16 font-display tracking-tight text-white sm:text-6xl">
                About Norwich Web Design
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                My name is Josh, the founder and lead developer of Norwich Web Design. My journey into web development began as I sought a career that would allow me to work from home while being a stay-at-home dad. Over two years, I taught myself how to code websites from scratch, driven by a passion to help small businesses thrive online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
