import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const services = [
    'Photography', 'Design', 'Marketing', 'Development', 'Strategy'
  ];

  return (
    <>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 opacity-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={service}
              className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-medium"
              style={{
                transform: `rotate(${(index * 360) / services.length}deg) translateX(150px) rotate(-${(index * 360) / services.length}deg)`,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {service}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10
">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text font-roboto">ZmungClient</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-light text-[#d0d4da] mb-4"
          >
            One Idea. One Team. One Solution.
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#969eaa] mb-8 max-w-2xl mx-auto"
          >
            "You bring the product — we bring the brand."
          </motion.p>

          {/* Problem & Solution Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="magnetic-hover"
            >
              <div className="glass-effect rounded-3xl p-8 h-full">
                <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                  The Problem
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  Launching a brand is overwhelming. Finding a photographer, designer, marketer, web developer, and strategist separately takes time, effort, and coordination.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="magnetic-hover"

            >
              <div className="glass-effect rounded-3xl p-8 h-full">
                <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                  The Solution
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  ZmungClient combines all essential brand-building services under one roof — you focus on your product, we handle the rest.
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles size={20} />
              Explore Services
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full border-2 border-primary-500 text-primary-500 dark:text-primary-400 text-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              Let's Talk
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.5
            }}
            className="relative"
          >
            <a
              href="#services"
              className="flex flex-col items-center text-text hover:text-primary transition-all group"
            >

              <div className="relative w-8 h-12 border-2 border-[#332d63] rounded-full flex justify-center p-1">
                <motion.div
                  className="w-1.5 h-1.5 bg-[#8a5bf4] rounded-full"
                  animate={{
                    y: [0, 16, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
