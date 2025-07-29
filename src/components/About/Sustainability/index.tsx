import React from 'react';
import Header from '../../Header';
import Banner from '../../Products/Banner';
import Footer from '../../Footer';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const content = {
  tr: {
    title: 'Sürdürülebilirlik',
    description: 'Çevresel, sosyal ve ekonomik sürdürülebilirlik çalışmalarımız',
    footerLang: 'tr',
  },
  en: {
    title: 'Sustainability',
    description: 'Our environmental, social and economic sustainability efforts',
    footerLang: 'en',
  },
};

const Sustainability: React.FC = () => {
  const location = useLocation();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

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
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="prose prose-lg max-w-none text-justify">
            {lang === 'tr' ? (
              <>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Sürdürülebilirlik Yaklaşımımız</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Demaş Teknoloji olarak, sürdürülebilir bir gelecek için teknolojinin gücünü kullanarak çevresel, sosyal ve ekonomik alanlarda pozitif değişim yaratmayı hedefliyoruz. Yapay zeka ve yenilikçi teknolojiler geliştirirken, bu teknolojilerin topluma ve çevreye fayda sağlayacak şekilde tasarlanmasına özen gösteriyoruz.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Çevresel sürdürülebilirlik açısından, geliştirdiğimiz yapay zeka çözümlerinin enerji verimliliğini artırmasına ve karbon ayak izini azaltmasına odaklanıyoruz. Veri merkezlerimizde yenilenebilir enerji kullanımını teşvik ediyor, e-atık yönetimi konusunda en iyi uygulamaları benimsiyoruz.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Sosyal sürdürülebilirlik kapsamında, teknoloji erişimini demokratikleştirmek ve dijital okuryazarlığı artırmak için çalışıyoruz. Özellikle gençlerin ve dezavantajlı grupların teknoloji ile buluşmasını sağlayan projeler geliştiriyor, toplumsal fayda sağlayan çözümler üretiyoruz.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Ekonomik sürdürülebilirlik açısından, uzun vadeli ve sürdürülebilir büyüme modelleri benimsiyoruz. Yerel ekonomiye katkı sağlayan, inovasyon odaklı ve değer yaratan iş modelleri geliştiriyoruz. Tedarik zincirimizde de sürdürülebilir uygulamaları destekliyoruz.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Boğaziçi Teknopark'ta faaliyetlerimize başlayacağımız 2025 yılında, akademik iş birlikleri ve Ar-Ge faaliyetlerimizle sürdürülebilir teknolojiler geliştirme konusunda öncü rol üstlenmeyi hedefliyoruz. Gelecek nesillere daha yaşanabilir bir dünya bırakmak için teknolojinin gücünü sorumlu bir şekilde kullanmaya devam edeceğiz.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Our Sustainability Approach</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  As Demaş Technology, we aim to create positive change in environmental, social, and economic areas using the power of technology for a sustainable future. While developing artificial intelligence and innovative technologies, we pay attention to designing these technologies to benefit society and the environment.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  In terms of environmental sustainability, we focus on our artificial intelligence solutions increasing energy efficiency and reducing carbon footprint. We encourage the use of renewable energy in our data centers and adopt best practices in e-waste management.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Within the scope of social sustainability, we work to democratize technology access and increase digital literacy. We develop projects that enable young people and disadvantaged groups to meet with technology, and produce solutions that provide social benefit.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  In terms of economic sustainability, we adopt long-term and sustainable growth models. We develop business models that contribute to the local economy, are innovation-driven and create value. We also support sustainable practices in our supply chain.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  In 2025, when we will start our operations at Boğaziçi Technopark, we aim to take a leading role in developing sustainable technologies through our academic collaborations and R&D activities. We will continue to use the power of technology responsibly to leave a more livable world for future generations.
                </p>
              </>
            )}
          </div>
        </motion.div>
      </div>

      <Footer language={lang} />
    </div>
  );
};

export default Sustainability; 