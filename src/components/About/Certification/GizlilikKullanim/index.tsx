import React, { useEffect } from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import Banner from '../../Banner';
import { Link, useLocation } from 'react-router-dom';

const GizlilikKullanim: React.FC = () => {
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
      <span className="text-white font-bold">{lang === 'tr' ? 'Gizlilik Sözleşmesi Ve Kullanım Hakları' : 'Confidentiality Agreement & Usage Rights'}</span>
    </>
  );

  return (
    <div>
      <Header language={lang} setLanguage={setLanguage} />
      <Banner
        title={lang === 'tr' ? 'Gizlilik Sözleşmesi Ve Kullanım Hakları' : 'Confidentiality Agreement & Usage Rights'}
        description={lang === 'tr' ? 'Gizlilik ve kullanım haklarına dair esaslar.' : 'Principles regarding confidentiality and usage rights.'}
        breadcrumb={breadcrumb}
      />
      <div className="bg-white min-h-[40vh] py-16 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'tr' ? 'Gizlilik Sözleşmesi Ve Kullanım Hakları' : 'Confidentiality Agreement & Usage Rights'}</h2>
          <p className="text-gray-700 text-lg whitespace-pre-line">
            {lang === 'tr'
              ? 'Bu bir örnek Gizlilik Sözleşmesi ve Kullanım Hakları metnidir. Hizmetlerimizin ve içeriklerimizin kullanımı ile ilgili hak ve yükümlülükler burada belirtilmiştir.'
              : 'This is a sample Confidentiality Agreement & Usage Rights text. The rights and obligations regarding the use of our services and content are stated here.'}
          </p>
        </div>
      </div>
      <Footer language={lang} />
    </div>
  );
};

export default GizlilikKullanim; 