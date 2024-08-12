import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Essential',
    id: 'tier-essential',
    href: '#',
    priceMonthly: '£400',
    priceAnnually: '£4,000',
    description: 'Perfect for sole traders or small teams.',
    features: [
      'Up to 5 custom pages',
      'Portfolio & gallery setup',
      'Basic local SEO',
      'Responsive design',
      'CMS integration',
      'Standard support',
    ],
    mostPopular: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '#',
    priceMonthly: '£800',
    priceAnnually: '£8,000',
    description: 'For growing trades businesses needing more features.',
    features: [
      'Up to 10 custom pages',
      'Advanced local SEO',
      'Custom project showcase',
      'Online booking & contact forms',
      'Priority support',
      'CMS & Blog integration',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '£1,200',
    priceAnnually: '£12,000',
    description: 'Comprehensive solutions for established companies.',
    features: [
      'Unlimited pages',
      'Premium SEO & Analytics',
      'E-commerce & Quote Request integration',
      'Advanced project portfolio',
      'Dedicated support',
      'Custom design & features',
    ],
    mostPopular: false,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Tailored Plans for Trades & Construction
          </p>
          <div className="mt-8 flex justify-center">
            <button
              className={classNames(
                'px-4 py-2 text-sm font-medium',
                billingCycle === 'monthly' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 dark:text-gray-200 text-gray-900'
              )}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly Billing
            </button>
            <button
              className={classNames(
                'px-4 py-2 text-sm font-medium ml-4',
                billingCycle === 'annually' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 dark:text-gray-200 text-gray-900'
              )}
              onClick={() => setBillingCycle('annually')}
            >
              Annual Billing
            </button>
          </div>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'lg:z-10 lg:rounded-b-none bg-gray-800 text-white'
                  : 'lg:mt-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200',
                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl p-8 ring-1 ring-gray-200 dark:ring-gray-700 xl:p-10',
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-white' : 'text-gray-900 dark:text-white',
                      'text-lg font-semibold leading-8',
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className={classNames(
                  tier.mostPopular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400',
                  'mt-4 text-sm leading-6'
                )}>{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className={classNames(
                    tier.mostPopular ? 'text-white' : 'text-gray-900 dark:text-white',
                    'text-4xl font-bold tracking-tight'
                  )}>{billingCycle === 'monthly' ? tier.priceMonthly : tier.priceAnnually}</span>
                  <span className={classNames(
                    tier.mostPopular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400',
                    'text-sm font-semibold leading-6'
                  )}>{billingCycle === 'monthly' ? '/month' : '/year'}</span>
                </p>
                <ul  className={classNames(
                  tier.mostPopular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400',
                  'mt-8 space-y-3 text-sm leading-6'
                )}>
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className={classNames(
                        tier.mostPopular ? 'text-white' : 'text-indigo-600 dark:text-indigo-400',
                        'h-6 w-5 flex-none'
                      )} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-200 dark:ring-indigo-700 hover:ring-indigo-300 dark:hover:ring-indigo-500',
                  'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                )}
              >
                Buy plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
