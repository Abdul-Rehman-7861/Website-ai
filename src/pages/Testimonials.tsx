import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Play, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Michael Chen',
      company: 'TechCorp Solutions',
      role: 'CEO',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg',
      rating: 5,
      text: 'Nexariza AI transformed our customer service with their intelligent chatbot. Response times improved by 80% and customer satisfaction increased dramatically.',
      project: 'AI Customer Service Bot',
      results: ['80% faster response times', '95% customer satisfaction', '$2M annual savings'],
      videoUrl: '#'
    },
    {
      name: 'Sarah Johnson',
      company: 'HealthTech Innovations',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg',
      rating: 5,
      text: 'The medical AI diagnostic assistant developed by Nexariza has revolutionized our healthcare delivery. Accuracy rates are exceptional.',
      project: 'Medical AI Diagnostic System',
      results: ['99.2% diagnostic accuracy', '50% faster diagnosis', 'FDA approved'],
      videoUrl: '#'
    },
    {
      name: 'David Rodriguez',
      company: 'E-Commerce Plus',
      role: 'Head of Technology',
      image: 'https://images.pexels.com/photos/3777557/pexels-photo-3777557.jpeg',
      rating: 5,
      text: 'Their recommendation engine increased our sales by 45%. The AI understands customer behavior better than we ever imagined possible.',
      project: 'AI Recommendation Engine',
      results: ['45% increase in sales', '3x higher engagement', '25% more repeat customers'],
      videoUrl: '#'
    },
    {
      name: 'Emma Thompson',
      company: 'Global Manufacturing',
      role: 'Operations Director',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      rating: 5,
      text: 'The computer vision system for quality control has eliminated defects and saved millions in production costs. Outstanding work!',
      project: 'Computer Vision Quality Control',
      results: ['99.8% defect detection', '$5M cost savings', 'Zero recalls'],
      videoUrl: '#'
    },
    {
      name: 'James Wilson',
      company: 'FinanceAI Corp',
      role: 'Chief Data Officer',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      rating: 5,
      text: 'Nexariza\'s predictive analytics platform helped us reduce risk by 60% and identify new market opportunities we never saw before.',
      project: 'Predictive Analytics Platform',
      results: ['60% risk reduction', '30% ROI increase', 'Real-time insights'],
      videoUrl: '#'
    }
  ];

  const stats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '500+', label: 'Projects Delivered' },
    { value: '150+', label: 'Happy Clients' },
    { value: '25+', label: 'Countries Served' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
              {t('testimonials.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Testimonial Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className="space-y-6">
                    <Quote className="w-12 h-12 text-blue-600 opacity-50" />
                    
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Project: {testimonials[currentTestimonial].project}</h4>
                        <div className="space-y-2">
                          {testimonials[currentTestimonial].results.map((result, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-gray-700 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {testimonials[currentTestimonial].name}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {testimonials[currentTestimonial].role}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          {t('testimonials.verified')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Video/Image */}
                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt="Client testimonial"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <button className="absolute inset-0 flex items-center justify-center group">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-blue-600 ml-1" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              More Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Discover how we've helped businesses transform with AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can transform your business with AI
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Success Story
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;