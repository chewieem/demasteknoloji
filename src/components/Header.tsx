import React, { useState, useRef, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, GlobeAltIcon, HomeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

interface HeaderProps {
  language: 'tr' | 'en';
  setLanguage: (language: 'tr' | 'en') => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
          name: language === 'tr' ? 'Kurumsal Kimlik' : 'Corporate Identity',
          href: `/${language}/about/identity`,
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
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
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
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Menüyü kapat</span>
              <XMarkIcon className="h-6 w-6 text-white font-bold" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mt-10 flow-root">
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
                    <a
                      href={item.href}
                      className="block w-full text-left rounded-lg px-3 py-2 text-base font-bold text-white leading-7"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
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