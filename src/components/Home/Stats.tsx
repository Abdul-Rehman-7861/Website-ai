import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../../contexts/LanguageContext';

const Stats: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [counts, setCounts] = useState({ projects: 0, clients: 0, countries: 0, experience: 0 });

  const stats = [
    { key: 'projects', target: 500, suffix: '+' },
    { key: 'clients', target: 150, suffix: '+' },
    { key: 'countries', target: 25, suffix: '' },
    { key: 'experience', target: 10, suffix: '+' }
  ];

  useEffect(() => {
    if (inView) {
      stats.forEach((stat) => {
        let start = 0;
        const end = stat.target;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          setCounts(prev => ({
            ...prev,
            [stat.key]: Math.min(Math.floor(start), end)
          }));

          if (start >= end) {
            clearInterval(timer);
          }
        }, 16);
      });
    }
  }, [inView]);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {counts[stat.key as keyof typeof counts]}{stat.suffix}
              </div>
              <div className="text-lg font-medium opacity-90">
                {t(`home.stats.${stat.key}`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;