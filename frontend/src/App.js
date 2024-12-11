import React from 'react';
import ApiFetch from './ApiFetch';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    return (
      <div className="bg-white min-h-screen">
        {/* Navigation Bar */}
        <nav className="bg-gray font-bold text-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Martin Calo</h1>
            <ul className="flex space-x-8">
              <li className="hover:text-gray-400 cursor-pointer">Home</li>
              <li className="hover:text-gray-400 cursor-pointer">About</li>
              <li><a href="https://www.linkedin.com/in/martin-calo-garcia/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-navyBlue">
                  <i className="fab fa-linkedin-in"></i>
              </a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-darkCharcoal hover:text-navyBlue">
                  <i className="fab fa-github"></i>
              </a></li>
            </ul>
          </div>
        </nav>
  
        {/* Main Content */}
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <div className="text-center max-w-2xl p-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Hi, I'm [Your Name], a software engineer with expertise in robotics, automation, and full-stack development. Explore my work and experience below.
            </p>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-md text-lg hover:bg-gray-700">
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
