import React from 'react';
import ImageGallery, { GalleryItem } from '../PageComponents/GalleryComponent/imagegallery';

export const hardcodedItems: GalleryItem[] = [
  { type: 'image', imageUrl: '/images/Home/-IhIoytA.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/-sIirgvA.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/2B_MeqLQ.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/2mWOU1zw.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/4LDwtCyA.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/4wt1U8Kw.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/9A1d_2wg.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/asselby_baths_rs_v1_ls.jpg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/barmby_baths_rs_v1_ls.jpg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/BdRJMMxQ.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/BNQYYTmA.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/BnwvOv2g.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/bpr107_bath_panels_v1_ls.jpg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/bpr113_bath_panels_v1_ls.jpg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/bsg007_baths_v1_ls.jpg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/dHGDEznA.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/GV4nDF7Q.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/Hlb109Jg.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/i6CXYwWA.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/jAZgENHA.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/JQELB7tw.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/jVeT7Fuw.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/l7DHzaiA.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/linton_baths_rs_v1_ls.jpg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/n9FTTB4w.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/nbb001_baths_v2_ls.jpg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/nbb002_baths_v2_ls.jpg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/nbb003_baths_cameo_v1_ls.jpg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/nbb003_baths_v1_ls.jpg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/nssq_baths_v3_ls1.jpg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/singleended_baths_rs_v1_ls.jpg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/TVYR5PDQ.jpeg', category: 'default' },
  { type: 'image', imageUrl: '/images/Home/Wm2AAIgw.jpeg', category: 'default' }
];


export default function Gallery() {
  return (
    <section className="bg-white dark:bg-dark-gray py-8">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="max-w-screen-lg mx-auto text-gray-800 sm:text-lg dark:text-white text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">Gallery</h2>
        </div>
        <ImageGallery items={hardcodedItems} />
      </div>
    </section>
  );
}
