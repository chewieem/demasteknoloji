import React from 'react';
import Header from '../Header';
import Banner from './Banner';
import Footer from '../Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FeatureCardsSection from '../TextSections/FeatureCardsSection';
import TabbedSection from '../TextSections/TabbedSection';
import ImageTextSection from '../TextSections/ImageTextSection';
import ListSection from '../TextSections/ListSection';

const content = {
  tr: {
    title: 'ERP Çözümleri',
    description: 'Kurumsal kaynak planlama süreçlerinizi dijitalleştirin ve verimliliği artırın.',
    breadcrumb: (
      <>
        <Link to="/tr" className="text-gray-400 font-bold">Ana Sayfa</Link>
        <span className="text-gray-400 font-bold">/</span>
        <Link to="/tr/products" className="text-gray-400 font-bold">Ürünler</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">ERP Çözümleri</span>
      </>
    ),
  },
  en: {
    title: 'ERP Solutions',
    description: 'Digitize your enterprise resource planning processes and increase efficiency.',
    breadcrumb: (
      <>
        <Link to="/en" className="text-gray-400 font-bold">Home</Link>
        <span className="text-gray-400 font-bold">/</span>
        <Link to="/en/products" className="text-gray-400 font-bold">Products</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">ERP Solutions</span>
      </>
    ),
  },
};

const ERPSolutions: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  const setLanguage = (newLang: 'en' | 'tr') => {
    let newPath = location.pathname;
    if (newLang === 'en' && !newPath.startsWith('/en')) {
      newPath = '/en' + (newPath.startsWith('/tr') ? newPath.slice(3) : newPath);
    } else if (newLang === 'tr' && !newPath.startsWith('/tr')) {
      newPath = '/tr' + (newPath.startsWith('/en') ? newPath.slice(3) : newPath);
    }
    navigate(newPath + location.search, { replace: true });
  };

  return (
    <div>
      <Header language={lang} setLanguage={setLanguage} />
      <Banner
        title={page.title}
        description={page.description}
        image={process.env.PUBLIC_URL + '/banner.png'}
        breadcrumb={page.breadcrumb}
      />
      <FeatureCardsSection language={lang} />
      <TabbedSection language={lang} />
      <ImageTextSection language={lang} />
      <ImageTextSection reverse language={lang} />
      <ListSection language={lang} />
      <Footer language={lang} />
    </div>
  );
};

export default ERPSolutions; 