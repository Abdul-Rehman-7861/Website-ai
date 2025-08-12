import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, MessageSquare, Cpu, Code, BarChart3, Eye, FileText } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Expertise: React.FC = () => {
  const { t } = useLanguage();

  const expertiseAreas = [
    {
      icon: Bot,
      title: t('home.expertise.ai'),
      description: t('home.expertise.aiDesc'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: t('home.expertise.ml'),
      description: t('home.expertise.mlDesc'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: t('home.expertise.nlp'),
      description: t('home.expertise.nlpDesc'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cpu,
      title: t('home.expertise.llm'),
      description: t('home.expertise.llmDesc'),
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('home.expertise.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge AI technologies and solutions tailored to transform your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {area.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>

              <div className={`absolute inset-0 bg-gradient-to-r ${area.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;