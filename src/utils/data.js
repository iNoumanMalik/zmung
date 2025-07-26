/**
 * Website content data
 * This file contains all the static content data for the website
 */

// Team members data
export const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Founder & Creative Director',
    bio: 'With over 15 years of experience in digital marketing and design, Sarah founded Zmung Client to help businesses create meaningful digital experiences that drive results.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Technical Director',
    bio: 'Michael leads our technical team with expertise in web development, SEO, and digital infrastructure. He ensures all our projects are built with performance and scalability in mind.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Strategist',
    bio: 'Emily specializes in creating data-driven marketing strategies that help our clients reach their target audience and achieve their business goals.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Lead Designer',
    bio: 'David brings creativity and innovation to every project, with a keen eye for detail and a passion for creating visually stunning designs that communicate effectively.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      dribbble: 'https://dribbble.com'
    }
  }
];

// Services data
export const services = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Strategic marketing solutions to grow your online presence and reach your target audience.',
    fullDescription: 'Our digital marketing services are designed to help you reach your target audience, increase brand awareness, and drive conversions. We create customized strategies that align with your business goals and deliver measurable results.',
    icon: 'TrendingUp',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click Advertising (PPC)',
      'Social Media Marketing',
      'Email Marketing Campaigns',
      'Content Marketing Strategy',
      'Analytics and Reporting'
    ],
    benefits: [
      'Increase website traffic and visibility',
      'Improve conversion rates and ROI',
      'Build brand awareness and recognition',
      'Target specific audience segments',
      'Track and measure campaign performance'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'Custom website development that combines stunning design with powerful functionality.',
    fullDescription: 'We create custom websites that not only look great but also perform exceptionally well. Our development team focuses on creating responsive, user-friendly, and SEO-optimized websites that help you achieve your business objectives.',
    icon: 'Code',
    features: [
      'Custom Website Design',
      'E-commerce Development',
      'Content Management Systems',
      'Progressive Web Applications',
      'Website Maintenance and Support',
      'Performance Optimization'
    ],
    benefits: [
      'Establish a professional online presence',
      'Improve user experience and engagement',
      'Increase conversion rates with optimized design',
      'Ensure mobile responsiveness across all devices',
      'Maintain website security and performance'
    ],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    shortDescription: 'Comprehensive branding solutions that help you stand out in a competitive market.',
    fullDescription: 'Our branding services help you create a cohesive and memorable brand identity that resonates with your target audience. We develop comprehensive brand guidelines that ensure consistency across all touchpoints.',
    icon: 'Palette',
    features: [
      'Logo Design and Development',
      'Brand Strategy and Positioning',
      'Visual Identity Systems',
      'Brand Guidelines and Standards',
      'Packaging Design',
      'Brand Messaging and Voice'
    ],
    benefits: [
      'Create a distinctive brand identity',
      'Build brand recognition and loyalty',
      'Ensure consistency across all platforms',
      'Communicate your brand values effectively',
      'Stand out from competitors'
    ],
    image: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    shortDescription: 'Engaging content that tells your story and connects with your audience.',
    fullDescription: 'Our content creation services help you tell your brand story in a compelling way. We create high-quality content that engages your audience, builds trust, and drives action across various platforms and channels.',
    icon: 'FileText',
    features: [
      'Copywriting and Editing',
      'Blog and Article Writing',
      'Social Media Content',
      'Video Production',
      'Infographics and Visual Content',
      'Email Newsletter Content'
    ],
    benefits: [
      'Engage and educate your audience',
      'Establish thought leadership in your industry',
      'Improve SEO and organic traffic',
      'Build trust and credibility',
      'Drive conversions with compelling calls-to-action'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    shortDescription: 'Strategic social media management to build community and drive engagement.',
    fullDescription: 'Our social media management services help you build a strong presence on the platforms that matter most to your business. We create and implement strategies that increase engagement, grow your following, and drive conversions.',
    icon: 'Share2',
    features: [
      'Social Media Strategy',
      'Content Creation and Curation',
      'Community Management',
      'Social Media Advertising',
      'Influencer Partnerships',
      'Analytics and Reporting'
    ],
    benefits: [
      'Build a loyal community around your brand',
      'Increase brand awareness and visibility',
      'Drive website traffic and leads',
      'Improve customer engagement and satisfaction',
      'Stay ahead of industry trends and competitors'
    ],
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: 'photography',
    title: 'Professional Photography',
    shortDescription: 'High-quality photography services for products, events, and brand storytelling.',
    fullDescription: 'Our professional photography services help you showcase your products, services, and brand in the best light. We create stunning visual content that captures attention and communicates your brand message effectively.',
    icon: 'Camera',
    features: [
      'Product Photography',
      'Event Photography',
      'Corporate Portraits',
      'Lifestyle Photography',
      'Real Estate Photography',
      'Photo Editing and Retouching'
    ],
    benefits: [
      'Showcase your products and services professionally',
      'Create a visual brand identity',
      'Enhance marketing materials with high-quality images',
      'Increase engagement on social media and websites',
      'Build a library of custom visual content'
    ],
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
];

// Pricing plans
export const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for small businesses and startups looking to establish their online presence.',
    price: 999,
    duration: 'month',
    features: [
      'Website Design (5 pages)',
      'Basic SEO Setup',
      'Social Media Setup',
      'Monthly Performance Report',
      'Email Support',
      '1 Revision Round'
    ],
    recommended: false,
    buttonText: 'Get Started'
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Ideal for growing businesses that need comprehensive digital marketing solutions.',
    price: 1999,
    duration: 'month',
    features: [
      'Website Design (10 pages)',
      'Advanced SEO Optimization',
      'Social Media Management',
      'Content Creation (5 posts/month)',
      'Weekly Performance Reports',
      'Email & Phone Support',
      '3 Revision Rounds',
      'Google Ads Setup'
    ],
    recommended: true,
    buttonText: 'Get Started'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Comprehensive solution for established businesses looking to scale their digital presence.',
    price: 3999,
    duration: 'month',
    features: [
      'Custom Website Development',
      'Full-Scale SEO Strategy',
      'Complete Social Media Management',
      'Content Creation (15 posts/month)',
      'Daily Performance Monitoring',
      'Priority Support 24/7',
      'Unlimited Revisions',
      'Google & Facebook Ads Management',
      'Custom Reporting Dashboard',
      'Dedicated Account Manager'
    ],
    recommended: false,
    buttonText: 'Contact Us'
  }
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: 'Jessica Williams',
    role: 'CEO, TechStart',
    company: 'TechStart',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    quote: 'Working with Zmung Client transformed our online presence. Their team took the time to understand our business goals and delivered a website that exceeded our expectations. The increase in leads and conversions has been remarkable.'
  },
  {
    id: 2,
    name: 'Robert Chen',
    role: 'Marketing Director, FreshEats',
    company: 'FreshEats',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80',
    quote: 'The brand identity that Zmung Client created for us perfectly captures our company\'s vision and values. Their strategic approach to our digital marketing has helped us reach new customers and grow our business significantly.'
  },
  {
    id: 3,
    name: 'Amanda Johnson',
    role: 'Founder, StyleCo',
    company: 'StyleCo',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    quote: 'The social media strategy developed by Zmung Client has been a game-changer for our brand. We\'ve seen a 200% increase in engagement and a significant boost in sales directly attributed to their campaigns.'
  },
  {
    id: 4,
    name: 'Thomas Wright',
    role: 'COO, Urban Apparel',
    company: 'Urban Apparel',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    quote: 'The e-commerce website Zmung Client built for us has completely revolutionized our business. The user experience is seamless, and the increase in our conversion rate has been substantial. Their team is responsive, professional, and truly invested in our success.'
  }
];

