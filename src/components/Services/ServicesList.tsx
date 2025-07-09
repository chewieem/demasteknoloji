import React from 'react';
import Header from '../Header';
import Banner from '../Products/Banner';
import Footer from '../Footer';
import { Link, useLocation } from 'react-router-dom';

const content = {
  tr: {
    title: 'Hizmetlerimiz',
    description: 'Tüm hizmet ailelerimizi ve çözümlerimizi keşfedin.',
    breadcrumb: (
      <>
        <Link to="/tr" className="text-gray-400 font-bold">Ana Sayfa</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">Hizmetler</span>
      </>
    ),
    footerLang: 'tr',
  },
  en: {
    title: 'Our Services',
    description: 'Discover all our service families and solutions.',
    breadcrumb: (
      <>
        <Link to="/en" className="text-gray-400 font-bold">Home</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">Services</span>
      </>
    ),
    footerLang: 'en',
  },
};

const ServicesList: React.FC = () => {
  const location = useLocation();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  const services = [
    {
      title: lang === 'tr' ? 'Hizmet 1' : 'Service 1',
      desc: lang === 'tr' ? 'Birinci hizmet açıklaması ve detayları' : 'First service description and details',
      link: `/${lang}/services/service1`,
    },
    {
      title: lang === 'tr' ? 'Hizmet 2' : 'Service 2',
      desc: lang === 'tr' ? 'İkinci hizmet açıklaması ve detayları' : 'Second service description and details',
      link: `/${lang}/services/service2`,
    },
    {
      title: lang === 'tr' ? 'Hizmet 3' : 'Service 3',
      desc: lang === 'tr' ? 'Üçüncü hizmet açıklaması ve detayları' : 'Third service description and details',
      link: `/${lang}/services/service3`,
    },
    {
      title: lang === 'tr' ? 'Hizmet 4' : 'Service 4',
      desc: lang === 'tr' ? 'Dördüncü hizmet açıklaması ve detayları' : 'Fourth service description and details',
      link: `/${lang}/services/service4`,
    },
    {
      title: lang === 'tr' ? 'Hizmet 5' : 'Service 5',
      desc: lang === 'tr' ? 'Beşinci hizmet açıklaması ve detayları' : 'Fifth service description and details',
      link: `/${lang}/services/service5`,
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
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col justify-between min-h-[220px] border border-gray-200">
            <div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.desc}</p>
            </div>
            <Link to={service.link} className="text-blue-600 font-semibold flex items-center gap-1 hover:underline mt-auto">
              {lang === 'tr' ? 'Detaylı Bilgi' : 'More Info'} <span aria-hidden>→</span>
            </Link>
          </div>
        ))}
      </div>
      <Footer language={lang} />
    </div>
  );
};

export default ServicesList; 