import React from 'react';
import { Helmet } from 'react-helmet';
import ServiceBottom from '../PageComponents/Services/ServiceBottom';
import ServiceHead from '../PageComponents/Services/servicesHead';
import { useTheme } from '../CustomComponents/darkmode'; // Import useTheme for dark mode
import CTA from '../PageComponents/Universal/CTA1';

export default function ServicesHome() {
  const { theme } = useTheme(); // Access the current theme

  return (
    <div
      className={`transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#02051E] to-[#274662]' // Dark mode gradient
          : 'bg-gradient-to-b from-[#0760C3] to-[#69CDFF]' // Light mode gradient
      }`}
    >
      <Helmet>
        <title>Our Services | AD Forster Window Cleaning</title>
        <meta
          name="description"
          content="Discover the range of services offered by AD Forster Window Cleaning. From window cleaning to gutter cleaning, our experienced team is here to help you with all your cleaning needs."
        />
      </Helmet>
      <CTA
         bgImage='images/cathedralcastle.png'
         showBus={false}
      >
        <ServiceHead />
        <ServiceBottom />
      </CTA>
    </div>
  );
}
