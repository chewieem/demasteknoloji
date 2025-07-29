import React from 'react';
import Header from '../../Header';
import Banner from '../../Products/Banner';
import Footer from '../../Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarIcon, UserGroupIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

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
  const navigate = useNavigate();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  const blogPosts = [
    {
      id: 1,
      slug: 'dijital-gelecek-projesi',
      title: { tr: 'Dijital Gelecek Projesi: 50.000 Öğrenciye Ücretsiz Eğitim', en: 'Digital Future Project: Free Education for 50,000 Students' },
      excerpt: { 
        tr: 'Türkiye genelinde 50.000+ öğrenciye ücretsiz dijital eğitim sağlayan kapsamlı projemiz. Teknoloji okuryazarlığı ve dijital beceriler konusunda gelecek nesilleri güçlendiriyoruz.',
        en: 'Our comprehensive project providing free digital education to more than 50,000 students across Turkey. We empower future generations in technology literacy and digital skills.'
      },
      content: {
        tr: `Dijital Gelecek Projesi, Demaş Teknoloji'nin en kapsamlı sosyal sorumluluk girişimlerinden biridir. Bu proje kapsamında, Türkiye'nin farklı bölgelerindeki okullarda dijital okuryazarlık eğitimleri düzenliyoruz.

Proje kapsamında öğrencilere temel bilgisayar kullanımı, internet güvenliği, kodlama temelleri ve dijital araçlar konusunda eğitimler veriyoruz. Ayrıca, dezavantajlı bölgelerdeki okullara bilgisayar laboratuvarları kuruyor ve teknoloji altyapısı sağlıyoruz.

Projenin en önemli özelliklerinden biri, sadece teorik eğitim değil, pratik uygulamalar da içermesidir. Öğrenciler, öğrendikleri bilgileri gerçek projelerde kullanma fırsatı buluyor ve bu sayede deneyim kazanıyorlar.

2023 yılında başlattığımız bu proje, 2024 yılında da devam ediyor ve hedefimiz 100.000 öğrenciye ulaşmak. Proje kapsamında ayrıca öğretmenlere de eğitim veriyoruz, böylece sürdürülebilir bir eğitim modeli oluşturuyoruz.`,
        en: `The Digital Future Project is one of Demaş Technology's most comprehensive social responsibility initiatives. Within the scope of this project, we organize digital literacy training in schools in different regions of Turkey.

Within the scope of the project, we provide training to students on basic computer use, internet security, coding fundamentals and digital tools. We also set up computer laboratories in schools in disadvantaged regions and provide technology infrastructure.

One of the most important features of the project is that it includes not only theoretical education but also practical applications. Students have the opportunity to use the knowledge they learn in real projects and gain experience in this way.

This project, which we started in 2023, continues in 2024 and our goal is to reach 100,000 students. We also provide training to teachers within the scope of the project, thus creating a sustainable education model.`
      },
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      date: '2024-01-15',
      author: { tr: 'Demaş Teknoloji', en: 'Demaş Technology' },
      category: { tr: 'Eğitim', en: 'Education' },
      tags: ['Eğitim', 'Teknoloji', 'Dijital Okuryazarlık'],
      readTime: { tr: '5 dk okuma', en: '5 min read' },
      impact: { tr: '50.000+ öğrenci eğitildi', en: '50,000+ students trained' },
      status: { tr: 'Devam Ediyor', en: 'Ongoing' }
    },
    {
      id: 2,
      slug: 'yesil-teknoloji-merkezi',
      title: { tr: 'Yeşil Teknoloji Merkezi: Sürdürülebilir Gelecek İçin', en: 'Green Technology Center: For a Sustainable Future' },
      excerpt: { 
        tr: 'Yenilenebilir enerji ve sürdürülebilir teknolojiler konusunda eğitim ve araştırma merkezi. Çevre dostu teknolojiler geliştiriyoruz.',
        en: 'Education and research center on renewable energy and sustainable technologies. We develop environmentally friendly technologies.'
      },
      content: {
        tr: `Yeşil Teknoloji Merkezi, Demaş Teknoloji'nin çevre sorunlarına teknolojik çözümler üretmek amacıyla kurduğu bir araştırma ve geliştirme merkezidir. Bu merkezde, yenilenebilir enerji teknolojileri, enerji verimliliği ve sürdürülebilir çözümler konusunda çalışmalar yürütüyoruz.

Merkez, üniversiteler, araştırma kurumları ve sivil toplum örgütleri ile işbirliği yaparak, çevre dostu teknolojiler geliştiriyor. Özellikle güneş enerjisi, rüzgar enerjisi ve enerji depolama sistemleri konularında araştırmalar yapıyoruz.

Proje kapsamında, lise ve üniversite öğrencilerine yeşil teknolojiler konusunda eğitimler veriyoruz. Ayrıca, küçük ve orta ölçekli işletmelere enerji verimliliği danışmanlığı sağlıyoruz.

Merkez, 2024 yılında açıldı ve şu ana kadar 1000+ katılımcıya eğitim verdi. Hedefimiz, 2025 yılına kadar 5000+ kişiye ulaşmak ve 100+ yeşil teknoloji projesi geliştirmek.`,
        en: `The Green Technology Center is a research and development center established by Demaş Technology to produce technological solutions to environmental problems. At this center, we conduct studies on renewable energy technologies, energy efficiency and sustainable solutions.

The center develops environmentally friendly technologies by collaborating with universities, research institutions and non-governmental organizations. We conduct research especially on solar energy, wind energy and energy storage systems.

Within the scope of the project, we provide training to high school and university students on green technologies. We also provide energy efficiency consulting to small and medium-sized businesses.

The center opened in 2024 and has trained 1000+ participants so far. Our goal is to reach 5000+ people and develop 100+ green technology projects by 2025.`
      },
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
      date: '2024-02-20',
      author: { tr: 'Demaş Teknoloji', en: 'Demaş Technology' },
      category: { tr: 'Çevre', en: 'Environment' },
      tags: ['Sürdürülebilirlik', 'Yeşil Teknoloji', 'Enerji'],
      readTime: { tr: '4 dk okuma', en: '4 min read' },
      impact: { tr: '1000+ katılımcı', en: '1000+ participants' },
      status: { tr: 'Yeni', en: 'New' }
    }
  ];



  const handlePostClick = (slug: string) => {
    navigate(`/${lang}/about/social-responsibility/${slug}`);
  };

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
        {/* Blog Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {lang === 'tr' ? 'Sosyal Sorumluluk Projelerimiz' : 'Our Social Responsibility Projects'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lang === 'tr' 
              ? 'Toplumsal fayda sağlayan projelerimizi ve sosyal sorumluluk çalışmalarımızı paylaşıyoruz.'
              : 'We share our projects that provide social benefit and our social responsibility work.'
            }
          </p>
        </motion.div>



        {/* Blog Posts */}
        <div className="space-y-12">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handlePostClick(post.slug)}
            >
              <div className="md:flex">
                {/* Blog Post Image */}
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title[lang]}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                {/* Blog Post Content */}
                <div className="md:w-2/3 p-8">
                  {/* Post Meta */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <UserGroupIcon className="w-4 h-4" />
                      <span>{post.author[lang]}</span>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.status[lang]}
                    </span>
                  </div>

                  {/* Post Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {post.title[lang]}
                  </h2>

                  {/* Post Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.excerpt[lang]}
                  </p>

                  {/* Post Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Post Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span>{post.readTime[lang]}</span>
                    <span className="text-blue-600 font-medium">{post.impact[lang]}</span>
                  </div>

                  {/* Read More Button */}
                  <div className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    {lang === 'tr' ? 'Devamını Oku' : 'Read More'}
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>


      </div>

      <Footer language={lang} />
    </div>
  );
};

export default SocialResponsibility; 