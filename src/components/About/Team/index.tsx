import React, { useState, useEffect } from 'react';
import Header from '../../Header';
import Banner from '../Banner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../Footer';
import FeatureCardsSection from '../../TextSections/FeatureCardsSection';
import TabbedSection from '../../TextSections/TabbedSection';
import ImageTextSection from '../../TextSections/ImageTextSection';
import ListSection from '../../TextSections/ListSection';
import HeroImageTextSection from '../../TextSections/HeroImageTextSection';
import TwoColumnSection from '../../TextSections/TwoColumnSection';
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
  PhoneIcon
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
  else if (tabPath === 'team') initialTab = 'team';
  const [selectedTab, setSelectedTab] = useState(initialTab);

  // Sekme değişince URL'yi güncelle
  const handleTabChange = (key: string) => {
    setSelectedTab(key);
    const tabObj = TABS.find(t => t.key === key);
    let base = `/${lang}/about/team`;
    if (tabObj && tabObj.path) base += `/${tabObj.path}`;
    navigate(base, { replace: true });
  };

  // URL değişirse sekmeyi güncelle
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const tabPath = pathParts[pathParts.length - 1];
    if (tabPath === 'management') setSelectedTab('management');
    else if (tabPath === 'team') setSelectedTab('team');
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
            title={lang === 'tr' ? 'Yönetim ve Ekibimiz' : 'Management & Our Team'}
            style={{ textAlign: 'justify' }}
            paragraphs={[
              lang === 'tr'
                ? 'Demaş Teknoloji A.Ş., sadece yenilikçi teknolojileriyle değil, aynı zamanda alanında uzman, vizyoner ve tutkulu ekibiyle fark yaratır.'
                : 'Demaş Technology Inc. makes a difference not only with its innovative technologies, but also with its expert, visionary and passionate team.',
              lang === 'tr'
                ? 'Her biri kendi alanında derin bilgiye ve deneyime sahip olan kadromuz, yapay zeka destekli çözümlerle işletmelere katma değer sağlamak için çalışmaktadır.'
                : 'Our staff, each with deep knowledge and experience in their own field, works to provide added value to businesses with AI-powered solutions.',
              lang === 'tr'
                ? 'Biz, teknolojinin arkasında insan gücünün olduğunu biliyor; ekip kültürümüzü güven, iş birliği ve sürekli gelişim üzerine inşa ediyoruz.'
                : 'We know that there is human power behind technology; we build our team culture on trust, collaboration and continuous development.',
              lang === 'tr'
                ? 'Takım çalışması, sürekli öğrenme ve inovasyon kültürümüzle, her projede mükemmelliği hedefliyoruz. Uzmanlık alanlarımız yapay zeka, makine öğrenimi, web geliştirme ve mobil teknolojiler olmak üzere geniş bir yelpazeyi kapsamaktadır.'
                : 'With our culture of teamwork, continuous learning and innovation, we aim for excellence in every project. Our areas of expertise cover a wide range including artificial intelligence, machine learning, web development and mobile technologies.'
            ]}
          />
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                {lang === 'tr' ? 'Ekip İstatistiklerimiz' : 'Our Team Statistics'}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <UserGroupIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">{lang === 'tr' ? 'Profesyonel' : 'Professionals'}</div>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <AcademicCapIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
                  <div className="text-gray-600">{lang === 'tr' ? 'Ortalama Deneyim' : 'Avg. Experience'}</div>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <GlobeAltIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                  <div className="text-gray-600">{lang === 'tr' ? 'Ülke' : 'Countries'}</div>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <ClockIcon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">{lang === 'tr' ? 'Destek' : 'Support'}</div>
                </div>
              </div>
            </div>
          </section>
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
                ? 'Demaş Teknoloji A.Ş.\'nin başarısının arkasında, alanında uzman, vizyon sahibi ve dinamik bir yönetim kadrosu bulunmaktadır.'
                : 'Behind the success of Demaş Technology Inc. lies an expert, visionary and dynamic management team.',
              lang === 'tr'
                ? 'Her biri kendi uzmanlık alanında uzun yıllara dayanan deneyime sahip olan yöneticilerimiz, şirketimizin stratejik hedeflerine yön verirken; teknolojiyi, verimliliği ve sürdürülebilir büyümeyi merkeze alır.'
                : 'Our managers, each with years of experience in their own areas of expertise, center technology, efficiency and sustainable growth while guiding our company\'s strategic goals.',
              lang === 'tr'
                ? 'Yapay zeka destekli yazılım çözümleri üretme vizyonumuz doğrultusunda; yönetim ekibimiz, yenilikçi düşünce yapısıyla sadece bugünü değil, geleceği de inşa etmeyi hedeflemektedir.'
                : 'In line with our vision of producing AI-powered software solutions; our management team aims to build not only today but also the future with its innovative thinking structure.',
              lang === 'tr'
                ? 'Şeffaflık, etik değerler ve takım ruhu ilkeleriyle hareket eden lider kadromuz, hem çalışanlarımıza hem de iş ortaklarımıza ilham veren bir yönetim anlayışını benimsemektedir.'
                : 'Our leadership team, acting with the principles of transparency, ethical values and team spirit, adopts a management approach that inspires both our employees and business partners.',
              lang === 'tr'
                ? 'Demaş Teknoloji A.Ş., güçlü yönetim kadrosuyla teknoloji dünyasında fark yaratmaya ve dijital dönüşüme öncülük etmeye devam ediyor.'
                : 'Demaş Technology Inc. continues to make a difference in the technology world and lead digital transformation with its strong management team.'
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
                        ? 'Ahmet Cumhur Kitiş, teknoloji sektöründe uzun yıllara dayanan deneyimiyle Demaş Teknoloji A.Ş.\'nin vizyoner lideridir. Yapay zeka ve dijital dönüşüm alanlarında öncü çalışmalarıyla sektöre yön veren Kitiş, şirketin stratejik büyüme hedeflerini belirlemekte ve teknoloji odaklı çözümler geliştirilmesinde kritik rol oynamaktadır.'
                        : 'Ahmet Cumhur Kitis is the visionary leader of Demaş Technology Inc. with his long-standing experience in the technology sector. Kitis, who leads the industry with his pioneering work in artificial intelligence and digital transformation, plays a critical role in determining the company\'s strategic growth goals and developing technology-focused solutions.'
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
                        ? 'D. Yüksel Sinangil, yazılım geliştirme ve şirket yönetimi konularındaki derin bilgisiyle Demaş Teknoloji A.Ş.\'nin operasyonel mükemmelliğini sağlamaktadır. Müşteri odaklı yaklaşımı ve yenilikçi çözümler geliştirme konusundaki uzmanlığıyla, şirketin günlük operasyonlarını yönetmekte ve sürdürülebilir büyüme stratejilerini uygulamaktadır.'
                        : 'D. Yuksel Sinangil ensures the operational excellence of Demaş Technology Inc. with his deep knowledge in software development and company management. With his customer-focused approach and expertise in developing innovative solutions, he manages the company\'s daily operations and implements sustainable growth strategies.'
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
          <HeroImageTextSection
            title={lang === 'tr' ? 'Ekibimiz' : 'Our Team'}
            style={{ textAlign: 'justify' }}
            paragraphs={[
              lang === 'tr'
                ? 'Uzman ekibimizle müşterilerimizin ihtiyaçlarını en iyi şekilde karşılıyoruz. Yapay zeka, makine öğrenimi, web geliştirme ve mobil teknolojiler alanlarında uzmanlaşmış 50+ profesyonelden oluşan ekibimiz, her projede mükemmelliği hedefliyor.'
                : 'We meet our customers needs in the best way with our expert team. Our team of 50+ professionals specialized in artificial intelligence, machine learning, web development and mobile technologies aims for excellence in every project.'
            ]}
          />
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                {lang === 'tr' ? 'Departmanlarımız' : 'Our Departments'}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <CogIcon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'Yazılım Geliştirme' : 'Software Development'}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? '25+ geliştirici ile modern teknolojiler kullanarak yenilikçi çözümler geliştiriyoruz.' : 'We develop innovative solutions using modern technologies with 25+ developers.'}</p>
                  <div className="text-sm text-blue-600 font-semibold">{lang === 'tr' ? 'React, Node.js, Python, AI/ML' : 'React, Node.js, Python, AI/ML'}</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <HeartIcon className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'Tasarım & UX' : 'Design & UX'}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Kullanıcı deneyimini merkeze alan tasarım ekibimizle kullanıcı dostu arayüzler oluşturuyoruz.' : 'We create user-friendly interfaces with our design team that centers user experience.'}</p>
                  <div className="text-sm text-green-600 font-semibold">{lang === 'tr' ? 'Figma, Adobe XD, UI/UX' : 'Figma, Adobe XD, UI/UX'}</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <ChartBarIcon className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'Proje Yönetimi' : 'Project Management'}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Agile metodolojiler ile projeleri zamanında ve bütçe dahilinde tamamlıyoruz.' : 'We complete projects on time and within budget using Agile methodologies.'}</p>
                  <div className="text-sm text-purple-600 font-semibold">{lang === 'tr' ? 'Scrum, Kanban, Jira' : 'Scrum, Kanban, Jira'}</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <GlobeAltIcon className="h-8 w-8 text-orange-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'Satış & Pazarlama' : 'Sales & Marketing'}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Müşteri ihtiyaçlarını anlayarak en uygun çözümleri sunuyoruz.' : 'We offer the most suitable solutions by understanding customer needs.'}</p>
                  <div className="text-sm text-orange-600 font-semibold">{lang === 'tr' ? 'CRM, Digital Marketing' : 'CRM, Digital Marketing'}</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <AcademicCapIcon className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'İnsan Kaynakları' : 'Human Resources'}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'En yetenekli profesyonelleri ekibimize katıyor ve gelişimlerini destekliyoruz.' : 'We bring the most talented professionals to our team and support their development.'}</p>
                  <div className="text-sm text-red-600 font-semibold">{lang === 'tr' ? 'Recruitment, Training' : 'Recruitment, Training'}</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <LightBulbIcon className="h-8 w-8 text-indigo-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'Ar-Ge & İnovasyon' : 'R&D & Innovation'}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Yenilikçi teknolojiler geliştirerek sektöre öncülük ediyoruz.' : 'We lead the industry by developing innovative technologies.'}</p>
                  <div className="text-sm text-indigo-600 font-semibold">{lang === 'tr' ? 'AI Research, Innovation' : 'AI Research, Innovation'}</div>
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