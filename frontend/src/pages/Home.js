import React from 'react';

function Home() {
    return (
        <div className="min-h-screen bg-beige flex items-center justify-center">
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
    );
}

export default Home;