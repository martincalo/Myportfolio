import React, { createContext, useContext, useState } from 'react';

// Initial theme settings
const initialTheme = {
  primaryColor: 'whitebeige',
  secondaryColor: 'gray-800',
  textColor: 'gray-700',
  headingFont: 'oxanium',
  bodyFont: 'oxanium',
};

// Create context
const ThemeContext = createContext();

/**
 * Theme provider component for app-wide theming
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} The theme provider
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  // Function to update the entire theme
  const updateTheme = (newTheme) => {
    setTheme({ ...theme, ...newTheme });
  };

  // Function to update a specific theme property
  const updateThemeProperty = (property, value) => {
    setTheme({ ...theme, [property]: value });
  };

  // Context value
  const contextValue = {
    theme,
    updateTheme,
    updateThemeProperty,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to use the theme context
 * @returns {Object} Theme context
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext; 