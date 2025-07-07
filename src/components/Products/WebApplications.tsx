import React from 'react';
import Header from '../Header';
import Banner from './Banner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import FeatureCardsSection from '../TextSections/FeatureCardsSection';
import TabbedSection from '../TextSections/TabbedSection';
import ImageTextSection from '../TextSections/ImageTextSection';
import ListSection from '../TextSections/ListSection';

const content = {
  tr: {
    title: 'Web Uygulamaları',
    description: 'Sağlık tesisleri için bilgi yönetim sistemleri ve çözüm platformları',
    sections: [
      {
        title: 'Genel Bakış',
        description: 'Sektörlere özel dijital dönüşüm çözümleri geliştiren şirketimiz, sağlık tesislerinin spesifik ihtiyaçlarını eksiksiz şekilde karşılar.',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Gelişmiş Mimarisi',
        description: '%100 web tabanlı bilgi yönetim sistemi ile kurumlara kullanımı kolay, altyapısı güçlü bir platform sunuyoruz.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        reverse: true,
      },
      {
        title: 'Mobil Uygulama Altyapısı',
        description: 'Mobil çözümlerle sağlık çalışanlarının iş süreçlerini kolaylaştırıyoruz.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      },
    ],
    breadcrumb: (
      <>
        <Link to="/tr" className="text-gray-400 font-bold">Ana Sayfa</Link>
        <span className="text-gray-400 font-bold">/</span>
        <Link to="/tr/products" className="text-gray-400 font-bold">Ürünler</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">Web Uygulamaları</span>
      </>
    ),
    footerLang: 'tr',
    headerLang: 'tr',
  },
  en: {
    title: 'Web Applications',
    description: 'Information management systems and solution platforms for healthcare facilities',
    sections: [
      {
        title: 'Overview',
        description: 'Our company develops digital transformation solutions tailored to industries, fully meeting the specific needs of healthcare facilities.',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Advanced Architecture',
        description: 'With a 100% web-based information management system, we offer institutions an easy-to-use, robust platform.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        reverse: true,
      },
      {
        title: 'Mobile Application Infrastructure',
        description: 'We facilitate the workflows of healthcare professionals with mobile solutions.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      },
    ],
    breadcrumb: (
      <>
        <Link to="/en" className="text-gray-400 font-bold">Home</Link>
        <span className="text-gray-400 font-bold">/</span>
        <Link to="/en/products" className="text-gray-400 font-bold">Products</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">Web Applications</span>
      </>
    ),
    footerLang: 'en',
    headerLang: 'en',
  },
};

const WebApplications: React.FC = () => {
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

export default WebApplications;