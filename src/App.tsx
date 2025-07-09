import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Solutions from './components/Solutions';
import ServicesCards from './components/ServicesCards';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WebApplications from './components/Products/Product1';
import MobileApplications from './components/Products/Product2';
import EcommercePlatforms from './components/Products/Product3';
import CRMSystems from './components/Products/Product4';
import ERPSolutions from './components/Products/Product5';
import ProductList from './components/Products/ProductList';
import Solution1 from './components/Solutions/Solution1';
import Solution2 from './components/Solutions/Solution2';
import Solution3 from './components/Solutions/Solution3';
import Solution4 from './components/Solutions/Solution4';
import Solution5 from './components/Solutions/Solution5';
import SolutionsList from './components/Solutions/SolutionsList';
import Service1 from './components/Services/Service1';
import Service2 from './components/Services/Service2';
import Service3 from './components/Services/Service3';
import Service4 from './components/Services/Service4';
import Service5 from './components/Services/Service5';
import ServicesList from './components/Services/ServicesList';
import Career from './components/Career';

const App: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const langFromUrl = pathname.startsWith('/en') ? 'en' : 'tr';
  const [language, setLanguage] = useState<'tr' | 'en'>(langFromUrl as 'tr' | 'en');

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
      <Route path=":lang/products/web-applications/urun" element={<WebApplications />} />
      <Route path=":lang/products/web-applications/urun-lite" element={<WebApplications />} />
      <Route path=":lang/products/erp-solutions" element={<ERPSolutions />} />
      <Route path=":lang/products/crm-systems" element={<CRMSystems />} />
      <Route path=":lang/products/ecommerce-platforms" element={<EcommercePlatforms />} />
      <Route path=":lang/products/mobile-applications" element={<MobileApplications />} />
      <Route path=":lang/products" element={<ProductList />} />
      <Route path=":lang/solutions" element={<SolutionsList />} />
      <Route path=":lang/solutions/solution1" element={<Solution1 />} />
      <Route path=":lang/solutions/solution1/urun" element={<Solution1 />} />
      <Route path=":lang/solutions/solution1/urun-lite" element={<Solution1 />} />
      <Route path=":lang/solutions/solution2" element={<Solution2 />} />
      <Route path=":lang/solutions/solution2/urun" element={<Solution2 />} />
      <Route path=":lang/solutions/solution2/urun-lite" element={<Solution2 />} />
      <Route path=":lang/solutions/solution3" element={<Solution3 />} />
      <Route path=":lang/solutions/solution3/urun" element={<Solution3 />} />
      <Route path=":lang/solutions/solution3/urun-lite" element={<Solution3 />} />
      <Route path=":lang/solutions/solution4" element={<Solution4 />} />
      <Route path=":lang/solutions/solution4/urun" element={<Solution4 />} />
      <Route path=":lang/solutions/solution4/urun-lite" element={<Solution4 />} />
      <Route path=":lang/solutions/solution5" element={<Solution5 />} />
      <Route path=":lang/solutions/solution5/urun" element={<Solution5 />} />
      <Route path=":lang/solutions/solution5/urun-lite" element={<Solution5 />} />
      <Route path=":lang/services" element={<ServicesList />} />
      <Route path=":lang/services/service1" element={<Service1 />} />
      <Route path=":lang/services/service1/urun" element={<Service1 />} />
      <Route path=":lang/services/service1/urun-lite" element={<Service1 />} />
      <Route path=":lang/services/service2" element={<Service2 />} />
      <Route path=":lang/services/service2/urun" element={<Service2 />} />
      <Route path=":lang/services/service2/urun-lite" element={<Service2 />} />
      <Route path=":lang/services/service3" element={<Service3 />} />
      <Route path=":lang/services/service3/urun" element={<Service3 />} />
      <Route path=":lang/services/service3/urun-lite" element={<Service3 />} />
      <Route path=":lang/services/service4" element={<Service4 />} />
      <Route path=":lang/services/service4/urun" element={<Service4 />} />
      <Route path=":lang/services/service4/urun-lite" element={<Service4 />} />
      <Route path=":lang/services/service5" element={<Service5 />} />
      <Route path=":lang/services/service5/urun" element={<Service5 />} />
      <Route path=":lang/services/service5/urun-lite" element={<Service5 />} />
      <Route path=":lang/career" element={<Career />} />
      <Route path=":lang/career/jobs" element={<Career />} />
      <Route path=":lang/career/internships" element={<Career />} />
      <Route path="*" element={<Navigate to="/tr" replace />} />
    </Routes>
  );
};

export default App;
