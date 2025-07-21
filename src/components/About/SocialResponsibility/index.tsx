import React from 'react';
import Header from '../../Header';
import Banner from '../../Products/Banner';
import Footer from '../../Footer';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartIcon, AcademicCapIcon, GlobeAltIcon, UserGroupIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const content = {
  tr: {
    title: 'Sosyal Sorumluluk',
    description: 'Toplumsal fayda sağlayan projeler ve sosyal sorumluluk çalışmalarımız',
    footerLang: 'tr',
  },
  en: {
    title: 'Social Responsibility',
    description: 'Projects that provide social benefit and our social responsibility work',
    footerLang: 'en',
  },
};

const SocialResponsibility: React.FC = () => {
  const location = useLocation();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  const socialAreas = [
    {
      id: 1,
      icon: AcademicCapIcon,
      title: { tr: 'Eğitim ve Öğrenme', en: 'Education and Learning' },
      description: { 
        tr: 'Dijital okuryazarlık ve teknoloji eğitimleri ile gelecek nesilleri güçlendiriyoruz.',
        en: 'We empower future generations through digital literacy and technology education.'
      },
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      projects: [
        { tr: 'Dijital Okuryazarlık Programı', en: 'Digital Literacy Program' },
        { tr: 'Kodlama Eğitimleri', en: 'Coding Training' },
        { tr: 'Teknoloji Atölyeleri', en: 'Technology Workshops' },
        { tr: 'Burs Programları', en: 'Scholarship Programs' }
      ]
    },
    {
      id: 2,
      icon: HeartIcon,
      title: { tr: 'Sağlık ve Refah', en: 'Health and Wellness' },
      description: { 
        tr: 'Sağlık teknolojileri ve dijital sağlık çözümleri ile toplum sağlığını destekliyoruz.',
        en: 'We support community health through health technologies and digital health solutions.'
      },
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      projects: [
        { tr: 'Dijital Sağlık Platformu', en: 'Digital Health Platform' },
        { tr: 'Sağlık Eğitimleri', en: 'Health Education' },
        { tr: 'Telemedicine Projeleri', en: 'Telemedicine Projects' },
        { tr: 'Sağlık Teknolojileri', en: 'Health Technologies' }
      ]
    },
    {
      id: 3,
      icon: GlobeAltIcon,
      title: { tr: 'Çevre ve Sürdürülebilirlik', en: 'Environment and Sustainability' },
      description: { 
        tr: 'Çevre dostu teknolojiler ve sürdürülebilir çözümler ile doğayı koruyoruz.',
        en: 'We protect nature with environmentally friendly technologies and sustainable solutions.'
      },
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      projects: [
        { tr: 'Yeşil Teknoloji İnisiyatifi', en: 'Green Technology Initiative' },
        { tr: 'E-atık Yönetimi', en: 'E-waste Management' },
        { tr: 'Enerji Verimliliği', en: 'Energy Efficiency' },
        { tr: 'Karbon Azaltma', en: 'Carbon Reduction' }
      ]
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: { tr: 'Dijital Gelecek Projesi', en: 'Digital Future Project' },
      description: { 
        tr: 'Türkiye genelinde 50.000+ öğrenciye ücretsiz dijital eğitim sağlayan kapsamlı projemiz.',
        en: 'Our comprehensive project providing free digital education to more than 50,000 students across Turkey.'
      },
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
      year: '2023',
      impact: { tr: '50.000+ öğrenci eğitildi', en: '50,000+ students trained' },
      status: { tr: 'Devam Ediyor', en: 'Ongoing' }
    },
    {
      id: 2,
      title: { tr: 'Yeşil Teknoloji Merkezi', en: 'Green Technology Center' },
      description: { 
        tr: 'Yenilenebilir enerji ve sürdürülebilir teknolojiler konusunda eğitim ve araştırma merkezi.',
        en: 'Education and research center on renewable energy and sustainable technologies.'
      },
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
      year: '2024',
      impact: { tr: '1000+ katılımcı', en: '1000+ participants' },
      status: { tr: 'Yeni', en: 'New' }
    },
    {
      id: 3,
      title: { tr: 'Siber Güvenlik Farkındalığı', en: 'Cybersecurity Awareness' },
      description: { 
        tr: 'Toplumun siber güvenlik konusunda bilinçlendirilmesi için eğitim programları.',
        en: 'Education programs to raise awareness about cybersecurity in society.'
      },
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      year: '2023',
      impact: { tr: '25.000+ kişi eğitildi', en: '25,000+ people trained' },
      status: { tr: 'Tamamlandı', en: 'Completed' }
    }
  ];

  const partnerships = [
    {
      id: 1,
      name: { tr: 'Milli Eğitim Bakanlığı', en: 'Ministry of Education' },
      description: { tr: 'Eğitim teknolojileri konusunda işbirliği', en: 'Cooperation in educational technologies' },
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=200&q=80',
      type: { tr: 'Kamu Ortaklığı', en: 'Public Partnership' }
    },
    {
      id: 2,
      name: { tr: 'TÜBİTAK', en: 'TUBITAK' },
      description: { tr: 'Bilimsel araştırma ve geliştirme projeleri', en: 'Scientific research and development projects' },
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=200&q=80',
      type: { tr: 'Araştırma Ortaklığı', en: 'Research Partnership' }
    },
    {
      id: 3,
      name: { tr: 'Sivil Toplum Kuruluşları', en: 'Non-Governmental Organizations' },
      description: { tr: 'Sosyal sorumluluk projeleri ortaklığı', en: 'Social responsibility project partnership' },
      logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=80',
      type: { tr: 'STK Ortaklığı', en: 'NGO Partnership' }
    }
  ];

  const stats = [
    { number: '75K+', label: { tr: 'Eğitilen Kişi', en: 'People Trained' } },
    { number: '25+', label: { tr: 'Sosyal Proje', en: 'Social Projects' } },
    { number: '15+', label: { tr: 'Ortaklık', en: 'Partnerships' } },
    { number: '5M+', label: { tr: 'TL Yatırım', en: 'TL Investment' } }
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
        {/* Sosyal Sorumluluk Alanları */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'tr' ? 'Sosyal Sorumluluk Alanlarımız' : 'Our Social Responsibility Areas'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {lang === 'tr' 
                ? 'Eğitim, sağlık ve çevre alanlarında toplumsal fayda sağlayan projeler yürütüyoruz.'
                : 'We carry out projects that provide social benefit in the fields of education, health and environment.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialAreas.map((area, idx) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${area.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <area.icon className={`w-8 h-8 ${area.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {area.title[lang]}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {area.description[lang]}
                </p>

                <ul className="space-y-2">
                  {area.projects.map((project, projectIdx) => (
                    <li key={projectIdx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full ${area.bgColor}`}></div>
                      {project[lang]}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Öne Çıkan Projeler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'tr' ? 'Öne Çıkan Projelerimiz' : 'Our Featured Projects'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {lang === 'tr' 
                ? 'Toplumsal fayda sağlayan ve büyük etki yaratan projelerimiz.'
                : 'Our projects that provide social benefit and create great impact.'
              }
            </p>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={project.image}
                      alt={project.title[lang]}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.year}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.status[lang]}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {project.title[lang]}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description[lang]}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>📊 {project.impact[lang]}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ortaklıklar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'tr' ? 'Stratejik Ortaklıklarımız' : 'Our Strategic Partnerships'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {lang === 'tr' 
                ? 'Sosyal sorumluluk projelerimizi güçlendiren kamu ve sivil toplum ortaklıkları.'
                : 'Public and civil society partnerships that strengthen our social responsibility projects.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partnership, idx) => (
              <motion.div
                key={partnership.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={partnership.logo}
                  alt={partnership.name[lang]}
                  className="w-20 h-20 rounded-lg object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {partnership.name[lang]}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {partnership.description[lang]}
                </p>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {partnership.type[lang]}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* İstatistikler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              {lang === 'tr' ? 'Sosyal Sorumluluk Başarılarımız' : 'Our Social Responsibility Achievements'}
            </h2>
            <p className="text-green-100">
              {lang === 'tr' 
                ? 'Toplumsal fayda için yarattığımız değer'
                : 'Value we create for social benefit'
              }
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label[lang]}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sosyal Sorumluluk Taahhütleri */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'tr' ? 'Sosyal Sorumluluk Taahhütlerimiz' : 'Our Social Responsibility Commitments'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {lang === 'tr' 
                ? '2030 yılına kadar ulaşmayı hedeflediğimiz sosyal sorumluluk hedeflerimiz.'
                : 'Our social responsibility goals that we aim to achieve by 2030.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <AcademicCapIcon className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {lang === 'tr' ? 'Eğitim Hedefleri' : 'Education Goals'}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• {lang === 'tr' ? '100.000+ öğrenci eğitimi' : '100,000+ student education'}</li>
                <li>• {lang === 'tr' ? 'Dijital okuryazarlık programları' : 'Digital literacy programs'}</li>
                <li>• {lang === 'tr' ? 'Teknoloji eğitim merkezleri' : 'Technology education centers'}</li>
                <li>• {lang === 'tr' ? 'Burs ve destek programları' : 'Scholarship and support programs'}</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <HeartIcon className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {lang === 'tr' ? 'Toplumsal Hedefler' : 'Social Goals'}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• {lang === 'tr' ? 'Sosyal fayda projeleri' : 'Social benefit projects'}</li>
                <li>• {lang === 'tr' ? 'Sağlık teknolojileri' : 'Health technologies'}</li>
                <li>• {lang === 'tr' ? 'Çevre koruma projeleri' : 'Environmental protection projects'}</li>
                <li>• {lang === 'tr' ? 'Topluluk geliştirme' : 'Community development'}</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Katılım CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {lang === 'tr' ? 'Sosyal Sorumluluğa Katılın' : 'Join Social Responsibility'}
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              {lang === 'tr' 
                ? 'Sosyal sorumluluk projelerimizde gönüllü olarak yer almak veya desteklemek istiyorsanız bizimle iletişime geçin.'
                : 'Contact us if you want to volunteer or support our social responsibility projects.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                {lang === 'tr' ? 'Gönüllü Ol' : 'Volunteer'}
              </button>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                {lang === 'tr' ? 'Bağış Yap' : 'Donate'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer language={lang} />
    </div>
  );
};

export default SocialResponsibility; 