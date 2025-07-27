import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Handle scroll events for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Navigation items
  const navItems = [
    { name: 'Services', path: isHomePage ? 'services' : '/services', isScroll: isHomePage },
    { name: 'Process', path: isHomePage ? 'process' : '/#process', isScroll: isHomePage },
    { name: 'About Us', path: isHomePage ? 'about' : '/about', isScroll: isHomePage },
    { name: 'Contact', path: isHomePage ? 'contact' : '/contact', isScroll: isHomePage },
  ];

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const linkVariants = {
    hover: { scale: 1.05, color: '#ff4ecd', transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass backdrop-blur-md py-3' : 'py-5'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <RouterLink to="/" className="flex items-center">
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Zmung
          </motion.div>
        </RouterLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.isScroll ? (
              <ScrollLink
                key={item.name}
                to={item.path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer"
              >
                <motion.span
                  className="text-text hover:text-accent transition-colors"
                  whileHover="hover"
                  whileTap="tap"
                  variants={linkVariants}
                >
                  {item.name}
                </motion.span>
              </ScrollLink>
            ) : (
              <RouterLink key={item.name} to={item.path}>
                <motion.span
                  className="text-text hover:text-accent transition-colors"
                  whileHover="hover"
                  whileTap="tap"
                  variants={linkVariants}
                >
                  {item.name}
                </motion.span>
              </RouterLink>
            )
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RouterLink to="/contact">
            <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-2 rounded-full font-medium relative neon-glow-rose">
              Let's Talk
            </button>
          </RouterLink>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-text"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 top-[72px] bg-background/95 backdrop-blur-lg z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
              {navItems.map((item) => (
                item.isScroll ? (
                  <ScrollLink
                    key={item.name}
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="cursor-pointer w-full text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span
                      className="text-xl font-medium text-text hover:text-accent transition-colors"
                      whileHover="hover"
                      whileTap="tap"
                      variants={linkVariants}
                    >
                      {item.name}
                    </motion.span>
                  </ScrollLink>
                ) : (
                  <RouterLink
                    key={item.name}
                    to={item.path}
                    className="w-full text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span
                      className="text-xl font-medium text-text hover:text-accent transition-colors"
                      whileHover="hover"
                      whileTap="tap"
                      variants={linkVariants}
                    >
                      {item.name}
                    </motion.span>
                  </RouterLink>
                )
              ))}
              <RouterLink
                to="/contact"
                className="w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                <motion.button
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-3 rounded-full font-medium w-full neon-glow-pink"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                </motion.button>
              </RouterLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
