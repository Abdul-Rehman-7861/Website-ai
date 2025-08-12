import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Bot, Cpu, Brain, Zap, Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
    'https://images.pexels.com/photos/7516196/pexels-photo-7516196.jpeg',
    'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
    'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg'
  ];

  const floatingIcons = [
    { Icon: Bot, delay: 0, position: { top: '20%', left: '10%' } },
    { Icon: Cpu, delay: 0.2, position: { top: '60%', left: '15%' } },
    { Icon: Brain, delay: 0.4, position: { top: '30%', right: '20%' } },
    { Icon: Zap, delay: 0.6, position: { top: '70%', right: '10%' } },
    { Icon: Sparkles, delay: 0.8, position: { top: '45%', left: '5%' } }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-black">
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: index === currentImageIndex ? 0.15 : 0,
              scale: index === currentImageIndex ? 1 : 1.1
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <img
              src={image}
              alt="AI Technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-black/80 via-primary-black/60 to-primary-black/90" />
          </motion.div>
        ))}
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className="absolute text-gold-accent/30"
          style={position}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3], 
            scale: [1, 1.3, 1],
            rotate: [0, 360, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 8,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="w-16 h-16" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-accent/20 to-yellow-400/20 border border-gold-accent/30 text-gold-accent rounded-full text-sm font-medium backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                AI Innovation Leader Since 2019
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-platinum leading-tight"
              >
                <span className="bg-gradient-to-r from-platinum via-gold-accent to-yellow-400 bg-clip-text text-transparent">
                  {t('home.hero.title')}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-silver max-w-2xl leading-relaxed"
              >
                {t('home.hero.subtitle')}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium text-lg px-8 py-4 group"
              >
                {t('home.hero.startProject')}
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-gold-accent text-gold-accent font-semibold rounded-xl hover:bg-gold-accent hover:text-black transition-all duration-300 group"
              >
                <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                {t('home.hero.getProposal')}
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center space-x-8 pt-8 border-t border-gold-accent/20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-accent">500+</div>
                <div className="text-sm text-silver">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-accent">150+</div>
                <div className="text-sm text-silver">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-accent">25+</div>
                <div className="text-sm text-silver">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-accent">99.7%</div>
                <div className="text-sm text-silver">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[600px] rounded-3xl overflow-hidden">
              {/* Main Image Container */}
              <div className="relative w-full h-full">
                {backgroundImages.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt="AI Technology Showcase"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ 
                      opacity: index === currentImageIndex ? 1 : 0,
                      scale: index === currentImageIndex ? 1 : 1.1
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Status Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 bg-black/80 backdrop-blur-xl border border-gold-accent/30 p-4 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-platinum">AI Processing Active</span>
                </div>
                <div className="text-xs text-silver mt-1">Real-time Analysis</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-xl border border-gold-accent/30 p-4 rounded-2xl shadow-2xl"
              >
                <div className="text-3xl font-bold text-gold-accent">99.7%</div>
                <div className="text-sm text-silver">Accuracy Rate</div>
                <div className="text-xs text-green-400 mt-1">↗ +2.3% this month</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -left-4 bg-black/80 backdrop-blur-xl border border-gold-accent/30 p-3 rounded-xl shadow-2xl"
              >
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-gold-accent" />
                  <div>
                    <div className="text-sm font-medium text-platinum">Neural Network</div>
                    <div className="text-xs text-silver">Deep Learning</div>
                  </div>
                </div>
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-gold-accent/20 animate-glow" />
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-gold-accent/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold-accent rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gold-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;