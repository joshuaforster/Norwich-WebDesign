import React from 'react';
import CloudAnimation from '../../CustomComponents/Animations/CloudAnimations';
import StarsAnimation from '../../CustomComponents/Animations/StarsAnimation';
import { useTheme } from '../../CustomComponents/darkmode';

export default function CTA1() {
  const { theme } = useTheme(); // Use the theme context to get the current theme

  return (
    <div className={`relative isolate overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-[#02051E] to-[#274662]' : 'bg-gradient-to-b from-[#0760C3] to-[#69CDFF]'}`}>
      {/* Conditionally render based on the current theme */}
      {theme === 'dark' ? <StarsAnimation /> : <CloudAnimation />}

      {/* Background Image pinned to the bottom */}
      <div className="absolute inset-0 bottom-0 w-full h-full bg-contain bg-no-repeat bg-bottom z-[-1]" style={{ backgroundImage: "url('/images/cowTower2.png')" }}></div>

      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Build Your Online Presence.
            <br />
            Get a Custom Website Today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
            Transform your business with a professional, custom-designed website. Tailored to meet your needs and help you stand out online.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="google.com"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
            </a>
            <a href="google.com" className="text-sm font-semibold leading-6 text-white">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 z-0 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      >
        <circle r={512} cx={512} cy={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor={theme === 'dark' ? '#02051E' : '#0760C3'} />
            <stop offset={1} stopColor={theme === 'dark' ? '#274662' : '#69CDFF'} />
          </radialGradient>
        </defs>
      </svg>

      {/* Bus image with continuous animation */}
      <div className="absolute bottom-0 left-0 w-64 animate-busAnimation z-0 pointer-events-none">
        <img src="/images/bus.png" alt="Bus" className="w-full" />
      </div>
    </div>
  ); 
}
