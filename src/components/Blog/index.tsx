import React, { useState } from 'react';
import Header from '../Header';
import Banner from '../Products/Banner';
import Footer from '../Footer';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

const content = {
  tr: {
    title: 'Blog',
    description: 'Teknoloji dünyasından en güncel haberler ve uzman görüşleri',
    breadcrumb: (
      <>
        <Link to="/tr" className="text-gray-400 font-bold">Ana Sayfa</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">Blog</span>
      </>
    ),
    footerLang: 'tr',
  },
  en: {
    title: 'Blog',
    description: 'Latest news and expert insights from the technology world',
    breadcrumb: (
      <>
        <Link to="/en" className="text-gray-400 font-bold">Home</Link>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-white font-bold">Blog</span>
      </>
    ),
    footerLang: 'en',
  },
};

const Blog: React.FC = () => {
  const location = useLocation();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'all', tr: 'Tümü', en: 'All' },
    { key: 'ai', tr: 'Yapay Zeka', en: 'Artificial Intelligence' },
    { key: 'cloud', tr: 'Bulut Teknolojileri', en: 'Cloud Technologies' },
    { key: 'mobile', tr: 'Mobil Geliştirme', en: 'Mobile Development' },
    { key: 'security', tr: 'Siber Güvenlik', en: 'Cybersecurity' },
    { key: 'digital', tr: 'Dijital Dönüşüm', en: 'Digital Transformation' },
  ];

  const blogs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
      title: {
        tr: 'Yapay Zeka ile Dijital Dönüşüm',
        en: 'Digital Transformation with AI',
      },
      desc: {
        tr: 'Yapay zeka teknolojileri iş dünyasında nasıl devrim yaratıyor? En yeni trendler ve uygulama alanları hakkında detaylı bir analiz.',
        en: 'How is artificial intelligence revolutionizing the business world? Detailed analysis of latest trends and applications.',
      },
      category: 'ai',
      author: { tr: 'Ahmet Yılmaz', en: 'Ahmet Yilmaz' },
      date: '2024-01-15',
      readTime: { tr: '5 dk okuma', en: '5 min read' },
      tags: ['AI', 'Digital Transformation', 'Technology'],
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
      title: {
        tr: 'Bulut Bilişimde Güvenlik',
        en: 'Security in Cloud Computing',
      },
      desc: {
        tr: 'Bulut altyapısında veri güvenliği için dikkat edilmesi gerekenler ve en iyi uygulamalar. Güvenlik açıklarını nasıl önleyebiliriz?',
        en: 'Best practices and key points for data security in cloud infrastructure. How can we prevent security vulnerabilities?',
      },
      category: 'cloud',
      author: { tr: 'Mehmet Kaya', en: 'Mehmet Kaya' },
      date: '2024-01-10',
      readTime: { tr: '7 dk okuma', en: '7 min read' },
      tags: ['Cloud Security', 'Data Protection', 'Best Practices'],
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      title: {
        tr: 'Mobil Uygulama Geliştirme Trendleri',
        en: 'Mobile App Development Trends',
      },
      desc: {
        tr: '2024 yılında mobil uygulama geliştirmede öne çıkan teknolojiler ve kullanıcı beklentileri. React Native vs Flutter karşılaştırması.',
        en: 'Key technologies and user expectations in mobile app development for 2024. React Native vs Flutter comparison.',
      },
      category: 'mobile',
      author: { tr: 'Zeynep Demir', en: 'Zeynep Demir' },
      date: '2024-01-05',
      readTime: { tr: '6 dk okuma', en: '6 min read' },
      tags: ['Mobile Development', 'React Native', 'Flutter'],
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      title: {
        tr: 'Siber Güvenlik Tehditleri ve Korunma Yöntemleri',
        en: 'Cybersecurity Threats and Protection Methods',
      },
      desc: {
        tr: 'Günümüzde artan siber güvenlik tehditleri ve bunlara karşı alınabilecek önlemler. Şirketler için güvenlik stratejileri.',
        en: 'Increasing cybersecurity threats today and measures that can be taken against them. Security strategies for companies.',
      },
      category: 'security',
      author: { tr: 'Can Özkan', en: 'Can Ozkan' },
      date: '2023-12-28',
      readTime: { tr: '8 dk okuma', en: '8 min read' },
      tags: ['Cybersecurity', 'Threat Protection', 'Security Strategy'],
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80',
      title: {
        tr: 'Kurumsal Dijital Dönüşüm Stratejileri',
        en: 'Corporate Digital Transformation Strategies',
      },
      desc: {
        tr: 'Şirketlerin dijital dönüşüm sürecinde izlemesi gereken adımlar ve başarı hikayeleri. Dijital olgunluk seviyeleri.',
        en: 'Steps that companies should follow in their digital transformation process and success stories. Digital maturity levels.',
      },
      category: 'digital',
      author: { tr: 'Elif Yıldız', en: 'Elif Yildiz' },
      date: '2023-12-20',
      readTime: { tr: '10 dk okuma', en: '10 min read' },
      tags: ['Digital Transformation', 'Corporate Strategy', 'Innovation'],
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=600&q=80',
      title: {
        tr: 'Makine Öğrenmesi Uygulamaları',
        en: 'Machine Learning Applications',
      },
      desc: {
        tr: 'Makine öğrenmesi algoritmalarının gerçek dünya uygulamaları. Hangi sektörlerde nasıl kullanılıyor?',
        en: 'Real-world applications of machine learning algorithms. How are they used in which sectors?',
      },
      category: 'ai',
      author: { tr: 'Burak Arslan', en: 'Burak Arslan' },
      date: '2023-12-15',
      readTime: { tr: '9 dk okuma', en: '9 min read' },
      tags: ['Machine Learning', 'AI Applications', 'Data Science'],
    },
  ];

  // Filtreleme fonksiyonu
  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesSearch = blog.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.desc[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      <Header language={lang} setLanguage={() => {}} />
      <Banner
        title={page.title}
        description={page.description}
        image={process.env.PUBLIC_URL + '/banner.png'}
        breadcrumb={page.breadcrumb}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Arama ve Filtreleme */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Arama */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={lang === 'tr' ? 'Blog yazılarında ara...' : 'Search in blog posts...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Kategori Filtresi */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category[lang]}
                </button>
              ))}
            </div>
          </div>
          
          {/* Sonuç Sayısı */}
          <p className="text-gray-600">
            {lang === 'tr' 
              ? `${filteredBlogs.length} blog yazısı bulundu`
              : `${filteredBlogs.length} blog posts found`
            }
          </p>
        </div>

        {/* Blog Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              {/* Blog Resmi */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title[lang]}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {categories.find(cat => cat.key === blog.category)?.[lang]}
                  </span>
                </div>
              </div>

              {/* Blog İçeriği */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {blog.title[lang]}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.desc[lang]}
                </p>

                {/* Meta Bilgiler */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <UserIcon className="h-4 w-4" />
                    <span>{blog.author[lang]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{formatDate(blog.date)}</span>
                  </div>
                </div>

                {/* Okuma Süresi */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span>{blog.readTime[lang]}</span>
                </div>

                {/* Etiketler */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Devamını Oku Butonu */}
                <Link 
                  to={`/${lang}/blog/${blog.id}`}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium block text-center"
                >
                  {lang === 'tr' ? 'Devamını Oku' : 'Read More'}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sonuç Yok */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {lang === 'tr' ? 'Blog yazısı bulunamadı' : 'No blog posts found'}
            </h3>
            <p className="text-gray-500">
              {lang === 'tr' 
                ? 'Arama kriterlerinizi değiştirmeyi deneyin.'
                : 'Try changing your search criteria.'
              }
            </p>
          </div>
        )}
      </div>

      <Footer language={lang} />
    </div>
  );
};

export default Blog; 