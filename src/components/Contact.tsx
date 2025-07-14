import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Add prop type for selected plan
interface ContactProps {
  selectedPlan?: string;
}

const Contact: React.FC<ContactProps> = ({ selectedPlan }) => {
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Update message field when selectedPlan changes
  // useEffect(() => {
  //   if (selectedPlan) {
  //     setForm((prev) => ({ ...prev, message: `${t('plans_cta')}: ${selectedPlan}\n` }));
  //   }
  // }, [selectedPlan, t]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Build the full WhatsApp message in the selected language
    let messageToSend = '';
    const nameLabel = t('full_name');
    const phoneLabel = t('phone_number');
    const emailLabel = t('email');
    let planLabel = 'Plan';
    let messageLabel = 'Message';
    if (i18n.language === 'ar') {
      planLabel = 'الباقة';
      messageLabel = 'الرسالة';
    } else if (i18n.language === 'fr') {
      planLabel = 'Forfait';
      messageLabel = 'Message';
    }
    const planName = selectedPlan ? t(selectedPlan) : '';
    messageToSend = `${nameLabel}: ${form.name}\n${phoneLabel}: ${form.phone}\n${emailLabel}: ${form.email}`;
    if (selectedPlan) {
      messageToSend += `\n${planLabel}: ${planName}`;
    }
    messageToSend += `\n${messageLabel}: ${form.message}`;

    try {
      const res = await fetch('http://127.0.0.1:8000/api/get_whatsapp_link/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageToSend })
      });
  
      if (res.ok) {
        const data = await res.json();
        if (data.whatsapp_url) {
          setForm({ name: '', phone: '', email: '', message: '' });
          window.location.href = data.whatsapp_url;  // Redirect to WhatsApp with the message
        } else {
          setStatus('error');
        }
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
  

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact_us'),
      details: ['+212 666462665'],
      color: 'islamic-green'
    },
    {
      icon: Mail,
      title: t('email'),
      details: ['echmohamed2000@gmail.com', 'booking@alaroussihealing.com'],
      color: 'islamic-gold'
    },
    {
      icon: MapPin,
      title: t('address'),
      details: [t('address'), t('contact_paragraph')],
      color: 'islamic-green'
    },
    {
      icon: Clock,
      title: t('working_hours'),
      details: [t('working_hours'), t('contact_paragraph')],
      color: 'islamic-gold'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-islamic-green-800 mb-6 font-amiri">
            {t('contact_us')}
          </h2>
          <div className="flex justify-center items-center mb-6">
            <div className="h-1 w-20 bg-gradient-islamic rounded-full mx-2"></div>
            <MessageCircle className="w-6 h-6 text-islamic-gold-500" />
            <div className="h-1 w-20 bg-gradient-islamic rounded-full mx-2"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact_paragraph')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-islamic-green-800 mb-8 font-amiri">
              {t('contact_info')}
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className={`bg-gradient-${info.color} p-3 rounded-xl`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-islamic-green-800 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 space-y-4">
              <a
                href="tel:+212 666462665"
                className="flex items-center justify-center space-x-3 space-x-reverse bg-gradient-islamic text-white px-6 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 w-full"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{t('call_now')}</span>
              </a>
              <a
                href="https://wa.me/212666462665"
                className="flex items-center justify-center space-x-3 space-x-reverse bg-green-600 text-white px-6 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 w-full"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">{t('whatsapp')}</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form">
            <h3 className="text-3xl font-bold text-islamic-green-800 mb-8 font-amiri">
              {t('send_message')}
            </h3>
            {/* Show selected plan above the message field */}
            {selectedPlan && (
              <div className="mb-4 p-3 rounded-xl bg-islamic-gold-50 border border-islamic-gold-200 text-islamic-gold-800 font-semibold text-lg text-center">
                {t('plans_cta')}: {selectedPlan}
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-islamic-green-800 font-semibold mb-2">
                    {t('full_name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-islamic-green-500 focus:ring-2 focus:ring-islamic-green-200 transition-all duration-200"
                    placeholder="اسمك الكامل"
                    required
                  />
                </div>
                <div>
                  <label className="block text-islamic-green-800 font-semibold mb-2">
                    {t('phone_number')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-islamic-green-500 focus:ring-2 focus:ring-islamic-green-200 transition-all duration-200"
                    placeholder="رقم هاتفك"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-islamic-green-800 font-semibold mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-islamic-green-500 focus:ring-2 focus:ring-islamic-green-200 transition-all duration-200"
                  placeholder="بريدك الإلكتروني"
                  required
                />
              </div>
              {/* Removed consultation type dropdown */}
              <div>
                <label className="block text-islamic-green-800 font-semibold mb-2">
                  {t('message')}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-islamic-green-500 focus:ring-2 focus:ring-islamic-green-200 transition-all duration-200"
                  placeholder="اكتب تفاصيل حالتك أو استفسارك هنا..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 space-x-reverse bg-gradient-islamic text-white px-6 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                disabled={status === 'sending'}
              >
                <Send className="w-5 h-5" />
                <span>{t('send')}</span>
              </button>
            </form>
            {status === 'success' && (
              <p className="text-green-600 font-semibold mt-4">{t('success')}</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-semibold mt-4">{t('error')}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
