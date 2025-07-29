import React, { useState, useEffect } from 'react';
import Header from '../../Header';
import Banner from '../Banner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../Footer';
import FeatureCardsSection from '../../TextSections/FeatureCardsSection';
import TabbedSection from '../../TextSections/TabbedSection';
import ImageTextSection from '../../TextSections/ImageTextSection';
import ListSection from '../../TextSections/ListSection';
import HeroImageTextSection from '../../TextSections/HeroImageTextSection';
import TwoColumnSection from '../../TextSections/TwoColumnSection';

const TABS = [
  { key: 'overview', tr: 'Genel Bakış', en: 'Overview', path: '' },
  { key: 'urun', tr: 'ÜRÜN', en: 'PRODUCT', path: 'urun' },
  { key: 'urun-lite', tr: 'ÜRÜN Lite', en: 'PRODUCT Lite', path: 'urun-lite' },
];

const content = {
  tr: {
    title: 'UyumTakip',
    description: 'Sağlık tesisleri için bilgi yönetim sistemleri ve çözüm platformları',
    footerLang: 'tr',
    headerLang: 'tr',
  },
  en: {
    title: 'UyumTakip',
    description: 'Information management systems and solution platforms for healthcare facilities',
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

  // URL'den aktif sekmeyi belirle
  const pathParts = location.pathname.split('/');
  const tabPath = pathParts[pathParts.length - 1];
  let initialTab = 'overview';
  if (tabPath === 'urun') initialTab = 'urun';
  else if (tabPath === 'urun-lite') initialTab = 'urun-lite';
  const [selectedTab, setSelectedTab] = useState(initialTab);

  // Sekme değişince URL'yi güncelle
  const handleTabChange = (key: string) => {
    setSelectedTab(key);
    const tabObj = TABS.find(t => t.key === key);
    let base = `/${lang}/investment/uyumtakip`;
    if (tabObj && tabObj.path) base += `/${tabObj.path}`;
    navigate(base, { replace: true });
  };

  // URL değişirse sekmeyi güncelle
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const tabPath = pathParts[pathParts.length - 1];
    if (tabPath === 'urun') setSelectedTab('urun');
    else if (tabPath === 'urun-lite') setSelectedTab('urun-lite');
    else setSelectedTab('overview');
  }, [location.pathname]);

  // Breadcrumb'u dinamik oluştur
  const breadcrumb = (
    <div className="mt-1 mb-2 text-sm flex items-center space-x-2">
      <Link to={`/${lang}`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <Link to={`/${lang}/investments`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Yatırımlarımız' : 'Our Investments'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <Link to={`/${lang}/investment/uyumtakip`} className="text-gray-400 font-bold">{lang === 'tr' ? 'UyumTakip' : 'UyumTakip'}</Link>
      {selectedTab !== 'overview' && (
        <>
          <span className="text-gray-400 font-bold">/</span>
          <span className="text-white font-bold">{lang === 'tr' ? (selectedTab === 'urun' ? 'ÜRÜN' : 'ÜRÜN Lite') : (selectedTab === 'urun' ? 'PRODUCT' : 'PRODUCT Lite')}</span>
        </>
      )}
    </div>
  );

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
        breadcrumb={breadcrumb}
        tabs={TABS.map(tab => ({ key: tab.key, label: lang === 'tr' ? tab.tr : tab.en }))}
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
      />
      {/* Genel Bakış sekmesi seçiliyse özel section'lar */}
      {selectedTab === 'overview' && (
        <>
          <HeroImageTextSection
            title={lang === 'tr' ? 'Web Uygulamaları' : 'Web Applications'}
            paragraphs={[
              lang === 'tr'
                ? 'Sağlık tesisleri için bilgi yönetim sistemleri ve çözüm platformları.'
                : 'Information management systems and solution platforms for healthcare facilities.'
            ]}
          />
          <TwoColumnSection language={lang} />
        </>
      )}
      {/* ÜRÜN sekmesi seçiliyse özel section'lar */}
      {selectedTab === 'urun' && (
        <>
          <HeroImageTextSection
            title={lang === 'tr' ? 'Web Uygulamaları' : 'Web Applications'}
            paragraphs={[
              lang === 'tr'
                ? 'Sağlık tesisleri için bilgi yönetim sistemleri ve çözüm platformları.'
                : 'Information management systems and solution platforms for healthcare facilities.'
            ]}
          />
          <FeatureCardsSection language={lang} />
        </>
      )}
      {/* Diğer sekmeler */}
      {selectedTab === 'urun-lite' && <FeatureCardsSection language={lang} />}
      {selectedTab === 'urun-lite' && <TabbedSection language={lang} />}
      {selectedTab === 'urun-lite' && <ImageTextSection language={lang} />}
      {selectedTab === 'urun-lite' && <ImageTextSection reverse language={lang} />}
      {selectedTab === 'urun-lite' && <ListSection language={lang} />}
      <Footer language={lang} />
    </div>
  );
};

export default WebApplications;