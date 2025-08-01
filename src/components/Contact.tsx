import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface ContactProps {
  language: 'tr' | 'en';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    tr: {
      title: 'İletişime Geçin',
      subtitle: 'Projeniz hakkında konuşmak için bizimle iletişime geçin. Size en uygun çözümü sunalım.',
      form: {
        name: 'Ad Soyad',
        email: 'Email',
        company: 'Şirket (Opsiyonel)',
        message: 'Mesajınız',
        submit: 'Mesaj Gönder',
        success: 'Mesajınız başarıyla gönderildi!'
      },
      contactInfo: {
        title: 'İletişim Bilgileri',
        workingHours: 'Çalışma Saatleri',
        quickResponse: 'Hızlı Yanıt',
        workingHoursText: [
          'Pazartesi - Cuma: 09:00 - 18:00',
          'Cumartesi: Kapalı',
          'Pazar: Kapalı'
        ],
        quickResponseText: 'Mesajınızı aldıktan sonra 24 saat içinde size geri dönüş yapacağız. Acil projeler için telefon ile iletişime geçebilirsiniz.'
      }
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with us to discuss your project. We will offer you the most suitable solution.',
      form: {
        name: 'Full Name',
        email: 'Email',
        company: 'Company (Optional)',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Your message has been sent successfully!'
      },
      contactInfo: {
        title: 'Contact Information',
        workingHours: 'Working Hours',
        quickResponse: 'Quick Response',
        workingHoursText: [
          'Monday - Friday: 09:00 - 18:00',
          'Saturday: 10:00 - 14:00',
          'Sunday: Closed'
        ],
        quickResponseText: 'We will get back to you within 24 hours after receiving your message. For urgent projects, you can contact us by phone.'
      }
    }
  };

  const currentContent = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      name: 'Email',
      value: 'info@demasteknoloji.com',
      icon: EnvelopeIcon,
      href: 'mailto:info@demasteknoloji.com'
    },
    {
      name: 'Phone',
      value: '+90 (212) 603 33 88',
      icon: PhoneIcon,
      href: 'tel:+902126033388'
    },
    {
      name: language === 'tr' ? 'Adres' : 'Address',
      value: language === 'tr' ? 'Yenibosna Merkez Mah. Kuyumcukent Sok. Kuyumcukent AVM No:4M/Z265 İstanbul, Türkiye' : 'Yenibosna Merkez Mah. Kuyumcukent Sok. Kuyumcukent AVM No:4M/Z265 Istanbul, Türkiye',
      icon: MapPinIcon,
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {currentContent.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {currentContent.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  {currentContent.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  {currentContent.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                  {currentContent.form.company}
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                  {currentContent.form.message}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {currentContent.form.submit}
              </motion.button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-600 text-sm"
                >
                  <CheckCircleIcon className="h-5 w-5" />
                  {currentContent.form.success}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                {currentContent.contactInfo.title}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.name}
                    href={info.href}
                    className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <info.icon className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{info.name}</p>
                      <p className="text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {currentContent.contactInfo.workingHours}
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                {currentContent.contactInfo.workingHoursText.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {currentContent.contactInfo.quickResponse}
              </h3>
              <p className="text-sm text-gray-600">
                {currentContent.contactInfo.quickResponseText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 