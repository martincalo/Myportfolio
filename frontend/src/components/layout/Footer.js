import React from 'react';

/**
 * Footer component with copyright and contact info
 * @returns {JSX.Element} The footer component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-whitebeige p-20">
      <div className="w-full border-b-2 border-black mb-12"></div>
      <div className="text-center mt-20">
        <p className="text-xl font-oxanium">Martin Calo</p>
        <p className="text-lg font-oxanium">Berlin</p>
        <p className="text-lg font-oxanium">{currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer; 