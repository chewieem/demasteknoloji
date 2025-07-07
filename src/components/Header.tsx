import React, { useState, useRef, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, GlobeAltIcon, HomeIcon } from '@heroicons/react/24/outline';

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
      name: language === 'tr' ? 'Ürünler' : 'Products',
      href: '#products',
      dropdown: [
        { name: language === 'tr' ? 'Web Uygulamaları' : 'Web Applications', href: '#web-apps' },
        { name: language === 'tr' ? 'Mobil Uygulamalar' : 'Mobile Applications', href: '#mobile-apps' },
        { name: language === 'tr' ? 'E-ticaret Platformları' : 'E-commerce Platforms', href: '#ecommerce' },
        { name: language === 'tr' ? 'CRM Sistemleri' : 'CRM Systems', href: '#crm' },
        { name: language === 'tr' ? 'ERP Çözümleri' : 'ERP Solutions', href: '#erp' },
      ]
    },
    {
      name: language === 'tr' ? 'Çözümler' : 'Solutions',
      href: '#solutions',
      dropdown: [
        { name: language === 'tr' ? 'Dijital Dönüşüm' : 'Digital Transformation', href: '#digital-transformation' },
        { name: language === 'tr' ? 'Cloud Migration' : 'Cloud Migration', href: '#cloud-migration' },
        { name: language === 'tr' ? 'API Entegrasyonu' : 'API Integration', href: '#api-integration' },
        { name: language === 'tr' ? 'DevOps Çözümleri' : 'DevOps Solutions', href: '#devops' },
        { name: language === 'tr' ? 'Güvenlik Çözümleri' : 'Security Solutions', href: '#security' },
      ]
    },
    {
      name: language === 'tr' ? 'Hizmetler' : 'Services',
      href: '#services',
      dropdown: [
        { name: language === 'tr' ? 'Web Geliştirme' : 'Web Development', href: '#web-development' },
        { name: language === 'tr' ? 'Mobil Geliştirme' : 'Mobile Development', href: '#mobile-development' },
        { name: language === 'tr' ? 'UI/UX Tasarım' : 'UI/UX Design', href: '#ui-ux-design' },
        { name: language === 'tr' ? 'Test & QA' : 'Test & QA', href: '#testing' },
        { name: language === 'tr' ? 'Teknik Destek' : 'Technical Support', href: '#support' },
      ]
    },
    {
      name: language === 'tr' ? 'Hakkımızda' : 'About',
      href: '#about',
      dropdown: [
        { name: language === 'tr' ? 'Şirket Profili' : 'Company Profile', href: '#company-profile' },
        { name: language === 'tr' ? 'Misyon & Vizyon' : 'Mission & Vision', href: '#mission-vision' },
        { name: language === 'tr' ? 'Ekibimiz' : 'Our Team', href: '#team' },
        { name: language === 'tr' ? 'Referanslar' : 'References', href: '#references' },
        { name: language === 'tr' ? 'İletişim' : 'Contact', href: '#contact' },
      ]
    },
    { name: language === 'tr' ? 'Kariyer' : 'Career', href: '#career' },
    { name: language === 'tr' ? 'Blog' : 'Blog', href: '#blog' },
  ];

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Sadece masaüstünde çalışsın
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
              <a href="/" className="p-0 m-0">
                <img 
                  src={mobileMenuOpen ? process.env.PUBLIC_URL + "/logo-white.png" : process.env.PUBLIC_URL + "/logo.png"}
                  alt="DemaşTeknoloji Logo" 
                  className="h-10 w-auto"
                />
              </a>
              <div className="hidden lg:flex lg:gap-x-8">
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
                            {item.dropdown.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
                      >
                        {item.name}
                      </a>
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
                <a href="/" className="mr-2 p-2">
                  <HomeIcon className={`h-6 w-6 ${mobileMenuOpen ? 'text-white' : 'text-gray-700'}`} />
                </a>
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
          <a href="/" className="p-0 m-0">
            <img 
              src={mobileMenuOpen ? process.env.PUBLIC_URL + "/logo-white.png" : process.env.PUBLIC_URL + "/logo.png"}
              alt="DemaşTeknoloji Logo" 
              className="h-10 w-auto"
            />
          </a>
          <div className="flex items-center gap-2">
            <a href="/" className="p-2">
              <HomeIcon className="h-6 w-6 text-white" />
            </a>
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
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-lg px-3 py-2 text-sm leading-7 text-white"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ))}
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