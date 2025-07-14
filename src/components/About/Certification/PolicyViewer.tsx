import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';

const policyContents = {
  'bilgi-guvenligi': {
    tr: {
      title: 'Bilgi Güvenliği Politikası',
      content: `Bu bir örnek Bilgi Güvenliği Politikası metnidir. Kurumumuz, bilgi varlıklarının gizliliğini, bütünlüğünü ve erişilebilirliğini korumayı taahhüt eder. Bilgi güvenliği süreçlerimiz ulusal ve uluslararası standartlara uygun olarak yürütülmektedir.`
    },
    en: {
      title: 'Information Security Policy',
      content: `This is a sample Information Security Policy text. Our company is committed to protecting the confidentiality, integrity, and availability of information assets. Our information security processes are carried out in accordance with national and international standards.`
    }
  },
  'gizlilik': {
    tr: {
      title: 'Gizlilik Politikası',
      content: `Bu bir örnek Gizlilik Politikası metnidir. Kişisel verilerinizin gizliliği ve güvenliği bizim için önemlidir. Verileriniz yasal mevzuata uygun şekilde işlenir ve korunur.`
    },
    en: {
      title: 'Privacy Policy',
      content: `This is a sample Privacy Policy text. The privacy and security of your personal data are important to us. Your data is processed and protected in accordance with legal regulations.`
    }
  },
  'cerez': {
    tr: {
      title: 'Çerez Politikası',
      content: `Bu bir örnek Çerez Politikası metnidir. Web sitemizde kullanıcı deneyimini geliştirmek için çerezler kullanılmaktadır. Çerez tercihlerinizi tarayıcı ayarlarından değiştirebilirsiniz.`
    },
    en: {
      title: 'Cookie Policy',
      content: `This is a sample Cookie Policy text. Cookies are used on our website to enhance user experience. You can change your cookie preferences from your browser settings.`
    }
  },
  'yedekleme': {
    tr: {
      title: 'Yedekleme Politikası',
      content: `Bu bir örnek Yedekleme Politikası metnidir. Verileriniz düzenli olarak yedeklenir ve güvenli ortamlarda saklanır.`
    },
    en: {
      title: 'Backup Policy',
      content: `This is a sample Backup Policy text. Your data is regularly backed up and stored in secure environments.`
    }
  },
  'erisim-kontrol': {
    tr: {
      title: 'Erişim Kontrol Politikası',
      content: `Bu bir örnek Erişim Kontrol Politikası metnidir. Sistemlerimize erişim, yetkilendirme ve kimlik doğrulama süreçleriyle kontrol altındadır.`
    },
    en: {
      title: 'Access Control Policy',
      content: `This is a sample Access Control Policy text. Access to our systems is controlled through authorization and authentication processes.`
    }
  },
  'is-surekliligi': {
    tr: {
      title: 'İş Sürekliliği Politikası',
      content: `Bu bir örnek İş Sürekliliği Politikası metnidir. Hizmetlerimizin kesintisiz devamı için iş sürekliliği planları uygulanmaktadır.`
    },
    en: {
      title: 'Business Continuity Policy',
      content: `This is a sample Business Continuity Policy text. Business continuity plans are implemented to ensure uninterrupted delivery of our services.`
    }
  },
  'kvkk': {
    tr: {
      title: 'KVKK Politikası',
      content: `Bu bir örnek KVKK Politikası metnidir. Kişisel verileriniz 6698 sayılı KVKK kapsamında korunur ve işlenir.`
    },
    en: {
      title: 'KVKK Policy',
      content: `This is a sample KVKK Policy text. Your personal data is protected and processed in accordance with Law No. 6698.`
    }
  },
  'gdpr': {
    tr: {
      title: 'GDPR Politikası',
      content: `Bu bir örnek GDPR Politikası metnidir. Kişisel verileriniz Avrupa Birliği Genel Veri Koruma Tüzüğü'ne (GDPR) uygun olarak işlenir.`
    },
    en: {
      title: 'GDPR Policy',
      content: `This is a sample GDPR Policy text. Your personal data is processed in accordance with the European Union General Data Protection Regulation (GDPR).`
    }
  }
};

const PolicyViewer: React.FC = () => {
  const { policyName } = useParams<{ policyName: string }>();
  const location = useLocation();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;

  const policy = policyContents[policyName as keyof typeof policyContents] || policyContents['bilgi-guvenligi'];
  const policyTitle = policy[lang].title;
  const policyText = policy[lang].content;

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
      {/* Banner ve Breadcrumb */}
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
            <Link to={`/${lang}/about/certification/documents`} className="text-gray-400 hover:text-white transition-colors">
              {lang === 'tr' ? 'Dökümantasyon' : 'Documentation'}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">{policyTitle}</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{policyTitle}</h1>
          <p className="text-gray-300 text-lg">
            {lang === 'tr' ? 'Aşağıda ilgili politika metnini inceleyebilirsiniz.' : 'You can review the policy text below.'}
          </p>
        </div>
      </div>
      {/* Politika Metni */}
      <div className="bg-white min-h-[40vh] py-16 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{policyTitle}</h2>
          <p className="text-gray-700 text-lg whitespace-pre-line">{policyText}</p>
        </div>
      </div>
      <Footer language={lang} />
    </div>
  );
};

export default PolicyViewer; 