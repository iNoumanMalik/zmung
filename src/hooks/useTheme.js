import { useState, useEffect } from 'react';

/**
 * Custom hook to manage theme state
 * @returns {Object} - Object containing theme state and toggle function
 */
const useTheme = () => {
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

  return { isDarkTheme, toggleTheme };
};

export default useTheme;