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
    description: 'Teknoloji dünyasında güvenilir çözüm ortağınız',
    footerLang: 'tr',
    headerLang: 'tr',
  },
  en: {
    title: 'About Demaş Technology',
    description: 'Your trusted technology solution partner',
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
                ? 'Demaş Teknoloji A.Ş., iş dünyasının dijital dönüşümüne öncülük eden, yenilikçi ve sürdürülebilir çözümler sunan bir teknoloji şirketidir. Yapay zeka destekli yazılım çözümlerimizle, kurumların operasyonel verimliliğini artırıyor, karar alma süreçlerini akıllı sistemlerle güçlendiriyor ve geleceğe daha sağlam adımlarla ilerlemelerine katkı sağlıyoruz.'
                : 'Demaş Technology Inc. is a technology company that leads the digital transformation of the business world, offering innovative and sustainable solutions. With our AI-powered software solutions, we increase the operational efficiency of institutions, strengthen decision-making processes with intelligent systems, and contribute to their progress towards the future with more solid steps.',
              lang === 'tr'
                ? 'Ar-Ge ve inovasyonu merkeze alan yaklaşımımızla; sektörel ihtiyaçlara özel, ölçeklenebilir ve entegre sistemler geliştiriyoruz. Müşterilerimize yalnızca bir yazılım değil, dijital geleceğe yönelik stratejik bir yol arkadaşlığı sunuyoruz.'
                : 'With our approach centered on R&D and innovation; we develop sector-specific, scalable and integrated systems. We offer our customers not just software, but strategic partnership for the digital future.',
              lang === 'tr'
                ? 'Veri analitiği, makine öğrenimi, doğal dil işleme ve otomasyon teknolojileri gibi alanlarda uzman ekibimizle, Türkiye\'nin ve dünyanın dört bir yanındaki kurumlara katma değer yaratıyoruz. Hedefimiz; teknolojiyi insanların ve kurumların yaşamını kolaylaştıran, dönüştüren ve güçlendiren bir araca dönüştürmek.'
                : 'With our expert team in areas such as data analytics, machine learning, natural language processing and automation technologies, we create added value for institutions across Turkey and around the world. Our goal is to transform technology into a tool that facilitates, transforms and empowers the lives of people and institutions.',
              lang === 'tr'
                ? 'Demaş Teknoloji A.Ş. ile dijital dünyada fark yaratmaya hazır olun.'
                : 'Be ready to make a difference in the digital world with Demaş Technology Inc.'
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
                ? 'Geleceği bugünden şekillendiren, yapay zeka tabanlı yazılım çözümleriyle global ölçekte fark yaratan bir teknoloji şirketi olmak.'
                : 'To be a technology company that shapes the future from today, making a difference on a global scale with AI-based software solutions.',
              lang === 'tr'
                ? 'İş ortaklarımızın dijital dönüşüm yolculuğunda güvenilir bir çözüm ortağı olarak, sürdürülebilir ve yenilikçi teknolojilerle değer üretmek.'
                : 'To create value with sustainable and innovative technologies as a trusted solution partner in our business partners digital transformation journey.'
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
                        ? 'Yapay zeka ve ileri teknoloji altyapılarıyla işletmelerin karar alma, üretim ve yönetim süreçlerini optimize etmek,'
                        : 'To optimize businesses decision-making, production and management processes with artificial intelligence and advanced technology infrastructures,'}
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
                        ? 'Sektörel ihtiyaçlara özel, esnek ve ölçeklenebilir yazılım çözümleri geliştirmek,'
                        : 'To develop sector-specific, flexible and scalable software solutions,'}
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
                        ? 'Müşteri odaklı yaklaşımımızla iş verimliliğini artıran, kolay uygulanabilir ve entegre sistemler sunmak,'
                        : 'To provide easy-to-implement and integrated systems that increase business efficiency with our customer-focused approach,'}
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
                        ? 'Ar-Ge ve inovasyonu merkezimize alarak hem yerel hem küresel pazarda teknolojik gelişime katkı sağlamak.'
                        : 'To contribute to technological development in both local and global markets by centering R&D and innovation.'}
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