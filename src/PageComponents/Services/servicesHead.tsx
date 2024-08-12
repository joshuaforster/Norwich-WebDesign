import React, { useState } from 'react';
import CloudAnimation from '../../CustomComponents/Animations/CloudAnimations';
import StarsAnimation from '../../CustomComponents/Animations/StarsAnimation'; // Import StarsAnimation
import { useTheme } from '../../CustomComponents/darkmode'; // Import useTheme for dark mode

export default function ServiceHead() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme } = useTheme(); // Access the current theme
  
  const features = [
    {
      name: 'Web Design & Development Done Differently',
      description:
        "What makes us unique in the development world is that we don't use WordPress, frameworks, or page builders. We meticulously write the code line by line. This gives us much more control over the design, and the website performs lightning fast because there's no bloated or messy code that slows it down. Websites built by hand will out-perform most WordPress sites and drag and drop page builders which could cost thousands of dollars. When it comes to the web, the faster and more organized websites win.",
      image: '/images/MouseClear.png',
    },
    {
      name: `Search Engine Optimization For ${new Date().getFullYear()}`,
      description:
        'If someone tells you they can get you to the front page of Google in 3 months - RUN! Unless your website was featured by The New York Times it could take years to rank in the top of the search results. We offer a number of the latest search engine optimization techniques: - Keyword-Centered Content & Blogs - Mobile-First-Optimized for the Best Experience - Clean & Organized Code Structure For Web Crawlers - Fully Responsive For Mobile, Tablet, & Desktop',
      image: '/images/magnifyingGlass.png',
    },
    {
      name: 'Logos, Graphic Design, & Branding',
      description:
        "We also offer logo and graphic design services via our own in-house graphic designer. If you have an existing logo that needs a touch-up or need a completely new one we can help build your business's brand. - Logos Starting at £350 (Rates may increase based on complexity, number of hours, and number of revisions) - Social Media Graphics (Make a post that stands out with its own custom graphics. Give us a call for plans and rates.)",
      image: '/images/Macbook.png',
    },
  ];
  
  return (
    <div className="relative overflow-hidden pt-24 sm:pt-32">
      {/* Conditionally render CloudAnimation or StarsAnimation based on the theme */}
      {theme === 'dark' ? <StarsAnimation /> : <CloudAnimation />}
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-0">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">Our Services</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Choose Us?</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We provide a range of services to help your business succeed online. Learn more about what makes us unique.
              </p>
              <dl className="hidden md:block mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature, index) => (
                  <div
                    key={feature.name}
                    className={`relative cursor-pointer transition-transform duration-300 ${
                      selectedIndex === index
                        ? 'bg-white/20 scale-105 py-3'
                        : 'hover:bg-white/10 hover:scale-105 py-3'
                    } rounded-lg p-3`}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <div className="flex items-center">
                      <div className="p-2 flex-shrink-0">
                        <img
                          src={feature.image}
                          alt={feature.name}
                          className="h-10 w-10"
                        />
                      </div>
                      <dt className="inline font-semibold text-white ml-4">
                        {feature.name}
                      </dt>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="flex justify-center items-center w-full mt-6 lg:mt-0">
            <div className="relative mx-auto border-gray-800 bg-white border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] p-6 md:p-8">
                <div className="text-center p-4 rounded-xl h-full overflow-y-auto">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 lg:hidden">
                    {features[selectedIndex].name}
                  </h3>
                  <p className="text-sm md:text-base leading-6 md:leading-7 text-gray-900 space-y-4">
                    {features[selectedIndex].description.split(' - ').map((line, index) => (
                      <span key={index} className="block mb-2">{line}</span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between lg:hidden mt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex-shrink-0 transition-transform duration-300 hover:scale-105 p-4 ${
                  selectedIndex === index
                    ? 'bg-white/20'
                    : 'hover:bg-white/10'
                } rounded-lg cursor-pointer w-1/3`}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={feature.image}
                  alt={feature.name}
                  className={`h-20 w-20 sm:h-24 sm:w-24 mx-auto ${
                    selectedIndex === index ? 'scale-110' : ''
                  }`}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
