import React, { useState, useRef, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, GlobeAltIcon, HomeIcon, MagnifyingGlassIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  language: 'tr' | 'en';
  setLanguage: (language: 'tr' | 'en') => void;
}

interface SearchResult {
  title: string;
  path: string;
  category: string;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Tüm sayfa verilerini tanımla
  const allPages: SearchResult[] = [
    // Ana Sayfa
    { title: language === 'tr' ? 'Ana Sayfa' : 'Home', path: `/${language}`, category: language === 'tr' ? 'Ana Sayfa' : 'Home' },
    
    // Hakkımızda
    { title: language === 'tr' ? 'Demaş Teknoloji Hakkında' : 'About Demaş Teknoloji', path: `/${language}/about/company`, category: language === 'tr' ? 'Hakkımızda' : 'About' },
    { title: language === 'tr' ? 'Yönetim ve Ekibimiz' : 'Management & Our Team', path: `/${language}/about/team`, category: language === 'tr' ? 'Hakkımızda' : 'About' },
    { title: language === 'tr' ? 'Sertifikasyon ve Dökümantasyon' : 'Certification & Documentation', path: `/${language}/about/certification`, category: language === 'tr' ? 'Hakkımızda' : 'About' },
    { title: language === 'tr' ? 'Fatura Bilgileri' : 'Invoice Information', path: `/${language}/about/invoice`, category: language === 'tr' ? 'Hakkımızda' : 'About' },
    
    // Sertifikasyon Alt Sayfaları
    { title: language === 'tr' ? 'Çerez Politikası' : 'Cookie Policy', path: `/${language}/about/certification/cerez`, category: language === 'tr' ? 'Sertifikasyon' : 'Certification' },
    { title: language === 'tr' ? 'Gizlilik Politikası ve Kişisel Veriler' : 'Privacy Policy & Personal Data', path: `/${language}/about/certification/gizlilik-veri`, category: language === 'tr' ? 'Sertifikasyon' : 'Certification' },
    { title: language === 'tr' ? 'Tedarikçi ve Müşterilerin Sözleşme Süreçlerine Yönelik KVKK Aydınlatma Metni' : 'KVKK Disclosure Text for Supplier and Customer Contract Processes', path: `/${language}/about/certification/kvkk-aydinlatma`, category: language === 'tr' ? 'Sertifikasyon' : 'Certification' },
    { title: language === 'tr' ? 'Veri Sorumlusuna Başvuru Formu' : 'Data Controller Application Form', path: `/${language}/about/certification/veri-sorumlusu-basvuru`, category: language === 'tr' ? 'Sertifikasyon' : 'Certification' },
    { title: language === 'tr' ? 'Gizlilik Sözleşmesi ve Kullanım Hakları' : 'Privacy Agreement & Usage Rights', path: `/${language}/about/certification/gizlilik-kullanim`, category: language === 'tr' ? 'Sertifikasyon' : 'Certification' },
    { title: language === 'tr' ? 'Bilgi Toplumu Hizmetleri' : 'Information Society Services', path: `/${language}/about/certification/bilgi-toplumu`, category: language === 'tr' ? 'Sertifikasyon' : 'Certification' },
    
    // Ürünler
    { title: language === 'tr' ? 'Ürün 1' : 'Product 1', path: `/${language}/products/web-applications`, category: language === 'tr' ? 'Ürünler' : 'Products' },
    { title: language === 'tr' ? 'Ürün 2' : 'Product 2', path: `/${language}/products/mobile-applications`, category: language === 'tr' ? 'Ürünler' : 'Products' },
    { title: language === 'tr' ? 'Ürün 3' : 'Product 3', path: `/${language}/products/ecommerce-platforms`, category: language === 'tr' ? 'Ürünler' : 'Products' },
    { title: language === 'tr' ? 'Ürün 4' : 'Product 4', path: `/${language}/products/crm-systems`, category: language === 'tr' ? 'Ürünler' : 'Products' },
    { title: language === 'tr' ? 'Ürün 5' : 'Product 5', path: `/${language}/products/erp-solutions`, category: language === 'tr' ? 'Ürünler' : 'Products' },
    
    // Çözümler
    { title: language === 'tr' ? 'Çözüm 1' : 'Solution 1', path: `/${language}/solutions/solution1`, category: language === 'tr' ? 'Çözümler' : 'Solutions' },
    { title: language === 'tr' ? 'Çözüm 2' : 'Solution 2', path: `/${language}/solutions/solution2`, category: language === 'tr' ? 'Çözümler' : 'Solutions' },
    { title: language === 'tr' ? 'Çözüm 3' : 'Solution 3', path: `/${language}/solutions/solution3`, category: language === 'tr' ? 'Çözümler' : 'Solutions' },
    { title: language === 'tr' ? 'Çözüm 4' : 'Solution 4', path: `/${language}/solutions/solution4`, category: language === 'tr' ? 'Çözümler' : 'Solutions' },
    { title: language === 'tr' ? 'Çözüm 5' : 'Solution 5', path: `/${language}/solutions/solution5`, category: language === 'tr' ? 'Çözümler' : 'Solutions' },
    
    // Hizmetler
    { title: language === 'tr' ? 'Hizmet 1' : 'Service 1', path: `/${language}/services/service1`, category: language === 'tr' ? 'Hizmetler' : 'Services' },
    { title: language === 'tr' ? 'Hizmet 2' : 'Service 2', path: `/${language}/services/service2`, category: language === 'tr' ? 'Hizmetler' : 'Services' },
    { title: language === 'tr' ? 'Hizmet 3' : 'Service 3', path: `/${language}/services/service3`, category: language === 'tr' ? 'Hizmetler' : 'Services' },
    { title: language === 'tr' ? 'Hizmet 4' : 'Service 4', path: `/${language}/services/service4`, category: language === 'tr' ? 'Hizmetler' : 'Services' },
    { title: language === 'tr' ? 'Hizmet 5' : 'Service 5', path: `/${language}/services/service5`, category: language === 'tr' ? 'Hizmetler' : 'Services' },
    
    // Kariyer
    { title: language === 'tr' ? 'Kariyer' : 'Career', path: `/${language}/career`, category: language === 'tr' ? 'Kariyer' : 'Career' },
    
    // Blog
    { title: language === 'tr' ? 'Blog' : 'Blog', path: '#blog', category: language === 'tr' ? 'Blog' : 'Blog' },
  ];

