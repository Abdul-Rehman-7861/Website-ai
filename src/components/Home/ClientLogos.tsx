import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos: React.FC = () => {
  const clients = [
    { name: 'TechCorp', logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg' },
    { name: 'HealthTech', logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg' },
    { name: 'FinanceAI', logo: 'https://images.pexels.com/photos/7516196/pexels-photo-7516196.jpeg' },
    { name: 'RetailPlus', logo: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg' },
    { name: 'ManufacturingPro', logo: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg' },
    { name: 'EduTech', logo: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-600 mb-8">
            Trusted by Leading Companies Worldwide
          </h2>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * clients.length] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-12"
            style={{ width: `${200 * clients.length}%` }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-md flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-20 h-10 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;