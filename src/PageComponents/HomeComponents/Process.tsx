import React from 'react';

const features = [
  {
    name: 'Elite Web Solutions',
    description:
      'Start your journey with a custom 5-page website, crafted to perfection, for £400 per month with a 12-month minimum contract. For more extensive projects, we provide tailored pricing that aligns with the unique demands of your business.',
    imageSrc: '/images/bankCard.png',
  },  
  {
    name: 'Ownership and Flexibility',
    description:
      'You own your domain, content, and profiles. Cancel anytime without fees or hassle. Hosting fees are included in your monthly payment.',
    imageSrc: '/images/keys.png',
  },
  {
    name: 'Unlimited Edits',
    description:
      'Make any changes to your website at any time, and we will implement them promptly to ensure your site is always up-to-date.',
    imageSrc: '/images/pencil.png',
  },
  {
    name: 'Expert Design & Development',
    description:
      'Our service includes over 40 hours of dedicated design, development, and testing to ensure your website meets the highest standards.',
    imageSrc: '/images/stylus.png',
  },
  {
    name: 'Google Page Speed Optimization',
    description:
      'We aim for a perfect 100 on Google Page Speed scores, improving your site’s search engine ranking and overall performance.',
    imageSrc: '/images/magnifyingGlass.png',
  },
  {
    name: 'Google Analytics Integration',
    description:
      'We install Google Analytics for free to help you monitor your website traffic and gain insights into your audience.',
    imageSrc: '/images/google.png',
  },
];

export default function Process() {
  return (
    <div className="relative py-24 sm:py-32 min-h-screen">
      <div className="relative mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white dark:text-white sm:text-4xl">
            Our Web Design & Development Process
          </h2>
        </div>
        <div className="mx-auto max-w-5xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col sm:flex-row items-center sm:items-start">
                <div className="flex-none">
                  <div className="mb-4 sm:mb-0 sm:mr-4 h-20 w-20 bg-white dark:bg-gray-700 p-4 flex items-center justify-center rounded-lg">
                    <img src={feature.imageSrc} alt={feature.name} className="h-full w-full object-contain" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200">
                    {feature.name}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
