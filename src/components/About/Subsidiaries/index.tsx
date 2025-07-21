import React from 'react';
import Header from '../../Header';
import Banner from '../../Products/Banner';
import Footer from '../../Footer';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BuildingOfficeIcon, GlobeAltIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const content = {
  tr: {
    title: 'İştiraklerimiz',
    description: 'Demaş Teknoloji\'nin iştirakleri ve stratejik ortaklıkları',
    footerLang: 'tr',
  },
  en: {
    title: 'Our Subsidiaries',
    description: 'Demaş Technology\'s subsidiaries and strategic partnerships',
    footerLang: 'en',
  },
};

const Subsidiaries: React.FC = () => {
  const location = useLocation();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  const subsidiaries = [
    {
      id: 1,
      name: { tr: 'Demaş Yazılım A.Ş.', en: 'Demaş Software Inc.' },
      description: { 
        tr: 'Yazılım geliştirme ve teknoloji çözümleri konusunda uzmanlaşmış iştirakimiz.',
        en: 'Our subsidiary specialized in software development and technology solutions.'
      },
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=200&q=80',
      sector: { tr: 'Yazılım Geliştirme', en: 'Software Development' },
      year: '2020',
      employees: '150+',
      location: { tr: 'İstanbul, Türkiye', en: 'Istanbul, Turkey' }
    },
    {
      id: 2,
      name: { tr: 'Demaş Dijital A.Ş.', en: 'Demaş Digital Inc.' },
      description: { 
        tr: 'Dijital dönüşüm ve dijital pazarlama hizmetleri sunan iştirakimiz.',
        en: 'Our subsidiary providing digital transformation and digital marketing services.'
      },
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=200&q=80',
      sector: { tr: 'Dijital Dönüşüm', en: 'Digital Transformation' },
      year: '2021',
      employees: '80+',
      location: { tr: 'Ankara, Türkiye', en: 'Ankara, Turkey' }
    },
    {
      id: 3,
      name: { tr: 'Demaş Siber Güvenlik A.Ş.', en: 'Demaş Cybersecurity Inc.' },
      description: { 
        tr: 'Siber güvenlik çözümleri ve danışmanlık hizmetleri veren iştirakimiz.',
        en: 'Our subsidiary providing cybersecurity solutions and consulting services.'
      },
      logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=80',
      sector: { tr: 'Siber Güvenlik', en: 'Cybersecurity' },
      year: '2022',
      employees: '60+',
      location: { tr: 'İzmir, Türkiye', en: 'Izmir, Turkey' }
    },
    {
      id: 4,
      name: { tr: 'Demaş Bulut A.Ş.', en: 'Demaş Cloud Inc.' },
      description: { 
        tr: 'Bulut bilişim ve altyapı hizmetleri konusunda uzmanlaşmış iştirakimiz.',
        en: 'Our subsidiary specialized in cloud computing and infrastructure services.'
      },
      logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&q=80',
      sector: { tr: 'Bulut Bilişim', en: 'Cloud Computing' },
      year: '2023',
      employees: '100+',
      location: { tr: 'Bursa, Türkiye', en: 'Bursa, Turkey' }
    }
  ];

  const partnerships = [
    {
      id: 1,
      name: { tr: 'Microsoft Türkiye', en: 'Microsoft Turkey' },
      description: { 
        tr: 'Microsoft teknolojileri konusunda stratejik ortaklık.',
        en: 'Strategic partnership in Microsoft technologies.'
      },
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=200&q=80',
      type: { tr: 'Teknoloji Ortaklığı', en: 'Technology Partnership' },
      year: '2019'
    },
    {
      id: 2,
      name: { tr: 'Oracle Türkiye', en: 'Oracle Turkey' },
      description: { 
        tr: 'Oracle veritabanı ve uygulama çözümleri konusunda işbirliği.',
        en: 'Collaboration in Oracle database and application solutions.'
      },
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=200&q=80',
      type: { tr: 'Veritabanı Ortaklığı', en: 'Database Partnership' },
      year: '2020'
    },
    {
      id: 3,
      name: { tr: 'AWS Türkiye', en: 'AWS Turkey' },
      description: { 
        tr: 'Amazon Web Services bulut çözümleri konusunda stratejik ortaklık.',
        en: 'Strategic partnership in Amazon Web Services cloud solutions.'
      },
      logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=80',
      type: { tr: 'Bulut Ortaklığı', en: 'Cloud Partnership' },
      year: '2021'
    }
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
        {/* İştirakler Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'tr' ? 'İştiraklerimiz' : 'Our Subsidiaries'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {lang === 'tr' 
                ? 'Teknoloji alanında farklı uzmanlık alanlarında hizmet veren iştiraklerimiz ile müşterilerimize kapsamlı çözümler sunuyoruz.'
                : 'We provide comprehensive solutions to our customers through our subsidiaries serving in different areas of expertise in technology.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {subsidiaries.map((subsidiary, idx) => (
              <motion.div
                key={subsidiary.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={subsidiary.logo}
                    alt={subsidiary.name[lang]}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {subsidiary.name[lang]}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {subsidiary.description[lang]}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <BuildingOfficeIcon className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">{subsidiary.sector[lang]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GlobeAltIcon className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">{subsidiary.location[lang]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChartBarIcon className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-600">{lang === 'tr' ? 'Kuruluş' : 'Founded'}: {subsidiary.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserGroupIcon className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-600">{subsidiary.employees}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stratejik Ortaklıklar Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'tr' ? 'Stratejik Ortaklıklarımız' : 'Our Strategic Partnerships'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {lang === 'tr' 
                ? 'Teknoloji dünyasının önde gelen şirketleri ile stratejik ortaklıklar kurarak müşterilerimize en iyi çözümleri sunuyoruz.'
                : 'We provide the best solutions to our customers by establishing strategic partnerships with leading companies in the technology world.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partnership, idx) => (
              <motion.div
                key={partnership.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 text-center"
              >
                <img
                  src={partnership.logo}
                  alt={partnership.name[lang]}
                  className="w-20 h-20 rounded-lg object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {partnership.name[lang]}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {partnership.description[lang]}
                </p>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {partnership.type[lang]}
                  </span>
                  <span className="text-gray-500">
                    {lang === 'tr' ? 'Başlangıç' : 'Started'}: {partnership.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* İstatistikler Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              {lang === 'tr' ? 'İştiraklerimizden Rakamlar' : 'Numbers from Our Subsidiaries'}
            </h2>
            <p className="text-blue-100">
              {lang === 'tr' 
                ? 'Türkiye genelinde faaliyet gösteren iştiraklerimizin başarıları'
                : 'Success of our subsidiaries operating throughout Turkey'
              }
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-blue-100">{lang === 'tr' ? 'İştirak' : 'Subsidiaries'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">390+</div>
              <div className="text-blue-100">{lang === 'tr' ? 'Çalışan' : 'Employees'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-blue-100">{lang === 'tr' ? 'Stratejik Ortak' : 'Strategic Partners'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-blue-100">{lang === 'tr' ? 'Şehir' : 'Cities'}</div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer language={lang} />
    </div>
  );
};

export default Subsidiaries; 