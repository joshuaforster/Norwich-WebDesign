import React from 'react';

interface Feature {
  number: number
  name: string
  description: string
  imageSrc: string
}

const features: Feature[] = [
  {
    number: 1,
    name: 'Initial Consultation',
    description:
      'We start with an in-depth consultation to understand your business needs, goals, and target audience. This helps us tailor the website to your exact specifications.',
    imageSrc: '/images/bankCard.png',
  },
  {
    number: 2,
    name: 'Planning and Strategy',
    description:
      'Next, we create a detailed plan and strategy for your website, including layout design, content structure, and feature prioritization, ensuring everything aligns with your business objectives.',
    imageSrc: '/images/keys.png',
  },
  {
    number: 3,
    name: 'Design and Development',
    description:
      'Our expert team designs and develops your website, focusing on aesthetics, user experience, and functionality. We dedicate over 40 hours to ensure the highest quality.',
    imageSrc: '/images/pencil.png',
  },
  {
    number: 4,
    name: 'Content Integration',
    description:
      'We integrate your content, including text, images, and media, ensuring it is well-organized, engaging, and aligned with your brand message.',
    imageSrc: '/images/stylus.png',
  },
  {
    number: 5,
    name: 'Testing and Optimization',
    description:
      'Before launching, we rigorously test your website for functionality, responsiveness, and performance. We aim for a perfect 100 on Google Page Speed scores to optimize your site’s performance.',
    imageSrc: '/images/magnifyingGlass.png',
  },
  {
    number: 6,
    name: 'Launch and Support',
    description:
      'Finally, we launch your website and provide ongoing support. You can request unlimited edits, and we include Google Analytics integration to help you monitor your site’s performance.',
    imageSrc: '/images/google.png',
  },
]
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
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                   {feature.number}. {feature.name}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-gray-600 dark:text-white">
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
