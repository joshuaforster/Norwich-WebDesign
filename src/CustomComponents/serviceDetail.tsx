import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { servicesData } from '../Data/serviceData';
import { useTheme } from '../CustomComponents/darkmode'; 

export default function Example() {
  const { id } = useParams(); 
  const serviceDetails = servicesData.find((srv) => srv.id.toString() === id); 
  const { theme } = useTheme(); 

  if (!serviceDetails) {
    return <div>Service not found</div>; 
  }

  return (
    <div className={`relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className={`absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 ${theme === 'dark' ? 'stroke-gray-700' : 'stroke-gray-200'} [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]`}
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              {/* Back to All Services Link */}
              <div className="mb-6">
                <Link 
                  to="/services" 
                  className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${theme === 'dark' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}
                >
                  &larr; Back to All Services
                </Link>
              </div>
              <p className="text-base font-semibold leading-7 text-indigo-600">{serviceDetails.detail.title}</p>
              <h1 className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Service Details</h1>
              <p className={`mt-6 text-xl leading-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {serviceDetails.description}
              </p>
            </div>
          </div>
        </div>

        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt={serviceDetails.detail.title}
            src={serviceDetails.detail.images[0]} 
            className={`w-[48rem] max-w-none rounded-xl shadow-xl ring-1 sm:w-[57rem] ${theme === 'dark' ? 'bg-gray-800 ring-gray-700' : 'bg-gray-900 ring-gray-400/10'}`}
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className={`max-w-xl text-base leading-7 lg:max-w-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                {serviceDetails.detail.content}
              </p>
              <ul className={`mt-8 space-y-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Push to deploy.</strong> Deploy your project seamlessly with our top-notch services.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>SSL certificates.</strong> Ensure the security of your site with SSL certificates.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Database backups.</strong> Regular database backups to safeguard your data.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Our comprehensive services ensure that you have everything you need to succeed online. From design to deployment, we've got you covered.
              </p>
              <h2 className={`mt-16 text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>No server? No problem.</h2>
              
              {/* Additional detailed content */}
              <div className="mt-8">
                <h3 className={`text-xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  In-Depth Information
                </h3>
                <p className={`mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {serviceDetails.detail.contentForDetails}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
