import React from 'react';
import Header from '../../Header';
import Banner from '../../Products/Banner';
import Footer from '../../Footer';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const content = {
  tr: {
    title: 'İnsan Kaynakları',
    description: 'Çalışanlarımızın gelişimi ve kariyer fırsatları',
    footerLang: 'tr',
  },
  en: {
    title: 'Human Resources',
    description: 'Employee development and career opportunities',
    footerLang: 'en',
  },
};

const HR: React.FC = () => {
  const location = useLocation();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  const hrPolicies = [
    {
      id: 1,
      icon: UserGroupIcon,
      title: { tr: 'Çalışan Gelişimi', en: 'Employee Development' },
      description: { 
        tr: 'Sürekli öğrenme ve gelişim odaklı kültür ile çalışanlarımızın potansiyellerini maksimize ediyoruz.',
        en: 'We maximize the potential of our employees with a culture focused on continuous learning and development.'
      },
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      items: [
        { tr: 'Kişisel gelişim planları', en: 'Personal development plans' },
        { tr: 'Mentorluk programları', en: 'Mentoring programs' },
        { tr: 'Liderlik geliştirme', en: 'Leadership development' },
        { tr: 'Kariyer planlama', en: 'Career planning' }
      ]
    },
    {
      id: 2,
      icon: AcademicCapIcon,
      title: { tr: 'Eğitim ve Öğrenme', en: 'Training and Learning' },
      description: { 
        tr: 'Teknoloji alanındaki en güncel bilgileri çalışanlarımızla paylaşarak sürekli gelişim sağlıyoruz.',
        en: 'We ensure continuous development by sharing the latest information in the technology field with our employees.'
      },
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      items: [
        { tr: 'Teknik eğitimler', en: 'Technical training' },
        { tr: 'Yazılım sertifikaları', en: 'Software certifications' },
        { tr: 'Konferans katılımları', en: 'Conference participation' },
        { tr: 'Online öğrenme platformları', en: 'Online learning platforms' }
      ]
    },

  ];

  const careerOpportunities = [
    {
      id: 1,
      title: { tr: 'Yazılım Geliştirici', en: 'Software Developer' },
      department: { tr: 'Teknoloji', en: 'Technology' },
      location: { tr: 'İstanbul, Türkiye', en: 'Istanbul, Turkey' },
      type: { tr: 'Tam Zamanlı', en: 'Full Time' },
      experience: { tr: '3-5 yıl', en: '3-5 years' },
      skills: ['React', 'Node.js', 'TypeScript', 'AWS']
    },
    {
      id: 2,
      title: { tr: 'Siber Güvenlik Uzmanı', en: 'Cybersecurity Specialist' },
      department: { tr: 'Güvenlik', en: 'Security' },
      location: { tr: 'Ankara, Türkiye', en: 'Ankara, Turkey' },
      type: { tr: 'Tam Zamanlı', en: 'Full Time' },
      experience: { tr: '5-7 yıl', en: '5-7 years' },
      skills: ['Penetration Testing', 'SIEM', 'Network Security', 'Compliance']
    },
    {
      id: 3,
      title: { tr: 'UX/UI Tasarımcısı', en: 'UX/UI Designer' },
      department: { tr: 'Tasarım', en: 'Design' },
      location: { tr: 'İzmir, Türkiye', en: 'Izmir, Turkey' },
      type: { tr: 'Tam Zamanlı', en: 'Full Time' },
      experience: { tr: '2-4 yıl', en: '2-4 years' },
      skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping']
    },
    {
      id: 4,
      title: { tr: 'Proje Yöneticisi', en: 'Project Manager' },
      department: { tr: 'Yönetim', en: 'Management' },
      location: { tr: 'Bursa, Türkiye', en: 'Bursa, Turkey' },
      type: { tr: 'Tam Zamanlı', en: 'Full Time' },
      experience: { tr: '4-6 yıl', en: '4-6 years' },
      skills: ['Agile', 'Scrum', 'Risk Management', 'Stakeholder Management']
    }
  ];



  const breadcrumb = (
    <div className="mt-1 mb-2 text-sm flex items-center space-x-2">
      <Link to={`/${lang}`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <Link to={`/${lang}/about/company`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Kurumsal' : 'About'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <span className="text-white font-bold">{page.title}</span>
    </div>
  );

  return (
    <div>
      <Header language={lang} setLanguage={() => {}} />
      <Banner
        title={page.title}
        description={page.description}
        image={process.env.PUBLIC_URL + '/banner.png'}
        breadcrumb={breadcrumb}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* İnsan Kaynakları Politikaları */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'tr' ? 'İnsan Kaynakları Politikalarımız' : 'Our HR Policies'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {lang === 'tr' 
                ? 'Çalışanlarımızın gelişimi ve refahı için kapsamlı insan kaynakları politikaları uyguluyoruz.'
                : 'We implement comprehensive human resources policies for the development and wellbeing of our employees.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hrPolicies.map((policy, idx) => (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${policy.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <policy.icon className={`w-8 h-8 ${policy.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {policy.title[lang]}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {policy.description[lang]}
                </p>

                <ul className="space-y-2">
                  {policy.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full ${policy.bgColor}`}></div>
                      {item[lang]}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Kariyer Fırsatları */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'tr' ? 'Açık Pozisyonlar' : 'Open Positions'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {lang === 'tr' 
                ? 'Teknoloji alanında uzmanlaşmış ekibimize katılmak için fırsatlar.'
                : 'Opportunities to join our team specialized in technology.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerOpportunities.map((position, idx) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {position.title[lang]}
                    </h3>
                    <p className="text-gray-600">{position.department[lang]}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {position.type[lang]}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">{lang === 'tr' ? 'Lokasyon' : 'Location'}:</span>
                    <p className="text-gray-900">{position.location[lang]}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">{lang === 'tr' ? 'Deneyim' : 'Experience'}:</span>
                    <p className="text-gray-900">{position.experience[lang]}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-gray-500 text-sm">{lang === 'tr' ? 'Gerekli Beceriler' : 'Required Skills'}:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {position.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  {lang === 'tr' ? 'Başvur' : 'Apply'}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>

      <Footer language={lang} />
    </div>
  );
};

export default HR; 