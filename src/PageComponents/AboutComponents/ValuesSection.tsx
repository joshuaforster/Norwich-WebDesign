// ValuesSection.tsx
import React from 'react';

export default function ValuesSection() {
  const values = [
    {
      name: 'Custom Code',
      description: 'Every website is hand-coded from scratch to ensure it meets your specific needs and preferences. This approach allows us to create highly customised and unique designs.',
    },
    {
      name: 'Optimum Performance',
      description: 'We optimise every aspect of your website to ensure it loads quickly and runs smoothly, providing an excellent user experience across all devices.',
    },
    {
      name: 'SEO Friendly',
      description: 'Our websites are built with SEO best practices in mind, helping your business rank higher in search engine results and attract more organic traffic.',
    },
    {
      name: 'Mobile-First Design',
      description: 'We design for mobile devices first, ensuring that your website looks and works great on smartphones and tablets as well as on desktops.',
    },
    {
      name: 'Scalable Solutions',
      description: 'Our websites are built to grow with your business, offering the flexibility to add new features and pages as needed without compromising performance.',
    },
    {
      name: 'Unbeatable Support',
      description: 'When you need help, you’ll speak directly with the lead developer. We provide personalised support and quick response times to keep your site running smoothly.',
    },
  ];

  return (
    <div className="mx-auto mt-32 max-w-7xl pb-24 px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Values</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          We are driven by our core values, ensuring we provide the best service to our clients.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {values.map((value) => (
          <div key={value.name}>
            <dt className="font-semibold text-gray-900 dark:text-white">{value.name}</dt>
            <dd className="mt-1 text-gray-600 dark:text-gray-300">{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
