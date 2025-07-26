import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Custom hook to initialize and manage AOS (Animate On Scroll) animations
 * @param {Object} options - AOS initialization options
 */
const useScrollAnimation = (options = {}) => {
  useEffect(() => {
    // Initialize AOS with default or custom options
    AOS.init({
      // Global settings
      duration: 800, // Animation duration in ms
      easing: 'ease-out-cubic', // Default easing
      once: false, // Whether animation should happen only once
      mirror: true, // Whether elements should animate out while scrolling past them
      offset: 120, // Offset (in px) from the original trigger point
      delay: 0, // Delay animation (ms)
      
      // Override with any custom options
      ...options
    });

    // Refresh AOS when window is resized
    window.addEventListener('resize', AOS.refresh);

    return () => {
      window.removeEventListener('resize', AOS.refresh);
    };
  }, [options]);

  // Return the refresh function to manually refresh animations if needed
  return {
    refresh: AOS.refresh
  };
};

export default useScrollAnimation;