// Process steps
export const processSteps = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We start by understanding your business, goals, target audience, and competitors to create a strategic foundation for your project.',
    icon: 'Search'
  },
  {
    id: 2,
    title: 'Strategy',
    description: 'Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives.',
    icon: 'Lightbulb'
  },
  {
    id: 3,
    title: 'Design',
    description: 'Our creative team designs visually stunning and user-friendly solutions that align with your brand identity and project goals.',
    icon: 'Palette'
  },
  {
    id: 4,
    title: 'Development',
    description: 'We bring the designs to life with clean, efficient code and powerful functionality that delivers an exceptional user experience.',
    icon: 'Code'
  },
  {
    id: 5,
    title: 'Launch',
    description: 'After thorough testing and refinement, we launch your project and ensure everything is working perfectly.',
    icon: 'Rocket'
  },
  {
    id: 6,
    title: 'Growth',
    description: 'We provide ongoing support and optimization to help your business grow and achieve long-term success.',
    icon: 'TrendingUp'
  }
];

// Stats
export const stats = [
  {
    id: 1,
    value: '250+',
    label: 'Projects Completed',
    icon: 'CheckCircle'
  },
  {
    id: 2,
    value: '15+',
    label: 'Years Experience',
    icon: 'Calendar'
  },
  {
    id: 3,
    value: '180%',
    label: 'Average ROI',
    icon: 'TrendingUp'
  },
  {
    id: 4,
    value: '98%',
    label: 'Client Satisfaction',
    icon: 'Heart'
  }
];

