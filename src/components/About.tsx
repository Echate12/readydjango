import React from 'react';
import { Book, Sparkles, Users, Award, CheckCircle, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const benefits = [
    t('about_benefit1'),
    t('about_benefit2'),
    t('about_benefit3'),
    t('about_benefit4'),
    t('about_benefit5'),
    t('about_benefit6'),
  ];

  const methods = [
    {
      icon: Book,
      title: t('about_method1_title'),
      description: t('about_method1_desc')
    },
    {
      icon: Sparkles,
      title: t('about_method2_title'),
      description: t('about_method2_desc')
    },
    {
      icon: Users,
      title: t('about_method3_title'),
      description: t('about_method3_desc')
    },
    {
      icon: Award,
      title: t('about_method4_title'),
      description: t('about_method4_desc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-islamic-green-800 mb-6 font-amiri">
            {t('about_title')}
          </h2>
          <div className="flex justify-center items-center mb-6">
            <div className="h-1 w-20 bg-gradient-islamic rounded-full mx-2"></div>
            <Heart className="w-6 h-6 text-islamic-gold-500" />
            <div className="h-1 w-20 bg-gradient-islamic rounded-full mx-2"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about_intro')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Benefits Section */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-islamic-green-800 mb-8 font-amiri">
              {t('about_benefits_title')}
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 space-x-reverse group">
                  <CheckCircle className="w-6 h-6 text-islamic-green-600 mt-1 group-hover:scale-110 transition-transform duration-200" />
                  <p className="text-lg text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Importance Section */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-islamic-green-800 mb-8 font-amiri">
              {t('about_importance_title')}
            </h3>
            <div className="bg-islamic-green-50 p-8 rounded-2xl border border-islamic-green-100">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-islamic-green-800">{t('about_ruqyah')}</span> 
                  {t('about_importance1')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('about_importance2')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('about_importance3')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Methods Grid */}
        <div>
          <h3 className="text-3xl font-bold text-islamic-green-800 mb-12 text-center font-amiri">
            {t('about_methods_title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methods.map((method, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="bg-gradient-islamic p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-islamic-green-800 mb-4 text-center">
                  {method.title}
                </h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;