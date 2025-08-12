import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Github, Play, Award, TrendingUp, Users, 
  Zap, Eye, Brain, MessageSquare, BarChart3, Heart, 
  FileText, Filter, Search, Star
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: t('portfolio.all'), icon: Filter },
    { id: 'ai', name: t('portfolio.ai'), icon: Brain },
    { id: 'ml', name: t('portfolio.ml'), icon: TrendingUp },
    { id: 'nlp', name: t('portfolio.nlp'), icon: MessageSquare },
    { id: 'cv', name: t('portfolio.cv'), icon: Eye }
  ];

  const projects = [
    {
      id: 1,
      title: 'Enterprise AI Assistant',
      category: 'ai',
      description: 'Revolutionary AI assistant that transformed customer service operations for Fortune 500 companies.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      technologies: ['GPT-4', 'React', 'Node.js', 'MongoDB', 'AWS'],
      metrics: {
        performance: '99.7% Uptime',
        impact: '80% Cost Reduction',
        users: '1M+ Users'
      },
      awards: ['AI Excellence Award 2024', 'Best Enterprise Solution'],
      featured: true,
      demoUrl: '#',
      githubUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 2,
      title: 'Medical Diagnosis AI',
      category: 'ai',
      description: 'FDA-approved AI system for medical diagnosis with 99.2% accuracy rate.',
      image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg',
      technologies: ['TensorFlow', 'Python', 'DICOM', 'React', 'PostgreSQL'],
      metrics: {
        performance: '99.2% Accuracy',
        impact: '50% Faster Diagnosis',
        users: '500+ Hospitals'
      },
      awards: ['Healthcare Innovation Award', 'FDA Breakthrough Device'],
      featured: true,
      demoUrl: '#',
      githubUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 3,
      title: 'Smart Manufacturing Vision',
      category: 'cv',
      description: 'Computer vision system for quality control in manufacturing with zero-defect guarantee.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      technologies: ['OpenCV', 'PyTorch', 'Edge Computing', 'IoT', 'React'],
      metrics: {
        performance: '99.8% Detection Rate',
        impact: '$5M Savings',
        users: '200+ Factories'
      },
      awards: ['Manufacturing Excellence Award'],
      featured: false,
      demoUrl: '#',
      githubUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 4,
      title: 'Financial Prediction Engine',
      category: 'ml',
      description: 'Advanced ML model for financial market prediction with exceptional accuracy.',
      image: 'https://images.pexels.com/photos/7516196/pexels-photo-7516196.jpeg',
      technologies: ['Scikit-learn', 'XGBoost', 'Python', 'Apache Kafka', 'Redis'],
      metrics: {
        performance: '94% Prediction Accuracy',
        impact: '300% ROI',
        users: '50+ Banks'
      },
      awards: ['FinTech Innovation Award'],
      featured: false,
      demoUrl: '#',
      githubUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 5,
      title: 'Multilingual Chatbot Platform',
      category: 'nlp',
      description: 'Advanced NLP chatbot supporting 50+ languages with context understanding.',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
      technologies: ['BERT', 'Transformers', 'FastAPI', 'Docker', 'Kubernetes'],
      metrics: {
        performance: '95% Satisfaction',
        impact: '70% Cost Reduction',
        users: '10M+ Conversations'
      },
      awards: ['Best NLP Solution 2024'],
      featured: true,
      demoUrl: '#',
      githubUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 6,
      title: 'Autonomous Drone Navigation',
      category: 'cv',
      description: 'Real-time computer vision for autonomous drone navigation and obstacle avoidance.',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg',
      technologies: ['YOLO', 'ROS', 'C++', 'CUDA', 'Jetson'],
      metrics: {
        performance: '100% Safety Record',
        impact: '60% Efficiency Gain',
        users: '1000+ Flights'
      },
      awards: ['Robotics Innovation Award'],
      featured: false,
      demoUrl: '#',
      githubUrl: '#',
      caseStudyUrl: '#'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="pt-20 min-h-screen bg-primary-black">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${30 + Math.random() * 50}px`,
                height: `${30 + Math.random() * 50}px`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-gold-accent to-yellow-400 rounded-2xl flex items-center justify-center animate-glow">
                <Award className="w-8 h-8 text-black" />
              </div>
            </div>
            <h1 className="text-6xl font-bold text-platinum mb-6 bg-gradient-to-r from-platinum to-gold-accent bg-clip-text text-transparent">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl text-silver max-w-3xl mx-auto leading-relaxed">
              {t('portfolio.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-platinum mb-4">
              {t('portfolio.featured')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-accent to-yellow-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card-premium group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold-accent text-black text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.demoUrl}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold-accent hover:text-black transition-all duration-300"
                    >
                      <Play className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold-accent hover:text-black transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-platinum group-hover:text-gold-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-silver leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent-black text-gold-accent text-xs font-medium rounded-full border border-gold-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-gold-accent/20">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-gold-accent">{value}</div>
                        <div className="text-xs text-silver capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Awards */}
                  <div className="space-y-2">
                    {project.awards.map((award) => (
                      <div key={award} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-gold-accent" />
                        <span className="text-sm text-silver">{award}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3 pt-4">
                    <motion.a
                      href={project.demoUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-premium text-center"
                    >
                      {t('portfolio.liveDemo')}
                    </motion.a>
                    <motion.a
                      href={project.caseStudyUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-3 bg-transparent border border-gold-accent text-gold-accent rounded-xl text-center font-medium hover:bg-gold-accent hover:text-black transition-all duration-300"
                    >
                      {t('portfolio.caseStudy')}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-platinum mb-8">
              All Projects
            </h2>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-silver" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary-black border border-gold-accent/20 rounded-xl text-platinum placeholder-silver focus:border-gold-accent focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gold-accent text-black'
                      : 'bg-secondary-black text-silver hover:bg-gold-accent/20 hover:text-gold-accent border border-gold-accent/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card-premium group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-gold-accent text-black text-xs font-bold rounded-full">
                          FEATURED
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 flex space-x-2">
                      <motion.a
                        href={project.demoUrl}
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold-accent hover:text-black transition-all duration-300"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-platinum group-hover:text-gold-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-silver text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent-black text-gold-accent text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-accent-black text-silver text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-gold-accent/20">
                      <div className="text-sm text-gold-accent font-medium">
                        {Object.values(project.metrics)[0]}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-sm text-silver hover:text-gold-accent transition-colors duration-300"
                      >
                        {t('portfolio.viewProject')} →
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-accent-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-silver" />
              </div>
              <h3 className="text-xl font-semibold text-platinum mb-2">No projects found</h3>
              <p className="text-silver">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-black to-accent-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-platinum mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-silver mb-8 leading-relaxed">
              Join the ranks of industry leaders who have transformed their businesses with our AI solutions
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium text-lg px-8 py-4"
            >
              Start Your Project Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;