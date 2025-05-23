import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';

/**
 * Main App component
 * @returns {JSX.Element} The main application
 */
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
