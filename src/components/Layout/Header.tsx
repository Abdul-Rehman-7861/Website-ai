import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe, Menu, X, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    { key: 'team', path: '/team' },
    { key: 'testimonials', path: '/testimonials' },
    { key: 'projects', path: '/projects' },
    { key: 'portfolio', path: '/portfolio' },
    { key: 'milestones', path: '/milestones' },
    { key: 'contact', path: '/contact' },
    { key: 'voicebot', path: '/voicebot' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Animated Background */}
      <div className="animated-bg">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-gold-accent/20 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-r from-gold-accent to-yellow-400 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Bot className="w-7 h-7 text-black" />
              </motion.div>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-gold-accent to-yellow-400 bg-clip-text text-transparent"
              >
                Nexariza AI
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    location.pathname === item.path
                      ? 'text-gold-accent bg-gold-accent/10'
                      : 'text-platinum hover:text-gold-accent hover:bg-gold-accent/5'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-accent rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gold-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-platinum hover:text-gold-accent transition-all duration-300 rounded-lg hover:bg-gold-accent/10"
                >
                  <Globe className="w-4 h-4" />
                  <span>{languages.find(l => l.code === language)?.flag}</span>
                  <span className="hidden sm:block">{language.toUpperCase()}</span>
                </motion.button>
                
                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-56 bg-secondary-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gold-accent/20 py-2 z-50"
                    >
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          whileHover={{ x: 4 }}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLanguageOpen(false);
                          }}
                          className={`flex items-center space-x-3 w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
                            language === lang.code
                              ? 'bg-gold-accent/20 text-gold-accent'
                              : 'text-platinum hover:bg-gold-accent/10 hover:text-gold-accent'
                          }`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden p-2 rounded-lg hover:bg-gold-accent/10 transition-colors duration-200"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6 text-platinum" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6 text-platinum" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="xl:hidden bg-secondary-black/95 backdrop-blur-xl border-t border-gold-accent/20 rounded-b-2xl mt-2"
              >
                <div className="py-6 space-y-2 px-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl ${
                          location.pathname === item.path
                            ? 'text-gold-accent bg-gold-accent/20'
                            : 'text-platinum hover:text-gold-accent hover:bg-gold-accent/10'
                        }`}
                      >
                        {t(`nav.${item.key}`)}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;