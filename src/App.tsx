import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PricingPlans from './components/PricingPlans';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-gray-50 font-cairo">
      <Header />
      <Hero />
      <About />
      <PricingPlans onPlanSelect={setSelectedPlan} />
      <Contact selectedPlan={selectedPlan} />
      <Footer />
    </div>
  );
}

export default App;