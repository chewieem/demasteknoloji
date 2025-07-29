import React from 'react';
import Header from '../Header';
import Banner from '../Products/Banner';
import Footer from '../Footer';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const content = {
  tr: {
    title: 'Yatırımlarımız',
    description: 'Ürünlerimiz, çözümlerimiz ve hizmetlerimiz ile geleceğe yatırım yapın.',
    breadcrumb: (
      <>
        <Link to="/tr" className="text-gray-400 font-bold">Ana Sayfa</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">Yatırımlar</span>
      </>
    ),
    footerLang: 'tr',
  },
  en: {
    title: 'Our Investments',
    description: 'Invest in the future with our products, solutions and services.',
    breadcrumb: (
      <>
        <Link to="/en" className="text-gray-400 font-bold">Home</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">Investments</span>
      </>
    ),
    footerLang: 'en',
  },
};

const Investments: React.FC = () => {
  const location = useLocation();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  const investments = [
    {
      title: lang === 'tr' ? 'UyumTakip' : 'UyumTakip',
      desc: lang === 'tr' ? 'Sağlık tesisleri için bilgi yönetim sistemleri ve çözüm platformları' : 'Information management systems and solution platforms for healthcare facilities',
      link: `/${lang}/investment/uyumtakip`,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      category: lang === 'tr' ? 'Web Geliştirme' : 'Web Development'
    },
    {
      title: lang === 'tr' ? 'Fiyat Borsası' : 'Fiyat Borsası',
      desc: lang === 'tr' ? 'Mobil uygulama geliştirme ve yönetim çözümleri' : 'Mobile application development and management solutions',
      link: `/${lang}/investment/fiyat-borsasi`,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      category: lang === 'tr' ? 'Mobil Teknoloji' : 'Mobile Technology'
    },
    {
      title: lang === 'tr' ? 'Dijital Rafineri' : 'Dijital Rafineri',
      desc: lang === 'tr' ? 'E-ticaret çözümleri ve platform yönetimi' : 'Ecommerce solutions and platform management',
      link: `/${lang}/investment/dijital-rafineri`,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: lang === 'tr' ? 'E-Ticaret' : 'E-commerce'
    },
  ];

  return (
    <div>
      <Header language={lang} setLanguage={() => {}} />
      <Banner
        title={page.title}
        description={page.description}
        image={process.env.PUBLIC_URL + '/banner.png'}
        breadcrumb={page.breadcrumb}
      />
      
      {/* Yatırımlarımız Bölümü */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {lang === 'tr' ? 'Yatırımlarımız' : 'Our Investments'}
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
            {lang === 'tr'
              ? 'Gelişmiş teknoloji çözümleri ile işinizi büyütün'
              : 'Grow your business with advanced technology solutions'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {investments.map((investment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full max-w-sm bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col"
              >
                {/* Fotoğraf Bölümü */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={investment.image} 
                    alt={investment.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {investment.category}
                    </span>
                  </div>
                </div>
                
                {/* İçerik Bölümü */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{investment.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{investment.desc}</p>
                </div>
                
                {/* Buton - Kartın içinde en altta */}
                <div className="px-6 pb-6">
                  <Link
                    to={investment.link}
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full"
                  >
                    {lang === 'tr' ? 'Detaylı Bilgi' : 'Learn More'}
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer language={lang} />
    </div>
  );
};

export default Investments; 