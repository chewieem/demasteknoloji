import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Banner from './Banner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import HeroImageTextSection from '../TextSections/HeroImageTextSection';

const TABS = [
  { key: 'overview', tr: 'Kariyer', en: 'Career', path: '' },
  { key: 'jobs', tr: 'İş İlanları', en: 'Job Postings', path: 'jobs' },
  { key: 'internships', tr: 'Staj Olanakları', en: 'Internship Opportunities', path: 'internships' },
];

const content = {
  tr: {
    title: 'Kariyer',
    description: 'Demaş Teknoloji ile geleceğinizi şekillendirin',
    footerLang: 'tr',
    headerLang: 'tr',
  },
  en: {
    title: 'Career',
    description: 'Shape your future with Demaş Technology',
    footerLang: 'en',
    headerLang: 'en',
  },
};

const WebApplications: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const language = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const lang: 'en' | 'tr' = language;
  const page = content[lang];

  const jobPostings = [
    {
      title: lang === 'tr' ? 'Senior Frontend Developer' : 'Senior Frontend Developer',
      department: lang === 'tr' ? 'Yazılım Geliştirme' : 'Software Development',
      location: lang === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Turkey',
      description: lang === 'tr' ? 'React, TypeScript ve modern web teknolojileri konusunda deneyimli geliştirici arıyoruz.' : 'We are looking for an experienced developer in React, TypeScript and modern web technologies.',
      type: lang === 'tr' ? 'Tam Zamanlı' : 'Full Time',
      status: lang === 'tr' ? 'Açık' : 'Open',
    },
    {
      title: lang === 'tr' ? 'Backend Developer' : 'Backend Developer',
      department: lang === 'tr' ? 'Yazılım Geliştirme' : 'Software Development',
      location: lang === 'tr' ? 'Ankara, Türkiye' : 'Ankara, Turkey',
      description: lang === 'tr' ? 'Node.js, Python ve veritabanı yönetimi konusunda deneyimli geliştirici arıyoruz.' : 'We are looking for an experienced developer in Node.js, Python and database management.',
      type: lang === 'tr' ? 'Tam Zamanlı' : 'Full Time',
      status: lang === 'tr' ? 'Açık' : 'Open',
    },
    {
      title: lang === 'tr' ? 'UI/UX Designer' : 'UI/UX Designer',
      department: lang === 'tr' ? 'Tasarım' : 'Design',
      location: lang === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Turkey',
      description: lang === 'tr' ? 'Kullanıcı deneyimi ve arayüz tasarımı konusunda yaratıcı tasarımcı arıyoruz.' : 'We are looking for a creative designer in user experience and interface design.',
      type: lang === 'tr' ? 'Tam Zamanlı' : 'Full Time',
      status: lang === 'tr' ? 'Açık' : 'Open',
    },
    {
      title: lang === 'tr' ? 'DevOps Engineer' : 'DevOps Engineer',
      department: lang === 'tr' ? 'Sistem Yönetimi' : 'System Administration',
      location: lang === 'tr' ? 'İzmir, Türkiye' : 'Izmir, Turkey',
      description: lang === 'tr' ? 'AWS, Docker ve CI/CD süreçleri konusunda deneyimli mühendis arıyoruz.' : 'We are looking for an experienced engineer in AWS, Docker and CI/CD processes.',
      type: lang === 'tr' ? 'Tam Zamanlı' : 'Full Time',
      status: lang === 'tr' ? 'Açık' : 'Open',
    },
    {
      title: lang === 'tr' ? 'Mobile Developer' : 'Mobile Developer',
      department: lang === 'tr' ? 'Mobil Geliştirme' : 'Mobile Development',
      location: lang === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Turkey',
      description: lang === 'tr' ? 'React Native ve iOS/Android geliştirme konusunda deneyimli geliştirici arıyoruz.' : 'We are looking for an experienced developer in React Native and iOS/Android development.',
      type: lang === 'tr' ? 'Tam Zamanlı' : 'Full Time',
      status: lang === 'tr' ? 'Açık' : 'Open',
    },
    {
      title: lang === 'tr' ? 'Data Scientist' : 'Data Scientist',
      department: lang === 'tr' ? 'Veri Bilimi' : 'Data Science',
      location: lang === 'tr' ? 'Ankara, Türkiye' : 'Ankara, Turkey',
      description: lang === 'tr' ? 'Makine öğrenmesi ve veri analizi konusunda uzman arıyoruz.' : 'We are looking for an expert in machine learning and data analysis.',
      type: lang === 'tr' ? 'Tam Zamanlı' : 'Full Time',
      status: lang === 'tr' ? 'Açık' : 'Open',
    },
  ];

  // URL'den aktif sekmeyi belirle
  const pathParts = location.pathname.split('/');
  const tabPath = pathParts[pathParts.length - 1];
  let initialTab = 'overview';
  if (tabPath === 'jobs') initialTab = 'jobs';
  else if (tabPath === 'internships') initialTab = 'internships';
  const [selectedTab, setSelectedTab] = useState(initialTab);

  // Sekme değişince URL'yi güncelle
  const handleTabChange = (key: string) => {
    setSelectedTab(key);
    const tabObj = TABS.find(t => t.key === key);
    let base = `/${lang}/career`;
    if (tabObj && tabObj.path) base += `/${tabObj.path}`;
    navigate(base, { replace: true });
  };

  // URL değişirse sekmeyi güncelle
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const tabPath = pathParts[pathParts.length - 1];
    if (tabPath === 'jobs') setSelectedTab('jobs');
    else if (tabPath === 'internships') setSelectedTab('internships');
    else setSelectedTab('overview');
  }, [location.pathname]);

  // Breadcrumb'u dinamik oluştur
  const breadcrumb = (
    <div className="mt-1 mb-2 text-sm flex items-center space-x-2">
      <Link to={`/${lang}`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</Link>
      <span className="text-gray-400 font-bold">/</span>
      <Link to={`/${lang}/career`} className="text-gray-400 font-bold">{lang === 'tr' ? 'Kariyer' : 'Career'}</Link>
      {selectedTab !== 'overview' && (
        <>
          <span className="text-gray-400 font-bold">/</span>
          <span className="text-white font-bold">{lang === 'tr' ? (selectedTab === 'jobs' ? 'İş İlanları' : 'Staj Olanakları') : (selectedTab === 'jobs' ? 'Job Postings' : 'Internship Opportunities')}</span>
        </>
      )}
    </div>
  );

  const setLanguage = (newLang: 'en' | 'tr') => {
    let newPath = location.pathname;
    if (newLang === 'en' && !newPath.startsWith('/en')) {
      newPath = '/en' + (newPath.startsWith('/tr') ? newPath.slice(3) : newPath);
    } else if (newLang === 'tr' && !newPath.startsWith('/tr')) {
      newPath = '/tr' + (newPath.startsWith('/en') ? newPath.slice(3) : newPath);
    }
    navigate(newPath + location.search, { replace: true });
  };

  return (
    <div>
      <Header language={lang} setLanguage={setLanguage} />
      <Banner
        title={page.title}
        description={page.description}
        image={process.env.PUBLIC_URL + '/banner.png'}
        breadcrumb={breadcrumb}
        tabs={TABS.map(tab => ({ key: tab.key, label: lang === 'tr' ? tab.tr : tab.en }))}
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
      />
      {/* Kariyer sekmesi seçiliyse özel section'lar */}
      {selectedTab === 'overview' && (
        <>
          {/* HeroImageTextSection ile özel kariyer metni */}
          <HeroImageTextSection
            title={lang === 'tr' ? 'Demaş Teknoloji’de Kariyer' : 'Career at Demaş Teknoloji'}
            paragraphs={[
              lang === 'tr'
                ? `Demaş Teknoloji, çalışanlarına yalnızca bir iş değil; sürekli öğrenmeye açık bir gelişim ortamı, birlikte başarma duygusunu yaşatan güçlü bir ekip ruhu ve yenilikçi çözümler üreten bir iş kültürü sunar. İnsan odaklı yaklaşımıyla tüm ekip arkadaşlarına dokunan, iş birimleriyle entegre çalışan, teknolojik dönüşümü yakından takip eden ve öğrenmeyi kurum kültürünün merkezine alan bir organizasyondur.`
                : `Demaş Teknoloji offers its employees not just a job, but a development environment open to continuous learning, a strong team spirit that fosters a sense of achievement together, and a work culture that produces innovative solutions. With its human-centered approach, it touches all team members, works in integration with business units, closely follows technological transformation, and adopts learning as the core of its corporate culture.`
            ]}
          />
          {/* FeatureCardsSection ile ikinci metin eklenecek */}
          <section className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">
              {lang === 'tr' ? 'Deneyimle Geleceği Şekillendirme' : 'Shaping the Future with Experience'}
            </h2>
            <p className="text-lg mb-4">
              {lang === 'tr'
                ? 'Demaş Teknoloji, yazılım geliştirme, mühendislik, sistem entegrasyonu ve dijital çözümler alanlarında uzmanlaşmış deneyimli kadrosunu; yeni nesil yeteneklerle buluşturarak bilgi birikimini geleceğe taşır.'
                : 'Demaş Teknoloji carries its knowledge to the future by bringing together its experienced staff specialized in software development, engineering, system integration, and digital solutions with new generation talents.'}
            </p>
            <p className="text-lg mb-4">
              {lang === 'tr'
                ? 'Gençlerin enerjisi ve yenilikçi bakış açıları, deneyimin stratejik vizyonuyla birleşerek, müşterilerimize fark yaratan çözümler sunmamızı sağlar.'
                : 'The energy and innovative perspectives of young people combine with the strategic vision of experience, enabling us to offer solutions that make a difference to our customers.'}
            </p>
            <p className="text-lg mb-4">
              <strong>{lang === 'tr' ? 'Derin Uzmanlıkla Teknolojiye Yön Ver' : 'Lead Technology with Deep Expertise'}</strong><br/>
              {lang === 'tr'
                ? 'Farklı sektörlere uçtan uca dijital çözümler geliştirirken, çalışanlarına sadece bir pozisyon değil, yeni nesil teknolojilere odaklı derin uzmanlık fırsatları sunar. Yapay zeka, veri analitiği, bulut çözümleri ve daha pek çok alanda uzmanlaşmayı teşvik eden kariyer yolları geliştirir.'
                : 'While developing end-to-end digital solutions for different sectors, it offers its employees not just a position, but deep expertise opportunities focused on new generation technologies. It develops career paths that encourage specialization in many areas such as artificial intelligence, data analytics, cloud solutions, and more.'}
            </p>
            <p className="text-lg mb-4">
              <strong>{lang === 'tr' ? 'Sürekli Gelişim İçin Eğitim ve Akademi' : 'Continuous Development with Training and Academy'}</strong><br/>
              {lang === 'tr'
                ? 'Demaş Teknoloji’de her bireyin potansiyeline ulaşabilmesi için öğrenme kültürü desteklenir. Demaş Akademi çatısı altında sunulan kişisel gelişim ve teknik eğitim programları sayesinde çalışanlar, yalnızca mevcut yetkinliklerini değil, geleceğe dair vizyonlarını da geliştirir.'
                : 'A learning culture is supported at Demaş Teknoloji so that every individual can reach their potential. Thanks to personal development and technical training programs offered under the Demaş Academy, employees develop not only their current competencies but also their vision for the future.'}
            </p>
            <p className="text-lg">
              {lang === 'tr'
                ? 'Bu sayede hem bireysel hem kurumsal başarıya katkı sağlayan sürdürülebilir bir gelişim ortamı yaratılır.'
                : 'In this way, a sustainable development environment is created that contributes to both individual and corporate success.'}
            </p>
          </section>
        </>
      )}
      {/* İş İlanları sekmesi seçiliyse özel section'lar */}
      {selectedTab === 'jobs' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {jobPostings.map((job, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col justify-between min-h-[220px] border border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <p className="text-gray-700 mb-2">{job.department}</p>
                  <p className="text-gray-700 mb-2">{job.location}</p>
                  <p className="text-gray-700 mb-6">{job.description}</p>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{job.type}</span>
                    <span className="text-sm text-green-600 font-semibold">{job.status}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    {lang === 'tr' ? 'Başvur' : 'Apply'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Staj Olanakları sekmesi seçiliyse özel section'lar */}
      {selectedTab === 'internships' && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <p className="text-lg mb-4">
            {lang === 'tr'
              ? 'Demaş Teknoloji Stajyer Programı, üniversitelerin 3. ve 4. sınıf öğrencilerine, zorunlu staj süreçlerinde uygulamalı deneyim kazandırmayı hedefler. Program kapsamında başarılı olan öğrenciler, mezuniyetlerinin ardından Demaş Teknoloji bünyesinde kariyerlerine devam etme fırsatı elde ederler.'
              : 'The Demaş Teknoloji Internship Program aims to provide hands-on experience to 3rd and 4th year university students during their compulsory internship periods. Successful students in the program have the opportunity to continue their careers at Demaş Teknoloji after graduation.'}
          </p>
          <p className="text-lg mb-4">
            {lang === 'tr'
              ? 'Staj başvuruları her yıl, ilgili döneme göre Eylül ve Nisan aylarında alınır. Başvuru sürecinin ardından uygun bulunan adaylar, üniversiteleri tarafından belirlenen tarihler arasında stajlarını gerçekleştirirler.'
              : 'Internship applications are accepted every year in September and April, depending on the relevant period. After the application process, suitable candidates complete their internships within the dates determined by their universities.'}
          </p>
          <p className="text-lg mb-4">
            {lang === 'tr'
              ? 'Başvurular alındıktan sonra, öğrenciler tercih ettikleri staj alanlarına göre gruplandırılır. İlgili alanlarda teknik sınav uygulanan adaylar, başarılı oldukları takdirde ön görüşmeye davet edilir. Görüşmeler sonrasında staj hakkı kazanan öğrenciler, belirlenen tarihlerde ve uygun bölümlerde görevlerine başlar.'
              : 'After the applications are received, students are grouped according to their preferred internship fields. Candidates who pass the technical exam in the relevant fields are invited to a preliminary interview. Those who are successful in the interviews start their internships in the appropriate departments and on the specified dates.'}
          </p>
          <p className="text-lg">
            {lang === 'tr'
              ? <>Başvurularınızı <a href="mailto:isealim@demasteknoloji.com" className="text-blue-600 hover:underline">isealim@demasteknoloji.com</a> mail adresine iletebilirsiniz.</>
              : <>You can send your applications to <a href="mailto:isealim@demasteknoloji.com" className="text-blue-600 hover:underline">isealim@demasteknoloji.com</a>.</>}
          </p>
        </div>
      )}
      <Footer language={lang} />
    </div>
  );
};

export default WebApplications;