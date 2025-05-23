import React from 'react';
import MainLayout from '../components/layout/MainLayout';

/**
 * About page component
 * @returns {JSX.Element} The about page
 */
const About = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-whitebeige flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 font-oxanium">About Me</h1>
          <p className="text-lg text-gray-700 mb-6 font-oxanium">
            As an automation and software engineer with extensive experience in industrial technology,
            I bridge the gap between physical production systems and digital transformation.
          </p>
          <p className="text-lg text-gray-700 mb-6 font-oxanium">
            My expertise spans across all five levels of the ISA-95 automation model, from shop-floor
            control systems to enterprise integration solutions.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;