import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, Clock, Calendar, DollarSign, Download, 
  FileText, MessageSquare, TrendingUp, Award, Target,
  CreditCard, Receipt, Eye, ArrowRight, PlayCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Milestones: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState('ai-chatbot');

  const projects = [
    {
      id: 'ai-chatbot',
      name: 'Enterprise AI Chatbot',
      status: 'in-progress',
      progress: 75,
      startDate: '2024-01-15',
      expectedCompletion: '2024-03-15',
      totalValue: 45000,
      paidAmount: 33750
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision System',
      status: 'completed',
      progress: 100,
      startDate: '2023-10-01',
      expectedCompletion: '2024-01-01',
      totalValue: 75000,
      paidAmount: 75000
    }
  ];

  const milestones = {
    'ai-chatbot': [
      {
        id: 1,
        title: 'Project Planning & Requirements',
        description: 'Initial consultation, requirements gathering, and project planning',
        status: 'completed',
        completedDate: '2024-01-20',
        payment: 9000,
        deliverables: ['Requirements Document', 'Project Timeline', 'Technical Specifications']
      },
      {
        id: 2,
        title: 'System Architecture & Design',
        description: 'Technical architecture design and system blueprint creation',
        status: 'completed',
        completedDate: '2024-02-05',
        payment: 11250,
        deliverables: ['System Architecture', 'Database Design', 'API Specifications']
      },
      {
        id: 3,
        title: 'Core AI Development',
        description: 'Development of core AI models and natural language processing',
        status: 'completed',
        completedDate: '2024-02-25',
        payment: 13500,
        deliverables: ['AI Model', 'NLP Engine', 'Training Data']
      },
      {
        id: 4,
        title: 'Integration & Testing',
        description: 'System integration, testing, and quality assurance',
        status: 'in-progress',
        expectedDate: '2024-03-10',
        payment: 9000,
        deliverables: ['Integrated System', 'Test Reports', 'Performance Metrics']
      },
      {
        id: 5,
        title: 'Deployment & Training',
        description: 'Production deployment and team training',
        status: 'upcoming',
        expectedDate: '2024-03-15',
        payment: 2250,
        deliverables: ['Production System', 'User Training', 'Documentation']
      }
    ],
    'computer-vision': [
      {
        id: 1,
        title: 'Project Initiation',
        description: 'Project kickoff and initial setup',
        status: 'completed',
        completedDate: '2023-10-05',
        payment: 15000,
        deliverables: ['Project Charter', 'Team Setup', 'Environment Setup']
      },
      {
        id: 2,
        title: 'Data Collection & Preparation',
        description: 'Image data collection and preprocessing',
        status: 'completed',
        completedDate: '2023-10-25',
        payment: 18750,
        deliverables: ['Training Dataset', 'Data Pipeline', 'Preprocessing Tools']
      },
      {
        id: 3,
        title: 'Model Development',
        description: 'Computer vision model development and training',
        status: 'completed',
        completedDate: '2023-11-20',
        payment: 22500,
        deliverables: ['CV Model', 'Training Results', 'Model Optimization']
      },
      {
        id: 4,
        title: 'System Integration',
        description: 'Integration with existing manufacturing systems',
        status: 'completed',
        completedDate: '2023-12-15',
        payment: 11250,
        deliverables: ['Integrated System', 'API Integration', 'Real-time Processing']
      },
      {
        id: 5,
        title: 'Deployment & Support',
        description: 'Production deployment and ongoing support setup',
        status: 'completed',
        completedDate: '2024-01-01',
        payment: 7500,
        deliverables: ['Production System', 'Support Documentation', 'Monitoring Setup']
      }
    ]
  };

  const consultations = [
    {
      id: 1,
      date: '2024-01-10',
      type: 'Initial Consultation',
      duration: '2 hours',
      participants: ['Dr. Sarah Chen', 'Marcus Rodriguez', 'Client Team'],
      summary: 'Discussed project requirements, timeline, and technical approach for the AI chatbot implementation.',
      recording: '#',
      notes: '#'
    },
    {
      id: 2,
      date: '2024-01-25',
      type: 'Technical Review',
      duration: '1.5 hours',
      participants: ['Marcus Rodriguez', 'Development Team', 'Client CTO'],
      summary: 'Technical architecture review and approval of system design specifications.',
      recording: '#',
      notes: '#'
    },
    {
      id: 3,
      date: '2024-02-15',
      type: 'Progress Update',
      duration: '1 hour',
      participants: ['Project Manager', 'Client Team'],
      summary: 'Mid-project progress review and demonstration of core AI functionality.',
      recording: '#',
      notes: '#'
    }
  ];

  const currentProject = projects.find(p => p.id === selectedProject);
  const currentMilestones = milestones[selectedProject as keyof typeof milestones] || [];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/20';
      case 'in-progress': return 'text-gold-accent bg-gold-accent/20';
      case 'upcoming': return 'text-silver bg-silver/20';
      default: return 'text-silver bg-silver/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in-progress': return Clock;
      case 'upcoming': return Calendar;
      default: return Clock;
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-primary-black">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${25 + Math.random() * 35}px`,
                height: `${25 + Math.random() * 35}px`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${18 + Math.random() * 8}s`
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
                <Target className="w-8 h-8 text-black" />
              </div>
            </div>
            <h1 className="text-6xl font-bold text-platinum mb-6 bg-gradient-to-r from-platinum to-gold-accent bg-clip-text text-transparent">
              {t('milestones.title')}
            </h1>
            <p className="text-xl text-silver max-w-3xl mx-auto leading-relaxed">
              {t('milestones.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Selection */}
      <section className="py-12 bg-secondary-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {projects.map((project) => (
              <motion.button
                key={project.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProject(project.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedProject === project.id
                    ? 'bg-gold-accent text-black'
                    : 'bg-secondary-black text-silver hover:bg-gold-accent/20 hover:text-gold-accent border border-gold-accent/20'
                }`}
              >
                {project.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      {currentProject && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card-premium mb-12"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <h2 className="text-3xl font-bold text-platinum">{currentProject.name}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(currentProject.status)}`}>
                      {currentProject.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-silver text-sm mb-1">Start Date</p>
                      <p className="text-platinum font-medium">{new Date(currentProject.startDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-silver text-sm mb-1">Expected Completion</p>
                      <p className="text-platinum font-medium">{new Date(currentProject.expectedCompletion).toLocaleDateString()}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-silver text-sm">Overall Progress</span>
                      <span className="text-gold-accent font-bold">{currentProject.progress}%</span>
                    </div>
                    <div className="w-full bg-accent-black rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentProject.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-gradient-to-r from-gold-accent to-yellow-400 h-3 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Financial Overview */}
                <div className="bg-accent-black rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-platinum mb-4 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-gold-accent" />
                    Financial Overview
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-silver text-sm">Total Project Value</p>
                      <p className="text-2xl font-bold text-platinum">${currentProject.totalValue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-silver text-sm">Amount Paid</p>
                      <p className="text-xl font-bold text-green-400">${currentProject.paidAmount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-silver text-sm">Remaining</p>
                      <p className="text-xl font-bold text-gold-accent">${(currentProject.totalValue - currentProject.paidAmount).toLocaleString()}</p>
                    </div>
                    <div className="pt-4 border-t border-gold-accent/20">
                      <div className="w-full bg-secondary-black rounded-full h-2">
                        <div
                          className="bg-green-400 h-2 rounded-full"
                          style={{ width: `${(currentProject.paidAmount / currentProject.totalValue) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-silver mt-1">
                        {Math.round((currentProject.paidAmount / currentProject.totalValue) * 100)}% paid
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Milestones */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Milestones Timeline */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="card-premium"
                >
                  <h3 className="text-2xl font-bold text-platinum mb-6 flex items-center">
                    <Target className="w-6 h-6 mr-3 text-gold-accent" />
                    Project Milestones
                  </h3>

                  <div className="space-y-6">
                    {currentMilestones.map((milestone, index) => {
                      const StatusIcon = getStatusIcon(milestone.status);
                      return (
                        <motion.div
                          key={milestone.id}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="relative"
                        >
                          {/* Timeline Line */}
                          {index < currentMilestones.length - 1 && (
                            <div className="absolute left-6 top-12 w-0.5 h-16 bg-gold-accent/30" />
                          )}

                          <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(milestone.status)}`}>
                              <StatusIcon className="w-6 h-6" />
                            </div>

                            <div className="flex-1 bg-accent-black rounded-xl p-4">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-lg font-semibold text-platinum">{milestone.title}</h4>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(milestone.status)}`}>
                                  {milestone.status}
                                </span>
                              </div>
                              
                              <p className="text-silver text-sm mb-3">{milestone.description}</p>
                              
                              <div className="grid md:grid-cols-2 gap-4 mb-3">
                                <div>
                                  <p className="text-silver text-xs">
                                    {milestone.status === 'completed' ? 'Completed' : 'Expected'}
                                  </p>
                                  <p className="text-platinum font-medium">
                                    {milestone.completedDate 
                                      ? new Date(milestone.completedDate).toLocaleDateString()
                                      : milestone.expectedDate 
                                        ? new Date(milestone.expectedDate).toLocaleDateString()
                                        : 'TBD'
                                    }
                                  </p>
                                </div>
                                <div>
                                  <p className="text-silver text-xs">Payment</p>
                                  <p className="text-gold-accent font-bold">${milestone.payment.toLocaleString()}</p>
                                </div>
                              </div>

                              <div>
                                <p className="text-silver text-xs mb-2">Deliverables</p>
                                <div className="flex flex-wrap gap-2">
                                  {milestone.deliverables.map((deliverable) => (
                                    <span
                                      key={deliverable}
                                      className="px-2 py-1 bg-secondary-black text-gold-accent text-xs rounded-full"
                                    >
                                      {deliverable}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {milestone.status === 'completed' && (
                                <div className="flex space-x-2 mt-3">
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center space-x-1 px-3 py-1 bg-gold-accent text-black text-xs rounded-full font-medium"
                                  >
                                    <Download className="w-3 h-3" />
                                    <span>Invoice</span>
                                  </motion.button>
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center space-x-1 px-3 py-1 bg-green-400/20 text-green-400 text-xs rounded-full font-medium"
                                  >
                                    <Eye className="w-3 h-3" />
                                    <span>Proof</span>
                                  </motion.button>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Payment History */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="card-premium"
                >
                  <h3 className="text-xl font-bold text-platinum mb-4 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-gold-accent" />
                    {t('milestones.payments')}
                  </h3>
                  
                  <div className="space-y-3">
                    {currentMilestones
                      .filter(m => m.status === 'completed')
                      .map((milestone) => (
                        <div key={milestone.id} className="flex justify-between items-center p-3 bg-accent-black rounded-lg">
                          <div>
                            <p className="text-platinum text-sm font-medium">Milestone {milestone.id}</p>
                            <p className="text-silver text-xs">{milestone.completedDate}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-green-400 font-bold">${milestone.payment.toLocaleString()}</p>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              className="text-gold-accent text-xs hover:underline"
                            >
                              <Receipt className="w-3 h-3 inline mr-1" />
                              Receipt
                            </motion.button>
                          </div>
                        </div>
                      ))}
                  </div>
                </motion.div>

                {/* Consultation History */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="card-premium"
                >
                  <h3 className="text-xl font-bold text-platinum mb-4 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-gold-accent" />
                    {t('milestones.consultations')}
                  </h3>
                  
                  <div className="space-y-3">
                    {consultations.map((consultation) => (
                      <div key={consultation.id} className="p-3 bg-accent-black rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-platinum text-sm font-medium">{consultation.type}</h4>
                          <span className="text-silver text-xs">{consultation.duration}</span>
                        </div>
                        <p className="text-silver text-xs mb-2">{new Date(consultation.date).toLocaleDateString()}</p>
                        <p className="text-silver text-xs mb-3 line-clamp-2">{consultation.summary}</p>
                        <div className="flex space-x-2">
                          <motion.a
                            href={consultation.recording}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-1 text-gold-accent text-xs hover:underline"
                          >
                            <PlayCircle className="w-3 h-3" />
                            <span>Recording</span>
                          </motion.a>
                          <motion.a
                            href={consultation.notes}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-1 text-gold-accent text-xs hover:underline"
                          >
                            <FileText className="w-3 h-3" />
                            <span>Notes</span>
                          </motion.a>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Next Steps */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="card-premium"
                >
                  <h3 className="text-xl font-bold text-platinum mb-4 flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2 text-gold-accent" />
                    {t('milestones.nextMilestone')}
                  </h3>
                  
                  {currentMilestones.find(m => m.status === 'in-progress' || m.status === 'upcoming') && (
                    <div className="p-4 bg-gold-accent/10 border border-gold-accent/20 rounded-lg">
                      <h4 className="text-gold-accent font-semibold mb-2">
                        {currentMilestones.find(m => m.status === 'in-progress' || m.status === 'upcoming')?.title}
                      </h4>
                      <p className="text-silver text-sm mb-3">
                        Expected: {currentMilestones.find(m => m.status === 'in-progress' || m.status === 'upcoming')?.expectedDate}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full btn-premium text-sm py-2"
                      >
                        Schedule Review Call
                      </motion.button>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Milestones;