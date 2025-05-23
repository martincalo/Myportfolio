import { useState, useEffect, useCallback } from 'react';
import apiService from '../services/apiService';

/**
 * Custom hook for making API calls with loading and error states
 * @param {Function} apiCall - The API service function to call
 * @param {Array} dependencies - Dependencies array for useEffect
 * @param {boolean} callOnMount - Whether to call the API on component mount
 * @returns {Object} - API response data, loading state, error, and refetch function
 */
const useApi = (apiCall, dependencies = [], callOnMount = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(callOnMount);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await apiCall();
      setData(response);
      return response;
    } catch (err) {
      setError(err.message || 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  }, [apiCall]);

  useEffect(() => {
    if (callOnMount) {
      fetchData();
    }
  }, [...dependencies, fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useApi; 