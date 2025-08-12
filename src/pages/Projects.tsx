import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, MessageSquare, Eye, BarChart3, Heart, FileText, 
  ArrowRight, CheckCircle, Download, Github, ExternalLink,
  Clock, DollarSign, Users, Zap, Target, Award
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [projectData, setProjectData] = useState({
    type: '',
    complexity: '',
    timeline: '',
    features: [],
    budget: ''
  });

  const projectTypes = [
    { id: 'chatbot', name: 'AI Chatbot', icon: MessageSquare, price: 'From $5,000' },
    { id: 'computer-vision', name: 'Computer Vision', icon: Eye, price: 'From $12,000' },
    { id: 'predictive', name: 'Predictive Analytics', icon: BarChart3, price: 'From $7,000' },
    { id: 'medical', name: 'Medical AI', icon: Heart, price: 'From $25,000' },
    { id: 'document', name: 'Document Processing', icon: FileText, price: 'From $6,000' },
    { id: 'custom', name: 'Custom AI Solution', icon: Bot, price: 'From $15,000' }
  ];

  const complexityLevels = [
    { id: 'basic', name: 'Basic', description: 'Simple implementation with core features', multiplier: 1 },
    { id: 'advanced', name: 'Advanced', description: 'Enhanced features and integrations', multiplier: 1.5 },
    { id: 'enterprise', name: 'Enterprise', description: 'Full-scale solution with custom features', multiplier: 2.5 }
  ];

  const timelines = [
    { id: '2-4', name: '2-4 weeks', description: 'Quick deployment for simple projects' },
    { id: '1-3', name: '1-3 months', description: 'Standard development timeline' },
    { id: '3-6', name: '3-6 months', description: 'Complex enterprise solutions' },
    { id: '6+', name: '6+ months', description: 'Large-scale custom development' }
  ];

  const features = [
    'Multi-language Support', 'Real-time Processing', 'API Integration',
    'Custom Dashboard', 'Mobile App', 'Cloud Deployment',
    'Analytics & Reporting', 'User Management', 'Security Features',
    'Third-party Integrations', 'Custom Training', 'Ongoing Support'
  ];

  const portfolio = [
    {
      title: 'Customer Service Bot',
      description: 'AI-powered chatbot handling 10,000+ daily conversations',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
      tech: ['NLP', 'Machine Learning', 'React', 'Node.js'],
      results: ['80% faster response', '95% satisfaction', '$2M savings'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Real-Time Object Detection',
      description: 'Computer vision system for manufacturing quality control',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      tech: ['Computer Vision', 'TensorFlow', 'Python', 'OpenCV'],
      results: ['99.8% accuracy', 'Zero defects', '$5M cost savings'],
      github: '#',
      demo: '#'
    },
    {
      title: 'E-Commerce Recommendation Engine',
      description: 'Personalized product recommendations using ML algorithms',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      tech: ['Machine Learning', 'Python', 'AWS', 'React'],
      results: ['45% sales increase', '3x engagement', '25% retention'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Smart Document Processing',
      description: 'Automated document extraction and classification system',
      image: 'https://images.pexels.com/photos/7516196/pexels-photo-7516196.jpeg',
      tech: ['OCR', 'NLP', 'Python', 'MongoDB'],
      results: ['90% time savings', '99% accuracy', 'Paperless workflow'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Healthcare Diagnostic Assistant',
      description: 'AI system assisting doctors with medical diagnosis',
      image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg',
      tech: ['Deep Learning', 'Medical AI', 'Python', 'TensorFlow'],
      results: ['99.2% accuracy', '50% faster diagnosis', 'FDA approved'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Voice-Controlled IoT Platform',
      description: 'Smart home automation with voice AI integration',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
      tech: ['Voice AI', 'IoT', 'React Native', 'AWS IoT'],
      results: ['Voice control', 'Energy savings', 'Smart automation'],
      github: '#',
      demo: '#'
    }
  ];

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const generateProposal = () => {
    // In a real app, this would generate and download a PDF
    alert('PDF proposal generated! Check your downloads.');
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
              {t('projects.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Builder */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                    step <= currentStep
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              ></div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Project Type */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {t('projects.step1')}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectTypes.map((type) => (
                    <motion.div
                      key={type.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setProjectData({ ...projectData, type: type.id });
                        nextStep();
                      }}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        projectData.type === type.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <type.icon className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {type.name}
                      </h3>
                      <p className="text-green-600 font-medium">{type.price}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Complexity */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {t('projects.step2')}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {complexityLevels.map((level) => (
                    <motion.div
                      key={level.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setProjectData({ ...projectData, complexity: level.id });
                        nextStep();
                      }}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        projectData.complexity === level.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {level.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{level.description}</p>
                      <p className="text-blue-600 font-medium">
                        {level.multiplier}x base price
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Timeline */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {t('projects.step3')}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {timelines.map((timeline) => (
                    <motion.div
                      key={timeline.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setProjectData({ ...projectData, timeline: timeline.id });
                        nextStep();
                      }}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        projectData.timeline === timeline.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <Clock className="w-8 h-8 text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {timeline.name}
                      </h3>
                      <p className="text-gray-600">{timeline.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Features */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {t('projects.step4')}
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {features.map((feature) => (
                    <motion.div
                      key={feature}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        const newFeatures = projectData.features.includes(feature)
                          ? projectData.features.filter(f => f !== feature)
                          : [...projectData.features, feature];
                        setProjectData({ ...projectData, features: newFeatures });
                      }}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        projectData.features.includes(feature)
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle className={`w-5 h-5 ${
                          projectData.features.includes(feature)
                            ? 'text-blue-600'
                            : 'text-gray-400'
                        }`} />
                        <span className="font-medium text-gray-900">{feature}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <button
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Continue to Pricing
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Pricing & Contact */}
            {currentStep === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {t('projects.step5')}
                </h2>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Summary</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Target className="w-5 h-5 text-blue-600" />
                          <span>Project Type: <strong>{projectData.type}</strong></span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Zap className="w-5 h-5 text-blue-600" />
                          <span>Complexity: <strong>{projectData.complexity}</strong></span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-blue-600" />
                          <span>Timeline: <strong>{projectData.timeline}</strong></span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-blue-600" />
                          <span>Features: <strong>{projectData.features.length} selected</strong></span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Estimated Investment</h3>
                      <div className="text-4xl font-bold text-blue-600 mb-4">$25,000 - $45,000</div>
                      <p className="text-gray-600 mb-6">Final pricing based on detailed requirements</p>
                      <div className="space-y-3">
                        <button
                          onClick={generateProposal}
                          className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Generate PDF Proposal
                        </button>
                        <button className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors duration-300">
                          Schedule Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          {currentStep > 1 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-300 transition-colors duration-300"
              >
                Previous Step
              </button>
              {currentStep < 5 && (
                <button
                  onClick={nextStep}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Next Step
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Section */}
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
              {t('projects.portfolio')}
            </h2>
            <p className="text-xl text-gray-600">
              Explore our successful AI implementations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <div className="space-y-1">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('projects.dashboard')}
            </h2>
            <p className="text-xl text-gray-600">
              Track your project progress in real-time
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Planning</span>
                      <span className="text-sm font-medium text-green-600">Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Development</span>
                      <span className="text-sm font-medium text-blue-600">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Testing</span>
                      <span className="text-sm font-medium text-yellow-600">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Milestones</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Requirements Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">System Architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-700">AI Model Training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-400">Integration Testing</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Model training completed</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">API integration ready</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;