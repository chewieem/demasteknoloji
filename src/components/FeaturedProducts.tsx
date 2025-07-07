import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface FeaturedProductsProps {
  language: 'tr' | 'en';
}

const products = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    title: { tr: 'RPA', en: 'RPA' },
    desc: {
      tr: 'Hızlı ve hatasız çalışan robotik iş gücü çözümleri',
      en: 'Fast and error-free robotic workforce solutions',
    },
    detail: { tr: 'Detaylı Bilgi', en: 'More Info' },
    link: '#rpa',
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    title: { tr: 'NOVA', en: 'NOVA' },
    desc: {
      tr: 'Otomatik optimizasyon kabiliyetli hizmet kalitesi yönetimi aracı',
      en: 'Service quality management tool with automatic optimization capability',
    },
    detail: { tr: 'Detaylı Bilgi', en: 'More Info' },
    link: '#nova',
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    title: { tr: 'Network 360', en: 'Network 360' },
    desc: {
      tr: 'Kullanıcı dostu ve kolay uygulanabilir ağ yönetim sistemi',
      en: 'User-friendly and easy-to-implement network management system',
    },
    detail: { tr: 'Detaylı Bilgi', en: 'More Info' },
    link: '#network360',
    contact: { tr: 'Bize Ulaşın', en: 'Contact Us' },
    contactLink: '#contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    title: { tr: 'DataSense', en: 'DataSense' },
    desc: {
      tr: 'Gelişmiş veri analitiği ve raporlama platformu',
      en: 'Advanced data analytics and reporting platform',
    },
    detail: { tr: 'Detaylı Bilgi', en: 'More Info' },
    link: '#datasense',
  },
  {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    title: { tr: 'SecureAI', en: 'SecureAI' },
    desc: {
      tr: 'Yapay zeka destekli güvenlik çözümleri',
      en: 'AI-powered security solutions',
    },
    detail: { tr: 'Detaylı Bilgi', en: 'More Info' },
    link: '#secureai',
  },
  {
    image: 'https://images.unsplash.com/photo-1468779060412-f5b0904f65b0?auto=format&fit=crop&w=800&q=80',
    title: { tr: 'CloudOps', en: 'CloudOps' },
    desc: {
      tr: 'Bulut tabanlı operasyon ve otomasyon platformu',
      en: 'Cloud-based operations and automation platform',
    },
    detail: { tr: 'Detaylı Bilgi', en: 'More Info' },
    link: '#cloudops',
  },
];

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ language }) => {
  return (
    <motion.section
      className="py-12 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-full mx-auto pl-8 md:pl-28 pr-8 md:pr-20 relative">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
          {language === 'tr' ? 'Öne Çıkan Ürünler' : 'Featured Products'}
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          style={{}}
          className="!pb-12 !px-0 md:ml-[-96px] lg:ml-[-96px]"
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg group flex flex-col justify-end w-full">
                <img
                  src={product.image}
                  alt={product.title[language]}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 p-12">
                  <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{product.title[language]}</h3>
                  <p className="text-lg text-white mb-6 drop-shadow-lg">{product.desc[language]}</p>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={product.link}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded shadow border border-blue-500 transition-colors"
                    >
                      {product.detail[language]}
                    </a>
                    {product.contact && (
                      <a
                        href={product.contactLink}
                        className="bg-white/20 hover:bg-white/30 text-white font-semibold px-5 py-2 rounded border border-white/40 transition-colors"
                      >
                        {product.contact[language]}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default FeaturedProducts; 