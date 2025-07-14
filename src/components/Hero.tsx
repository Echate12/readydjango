import React from 'react';
import { ArrowDown, Star, Shield, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-islamic-green-50 via-white to-islamic-gold-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-islamic-gold-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-islamic-green-200 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-islamic-gold-300 rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-islamic-green-800 mb-4 font-amiri leading-tight">
              {t('hero_title')}
            </h1>
            <div className="flex justify-center items-center mb-6">
              <div className="h-1 w-20 bg-gradient-islamic rounded-full mx-2"></div>
              <Star className="w-6 h-6 text-islamic-gold-500" />
              <div className="h-1 w-20 bg-gradient-islamic rounded-full mx-2"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-cairo leading-relaxed">
              {t('hero_subtitle')}
            </p>
          </div>

          {/* Description */}
          <div className="mb-12 animate-slide-up">
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('hero_desc')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-islamic-green-100">
              <Shield className="w-12 h-12 text-islamic-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-islamic-green-800 mb-2">{t('hero_feature1_title')}</h3>
              <p className="text-gray-600">{t('hero_feature1_desc')}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-islamic-gold-100">
              <Heart className="w-12 h-12 text-islamic-gold-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-islamic-green-800 mb-2">{t('hero_feature2_title')}</h3>
              <p className="text-gray-600">{t('hero_feature2_desc')}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-islamic-green-100">
              <Star className="w-12 h-12 text-islamic-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-islamic-green-800 mb-2">{t('hero_feature3_title')}</h3>
              <p className="text-gray-600">{t('hero_feature3_desc')}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#plans"
              className="bg-gradient-islamic text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 min-w-[200px]"
            >
              {t('hero_cta1')}
            </a>
            <a
              href="#about"
              className="border-2 border-islamic-green-600 text-islamic-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-islamic-green-600 hover:text-white transition-all duration-300 min-w-[200px]"
            >
              {t('hero_cta2')}
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-islamic-green-600 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;