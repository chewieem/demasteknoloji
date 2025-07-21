import React from 'react';

interface HeroProps {
  language: 'tr' | 'en';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  return (
    <section className="relative w-full min-h-[115vh] md:min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 overflow-hidden">
      {/* Main content container */}
      <div className="relative z-10 w-full text-center mt-12">
        {/* Hero image as a card */}
        <div className="mb-8 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="relative w-full">
            <img
              src={process.env.PUBLIC_URL + "/hero-bg.jpg"}
              alt="Yapay Zeka Hero"
              className="w-full h-48 md:h-64 object-cover shadow-2xl"
            />
          </div>
        </div>
        
        {/* Text content */}
        <div className="space-y-4 px-4 sm:px-6 lg:px-8">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              {language === 'tr'
                ? 'Yapay Zeka ile'
                : 'With Artificial Intelligence'}
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-blue-600 leading-tight">
              {language === 'tr'
                ? 'Geleceği Şekillendiriyoruz'
                : 'Shaping the Future'}
            </h2>
          </div>
          
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            {language === 'tr'
              ? 'Demaş Teknoloji, ileri teknoloji yatırımlarıyla yapay zekada çığır açıyor.'
              : 'Demaş Teknoloji is pioneering artificial intelligence with advanced technology investments.'}
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
            <a
              href="#services"
              className="group relative px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
            >
              <span className="relative z-10">
                {language === 'tr' ? 'Yatırımlarımızı Keşfedin' : 'Discover Our Investments'}
              </span>
              <div className="absolute inset-0 bg-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#contact"
              className="group relative px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
            >
              <span className="relative z-10">
                {language === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
              </span>
              <div className="absolute inset-0 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 