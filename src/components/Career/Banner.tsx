import React from 'react';

interface BannerProps {
  title: string;
  description: string;
  image?: string;
  breadcrumb?: React.ReactNode;
  tabs?: Array<{ key: string; label: string }>;
  selectedTab?: string;
  onTabChange?: (key: string) => void;
}

const Banner: React.FC<BannerProps> = ({ title, description, image, breadcrumb, tabs, selectedTab, onTabChange }) => {
  const bgImage = image || process.env.PUBLIC_URL + '/banner.png';
  return (
    <div className="relative min-h-[400px] flex flex-col justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black/60 z-0" />
      {/* Breadcrumb'u banner'ın en üstüne taşı */}
      {breadcrumb && (
        <div className="relative z-20 px-6 md:px-12 lg:px-24 mt-2 mb-2 text-sm flex items-center space-x-2">
          {breadcrumb}
        </div>
      )}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 pt-12 pb-0">
        <h1 className="text-4xl font-bold mb-2 text-white">{title}</h1>
        <p className="text-lg text-white mb-6">{description}</p>
      </div>
      {tabs && tabs.length > 0 && (
        <div className="absolute bottom-0 left-0 w-full z-20 px-6 md:px-12 lg:px-24">
          <div className="flex gap-8 border-b border-gray-700">
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`py-4 px-2 text-lg font-semibold border-b-2 transition-colors duration-200 ${selectedTab === tab.key ? 'border-primary-500 text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
                onClick={() => onTabChange && onTabChange(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner; 