import React, { useState, useEffect } from 'react';
import Header from '../../Header';
import Banner from '../Banner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../Footer';
import HeroImageTextSection from '../../TextSections/HeroImageTextSection';
import { 
  ShieldCheckIcon, 
  DocumentTextIcon, 
  ClockIcon
} from '@heroicons/react/24/outline';

const TABS = [
  { key: 'overview', tr: 'Genel Bakış', en: 'Overview', path: '' },
  { key: 'certificates', tr: 'Sertifikalar', en: 'Certificates', path: 'certificates' },
  { key: 'documents', tr: 'Dökümantasyon', en: 'Documentation', path: 'documents' },
];

const content = {
  tr: {
    title: 'Sertifikasyon ve Dökümantasyon',
    description: 'Kalite standartlarımızı belgeleyen sertifikalarımız ve dökümantasyonumuz',
    footerLang: 'tr',
    headerLang: 'tr',
  },
  en: {
    title: 'Certification & Documentation',
    description: 'Our certificates and documentation that document our quality standards',
    footerLang: 'en',
    headerLang: 'en',
  },
};

const Certification: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState('');

  // URL'den aktif sekmeyi belirle
  const pathParts = location.pathname.split('/');
  const tabPath = pathParts[pathParts.length - 1];
  let initialTab = 'overview';
  if (tabPath === 'certificates') initialTab = 'certificates';
  else if (tabPath === 'documents') initialTab = 'documents';
  const [selectedTab, setSelectedTab] = useState(initialTab);

  // Sekme değişince URL'yi güncelle
  const handleTabChange = (key: string) => {
    setSelectedTab(key);
    const tabObj = TABS.find(t => t.key === key);
    let base = `/${lang}/about/certification`;
    if (tabObj && tabObj.path) base += `/${tabObj.path}`;
    navigate(base, { replace: true });
  };

  // URL değişirse sekmeyi güncelle
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const tabPath = pathParts[pathParts.length - 1];
    if (tabPath === 'certificates') setSelectedTab('certificates');
    else if (tabPath === 'documents') setSelectedTab('documents');
    else setSelectedTab('overview');
  }, [location.pathname]);

  // Breadcrumb'u dinamik oluştur
  const breadcrumb = (
    <div className="mt-1 mb-2 text-sm flex items-center space-x-2">
      <Link to={`/${lang}`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <Link to={`/${lang}/about/certification`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Sertifikasyon ve Dökümantasyon' : 'Certification & Documentation'}</Link>
      {selectedTab !== 'overview' && (
        <>
          <span className="text-gray-400 font-bold">/</span>
          <span className="text-white font-bold">{lang === 'tr' ? (selectedTab === 'certificates' ? 'Sertifikalar' : 'Dökümantasyon') : (selectedTab === 'certificates' ? 'Certificates' : 'Documentation')}</span>
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

  const openPdfModal = (pdfPath: string) => {
    setSelectedPdf(pdfPath);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPdf('');
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
            title={lang === 'tr' ? 'Kalite, Güvenlik ve Uyum Önceliğimizdir' : 'Quality, Security and Compliance is Our Priority'}
            style={{ textAlign: 'justify' }}
            paragraphs={[
              lang === 'tr'
                ? 'Demaş Teknoloji A.Ş. olarak sunduğumuz yapay zeka destekli yazılım çözümlerinde; kalite standartlarına uygunluk, bilgi güvenliği ve yasal mevzuatlara tam uyum vazgeçilmez ilkelerimizdendir.'
                : 'As Demaş Technology Inc., in the AI-powered software solutions we offer; compliance with quality standards, information security and full compliance with legal regulations are our indispensable principles.',
              lang === 'tr'
                ? 'Müşterilerimize sunduğumuz her ürün ve hizmet, ulusal ve uluslararası sertifikasyon süreçlerinden geçerek denetlenmiş, test edilmiş ve onaylanmıştır.'
                : 'Every product and service we offer to our customers has been audited, tested and approved through national and international certification processes.',
              lang === 'tr'
                ? 'Ayrıca, tüm yazılım çözümlerimiz için kapsamlı teknik dökümantasyonlar sunarak şeffaf ve sürdürülebilir bir iş ortaklığı hedefliyoruz.'
                : 'Additionally, we aim for a transparent and sustainable business partnership by providing comprehensive technical documentation for all our software solutions.'
            ]}
          />
          

        </>
      )}
      
      {/* Sertifikalar sekmesi seçiliyse özel section'lar */}
      {selectedTab === 'certificates' && (
        <>
          <HeroImageTextSection
            title={lang === 'tr' ? 'Sertifikalarımız' : 'Our Certificates'}
            style={{ textAlign: 'justify' }}
            paragraphs={[
              lang === 'tr'
                ? 'Uluslararası standartlara uygun sertifikalarımız ile kalitemizi belgeliyoruz. Her sertifika, müşterilerimize sunduğumuz hizmetlerin kalitesini ve güvenilirliğini garanti eder.'
                : 'We document our quality with our certificates that comply with international standards. Each certificate guarantees the quality and reliability of the services we offer to our customers.',
              lang === 'tr'
                ? 'ISO 9001 Kalite Yönetim Sistemi, ISO 27001 Bilgi Güvenliği Yönetim Sistemi ve diğer sektörel sertifikalarımız ile sürekli iyileştirme ve mükemmellik hedeflerimizi destekliyoruz.'
                : 'We support our continuous improvement and excellence goals with our ISO 9001 Quality Management System, ISO 27001 Information Security Management System and other sectoral certificates.'
            ]}
          />
          
          {/* Sertifika Kartları */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'ISO 9001:2015' : 'ISO 9001:2015'}</h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Kurum' : 'Institution'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? 'TÜV SÜD Türkiye' : 'TÜV SÜD Turkey'}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Alınma Tarihi' : 'Issue Date'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? '15 Mart 2023' : 'March 15, 2023'}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Geçerlilik' : 'Validity'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? '15 Mart 2026' : 'March 15, 2026'}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Kalite Yönetim Sistemi sertifikası ile süreçlerimizi standartlaştırıyor ve sürekli iyileştirme sağlıyoruz.' : 'We standardize our processes and ensure continuous improvement with our Quality Management System certificate.'}</p>
                  <div className="flex space-x-2">
                    <a 
                      href={process.env.PUBLIC_URL + '/Sertifikalar/Deneme.pdf'} 
                      download
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors inline-block"
                    >
                      {lang === 'tr' ? 'PDF İndir' : 'Download PDF'}
                    </a>
                    <button 
                      onClick={() => openPdfModal(process.env.PUBLIC_URL + '/Sertifikalar/Deneme.pdf')}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                    >
                      {lang === 'tr' ? 'Görüntüle' : 'View'}
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'ISO 27001:2013' : 'ISO 27001:2013'}</h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Kurum' : 'Institution'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? 'TÜV SÜD Türkiye' : 'TÜV SÜD Turkey'}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Alınma Tarihi' : 'Issue Date'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? '22 Haziran 2023' : 'June 22, 2023'}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Geçerlilik' : 'Validity'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? '22 Haziran 2026' : 'June 22, 2026'}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Bilgi Güvenliği Yönetim Sistemi ile veri güvenliğini en üst seviyede tutuyoruz.' : 'We maintain data security at the highest level with our Information Security Management System.'}</p>
                  <div className="flex space-x-2">
                    <a 
                      href={process.env.PUBLIC_URL + '/Sertifikalar/Deneme.pdf'} 
                      download
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors inline-block"
                    >
                      {lang === 'tr' ? 'PDF İndir' : 'Download PDF'}
                    </a>
                    <button 
                      onClick={() => openPdfModal(process.env.PUBLIC_URL + '/Sertifikalar/Deneme.pdf')}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                    >
                      {lang === 'tr' ? 'Görüntüle' : 'View'}
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'ISO 14001:2015' : 'ISO 14001:2015'}</h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Kurum' : 'Institution'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? 'TÜV SÜD Türkiye' : 'TÜV SÜD Turkey'}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Alınma Tarihi' : 'Issue Date'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? '10 Eylül 2023' : 'September 10, 2023'}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Geçerlilik' : 'Validity'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? '10 Eylül 2026' : 'September 10, 2026'}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Çevre Yönetim Sistemi ile sürdürülebilir iş süreçleri yürütüyoruz.' : 'We carry out sustainable business processes with our Environmental Management System.'}</p>
                  <div className="flex space-x-2">
                    <a 
                      href={process.env.PUBLIC_URL + '/Sertifikalar/Deneme.pdf'} 
                      download
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors inline-block"
                    >
                      {lang === 'tr' ? 'PDF İndir' : 'Download PDF'}
                    </a>
                    <button 
                      onClick={() => openPdfModal(process.env.PUBLIC_URL + '/Sertifikalar/Deneme.pdf')}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                    >
                      {lang === 'tr' ? 'Görüntüle' : 'View'}
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-orange-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'TSE Belgesi' : 'TSE Certificate'}</h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Kurum' : 'Institution'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? 'Türk Standartları Enstitüsü' : 'Turkish Standards Institute'}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Alınma Tarihi' : 'Issue Date'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? '5 Ocak 2024' : 'January 5, 2024'}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Geçerlilik' : 'Validity'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? '5 Ocak 2027' : 'January 5, 2027'}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Türk Standartları Enstitüsü belgesi ile ulusal standartlara uygunluğumuzu kanıtlıyoruz.' : 'We prove our compliance with national standards with our Turkish Standards Institute certificate.'}</p>
                  <div className="flex space-x-2">
                    <a 
                      href={process.env.PUBLIC_URL + '/Sertifikalar/Deneme.pdf'} 
                      download
                      className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition-colors inline-block"
                    >
                      {lang === 'tr' ? 'PDF İndir' : 'Download PDF'}
                    </a>
                    <button 
                      onClick={() => openPdfModal(process.env.PUBLIC_URL + '/Sertifikalar/Deneme.pdf')}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                    >
                      {lang === 'tr' ? 'Görüntüle' : 'View'}
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'GDPR Uyumluluğu' : 'GDPR Compliance'}</h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Kurum' : 'Institution'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? 'EU Data Protection Authority' : 'EU Data Protection Authority'}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Alınma Tarihi' : 'Issue Date'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? '20 Şubat 2024' : 'February 20, 2024'}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Geçerlilik' : 'Validity'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? 'Sürekli' : 'Continuous'}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Genel Veri Koruma Yönetmeliği uyumluluğu ile veri güvenliğini garanti ediyoruz.' : 'We guarantee data security with General Data Protection Regulation compliance.'}</p>
                  <div className="flex space-x-2">
                    <a 
                      href={process.env.PUBLIC_URL + '/Sertifikalar/Deneme.pdf'} 
                      download
                      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors inline-block"
                    >
                      {lang === 'tr' ? 'PDF İndir' : 'Download PDF'}
                    </a>
                    <button 
                      onClick={() => openPdfModal(process.env.PUBLIC_URL + '/Sertifikalar/Deneme.pdf')}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                    >
                      {lang === 'tr' ? 'Görüntüle' : 'View'}
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-indigo-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'KVKK Uyumluluğu' : 'KVKK Compliance'}</h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Kurum' : 'Institution'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? 'Kişisel Verileri Koruma Kurumu' : 'Personal Data Protection Authority'}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Alınma Tarihi' : 'Issue Date'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? '15 Mart 2024' : 'March 15, 2024'}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{lang === 'tr' ? 'Geçerlilik' : 'Validity'}</p>
                    <p className="text-gray-700 font-medium">{lang === 'tr' ? 'Sürekli' : 'Continuous'}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Kişisel Verilerin Korunması Kanunu uyumluluğu ile veri koruma standartlarını sağlıyoruz.' : 'We ensure data protection standards with Personal Data Protection Law compliance.'}</p>
                  <div className="flex space-x-2">
                    <a 
                      href={process.env.PUBLIC_URL + '/Sertifikalar/Deneme.pdf'} 
                      download
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors inline-block"
                    >
                      {lang === 'tr' ? 'PDF İndir' : 'Download PDF'}
                    </a>
                    <button 
                      onClick={() => openPdfModal(process.env.PUBLIC_URL + '/Sertifikalar/Deneme.pdf')}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                    >
                      {lang === 'tr' ? 'Görüntüle' : 'View'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      
      {/* Dökümantasyon sekmesi seçiliyse özel section'lar */}
      {selectedTab === 'documents' && (
        <>
          <HeroImageTextSection
            title={lang === 'tr' ? 'Dökümantasyon' : 'Documentation'}
            style={{ textAlign: 'justify' }}
            paragraphs={[
              lang === 'tr'
                ? 'Kapsamlı dökümantasyon süreçlerimiz ile süreçlerimizi şeffaf bir şekilde paylaşıyoruz. Her proje ve süreç için detaylı dokümantasyon oluşturuyoruz.'
                : 'We share our processes transparently with our comprehensive documentation processes. We create detailed documentation for each project and process.',
              lang === 'tr'
                ? 'Teknik dokümantasyon, kullanıcı kılavuzları, API dokümantasyonu ve süreç dokümantasyonu ile müşterilerimize tam destek sağlıyoruz.'
                : 'We provide full support to our customers with technical documentation, user guides, API documentation and process documentation.'
            ]}
          />

          {/* Politikalar Kartları */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">{lang === 'tr' ? 'Politikalarımız' : 'Our Policies'}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Çerez Politikası */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-purple-600 mr-3" />
                    <h4 className="text-lg font-bold text-gray-900">{lang === 'tr' ? 'Çerez Politikası' : 'Cookie Policy'}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Web sitemizde kullanılan çerezler ve kullanım esasları.' : 'Cookies used on our website and terms of use.'}</p>
                  <Link 
                    to={`/${lang}/about/certification/cerez`}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors inline-block"
                  >
                    {lang === 'tr' ? 'Oku' : 'Read'}
                  </Link>
                </div>
                {/* Gizlilik Politikası ve Kişisel Veriler */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-green-600 mr-3" />
                    <h4 className="text-lg font-bold text-gray-900">{lang === 'tr' ? 'Gizlilik Politikası ve Kişisel Veriler' : 'Privacy Policy & Personal Data'}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Kişisel verilerinizin gizliliği ve korunması esasları.' : 'Principles of privacy and protection of your personal data.'}</p>
                  <Link 
                    to={`/${lang}/about/certification/gizlilikveri`}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors inline-block"
                  >
                    {lang === 'tr' ? 'Oku' : 'Read'}
                  </Link>
                </div>
                {/* KVKK Aydınlatma Metni */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="text-lg font-bold text-gray-900">{lang === 'tr' ? 'Tedarikçi ve Müşterilerin Sözleşme Süreçlerine Yönelik KVKK Aydınlatma Metni' : 'KVKK Disclosure for Supplier & Customer Contracts'}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'KVKK kapsamında aydınlatma metni.' : 'KVKK disclosure text for contracts.'}</p>
                  <Link 
                    to={`/${lang}/about/certification/kvkkaydinlatma`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors inline-block"
                  >
                    {lang === 'tr' ? 'Oku' : 'Read'}
                  </Link>
                </div>
                {/* Veri Sorumlusuna Başvuru Formu */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-orange-600 mr-3" />
                    <h4 className="text-lg font-bold text-gray-900">{lang === 'tr' ? 'Veri Sorumlusuna Başvuru Formu' : 'Data Controller Application Form'}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Kişisel verilerle ilgili başvurular için form.' : 'Form for applications regarding personal data.'}</p>
                  <Link 
                    to={`/${lang}/about/certification/verisorumlusubasvuru`}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition-colors inline-block"
                  >
                    {lang === 'tr' ? 'Oku' : 'Read'}
                  </Link>
                </div>
                {/* Gizlilik Sözleşmesi ve Kullanım Hakları */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-pink-600 mr-3" />
                    <h4 className="text-lg font-bold text-gray-900">{lang === 'tr' ? 'Gizlilik Sözleşmesi Ve Kullanım Hakları' : 'Confidentiality Agreement & Usage Rights'}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Gizlilik ve kullanım haklarına dair esaslar.' : 'Principles regarding confidentiality and usage rights.'}</p>
                  <Link 
                    to={`/${lang}/about/certification/gizlilikkullanim`}
                    className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-700 transition-colors inline-block"
                  >
                    {lang === 'tr' ? 'Oku' : 'Read'}
                  </Link>
                </div>
                {/* Bilgi Toplumu Hizmetleri */}
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-teal-600 mr-3" />
                    <h4 className="text-lg font-bold text-gray-900">{lang === 'tr' ? 'Bilgi Toplumu Hizmetleri' : 'Information Society Services'}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Şirketimizin bilgi toplumu hizmetleri.' : 'Our company’s information society services.'}</p>
                  <Link 
                    to={`/${lang}/about/certification/bilgitoplumu`}
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition-colors inline-block"
                  >
                    {lang === 'tr' ? 'Oku' : 'Read'}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Dökümantasyon Kartları */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'Teknik Dokümantasyon' : 'Technical Documentation'}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Sistem mimarisi, API dokümantasyonu ve teknik detayları içeren kapsamlı dokümantasyon.' : 'Comprehensive documentation including system architecture, API documentation and technical details.'}</p>
                  <div className="text-sm text-blue-600 font-semibold">{lang === 'tr' ? 'API Docs, System Docs' : 'API Docs, System Docs'}</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'Kullanıcı Kılavuzları' : 'User Guides'}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Kullanıcı dostu kılavuzlar ve eğitim materyalleri ile kullanım kolaylığı sağlıyoruz.' : 'We provide ease of use with user-friendly guides and training materials.'}</p>
                  <div className="text-sm text-green-600 font-semibold">{lang === 'tr' ? 'User Manuals, Tutorials' : 'User Manuals, Tutorials'}</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'Süreç Dokümantasyonu' : 'Process Documentation'}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'İş süreçleri, prosedürler ve standart operasyon talimatları dokümantasyonu.' : 'Documentation of business processes, procedures and standard operating instructions.'}</p>
                  <div className="text-sm text-purple-600 font-semibold">{lang === 'tr' ? 'SOPs, Procedures' : 'SOPs, Procedures'}</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-orange-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'Güvenlik Dokümantasyonu' : 'Security Documentation'}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Güvenlik politikaları, risk değerlendirmeleri ve güvenlik protokolleri dokümantasyonu.' : 'Documentation of security policies, risk assessments and security protocols.'}</p>
                  <div className="text-sm text-orange-600 font-semibold">{lang === 'tr' ? 'Security Policies, Protocols' : 'Security Policies, Protocols'}</div>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'Kalite Dokümantasyonu' : 'Quality Documentation'}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Kalite kontrol süreçleri, test planları ve kalite standartları dokümantasyonu.' : 'Documentation of quality control processes, test plans and quality standards.'}</p>
                  <div className="text-sm text-red-600 font-semibold">{lang === 'tr' ? 'QC Processes, Test Plans' : 'QC Processes, Test Plans'}</div>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-indigo-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{lang === 'tr' ? 'Yasal Dokümantasyon' : 'Legal Documentation'}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{lang === 'tr' ? 'Yasal uyumluluk, sözleşmeler ve yasal gereklilikler dokümantasyonu.' : 'Documentation of legal compliance, contracts and legal requirements.'}</p>
                  <div className="text-sm text-indigo-600 font-semibold">{lang === 'tr' ? 'Compliance, Contracts' : 'Compliance, Contracts'}</div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <Footer language={lang} />

      {/* PDF Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl h-[80vh] relative flex flex-col">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
              aria-label="Kapat"
            >
              ×
            </button>
            <iframe
              src={selectedPdf}
              title="PDF Preview"
              className="flex-1 w-full rounded-b-lg"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certification; 