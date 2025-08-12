import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Award, Users, Target, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Team: React.FC = () => {
  const { t } = useLanguage();

  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      role: t('team.ceo'),
      image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg',
      expertise: 'AI Strategy, Deep Learning, Computer Vision',
      bio: 'Former Google AI researcher with 15+ years in machine learning and neural networks. Led breakthrough projects in autonomous systems.',
      achievements: ['PhD in Computer Science - Stanford', '50+ Published Papers', 'Forbes 30 Under 30'],
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'Marcus Rodriguez',
      role: t('team.cto'),
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg',
      expertise: 'Machine Learning, NLP, System Architecture',
      bio: 'Ex-Microsoft Principal Engineer specializing in large-scale ML systems and natural language processing platforms.',
      achievements: ['MS Computer Science - MIT', 'AWS ML Specialty', '20+ Patents'],
      social: { linkedin: '#', twitter: '#', github: '#' }
    }
  ];

  const experts = [
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      expertise: 'Computer Vision, LLMs, Research',
      achievements: ['PhD AI - Carnegie Mellon', 'NIPS Best Paper Award']
    },
    {
      name: 'Alex Thompson',
      role: 'Lead ML Engineer',
      image: 'https://images.pexels.com/photos/3777557/pexels-photo-3777557.jpeg',
      expertise: 'MLOps, Infrastructure, Deployment',
      achievements: ['Google Cloud Certified', 'Kubernetes Expert']
    },
    {
      name: 'Dr. Raj Patel',
      role: 'NLP Specialist',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      expertise: 'Natural Language Processing, Transformers',
      achievements: ['PhD Linguistics - Berkeley', 'Hugging Face Contributor']
    },
    {
      name: 'Lisa Zhang',
      role: 'Computer Vision Lead',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      expertise: 'Image Recognition, Object Detection',
      achievements: ['MS Computer Vision - CMU', 'CVPR Publications']
    }
  ];

  const developers = [
    {
      name: 'David Kim',
      role: 'Senior Full-Stack Developer',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg',
      expertise: 'React, Node.js, AI Integration'
    },
    {
      name: 'Sophie Mueller',
      role: 'DevOps Engineer',
      image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg',
      expertise: 'AWS, Docker, CI/CD'
    },
    {
      name: 'James Wilson',
      role: 'Frontend Specialist',
      image: 'https://images.pexels.com/photos/3777557/pexels-photo-3777557.jpeg',
      expertise: 'React, TypeScript, UI/UX'
    },
    {
      name: 'Maria Garcia',
      role: 'Data Scientist',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      expertise: 'Python, TensorFlow, Analytics'
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
              {t('team.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('team.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
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
              {t('team.leadership')}
            </h2>
            <p className="text-xl text-gray-600">
              Visionary leaders driving AI innovation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-blue-200 font-medium">{member.role}</p>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Expertise</h4>
                      <p className="text-blue-600 font-medium">{member.expertise}</p>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <Award className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-4">
                      <a href={member.social.linkedin} className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={member.social.twitter} className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href={member.social.github} className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Experts */}
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
              {t('team.experts')}
            </h2>
            <p className="text-xl text-gray-600">
              Specialists in cutting-edge AI technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {expert.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3 text-center">
                  {expert.role}
                </p>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  {expert.expertise}
                </p>

                <div className="space-y-1">
                  {expert.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Team */}
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
              {t('team.developers')}
            </h2>
            <p className="text-xl text-gray-600">
              Expert developers bringing AI solutions to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developers.map((developer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={developer.image}
                  alt={developer.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  {developer.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3 text-center text-sm">
                  {developer.role}
                </p>
                <p className="text-gray-600 text-sm text-center">
                  {developer.expertise}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="opacity-90">Team Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Target className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="opacity-90">PhD Holders</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Award className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="opacity-90">Patents & Papers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Lightbulb className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="opacity-90">Countries Represented</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join Our World-Class Team
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Be part of the AI revolution. We're always looking for exceptional talent.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;