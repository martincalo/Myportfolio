import React from 'react';

/**
 * Social media links component
 * @returns {JSX.Element} The social links component
 */
const SocialLinks = () => {
  return (
    <div className="fixed bottom-20 right-12 flex flex-col space-y-10">
      <a
        href="https://www.linkedin.com/in/martin-calo-garcia/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-400"
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin-in text-xl"></i>
      </a>
      <a
        href="https://github.com/martincalo/Myportfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-400"
        aria-label="GitHub"
      >
        <i className="fab fa-github text-xl"></i>
      </a>
    </div>
  );
};

export default SocialLinks; 