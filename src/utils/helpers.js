/**
 * Format a number with commas as thousands separators
 * @param {number} num - The number to format
 * @returns {string} - Formatted number string
 */
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Truncate text to a specified length and add ellipsis
 * @param {string} text - The text to truncate
 * @param {number} length - Maximum length before truncation
 * @returns {string} - Truncated text
 */
export const truncateText = (text, length = 100) => {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
};

/**
 * Delay execution for a specified time
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} - Promise that resolves after the delay
 */
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Generate a random ID
 * @param {number} length - Length of the ID
 * @returns {string} - Random ID
 */
export const generateId = (length = 8) => {
  return Math.random().toString(36).substring(2, 2 + length);
};

/**
 * Check if an element is in viewport
 * @param {HTMLElement} el - The element to check
 * @param {number} offset - Offset from the edge of the viewport
 * @returns {boolean} - Whether the element is in viewport
 */
export const isInViewport = (el, offset = 0) => {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 - offset &&
    rect.left >= 0 - offset &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
  );
};

/**
 * Debounce a function call
 * @param {Function} func - The function to debounce
 * @param {number} wait - Milliseconds to wait
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle a function call
 * @param {Function} func - The function to throttle
 * @param {number} limit - Milliseconds to limit
 * @returns {Function} - Throttled function
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

/**
 * Get a random item from an array
 * @param {Array} array - The array to get a random item from
 * @returns {*} - Random item from the array
 */
export const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Shuffle an array
 * @param {Array} array - The array to shuffle
 * @returns {Array} - Shuffled array
 */
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};