import React from 'react';
import Header from '../../Header';
import Banner from '../../Products/Banner';
import Footer from '../../Footer';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlobeAltIcon, HeartIcon, LightBulbIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const content = {
  tr: {
    title: 'Sürdürülebilirlik',
    description: 'Çevresel, sosyal ve ekonomik sürdürülebilirlik çalışmalarımız',
    footerLang: 'tr',
  },
  en: {
    title: 'Sustainability',
    description: 'Our environmental, social and economic sustainability efforts',
    footerLang: 'en',
  },
};

const Sustainability: React.FC = () => {
  const location = useLocation();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  const sustainabilityAreas = [
    {
      id: 1,
      icon: GlobeAltIcon,
      title: { tr: 'Çevresel Sürdürülebilirlik', en: 'Environmental Sustainability' },
      description: { 
        tr: 'Karbon ayak izimizi azaltmak ve çevre dostu teknolojiler geliştirmek için çalışıyoruz.',
        en: 'We work to reduce our carbon footprint and develop environmentally friendly technologies.'
      },
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      items: [
        { tr: 'Enerji verimli veri merkezleri', en: 'Energy efficient data centers' },
        { tr: 'Yenilenebilir enerji kullanımı', en: 'Renewable energy usage' },
        { tr: 'E-atık yönetimi', en: 'E-waste management' },
        { tr: 'Karbon nötr hedefleri', en: 'Carbon neutral targets' }
      ]
    },
    {
      id: 2,
      icon: HeartIcon,
      title: { tr: 'Sosyal Sürdürülebilirlik', en: 'Social Sustainability' },
      description: { 
        tr: 'Toplumsal fayda sağlayan projeler ve eğitim programları ile topluma katkıda bulunuyoruz.',
        en: 'We contribute to society through projects and education programs that provide social benefit.'
      },
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      items: [
        { tr: 'Dijital okuryazarlık eğitimleri', en: 'Digital literacy training' },
        { tr: 'Sosyal sorumluluk projeleri', en: 'Social responsibility projects' },
        { tr: 'Çeşitlilik ve kapsayıcılık', en: 'Diversity and inclusion' },
        { tr: 'Topluluk geliştirme', en: 'Community development' }
      ]
    },
    {
      id: 3,
      icon: ChartBarIcon,
      title: { tr: 'Ekonomik Sürdürülebilirlik', en: 'Economic Sustainability' },
      description: { 
        tr: 'Uzun vadeli ekonomik büyüme ve istikrar için sürdürülebilir iş modelleri geliştiriyoruz.',
        en: 'We develop sustainable business models for long-term economic growth and stability.'
      },
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      items: [
        { tr: 'Sürdürülebilir tedarik zinciri', en: 'Sustainable supply chain' },
        { tr: 'Yerel ekonomi desteği', en: 'Local economy support' },
        { tr: 'Uzun vadeli yatırımlar', en: 'Long-term investments' },
        { tr: 'İnovasyon odaklı büyüme', en: 'Innovation-driven growth' }
      ]
    }
  ];

  const initiatives = [
    {
      id: 1,
      title: { tr: 'Yeşil Teknoloji İnisiyatifi', en: 'Green Technology Initiative' },
      description: { 
        tr: 'Çevre dostu teknoloji çözümleri geliştirerek karbon emisyonlarını azaltıyoruz.',
        en: 'We reduce carbon emissions by developing environmentally friendly technology solutions.'
      },
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
      year: '2023',
      impact: { tr: 'Karbon emisyonu %25 azalma', en: '25% reduction in carbon emissions' }
    },
    {
      id: 2,
      title: { tr: 'Dijital Eğitim Programı', en: 'Digital Education Program' },
      description: { 
        tr: 'Türkiye genelinde 10.000+ öğrenciye ücretsiz dijital eğitim sağlıyoruz.',
        en: 'We provide free digital education to more than 10,000 students across Turkey.'
      },
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
      year: '2022',
      impact: { tr: '10.000+ öğrenci eğitildi', en: '10,000+ students trained' }
    },
    {
      id: 3,
      title: { tr: 'Sürdürülebilir Veri Merkezi', en: 'Sustainable Data Center' },
      description: { 
        tr: 'Yenilenebilir enerji ile çalışan, enerji verimli veri merkezi projemiz.',
        en: 'Our energy-efficient data center project powered by renewable energy.'
      },
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      year: '2024',
      impact: { tr: '%40 enerji tasarrufu', en: '40% energy savings' }
    }
  ];

  const stats = [
    { number: '25%', label: { tr: 'Karbon Azalması', en: 'Carbon Reduction' } },
    { number: '10K+', label: { tr: 'Eğitilen Öğrenci', en: 'Students Trained' } },
    { number: '100%', label: { tr: 'Yenilenebilir Enerji', en: 'Renewable Energy' } },
    { number: '50+', label: { tr: 'Sosyal Proje', en: 'Social Projects' } }
  ];

  const breadcrumb = (
    <div className="mt-1 mb-2 text-sm flex items-center space-x-2">
      <Link to={`/${lang}`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <Link to={`/${lang}/about/company`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Kurumsal' : 'About'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <span className="text-white font-bold">{page.title}</span>
    </div>
  );

  return (
    <div>
      <Header language={lang} setLanguage={() => {}} />
      <Banner
        title={page.title}
        description={page.description}
        image={process.env.PUBLIC_URL + '/banner.png'}
        breadcrumb={breadcrumb}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Sürdürülebilirlik Alanları */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'tr' ? 'Sürdürülebilirlik Alanlarımız' : 'Our Sustainability Areas'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {lang === 'tr' 
                ? 'Çevresel, sosyal ve ekonomik sürdürülebilirlik alanlarında kapsamlı çalışmalar yürütüyoruz.'
                : 'We carry out comprehensive studies in environmental, social and economic sustainability areas.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sustainabilityAreas.map((area, idx) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${area.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <area.icon className={`w-8 h-8 ${area.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {area.title[lang]}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {area.description[lang]}
                </p>

                <ul className="space-y-2">
                  {area.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full ${area.bgColor}`}></div>
                      {item[lang]}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sürdürülebilirlik İnisiyatifleri */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'tr' ? 'Sürdürülebilirlik İnisiyatiflerimiz' : 'Our Sustainability Initiatives'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {lang === 'tr' 
                ? 'Gelecek nesillere daha iyi bir dünya bırakmak için hayata geçirdiğimiz projeler.'
                : 'Projects we implement to leave a better world for future generations.'
              }
            </p>
          </div>

          <div className="space-y-8">
            {initiatives.map((initiative, idx) => (
              <motion.div
                key={initiative.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={initiative.image}
                      alt={initiative.title[lang]}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {initiative.year}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {initiative.impact[lang]}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {initiative.title[lang]}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {initiative.description[lang]}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* İstatistikler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              {lang === 'tr' ? 'Sürdürülebilirlik Başarılarımız' : 'Our Sustainability Achievements'}
            </h2>
            <p className="text-green-100">
              {lang === 'tr' 
                ? 'Çevre, toplum ve ekonomi için yarattığımız değer'
                : 'Value we create for environment, society and economy'
              }
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label[lang]}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sürdürülebilirlik Taahhütleri */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'tr' ? 'Sürdürülebilirlik Taahhütlerimiz' : 'Our Sustainability Commitments'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {lang === 'tr' 
                ? '2030 yılına kadar ulaşmayı hedeflediğimiz sürdürülebilirlik hedeflerimiz.'
                : 'Our sustainability goals that we aim to achieve by 2030.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <GlobeAltIcon className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {lang === 'tr' ? 'Çevresel Hedefler' : 'Environmental Goals'}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• {lang === 'tr' ? 'Karbon nötr olma hedefi' : 'Carbon neutral target'}</li>
                <li>• {lang === 'tr' ? 'Yenilenebilir enerji kullanımı' : 'Renewable energy usage'}</li>
                <li>• {lang === 'tr' ? 'Sıfır atık hedefi' : 'Zero waste target'}</li>
                <li>• {lang === 'tr' ? 'Su tasarrufu programları' : 'Water conservation programs'}</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <HeartIcon className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {lang === 'tr' ? 'Sosyal Hedefler' : 'Social Goals'}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• {lang === 'tr' ? 'Eğitim erişimini artırma' : 'Increasing access to education'}</li>
                <li>• {lang === 'tr' ? 'Dijital kapsayıcılık' : 'Digital inclusion'}</li>
                <li>• {lang === 'tr' ? 'Topluluk geliştirme' : 'Community development'}</li>
                <li>• {lang === 'tr' ? 'Çeşitlilik ve kapsayıcılık' : 'Diversity and inclusion'}</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer language={lang} />
    </div>
  );
};

export default Sustainability; 