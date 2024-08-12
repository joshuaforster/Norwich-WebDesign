import React from 'react';

export default function CTA2() {
  return (
    <div className="bg-white dark:bg-gray-900 pt-16">
      <div className="mx-auto max-w-7xl sm:px-6 pb-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#0860C3] to-[#69CDFF] dark:from-[#02051E] dark:to-[#274662] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#2463EB" />
                <stop offset={1} stopColor="#2463EB" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center z-1000 lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Elevate Your Online Presence
              <br />
              With Our Expert Web Design Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-white dark:text-white">
              Whether you’re looking to build a new website or refresh your brand, we have the expertise to help you stand out. Start your journey with us today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/contact"
                className="rounded-md bg-white dark:bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </a>
              <a href="/services" className="text-sm font-semibold leading-6 text-white">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="Portfolio screenshot"
              src="images/lambertportfolio.png"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
