import React from 'react';

interface ServiceSection2Props {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const ServiceSection2: React.FC<ServiceSection2Props> = ({ title, description, imageUrl, altText }) => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 lg:flex lg:flex-row-reverse">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 lg:w-1/2 lg:pl-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mb-4">
            {description}
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
         <img
            className="w-full max-h-80 object-contain rounded-lg"
            src={imageUrl}
            alt={altText}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection2;