  const navigation = [
    {
      name: language === 'tr' ? 'Hakkımızda' : 'About',
      href: '#about',
      dropdown: [
        {
          name: language === 'tr' ? 'Demaş Teknoloji Hakkında' : 'About Demaş Teknoloji',
          href: `/${language}/about/company`,
        },
        {
          name: language === 'tr' ? 'Yönetim ve Ekibimiz' : 'Management & Our Team',
          href: `/${language}/about/team`,
        },
        {
          name: language === 'tr' ? 'Sertifikasyon ve Dökümantasyon' : 'Certification & Documentation',
          href: `/${language}/about/certification`,
        },
        {
          name: language === 'tr' ? 'Fatura Bilgileri' : 'Invoice Information',
          href: `/${language}/about/invoice`,
        },
      ]
    },
    {
      name: language === 'tr' ? 'Ürünler' : 'Products',
      href: '#products',
      dropdown: [
        { name: language === 'tr' ? 'Ürün 1' : 'Product 1', href: `/${language}/products/web-applications` },
        { name: language === 'tr' ? 'Ürün 2' : 'Product 2', href: `/${language}/products/mobile-applications` },
        { name: language === 'tr' ? 'Ürün 3' : 'Product 3', href: `/${language}/products/ecommerce-platforms` },
        { name: language === 'tr' ? 'Ürün 4' : 'Product 4', href: `/${language}/products/crm-systems` },
        { name: language === 'tr' ? 'Ürün 5' : 'Product 5', href: `/${language}/products/erp-solutions` },
      ]
    },
    {
      name: language === 'tr' ? 'Çözümler' : 'Solutions',
      href: `/${language}/solutions`,
      dropdown: [
        { name: language === 'tr' ? 'Çözüm 1' : 'Solution 1', href: `/${language}/solutions/solution1` },
        { name: language === 'tr' ? 'Çözüm 2' : 'Solution 2', href: `/${language}/solutions/solution2` },
        { name: language === 'tr' ? 'Çözüm 3' : 'Solution 3', href: `/${language}/solutions/solution3` },
        { name: language === 'tr' ? 'Çözüm 4' : 'Solution 4', href: `/${language}/solutions/solution4` },
        { name: language === 'tr' ? 'Çözüm 5' : 'Solution 5', href: `/${language}/solutions/solution5` },
      ]
    },
    {
      name: language === 'tr' ? 'Hizmetler' : 'Services',
      href: `/${language}/services`,
      dropdown: [
        { name: language === 'tr' ? 'Hizmet 1' : 'Service 1', href: `/${language}/services/service1` },
        { name: language === 'tr' ? 'Hizmet 2' : 'Service 2', href: `/${language}/services/service2` },
        { name: language === 'tr' ? 'Hizmet 3' : 'Service 3', href: `/${language}/services/service3` },
        { name: language === 'tr' ? 'Hizmet 4' : 'Service 4', href: `/${language}/services/service4` },
        { name: language === 'tr' ? 'Hizmet 5' : 'Service 5', href: `/${language}/services/service5` },
      ]
    },
    { name: language === 'tr' ? 'Kariyer' : 'Career', href: `/${language}/career` },
    { name: language === 'tr' ? 'Blog' : 'Blog', href: '#blog' },
  ];

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      if (openDropdown) {
        const dropdownElement = dropdownRefs.current[openDropdown];
        const target = event.target as Node;
        if (dropdownElement && !dropdownElement.contains(target)) {
          setOpenDropdown(null);
        }
      }
      
