import React from 'react';
import KitchenBathroomHeader from '../CustomComponents/KitchenBathroomHeader';
import Head from '../PageComponents/KitchenBathroomComponent/Head';
import { kitchenData } from '../Data/kitchenBathroomData';
import KitchenMade from '../PageComponents/KitchenComponents/KitchenMade';
import { kitchenTiers } from '../Data/kitchenBathroomData';
import PricingComponent from '../CustomComponents/PricingTable';

const images = [
  '/images/Home/2B_MeqLQ.jpeg',
  '/images/Home/2mWOU1zw.jpeg',
  '/images/Home/4LDwtCyA.jpeg',
  '/images/Home/4wt1U8Kw.jpeg',
];

export default function Kitchen() {
  return (
    <div>
      <KitchenBathroomHeader
        images={images}
        title="Beautiful Kitchens"
        subtitle="Designed and Installed by Experts"
        height="60vh" // Optional: can be customized
      />
    <Head
      heading={kitchenData.heading}
      images={kitchenData.images}
      paragraphs={kitchenData.paragraphs}
    />
    <KitchenMade/>
    <PricingComponent
      title="Kitchen Pricing"
      subtitle="Pricing plans for all kitchen sizes"
      tiers={kitchenTiers}
      extraInfo="Explore our pricing plans for small, medium, and large kitchens."
    />
    </div>
  );
}
