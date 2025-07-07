import React from 'react';

interface SectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, description, image, reverse }) => (
  <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center my-12`}>
    <img src={image} className="w-full md:w-1/2 rounded-xl shadow-lg" alt={title} />
    <div className="md:w-1/2 p-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-lg">{description}</p>
    </div>
  </div>
);

export default Section; 