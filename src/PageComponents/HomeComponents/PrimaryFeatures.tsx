import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import CloudAnimation from '../../CustomComponents/Animations/CloudAnimations';
import StarsAnimation from '../../CustomComponents/Animations/StarsAnimation';
import { useTheme } from '../../CustomComponents/darkmode';

const PrimaryFeatures: React.FC = () => {
  const [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme } = useTheme(); // Use the theme context to get the current theme

  const features = [
    {
      title: 'Lambert & Wright',
      description:
        "Lambert & Wright specialise in property renovations in Leicester. Their expertise lies in transforming homes with exceptional craftsmanship, delivering tailored renovations that meet the highest standards.",
      image: 'images/lambertportfolio.png',
    },
    {
      title: 'Sampson N CO',
      description:
        "Based in Norwich, Sampson N CO offer bespoke kitchen and bathroom solutions. They provide high-quality designs and installations, ensuring each space is both functional and beautifully crafted.",
      image: 'images/Sampson N Co.png',
    },
    {
      title: 'AD Forster',
      description:
        "AD Forster, operating in Norwich, are known for their reliable and professional window cleaning services. They help keep homes and businesses looking their best with meticulous attention to detail.",
      image: 'images/adforster page.png',
    },
  ];

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    const onMediaQueryChange = (event: MediaQueryListEvent) => {
      setTabOrientation(event.matches ? 'vertical' : 'horizontal');
    };

    // Initial check
    onMediaQueryChange({ matches: lgMediaQuery.matches } as MediaQueryListEvent);

    // Listen for changes
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className={clsx(
        'relative overflow-hidden pb-28 pt-20 sm:py-32',
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#02051E] to-[#274662]'
          : 'bg-gradient-to-r from-blue-500 to-blue-800'
      )}
    >
      {/* Conditionally render based on the current theme */}
      {theme === 'dark' ? <StarsAnimation /> : <CloudAnimation />}
      
      <div className="relative pt-20">
        <div className="max-w-2xl mx-auto text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Here is an array of our latest projects
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Click through to see the work we could do for you...
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0 lg:pl-24">
          <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
            <div className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
              {features.map((feature, featureIndex) => (
                <div
                  key={feature.title}
                  className={clsx(
                    'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
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
                  <p
                    className={clsx(
                      'mt-2 hidden text-sm lg:block',
                      selectedIndex === featureIndex
                        ? 'text-white'
                        : 'text-blue-100 group-hover:text-white'
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            {features.map((feature, featureIndex) => (
              <div
                key={feature.title}
                className={clsx(
                  selectedIndex === featureIndex ? 'block' : 'hidden',
                  tabOrientation // Use `tabOrientation` here to ensure it's utilized
                )}
              >
                <div className="relative sm:px-6 lg:hidden">
                  <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                  <p className="relative mx-auto max-w-2xl text-base text-white text-center">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                  <img
                    className="w-full"
                    src={feature.image}
                    alt={feature.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrimaryFeatures;
