import React from 'react';
import { ShieldCheckIcon, UserGroupIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface ServicesCardsProps {
  language: 'tr' | 'en';
}

const services = [
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-blue-600" />,
    title: {
      tr: 'Danışmanlık Hizmetleri',
      en: 'Consultancy Services',
    },
    desc: {
      tr: 'Bilgi güvenliği, iş sürekliliği, kişisel veri yönetimi, BT servis yönetimleri gibi birçok alanda hizmet etmek için buradayız.',
      en: 'We are here to serve in many areas such as information security, business continuity, personal data management, and IT service management.',
    },
    link: '#consultancy',
  },
  {
    icon: <UserGroupIcon className="h-10 w-10 text-blue-600" />,
    title: {
      tr: 'Profesyonel Hizmetler',
      en: 'Professional Services',
    },
    desc: {
      tr: 'Müşteri memnuniyetini esas alarak kalite standartlarına yönelik hizmet sunuyoruz.',
      en: 'We provide services focused on customer satisfaction and quality standards.',
    },
    link: '#professional',
  },
  {
    icon: <DevicePhoneMobileIcon className="h-10 w-10 text-blue-600" />,
    title: {
      tr: 'Uygulama Geliştirme Hizmeti',
      en: 'Application Development Service',
    },
    desc: {
      tr: 'Android, iOS gibi en çok kullanılan mobil platformlar üzerinde her türlü ihtiyaca özel akıllı telefon uygulamaları sunuyoruz.',
      en: 'We offer custom smartphone applications for all needs on popular mobile platforms such as Android and iOS.',
    },
    link: '#appdev',
  },
];

const ServicesCards: React.FC<ServicesCardsProps> = ({ language }) => {
  return (
    <motion.section
      className="py-12 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-full mx-auto pl-8 md:pl-28 pr-8 md:pr-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{language === 'tr' ? 'Hizmetler' : 'Services'}</h2>
        <p className="text-lg text-gray-700 mb-10">
          {language === 'tr'
            ? 'Uzman ekibimizin deneyimi ve profesyonelliği ile ihtiyaçlarınızı daha iyi anlayın.'
            : 'Understand your needs better with the experience and professionalism of our expert team.'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-100 transition-all duration-200 ease-in-out
                hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title[language]}</h3>
              <p className="text-gray-700 mb-6">{service.desc[language]}</p>
              <a
                href={service.link}
                className="mt-auto text-blue-700 font-medium flex items-center gap-1 hover:underline"
              >
                {language === 'tr' ? 'Detaylı Bilgi' : 'More Info'}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesCards; 