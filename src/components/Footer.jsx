import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const socialIconVariants = {
    hover: {
      scale: 1.2,
      y: -5,
      transition: { type: 'spring', stiffness: 400 }
    },
  };

  const linkVariants = {
    hover: { x: 5, color: '#ff4ecd', transition: { duration: 0.2 } },
  };

  return (
    <footer className="bg-surface pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Zmung Client</h3>
            <p className="text-subtext mb-6">
              A full-service digital marketing agency helping brands create meaningful connections through creative content and strategic marketing.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
                className="text-text hover:text-primary-500 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
                className="text-text hover:text-primary-500 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
                className="text-text hover:text-primary-500 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
                className="text-text hover:text-primary-500 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-text">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services">
                  <motion.div
                    className="flex items-center text-subtext hover:text-primary-500"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    <span>Services</span>
                  </motion.div>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <motion.div
                    className="flex items-center text-subtext hover:text-primary-500"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    <span>About Us</span>
                  </motion.div>
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  <motion.div
                    className="flex items-center text-subtext hover:text-primary-500"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    <span>Portfolio</span>
                  </motion.div>
                </Link>
              </li>
              <li>
                <Link to="/photography">
                  <motion.div
                    className="flex items-center text-subtext hover:text-primary-500"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    <span>Photography</span>
                  </motion.div>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <motion.div
                    className="flex items-center text-subtext hover:text-primary-500"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    <span>Contact</span>
                  </motion.div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-text">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-subtext">123 Marketing Street, Digital City, DC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-subtext">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-subtext">hello@zmungclient.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-text">Newsletter</h4>
            <p className="text-subtext mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent"
                required
              />
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg px-4 py-2 font-medium"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Copyright */}
        <div className="text-center text-subtext">
          <p>&copy; {currentYear} Zmung Client. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
