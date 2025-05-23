import React from 'react';
import useApi from '../hooks/useApi';
import apiService from '../services/apiService';

/**
 * HelloWorld component that fetches a greeting from the API
 * @returns {JSX.Element} The HelloWorld component
 */
const HelloWorld = () => {
  const { data, loading, error } = useApi(apiService.hello.getMessage);

  return (
    <div className="flex flex-col items-center justify-center p-8 m-4 bg-white rounded-lg shadow-md">
      {loading && (
        <div className="text-gray-600 mb-4">
          <i className="fas fa-spinner fa-spin mr-2"></i>
          Loading...
        </div>
      )}

      {error && (
        <div className="text-red-500 mb-4">
          <i className="fas fa-exclamation-circle mr-2"></i>
          Error: {error}
        </div>
      )}

      {data && (
        <div className="text-center">
          <h1 className="text-3xl font-bold font-oxanium text-gray-800">
            {data.message}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Message from API running on {process.env.REACT_APP_ENV} environment
          </p>
        </div>
      )}
    </div>
  );
};

export default HelloWorld; 