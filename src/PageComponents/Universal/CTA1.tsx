import React, { ReactNode } from 'react';
import CloudAnimation from '../../CustomComponents/Animations/CloudAnimations';
import StarsAnimation from '../../CustomComponents/Animations/StarsAnimation';
import { useTheme } from '../../CustomComponents/darkmode';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryActionText?: string;
  primaryActionHref?: string;
  secondaryActionText?: string;
  secondaryActionHref?: string;
  bgImage: string;
  showBus?: boolean; // Add a prop to control bus visibility
  children?: ReactNode;
}

export default function CTA({
  title,
  subtitle,
  primaryActionText,
  primaryActionHref,
  secondaryActionText,
  secondaryActionHref,
  bgImage,
  showBus = true, // Default value is true, so the bus shows by default
  children,
}: CTAProps) {
  const { theme } = useTheme(); // Use the theme context to get the current theme

  return (
    <div className={`relative isolate overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-[#02051E] to-[#274662]' : 'bg-gradient-to-b from-[#0760C3] to-[#69CDFF]'}`}>
      {theme === 'dark' ? <StarsAnimation /> : <CloudAnimation />}

      <div
        className="absolute inset-0 bottom-0 w-full h-full bg-contain bg-no-repeat bg-bottom"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {children}

      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              {subtitle}
            </p>
          )}
          {(primaryActionText || secondaryActionText) && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {primaryActionText && primaryActionHref && (
                <a
                  href={primaryActionHref}
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {primaryActionText}
                </a>
              )}
              {secondaryActionText && secondaryActionHref && (
                <a href={secondaryActionHref} className="text-sm font-semibold leading-6 text-white">
                  {secondaryActionText} 
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {showBus && (
        <div className="absolute bottom-0 left-0 w-32 sm:w-4 md:w-10 lg:w-60 animate-busAnimation z-0 pointer-events-none">
          <img src="/images/bus.png" alt="Bus" className="w-full" />
        </div>
      )}
    </div>
  );
}
