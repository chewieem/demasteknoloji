import React, { useEffect } from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import Banner from '../../Banner';
import { Link, useLocation } from 'react-router-dom';

const GizlilikVeri: React.FC = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumb = (
    <>
      <Link to={`/${lang}`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <Link to={`/${lang}/about/certification`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Sertifikasyon ve Dökümantasyon' : 'Certification & Documentation'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <Link to={`/${lang}/about/certification/documents`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Dökümantasyon' : 'Documentation'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <span className="text-white font-bold">{lang === 'tr' ? 'Gizlilik Politikası ve Kişisel Veriler' : 'Privacy Policy & Personal Data'}</span>
    </>
  );

  return (
    <div>
      <Header language={lang} setLanguage={setLanguage} />
      <Banner
        title={lang === 'tr' ? 'Gizlilik Politikası ve Kişisel Veriler' : 'Privacy Policy & Personal Data'}
        description={lang === 'tr' ? 'Kişisel verilerinizin gizliliği ve korunması esasları.' : 'Principles of privacy and protection of your personal data.'}
        breadcrumb={breadcrumb}
      />
      <div className="bg-white min-h-[40vh] py-16 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'tr' ? 'Gizlilik Politikası ve Kişisel Veriler' : 'Privacy Policy & Personal Data'}</h2>
          <p className="text-gray-700 text-lg whitespace-pre-line">
            {lang === 'tr'
              ? 'Bu bir örnek Gizlilik Politikası ve Kişisel Veriler metnidir. Kişisel verilerinizin gizliliği ve güvenliği bizim için önemlidir. Verileriniz yasal mevzuata uygun şekilde işlenir ve korunur.'
              : 'This is a sample Privacy Policy & Personal Data text. The privacy and security of your personal data are important to us. Your data is processed and protected in accordance with legal regulations.'}
          </p>
        </div>
      </div>
      <Footer language={lang} />
    </div>
  );
};

export default GizlilikVeri; 