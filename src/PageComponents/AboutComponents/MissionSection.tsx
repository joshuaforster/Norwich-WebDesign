// MissionSection.tsx
import React from 'react';

export default function MissionSection() {
  const stats = [
    { label: 'Websites Delivered', value: '150+' },
    { label: 'Satisfied Clients', value: '100%' },
    { label: 'Years in Business', value: '5' },
  ];

  return (
    <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Mission</h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl leading-8 text-gray-600 dark:text-gray-300">
              We aim to provide small businesses with the same level of quality and attention as big corporations. By offering tailored, affordable web solutions, we help our clients establish a strong online presence without breaking the bank.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 dark:text-gray-400">
              <p>
                Many small businesses struggle to afford high-quality websites or end up with outdated, poorly designed ones. We bridge this gap by providing custom, hand-coded websites that are both aesthetically pleasing and functionally robust.
              </p>
              <p className="mt-10">
                We focus on quality over quantity, ensuring each project meets our high standards and the unique needs of our clients. Our collaborative process involves working closely with clients to create a website they love and that truly represents their business.
              </p>
            </div>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base leading-7 text-gray-600 dark:text-gray-300">{stat.label}</dt>
                  <dd className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
