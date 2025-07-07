import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';

const redirectToCorrectPath = () => {
  const pathSegmentsToKeep = 1;
  const l = window.location;
  const q = !l.pathname.includes('.') ? l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') : '';
  const s = l.search;
  const s2 = q ? (s ? '&' + s.slice(1) : '') : s.slice(1);
  const url = s2 ? (s ? s : '?') + s2.replace(/&/g, '~and~') : '';
  const h = l.hash;
  const g = '/' + q.replace(/~and~/g, '&');
  const newUrl = l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + g + (s ? '?' + s.slice(1).replace(/~and~/g, '&') : '') + h;
  window.history.replaceState(null, '', newUrl);
};
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Solutions from './components/Solutions';
import ServicesCards from './components/ServicesCards';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WebApplications from './components/Products/WebApplications';
import ProductList from './components/Products/ProductList';
import ERPSolutions from './components/Products/ERPSolutions';
import CRMSystems from './components/Products/CRMSystems';
import EcommercePlatforms from './components/Products/EcommercePlatforms';
import MobileApplications from './components/Products/MobileApplications';

const App: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const langFromUrl = pathname.startsWith('/en') ? 'en' : 'tr';
  const [language, setLanguage] = useState<'tr' | 'en'>(langFromUrl as 'tr' | 'en');

  useEffect(() => {
    if (window.location.pathname.includes('/?/')) {
      redirectToCorrectPath();
    }
  }, []);

  const handleSetLanguage = (lang: 'tr' | 'en') => {
    setLanguage(lang);
    if (lang === 'tr') navigate('/tr', { replace: true });
    else navigate('/en', { replace: true });
  };

  useEffect(() => {
    setLanguage(langFromUrl as 'tr' | 'en');
  }, [langFromUrl]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/tr" replace />} />
      <Route path=":lang" element={
        <>
          <Header language={language} setLanguage={handleSetLanguage} />
          <Hero language={language} />
          <FeaturedProducts language={language} />
          <Solutions language={language} />
          <ServicesCards language={language} />
          <BlogSection language={language} />
          <Contact language={language} />
          <Footer language={language} />
        </>
      } />
      <Route path=":lang/products/web-applications" element={<WebApplications />} />
      <Route path=":lang/products/erp-solutions" element={<ERPSolutions />} />
      <Route path=":lang/products/crm-systems" element={<CRMSystems />} />
      <Route path=":lang/products/ecommerce-platforms" element={<EcommercePlatforms />} />
      <Route path=":lang/products/mobile-applications" element={<MobileApplications />} />
      <Route path=":lang/products" element={<ProductList />} />
      <Route path="*" element={<Navigate to="/tr" replace />} />
    </Routes>
  );
};

export default App;
