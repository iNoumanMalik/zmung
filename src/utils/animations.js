/**
 * Animation variants for Framer Motion
 * These can be reused across components for consistent animations
 */

// Fade in animation
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};

// Fade in from bottom
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.4 } }
};

// Fade in from top
export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

// Fade in from left
export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.4 } }
};

// Fade in from right
export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.4 } }
};

// Scale animation
export const scaleAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.4 } }
};

// Staggered container animation
export const staggerContainer = (staggerChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren: 0.1
    }
  }
});

// Staggered item animation
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Page transition animation
export const pageTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }
};

// Navbar animation
export const navbarAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

// Button hover animation
export const buttonHover = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } }
};

// Card hover animation
export const cardHover = {
  rest: { scale: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  hover: { scale: 1.03, y: -10, transition: { duration: 0.3, ease: 'easeOut' } }
};

// Modal animation
export const modalAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2, ease: 'easeIn' } }
};

// Rotate animation
export const rotateAnimation = {
  hidden: { opacity: 0, rotate: -90 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, rotate: 90, transition: { duration: 0.3 } }
};

// Bounce animation
export const bounceAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 15 
    } 
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.3 } }
};

// Flip animation
export const flipAnimation = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: { opacity: 1, rotateX: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, rotateX: 90, transition: { duration: 0.3 } }
};

// Slide in from bottom
export const slideInBottom = {
  hidden: { y: '100%' },
  visible: { y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { y: '100%', transition: { duration: 0.3, ease: 'easeIn' } }
};

// Slide in from top
export const slideInTop = {
  hidden: { y: '-100%' },
  visible: { y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { y: '-100%', transition: { duration: 0.3, ease: 'easeIn' } }
};

// Slide in from left
export const slideInLeft = {
  hidden: { x: '-100%' },
  visible: { x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { x: '-100%', transition: { duration: 0.3, ease: 'easeIn' } }
};

// Slide in from right
export const slideInRight = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { x: '100%', transition: { duration: 0.3, ease: 'easeIn' } }
};