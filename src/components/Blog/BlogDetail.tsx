import React, { useState } from 'react';
import Header from '../Header';
import Banner from '../Products/Banner';
import Footer from '../Footer';
import { Link, useLocation, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarIcon, UserIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';

const content = {
  tr: {
    title: 'Blog Detayı',
    description: 'Teknoloji dünyasından detaylı analizler ve uzman görüşleri',
    footerLang: 'tr',
  },
  en: {
    title: 'Blog Detail',
    description: 'Detailed analysis and expert insights from the technology world',
    footerLang: 'en',
  },
};

const BlogDetail: React.FC = () => {
  const location = useLocation();
  const { blogId } = useParams();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];



  // Örnek blog verisi (gerçek uygulamada API'den gelecek)
  const blog = {
    id: blogId || '1',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    title: {
      tr: 'Yapay Zeka ile Dijital Dönüşüm: İş Dünyasının Geleceği',
      en: 'Digital Transformation with AI: The Future of Business',
    },
    content: {
      tr: `
        <p class="mb-6 text-lg leading-relaxed">
          Yapay zeka teknolojileri, günümüzde iş dünyasında devrim yaratmaya devam ediyor. 
          Şirketler, müşteri deneyimini iyileştirmek, operasyonel verimliliği artırmak ve 
          yeni fırsatlar yaratmak için AI çözümlerini benimsiyor.
        </p>

        <h2 class="text-2xl font-bold mb-4 text-gray-900">AI'nın İş Süreçlerine Entegrasyonu</h2>
        <p class="mb-6 text-lg leading-relaxed">
          Yapay zeka, işletmelerin rutin görevleri otomatikleştirmesine ve daha stratejik 
          kararlar almasına olanak tanıyor. Müşteri hizmetlerinden pazarlama kampanyalarına, 
          üretim süreçlerinden finansal analizlere kadar her alanda AI uygulamaları görüyoruz.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-gray-800">Müşteri Deneyiminde AI</h3>
        <p class="mb-6 text-lg leading-relaxed">
          Chatbot'lar ve sanal asistanlar, müşteri hizmetlerinde 7/24 destek sağlıyor. 
          Kişiselleştirilmiş öneriler ve tahmine dayalı analitik, müşteri memnuniyetini 
          artırıyor ve satışları destekliyor.
        </p>

        <blockquote class="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50 italic">
          "Yapay zeka, işletmelerin müşterilerini daha iyi anlamasını ve onlara 
          daha değerli çözümler sunmasını sağlıyor." - AI Uzmanı
        </blockquote>

        <h3 class="text-xl font-semibold mb-3 text-gray-800">Operasyonel Verimlilik</h3>
        <p class="mb-6 text-lg leading-relaxed">
          AI destekli otomasyon, işletmelerin maliyetlerini düşürürken verimliliği 
          artırıyor. Makine öğrenmesi algoritmaları, büyük veri setlerini analiz 
          ederek anlamlı içgörüler sunuyor.
        </p>

        <h2 class="text-2xl font-bold mb-4 text-gray-900">Gelecekteki Trendler</h2>
        <p class="mb-6 text-lg leading-relaxed">
          Önümüzdeki yıllarda, AI teknolojilerinin daha da gelişmesi bekleniyor. 
          Özellikle doğal dil işleme, bilgisayarlı görü ve robotik süreç otomasyonu 
          alanlarında büyük ilerlemeler kaydediliyor.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-gray-800">Sonuç</h3>
        <p class="mb-6 text-lg leading-relaxed">
          Yapay zeka, iş dünyasının geleceğini şekillendiren en önemli teknolojilerden 
          biri haline geldi. Bu teknolojiyi benimseyen şirketler, rekabet avantajı 
          elde ediyor ve sürdürülebilir büyüme sağlıyor.
        </p>
      `,
      en: `
        <p class="mb-6 text-lg leading-relaxed">
          Artificial intelligence technologies continue to revolutionize the business world today. 
          Companies are adopting AI solutions to improve customer experience, increase operational 
          efficiency, and create new opportunities.
        </p>

        <h2 class="text-2xl font-bold mb-4 text-gray-900">Integration of AI into Business Processes</h2>
        <p class="mb-6 text-lg leading-relaxed">
          Artificial intelligence enables businesses to automate routine tasks and make more 
          strategic decisions. We see AI applications in every field, from customer service 
          to marketing campaigns, from production processes to financial analysis.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-gray-800">AI in Customer Experience</h3>
        <p class="mb-6 text-lg leading-relaxed">
          Chatbots and virtual assistants provide 24/7 support in customer service. 
          Personalized recommendations and predictive analytics increase customer satisfaction 
          and support sales.
        </p>

        <blockquote class="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50 italic">
          "Artificial intelligence enables businesses to better understand their customers 
          and provide them with more valuable solutions." - AI Expert
        </blockquote>

        <h3 class="text-xl font-semibold mb-3 text-gray-800">Operational Efficiency</h3>
        <p class="mb-6 text-lg leading-relaxed">
          AI-powered automation increases efficiency while reducing costs for businesses. 
          Machine learning algorithms analyze large datasets to provide meaningful insights.
        </p>

        <h2 class="text-2xl font-bold mb-4 text-gray-900">Future Trends</h2>
        <p class="mb-6 text-lg leading-relaxed">
          In the coming years, AI technologies are expected to develop even further. 
          Great progress is being made especially in natural language processing, 
          computer vision, and robotic process automation.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-gray-800">Conclusion</h3>
        <p class="mb-6 text-lg leading-relaxed">
          Artificial intelligence has become one of the most important technologies shaping 
          the future of business. Companies that adopt this technology gain competitive 
          advantage and ensure sustainable growth.
        </p>
      `
    },
    category: 'ai',
    author: { 
      tr: 'Ahmet Yılmaz', 
      en: 'Ahmet Yilmaz',
      title: { tr: 'AI Uzmanı', en: 'AI Expert' },
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80'
    },
    date: '2024-01-15',
    readTime: { tr: '5 dk okuma', en: '5 min read' },
    tags: ['AI', 'Digital Transformation', 'Technology', 'Business'],
    views: 1247,
    likes: 89,
    shares: 23
  };



  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const breadcrumb = (
    <div className="mt-1 mb-2 text-sm flex items-center space-x-2">
      <Link to={`/${lang}`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <Link to={`/${lang}/blog`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Blog' : 'Blog'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <span className="text-white font-bold">{blog.title[lang].substring(0, 30)}...</span>
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
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Blog Başlığı ve Meta Bilgiler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title[lang]}
          </h1>
          
          {/* Meta Bilgiler */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <UserIcon className="h-5 w-5" />
              <span>{blog.author[lang]}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              <span>{formatDate(blog.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5" />
              <span>{blog.readTime[lang]}</span>
            </div>
          </div>

          {/* Etiketler */}
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Blog Sayfasına Dönüş Butonu */}
          <div className="mb-8">
            <Link
              to={`/${lang}/blog`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {lang === 'tr' ? 'Blog Sayfasına Dön' : 'Back to Blog'}
            </Link>
          </div>
        </motion.div>

        {/* Blog Görseli */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src={blog.image}
            alt={blog.title[lang]}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Blog İçeriği */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          <div 
            dangerouslySetInnerHTML={{ __html: blog.content[lang] }}
            className="text-gray-700 leading-relaxed"
          />
        </motion.div>

        {/* Yazar Bilgisi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 bg-gray-50 rounded-xl"
        >
          <div className="flex items-center gap-4">
            <img
              src={blog.author.avatar}
              alt={blog.author[lang]}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{blog.author[lang]}</h3>
              <p className="text-gray-600">{blog.author.title[lang]}</p>
              <p className="text-sm text-gray-500 mt-1">
                {lang === 'tr' 
                  ? 'Teknoloji ve yapay zeka alanında uzman. 10+ yıl deneyim.'
                  : 'Expert in technology and artificial intelligence. 10+ years experience.'
                }
              </p>
            </div>
          </div>
        </motion.div>


      </div>

      <Footer language={lang} />
    </div>
  );
};

export default BlogDetail; 