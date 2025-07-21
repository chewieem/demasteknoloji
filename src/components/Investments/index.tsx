import React from 'react';
import Header from '../Header';
import Banner from '../Products/Banner';
import Footer from '../Footer';
import { Link, useLocation } from 'react-router-dom';
import { Cog6ToothIcon, BuildingOffice2Icon, Squares2X2Icon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const content = {
  tr: {
    title: 'Yatırımlarımız',
    description: 'Ürünlerimiz, çözümlerimiz ve hizmetlerimiz ile geleceğe yatırım yapın.',
    breadcrumb: (
      <>
        <Link to="/tr" className="text-gray-400 font-bold">Ana Sayfa</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">Yatırımlar</span>
      </>
    ),
    footerLang: 'tr',
  },
  en: {
    title: 'Our Investments',
    description: 'Invest in the future with our products, solutions and services.',
    breadcrumb: (
      <>
        <Link to="/en" className="text-gray-400 font-bold">Home</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">Investments</span>
      </>
    ),
    footerLang: 'en',
  },
};

const Investments: React.FC = () => {
  const location = useLocation();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  const products = [
    {
      title: lang === 'tr' ? 'Web Uygulamaları' : 'Web Applications',
      desc: lang === 'tr' ? 'Sağlık tesisleri için bilgi yönetim sistemleri ve çözüm platformları' : 'Information management systems and solution platforms for healthcare facilities',
      link: `/${lang}/products/web-applications`,
    },
    {
      title: lang === 'tr' ? 'Mobil Uygulamalar' : 'Mobile Applications',
      desc: lang === 'tr' ? 'Mobil uygulama geliştirme ve yönetim çözümleri' : 'Mobile application development and management solutions',
      link: `/${lang}/products/mobile-applications`,
    },
    {
      title: lang === 'tr' ? 'E-Ticaret Platformları' : 'Ecommerce Platforms',
      desc: lang === 'tr' ? 'E-ticaret çözümleri ve platform yönetimi' : 'Ecommerce solutions and platform management',
      link: `/${lang}/products/ecommerce-platforms`,
    },
    {
      title: lang === 'tr' ? 'CRM Sistemleri' : 'CRM Systems',
      desc: lang === 'tr' ? 'Müşteri ilişkileri yönetimi çözümleri' : 'Customer relationship management solutions',
      link: `/${lang}/products/crm-systems`,
    },
    {
      title: lang === 'tr' ? 'ERP Çözümleri' : 'ERP Solutions',
      desc: lang === 'tr' ? 'Kurumsal kaynak planlama çözümleri' : 'Enterprise resource planning solutions',
      link: `/${lang}/products/erp-solutions`,
    },
  ];

  const solutions = [
    {
      key: 'integration',
      icon: <Cog6ToothIcon className="h-7 w-7 md:h-8 md:w-8 mr-2 text-blue-500" />,
      bigIcon: <Cog6ToothIcon className="h-16 w-16 text-blue-500 mx-auto" />,
      title: { tr: 'Sistem Entegrasyon Çözümleri', en: 'System Integration Solutions' },
      desc: {
        tr: 'Sistem entegrasyon alanında, yazılım ve donanım katmanında en yüksek başarıya sahip ürünleri bir araya getirerek, tüm kurumsal iş süreçlerinde gerçek verimi yakalayan uçtan uca ve eksiksiz çözümler sağlıyoruz.',
        en: 'In the field of system integration, we provide end-to-end and complete solutions that bring together the most successful products in software and hardware layers, achieving real efficiency in all corporate business processes.'
      }
    },
    {
      key: 'corporate',
      icon: <BuildingOffice2Icon className="h-7 w-7 md:h-8 md:w-8 mr-2 text-blue-500" />,
      bigIcon: <BuildingOffice2Icon className="h-16 w-16 text-blue-500 mx-auto" />,
      title: { tr: 'Kurumsal Çözümler', en: 'Corporate Solutions' },
      desc: {
        tr: 'Kurumsal süreçlerinizi dijitalleştirerek verimliliği artıran, özelleştirilebilir ve entegre çözümler sunuyoruz.',
        en: 'We offer customizable and integrated solutions that digitize your corporate processes and increase efficiency.'
      }
    },
    {
      key: 'sap',
      icon: <Squares2X2Icon className="h-7 w-7 md:h-8 md:w-8 mr-2 text-blue-500" />,
      bigIcon: <Squares2X2Icon className="h-16 w-16 text-blue-500 mx-auto" />,
      title: { tr: 'SAP Çözümleri', en: 'SAP Solutions' },
      desc: {
        tr: 'SAP danışmanlığı ve entegrasyonu ile iş süreçlerinizi optimize ediyor, rekabette öne çıkmanızı sağlıyoruz.',
        en: 'We optimize your business processes with SAP consultancy and integration, helping you stand out in competition.'
      }
    },
    {
      key: 'telecom',
      icon: <DevicePhoneMobileIcon className="h-7 w-7 md:h-8 md:w-8 mr-2 text-blue-500" />,
      bigIcon: <DevicePhoneMobileIcon className="h-16 w-16 text-blue-500 mx-auto" />,
      title: { tr: 'Telekom Çözümleri', en: 'Telecom Solutions' },
      desc: {
        tr: 'Telekom sektörüne özel, güvenilir ve ölçeklenebilir çözümler geliştiriyoruz.',
        en: 'We develop reliable and scalable solutions tailored for the telecom sector.'
      }
    },
  ];

  const services = [
    {
      title: lang === 'tr' ? 'Hizmet 1' : 'Service 1',
      desc: lang === 'tr' ? 'Birinci hizmet açıklaması ve detayları' : 'First service description and details',
      link: `/${lang}/services/service1`,
    },
    {
      title: lang === 'tr' ? 'Hizmet 2' : 'Service 2',
      desc: lang === 'tr' ? 'İkinci hizmet açıklaması ve detayları' : 'Second service description and details',
      link: `/${lang}/services/service2`,
    },
    {
      title: lang === 'tr' ? 'Hizmet 3' : 'Service 3',
      desc: lang === 'tr' ? 'Üçüncü hizmet açıklaması ve detayları' : 'Third service description and details',
      link: `/${lang}/services/service3`,
    },
    {
      title: lang === 'tr' ? 'Hizmet 4' : 'Service 4',
      desc: lang === 'tr' ? 'Dördüncü hizmet açıklaması ve detayları' : 'Fourth service description and details',
      link: `/${lang}/services/service4`,
    },
    {
      title: lang === 'tr' ? 'Hizmet 5' : 'Service 5',
      desc: lang === 'tr' ? 'Beşinci hizmet açıklaması ve detayları' : 'Fifth service description and details',
      link: `/${lang}/services/service5`,
    },
  ];

  return (
    <div>
      <Header language={lang} setLanguage={() => {}} />
      <Banner
        title={page.title}
        description={page.description}
        image={process.env.PUBLIC_URL + '/banner.png'}
        breadcrumb={page.breadcrumb}
      />
      
      {/* Ürünler Bölümü */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {lang === 'tr' ? 'Ürünlerimiz' : 'Our Products'}
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
            {lang === 'tr'
              ? 'Gelişmiş teknoloji çözümleri ile işinizi büyütün'
              : 'Grow your business with advanced technology solutions'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col justify-between min-h-[220px] border border-gray-200 hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-700 mb-6">{product.desc}</p>
                </div>
                <Link to={product.link} className="text-blue-600 font-semibold flex items-center gap-1 hover:underline mt-auto">
                  {lang === 'tr' ? 'Detaylı Bilgi' : 'More Info'} <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Çözümler Bölümü */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {lang === 'tr' ? 'Çözümlerimiz' : 'Our Solutions'}
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
            {lang === 'tr'
              ? 'Geliştirdiğimiz çözümler ile dört ayrı ana alanda inovasyonun desteği sizinle!'
              : 'With our solutions, you have innovation support in four main areas!'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, idx) => (
              <div key={solution.key} className="bg-white rounded-xl shadow p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {solution.icon}
                  <h3 className="text-xl font-bold text-gray-900">{solution.title[lang]}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{solution.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Hizmetler Bölümü */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {lang === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
            {lang === 'tr'
              ? 'Tüm hizmet ailelerimizi ve çözümlerimizi keşfedin'
              : 'Discover all our service families and solutions'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col justify-between min-h-[220px] border border-gray-200 hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.desc}</p>
                </div>
                <Link to={service.link} className="text-blue-600 font-semibold flex items-center gap-1 hover:underline mt-auto">
                  {lang === 'tr' ? 'Detaylı Bilgi' : 'More Info'} <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer language={lang} />
    </div>
  );
};

export default Investments; 