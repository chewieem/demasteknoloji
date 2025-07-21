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
              <div className="bg-white rounded-xl shadow p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-blue-600">{lang === 'tr' ? 'Yatırımcılar' : 'Investors'}</h3>
                <p className="text-gray-700 mb-4">
                  {lang === 'tr' 
                    ? 'Teknoloji odaklı yatırım fırsatları ve stratejik ortaklıklar için başvuru yapın.'
                    : 'Apply for technology-focused investment opportunities and strategic partnerships.'}
                </p>
                <button 
                  onClick={() => handleTabChange('investors')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {lang === 'tr' ? 'Detaylı Bilgi' : 'Learn More'}
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-green-600">{lang === 'tr' ? 'Girişimciler' : 'Entrepreneurs'}</h3>
                <p className="text-gray-700 mb-4">
                  {lang === 'tr' 
                    ? 'Yenilikçi projeleriniz için destek ve işbirliği fırsatları arayın.'
                    : 'Seek support and collaboration opportunities for your innovative projects.'}
                </p>
                <button 
                  onClick={() => handleTabChange('entrepreneurs')}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {lang === 'tr' ? 'Detaylı Bilgi' : 'Learn More'}
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-purple-600">{lang === 'tr' ? 'Partnerler' : 'Partners'}</h3>
                <p className="text-gray-700 mb-4">
                  {lang === 'tr' 
                    ? 'Güçlü iş ortaklıkları ve teknoloji çözümleri için başvuru yapın.'
                    : 'Apply for strong business partnerships and technology solutions.'}
                </p>
                <button 
                  onClick={() => handleTabChange('partners')}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {lang === 'tr' ? 'Detaylı Bilgi' : 'Learn More'}
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-orange-600">{lang === 'tr' ? 'Basın' : 'Press'}</h3>
                <p className="text-gray-700 mb-4">
                  {lang === 'tr' 
                    ? 'Medya ilişkileri ve basın bilgileri için iletişime geçin.'
                    : 'Contact us for media relations and press information.'}
                </p>
                <button 
                  onClick={() => handleTabChange('press')}
                  className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors"
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
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {lang === 'tr' ? 'Yatırımcılar İçin Fırsatlar' : 'Opportunities for Investors'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                {lang === 'tr' ? 'Teknoloji Yatırımları' : 'Technology Investments'}
              </h3>
              <p className="text-gray-700 mb-4">
                {lang === 'tr'
                  ? 'Demaş Teknoloji, yenilikçi teknoloji çözümleri geliştiren bir şirket olarak, yatırımcılara büyüme potansiyeli yüksek projeler sunar. Yapay zeka, bulut teknolojileri ve dijital dönüşüm alanlarında uzmanlaşmış ekibimizle, geleceğin teknolojilerini bugünden geliştiriyoruz.'
                  : 'Demaş Technology, as a company developing innovative technology solutions, offers investors projects with high growth potential. With our team specialized in artificial intelligence, cloud technologies, and digital transformation, we develop tomorrow\'s technologies today.'}
              </p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                {lang === 'tr' ? 'Yatırım Başvurusu' : 'Investment Application'}
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                {lang === 'tr' ? 'Stratejik Ortaklıklar' : 'Strategic Partnerships'}
              </h3>
              <p className="text-gray-700 mb-4">
                {lang === 'tr'
                  ? 'Güçlü teknoloji altyapımız ve deneyimli ekibimizle, yatırımcılarla stratejik ortaklıklar kuruyoruz. Bu ortaklıklar sayesinde hem yatırımcılar hem de şirketimiz için sürdürülebilir büyüme fırsatları yaratıyoruz.'
                  : 'With our strong technology infrastructure and experienced team, we establish strategic partnerships with investors. Through these partnerships, we create sustainable growth opportunities for both investors and our company.'}
              </p>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
                {lang === 'tr' ? 'Ortaklık Başvurusu' : 'Partnership Application'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Girişimciler sekmesi */}
      {selectedTab === 'entrepreneurs' && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {lang === 'tr' ? 'Girişimciler İçin Destek' : 'Support for Entrepreneurs'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                {lang === 'tr' ? 'Teknoloji Mentörlüğü' : 'Technology Mentorship'}
              </h3>
              <p className="text-gray-700 mb-4">
                {lang === 'tr'
                  ? 'Deneyimli teknoloji uzmanlarımız, girişimcilere projelerini geliştirme ve pazara sunma konusunda mentörlük yapar. Teknik danışmanlık, pazar analizi ve strateji geliştirme konularında destek sağlıyoruz.'
                  : 'Our experienced technology experts provide mentorship to entrepreneurs in developing and bringing their projects to market. We provide support in technical consulting, market analysis, and strategy development.'}
              </p>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                {lang === 'tr' ? 'Mentörlük Başvurusu' : 'Mentorship Application'}
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                {lang === 'tr' ? 'İşbirliği Fırsatları' : 'Collaboration Opportunities'}
              </h3>
              <p className="text-gray-700 mb-4">
                {lang === 'tr'
                  ? 'Girişimcilerle işbirliği yaparak, yenilikçi projeleri hayata geçiriyoruz. Teknoloji altyapımızı ve uzmanlığımızı paylaşarak, girişimcilerin başarıya ulaşmasına yardımcı oluyoruz.'
                  : 'We bring innovative projects to life by collaborating with entrepreneurs. We help entrepreneurs achieve success by sharing our technology infrastructure and expertise.'}
              </p>
              <button className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors">
                {lang === 'tr' ? 'İşbirliği Başvurusu' : 'Collaboration Application'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Partnerler sekmesi */}
      {selectedTab === 'partners' && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {lang === 'tr' ? 'İş Ortaklıkları' : 'Business Partnerships'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                {lang === 'tr' ? 'Teknoloji Çözümleri' : 'Technology Solutions'}
              </h3>
              <p className="text-gray-700 mb-4">
                {lang === 'tr'
                  ? 'Partnerlerimizle birlikte, müşterilerine en iyi teknoloji çözümlerini sunuyoruz. Ortak geliştirme projeleri, entegrasyon çözümleri ve özel yazılım geliştirme hizmetleri sağlıyoruz.'
                  : 'Together with our partners, we offer the best technology solutions to our customers. We provide joint development projects, integration solutions, and custom software development services.'}
              </p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                {lang === 'tr' ? 'Partnerlik Başvurusu' : 'Partnership Application'}
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                {lang === 'tr' ? 'Pazar Erişimi' : 'Market Access'}
              </h3>
              <p className="text-gray-700 mb-4">
                {lang === 'tr'
                  ? 'Güçlü partner ağımız sayesinde, yeni pazarlara erişim sağlıyoruz. Ortak pazarlama kampanyaları, satış kanalları ve müşteri referansları ile büyüme fırsatları yaratıyoruz.'
                  : 'Thanks to our strong partner network, we provide access to new markets. We create growth opportunities through joint marketing campaigns, sales channels, and customer referrals.'}
              </p>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
                {lang === 'tr' ? 'Pazar Başvurusu' : 'Market Application'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Basın sekmesi */}
      {selectedTab === 'press' && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {lang === 'tr' ? 'Basın ve Medya' : 'Press and Media'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                {lang === 'tr' ? 'Basın Bültenleri' : 'Press Releases'}
              </h3>
              <p className="text-gray-700 mb-4">
                {lang === 'tr'
                  ? 'Şirketimizin en son gelişmeleri, ürün lansmanları ve önemli duyurular hakkında güncel bilgiler alabilirsiniz. Basın bültenlerimizi takip ederek, Demaş Teknoloji\'nin teknoloji dünyasındaki yeniliklerini öğrenebilirsiniz.'
                  : 'You can get up-to-date information about our company\'s latest developments, product launches, and important announcements. By following our press releases, you can learn about Demaş Technology\'s innovations in the technology world.'}
              </p>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                {lang === 'tr' ? 'Basın Bültenleri' : 'Press Releases'}
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                {lang === 'tr' ? 'Medya İletişimi' : 'Media Contact'}
              </h3>
              <p className="text-gray-700 mb-4">
                {lang === 'tr'
                  ? 'Basın mensupları ve medya temsilcileri için özel iletişim kanallarımız bulunmaktadır. Röportaj talepleri, bilgi istekleri ve medya ilişkileri için bizimle iletişime geçebilirsiniz.'
                  : 'We have special communication channels for press representatives and media representatives. You can contact us for interview requests, information requests, and media relations.'}
              </p>
              <button className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors">
                {lang === 'tr' ? 'İletişim Kur' : 'Contact Us'}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer language={lang} />
    </div>
  );
};

export default ApplicationCenter;