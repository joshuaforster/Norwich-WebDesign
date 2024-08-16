import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CloudAnimation from '../../CustomComponents/Animations/CloudAnimations';
import StarsAnimation from '../../CustomComponents/Animations/StarsAnimation'; 
import { useTheme } from '../../CustomComponents/darkmode'; 
import { servicesData } from '../../Data/serviceData';

export default function ServiceHead() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme } = useTheme();

  const features = servicesData.map(service => ({
    name: service.name,
    description: service.description,
    image: service.image,
    link: `/services/${service.id}` // Use the ID to link to the detailed view
  }));

  return (
    <div className="relative overflow-hidden pt-24 sm:pt-32">
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
              {/* Headline Boxes: Visible on Large Devices */}
              <dl className="hidden lg:block mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
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
            <div className={`relative mx-auto ${theme === 'dark' ? 'border-gray-400' : 'border-gray-800'} ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-[14px] rounded-[2.5rem] h-[700px] max-w-[341px] md:h-[682px] md:max-w-[512px]`}>
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-[2rem] overflow-hidden h-[572px] md:h-[654px] p-6 md:p-8">
                <div className="text-center p-4 rounded-xl h-full">
                  <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {features[selectedIndex].name}
                  </h3>
                  <p className={`text-sm md:text-base leading-6 md:leading-7 space-y-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {features[selectedIndex].description.split(' - ').map((line, index) => (
                      <span key={index} className="block mb-2">{line}</span>
                    ))}
                  </p>
                  <Link 
                    to={features[selectedIndex].link} 
                    className="mt-4 inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                  >
                    See more
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile view with feature boxes */}
          <div className="flex flex-wrap justify-between lg:hidden mt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex-shrink-0 transition-transform duration-300 hover:scale-105 p-4 ${
                  selectedIndex === index
                    ? 'bg-white'
                    : 'hover:bg-white/50'
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
