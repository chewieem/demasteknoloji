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
                ? 'Demaş Teknoloji, yapay zeka ve yapay zeka destekli yazılım çözümleri alanında uzmanlaşmış, yenilikçi bir teknoloji şirketidir. 2025 yılının 3. çeyreğinde Boğaziçi Teknopark\'ta faaliyetlerine başlayacak olan firmamız, Türkiye\'nin teknoloji ekosisteminde stratejik bir oyuncu olmayı hedeflemektedir.'
                : 'Demaş Technology is an innovative technology company specialized in artificial intelligence and AI-powered software solutions. Our company, which will start operations at Boğaziçi Technopark in the 3rd quarter of 2025, aims to become a strategic player in Turkey\'s technology ecosystem.',
              lang === 'tr'
                ? 'Kurucu ekibimiz; yapay zeka, makine öğrenimi, doğal dil işleme ve yazılım geliştirme konularında derin uzmanlığa sahip mühendis ve danışmanlardan oluşmaktadır. Bu güçlü teknik altyapı, Demaş Teknoloji\'nin henüz yeni bir girişim olmasına rağmen güvenilir ve yetkin bir iş ortağı olarak konumlanmasını sağlamaktadır.'
                : 'Our founding team consists of engineers and consultants with deep expertise in artificial intelligence, machine learning, natural language processing and software development. This strong technical infrastructure ensures that Demaş Technology is positioned as a reliable and competent business partner despite being a new venture.',
              lang === 'tr'
                ? 'Yapay zeka destekli çözümlerimizle; işletmelerin dijital dönüşümünü hızlandırıyor, operasyonel verimliliklerini artırıyor, veriye dayalı akıllı karar sistemleriyle iş süreçlerini yeniden şekillendiriyoruz.'
                : 'With our AI-powered solutions; we accelerate businesses digital transformation, increase their operational efficiency, and reshape business processes with data-driven intelligent decision systems.',
              lang === 'tr'
                ? 'Sunduğumuz çözümler, yalnızca bir yazılım hizmetinden ibaret değil; müşterilerimizle kurduğumuz stratejik ortaklık anlayışının bir yansımasıdır.'
                : 'The solutions we offer are not just a software service; they are a reflection of the strategic partnership approach we establish with our customers.',
              lang === 'tr'
                ? 'Boğaziçi Teknopark\'ta yer alacak olmamız; akademik iş birlikleri, Ar-Ge faaliyetleri ve sanayiyle entegrasyon açısından önemli avantajlar sunmaktadır. Bu güçlü konum, inovasyona dayalı sürdürülebilir teknolojiler geliştirmemize olanak sağlayacaktır.'
                : 'Our presence at Boğaziçi Technopark provides significant advantages in terms of academic collaborations, R&D activities and industry integration. This strong position will enable us to develop sustainable technologies based on innovation.'
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
                ? 'Türkiye\'nin lider yapay zeka teknolojileri şirketi olmak ve global pazarda söz sahibi, rekabetçi bir teknoloji markasına dönüşmek.'
                : 'To become Turkey\'s leading artificial intelligence technology company and transform into a competitive technology brand with a say in the global market.',
              lang === 'tr'
                ? 'İş dünyasının dijital dönüşümüne yön verecek yenilikçi çözümler geliştirerek, sürdürülebilir teknolojik değer yaratmak.'
                : 'To create sustainable technological value by developing innovative solutions that will guide the digital transformation of the business world.'
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
                        ? 'Yapay zeka ve makine öğrenimi teknolojileriyle işletmelere akıllı, esnek ve ölçeklenebilir çözümler sunmak.'
                        : 'To provide businesses with intelligent, flexible and scalable solutions using artificial intelligence and machine learning technologies.'}
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
                        ? 'Sektörel ihtiyaçlara özel entegre yazılım sistemleri geliştirmek.'
                        : 'To develop integrated software systems tailored to sectoral needs.'}
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
                        ? 'Müşteri odaklı yaklaşım ile kolay uygulanabilir, yüksek katma değer sağlayan sistemler üretmek.'
                        : 'To produce easy-to-implement, high-value-added systems with a customer-focused approach.'}
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