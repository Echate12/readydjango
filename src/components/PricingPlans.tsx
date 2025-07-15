import React from 'react';
import { Check, Video, Headphones, Crown, Star, Clock, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Add prop type for setting selected plan
interface PricingPlansProps {
  onPlanSelect?: (planName: string) => void;
}

const PricingPlans: React.FC<PricingPlansProps> = ({ onPlanSelect }) => {
  const { t } = useTranslation();
  const plans = [
    {
      key: 'plan_basic_name',
      name: t('plan_basic_name'),
      price: '31',
      currency: t('currency'),
      duration: t('plan_basic_duration'),
      icon: Video,
      description: t('plan_basic_desc'),
      features: [
        t('plan_basic_feature1'),
        t('plan_basic_feature2'),
        t('plan_basic_feature3'),
        t('plan_basic_feature4')
      ],
      popular: false,
      color: 'islamic-green'
    },
    {
      key: 'plan_recordings_name',
      name: t('plan_recordings_name'),
      price: '59',
      currency: t('currency'),
      duration: t('plan_recordings_duration'),
      icon: Headphones,
      description: t('plan_recordings_desc'),
      features: [
        t('plan_recordings_feature1'),
        t('plan_recordings_feature2'),
        t('plan_recordings_feature3'),
        t('plan_recordings_feature4'),
        t('plan_recordings_feature5')
      ],
      popular: false,
      color: 'islamic-gold'
    },
    {
      key: 'plan_full_name',
      name: t('plan_full_name'),
      price: '120',
      currency: t('currency'),
      duration: t('plan_full_duration'),
      icon: Star,
      description: t('plan_full_desc'),
      features: [
        t('plan_full_feature1'),
        t('plan_full_feature2'),
        t('plan_full_feature3'),
        t('plan_full_feature4'),
        t('plan_full_feature5')
      ],
      popular: true,
      color: 'islamic-green'
    },
    {
      key: 'plan_diamond_name',
      name: t('plan_diamond_name'),
      price: '99',
      currency: t('currency'),
      duration: t('plan_diamond_duration'),
      icon: Crown,
      description: t('plan_diamond_desc'),
      features: [
        t('plan_diamond_feature1'),
        t('plan_diamond_feature2'),
        t('plan_diamond_feature3'),
        t('plan_diamond_feature4'),
        t('plan_diamond_feature5')
      ],
      popular: false,
      color: 'islamic-gold'
    }
  ];

  const getColorClasses = (color: string, popular: boolean) => {
    if (popular) {
      return {
        card: 'bg-gradient-to-br from-islamic-green-500 to-islamic-green-600 text-white transform scale-105',
        button: 'bg-white text-islamic-green-600 hover:bg-gray-100',
        badge: 'bg-islamic-gold-500 text-white'
      };
    }
    
    return color === 'islamic-gold' ? {
      card: 'bg-white border-2 border-islamic-gold-200 hover:border-islamic-gold-400',
      button: 'bg-gradient-to-r from-islamic-gold-500 to-islamic-gold-600 text-white hover:from-islamic-gold-600 hover:to-islamic-gold-700',
      badge: 'bg-islamic-gold-100 text-islamic-gold-800'
    } : {
      card: 'bg-white border-2 border-islamic-green-200 hover:border-islamic-green-400',
      button: 'bg-gradient-islamic text-white hover:shadow-lg',
      badge: 'bg-islamic-green-100 text-islamic-green-800'
    };
  };

  const handleClick = (planKey: string) => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      // Detect mobile device
      const isMobile = window.innerWidth <= 768;
      // Use a larger offset for mobile devices
      const yOffset = isMobile ? -180 : -80;
      const y = contactForm.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (onPlanSelect) {
      onPlanSelect(planKey);
    }
  };

  return (
    <section id="plans" className="py-20 bg-gradient-to-br from-islamic-green-50 to-islamic-gold-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-islamic-green-800 mb-6 font-amiri">
            {t('plans_title')}
          </h2>
          <div className="flex justify-center items-center mb-6">
            <div className="h-1 w-20 bg-gradient-islamic rounded-full mx-2"></div>
            <Star className="w-6 h-6 text-islamic-gold-500" />
            <div className="h-1 w-20 bg-gradient-islamic rounded-full mx-2"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('plans_desc')}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color, plan.popular);
            return (
              <div
                key={index}
                className={`${colors.card} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-2 -right-2 bg-islamic-gold-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
                    {t('plans_popular')}
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`${plan.popular ? 'bg-white/20' : 'bg-gradient-islamic'} p-4 rounded-2xl w-fit mx-auto mb-6`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-white'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-islamic-green-800'}`}>
                    {plan.name}
                  </h3>
                  <p className={`${plan.popular ? 'text-white/90' : 'text-gray-600'} mb-4`}>
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-islamic-green-800'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-white/90' : 'text-gray-600'} mr-2`}>
                      {plan.currency}
                    </span>
                  </div>
                  
                  {/* Duration */}
                  <div className={`flex items-center justify-center space-x-2 space-x-reverse ${colors.badge} px-4 py-2 rounded-full text-sm font-semibold`}>
                    <Clock className="w-4 h-4" />
                    <span>{plan.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 space-x-reverse">
                      <Check className={`w-5 h-5 mt-0.5 ${plan.popular ? 'text-white' : 'text-islamic-green-600'} flex-shrink-0`} />
                      <span className={`${plan.popular ? 'text-white/90' : 'text-gray-700'} leading-relaxed`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`${colors.button} w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                  onClick={() => handleClick(plan.key)}
                >
                  {t('plans_cta')}
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-islamic-green-800 mb-4">
              {t('plans_info_title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                <Calendar className="w-5 h-5 text-islamic-green-600" />
                <span>{t('plans_info_flexible')}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                <Check className="w-5 h-5 text-islamic-green-600" />
                <span>{t('plans_info_quality')}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                <Star className="w-5 h-5 text-islamic-green-600" />
                <span>{t('plans_info_experience')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;