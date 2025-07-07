import React from 'react';

interface HeroImageTextSectionProps {
  language: 'tr' | 'en';
}

const content = {
  tr: {
    title: 'Havacılık sektörünün benzersiz ihtiyaçlarına eksiksiz çözümler sunan Innova AvioFlex ürün ailesi, havacılık şirketlerinin en karmaşık ve kritik süreçlerini gelişmiş teknolojik kabiliyetlerle kolaylaştırıyor, operasyonların verimini ve güvenliğini artırıyor.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80',
    paragraphs: [
      'Sürekli artan uçuş, hava aracı ve varış noktaları karşısında havayolu operasyon kontrol merkezlerinin kolay ve etkili yönetilmesi için geliştirilen <b>AvioFlex Ops Manager</b>, 7/24 kesintisiz çalışan bu merkezlerin dijital dönüşümünü en ihtiyaç duydukları özellikleri sağlayarak gerçekleştiriyor.',
      '<b>AvioFlex LIFUS Manager</b> pilotların ve kabin görevlilerinin eğitimlerinin dijital ve diğer havayolları sistemleriyle entegre şekilde gerçekleştirilmesini sağlıyor.'
    ],
    button: 'Bize Ulaşın',
  },
  en: {
    title: 'The Innova AvioFlex product family offers complete solutions for the unique needs of the aviation industry, facilitating the most complex and critical processes of airlines with advanced technological capabilities, increasing the efficiency and safety of operations.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80',
    paragraphs: [
      '<b>AvioFlex Ops Manager</b> enables easy and effective management of airline operation control centers in the face of ever-increasing flights, aircraft, and destinations, providing the essential features needed for the digital transformation of these centers operating 24/7.',
      '<b>AvioFlex LIFUS Manager</b> ensures that the training of pilots and cabin crew is carried out digitally and in integration with other airline systems.'
    ],
    button: 'Contact Us',
  }
};

const HeroImageTextSection: React.FC<HeroImageTextSectionProps> = ({ language }) => {
  const data = content[language];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-16 leading-snug">
          {data.title}
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full">
            <img
              src={data.image}
              alt="Aviation"
              className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-xl border-4 border-white"
            />
          </div>
          <div className="flex-1 w-full bg-white rounded-2xl p-8 shadow-md flex flex-col justify-center">
            {data.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-lg md:text-xl text-gray-700 mb-6"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
            <button className="mt-4 px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow hover:bg-blue-700 transition-colors w-max self-end">
              {data.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImageTextSection; 