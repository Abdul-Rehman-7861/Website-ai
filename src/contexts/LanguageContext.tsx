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
      portfolio: 'Our Portfolio',
      milestones: 'Milestones',
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
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'Discover our award-winning AI solutions and success stories',
      featured: 'Featured Projects',
      categories: 'Categories',
      all: 'All Projects',
      ai: 'AI Solutions',
      ml: 'Machine Learning',
      nlp: 'Natural Language Processing',
      cv: 'Computer Vision',
      viewProject: 'View Project',
      liveDemo: 'Live Demo',
      caseStudy: 'Case Study'
    },
    milestones: {
      title: 'Project Milestones',
      subtitle: 'Track your project progress and payment history',
      currentProject: 'Current Project',
      progress: 'Progress',
      payments: 'Payment History',
      consultations: 'Consultation History',
      nextMilestone: 'Next Milestone',
      completed: 'Completed',
      inProgress: 'In Progress',
      upcoming: 'Upcoming',
      paymentProof: 'Payment Proof',
      downloadInvoice: 'Download Invoice'
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
  ja: {
    nav: {
      home: 'ホーム',
      about: '会社概要',
      services: 'サービス',
      team: 'チーム',
      testimonials: 'お客様の声',
      projects: 'プロジェクトビルダー',
      portfolio: 'ポートフォリオ',
      milestones: 'マイルストーン',
      contact: 'お問い合わせ',
      voicebot: 'ボイスボットAI'
    },
    home: {
      hero: {
        title: '明日の世界のための革新的なAIソリューション',
        subtitle: '最先端の人工知能、機械学習、高度な技術ソリューションでビジネスを変革',
        startProject: 'プロジェクトを開始',
        getProposal: '提案を取得'
      },
      stats: {
        projects: '完了プロジェクト',
        clients: '満足したクライアント',
        countries: 'サービス提供国',
        experience: '年の経験'
      },
      expertise: {
        title: '私たちの専門知識',
        ai: '人工知能',
        aiDesc: 'お客様のビジネスニーズに合わせた高度なAIソリューション',
        ml: '機械学習',
        mlDesc: '予測モデルとインテリジェント自動化システム',
        nlp: '自然言語処理',
        nlpDesc: '言語理解と会話型AIプラットフォーム',
        llm: '大規模言語モデル',
        llmDesc: 'カスタムLLM統合と微調整サービス'
      }
    },
    about: {
      title: 'Nexarizaについて',
      content: '最先端のソリューションでAIイノベーションの未来をリード',
      mission: '私たちの使命',
      missionText: 'AI技術を民主化し、世界中の企業にインテリジェントなソリューションを提供する',
      values: '私たちの価値観',
      philosophy: '私たちの技術哲学',
      team: 'チームに会う',
      ready: '私たちと一緒に働く準備はできていますか？'
    },
    services: {
      title: '私たちのサービス',
      aiServices: 'AIサービス',
      chatbots: 'AIチャットボット',
      voiceAI: 'ボイスAI',
      computerVision: 'コンピュータビジョン',
      webApps: 'AI搭載ウェブアプリ',
      predictive: '予測分析',
      medical: '医療AI',
      document: '文書処理AI',
      getQuote: '見積もりを取得',
      learnMore: '詳細を学ぶ'
    },
    contact: {
      title: 'お問い合わせ',
      getInTouch: 'お気軽にお問い合わせください',
      name: '名前',
      email: 'メール',
      message: 'メッセージ',
      phone: '電話',
      company: '会社',
      send: 'メッセージを送信',
      hours: '営業時間',
      address: 'オフィス住所',
      why: 'なぜNexarizaを選ぶのか？'
    },
    team: {
      title: '私たちのチーム',
      subtitle: 'AIイノベーションを推進する優秀な人材に会う',
      ceo: 'CEO兼共同創設者',
      cto: 'CTO兼共同創設者',
      leadership: 'リーダーシップチーム',
      experts: 'AI専門家',
      developers: '開発チーム'
    },
    testimonials: {
      title: 'クライアントの声',
      subtitle: 'Nexariza AIとの協力についてクライアントが語ること',
      rating: '評価',
      verified: '認証済みクライアント'
    },
    projects: {
      title: 'プロジェクトビルダー',
      subtitle: '5つの簡単なステップでカスタムAIソリューションを構築',
      step1: 'プロジェクトタイプを選択',
      step2: '複雑さを選択',
      step3: 'タイムラインを設定',
      step4: '機能を定義',
      step5: '価格を取得',
      portfolio: '私たちのポートフォリオ',
      dashboard: 'プロジェクトダッシュボード'
    },
    portfolio: {
      title: '私たちのポートフォリオ',
      subtitle: '受賞歴のあるAIソリューションと成功事例を発見',
      featured: '注目プロジェクト',
      categories: 'カテゴリー',
      all: 'すべてのプロジェクト',
      ai: 'AIソリューション',
      ml: '機械学習',
      nlp: '自然言語処理',
      cv: 'コンピュータビジョン',
      viewProject: 'プロジェクトを見る',
      liveDemo: 'ライブデモ',
      caseStudy: 'ケーススタディ'
    },
    milestones: {
      title: 'プロジェクトマイルストーン',
      subtitle: 'プロジェクトの進捗と支払い履歴を追跡',
      currentProject: '現在のプロジェクト',
      progress: '進捗',
      payments: '支払い履歴',
      consultations: '相談履歴',
      nextMilestone: '次のマイルストーン',
      completed: '完了',
      inProgress: '進行中',
      upcoming: '今後',
      paymentProof: '支払い証明',
      downloadInvoice: '請求書をダウンロード'
    },
    voicebot: {
      title: 'ボイスボットAI',
      subtitle: '会話型AIの未来を体験',
      startTalking: '話し始める',
      listening: '聞いています...',
      processing: '処理中...',
      quickQuestions: 'クイック質問'
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
      portfolio: 'Il Nostro Portfolio',
      milestones: 'Milestone',
      contact: 'Contatti',
      voicebot: 'Voice Bot AI'
    },
    home: {
      hero: {
        title: 'Soluzioni AI Rivoluzionarie per il Mondo di Domani',
        subtitle: 'Trasformare le aziende con Intelligenza Artificiale all\'avanguardia, Machine Learning e Soluzioni Tecnologiche Avanzate',
        startProject: 'Inizia il Tuo Progetto',
        getProposal: 'Ottieni una Proposta'
      },
      stats: {
        projects: 'Progetti Completati',
        clients: 'Clienti Soddisfatti',
        countries: 'Paesi Serviti',
        experience: 'Anni di Esperienza'
      },
      expertise: {
        title: 'La Nostra Expertise',
        ai: 'Intelligenza Artificiale',
        aiDesc: 'Soluzioni AI avanzate su misura per le tue esigenze aziendali',
        ml: 'Machine Learning',
        mlDesc: 'Modelli predittivi e sistemi di automazione intelligente',
        nlp: 'Elaborazione del Linguaggio Naturale',
        nlpDesc: 'Comprensione del linguaggio e piattaforme AI conversazionali',
        llm: 'Modelli di Linguaggio di Grandi Dimensioni',
        llmDesc: 'Integrazione LLM personalizzata e servizi di fine-tuning'
      }
    },
    about: {
      title: 'Su Nexariza',
      content: 'Guidando il futuro dell\'innovazione AI con soluzioni all\'avanguardia',
      mission: 'La Nostra Missione',
      missionText: 'Democratizzare la tecnologia AI e potenziare le aziende di tutto il mondo con soluzioni intelligenti',
      values: 'I Nostri Valori',
      philosophy: 'La Nostra Filosofia Tecnologica',
      team: 'Incontra il Nostro Team',
      ready: 'Pronto a Lavorare con Noi?'
    },
    services: {
      title: 'I Nostri Servizi',
      aiServices: 'Servizi AI',
      chatbots: 'Chatbot AI',
      voiceAI: 'Voice AI',
      computerVision: 'Computer Vision',
      webApps: 'App Web Alimentate da AI',
      predictive: 'Analisi Predittiva',
      medical: 'AI Medica',
      document: 'AI per Elaborazione Documenti',
      getQuote: 'Ottieni Preventivo',
      learnMore: 'Scopri di Più'
    },
    contact: {
      title: 'Contattaci',
      getInTouch: 'Mettiti in Contatto',
      name: 'Nome',
      email: 'Email',
      message: 'Messaggio',
      phone: 'Telefono',
      company: 'Azienda',
      send: 'Invia Messaggio',
      hours: 'Orari di Lavoro',
      address: 'Indirizzo Ufficio',
      why: 'Perché Scegliere Nexariza?'
    },
    team: {
      title: 'Il Nostro Team',
      subtitle: 'Incontra le menti brillanti che guidano l\'innovazione AI',
      ceo: 'CEO e Co-fondatore',
      cto: 'CTO e Co-fondatore',
      leadership: 'Team di Leadership',
      experts: 'Esperti AI',
      developers: 'Team di Sviluppo'
    },
    testimonials: {
      title: 'Testimonianze dei Clienti',
      subtitle: 'Cosa dicono i nostri clienti del lavoro con Nexariza AI',
      rating: 'Valutazione',
      verified: 'Cliente Verificato'
    },
    projects: {
      title: 'Project Builder',
      subtitle: 'Costruisci la tua soluzione AI personalizzata in 5 semplici passaggi',
      step1: 'Seleziona Tipo di Progetto',
      step2: 'Scegli Complessità',
      step3: 'Imposta Timeline',
      step4: 'Definisci Funzionalità',
      step5: 'Ottieni Prezzi',
      portfolio: 'Il Nostro Portfolio',
      dashboard: 'Dashboard Progetto'
    },
    portfolio: {
      title: 'Il Nostro Portfolio',
      subtitle: 'Scopri le nostre soluzioni AI premiate e storie di successo',
      featured: 'Progetti in Evidenza',
      categories: 'Categorie',
      all: 'Tutti i Progetti',
      ai: 'Soluzioni AI',
      ml: 'Machine Learning',
      nlp: 'Elaborazione Linguaggio Naturale',
      cv: 'Computer Vision',
      viewProject: 'Visualizza Progetto',
      liveDemo: 'Demo Live',
      caseStudy: 'Caso di Studio'
    },
    milestones: {
      title: 'Milestone del Progetto',
      subtitle: 'Traccia il progresso del progetto e la cronologia dei pagamenti',
      currentProject: 'Progetto Corrente',
      progress: 'Progresso',
      payments: 'Cronologia Pagamenti',
      consultations: 'Cronologia Consultazioni',
      nextMilestone: 'Prossima Milestone',
      completed: 'Completato',
      inProgress: 'In Corso',
      upcoming: 'Prossimo',
      paymentProof: 'Prova di Pagamento',
      downloadInvoice: 'Scarica Fattura'
    },
    voicebot: {
      title: 'Voice Bot AI',
      subtitle: 'Sperimenta il futuro dell\'AI conversazionale',
      startTalking: 'Inizia a Parlare',
      listening: 'In Ascolto...',
      processing: 'Elaborazione...',
      quickQuestions: 'Domande Rapide'
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
      portfolio: 'Notre Portfolio',
      milestones: 'Jalons',
      contact: 'Contact',
      voicebot: 'Voice Bot AI'
    },
    home: {
      hero: {
        title: 'Solutions IA Révolutionnaires pour le Monde de Demain',
        subtitle: 'Transformer les entreprises avec l\'Intelligence Artificielle de pointe, l\'Apprentissage Automatique et des Solutions Technologiques Avancées',
        startProject: 'Démarrer Votre Projet',
        getProposal: 'Obtenir une Proposition'
      },
      stats: {
        projects: 'Projets Terminés',
        clients: 'Clients Satisfaits',
        countries: 'Pays Desservis',
        experience: 'Années d\'Expérience'
      },
      expertise: {
        title: 'Notre Expertise',
        ai: 'Intelligence Artificielle',
        aiDesc: 'Solutions IA avancées adaptées à vos besoins commerciaux',
        ml: 'Apprentissage Automatique',
        mlDesc: 'Modèles prédictifs et systèmes d\'automatisation intelligents',
        nlp: 'Traitement du Langage Naturel',
        nlpDesc: 'Compréhension du langage et plateformes IA conversationnelles',
        llm: 'Grands Modèles de Langage',
        llmDesc: 'Intégration LLM personnalisée et services d\'ajustement fin'
      }
    },
    about: {
      title: 'À propos de Nexariza',
      content: 'Mener l\'avenir de l\'innovation IA avec des solutions de pointe',
      mission: 'Notre Mission',
      missionText: 'Démocratiser la technologie IA et autonomiser les entreprises du monde entier avec des solutions intelligentes',
      values: 'Nos Valeurs',
      philosophy: 'Notre Philosophie Technologique',
      team: 'Rencontrez Notre Équipe',
      ready: 'Prêt à Travailler avec Nous?'
    },
    services: {
      title: 'Nos Services',
      aiServices: 'Services IA',
      chatbots: 'Chatbots IA',
      voiceAI: 'IA Vocale',
      computerVision: 'Vision par Ordinateur',
      webApps: 'Applications Web Alimentées par IA',
      predictive: 'Analyse Prédictive',
      medical: 'IA Médicale',
      document: 'IA de Traitement de Documents',
      getQuote: 'Obtenir un Devis',
      learnMore: 'En Savoir Plus'
    },
    contact: {
      title: 'Nous Contacter',
      getInTouch: 'Entrer en Contact',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      phone: 'Téléphone',
      company: 'Entreprise',
      send: 'Envoyer le Message',
      hours: 'Heures d\'Ouverture',
      address: 'Adresse du Bureau',
      why: 'Pourquoi Choisir Nexariza?'
    },
    team: {
      title: 'Notre Équipe',
      subtitle: 'Rencontrez les esprits brillants qui conduisent l\'innovation IA',
      ceo: 'PDG et Co-fondateur',
      cto: 'CTO et Co-fondateur',
      leadership: 'Équipe de Direction',
      experts: 'Experts IA',
      developers: 'Équipe de Développement'
    },
    testimonials: {
      title: 'Témoignages Clients',
      subtitle: 'Ce que nos clients disent de travailler avec Nexariza AI',
      rating: 'Évaluation',
      verified: 'Client Vérifié'
    },
    projects: {
      title: 'Constructeur de Projet',
      subtitle: 'Construisez votre solution IA personnalisée en 5 étapes simples',
      step1: 'Sélectionner le Type de Projet',
      step2: 'Choisir la Complexité',
      step3: 'Définir le Calendrier',
      step4: 'Définir les Fonctionnalités',
      step5: 'Obtenir les Prix',
      portfolio: 'Notre Portfolio',
      dashboard: 'Tableau de Bord du Projet'
    },
    portfolio: {
      title: 'Notre Portfolio',
      subtitle: 'Découvrez nos solutions IA primées et nos histoires de succès',
      featured: 'Projets en Vedette',
      categories: 'Catégories',
      all: 'Tous les Projets',
      ai: 'Solutions IA',
      ml: 'Apprentissage Automatique',
      nlp: 'Traitement du Langage Naturel',
      cv: 'Vision par Ordinateur',
      viewProject: 'Voir le Projet',
      liveDemo: 'Démo en Direct',
      caseStudy: 'Étude de Cas'
    },
    milestones: {
      title: 'Jalons du Projet',
      subtitle: 'Suivez le progrès du projet et l\'historique des paiements',
      currentProject: 'Projet Actuel',
      progress: 'Progrès',
      payments: 'Historique des Paiements',
      consultations: 'Historique des Consultations',
      nextMilestone: 'Prochain Jalon',
      completed: 'Terminé',
      inProgress: 'En Cours',
      upcoming: 'À Venir',
      paymentProof: 'Preuve de Paiement',
      downloadInvoice: 'Télécharger la Facture'
    },
    voicebot: {
      title: 'Voice Bot AI',
      subtitle: 'Découvrez l\'avenir de l\'IA conversationnelle',
      startTalking: 'Commencer à Parler',
      listening: 'Écoute...',
      processing: 'Traitement...',
      quickQuestions: 'Questions Rapides'
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
      portfolio: 'Unser Portfolio',
      milestones: 'Meilensteine',
      contact: 'Kontakt',
      voicebot: 'Voice Bot AI'
    },
    home: {
      hero: {
        title: 'Revolutionäre KI-Lösungen für die Welt von morgen',
        subtitle: 'Transformation von Unternehmen mit modernster Künstlicher Intelligenz, Machine Learning und fortschrittlichen Technologielösungen',
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
    },
    about: {
      title: 'Über Nexariza',
      content: 'Die Zukunft der KI-Innovation mit modernsten Lösungen anführen',
      mission: 'Unsere Mission',
      missionText: 'KI-Technologie demokratisieren und Unternehmen weltweit mit intelligenten Lösungen stärken',
      values: 'Unsere Werte',
      philosophy: 'Unsere Technologie-Philosophie',
      team: 'Lernen Sie unser Team kennen',
      ready: 'Bereit, mit uns zu arbeiten?'
    },
    services: {
      title: 'Unsere Dienstleistungen',
      aiServices: 'KI-Dienstleistungen',
      chatbots: 'KI-Chatbots',
      voiceAI: 'Sprach-KI',
      computerVision: 'Computer Vision',
      webApps: 'KI-gestützte Web-Apps',
      predictive: 'Prädiktive Analytik',
      medical: 'Medizinische KI',
      document: 'Dokumentenverarbeitungs-KI',
      getQuote: 'Angebot erhalten',
      learnMore: 'Mehr erfahren'
    },
    contact: {
      title: 'Kontakt',
      getInTouch: 'Kontakt aufnehmen',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      phone: 'Telefon',
      company: 'Unternehmen',
      send: 'Nachricht senden',
      hours: 'Geschäftszeiten',
      address: 'Büroadresse',
      why: 'Warum Nexariza wählen?'
    },
    team: {
      title: 'Unser Team',
      subtitle: 'Lernen Sie die brillanten Köpfe kennen, die KI-Innovation vorantreiben',
      ceo: 'CEO und Mitgründer',
      cto: 'CTO und Mitgründer',
      leadership: 'Führungsteam',
      experts: 'KI-Experten',
      developers: 'Entwicklungsteam'
    },
    testimonials: {
      title: 'Kundenstimmen',
      subtitle: 'Was unsere Kunden über die Zusammenarbeit mit Nexariza AI sagen',
      rating: 'Bewertung',
      verified: 'Verifizierter Kunde'
    },
    projects: {
      title: 'Projekt Builder',
      subtitle: 'Erstellen Sie Ihre maßgeschneiderte KI-Lösung in 5 einfachen Schritten',
      step1: 'Projekttyp auswählen',
      step2: 'Komplexität wählen',
      step3: 'Zeitplan festlegen',
      step4: 'Funktionen definieren',
      step5: 'Preise erhalten',
      portfolio: 'Unser Portfolio',
      dashboard: 'Projekt-Dashboard'
    },
    portfolio: {
      title: 'Unser Portfolio',
      subtitle: 'Entdecken Sie unsere preisgekrönten KI-Lösungen und Erfolgsgeschichten',
      featured: 'Ausgewählte Projekte',
      categories: 'Kategorien',
      all: 'Alle Projekte',
      ai: 'KI-Lösungen',
      ml: 'Maschinelles Lernen',
      nlp: 'Natürliche Sprachverarbeitung',
      cv: 'Computer Vision',
      viewProject: 'Projekt ansehen',
      liveDemo: 'Live-Demo',
      caseStudy: 'Fallstudie'
    },
    milestones: {
      title: 'Projekt-Meilensteine',
      subtitle: 'Verfolgen Sie Projektfortschritt und Zahlungshistorie',
      currentProject: 'Aktuelles Projekt',
      progress: 'Fortschritt',
      payments: 'Zahlungshistorie',
      consultations: 'Beratungshistorie',
      nextMilestone: 'Nächster Meilenstein',
      completed: 'Abgeschlossen',
      inProgress: 'In Bearbeitung',
      upcoming: 'Bevorstehend',
      paymentProof: 'Zahlungsnachweis',
      downloadInvoice: 'Rechnung herunterladen'
    },
    voicebot: {
      title: 'Voice Bot AI',
      subtitle: 'Erleben Sie die Zukunft der konversationellen KI',
      startTalking: 'Sprechen beginnen',
      listening: 'Hört zu...',
      processing: 'Verarbeitung...',
      quickQuestions: 'Schnelle Fragen'
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
      portfolio: '我们的作品集',
      milestones: '里程碑',
      contact: '联系我们',
      voicebot: '语音机器人AI'
    },
    home: {
      hero: {
        title: '面向未来世界的革命性AI解决方案',
        subtitle: '通过尖端人工智能、机器学习和先进技术解决方案改变企业',
        startProject: '开始您的项目',
        getProposal: '获取提案'
      },
      stats: {
        projects: '已完成项目',
        clients: '满意客户',
        countries: '服务国家',
        experience: '年经验'
      },
      expertise: {
        title: '我们的专业知识',
        ai: '人工智能',
        aiDesc: '为您的业务需求量身定制的先进AI解决方案',
        ml: '机器学习',
        mlDesc: '预测模型和智能自动化系统',
        nlp: '自然语言处理',
        nlpDesc: '语言理解和对话式AI平台',
        llm: '大型语言模型',
        llmDesc: '定制LLM集成和微调服务'
      }
    },
    about: {
      title: '关于Nexariza',
      content: '以尖端解决方案引领AI创新的未来',
      mission: '我们的使命',
      missionText: '民主化AI技术，为全球企业提供智能解决方案',
      values: '我们的价值观',
      philosophy: '我们的技术理念',
      team: '认识我们的团队',
      ready: '准备与我们合作吗？'
    },
    services: {
      title: '我们的服务',
      aiServices: 'AI服务',
      chatbots: 'AI聊天机器人',
      voiceAI: '语音AI',
      computerVision: '计算机视觉',
      webApps: 'AI驱动的网络应用',
      predictive: '预测分析',
      medical: '医疗AI',
      document: '文档处理AI',
      getQuote: '获取报价',
      learnMore: '了解更多'
    },
    contact: {
      title: '联系我们',
      getInTouch: '取得联系',
      name: '姓名',
      email: '邮箱',
      message: '消息',
      phone: '电话',
      company: '公司',
      send: '发送消息',
      hours: '营业时间',
      address: '办公地址',
      why: '为什么选择Nexariza？'
    },
    team: {
      title: '我们的团队',
      subtitle: '认识推动AI创新的杰出人才',
      ceo: 'CEO兼联合创始人',
      cto: 'CTO兼联合创始人',
      leadership: '领导团队',
      experts: 'AI专家',
      developers: '开发团队'
    },
    testimonials: {
      title: '客户推荐',
      subtitle: '客户对与Nexariza AI合作的评价',
      rating: '评分',
      verified: '已验证客户'
    },
    projects: {
      title: '项目构建器',
      subtitle: '通过5个简单步骤构建您的定制AI解决方案',
      step1: '选择项目类型',
      step2: '选择复杂度',
      step3: '设置时间线',
      step4: '定义功能',
      step5: '获取定价',
      portfolio: '我们的作品集',
      dashboard: '项目仪表板'
    },
    portfolio: {
      title: '我们的作品集',
      subtitle: '发现我们获奖的AI解决方案和成功案例',
      featured: '精选项目',
      categories: '类别',
      all: '所有项目',
      ai: 'AI解决方案',
      ml: '机器学习',
      nlp: '自然语言处理',
      cv: '计算机视觉',
      viewProject: '查看项目',
      liveDemo: '实时演示',
      caseStudy: '案例研究'
    },
    milestones: {
      title: '项目里程碑',
      subtitle: '跟踪项目进度和付款历史',
      currentProject: '当前项目',
      progress: '进度',
      payments: '付款历史',
      consultations: '咨询历史',
      nextMilestone: '下一个里程碑',
      completed: '已完成',
      inProgress: '进行中',
      upcoming: '即将到来',
      paymentProof: '付款证明',
      downloadInvoice: '下载发票'
    },
    voicebot: {
      title: '语音机器人AI',
      subtitle: '体验对话式AI的未来',
      startTalking: '开始说话',
      listening: '正在听...',
      processing: '处理中...',
      quickQuestions: '快速问题'
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