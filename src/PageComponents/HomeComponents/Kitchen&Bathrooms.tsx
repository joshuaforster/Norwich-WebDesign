import React from 'react';
import Button from '../../CustomComponents/buttons';

export default function KitchenBathroom() {
  const aboutData = [
    {
      id: 1,
      room: 'Bathroom',
      intro: [
        'At Sampson N Co, we believe a kitchen is more than just a space - it’s where memories are made, families come together, and culinary dreams come alive.',
        'Crafted with precision in Germany, each of our kitchens embodies a harmonious blend of cutting-edge design and everyday functionality.',
      ],
      standOut:
        'In our German kitchen furniture crafting, we utilise high-grade materials coupled with the foremost technology sourced from top brand manufacturers. This is achieved through marrying traditional handcrafted expertise with contemporary production techniques.',
      mainImage: '/images/Home/barmby_baths_rs_v1_ls.jpg',
      homeDesk:
        'Our team is dedicated to providing rigid kitchen solutions, each tailored with care to the distinct specifications of our customers. Relish in the quality of German manufacturing.',
      url: 'bathroom',
    },
    {
      id: 2,
      room: 'Kitchen',
      intro: [
        'At Sampson N Co, we believe a kitchen is more than just a space - it’s where memories are made, families come together, and culinary dreams come alive.',
        'Crafted with precision in Germany, each of our kitchens embodies a harmonious blend of cutting-edge design and everyday functionality.',
      ],
      standOut:
        'In our German kitchen furniture crafting, we utilise high-grade materials coupled with the foremost technology sourced from top brand manufacturers. This is achieved through marrying traditional handcrafted expertise with contemporary production techniques.',
      made:
        'In our German kitchen furniture crafting, we utilise high-grade materials coupled with the foremost technology sourced from top brand manufacturers. This is achieved through marrying traditional handcrafted expertise with contemporary production techniques.',
      mainImage: '/images/Home/BnwvOv2g.jpeg',
      homeDesk:
        'Experience the distinction of bathroom designs sourced from top UK brands, each tailored to your specific requirements.',
      url: 'kitchen',
    },
  ];

  return (
    <section className='my-10 max-w-screen-2xl mx-auto px-4 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10'>
      {aboutData.map((data) => (
        <div className='text-center p-4' key={data.id}>
          <h3 className='font-semibold text-xl mb-3 text-gray-800'>{data.room}</h3>
          <div className='w-full h-48 md:h-64 lg:h-96 bg-gray-200 overflow-hidden'>
            <img className='w-full h-full object-cover' src={data.mainImage} alt={`${data.room}`} />
          </div>
          <p className='mt-3 mb-4 text-md md:text-lg text-gray-600'>{data.homeDesk}</p>
          <Button className='mx-auto lg:w-auto lg:px-4 lg:py-2' variant='primary' to={`/${data.url}`}>
            Explore {data.room}s
          </Button>
        </div>
      ))}
    </section>
  );
}
