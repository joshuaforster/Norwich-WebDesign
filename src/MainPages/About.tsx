// About.tsx
import React from 'react';
import HeroSection from '../PageComponents/AboutComponents/HeroSection';
import MissionSection from '../PageComponents/AboutComponents/MissionSection';
import ImageSection from '../PageComponents/AboutComponents/ImageSection';
import ValuesSection from '../PageComponents/AboutComponents/ValuesSection';

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <main className="isolate">
        <HeroSection />
        <MissionSection />
        <ImageSection />
        <ValuesSection />
      </main> 
    </div>
  );
}
