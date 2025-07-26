/**
 * Theme-related constants and utility functions
 */

// Theme colors based on brand guidelines
export const themeColors = {
  dark: {
    background: '#0f0c29',
    surface: '#1a1a2e',
    primary: '#302b63',
    accent: '#ff4ecd',
    text: '#f1f1f1',
    subtext: '#b3b3b3',
    border: '#2c2c3c',
    // Status colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    // Neon accents
    neonGreen: '#00ffc3',
    neonBlue: '#00c3ff'
  },
  light: {
    background: '#f8f9fa',
    surface: '#ffffff',
    primary: '#6366f1',
    accent: '#d946ef',
    text: '#1e293b',
    subtext: '#64748b',
    border: '#e2e8f0',
    // Status colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    // Neon accents (adjusted for light theme)
    neonGreen: '#059669',
    neonBlue: '#0284c7'
  }
};

// Glassmorphism settings
export const glassmorphism = {
  dark: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(255, 255, 255, 0.2)',
    blur: 'backdrop-blur-md'
  },
  light: {
    background: 'rgba(255, 255, 255, 0.7)',
    border: 'rgba(0, 0, 0, 0.1)',
    blur: 'backdrop-blur-md'
  }
};

// Gradient presets
export const gradients = {
  primary: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500',
  secondary: 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500',
  accent: 'bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500',
  success: 'bg-gradient-to-r from-green-400 to-emerald-500',
  warning: 'bg-gradient-to-r from-yellow-400 to-amber-500',
  error: 'bg-gradient-to-r from-red-400 to-rose-500',
  info: 'bg-gradient-to-r from-sky-400 to-blue-500',
  dark: 'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900',
  light: 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300'
};

// Shadow presets
export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  inner: 'shadow-inner',
  none: 'shadow-none',
  // Custom glow shadows
  primaryGlow: 'shadow-lg shadow-primary/20',
  accentGlow: 'shadow-lg shadow-accent/20',
  successGlow: 'shadow-lg shadow-success/20',
  warningGlow: 'shadow-lg shadow-warning/20',
  errorGlow: 'shadow-lg shadow-error/20',
  infoGlow: 'shadow-lg shadow-info/20'
};

// Font settings
export const fonts = {
  sans: 'font-sans', // Poppins or DM Sans
  serif: 'font-serif',
  mono: 'font-mono',
  // Font weights
  thin: 'font-thin',
  extralight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black'
};

// Border radius presets
export const borderRadius = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full'
};

/**
 * Get CSS variable value
 * @param {string} variableName - CSS variable name
 * @returns {string} - CSS variable value
 */
export const getCssVariable = (variableName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

/**
 * Set CSS variable value
 * @param {string} variableName - CSS variable name
 * @param {string} value - Value to set
 */
export const setCssVariable = (variableName, value) => {
  document.documentElement.style.setProperty(variableName, value);
};

/**
 * Check if the system prefers dark mode
 * @returns {boolean} - Whether system prefers dark mode
 */
export const systemPrefersDarkMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * Listen for system color scheme changes
 * @param {Function} callback - Callback function when preference changes
 * @returns {Function} - Function to remove the listener
 */
export const listenForColorSchemeChanges = (callback) => {
  if (!window.matchMedia) return () => {};
  
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const listener = (e) => callback(e.matches);
  
  mediaQuery.addEventListener('change', listener);
  return () => mediaQuery.removeEventListener('change', listener);
};