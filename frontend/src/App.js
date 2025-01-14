import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ApiFetch from './ApiFetch';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Pyramid from "./components/Pyramid"

function App() {
    return (
      
      <div className="bg-whitebeige min-h-screen">
      {/* Header */}
      <header className="w-full py-11 px-60 flex justify-between items-center border-b-4 border-white">
          <h1 className="text-2xl font-oxanium">Martin Calo</h1>
          <ul className="flex space-x-8">
              {/* Anchor links */}
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
      </header>

          {/* Fixed icons container */}
          <div className="fixed bottom-20 right-12 flex flex-col space-y-10">
            <a
              href="https://www.linkedin.com/in/martin-calo-garcia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-400"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a
              href="https://github.com/martincalo/Myportfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-400"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
        
  
          {/* Main Content */}
          {/* Section 1: Home */}
          <section
                id="home"
                className="min-h-screen bg-whitebeige items-center justify-center flex-col"
            >
              <div className="text-center p-6 mt-20 mb-10">
                <p className="text-lg md:text-xl font-oxanium mb-0">
                  Hi, I'm Martin Calo, an engineer with expertise in automation, software and development.
                </p>
            </div>

            {/* Add the image here */}
            <div className="flex justify-center mt-8 w-full">
              <img
                src={`${process.env.PUBLIC_URL}/images/Technology.jpeg`}
                alt="Your Image"
                className="w-[65.25rem] h-auto rounded-lg object-cover"
              />
            </div>

            {/* Project 2: Automation */}
          <div className="flex items-center justify-center md:flex-row flex-col w-full p-20">

            {/* ABB Robot */}
            <div className="flex justify-center md:justify-center md:w-1/2">
              <img
                src={`${process.env.PUBLIC_URL}/images/MES_Transparent.png`}
                alt="Big data"
                className="w-[40.25rem] h-auto rounded-lg object-cover"
              />
            </div>

            {/* Text */}
            <div className="text-center md:text-center p-10 mt-20 mb-20 md:w-1/2">
              <p className="text-lg md:text-xl font-oxanium mb-0">
              From the physical production floor to business planning, I've had the privilege of working across all five levels of the industry-standard automation model. Throughout my career, I have leveraged software solutions at each layer, from programming and optimizing shop-floor controllers to integrating MES systems and developing seamless connections with ERP platforms. This hands-on experience has given me a comprehensive understanding of how technology transforms manufacturing processes, enabling more efficient and data-driven operations.              </p>
            </div>

            </div>

          </section>

          {/* Section 2: Projects */}
        <section
          id="projects"
          className="min-h-screen bg-whitebeige flex flex-col items-center justify-center"
          >
            <div className="text-center mt-10 mb-5">
            <p className="text-2xl font-oxanium">Projects</p>
            <hr className="mt-4 w-[60vw] mx-auto border-t-2 border-white" />
            </div>

          {/* Project 1: Tesla */}
          <div className="flex items-center justify-center md:flex-row flex-col w-full p-20">
            {/* Text */}
            <div className="text-center md:text-left p-10 mt-0 mb-0 md:w-1/2">
              <p className="text-lg md:text-xl font-oxanium mb-0">
                As a software and automation engineer at Tesla, I developed and implemented MES in the Ignition platform and software applications, collaborating with cross-functional teams to optimize global factory operations. Skilled in Python, Java, C, structured text, SCADA, and MES systems, I drove innovation in control system development and improved resource allocation. I contributed to code reviews, testing, and CI/CD processes, ensuring software quality and operational success across multiple manufacturing facilities worldwide.
              </p>
            </div>
            {/* Image */}
            <div className="flex justify-center md:justify-center md:w-1/2">
              <img
                src={`${process.env.PUBLIC_URL}/images/Tesla.png`}
                alt="Tesla Project"
                className="w-[30.25rem] h-auto rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Project 2: Automation */}
          <div className="flex items-center justify-center md:flex-row flex-col w-full p-20">

            {/* ABB Robot */}
            <div className="flex justify-center md:justify-center md:w-1/2">
              <iframe
                src="https://drive.google.com/uc?id=1m9A5VepV9eT5bkpRyvlpjneV0z-Q0C5F"
                width="640"
                height="360"
                allow="autoplay"
              ></iframe>
            </div>
            
            {/* Text */}
            <div className="text-center md:text-center p-10 mt-0 mb-0 md:w-1/2">
              <p className="text-lg md:text-xl font-oxanium mb-0">
              Managed complex automation projects in the automotive sector, overseeing the design, development, programming, implementation, and control of robotic cells.
              Extensively utilized a range of automation technologies, including ABB, Yaskawa, and Fanuc robots, as well as Omron and Siemens PLCs, Servo drives, and HMIs, to deliver high-performing solutions.
              Proactively collaborated with mechanical and electrical stakeholders during the design phase, leveraging offline simulations to identify and mitigate potential issues, ensuring smooth project execution and reduced risks. Played a key
              role in commissioning start-ups at client factories across multiple countries, ensuring successful implementation and high client satisfaction. In this video you can check it out.
              </p>
            </div>
            
          </div>


          {/* Project 3: Big data */}
          <div className="flex items-center justify-center md:flex-row flex-col w-full p-20">
            {/* Text */}
            <div className="text-center md:text-left p-10 mt-0 mb-0 md:w-1/2">
              <p className="text-lg md:text-xl font-oxanium mb-0">
              In the wood industry, I contributed to upgrading the big data infrastructure by implementing enhancements to PLC systems, optimizing data flow to the MES platform, and upgrading SCADA InTouch software. These improvements streamlined operations, improved data accuracy, and strengthened the integration between shop-floor processes and higher-level manufacturing systems              </p>
            </div>
            {/* Image */}
            <div className="flex justify-center md:justify-center md:w-1/2">
              <img
                src={`${process.env.PUBLIC_URL}/images/Big data.png`}
                alt="Big data"
                className="w-[30.25rem] h-auto rounded-lg object-cover"
              />
            </div>
          </div>


          {/* Project 4: Water Plant */}
          <div className="flex items-center justify-center md:flex-row flex-col w-full p-20">
            {/* Text */}
            <div className="text-center md:text-left p-10 mt-0 mb-0 md:w-1/2">
              <p className="text-lg md:text-xl font-oxanium mb-0">
              In a water treatment plant project, I developed and implemented both PLC programming and SCADA systems, ensuring efficient automation and seamless monitoring of the facility's operations              </p>
            </div>
            {/* Image */}
            <div className="flex justify-center md:justify-center md:w-1/2">
              <img
                src={`${process.env.PUBLIC_URL}/images/Water.png`}
                alt="Big data"
                className="w-[30.25rem] h-auto rounded-lg object-cover"
              />
            </div>
          </div>

        </section>

        {/* Footer */}
        <footer className="bg-whitebeige p-20">
            <div className="w-full border-b-2 border-black mb-12"></div>
            <div className="text-center mt-20">
              <p className="text-xl font-oxanium">Martin Calo</p>
              <p className="text-lg font-oxanium">Berlin</p>
              <p className="text-lg font-oxanium">2025</p>
            </div>
          </footer>
            
        </div>
      
    );
  }
  
  export default App;
