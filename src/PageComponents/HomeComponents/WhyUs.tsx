import React from 'react';

interface Feature {
  name: string;
  description: string;
  href: string;
  imageSrc: string;
}

const features: Feature[] = [
  {
    name: 'Mobile-First Design',
    description:
      'We prioritise building your site for mobile devices first, ensuring optimal performance and user experience on smartphones and tablets.',
    href: '#',
    imageSrc: '/images/iPhone.png',
  },
  {
    name: 'Fully Responsive',
    description:
      'Your website will be fully responsive, adapting seamlessly to any screen size, from mobile phones to large desktop monitors.',
    href: '#',
    imageSrc: '/images/Macbook.png',
  },
  {
    name: 'SEO Optimisation',
    description:
      'With 60% of internet traffic coming from mobile devices, we optimise your website for search engines to improve visibility and attract more clients.',
    href: '#',
    imageSrc: '/images/magnifyingGlass.png',
  },
];

export default function WhyUs() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">What We Do</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Custom Web Solutions for Tradespeople
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We specialise in custom web design and development for tradespeople in Norwich and beyond. Each website is hand-coded to ensure top performance, helping you attract more clients and grow your business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 md:max-w-none">
          <dl className="flex flex-wrap justify-center items-center gap-x-8 gap-y-16 md:grid md:grid-cols-3 md:max-w-none">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-center text-center rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-md dark:bg-gray-800 w-full sm:w-auto md:w-72 lg:w-80 h-80"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <img src={feature.imageSrc} alt={feature.name} className="h-20 w-20 mb-4 mx-auto" />
                  {feature.name}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p>{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      {/* Uncomment and replace the src attribute with your image path */}
      {/* <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          alt="Example of our custom websites"
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div> */}
    </div>
  );
}
