import React from 'react';
import HeroSection from '../PageComponents/AboutComponents/HeroSection';
import MissionSection from '../PageComponents/AboutComponents/MissionSection';
import ImageSection from '../PageComponents/AboutComponents/ImageSection';
import ValuesSection from '../PageComponents/AboutComponents/ValuesSection';
import { useTheme } from '../CustomComponents/darkmode';
import clsx from 'clsx';
import CTA from '../PageComponents/Universal/CTA1';

export default function About() {
  const { theme } = useTheme(); // Use the theme context to get the current theme
  return (
    <div>
      <CTA
        bgImage="/images/castlebg.png"
      >
        <HeroSection />
      </CTA>

      <div className={clsx(
        'relative overflow-hidden pb-28 pt-20 sm:py-32',
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#02051E] to-[#274662]'
          : 'bg-white'
      )}>
        <MissionSection />
        <ImageSection />
      </div>

      <ValuesSection />
    </div>
  );
}
