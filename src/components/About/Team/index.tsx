import React, { useState, useEffect } from 'react';
import Header from '../../Header';
import Banner from '../Banner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../Footer';
import HeroImageTextSection from '../../TextSections/HeroImageTextSection';
import { 
  UserGroupIcon, 
  AcademicCapIcon, 
  ChartBarIcon, 
  CogIcon,
  LightBulbIcon,
  HeartIcon,
  GlobeAltIcon,
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const TABS = [
  { key: 'overview', tr: 'Genel Bakış', en: 'Overview', path: '' },
  { key: 'management', tr: 'Yönetim', en: 'Management', path: 'management' },
  { key: 'team', tr: 'Ekibimiz', en: 'Our Team', path: 'team' },
];

const content = {
  tr: {
    title: 'Yönetim ve Ekibimiz',
    description: 'Deneyimli ekibimizle müşterilerimize en iyi hizmeti sunuyoruz',
    footerLang: 'tr',
    headerLang: 'tr',
  },
  en: {
    title: 'Management & Our Team',
    description: 'We provide the best service to our customers with our experienced team',
    footerLang: 'en',
    headerLang: 'en',
  },
};

const Team: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  // URL'den aktif sekmeyi belirle
  const pathParts = location.pathname.split('/');
  const tabPath = pathParts[pathParts.length - 1];
  let initialTab = 'overview';
  if (tabPath === 'management') initialTab = 'management';
  else if (tabPath === 'team' && pathParts.length > 4) initialTab = 'team';
  else initialTab = 'overview';
  const [selectedTab, setSelectedTab] = useState(initialTab);

  // Sekme değişince URL'yi güncelle
  const handleTabChange = (key: string) => {
    setSelectedTab(key);
    const tabObj = TABS.find(t => t.key === key);
    let base = `/${lang}/about/team`;
    if (tabObj && tabObj.path && tabObj.path !== '') base += `/${tabObj.path}`;
    navigate(base, { replace: true });
  };

  // URL değişirse sekmeyi güncelle
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const tabPath = pathParts[pathParts.length - 1];
    if (tabPath === 'management') setSelectedTab('management');
    else if (tabPath === 'team' && pathParts.length > 4) setSelectedTab('team');
    else setSelectedTab('overview');
  }, [location.pathname]);

  // Breadcrumb'u dinamik oluştur
  const breadcrumb = (
    <div className="mt-1 mb-2 text-sm flex items-center space-x-2">
      <Link to={`/${lang}`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <Link to={`/${lang}/about/team`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Yönetim ve Ekibimiz' : 'Management & Our Team'}</Link>
      {selectedTab !== 'overview' && (
        <>
          <span className="text-gray-400 font-bold">/</span>
          <span className="text-white font-bold">{lang === 'tr' ? (selectedTab === 'management' ? 'Yönetim' : 'Ekibimiz') : (selectedTab === 'management' ? 'Management' : 'Our Team')}</span>
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
            title={lang === 'tr' ? 'Ekibimiz' : 'Our Team'}
            style={{ textAlign: 'justify' }}
            paragraphs={[
              lang === 'tr'
                ? 'Demaş Teknoloji A.Ş., yalnızca geliştirdiği yenilikçi teknolojilerle değil; aynı zamanda alanında uzman, vizyon sahibi ve tutkulu ekibiyle de fark yaratmaktadır.'
                : 'Demaş Technology Inc. makes a difference not only with the innovative technologies it develops; but also with its expert, visionary and passionate team.',
              lang === 'tr'
                ? 'Her biri kendi uzmanlık alanında derin bilgi ve deneyime sahip kadromuz, yapay zeka destekli çözümler geliştirerek işletmelere katma değer sağlamak amacıyla çalışır.'
                : 'Our staff, each with deep knowledge and experience in their own field of expertise, works to provide added value to businesses by developing AI-powered solutions.',
              lang === 'tr'
                ? 'Biz teknolojinin arkasında insanın gücünün olduğuna inanıyoruz. Bu nedenle ekip kültürümüzü güven, iş birliği ve sürekli gelişim ilkeleri üzerine inşa ediyoruz.'
                : 'We believe in the power of people behind technology. That\'s why we build our team culture on the principles of trust, collaboration and continuous improvement.',
              lang === 'tr'
                ? 'Takım çalışması, öğrenme ve inovasyon kültürümüz sayesinde her projede mükemmelliği hedefliyoruz. Uzmanlık alanlarımız; yapay zeka, makine öğrenimi, web geliştirme, mobil teknolojiler ve daha fazlasını kapsayan geniş bir yelpazeye yayılmış durumdadır.'
                : 'Thanks to our culture of teamwork, learning and innovation, we aim for excellence in every project. Our areas of expertise are spread across a wide range covering artificial intelligence, machine learning, web development, mobile technologies and more.'
            ]}
          />
        </>
      )}
      {/* Yönetim sekmesi seçiliyse özel section'lar */}
      {selectedTab === 'management' && (
        <>
          <HeroImageTextSection
            title={lang === 'tr' ? 'Yönetim Ekibimiz' : 'Our Management Team'}
            style={{ textAlign: 'justify' }}
            paragraphs={[
              lang === 'tr'
                ? 'Demaş Teknoloji A.Ş.\'nin başarısının temelinde, teknolojiyi stratejik vizyonla buluşturan, deneyimli ve dinamik bir yönetim kadrosu yer almaktadır.'
                : 'At the foundation of Demaş Technology Inc.\'s success lies an experienced and dynamic management team that brings together technology with strategic vision.',
              lang === 'tr'
                ? 'Her biri kendi alanında uzun yıllara dayanan birikime sahip yöneticilerimiz; şirketimizin stratejik hedeflerini belirlerken, verimlilik, teknolojik liderlik ve sürdürülebilir büyüme ilkeleri doğrultusunda hareket eder.'
                : 'Our managers, each with years of accumulation in their own fields; act in line with the principles of efficiency, technological leadership and sustainable growth while determining our company\'s strategic goals.',
              lang === 'tr'
                ? 'Yönetim kadromuz; şeffaflık, etik değerler ve takım ruhunu esas alarak, yalnızca bugünün değil, geleceğin teknolojisini şekillendirme hedefiyle ilerlemektedir.'
                : 'Our management team; proceeds with the goal of shaping not only today\'s but also tomorrow\'s technology, based on transparency, ethical values and team spirit.'
            ]}
          />
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white rounded-xl shadow-lg p-3 md:p-5 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-2 md:mb-3 rounded-full overflow-hidden">
                    <img 
                      src={process.env.PUBLIC_URL + '/ack.png'} 
                      alt={lang === 'tr' ? 'Ahmet Cumhur Kitiş' : 'Ahmet Cumhur Kitis'} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{lang === 'tr' ? 'Yönetim Kurulu Başkanı' : 'Chairman of the Board'}</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 font-semibold text-sm md:text-base">{lang === 'tr' ? 'Ahmet Cumhur Kitiş' : 'Ahmet Cumhur Kitis'}</p>
                  
                  {/* Normal durumda gösterilen metin */}
                  <div className="group-hover:hidden">
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {lang === 'tr' 
                        ? 'Ahmet Cumhur Kitiş, teknoloji sektöründe uzun yıllara dayanan tecrübesiyle Demaş Teknoloji A.Ş.\'nin vizyoner lideridir. Yapay zeka ve dijital dönüşüm konularındaki öncü yaklaşımlarıyla, şirketin stratejik büyüme hedeflerini şekillendirmekte ve teknoloji tabanlı çözümlerin geliştirilmesinde aktif rol üstlenmektedir.'
                        : 'Ahmet Cumhur Kitis is the visionary leader of Demaş Technology Inc. with his long-standing experience in the technology sector. With his pioneering approaches in artificial intelligence and digital transformation, he shapes the company\'s strategic growth goals and takes an active role in developing technology-based solutions.'
                      }
                    </p>
                  </div>

                  {/* Hover durumunda gösterilen iletişim bilgileri */}
                  <div className="hidden group-hover:block">
                    <div className="mb-4">
                      <div className="flex items-center justify-center mb-3">
                        <EnvelopeIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="mailto:ack@demasteknoloji.com" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          ack@demasteknoloji.com
                        </a>
                      </div>
                      <div className="flex items-center justify-center">
                        <PhoneIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="tel:+902121234567" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          +90 (212) 123 45 67
                        </a>
                      </div>
                    </div>

                    {/* Sosyal Medya İkonları */}
                    <div className="flex justify-center space-x-4">
                      <a 
                        href="https://linkedin.com/in/ahmetcumhurkitis" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://twitter.com/ahmetcumhurkitis" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-3 md:p-5 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-2 md:mb-3 rounded-full overflow-hidden">
                    <img 
                      src={process.env.PUBLIC_URL + '/dys.png'} 
                      alt={lang === 'tr' ? 'D. Yüksel Sinangil' : 'D. Yuksel Sinangil'} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{lang === 'tr' ? 'Genel Müdür' : 'General Manager'}</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 font-semibold text-sm md:text-base">{lang === 'tr' ? 'D. Yüksel Sinangil' : 'D. Yuksel Sinangil'}</p>
                  
                  {/* Normal durumda gösterilen metin */}
                  <div className="group-hover:hidden">
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {lang === 'tr' 
                        ? 'D. Yüksel Sinangil, yazılım geliştirme ve şirket yönetimi konularındaki derin uzmanlığıyla, Demaş Teknoloji A.Ş.\'nin operasyonel mükemmelliğini sağlamaktadır. Müşteri odaklı yaklaşımı ve yenilikçi çözüm anlayışı sayesinde, şirketin günlük operasyonlarını etkin biçimde yönetmekte ve sürdürülebilir büyüme stratejilerini başarıyla uygulamaktadır.'
                        : 'D. Yuksel Sinangil ensures the operational excellence of Demaş Technology Inc. with his deep expertise in software development and company management. Thanks to his customer-focused approach and innovative solution understanding, he effectively manages the company\'s daily operations and successfully implements sustainable growth strategies.'
                      }
                    </p>
                  </div>

                  {/* Hover durumunda gösterilen iletişim bilgileri */}
                  <div className="hidden group-hover:block">
                    <div className="mb-4">
                      <div className="flex items-center justify-center mb-3">
                        <EnvelopeIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="mailto:dys@demasteknoloji.com" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          dys@demasteknoloji.com
                        </a>
                      </div>
                      <div className="flex items-center justify-center">
                        <PhoneIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="tel:+902121234568" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          +90 (212) 123 45 68
                        </a>
                      </div>
                    </div>

                    {/* Sosyal Medya İkonları */}
                    <div className="flex justify-center space-x-4">
                      <a 
                        href="https://linkedin.com/in/yukselsinangil" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://twitter.com/yukselsinangil" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {/* Ekibimiz sekmesi seçiliyse özel section'lar */}
      {selectedTab === 'team' && (
        <>
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                {lang === 'tr' ? 'Ekibimiz' : 'Our Team'}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Kişi 1 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 group overflow-visible relative hover:z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={process.env.PUBLIC_URL + '/ack.png'} 
                      alt="Ahmet Cumhur Kitiş" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{lang === 'tr' ? 'Ahmet Cumhur Kitiş' : 'Ahmet Cumhur Kitis'}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{lang === 'tr' ? 'Yönetim Kurulu Başkanı' : 'Chairman of the Board'}</p>
                  
                  {/* Normal durumda gösterilen metin */}
                  <div className="group-hover:hidden">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {lang === 'tr' 
                        ? 'Teknoloji sektöründe uzun yıllara dayanan tecrübesiyle vizyoner lider.'
                        : 'Visionary leader with long-standing experience in the technology sector.'
                      }
                    </p>
                  </div>

                  {/* Hover durumunda gösterilen iletişim bilgileri */}
                  <div className="hidden group-hover:block">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <EnvelopeIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="mailto:ack@demasteknoloji.com" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          ack@demasteknoloji.com
                        </a>
                      </div>
                      <div className="flex items-center justify-center">
                        <PhoneIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="tel:+902121234567" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          +90 (212) 123 45 67
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kişi 2 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 group overflow-visible relative hover:z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={process.env.PUBLIC_URL + '/dys.png'} 
                      alt="D. Yüksel Sinangil" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{lang === 'tr' ? 'D. Yüksel Sinangil' : 'D. Yuksel Sinangil'}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{lang === 'tr' ? 'Genel Müdür' : 'General Manager'}</p>
                  
                  {/* Normal durumda gösterilen metin */}
                  <div className="group-hover:hidden">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {lang === 'tr' 
                        ? 'Yazılım geliştirme ve şirket yönetimi konularında derin uzmanlık.'
                        : 'Deep expertise in software development and company management.'
                      }
                    </p>
                  </div>

                  {/* Hover durumunda gösterilen iletişim bilgileri */}
                  <div className="hidden group-hover:block">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <EnvelopeIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="mailto:dys@demasteknoloji.com" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          dys@demasteknoloji.com
                        </a>
                      </div>
                      <div className="flex items-center justify-center">
                        <PhoneIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="tel:+902121234568" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          +90 (212) 123 45 68
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kişi 3 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 group overflow-visible relative hover:z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <UserIcon className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{lang === 'tr' ? 'Mehmet Yılmaz' : 'Mehmet Yilmaz'}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{lang === 'tr' ? 'Teknoloji Direktörü' : 'Technology Director'}</p>
                  
                  {/* Normal durumda gösterilen metin */}
                  <div className="group-hover:hidden">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {lang === 'tr' 
                        ? 'Yapay zeka ve makine öğrenimi konularında uzman teknoloji lideri.'
                        : 'Expert technology leader in artificial intelligence and machine learning.'
                      }
                    </p>
                  </div>

                  {/* Hover durumunda gösterilen iletişim bilgileri */}
                  <div className="hidden group-hover:block">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <EnvelopeIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="mailto:my@demasteknoloji.com" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          my@demasteknoloji.com
                        </a>
                      </div>
                      <div className="flex items-center justify-center">
                        <PhoneIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="tel:+902121234569" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          +90 (212) 123 45 69
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kişi 4 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 group overflow-visible relative hover:z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <UserIcon className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{lang === 'tr' ? 'Ayşe Demir' : 'Ayse Demir'}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{lang === 'tr' ? 'Tasarım Direktörü' : 'Design Director'}</p>
                  
                  {/* Normal durumda gösterilen metin */}
                  <div className="group-hover:hidden">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {lang === 'tr' 
                        ? 'Kullanıcı deneyimi ve arayüz tasarımı konularında uzman.'
                        : 'Expert in user experience and interface design.'
                      }
                    </p>
                  </div>

                  {/* Hover durumunda gösterilen iletişim bilgileri */}
                  <div className="hidden group-hover:block">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <EnvelopeIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="mailto:ad@demasteknoloji.com" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          ad@demasteknoloji.com
                        </a>
                      </div>
                      <div className="flex items-center justify-center">
                        <PhoneIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="tel:+902121234570" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          +90 (212) 123 45 70
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kişi 5 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 group overflow-visible relative hover:z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <UserIcon className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{lang === 'tr' ? 'Can Özkan' : 'Can Ozkan'}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{lang === 'tr' ? 'Proje Yöneticisi' : 'Project Manager'}</p>
                  
                  {/* Normal durumda gösterilen metin */}
                  <div className="group-hover:hidden">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {lang === 'tr' 
                        ? 'Çevik proje yönetimi ve ekip liderliği konularında deneyimli.'
                        : 'Experienced in agile project management and team leadership.'
                      }
                    </p>
                  </div>

                  {/* Hover durumunda gösterilen iletişim bilgileri */}
                  <div className="hidden group-hover:block">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <EnvelopeIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="mailto:co@demasteknoloji.com" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          co@demasteknoloji.com
                        </a>
                      </div>
                      <div className="flex items-center justify-center">
                        <PhoneIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="tel:+902121234571" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          +90 (212) 123 45 71
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kişi 6 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 group overflow-visible relative hover:z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <UserIcon className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{lang === 'tr' ? 'Zeynep Kaya' : 'Zeynep Kaya'}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{lang === 'tr' ? 'İnsan Kaynakları Müdürü' : 'HR Manager'}</p>
                  
                  {/* Normal durumda gösterilen metin */}
                  <div className="group-hover:hidden">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {lang === 'tr' 
                        ? 'Yetenek yönetimi ve organizasyonel gelişim konularında uzman.'
                        : 'Expert in talent management and organizational development.'
                      }
                    </p>
                  </div>

                  {/* Hover durumunda gösterilen iletişim bilgileri */}
                  <div className="hidden group-hover:block">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <EnvelopeIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="mailto:zk@demasteknoloji.com" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          zk@demasteknoloji.com
                        </a>
                      </div>
                      <div className="flex items-center justify-center">
                        <PhoneIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <a href="tel:+902121234572" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                          +90 (212) 123 45 72
                        </a>
                      </div>
                    </div>
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

export default Team; 