// FAQ items
export const faqItems = [
  {
    id: 1,
    question: 'What services does Zmung Client offer?',
    answer: 'Zmung Client offers a comprehensive range of digital marketing services including web development, brand identity design, content creation, social media management, digital marketing strategy, and professional photography.'
  },
  {
    id: 2,
    question: 'How long does a typical project take to complete?',
    answer: 'Project timelines vary depending on the scope and complexity. A basic website might take 2-4 weeks, while a comprehensive marketing campaign could take 1-3 months. During our initial consultation, we\'ll provide you with a detailed timeline for your specific project.'
  },
  {
    id: 3,
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing options including project-based pricing and monthly retainers. Our packages start at $999/month for basic services, with custom pricing available for enterprise solutions. We\'ll work with you to find a solution that fits your budget and meets your business needs.'
  },
  {
    id: 4,
    question: 'Do you work with businesses in specific industries?',
    answer: 'We work with businesses across various industries including technology, healthcare, retail, food and beverage, professional services, and more. Our diverse experience allows us to bring fresh perspectives and proven strategies to any industry.'
  },
  {
    id: 5,
    question: 'How do you measure the success of your marketing efforts?',
    answer: 'We establish clear KPIs at the beginning of each project and provide regular reports on performance. Depending on your goals, we might track website traffic, conversion rates, engagement metrics, lead generation, or ROI. Our focus is always on delivering measurable results that impact your bottom line.'
  },
  {
    id: 6,
    question: 'What makes Zmung Client different from other agencies?',
    answer: 'Our holistic approach combines strategic thinking, creative design, and technical expertise to deliver comprehensive solutions. We focus on building long-term partnerships with our clients, taking the time to understand their business and goals. Our team stays at the forefront of industry trends to ensure we\'re always delivering cutting-edge solutions.'
  }
];

// Company values
export const companyValues = [
  {
    id: 1,
    title: 'Innovation',
    description: 'We constantly explore new ideas and technologies to deliver cutting-edge solutions that keep our clients ahead of the curve.',
    icon: 'Lightbulb'
  },
  {
    id: 2,
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality work in everything we do, paying attention to every detail and exceeding expectations.',
    icon: 'Award'
  },
  {
    id: 3,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and partnership, working closely with our clients to achieve shared goals and success.',
    icon: 'Users'
  },
  {
    id: 4,
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical practices in all our business relationships and decisions.',
    icon: 'Shield'
  },
  {
    id: 5,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable results that make a real impact on our clients\' businesses and help them achieve their goals.',
    icon: 'Target'
  },
  {
    id: 6,
    title: 'Adaptability',
    description: 'We embrace change and continuously evolve our approaches to stay relevant in the fast-paced digital landscape.',
    icon: 'RefreshCw'
  }
];

// Navigation links
export const navLinks = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
  { id: 'photography', label: 'Photography', path: '/photography' },
  { id: 'contact', label: 'Contact', path: '/contact' }
];

// Footer links
export const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' }
  ],
  services: [
    { label: 'Digital Marketing', path: '/services#digital-marketing' },
    { label: 'Web Development', path: '/services#web-development' },
    { label: 'Brand Identity', path: '/services#brand-identity' },
    { label: 'Content Creation', path: '/services#content-creation' },
    { label: 'Social Media', path: '/services#social-media' },
    { label: 'Photography', path: '/photography' }
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-of-service' },
    { label: 'Cookie Policy', path: '/cookie-policy' }
  ],
  social: [
    { label: 'Instagram', icon: 'Instagram', path: 'https://instagram.com' },
    { label: 'Twitter', icon: 'Twitter', path: 'https://twitter.com' },
    { label: 'Facebook', icon: 'Facebook', path: 'https://facebook.com' },
    { label: 'LinkedIn', icon: 'Linkedin', path: 'https://linkedin.com' },
    { label: 'YouTube', icon: 'Youtube', path: 'https://youtube.com' }
  ]
};