import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import HeroSection from '../components/home/HeroSection';
import ProjectsSection from '../components/home/ProjectsSection';

/**
 * Homepage component
 * @returns {JSX.Element} The homepage
 */
const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ProjectsSection />
    </MainLayout>
  );
};

export default Home;