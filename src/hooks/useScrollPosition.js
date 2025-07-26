import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position
 * @returns {Object} - Object containing scroll position data
 */
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollY: 0,
    scrollX: 0,
    direction: 'none',
    lastScrollY: 0,
  });

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    
    const updateScrollPosition = () => {
      const scrollY = window.pageYOffset;
      const scrollX = window.pageXOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      setScrollPosition({
        scrollY,
        scrollX,
        direction,
        lastScrollY,
      });
      
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollPosition, { passive: true });

    // Initial call to set initial position
    updateScrollPosition();

    // Clean up
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;