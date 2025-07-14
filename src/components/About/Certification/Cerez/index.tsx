import React, { useEffect } from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import Banner from '../../Banner';
import { Link, useLocation } from 'react-router-dom';

const Cerez: React.FC = () => {
  const location = useLocation();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;

  const setLanguage = (newLang: 'en' | 'tr') => {
    let newPath = location.pathname;
    if (newLang === 'en' && !newPath.startsWith('/en')) {
      newPath = '/en' + (newPath.startsWith('/tr') ? newPath.slice(3) : newPath);
    } else if (newLang === 'tr' && !newPath.startsWith('/tr')) {
      newPath = '/tr' + (newPath.startsWith('/en') ? newPath.slice(3) : newPath);
    }
    window.location.href = newPath;
  };

  const breadcrumb = (
    <>
      <Link to={`/${lang}`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <Link to={`/${lang}/about/certification`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Sertifikasyon ve Dökümantasyon' : 'Certification & Documentation'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <Link to={`/${lang}/about/certification/documents`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Dökümantasyon' : 'Documentation'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <span className="text-white font-bold">{lang === 'tr' ? 'Çerez Politikası' : 'Cookie Policy'}</span>
    </>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header language={lang} setLanguage={setLanguage} />
      <Banner
        title={lang === 'tr' ? 'Çerez Politikası' : 'Cookie Policy'}
        description={lang === 'tr' ? 'Web sitemizde kullanılan çerezler ve kullanım esasları.' : 'Cookies used on our website and terms of use.'}
        breadcrumb={breadcrumb}
      />
      <div className="bg-white min-h-[40vh] py-16 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'tr' ? 'Çerez Politikası' : 'Cookie Policy'}</h2>
          <p className="text-gray-700 text-lg whitespace-pre-line">
            {lang === 'tr'
              ? 'Bu bir örnek Çerez Politikası metnidir. Web sitemizde kullanıcı deneyimini geliştirmek için çerezler kullanılmaktadır. Çerez tercihlerinizi tarayıcı ayarlarından değiştirebilirsiniz.'
              : 'This is a sample Cookie Policy text. Cookies are used on our website to enhance user experience. You can change your cookie preferences from your browser settings.'}
          </p>
        </div>
      </div>
      <Footer language={lang} />
    </div>
  );
};

export default Cerez; 