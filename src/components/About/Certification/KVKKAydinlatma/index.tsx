import React, { useEffect } from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import Banner from '../../Banner';
import { Link, useLocation } from 'react-router-dom';

const KVKKAydinlatma: React.FC = () => {
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
      <span className="text-white font-bold">{lang === 'tr' ? 'Tedarikçi ve Müşterilerin Sözleşme Süreçlerine Yönelik KVKK Aydınlatma Metni' : 'KVKK Disclosure for Supplier & Customer Contracts'}</span>
    </>
  );

  return (
    <div>
      <Header language={lang} setLanguage={setLanguage} />
      <Banner
        title={lang === 'tr' ? 'Tedarikçi ve Müşterilerin Sözleşme Süreçlerine Yönelik KVKK Aydınlatma Metni' : 'KVKK Disclosure for Supplier & Customer Contracts'}
        description={lang === 'tr' ? 'KVKK kapsamında tedarikçi ve müşteri sözleşmelerine yönelik aydınlatma metni.' : 'KVKK disclosure text for supplier and customer contracts.'}
        breadcrumb={breadcrumb}
      />
      <div className="bg-white min-h-[40vh] py-16 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'tr' ? 'Tedarikçi ve Müşterilerin Sözleşme Süreçlerine Yönelik KVKK Aydınlatma Metni' : 'KVKK Disclosure for Supplier & Customer Contracts'}</h2>
          <p className="text-gray-700 text-lg whitespace-pre-line">
            {lang === 'tr'
              ? 'Bu bir örnek KVKK Aydınlatma Metni metnidir. Kişisel verileriniz 6698 sayılı KVKK kapsamında korunur ve işlenir.'
              : 'This is a sample KVKK Disclosure for Supplier & Customer Contracts text. Your personal data is protected and processed in accordance with Law No. 6698.'}
          </p>
        </div>
      </div>
      <Footer language={lang} />
    </div>
  );
};

export default KVKKAydinlatma; 