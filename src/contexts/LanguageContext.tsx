import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translation {
  [key: string]: string | Translation;
}

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: { [key: string]: Translation } = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      team: 'Team',
      testimonials: 'Testimonials',
      projects: 'Project Builder',
      contact: 'Contact',
      voicebot: 'Voice Bot AI'
    },
    home: {
      hero: {
        title: 'Revolutionary AI Solutions for Tomorrow\'s World',
        subtitle: 'Transforming businesses with cutting-edge Artificial Intelligence, Machine Learning, and Advanced Technology Solutions',
        startProject: 'Start Your Project',
        getProposal: 'Get a Proposal'
      },
      stats: {
        projects: 'Projects Completed',
        clients: 'Happy Clients',
        countries: 'Countries Served',
        experience: 'Years Experience'
      },
      expertise: {
        title: 'Our Expertise',
        ai: 'Artificial Intelligence',
        aiDesc: 'Advanced AI solutions tailored to your business needs',
        ml: 'Machine Learning',
        mlDesc: 'Predictive models and intelligent automation systems',
        nlp: 'Natural Language Processing',
        nlpDesc: 'Language understanding and conversational AI platforms',
        llm: 'Large Language Models',
        llmDesc: 'Custom LLM integration and fine-tuning services'
      }
    },
    about: {
      title: 'About Nexariza',
      content: 'Leading the future of AI innovation with cutting-edge solutions',
      mission: 'Our Mission',
      missionText: 'To democratize AI technology and empower businesses worldwide with intelligent solutions',
      values: 'Our Values',
      philosophy: 'Our Technology Philosophy',
      team: 'Meet Our Team',
      ready: 'Ready to Work With Us?'
    },
    services: {
      title: 'Our Services',
      aiServices: 'AI Services',
      chatbots: 'AI Chatbots',
      voiceAI: 'Voice AI',
      computerVision: 'Computer Vision',
      webApps: 'AI-Powered Web Apps',
      predictive: 'Predictive Analytics',
      medical: 'Medical AI',
      document: 'Document Processing AI',
      getQuote: 'Get Quote',
      learnMore: 'Learn More'
    },
    contact: {
      title: 'Contact Us',
      getInTouch: 'Get In Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      phone: 'Phone',
      company: 'Company',
      send: 'Send Message',
      hours: 'Business Hours',
      address: 'Office Address',
      why: 'Why Choose Nexariza?'
    },
    team: {
      title: 'Our Team',
      subtitle: 'Meet the brilliant minds driving AI innovation',
      ceo: 'CEO & Co-founder',
      cto: 'CTO & Co-founder',
      leadership: 'Leadership Team',
      experts: 'AI Experts',
      developers: 'Development Team'
    },
    testimonials: {
      title: 'Client Testimonials',
      subtitle: 'What our clients say about working with Nexariza AI',
      rating: 'Rating',
      verified: 'Verified Client'
    },
    projects: {
      title: 'Project Builder',
      subtitle: 'Build your custom AI solution in 5 simple steps',
      step1: 'Select Project Type',
      step2: 'Choose Complexity',
      step3: 'Set Timeline',
      step4: 'Define Features',
      step5: 'Get Pricing',
      portfolio: 'Our Portfolio',
      dashboard: 'Project Dashboard'
    },
    voicebot: {
      title: 'Voice Bot AI',
      subtitle: 'Experience the future of conversational AI',
      startTalking: 'Start Talking',
      listening: 'Listening...',
      processing: 'Processing...',
      quickQuestions: 'Quick Questions'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Dienstleistungen',
      team: 'Team',
      testimonials: 'Referenzen',
      projects: 'Projekt Builder',
      contact: 'Kontakt',
      voicebot: 'Voice Bot AI'
    },
    home: {
      hero: {
        title: 'Revolutionäre KI-Lösungen für die Welt von morgen',
        subtitle: 'Transformation von Unternehmen mit modernster Künstlicher Intelligenz und fortschrittlichen Technologielösungen',
        startProject: 'Projekt starten',
        getProposal: 'Angebot erhalten'
      },
      stats: {
        projects: 'Abgeschlossene Projekte',
        clients: 'Zufriedene Kunden',
        countries: 'Bediente Länder',
        experience: 'Jahre Erfahrung'
      },
      expertise: {
        title: 'Unsere Expertise',
        ai: 'Künstliche Intelligenz',
        aiDesc: 'Fortschrittliche KI-Lösungen für Ihre Geschäftsanforderungen',
        ml: 'Maschinelles Lernen',
        mlDesc: 'Prädiktive Modelle und intelligente Automatisierungssysteme',
        nlp: 'Natürliche Sprachverarbeitung',
        nlpDesc: 'Sprachverständnis und konversationelle KI-Plattformen',
        llm: 'Große Sprachmodelle',
        llmDesc: 'Benutzerdefinierte LLM-Integration und Feinabstimmung'
      }
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      team: 'Équipe',
      testimonials: 'Témoignages',
      projects: 'Constructeur de Projet',
      contact: 'Contact',
      voicebot: 'Voice Bot AI'
    },
    home: {
      hero: {
        title: 'Solutions IA Révolutionnaires pour le Monde de Demain',
        subtitle: 'Transformer les entreprises avec l\'Intelligence Artificielle de pointe et des Solutions Technologiques Avancées',
        startProject: 'Démarrer Votre Projet',
        getProposal: 'Obtenir une Proposition'
      }
    }
  },
  it: {
    nav: {
      home: 'Home',
      about: 'Chi Siamo',
      services: 'Servizi',
      team: 'Team',
      testimonials: 'Testimonianze',
      projects: 'Project Builder',
      contact: 'Contatti',
      voicebot: 'Voice Bot AI'
    }
  },
  sv: {
    nav: {
      home: 'Hem',
      about: 'Om Oss',
      services: 'Tjänster',
      team: 'Team',
      testimonials: 'Vittnesmål',
      projects: 'Projektbyggare',
      contact: 'Kontakt',
      voicebot: 'Voice Bot AI'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      about: '会社概要',
      services: 'サービス',
      team: 'チーム',
      testimonials: 'お客様の声',
      projects: 'プロジェクトビルダー',
      contact: 'お問い合わせ',
      voicebot: 'Voice Bot AI'
    }
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      services: '服务',
      team: '团队',
      testimonials: '客户推荐',
      projects: '项目构建器',
      contact: '联系我们',
      voicebot: 'Voice Bot AI'
    }
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const getNestedTranslation = (obj: Translation, path: string[]): string => {
    let current = obj;
    for (const key of path) {
      if (typeof current === 'object' && current[key]) {
        current = current[key] as Translation;
      } else {
        return path.join('.');
      }
    }
    return typeof current === 'string' ? current : path.join('.');
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    return getNestedTranslation(translations[language] || translations.en, keys);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};