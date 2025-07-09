import React from 'react';
import Header from '../Header';
import Banner from '../Products/Banner';
import Footer from '../Footer';
import { Link, useLocation } from 'react-router-dom';

const content = {
  tr: {
    title: 'Çözümlerimiz',
    description: 'Tüm çözüm ailelerimizi ve hizmetlerimizi keşfedin.',
    breadcrumb: (
      <>
        <Link to="/tr" className="text-gray-400 font-bold">Ana Sayfa</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">Çözümler</span>
      </>
    ),
    footerLang: 'tr',
  },
  en: {
    title: 'Our Solutions',
    description: 'Discover all our solution families and services.',
    breadcrumb: (
      <>
        <Link to="/en" className="text-gray-400 font-bold">Home</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">Solutions</span>
      </>
    ),
    footerLang: 'en',
  },
};

const SolutionsList: React.FC = () => {
  const location = useLocation();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  const solutions = [
    {
      title: lang === 'tr' ? 'Çözüm 1' : 'Solution 1',
      desc: lang === 'tr' ? 'Birinci çözüm açıklaması ve detayları' : 'First solution description and details',
      link: `/${lang}/solutions/solution1`,
    },
    {
      title: lang === 'tr' ? 'Çözüm 2' : 'Solution 2',
      desc: lang === 'tr' ? 'İkinci çözüm açıklaması ve detayları' : 'Second solution description and details',
      link: `/${lang}/solutions/solution2`,
    },
    {
      title: lang === 'tr' ? 'Çözüm 3' : 'Solution 3',
      desc: lang === 'tr' ? 'Üçüncü çözüm açıklaması ve detayları' : 'Third solution description and details',
      link: `/${lang}/solutions/solution3`,
    },
    {
      title: lang === 'tr' ? 'Çözüm 4' : 'Solution 4',
      desc: lang === 'tr' ? 'Dördüncü çözüm açıklaması ve detayları' : 'Fourth solution description and details',
      link: `/${lang}/solutions/solution4`,
    },
    {
      title: lang === 'tr' ? 'Çözüm 5' : 'Solution 5',
      desc: lang === 'tr' ? 'Beşinci çözüm açıklaması ve detayları' : 'Fifth solution description and details',
      link: `/${lang}/solutions/solution5`,
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
        {solutions.map((solution, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col justify-between min-h-[220px] border border-gray-200">
            <div>
              <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
              <p className="text-gray-700 mb-6">{solution.desc}</p>
            </div>
            <Link to={solution.link} className="text-blue-600 font-semibold flex items-center gap-1 hover:underline mt-auto">
              {lang === 'tr' ? 'Detaylı Bilgi' : 'More Info'} <span aria-hidden>→</span>
            </Link>
          </div>
        ))}
      </div>
      <Footer language={lang} />
    </div>
  );
};

export default SolutionsList; 