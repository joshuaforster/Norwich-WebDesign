import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative isolate">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-36 sm:pt-60 lg:px-8 pb-12 lg:pt-32">
          <div className="mx-auto max-w-2xl flex flex-col items-center text-center">
            <div className="cloud-shape p-4 mt-4 rounded-lg bg-white text-gray-900 dark:bg-gray-900 dark:text-white shadow-lg flex flex-col items-center justify-center">
              <h1 className="text-4xl pt-16 font-display tracking-tight text-gray-900 dark:text-white">
                About Norwich Web Design
              </h1>
              <p className="mt-6 text-lg leading-8 lg:pb-20 text-gray-700 dark:text-gray-300">
                Both Luke and Josh hold Masters Degree's in Communication Design, from the Norwich University of Arts. Both attained their degrees with different skillsets. Josh specialises in frontend web development, coding websites from scratch. Luke on the other hand specialises in Graphic Design, Logo Design, Photo Editing, and Animations. Together they combine their skillsets to help you and your business have the website it deserves to bring more customers to your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}