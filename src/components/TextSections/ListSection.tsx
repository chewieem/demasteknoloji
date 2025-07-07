import React from 'react';

interface ListSectionProps {
  language: 'tr' | 'en';
}

const content = {
  tr: {
    title: 'Neden Bizi Seçmelisiniz?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac neque nec sapien dictum ultricies.',
    list: [
      'Deneyimli ve uzman ekip',
      'Hızlı ve güvenilir destek',
      'Yenilikçi çözümler',
      'Müşteri memnuniyeti odaklı yaklaşım',
    ],
  },
  en: {
    title: 'Why Choose Us?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac neque nec sapien dictum ultricies.',
    list: [
      'Experienced and expert team',
      'Fast and reliable support',
      'Innovative solutions',
      'Customer satisfaction oriented approach',
    ],
  },
};

const ListSection: React.FC<ListSectionProps> = ({ language }) => (
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">{content[language].title}</h2>
      <p className="text-lg text-gray-600 mb-8">{content[language].description}</p>
      <ul className="text-left max-w-xl mx-auto space-y-4">
        {content[language].list.map((item, i) => (
          <li className="flex items-start gap-3" key={i}><span className="mt-1 text-blue-600">•</span> {item}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default ListSection; 