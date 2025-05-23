/**
 * API Service for handling all API requests
 * Uses environment variables for configuration
 */

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

/**
 * Generic fetch handler with error management
 * @param {string} endpoint - The API endpoint to call
 * @param {Object} options - Fetch options
 * @returns {Promise<any>} - Response data
 */
const fetchApi = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };
  
  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };
  
  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      // Handle different error status codes
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Request failed with status ${response.status}`
      );
    }
    
    return await response.json();
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
};

/**
 * API methods organized by resource
 */
const apiService = {
  // Hello endpoint
  hello: {
    getMessage: () => fetchApi('hello/'),
  },
  
  // Add more API endpoints here as your backend grows
};

export default apiService; 