import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SocialLinks from './SocialLinks';

/**
 * Main layout wrapper component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} The main layout component
 */
const MainLayout = ({ children }) => {
  return (
    <div className="bg-whitebeige min-h-screen">
      <Header />
      <SocialLinks />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout; 