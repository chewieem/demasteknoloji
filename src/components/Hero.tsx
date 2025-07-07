import React from 'react';

interface HeroProps {
  language: 'tr' | 'en';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background image */}
      <img
        src={process.env.PUBLIC_URL + "/hero-bg.jpg"}
        alt="Yapay Zeka Hero"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a2342]/90 via-[#0a2342]/80 to-[#0a2342]/60 z-10" />
      {/* Content */}
      <div className="relative z-20 max-w-3xl flex flex-col items-start px-4 md:pl-16 lg:pl-32 py-10 md:py-0 w-full">
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {language === 'tr'
            ? 'Yapay Zeka ile Geleceği Şekillendiriyoruz'
            : 'Shaping the Future with Artificial Intelligence'}
        </h1>
        <p className="text-base md:text-2xl text-white/90 mb-6 max-w-xl">
          {language === 'tr'
            ? 'Demaş Teknoloji, ileri teknoloji yatırımlarıyla yapay zekada çığır açıyor.'
            : 'Demaş Teknoloji is pioneering artificial intelligence with advanced technology investments.'}
        </p>
        <div className="flex flex-row gap-4 w-full">
          <a
            href="#services"
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow transition-colors border border-blue-400 text-base md:text-lg text-center"
          >
            {language === 'tr' ? 'Yatırımlarımızı Keşfedin' : 'Discover Our Investments'}
          </a>
          <a
            href="#contact"
            className="flex-1 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-lg border border-white/30 transition-colors text-base md:text-lg text-center"
          >
            {language === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 