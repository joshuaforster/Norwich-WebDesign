const features = [
  {
    name: 'Professional Email Setup',
    description:
      'We create a custom email address that matches your domain, providing a professional touch to your communications and enhancing your brand credibility.',
    imageSrc: '/images/bankcard.png',
  },
  {
    name: 'Google Business Profile',
    description:
      'We set up and optimize your Google Business Profile, helping your business stand out in local searches and on Google Maps, making it easier for customers to find you.',
      imageSrc: '/images/bankcard.png',
  },
  {
    name: 'Customer Support System',
    description:
      'We implement a customer support system that allows you to manage inquiries and support tickets efficiently, ensuring that your clients receive timely assistance.',
      imageSrc: '/images/bankcard.png',
  },
  {
    name: 'Security & Backup Solutions',
    description:
      'We provide robust security measures and automated backups to protect your website from threats and ensure that your data is safe and recoverable at all times.',
      imageSrc: '/images/bankcard.png',
  },
];


export default function ServiceBottom() {
  return (
    <div className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-8">
            Stay on top of customer support
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:gap-y-16 lg:grid-cols-2">
            <dl className="col-span-2 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-start">
                  <div className="mb-6 flex items-center justify-center">
                    <img
                      src={feature.imageSrc}
                      alt={feature.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    />
                  </div>
                  <div className="ml-6 flex-1">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-1 text-base leading-7 text-gray-900">
                      {feature.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}