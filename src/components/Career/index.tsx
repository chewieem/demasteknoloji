import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Banner from './Banner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import HeroImageTextSection from '../TextSections/HeroImageTextSection';

const TABS = [
  { key: 'overview', tr: 'Başvuru Merkezi', en: 'Application Center', path: '' },
  { key: 'investors', tr: 'Yatırımcılar', en: 'Investors', path: 'investors' },
  { key: 'entrepreneurs', tr: 'Girişimciler', en: 'Entrepreneurs', path: 'entrepreneurs' },
  { key: 'partners', tr: 'Partnerler', en: 'Partners', path: 'partners' },
  { key: 'press', tr: 'Basın', en: 'Press', path: 'press' },
];

const content = {
  tr: {
    title: 'Başvuru Merkezi',
    description: 'Demaş Teknoloji ile işbirliği fırsatlarını keşfedin',
    footerLang: 'tr',
    headerLang: 'tr',
  },
  en: {
    title: 'Application Center',
    description: 'Discover collaboration opportunities with Demaş Technology',
    footerLang: 'en',
    headerLang: 'en',
  },
};

const ApplicationCenter: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  // URL'den aktif sekmeyi belirle
  const pathParts = location.pathname.split('/');
  const tabPath = pathParts[pathParts.length - 1];
  let initialTab = 'overview';
  if (tabPath === 'investors') initialTab = 'investors';
  else if (tabPath === 'entrepreneurs') initialTab = 'entrepreneurs';
  else if (tabPath === 'partners') initialTab = 'partners';
  else if (tabPath === 'press') initialTab = 'press';
  const [selectedTab, setSelectedTab] = useState(initialTab);

  // Sekme değişince URL'yi güncelle
  const handleTabChange = (key: string) => {
    setSelectedTab(key);
    const tabObj = TABS.find(t => t.key === key);
    let base = `/${lang}/career`;
    if (tabObj && tabObj.path) base += `/${tabObj.path}`;
    navigate(base, { replace: true });
  };

  // URL değişirse sekmeyi güncelle
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const tabPath = pathParts[pathParts.length - 1];
    if (tabPath === 'investors') setSelectedTab('investors');
    else if (tabPath === 'entrepreneurs') setSelectedTab('entrepreneurs');
    else if (tabPath === 'partners') setSelectedTab('partners');
    else if (tabPath === 'press') setSelectedTab('press');
    else setSelectedTab('overview');
  }, [location.pathname]);

  // Breadcrumb'u dinamik oluştur
  const breadcrumb = (
    <div className="mt-1 mb-2 text-sm flex items-center space-x-2">
      <Link to={`/${lang}`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <Link to={`/${lang}/career`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Başvuru Merkezi' : 'Application Center'}</Link>
      {selectedTab !== 'overview' && (
        <>
          <span className="text-gray-400 font-bold">/</span>
          <span className="text-white font-bold">
            {lang === 'tr' 
              ? (selectedTab === 'investors' ? 'Yatırımcılar' : 
                 selectedTab === 'entrepreneurs' ? 'Girişimciler' : 
                 selectedTab === 'partners' ? 'Partnerler' : 'Basın')
              : (selectedTab === 'investors' ? 'Investors' : 
                 selectedTab === 'entrepreneurs' ? 'Entrepreneurs' : 
                 selectedTab === 'partners' ? 'Partners' : 'Press')
            }
          </span>
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
      
      {/* Başvuru Merkezi sekmesi seçiliyse özel section'lar */}
      {selectedTab === 'overview' && (
        <>
          {/* HeroImageTextSection ile özel başvuru merkezi metni */}
          <HeroImageTextSection
            title={lang === 'tr' ? 'Demaş Teknoloji Başvuru Merkezi' : 'Demaş Technology Application Center'}
            paragraphs={[
              lang === 'tr'
                ? `Demaş Teknoloji Başvuru Merkezi, yatırımcılardan girişimcilere, partnerlerden basın mensuplarına kadar tüm paydaşlarımız için kapsamlı bir işbirliği platformu sunar. Teknoloji odaklı çözümlerimiz ve yenilikçi yaklaşımımızla, farklı sektörlerden iş ortaklarımızla güçlü bağlar kuruyoruz.`
                : `Demaş Technology Application Center provides a comprehensive collaboration platform for all our stakeholders, from investors to entrepreneurs, from partners to press representatives. With our technology-focused solutions and innovative approach, we build strong bonds with business partners from different sectors.`
            ]}
          />
          {/* Başvuru kategorileri */}
          <section className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {lang === 'tr' ? 'Başvuru Kategorileri' : 'Application Categories'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow p-6 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-blue-600">{lang === 'tr' ? 'Yatırımcılar' : 'Investors'}</h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  {lang === 'tr' 
                    ? 'Teknoloji odaklı yatırım fırsatları ve stratejik ortaklıklar için başvuru yapın.'
                    : 'Apply for technology-focused investment opportunities and strategic partnerships.'}
                </p>
                <button 
                  onClick={() => handleTabChange('investors')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-auto"
                >
                  {lang === 'tr' ? 'Detaylı Bilgi' : 'Learn More'}
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-green-600">{lang === 'tr' ? 'Girişimciler' : 'Entrepreneurs'}</h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  {lang === 'tr' 
                    ? 'Yenilikçi projeleriniz için destek ve işbirliği fırsatları arayın.'
                    : 'Seek support and collaboration opportunities for your innovative projects.'}
                </p>
                <button 
                  onClick={() => handleTabChange('entrepreneurs')}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors mt-auto"
                >
                  {lang === 'tr' ? 'Detaylı Bilgi' : 'Learn More'}
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-purple-600">{lang === 'tr' ? 'Partnerler' : 'Partners'}</h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  {lang === 'tr' 
                    ? 'Güçlü iş ortaklıkları ve teknoloji çözümleri için başvuru yapın.'
                    : 'Apply for strong business partnerships and technology solutions.'}
                </p>
                <button 
                  onClick={() => handleTabChange('partners')}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors mt-auto"
                >
                  {lang === 'tr' ? 'Detaylı Bilgi' : 'Learn More'}
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-orange-600">{lang === 'tr' ? 'Basın' : 'Press'}</h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  {lang === 'tr' 
                    ? 'Medya ilişkileri ve basın bilgileri için iletişime geçin.'
                    : 'Contact us for media relations and press information.'}
                </p>
                <button 
                  onClick={() => handleTabChange('press')}
                  className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors mt-auto"
                >
                  {lang === 'tr' ? 'Detaylı Bilgi' : 'Learn More'}
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Yatırımcılar sekmesi */}
      {selectedTab === 'investors' && (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {lang === 'tr' ? 'Yatırımcı Başvuru Formu' : 'Investor Application Form'}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'Ad Soyad' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? 'Adınız ve soyadınız' : 'Your full name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'E-posta' : 'Email'}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? 'ornek@email.com' : 'example@email.com'}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'Telefon' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? '+90 5XX XXX XX XX' : '+90 5XX XXX XX XX'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'Şirket Adı' : 'Company Name'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? 'Şirketinizin adı' : 'Your company name'}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'tr' ? 'Yatırım Alanı' : 'Investment Area'}
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">{lang === 'tr' ? 'Seçiniz' : 'Select'}</option>
                  <option value="ai">{lang === 'tr' ? 'Yapay Zeka' : 'Artificial Intelligence'}</option>
                  <option value="cloud">{lang === 'tr' ? 'Bulut Teknolojileri' : 'Cloud Technologies'}</option>
                  <option value="mobile">{lang === 'tr' ? 'Mobil Teknolojiler' : 'Mobile Technologies'}</option>
                  <option value="digital">{lang === 'tr' ? 'Dijital Dönüşüm' : 'Digital Transformation'}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'tr' ? 'Yatırım Miktarı' : 'Investment Amount'}
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">{lang === 'tr' ? 'Seçiniz' : 'Select'}</option>
                  <option value="100k-500k">{lang === 'tr' ? '100K - 500K TL' : '100K - 500K TL'}</option>
                  <option value="500k-1m">{lang === 'tr' ? '500K - 1M TL' : '500K - 1M TL'}</option>
                  <option value="1m-5m">{lang === 'tr' ? '1M - 5M TL' : '1M - 5M TL'}</option>
                  <option value="5m+">{lang === 'tr' ? '5M+ TL' : '5M+ TL'}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'tr' ? 'Mesaj' : 'Message'}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={lang === 'tr' ? 'Yatırım beklentileriniz ve sorularınız...' : 'Your investment expectations and questions...'}
                ></textarea>
            </div>
            
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {lang === 'tr' ? 'Başvuru Gönder' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Girişimciler sekmesi */}
      {selectedTab === 'entrepreneurs' && (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {lang === 'tr' ? 'Girişimci Başvuru Formu' : 'Entrepreneur Application Form'}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'Ad Soyad' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? 'Adınız ve soyadınız' : 'Your full name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'E-posta' : 'Email'}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? 'ornek@email.com' : 'example@email.com'}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'Telefon' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? '+90 5XX XXX XX XX' : '+90 5XX XXX XX XX'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'Girişim Adı' : 'Startup Name'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? 'Girişiminizin adı' : 'Your startup name'}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'tr' ? 'Proje Kategorisi' : 'Project Category'}
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">{lang === 'tr' ? 'Seçiniz' : 'Select'}</option>
                  <option value="fintech">{lang === 'tr' ? 'Fintech' : 'Fintech'}</option>
                  <option value="healthtech">{lang === 'tr' ? 'Healthtech' : 'Healthtech'}</option>
                  <option value="edutech">{lang === 'tr' ? 'Edutech' : 'Edutech'}</option>
                  <option value="ecommerce">{lang === 'tr' ? 'E-ticaret' : 'E-commerce'}</option>
                  <option value="ai">{lang === 'tr' ? 'Yapay Zeka' : 'Artificial Intelligence'}</option>
                  <option value="other">{lang === 'tr' ? 'Diğer' : 'Other'}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'tr' ? 'Geliştirme Aşaması' : 'Development Stage'}
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">{lang === 'tr' ? 'Seçiniz' : 'Select'}</option>
                  <option value="idea">{lang === 'tr' ? 'Fikir Aşaması' : 'Idea Stage'}</option>
                  <option value="prototype">{lang === 'tr' ? 'Prototip' : 'Prototype'}</option>
                  <option value="mvp">{lang === 'tr' ? 'MVP' : 'MVP'}</option>
                  <option value="market">{lang === 'tr' ? 'Pazarda' : 'In Market'}</option>
                  <option value="scaling">{lang === 'tr' ? 'Ölçeklendirme' : 'Scaling'}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'tr' ? 'Proje Açıklaması' : 'Project Description'}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={lang === 'tr' ? 'Projenizi detaylı olarak açıklayın...' : 'Describe your project in detail...'}
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'tr' ? 'İhtiyaç Duyduğunuz Destek' : 'Support You Need'}
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{lang === 'tr' ? 'Teknik Danışmanlık' : 'Technical Consulting'}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{lang === 'tr' ? 'Mentörlük' : 'Mentorship'}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{lang === 'tr' ? 'Yatırım' : 'Investment'}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{lang === 'tr' ? 'Pazar Erişimi' : 'Market Access'}</span>
                  </label>
                </div>
            </div>
            
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                {lang === 'tr' ? 'Başvuru Gönder' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Partnerler sekmesi */}
      {selectedTab === 'partners' && (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {lang === 'tr' ? 'Partner Başvuru Formu' : 'Partner Application Form'}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'Ad Soyad' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? 'Adınız ve soyadınız' : 'Your full name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'E-posta' : 'Email'}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? 'ornek@email.com' : 'example@email.com'}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'Telefon' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? '+90 5XX XXX XX XX' : '+90 5XX XXX XX XX'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'Şirket Adı' : 'Company Name'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? 'Şirketinizin adı' : 'Your company name'}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'tr' ? 'Şirket Türü' : 'Company Type'}
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="">{lang === 'tr' ? 'Seçiniz' : 'Select'}</option>
                  <option value="technology">{lang === 'tr' ? 'Teknoloji Şirketi' : 'Technology Company'}</option>
                  <option value="consulting">{lang === 'tr' ? 'Danışmanlık Şirketi' : 'Consulting Company'}</option>
                  <option value="service">{lang === 'tr' ? 'Hizmet Şirketi' : 'Service Company'}</option>
                  <option value="manufacturing">{lang === 'tr' ? 'Üretim Şirketi' : 'Manufacturing Company'}</option>
                  <option value="other">{lang === 'tr' ? 'Diğer' : 'Other'}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'tr' ? 'İşbirliği Alanı' : 'Collaboration Area'}
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{lang === 'tr' ? 'Yazılım Geliştirme' : 'Software Development'}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{lang === 'tr' ? 'Sistem Entegrasyonu' : 'System Integration'}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{lang === 'tr' ? 'Danışmanlık Hizmetleri' : 'Consulting Services'}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{lang === 'tr' ? 'Pazarlama ve Satış' : 'Marketing and Sales'}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{lang === 'tr' ? 'Eğitim ve Destek' : 'Training and Support'}</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'tr' ? 'Şirket Açıklaması' : 'Company Description'}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder={lang === 'tr' ? 'Şirketinizi ve işbirliği beklentilerinizi açıklayın...' : 'Describe your company and collaboration expectations...'}
                ></textarea>
            </div>
            
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                {lang === 'tr' ? 'Başvuru Gönder' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Basın sekmesi */}
      {selectedTab === 'press' && (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {lang === 'tr' ? 'Basın İletişim Formu' : 'Press Contact Form'}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'Ad Soyad' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? 'Adınız ve soyadınız' : 'Your full name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'E-posta' : 'Email'}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? 'ornek@email.com' : 'example@email.com'}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'Telefon' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? '+90 5XX XXX XX XX' : '+90 5XX XXX XX XX'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'tr' ? 'Medya Kurumu' : 'Media Organization'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder={lang === 'tr' ? 'Çalıştığınız medya kurumu' : 'Your media organization'}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'tr' ? 'İletişim Türü' : 'Contact Type'}
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option value="">{lang === 'tr' ? 'Seçiniz' : 'Select'}</option>
                  <option value="interview">{lang === 'tr' ? 'Röportaj Talebi' : 'Interview Request'}</option>
                  <option value="press-release">{lang === 'tr' ? 'Basın Bülteni' : 'Press Release'}</option>
                  <option value="information">{lang === 'tr' ? 'Bilgi Talebi' : 'Information Request'}</option>
                  <option value="event">{lang === 'tr' ? 'Etkinlik Daveti' : 'Event Invitation'}</option>
                  <option value="other">{lang === 'tr' ? 'Diğer' : 'Other'}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'tr' ? 'Konu' : 'Subject'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder={lang === 'tr' ? 'İletişim konunuz' : 'Your contact subject'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'tr' ? 'Mesaj' : 'Message'}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder={lang === 'tr' ? 'Detaylı mesajınız...' : 'Your detailed message...'}
                ></textarea>
            </div>
            
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                {lang === 'tr' ? 'Mesaj Gönder' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer language={lang} />
    </div>
  );
};

export default ApplicationCenter;