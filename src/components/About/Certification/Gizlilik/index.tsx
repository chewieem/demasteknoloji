import React from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import { Link, useLocation } from 'react-router-dom';

const Gizlilik: React.FC = () => {
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

  return (
    <div>
      <Header language={lang} setLanguage={setLanguage} />
      <div className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm flex items-center space-x-2 mb-4">
            <Link to={`/${lang}`} className="text-gray-400 hover:text-white transition-colors">
              {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
            </Link>
            <span className="text-gray-400">/</span>
            <Link to={`/${lang}/about/certification`} className="text-gray-400 hover:text-white transition-colors">
              {lang === 'tr' ? 'Sertifikasyon ve Dökümantasyon' : 'Certification & Documentation'}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">{lang === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{lang === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}</h1>
          <p className="text-gray-300 text-lg">
            {lang === 'tr' ? 'Aşağıda ilgili politika metnini inceleyebilirsiniz.' : 'You can review the policy text below.'}
          </p>
        </div>
      </div>
      <div className="bg-white min-h-[40vh] py-16 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}</h2>
          <p className="text-gray-700 text-lg whitespace-pre-line">
            {lang === 'tr'
              ? 'Bu bir örnek Gizlilik Politikası metnidir. Kişisel verilerinizin gizliliği ve güvenliği bizim için önemlidir. Verileriniz yasal mevzuata uygun şekilde işlenir ve korunur.'
              : 'This is a sample Privacy Policy text. The privacy and security of your personal data are important to us. Your data is processed and protected in accordance with legal regulations.'}
          </p>
        </div>
      </div>
      <Footer language={lang} />
    </div>
  );
};

export default Gizlilik; 