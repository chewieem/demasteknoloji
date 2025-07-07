import React from 'react';

interface FeatureCardsSectionProps {
  language: 'tr' | 'en';
}

const features = {
  tr: [
    {
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600 mb-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
      ),
      title: 'Kolay Entegrasyon',
      description: 'Sisteminize hızlı ve kolay entegrasyon imkanı sunar. Lorem ipsum dolor sit amet, consectetur.'
    },
    {
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600 mb-2"><circle cx="12" cy="12" r="10" strokeWidth={2} /></svg>
      ),
      title: 'Güçlü Altyapı',
      description: 'Yüksek performanslı ve güvenli altyapı ile kesintisiz hizmet. Lorem ipsum dolor sit amet.'
    },
    {
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600 mb-2"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth={2} /></svg>
      ),
      title: 'Kullanıcı Dostu',
      description: 'Modern ve sezgisel arayüz ile kolay kullanım. Lorem ipsum dolor sit amet, consectetur.'
    },
    {
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600 mb-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      ),
      title: 'Yüksek Memnuniyet',
      description: 'Kullanıcılarımızdan yüksek memnuniyet oranı. Lorem ipsum dolor sit amet.'
    },
  ],
  en: [
    {
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600 mb-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
      ),
      title: 'Easy Integration',
      description: 'Provides fast and easy integration to your system. Lorem ipsum dolor sit amet, consectetur.'
    },
    {
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600 mb-2"><circle cx="12" cy="12" r="10" strokeWidth={2} /></svg>
      ),
      title: 'Robust Infrastructure',
      description: 'High-performance and secure infrastructure for uninterrupted service. Lorem ipsum dolor sit amet.'
    },
    {
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600 mb-2"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth={2} /></svg>
      ),
      title: 'User Friendly',
      description: 'Modern and intuitive interface for easy use. Lorem ipsum dolor sit amet, consectetur.'
    },
    {
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600 mb-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      ),
      title: 'High Satisfaction',
      description: 'High satisfaction rate from our users. Lorem ipsum dolor sit amet.'
    },
  ]
};

const FeatureCardsSection: React.FC<FeatureCardsSectionProps> = ({ language }) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        {language === 'tr' ? 'Avantajlarımız' : 'Our Advantages'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features[language].map((feature, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition-shadow">
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-500 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCardsSection; 