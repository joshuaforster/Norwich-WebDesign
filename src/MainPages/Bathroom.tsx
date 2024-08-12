import React from 'react';
import KitchenBathroomHeader from '../CustomComponents/KitchenBathroomHeader';
import Head from '../PageComponents/KitchenBathroomComponent/Head';
import { bathroomData } from '../Data/kitchenBathroomData';
import { bathroomTiers } from '../Data/kitchenBathroomData';
import PricingComponent from '../CustomComponents/PricingTable';

const images = [
    '/images/Home/nbb003_baths_v1_ls.jpg',
    '/images/Home/nssq_baths_v3_ls1.jpg',
    '/images/Home/singleended_baths_rs_v1_ls.jpg',
    '/images/Home/TVYR5PDQ.jpeg',
    '/images/Home/Wm2AAIgw.jpeg'
];

export default function Bathroom() {
  return (
    <div>
      <KitchenBathroomHeader
        images={images}
        title="Beautiful Bathrooms"
        subtitle="Designed and Installed by Experts"
        height="60vh" // Optional: can be customized
      />
    <Head
      heading={bathroomData.heading}
      images={bathroomData.images}
      paragraphs={bathroomData.paragraphs}
    />
    <PricingComponent
      title="Bathroom Pricing"
      subtitle="Pricing plans for all bathroom sizes"
      tiers={bathroomTiers}
      extraInfo="Explore our pricing plans for small, medium, and large bathrooms."
    />
    </div>
  );
}
