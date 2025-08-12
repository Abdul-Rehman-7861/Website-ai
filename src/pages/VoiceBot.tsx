import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, VolumeX, MessageSquare, Play, Pause, RotateCcw, Settings, Zap, Globe, Brain, Headphones, AudioWaveform as Waveform } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VoiceBot: React.FC = () => {
  const { t, language } = useLanguage();
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [conversation, setConversation] = useState<Array<{type: 'user' | 'bot', text: string, timestamp: Date}>>([]);
  const [volume, setVolume] = useState(0.8);
  const [selectedVoice, setSelectedVoice] = useState('female');
  const audioRef = useRef<HTMLAudioElement>(null);

  const quickQuestions = [
    "What AI services do you offer?",
    "How much does an AI chatbot cost?",
    "What's your development timeline?",
    "Do you provide ongoing support?",
    "Can you integrate with our existing systems?",
    "What industries do you specialize in?"
  ];

  const voiceOptions = [
    { id: 'female', name: 'Sarah (Female)', accent: 'US English' },
    { id: 'male', name: 'David (Male)', accent: 'US English' },
    { id: 'british', name: 'Emma (Female)', accent: 'British English' },
    { id: 'australian', name: 'James (Male)', accent: 'Australian English' }
  ];

  const startListening = () => {
    setIsListening(true);
    setTranscript('');
    
    // Simulate speech recognition
    setTimeout(() => {
      const sampleQuestions = [
        "What AI services do you provide?",
        "How can AI help my business?",
        "What's the cost of developing a chatbot?",
        "Do you offer computer vision solutions?"
      ];
      const randomQuestion = sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];
      setTranscript(randomQuestion);
      setIsListening(false);
      processQuery(randomQuestion);
    }, 3000);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  const processQuery = async (query: string) => {
    setIsProcessing(true);
    
    // Add user message to conversation
    setConversation(prev => [...prev, { type: 'user', text: query, timestamp: new Date() }]);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate response based on query
    let botResponse = '';
    if (query.toLowerCase().includes('services')) {
      botResponse = "We offer comprehensive AI services including chatbots, computer vision, predictive analytics, and custom AI solutions. Our team specializes in machine learning, natural language processing, and deep learning technologies.";
    } else if (query.toLowerCase().includes('cost') || query.toLowerCase().includes('price')) {
      botResponse = "Our AI solutions start from $5,000 for basic chatbots and can go up to $50,000+ for enterprise solutions. The exact cost depends on complexity, features, and integration requirements. We offer free consultations to provide accurate estimates.";
    } else if (query.toLowerCase().includes('timeline') || query.toLowerCase().includes('time')) {
      botResponse = "Development timelines vary from 2-4 weeks for simple projects to 3-6 months for complex enterprise solutions. We provide detailed project timelines during our initial consultation phase.";
    } else {
      botResponse = "That's a great question! At Nexariza AI, we're committed to providing cutting-edge artificial intelligence solutions. I'd be happy to connect you with our specialists who can provide detailed information about your specific needs.";
    }
    
    setResponse(botResponse);
    setConversation(prev => [...prev, { type: 'bot', text: botResponse, timestamp: new Date() }]);
    setIsProcessing(false);
    
    // Simulate text-to-speech
    speakResponse(botResponse);
  };

  const speakResponse = (text: string) => {
    setIsSpeaking(true);
    
    // Simulate speech duration based on text length
    const duration = Math.max(3000, text.length * 50);
    
    setTimeout(() => {
      setIsSpeaking(false);
    }, duration);
  };

  const handleQuickQuestion = (question: string) => {
    setTranscript(question);
    processQuery(question);
  };

  const resetConversation = () => {
    setConversation([]);
    setTranscript('');
    setResponse('');
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Headphones className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('voicebot.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('voicebot.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Voice Interface */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Voice Control */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 mb-8"
          >
            <div className="text-center mb-8">
              {/* Voice Visualizer */}
              <div className="relative mb-8">
                <motion.div
                  animate={isListening || isSpeaking ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 1, repeat: isListening || isSpeaking ? Infinity : 0 }}
                  className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center ${
                    isListening 
                      ? 'bg-gradient-to-r from-red-500 to-pink-500' 
                      : isSpeaking
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                      : isProcessing
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500'
                  }`}
                >
                  {isListening ? (
                    <Waveform className="w-16 h-16 text-white animate-pulse" />
                  ) : isSpeaking ? (
                    <Volume2 className="w-16 h-16 text-white" />
                  ) : isProcessing ? (
                    <Brain className="w-16 h-16 text-white animate-spin" />
                  ) : (
                    <Mic className="w-16 h-16 text-white" />
                  )}
                </motion.div>
                
                {/* Status Indicator */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    isListening 
                      ? 'bg-red-100 text-red-800' 
                      : isSpeaking
                      ? 'bg-green-100 text-green-800'
                      : isProcessing
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {isListening 
                      ? t('voicebot.listening')
                      : isSpeaking
                      ? 'Speaking...'
                      : isProcessing
                      ? t('voicebot.processing')
                      : 'Ready to listen'
                    }
                  </span>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={isListening ? stopListening : startListening}
                  disabled={isProcessing || isSpeaking}
                  className={`p-4 rounded-full font-medium transition-all duration-300 ${
                    isListening
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetConversation}
                  className="p-4 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300"
                >
                  <RotateCcw className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Current Transcript */}
              <AnimatePresence>
                {transcript && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-blue-50 rounded-2xl p-6 mb-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">You said:</h3>
                    <p className="text-gray-700">{transcript}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bot Response */}
              <AnimatePresence>
                {response && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Nexariza AI:</h3>
                    <p className="text-gray-700">{response}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Quick Questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t('voicebot.quickQuestions')}
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {quickQuestions.map((question, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleQuickQuestion(question)}
                  disabled={isListening || isProcessing || isSpeaking}
                  className="text-left p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MessageSquare className="w-4 h-4 text-blue-600 mb-2" />
                  <p className="text-sm text-gray-700">{question}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Voice Settings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              <Settings className="w-5 h-5 inline mr-2" />
              Voice Settings
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Voice Selection
                </label>
                <select
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {voiceOptions.map((voice) => (
                    <option key={voice.id} value={voice.id}>
                      {voice.name} - {voice.accent}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Volume: {Math.round(volume * 100)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Conversation History */}
          {conversation.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Conversation History
              </h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {conversation.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-blue-200' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
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
              Advanced Voice AI Features
            </h2>
            <p className="text-xl text-gray-600">
              Experience the future of conversational AI technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mic,
                title: 'Real-time Recognition',
                description: 'Advanced speech-to-text with 99% accuracy'
              },
              {
                icon: Globe,
                title: 'Multilingual Support',
                description: 'Supports 50+ languages and dialects'
              },
              {
                icon: Brain,
                title: 'Context Understanding',
                description: 'AI that remembers and learns from conversations'
              },
              {
                icon: Zap,
                title: 'Instant Responses',
                description: 'Lightning-fast processing and response times'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceBot;