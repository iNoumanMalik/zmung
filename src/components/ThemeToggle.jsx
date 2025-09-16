import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  // Default to dark theme
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Check for saved theme preference or use dark theme as default
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkTheme(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkTheme(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    if (isDarkTheme) {
      // Switch to light theme
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkTheme(false);
    } else {
      // Switch to dark theme
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkTheme(true);
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-3 rounded-full transition-all duration-300 ${
        isDarkTheme 
          ? 'bg-primary/30 hover:bg-primary/40 neon-glow-purple' 
          : 'bg-blue-100 hover:bg-blue-200 neon-glow-blue shadow-lg'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDarkTheme ? (
        <Sun size={22} className="text-amber-300" />
      ) : (
        <Moon size={22} className="text-blue-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;