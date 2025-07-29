import React, { useState } from 'react';
import { Cog6ToothIcon, BuildingOffice2Icon, Squares2X2Icon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface SolutionsProps {
  language: 'tr' | 'en';
}

const solutions = [
  {
    key: 'integration',
    icon: <Cog6ToothIcon className="h-7 w-7 md:h-8 md:w-8 mr-2 text-blue-500" />,
    bigIcon: <Cog6ToothIcon className="h-16 w-16 text-blue-500 mx-auto" />,
    title: { tr: 'Sistem Entegrasyon Çözümleri', en: 'System Integration Solutions' },
    desc: {
      tr: 'Kurumsal süreçlerinizi kolaylaştırmak için yazılım ve donanımı en iyi şekilde entegre ediyor, uçtan uca eksiksiz çözümler sunuyoruz.',
      en: 'We integrate software and hardware in the best way to facilitate your corporate processes, offering end-to-end complete solutions.'
    }
  },
  {
    key: 'corporate',
    icon: <BuildingOffice2Icon className="h-7 w-7 md:h-8 md:w-8 mr-2 text-blue-500" />,
    bigIcon: <BuildingOffice2Icon className="h-16 w-16 text-blue-500 mx-auto" />,
    title: { tr: 'Kurumsal Çözümler', en: 'Corporate Solutions' },
    desc: {
      tr: 'İş süreçlerinizi dijitalleştirerek verimliliğinizi artıran, özelleştirilebilir yapıda yazılım çözümleri geliştiriyoruz.',
      en: 'We develop software solutions in customizable structure that increase your efficiency by digitizing your business processes.'
    }
  },
  {
    key: 'sap',
    icon: <Squares2X2Icon className="h-7 w-7 md:h-8 md:w-8 mr-2 text-blue-500" />,
    bigIcon: <Squares2X2Icon className="h-16 w-16 text-blue-500 mx-auto" />,
    title: { tr: 'SAP Çözümleri', en: 'SAP Solutions' },
    desc: {
      tr: 'SAP danışmanlığı ve sistem entegrasyonu ile süreçlerinizi optimize ediyor, operasyonel mükemmellik sağlıyoruz.',
      en: 'We optimize your processes with SAP consultancy and system integration, ensuring operational excellence.'
    }
  },
  {
    key: 'telecom',
    icon: <DevicePhoneMobileIcon className="h-7 w-7 md:h-8 md:w-8 mr-2 text-blue-500" />,
    bigIcon: <DevicePhoneMobileIcon className="h-16 w-16 text-blue-500 mx-auto" />,
    title: { tr: 'Telekom Çözümleri', en: 'Telecom Solutions' },
    desc: {
      tr: 'Telekom sektörüne özel, yüksek performanslı ve güvenilir yazılım çözümleri sunuyoruz.',
      en: 'We offer high-performance and reliable software solutions specifically designed for the telecom sector.'
    }
  },
];

const Solutions: React.FC<SolutionsProps> = ({ language }) => {
  const [selected, setSelected] = useState(0);

  return (
    <motion.section
      className="py-2 bg-white"
      id="solutions"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-full mx-auto pl-8 md:pl-28 pr-8 md:pr-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left break-words whitespace-normal">
          {language === 'tr' ? 'Çözümler' : 'Solutions'}
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-left max-w-4xl">
          {language === 'tr'
            ? 'Geliştirdiğimiz çözümler ile dört ayrı ana alanda inovasyonun desteği sizinle! Sistem entegrasyon, telekom, SAP ve kurumsal çözümlerimiz ile tüm fırsatları yakalayın.'
            : 'With our solutions, you have innovation support in four main areas! Discover all the opportunities with our system integration, telecom, SAP, and corporate solutions.'}
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-stretch">
          {/* Left: Vertical Menu */}
          <div className="grid grid-cols-2 gap-3 md:flex md:flex-col md:w-1/3 lg:w-1/4 md:gap-4 justify-center md:justify-start mb-8 md:mb-0 md:overflow-visible md:pl-0">
            {solutions.map((sol, idx) => (
              <button
                key={sol.key}
                onClick={() => setSelected(idx)}
                className={`flex flex-col md:flex-row items-center justify-center md:items-center md:justify-start w-full h-24 md:h-auto text-base md:text-xl font-semibold transition-all px-2 py-2 md:px-4 md:py-4 text-center md:text-left rounded-lg border-2 md:border-l-8 border-transparent focus:outline-none shadow-sm
                  ${selected === idx
                    ? 'bg-blue-50 border-blue-500 text-blue-900 shadow-md scale-[1.03]'
                    : 'text-gray-400 hover:bg-gray-50 hover:text-blue-700 hover:border-blue-300'}
                `}
              >
                <span className="mb-1 md:mb-0 md:mr-2">{sol.icon}</span>
                <span className="break-words whitespace-normal text-xs md:text-xl">{sol.title[language]}</span>
              </button>
            ))}
          </div>
          {/* Right: Content */}
          <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="w-full md:w-3/4 max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 border border-gray-100 md:ml-8">
              <div className="mb-4 md:mb-0 flex-shrink-0">{solutions[selected].bigIcon}</div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold mb-4 text-gray-900 break-words whitespace-normal">{solutions[selected].title[language]}</h3>
                <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">{solutions[selected].desc[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Solutions; 