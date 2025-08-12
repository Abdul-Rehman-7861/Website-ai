import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Mic, Eye, Globe, BarChart3, Heart, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Bot,
      title: t('services.aiServices'),
      description: 'Custom AI solutions tailored to your business needs and industry requirements.',
      features: ['Custom Model Development', 'AI Strategy Consulting', 'Integration Support'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      price: 'From $15,000'
    },
    {
      icon: MessageSquare,
      title: t('services.chatbots'),
      description: 'Intelligent conversational AI that understands context and provides human-like interactions.',
      features: ['Multi-language Support', '24/7 Availability', 'CRM Integration'],
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
      price: 'From $5,000'
    },
    {
      icon: Mic,
      title: t('services.voiceAI'),
      description: 'Advanced voice recognition and synthesis for natural human-AI voice interactions.',
      features: ['Real-time Processing', 'Multiple Languages', 'Emotion Recognition'],
      image: 'https://images.pexels.com/photos/7516196/pexels-photo-7516196.jpeg',
      price: 'From $8,000'
    },
    {
      icon: Eye,
      title: t('services.computerVision'),
      description: 'Visual intelligence systems for object detection, recognition, and analysis.',
      features: ['Object Detection', 'Facial Recognition', 'Quality Control'],
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
      price: 'From $12,000'
    },
    {
      icon: Globe,
      title: t('services.webApps'),
      description: 'Intelligent web applications powered by AI for enhanced user experiences.',
      features: ['Responsive Design', 'AI Integration', 'Real-time Analytics'],
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      price: 'From $10,000'
    },
    {
      icon: BarChart3,
      title: t('services.predictive'),
      description: 'Data-driven insights and forecasting models to optimize business decisions.',
      features: ['Trend Analysis', 'Risk Assessment', 'Performance Optimization'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      price: 'From $7,000'
    },
    {
      icon: Heart,
      title: t('services.medical'),
      description: 'Healthcare AI solutions for diagnosis assistance and patient care optimization.',
      features: ['Diagnostic Support', 'Patient Monitoring', 'Data Privacy Compliant'],
      image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg',
      price: 'From $25,000'
    },
    {
      icon: FileText,
      title: t('services.document'),
      description: 'Automated document processing and information extraction systems.',
      features: ['OCR Technology', 'Data Extraction', 'Workflow Automation'],
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      price: 'From $6,000'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Comprehensive AI solutions designed to transform your business operations and drive innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {service.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 group">
                        {t('services.getQuote')}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                      <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors duration-300">
                        {t('services.learnMore')}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              100% Satisfaction Guarantee
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We're confident in our AI solutions. If you're not completely satisfied within 30 days, we'll make it right or provide a full refund.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">30 Days</div>
                <div className="opacity-90">Money-back guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Technical support</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Free</div>
                <div className="opacity-90">Consultation & planning</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your AI needs and create a custom solution that drives real results
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;