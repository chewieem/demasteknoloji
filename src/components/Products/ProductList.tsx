import React from 'react';
import Header from '../Header';
import Banner from './Banner';
import Footer from '../Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const products = [
  {
    title: 'Skywave Ürün Ailesi',
    desc: 'Geleceğin Bağlantılı Dünyasını Hazırlayan Çözümler',
    link: '/tr/products/skywave',
  },
  {
    title: 'PayFlex Ürün Ailesi',
    desc: 'PayFlex Payment ürünleri ile yenilikçi ödeme çözümleri',
    link: '/tr/products/payflex',
  },
  {
    title: 'LEGA Ürün Ailesi',
    desc: 'İdari ve yasal takibi kolaylaştıran hukuk otomasyonu çözümleri',
    link: '/tr/products/lega',
  },
  {
    title: 'Kiosk Innova Ürün Ailesi',
    desc: 'Özelleştirilebilir kiosk donanımları, yazılımları ve hizmetleri',
    link: '/tr/products/kiosk-innova',
  },
  {
    title: 'AvioFlex Ürün Ailesi',
    desc: 'Havacılık sektörünün tüm süreçleri için etkili teknoloji çözümleri',
    link: '/tr/products/avioflex',
  },
  {
    title: 'HICAMP Ürün Ailesi',
    desc: 'Sağlık tesisleri için bilgi yönetim sistemleri ve çözüm platformları',
    link: '/tr/products/hicamp',
  },
  {
    title: 'Network 360',
    desc: 'Kullanıcı dostu ve kolay uygulanabilir ağ yönetim sistemi',
    link: '/tr/products/network360',
  },
  {
    title: 'HERMES',
    desc: 'Müşteriler ve çalışanlarla etkili iletişim için uçtan uca çözümler',
    link: '/tr/products/hermes',
  },
];

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
  const navigate = useNavigate();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

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