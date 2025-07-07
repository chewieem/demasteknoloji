import React, { useState } from 'react';

interface TabbedSectionProps {
  language: 'tr' | 'en';
}

const tabs = {
  tr: [
    {
      label: 'Bankacılık',
      title: 'Bankacılık Çözümleri',
      description: 'Bankacılık sektörü için özel olarak geliştirilmiş çözümler. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    },
    {
      label: 'Sigorta',
      title: 'Sigorta Sektörü',
      description: 'Sigorta şirketleri için yenilikçi dijital çözümler. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    {
      label: 'Telekom',
      title: 'Telekomünikasyon',
      description: 'Telekom sektörü için ölçeklenebilir ve güvenli altyapı. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    },
    {
      label: 'Enerji',
      title: 'Enerji ve Doğalgaz',
      description: 'Enerji ve doğalgaz sektörüne özel dijital dönüşüm çözümleri. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
    },
  ],
  en: [
    {
      label: 'Banking',
      title: 'Banking Solutions',
      description: 'Specially developed solutions for the banking sector. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    },
    {
      label: 'Insurance',
      title: 'Insurance Sector',
      description: 'Innovative digital solutions for insurance companies. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    {
      label: 'Telecom',
      title: 'Telecommunications',
      description: 'Scalable and secure infrastructure for the telecom sector. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    },
    {
      label: 'Energy',
      title: 'Energy & Natural Gas',
      description: 'Digital transformation solutions for the energy and natural gas sector. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
    },
  ]
};

const TabbedSection: React.FC<TabbedSectionProps> = ({ language }) => {
  const [active, setActive] = useState(0);
  const tab = tabs[language][active];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          {language === 'tr' ? 'Sektörel Çözümler' : 'Sectoral Solutions'}
        </h2>
        <div className="flex justify-center mb-8 gap-4 flex-wrap">
          {tabs[language].map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-2 rounded-full font-semibold border transition-colors duration-200 ${active === i ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-50'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <img src={tab.image} alt={tab.title} className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-2xl shadow-lg" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">{tab.title}</h3>
            <p className="text-lg text-gray-600">{tab.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabbedSection; 