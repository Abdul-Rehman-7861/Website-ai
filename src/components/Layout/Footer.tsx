import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-secondary-black to-primary-black border-t border-gold-accent/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="floating-element"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              width: '60px',
              height: '60px',
              animationDelay: `${i * 2}s`,
              animationDuration: '25s'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-gold-accent to-yellow-400 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gold-accent to-yellow-400 bg-clip-text text-transparent">
                Nexariza AI
              </span>
            </div>
            <p className="text-silver text-sm leading-relaxed">
              Leading the future of AI innovation with cutting-edge solutions for businesses worldwide. Transforming tomorrow, today.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Github, href: '#', label: 'GitHub' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-accent-black hover:bg-gold-accent/20 rounded-lg flex items-center justify-center text-silver hover:text-gold-accent transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-platinum mb-6 relative">
              Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold-accent rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'AI Development', path: '/services' },
                { name: 'Machine Learning', path: '/services' },
                { name: 'NLP Solutions', path: '/services' },
                { name: 'Computer Vision', path: '/services' },
                { name: 'Voice AI', path: '/voicebot' }
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-silver hover:text-gold-accent transition-colors duration-300 text-sm group flex items-center"
                  >
                    <span className="w-1 h-1 bg-gold-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-platinum mb-6 relative">
              Company
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold-accent rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Team', path: '/team' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-silver hover:text-gold-accent transition-colors duration-300 text-sm group flex items-center"
                  >
                    <span className="w-1 h-1 bg-gold-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-platinum mb-6 relative">
              Contact
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold-accent rounded-full" />
            </h3>
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'contact@nexariza.ai', href: 'mailto:contact@nexariza.ai' },
                { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { icon: MapPin, text: 'San Francisco, CA', href: '#' }
              ].map(({ icon: Icon, text, href }) => (
                <motion.a
                  key={text}
                  href={href}
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-3 text-silver hover:text-gold-accent transition-all duration-300 text-sm group"
                >
                  <div className="w-8 h-8 bg-accent-black group-hover:bg-gold-accent/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-4 h-4 text-gold-accent" />
                  </div>
                  <span>{text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gold-accent/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-silver text-sm">
              © 2024 Nexariza AI. All rights reserved. Crafted with precision and innovation.
            </p>
            <div className="flex items-center space-x-6">
              {[
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Cookie Policy', path: '/cookies' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-silver hover:text-gold-accent text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-gold-accent to-yellow-400 rounded-full flex items-center justify-center shadow-2xl hover:shadow-gold-accent/25 transition-all duration-300 z-50"
      >
        <ArrowUp className="w-5 h-5 text-black" />
      </motion.button>
    </footer>
  );
};

export default Footer;