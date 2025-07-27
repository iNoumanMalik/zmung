import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import FloatingBubbles from './FloatingBubbles';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const services = [
    'Photography', 'Design', 'Marketing', 'Development', 'Strategy'
  ];

  return (
    <>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingBubbles/>
      </div>

      <div className="container mx-auto px-4 py-40 md:py-0 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading - Only animates on mount */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <span className="gradient-text font-roboto">ZmungClient</span>
          </motion.h1>

          {/* Tagline - Only animates on mount */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-light text-[#d0d4da] mb-4"
          >
            One Idea. One Team. One Solution.
          </motion.p>

          {/* Subtitle - Only animates on mount */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#969eaa] mb-4 max-w-2xl mx-auto"
          >
            "You bring the product — we bring the brand."
          </motion.p>

          {/* Problem & Solution Cards - Only animate on mount */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
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
              animate={{ opacity: 1, x: 0 }}
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

          {/* CTA Buttons - Only animate on mount */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 text-white px-8 py-3 rounded-full font-medium inline-block relative overflow-hidden group">
                <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                <span className="relative z-10 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/portfolio" className="relative overflow-hidden border border-primary/30 bg-background/50 backdrop-blur-sm text-text px-8 py-3 rounded-full font-medium inline-block group">
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <span className="relative z-10 flex items-center justify-center">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator - Only animate once */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
