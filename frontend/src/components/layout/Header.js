import React, { useState } from 'react';

/**
 * Header component with responsive navigation
 * @returns {JSX.Element} The header component
 */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full py-6 md:py-11 px-6 md:px-60 flex justify-between items-center border-b-4 border-white">
      <h1 className="text-2xl font-oxanium">Martin Calo</h1>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden text-gray-800 focus:outline-none" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
      </button>
      
      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <a
            href="#home"
            className="hover:text-gray-400 font-oxanium cursor-pointer"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-gray-400 font-oxanium cursor-pointer"
          >
            Projects
          </a>
        </li>
      </ul>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-whisperbeige shadow-lg p-4 md:hidden z-50">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#home"
                className="block hover:text-gray-400 font-oxanium"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block hover:text-gray-400 font-oxanium"
                onClick={toggleMobileMenu}
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header; 