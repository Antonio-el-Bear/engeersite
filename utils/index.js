/**
 * Utility functions for the application
 */

/**
 * Creates a URL for a page
 * @param {string} pageName - The name of the page
 * @returns {string} - The URL for the page
 */
export function createPageUrl(pageName) {
  // Simple routing logic - convert page names to paths
  const pageMap = {
    'Home': '/',
    'Projects': '/projects',
    'Services': '/services', 
    'About': '/about',
    'Contact': '/contact'
  };
  
  return pageMap[pageName] || `/${pageName.toLowerCase()}`;
}

/**
 * Formats a number with commas
 * @param {number} num - The number to format
 * @returns {string} - The formatted number
 */
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Debounce function to limit the rate of function calls
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @returns {Function} - The debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}