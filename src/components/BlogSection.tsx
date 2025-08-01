import React from 'react';
import { motion } from 'framer-motion';

interface BlogSectionProps {
  language: 'tr' | 'en';
}

const blogs = [
  {
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    title: {
      tr: 'Yapay Zeka ile Dijital Dönüşüm',
      en: 'Digital Transformation with AI',
    },
    desc: {
      tr: 'Yapay zeka teknolojileri iş dünyasında nasıl devrim yaratıyor? En yeni trendler ve uygulama alanları...',
      en: 'How is artificial intelligence revolutionizing the business world? Latest trends and applications...',
    },
    link: 'yapay-zeka-dijital-donusum',
  },
  {
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    title: {
      tr: 'Bulut Bilişimde Güvenlik',
      en: 'Security in Cloud Computing',
    },
    desc: {
      tr: 'Bulut altyapısında veri güvenliği için dikkat edilmesi gerekenler ve en iyi uygulamalar.',
      en: 'Best practices and key points for data security in cloud infrastructure.',
    },
    link: 'bulut-bilisimde-guvenlik',
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    title: {
      tr: 'Mobil Uygulama Geliştirme Trendleri',
      en: 'Mobile App Development Trends',
    },
    desc: {
      tr: '2024 yılında mobil uygulama geliştirmede öne çıkan teknolojiler ve kullanıcı beklentileri.',
      en: 'Key technologies and user expectations in mobile app development for 2024.',
    },
    link: 'mobil-uygulama-gelistirme-trendleri',
  },
];

const BlogSection: React.FC<BlogSectionProps> = ({ language }) => {
  return (
    <motion.section
      className="py-12 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-full mx-auto pl-8 md:pl-28 pr-8 md:pr-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{language === 'tr' ? 'Blog' : 'Blog'}</h2>
        <p className="text-lg text-gray-700 mb-10">
          {language === 'tr'
            ? 'Dijital dünyadaki en güncel gelişmeleri ve uzman görüşlerini blog yazılarımızda keşfedin.'
            : 'Discover the latest developments and expert insights in our blog posts.'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-gray-100"
            >
              <img
                src={blog.image}
                alt={blog.title[language]}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title[language]}</h3>
                <p className="text-gray-700 mb-6 flex-1">{blog.desc[language]}</p>
                <a
                  href={`/demasteknoloji/${language === 'tr' ? 'tr' : 'en'}/blog/${blog.link}`}
                  className="mt-auto text-blue-700 font-medium flex items-center gap-1 hover:underline"
                >
                  {language === 'tr' ? 'Devamını Oku' : 'Read More'}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BlogSection;
