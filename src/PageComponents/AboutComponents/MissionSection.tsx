// MissionSection.tsx
import React from 'react';

export default function MissionSection() {
  const stats = [
    { label: 'Websites Delivered', value: '150+' },
    { label: 'Satisfied Clients', value: '100%' },
    { label: 'Years in Business', value: '5' },
  ];

  return (
    <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:mt-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Why don't we use Web Builders?</h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl leading-8 text-gray-800 dark:text-white">
              By coding the websites ourselves, we have full control of every aspect of your website. This means we can make sure they can outperfrom any site made with a web builder. 
            </p>
            <div className="text-xl mt-10 max-w-xl text-base leading-7 text-gray-800 dark:text-white">
              <p>
              When fixing websites, we often encounter the same recurring issues: plugin conflicts, the constant need for updates, and slow loading times. 
              </p>
              <p className="text-xl mt-10 text-gray-800 dark:text-white">
              With a site coded by us, these problems will be a thing of the past. Since we control every aspect of the code, you’ll never have to wake up to any unexpected surprises.
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
