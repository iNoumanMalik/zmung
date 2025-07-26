import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Palette, Megaphone, Code, MessageSquare, Check, ArrowRight } from 'lucide-react';

const Services = () => {
  // State to track which service is selected for detailed view
  const [selectedService, setSelectedService] = useState(null);

  // Services data
  const services = [
    {
      id: 'photography',
      icon: <Camera className="w-12 h-12 text-accent" />,
      title: 'Photography',
      shortDesc: 'High-quality product photography that showcases your products in the best light.',
      longDesc:
        'Our professional photography services capture your products in their best light, creating compelling visual content that drives engagement and sales. We specialize in product, lifestyle, and brand photography tailored to your specific needs.',
      features: [
        'Professional product photography',
        'Lifestyle and contextual shots',
        'Studio and on-location services',
        'Image retouching and editing',
        'E-commerce ready images',
        'Brand-consistent visual style',
      ],
      image:
        'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'design',
      icon: <Palette className="w-12 h-12 text-accent" />,
      title: 'Design',
      shortDesc:
        "Creative content and brand post creation that captures your audience's attention.",
      longDesc:
        'Our design team creates visually stunning content that aligns with your brand identity and resonates with your target audience. From social media graphics to comprehensive brand guidelines, we deliver designs that make an impact.',
      features: [
        'Brand identity development',
        'Social media graphics',
        'Digital ad designs',
        'Print materials',
        'Packaging design',
        'Presentation templates',
      ],
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: 'digital-marketing',
      icon: <Megaphone className="w-12 h-12 text-accent" />,
      title: 'Digital Marketing',
      shortDesc: 'Strategic ad campaigns and performance marketing to drive results.',
      longDesc:
        'Our data-driven digital marketing strategies help businesses reach their target audience, increase brand awareness, and drive conversions. We create and manage campaigns across multiple platforms to maximize your ROI.',
      features: [
        'PPC advertising',
        'Social media advertising',
        'Email marketing campaigns',
        'SEO optimization',
        'Content marketing',
        'Analytics and reporting',
      ],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80',
    },
    {
      id: 'web-development',
      icon: <Code className="w-12 h-12 text-accent" />,
      title: 'Website Development',
      shortDesc: 'Modern, responsive websites that convert visitors into customers.',
      longDesc:
        'We design and develop custom websites that not only look great but also perform exceptionally well. Our websites are responsive, user-friendly, and optimized for conversions to help you achieve your business goals.',
      features: [
        'Custom website design',
        'E-commerce development',
        'Landing page creation',
        'Website maintenance',
        'Performance optimization',
        'SEO-friendly structure',
      ],
      image:
        'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: 'social-media',
      icon: <MessageSquare className="w-12 h-12 text-accent" />,
      title: 'Social Media Management',
      shortDesc: 'Comprehensive social media management to grow your online presence.',
      longDesc:
        'Our social media management services help you build and maintain a strong online presence. We create engaging content, manage your social media accounts, and develop strategies to increase engagement and followers.',
      features: [
        'Content creation and curation',
        'Posting schedule management',
        'Community engagement',
        'Hashtag strategy',
        'Analytics and reporting',
        'Influencer collaborations',
      ],
      image:
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
    },
    {
      id: 'brand-strategy',
      icon: <Target className="w-12 h-12 text-accent" />,
      title: 'Brand Strategy & Consulting',
      shortDesc: 'Strategic guidance to align your brand, audience, and growth goals.',
      longDesc: 'Our brand strategy and consulting services help you define and refine your brand’s voice...',
      features: [
        'Brand positioning workshops',
        'Audience research & personas',
        'Messaging framework development',
        'Campaign planning & funnel strategy',
        'Go-to-market strategy',
        'Performance review & optimization consulting'
      ],
      image: 'https://images.unsplash.com/photo-1606170034783-9988ef699605?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    }

  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const detailVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
               Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-subtext text-lg mb-8">
              We offer a comprehensive range of digital marketing services to help your business
              grow and succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map(service => (
              <motion.div
                key={service.id}
                className={`bg-surface p-8 rounded-xl glass cursor-pointer transition-all duration-300 ${
                  selectedService === service.id ? 'neon-glow-pink' : 'hover:neon-glow-blue'
                }`}
                variants={itemVariants}
                onClick={() =>
                  setSelectedService(service.id === selectedService ? null : service.id)
                }
                whileHover={{ y: -10 }}
                id={service.id}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-subtext mb-6">{service.shortDesc}</p>
                <motion.div className="flex items-center text-accent" whileHover={{ x: 5 }}>
                  <span className="mr-2">Learn More</span>
                  <ArrowRight size={16} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Detail Section */}
      <AnimatePresence>
        {selectedService && (
          <motion.section
            className="py-16 bg-surface"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={detailVariants}
          >
            <div className="container mx-auto px-4">
              {services
                .filter(service => service.id === selectedService)
                .map(service => (
                  <div
                    key={service.id}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div>
                      <h2 className="text-3xl font-bold mb-6">
                        {service.title} <span className="gradient-text">Service</span>
                      </h2>
                      <p className="text-subtext mb-8">{service.longDesc}</p>

                      <h3 className="text-xl font-semibold mb-4">What We Offer:</h3>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                            <span className="text-subtext">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                      >
                        <Link
                          to="/contact"
                          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-3 rounded-full font-medium neon-glow-pink"
                        >
                          Get Started
                        </Link>
                      </motion.div>
                    </div>

                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl blur-lg opacity-30 animate-pulse"></div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-xl w-full h-auto relative z-10 object-cover"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-subtext max-w-2xl mx-auto">
              We offer customized solutions to meet your specific needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <motion.div
              className="bg-background rounded-xl overflow-hidden glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">Basic</h3>
                <p className="text-subtext mb-6">Perfect for small businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$999</span>
                  <span className="text-subtext">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Social media management (2 platforms)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Basic content creation (8 posts/month)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Monthly performance report</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Email support</span>
                  </li>
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <Link
                    to="/contact"
                    className="block text-center bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-full font-medium transition-colors w-full"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              className="bg-surface rounded-xl overflow-hidden glass relative neon-glow-pink transform scale-105 z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-center py-2 text-sm font-medium">
                Most Popular
              </div>
              <div className="p-8 pt-12">
                <h3 className="text-2xl font-semibold mb-2">Pro</h3>
                <p className="text-subtext mb-6">Ideal for growing businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$1,999</span>
                  <span className="text-subtext">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Social media management (4 platforms)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Advanced content creation (15 posts/month)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Bi-weekly performance reports</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Email & phone support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Basic SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Monthly strategy call</span>
                  </li>
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <Link
                    to="/contact"
                    className="block text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full font-medium w-full"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              className="bg-background rounded-xl overflow-hidden glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
                <p className="text-subtext mb-6">For established businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">Custom</span>
                  <span className="text-subtext"> pricing</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Comprehensive digital marketing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Premium content creation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Weekly performance reports</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Advanced SEO & analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-subtext">Dedicated account manager</span>
                  </li>
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <Link
                    to="/contact"
                    className="block text-center bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-full font-medium transition-colors w-full"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-subtext mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            All plans include a 14-day money-back guarantee. Need a custom solution?{' '}
            <Link to="/contact" className="text-accent hover:underline">
              Contact us
            </Link>{' '}
            for a personalized quote.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">
              Ready to <span className="gradient-text">Elevate</span> Your Brand?
            </h2>
            <p className="text-subtext mb-8 text-lg">
              Let's create a customized digital marketing strategy that drives results for your
              business.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-medium text-lg neon-glow-pink"
              >
                Schedule a Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
