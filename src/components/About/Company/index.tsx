import React, { useState, useEffect } from 'react';
import Header from '../../Header';
import Banner from '../Banner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../Footer';
import HeroImageTextSection from '../../TextSections/HeroImageTextSection';
import { 
  CpuChipIcon, 
  PuzzlePieceIcon, 
  UserGroupIcon, 
  LightBulbIcon 
} from '@heroicons/react/24/outline';

const TABS = [
  { key: 'overview', tr: 'Genel Bakış', en: 'Overview', path: '' },
  { key: 'mission', tr: 'Misyon & Vizyon', en: 'Mission & Vision', path: 'mission' },
];

const content = {
  tr: {
    title: 'Demaş Teknoloji Hakkında',
    description: 'Yapay Zeka Destekli Yazılım Çözümleri',
    footerLang: 'tr',
    headerLang: 'tr',
  },
  en: {
    title: 'About Demaş Technology',
    description: 'AI-Powered Software Solutions',
    footerLang: 'en',
    headerLang: 'en',
  },
};

const Company: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  // URL'den aktif sekmeyi belirle
  const pathParts = location.pathname.split('/');
  const tabPath = pathParts[pathParts.length - 1];
  let initialTab = 'overview';
  if (tabPath === 'mission') initialTab = 'mission';
  const [selectedTab, setSelectedTab] = useState(initialTab);

  // Sekme değişince URL'yi güncelle
  const handleTabChange = (key: string) => {
    setSelectedTab(key);
    const tabObj = TABS.find(t => t.key === key);
    let base = `/${lang}/about/company`;
    if (tabObj && tabObj.path) base += `/${tabObj.path}`;
    navigate(base, { replace: true });
  };

  // URL değişirse sekmeyi güncelle
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const tabPath = pathParts[pathParts.length - 1];
    if (tabPath === 'mission') setSelectedTab('mission');
    else setSelectedTab('overview');
  }, [location.pathname]);

  // Breadcrumb'u dinamik oluştur
  const breadcrumb = (
    <div className="mt-1 mb-2 text-sm flex items-center space-x-2">
      <Link to={`/${lang}`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <Link to={`/${lang}/about/company`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Demaş Teknoloji Hakkında' : 'About Demaş Technology'}</Link>
      {selectedTab !== 'overview' && (
        <>
          <span className="text-gray-400 font-bold">/</span>
          <span className="text-white font-bold">{lang === 'tr' ? 'Misyon & Vizyon' : 'Mission & Vision'}</span>
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
            title={lang === 'tr' ? 'Hakkımızda' : 'About Us'}
            style={{ textAlign: 'justify' }}
            paragraphs={[
              lang === 'tr'
                ? 'Demaş Teknoloji, yapay zeka alanında ve yapay zeka destekli yazılım çözümleri konusunda uzmanlaşmış, yenilikçi bir teknoloji şirketidir. 2025 yılının 3. çeyreğinde Boğaziçi Teknopark\'ta faaliyetlerine başlayacak olan şirketimiz, Türkiye\'nin teknoloji ekosisteminde önemli bir rol üstlenmeye hazırlanmaktadır.'
                : 'Demaş Technology is an innovative technology company specialized in artificial intelligence and AI-powered software solutions. Our company, which will start operations at Boğaziçi Technopark in the 3rd quarter of 2025, is preparing to play an important role in Turkey\'s technology ecosystem.',
              lang === 'tr'
                ? 'Kurucu ekibimiz, yapay zeka, makine öğrenimi, doğal dil işleme ve yazılım geliştirme alanlarında derin deneyime sahip uzmanlardan oluşmaktadır. Bu deneyim, şirketimizin yeni kurulmasına rağmen, sektörde güvenilir ve yetkin bir partner olarak konumlanmasını sağlamaktadır.'
                : 'Our founding team consists of experts with deep experience in artificial intelligence, machine learning, natural language processing and software development. This experience ensures that our company is positioned as a reliable and competent partner in the sector, despite being newly established.',
              lang === 'tr'
                ? 'Yapay zeka destekli yazılım çözümlerimizle, işletmelerin dijital dönüşüm süreçlerini hızlandırıyor, operasyonel verimliliği artırıyor ve karar alma süreçlerini akıllı sistemlerle güçlendiriyoruz. Müşterilerimize sadece teknoloji değil, stratejik bir iş ortağı olarak değer katıyoruz.'
                : 'With our AI-powered software solutions, we accelerate businesses digital transformation processes, increase operational efficiency and strengthen decision-making processes with intelligent systems. We add value to our customers not only as technology, but as a strategic business partner.',
              lang === 'tr'
                ? 'Boğaziçi Teknopark\'ın prestijli ortamında faaliyet gösterecek olmamız, hem akademik işbirlikleri hem de endüstriyel ortaklıklar açısından büyük avantajlar sağlamaktadır. Bu konum, şirketimizin Ar-Ge faaliyetlerini destekleyecek ve yenilikçi çözümler geliştirmemize katkı sağlayacaktır.'
                : 'Operating in the prestigious environment of Boğaziçi Technopark provides great advantages both in terms of academic collaborations and industrial partnerships. This location will support our company\'s R&D activities and contribute to developing innovative solutions.'
            ]}
          />
        </>
      )}
      {/* Misyon & Vizyon sekmesi seçiliyse özel section'lar */}
      {selectedTab === 'mission' && (
        <>
          <HeroImageTextSection
            title={lang === 'tr' ? 'Vizyonumuz' : 'Our Vision'}
            style={{ textAlign: 'justify' }}
            paragraphs={[
              lang === 'tr'
                ? 'Türkiye\'nin önde gelen yapay zeka teknolojileri şirketi olmak ve global pazarda söz sahibi bir teknoloji markası haline gelmek.'
                : 'To become Turkey\'s leading artificial intelligence technology company and a technology brand with a say in the global market.',
              lang === 'tr'
                ? 'Yapay zeka alanında yenilikçi çözümler geliştirerek, iş dünyasının dijital dönüşümüne öncülük etmek ve sürdürülebilir teknolojik değer yaratmak.'
                : 'To lead the digital transformation of the business world and create sustainable technological value by developing innovative solutions in the field of artificial intelligence.'
            ]}
          />
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h1 className="text-2xl md:text-4xl font-bold text-center mb-16 leading-snug">
                {lang === 'tr' ? 'Misyonumuz' : 'Our Mission'}
              </h1>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CpuChipIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 text-center">
                      {lang === 'tr'
                        ? 'Yapay zeka ve makine öğrenimi teknolojileriyle işletmelerin verimliliğini artıran, akıllı ve ölçeklenebilir yazılım çözümleri geliştirmek,'
                        : 'To develop intelligent and scalable software solutions that increase business efficiency with artificial intelligence and machine learning technologies,'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <PuzzlePieceIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 text-center">
                      {lang === 'tr'
                        ? 'Sektörel ihtiyaçlara özel, esnek ve entegre yapay zeka çözümleri sunmak,'
                        : 'To offer sector-specific, flexible and integrated artificial intelligence solutions,'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <UserGroupIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 text-center">
                      {lang === 'tr'
                        ? 'Müşteri odaklı yaklaşımımızla, kolay uygulanabilir ve değer yaratan sistemler geliştirmek,'
                        : 'To develop easy-to-implement and value-creating systems with our customer-focused approach,'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <LightBulbIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 text-center">
                      {lang === 'tr'
                        ? 'Ar-Ge ve inovasyonu merkeze alarak, hem yerel hem küresel pazarda teknolojik liderlik sağlamak.'
                        : 'To provide technological leadership in both local and global markets by centering R&D and innovation.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <Footer language={lang} />
    </div>
  );
};

export default Company; 