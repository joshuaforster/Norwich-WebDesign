import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '../../CustomComponents/darkmode';
import { portfolioData } from '../../Data/PortfolioData';

const PrimaryFeatures: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme } = useTheme(); // Use the theme context to get the current theme

  return (
    <div className="relative pb-28 pt-20 sm:py-32">
      <div className="max-w-2xl mx-auto text-center xl:max-w-none">
        <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
          Our latest work...
        </h2>
        <p className="mt-6 text-lg tracking-tight text-white">
          Click through to see the work we could do for you...
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0 lg:pl-24">
        {/* Titles Section */}
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 md:space-x-0 md:space-y-0 lg:items-start lg:flex-col lg:col-span-5">
          {portfolioData.map((feature, featureIndex) => (
            <div
              key={feature.title}
              className={clsx(
                'group relative rounded-lg px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                selectedIndex === featureIndex
                  ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                  : 'hover:bg-white/10 lg:hover:bg-white/5'
              )}
              onClick={() => setSelectedIndex(featureIndex)}
            >
              <h3>
                <button
                  className={clsx(
                    'font-display text-lg focus:outline-none',
                    selectedIndex === featureIndex
                      ? 'text-blue-600 lg:text-white'
                      : 'text-blue-100 hover:text-white lg:text-white'
                  )}
                >
                  <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                  {feature.title}
                </button>
              </h3>
              {/* Description for large screens */}
              <p
                className={clsx(
                  'mt-2 hidden text-md lg:block',
                  selectedIndex === featureIndex
                    ? 'text-white'
                    : 'text-white group-hover:text-white'
                )}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image and Description Section */}
        <div className="lg:col-span-7">
          {portfolioData.map((feature, featureIndex) => (
            <div
              key={feature.title}
              className={clsx(
                selectedIndex === featureIndex ? 'block' : 'hidden'
              )}
            >
              <div className="relative sm:px-6 lg:hidden">
                <p className="relative mx-auto max-w-2xl text-base text-white text-center">
                  {feature.description}
                </p>
              </div>
              <div className={`mt-10 w-full overflow-hidden rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-slate-50'} shadow-xl shadow-blue-900/20 lg:mt-0`}>
                <img
                  className="w-full h-full object-cover"
                  src={feature.featureImage}  // Use the feature image here
                  alt={feature.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrimaryFeatures;