import React from 'react';

interface BannerProps {
  title: string;
  description: string;
  image?: string;
  breadcrumb?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ title, description, image, breadcrumb }) => {
  const bgImage = image || process.env.PUBLIC_URL + '/banner.png';
  return (
    <div className="relative h-72 flex flex-col justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 px-6 md:px-12 lg:px-24">
        {breadcrumb && (
          <div className="mb-10 mt-12 md:mt-6 text-sm flex items-center space-x-2">
            {breadcrumb}
          </div>
        )}
        <h1 className="text-4xl font-bold mb-2 text-white">{title}</h1>
        <p className="text-lg text-white">{description}</p>
      </div>
    </div>
  );
};

export default Banner; 