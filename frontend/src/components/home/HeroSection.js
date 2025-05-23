import React from 'react';

/**
 * Hero section component for homepage
 * @returns {JSX.Element} The hero section component
 */
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-whitebeige items-center justify-center flex-col"
    >
      <div className="text-center p-6 mt-20 mb-10">
        <p className="text-lg md:text-xl font-oxanium mb-0">
          Hi, I'm Martin Calo, an engineer with expertise in automation, software and development.
        </p>
      </div>

      <div className="flex justify-center mt-8 w-full">
        <img
          src={`${process.env.PUBLIC_URL}/images/Technology.jpeg`}
          alt="Technology illustration"
          className="w-[65.25rem] h-auto rounded-lg object-cover"
        />
      </div>

      <div className="flex items-center justify-center md:flex-row flex-col w-full p-20">
        <div className="flex justify-center md:justify-center md:w-1/2">
          <img
            src={`${process.env.PUBLIC_URL}/images/MES_Transparent.png`}
            alt="Manufacturing execution system"
            className="w-[40.25rem] h-auto rounded-lg object-cover"
          />
        </div>

        <div className="text-center md:text-center p-10 mt-20 mb-20 md:w-1/2">
          <p className="text-lg md:text-xl font-oxanium mb-0">
            From the physical production floor to business planning, I've had the privilege of working across all five levels of the industry-standard automation model. Throughout my career, I have leveraged software solutions at each layer, from programming and optimizing shop-floor controllers to integrating MES systems and developing seamless connections with ERP platforms. This hands-on experience has given me a comprehensive understanding of how technology transforms manufacturing processes, enabling more efficient and data-driven operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 