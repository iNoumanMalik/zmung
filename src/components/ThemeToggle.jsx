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
      className={`p-2 rounded-full ${isDarkTheme ? 'bg-primary/30' : 'bg-amber-100'} transition-colors`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDarkTheme ? (
        <Sun size={20} className="text-amber-300" />
      ) : (
        <Moon size={20} className="text-indigo-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;