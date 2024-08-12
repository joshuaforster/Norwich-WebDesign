import React from 'react';

interface ServiceSection1Props {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const ServiceSection1: React.FC<ServiceSection1Props> = ({ title, description, imageUrl, altText }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-display text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mb-4">
            {description}
          </p>
        </div>
        <div className="mt-8">
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

export default ServiceSection1;
