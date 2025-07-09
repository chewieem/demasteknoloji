import React from 'react';

interface HeroImageTextSectionProps {
  title: string;
  image?: string; // opsiyonel yaptım
  paragraphs: string[];
  buttonText?: string;
}

const HeroImageTextSection: React.FC<HeroImageTextSectionProps> = ({ title, image, paragraphs, buttonText }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-16 leading-snug">
          {title}
        </h1>
        <div className={`flex flex-col md:flex-row items-center gap-12${!image ? ' justify-center' : ''}`}>
          {image && (
            <div className="flex-1 w-full">
              <img
                src={image}
                alt="Hero"
                className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-xl border-4 border-white"
              />
            </div>
          )}
          <div className="flex-1 w-full flex flex-col justify-center">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-lg md:text-xl text-gray-700 mb-6"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
            {buttonText && (
              <button className="mt-4 px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow hover:bg-blue-700 transition-colors w-max self-end">
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImageTextSection; 