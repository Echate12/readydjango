import React, { useState } from 'react';
import { Menu, X, Moon, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const navItems = [
    { href: '#home', label: t('nav_home') },
    { href: '#about', label: t('nav_about') },
    { href: '#plans', label: t('nav_plans') },
    { href: '#contact', label: t('nav_contact') },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Language Switcher */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="bg-gradient-islamic text-white p-2 rounded-lg">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-islamic-green-700">{t('site_title')}</h1>
                <p className="text-xs text-gray-600">{t('site_subtitle')}</p>
              </div>
            </div>
            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => i18n.changeLanguage('ar')}
                className={`px-2 py-1 rounded ${i18n.language === 'ar' ? 'bg-islamic-green-700 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                العربية
              </button>
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-islamic-green-700 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                English
              </button>
              <button
                onClick={() => i18n.changeLanguage('fr')}
                className={`px-2 py-1 rounded ${i18n.language === 'fr' ? 'bg-islamic-green-700 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Français
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-islamic-green-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#plans"
              className="bg-gradient-islamic text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              {t('cta_book')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-islamic-green-600 transition-colors duration-200 px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#plans"
                className="bg-gradient-islamic text-white px-6 py-2 rounded-full mx-4 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('cta_book')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;