      // Search results click outside
      if (showSearchResults && searchRef.current) {
        const target = event.target as Node;
        if (!searchRef.current.contains(target)) {
          setShowSearchResults(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown, showSearchResults]);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim().length > 0) {
      const filtered = allPages.filter(page => 
        page.title.toLowerCase().includes(query.toLowerCase()) ||
        page.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered.slice(0, 8)); // Maksimum 8 sonuç
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && searchResults.length > 0) {
      navigate(searchResults[0].path);
      setSearchQuery('');
      setSearchResults([]);
      setShowSearchResults(false);
      setIsSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    navigate(result.path);
    setSearchQuery('');
    setSearchResults([]);
    setShowSearchResults(false);
    setIsSearchOpen(false);
    setMobileMenuOpen(false);
  };

  // Bize Ulaşın butonu için fonksiyon
  const handleContactClick = () => {
    const homePath = `/${language}`;
    if (location.pathname === homePath || location.pathname === `/${language}/`) {
      // Ana sayfadaysa scroll
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Eğer element henüz yüklenmediyse, biraz bekleyip tekrar dene
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      // Ana sayfaya yönlendir, query param ile scroll tetikle
      navigate(`/${language}?scroll=contact`);
    }
  };

  return (
    <>
      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300" />
      )}
      {/* Main content wrapper for animation */}
      <div className={`transition-all duration-300 ${mobileMenuOpen ? 'transform scale-95 -translate-x-10 blur-sm' : ''}`}>
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
          <nav className="mx-auto flex max-w-full items-center justify-between p-4 px-4 lg:px-24" aria-label="Global">
            <div className="flex items-center gap-8">
              <Link to={`/${language}`} className="p-0 m-0">
                <img 
                  src={mobileMenuOpen ? process.env.PUBLIC_URL + "/logo-white.png" : process.env.PUBLIC_URL + "/logo.png"}
                  alt="DemaşTeknoloji Logo" 
                  className="h-10 w-auto"
                />
              </Link>
              <div className="hidden lg:flex lg:gap-x-8">
                <Link to={`/${language}`} className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors">{language === 'tr' ? 'Ana Sayfa' : 'Home'}</Link>
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.dropdown ? (
                      <div className="relative" ref={(el) => { dropdownRefs.current[item.name] = el; }}>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleDropdownToggle(item.name); }}
                          className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
                        >
                          {item.name}
                          <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        <div 
                          className={`absolute left-0 z-10 mt-2 w-52 rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${
                            openDropdown === item.name 
                              ? 'opacity-100 scale-100 translate-y-0' 
                              : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                          }`}
                        >
                          <div className="py-2">
                            {item.dropdown.map((subItem) => {
                              if (subItem.href.startsWith('/')) {
                                return (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    {subItem.name}
                                  </Link>
                                );
                              } else {
                                return (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium"
                                  >
                                    {subItem.name}
                                  </a>
                                );
                              }
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                      item.href.startsWith('/') ? (
                        <Link
                          to={item.href}
                          className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Desktop Search */}
              <div className="hidden lg:flex items-center gap-2">
                <div className="relative" ref={searchRef}>
                  {/* Search Input */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    isSearchOpen 
                      ? 'w-64 opacity-100 scale-100' 
                      : 'w-10 opacity-100 scale-100'
                  }`}>
                    <form onSubmit={handleSearchSubmit} className="flex items-center">
                      <div className="relative w-full">
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchQuery}
                          onChange={handleSearchChange}
                          placeholder={language === 'tr' ? 'Arayın...' : 'Search...'}
                          className={`w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
                            isSearchOpen ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                        <button
                          type={isSearchOpen ? 'button' : 'button'}
                          onClick={toggleSearch}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <MagnifyingGlassIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  </div>
                  
                  {/* Desktop Search Results */}
                  {showSearchResults && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleResultClick(result)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{result.title}</div>
                          <div className="text-sm text-gray-500">{result.category}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Contact Button */}
                <button
                  onClick={handleContactClick}
                  className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <EnvelopeIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="hidden lg:flex">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                >
                  <GlobeAltIcon className="h-5 w-5" />
                  {language === 'tr' ? 'EN' : 'TR'}
                </button>
              </div>
              <div className="flex lg:hidden items-center">
                <button
                  onClick={toggleSearch}
                  className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={handleContactClick}
                  className={`flex items-center justify-center w-10 h-10 transition-colors ${
                    mobileMenuOpen ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <EnvelopeIcon className="h-5 w-5" />
                </button>
                <Link to={`/${language}`} className="mr-2 p-2">
                  <HomeIcon className={`h-6 w-6 ${mobileMenuOpen ? 'text-white' : 'text-gray-700'}`} />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Ana menüyü aç</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </nav>
          
          {/* Mobile Search Input */}
          <div className="lg:hidden px-4">
            <div className={`transition-all duration-300 ease-in-out ${
              isSearchOpen 
                ? 'h-16 opacity-100 scale-100' 
                : 'h-0 opacity-0 scale-95 overflow-hidden'
            }`}>
              <div className="relative" ref={searchRef}>
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      placeholder={language === 'tr' ? 'Arayın...' : 'Search...'}
                      className="w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900"
                    />
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </form>
                
                {/* Mobile Search Results */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                      >
                        <div className="font-medium text-gray-900">{result.title}</div>
                        <div className="text-sm text-gray-500">{result.category}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} bg-cover bg-center`}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/mobile-menu.png"})` }}
      >
        <div className="flex items-center justify-between px-4 lg:px-24 py-4">
          <Link to={`/${language}`} className="p-0 m-0">
            <img 
              src={mobileMenuOpen ? process.env.PUBLIC_URL + "/logo-white.png" : process.env.PUBLIC_URL + "/logo.png"}
              alt="DemaşTeknoloji Logo" 
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2">
            <Link to={`/${language}`} className="p-2">
              <HomeIcon className="h-6 w-6 text-white" />
            </Link>
            <button
              onClick={handleContactClick}
              className="p-2"
            >
              <EnvelopeIcon className="h-6 w-6 text-white" />
            </button>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Menüyü kapat</span>
              <XMarkIcon className="h-6 w-6 text-white font-bold" aria-hidden="true" />
            </button>
          </div>
        </div>
        
        <div className="mt-6 flow-root">
          <div className="-my-10 divide-y divide-gray-500/10 pl-6">
            <div className="space-y-2 py-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="block w-full text-left rounded-lg px-3 py-2 text-base font-bold text-white leading-7 flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDownIcon className={`h-4 w-8 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-200 ease-in-out ${
                          openDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdown.map((subItem) => {
                            if (subItem.href.startsWith('/')) {
                              return (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block rounded-lg px-3 py-2 text-sm leading-7 text-white"
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              );
                            } else {
                              return (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block rounded-lg px-3 py-2 text-sm leading-7 text-white"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </a>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    item.href.startsWith('/') ? (
                      <Link
                        to={item.href}
                        className="block w-full text-left rounded-lg px-3 py-2 text-base font-bold text-white leading-7"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="block w-full text-left rounded-lg px-3 py-2 text-base font-bold text-white leading-7"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>
              ))}
            </div>
            <div className="py-6">
              <button
                onClick={toggleLanguage}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-base font-bold text-white leading-7"
              >
                <GlobeAltIcon className="h-5 w-5 text-white" />
                {language === 'tr' ? 'English' : 'Türkçe'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;