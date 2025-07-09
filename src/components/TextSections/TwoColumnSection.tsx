import React from 'react';

const content = {
  tr: {
    left: {
      title: 'ÜRÜN',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    right: {
      title: 'ÜRÜN Lite',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  },
  en: {
    left: {
      title: 'PRODUCT',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    right: {
      title: 'PRODUCT Lite',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
};

interface TwoColumnLegaSectionProps {
  language: 'tr' | 'en';
}

const TwoColumnLegaSection: React.FC<TwoColumnLegaSectionProps> = ({ language }) => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{content[language].left.title}</h2>
        <p className="text-lg text-gray-800 whitespace-pre-line">{content[language].left.text}</p>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{content[language].right.title}</h2>
        <p className="text-lg text-gray-800 whitespace-pre-line">{content[language].right.text}</p>
      </div>
    </div>
  </section>
);

export default TwoColumnLegaSection; 