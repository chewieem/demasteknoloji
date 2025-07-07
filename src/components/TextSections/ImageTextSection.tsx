import React from 'react';

interface ImageTextSectionProps {
  reverse?: boolean;
  language: 'tr' | 'en';
}

const content = {
  tr: {
    title: 'Modern Tasarım',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.',
    list: [
      'Yüksek görsel kalite',
      'Responsive ve esnek yapı',
      'Kullanıcı odaklı deneyim',
    ],
  },
  en: {
    title: 'Modern Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.',
    list: [
      'High visual quality',
      'Responsive and flexible structure',
      'User-centered experience',
    ],
  },
};

const ImageTextSection: React.FC<ImageTextSectionProps> = ({ reverse, language }) => (
  <section className={`py-16 ${reverse ? 'bg-gradient-to-l from-blue-50 to-white' : 'bg-gradient-to-r from-blue-50 to-white'}`}>
    <div className={`max-w-7xl mx-auto px-4 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt={content[language].title}
          className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-900">{content[language].title}</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">{content[language].description}</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          {content[language].list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>
  </section>
);

export default ImageTextSection; 