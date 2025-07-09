import React from 'react';
import Header from '../Header';
import Banner from './Banner';
import Footer from '../Footer';
import { Link, useLocation } from 'react-router-dom';

const content = {
  tr: {
    title: 'Ürünlerimiz',
    description: 'Tüm ürün ailelerimizi ve çözümlerimizi keşfedin.',
    breadcrumb: (
      <>
        <Link to="/tr" className="text-gray-400 font-bold">Ana Sayfa</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">Ürünler</span>
      </>
    ),
    footerLang: 'tr',
  },
  en: {
    title: 'Our Products',
    description: 'Discover all our product families and solutions.',
    breadcrumb: (
      <>
        <Link to="/en" className="text-gray-400 font-bold">Home</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">Products</span>
      </>
    ),
    footerLang: 'en',
  },
};

const ProductList: React.FC = () => {
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

  return (
    <div>
      <Header language={lang} setLanguage={() => {}} />
      <Banner
        title={page.title}
        description={page.description}
        image={process.env.PUBLIC_URL + '/banner.png'}
        breadcrumb={page.breadcrumb}
      />
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col justify-between min-h-[220px] border border-gray-200">
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
      <Footer language={lang} />
    </div>
  );
};

export default ProductList; 