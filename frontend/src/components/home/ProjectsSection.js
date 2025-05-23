import React from "react";

/**
 * Projects section component
 * @returns {JSX.Element} The projects section component
 */
const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-whitebeige flex flex-col items-center justify-center"
    >
      <div className="text-center mt-10 mb-5">
        <p className="text-2xl font-oxanium">Projects</p>
        <hr className="mt-4 w-[60vw] mx-auto border-t-2 border-white" />
      </div>

      {/* Enpal Project */}
      <div className="flex items-center justify-center md:flex-row flex-col w-full p-20">
        <div className="flex justify-center md:justify-center md:w-1/2">
          <img
            src={`${process.env.PUBLIC_URL}/images/Enpal.png`}
            alt="Enpal Project"
            className="w-[30.25rem] h-auto rounded-lg object-contain"
          />
        </div>
        <div className="text-left md:text-left p-10 mt-0 mb-0 md:w-1/2">
          <p className="text-lg md:text-xl font-oxanium mb-0">
            Working as a Full Stack AI Engineer in a modern DevOps environment, building and deploying scalable applications using Azure, Terraform, Docker, and Kubernetes. I actively contribute across the stack, from backend services to frontend features, with an emphasis on maintainable, production-grade code.
            <br /><br />
            I'm also exploring AI-enhanced development using tools like Cursor to streamline "vibe coding" — leveraging AI to boost productivity, automate repetitive tasks, and generate infrastructure-as-code more intuitively. My work integrates cloud automation, GitOps with Argo CD, and robust CI/CD pipelines, delivering reliable and reproducible environments across dev and prod.
          </p>
        </div>
      </div>

      {/* Tesla Project */}
      <div className="flex items-center justify-center md:flex-row flex-col w-full p-20">
        <div className="text-center md:text-left p-10 mt-0 mb-0 md:w-1/2">
          <p className="text-lg md:text-xl font-oxanium mb-0">
            As a software and automation engineer at Tesla, I developed and implemented MES in the Ignition platform and software applications, collaborating with cross-functional teams to optimize global factory operations. Skilled in Python, Java, C, structured text, SCADA, and MES systems, I drove innovation in control system development and improved resource allocation. I contributed to code reviews, testing, and CI/CD processes, ensuring software quality and operational success across multiple manufacturing facilities worldwide.
          </p>
        </div>
        <div className="flex justify-center md:justify-center md:w-1/2">
          <img
            src={`${process.env.PUBLIC_URL}/images/Tesla.png`}
            alt="Tesla Project"
            className="w-[30.25rem] h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Automation Project */}
      <div className="flex items-center justify-center md:flex-row flex-col w-full p-20">
        <div className="flex justify-center md:justify-center md:w-1/2">
          <iframe 
            width="640" 
            height="360" 
            src="https://www.youtube.com/embed/r4plTCiYPn4?si=LITTYZJvFNAzc1jH" 
            title="Automation Project" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            style={{
              borderRadius: "15px", 
              overflow: "hidden",
            }}
          />
        </div>
        <div className="text-center md:text-center p-10 mt-0 mb-0 md:w-1/2">
          <p className="text-lg md:text-xl font-oxanium mb-0">
            Managed complex automation projects in the automotive sector, overseeing the design, development, programming, implementation, and control of robotic cells.
            Extensively utilized a range of automation technologies, including ABB, Yaskawa, and Fanuc robots, as well as Omron and Siemens PLCs, Servo drives, and HMIs, to deliver high-performing solutions.
            Proactively collaborated with mechanical and electrical stakeholders during the design phase, leveraging offline simulations to identify and mitigate potential issues, ensuring smooth project execution and reduced risks. Played a key
            role in commissioning start-ups at client factories across multiple countries, ensuring successful implementation and high client satisfaction.
          </p>
        </div>
      </div>

      {/* Big Data Project */}
      <div className="flex items-center justify-center md:flex-row flex-col w-full p-20">
        <div className="text-center md:text-left p-10 mt-0 mb-0 md:w-1/2">
          <p className="text-lg md:text-xl font-oxanium mb-0">
            In the wood industry, I contributed to upgrading the big data infrastructure by implementing enhancements to PLC systems, optimizing data flow to the MES platform, and upgrading SCADA InTouch software. These improvements streamlined operations, improved data accuracy, and strengthened the integration between shop-floor processes and higher-level manufacturing systems
          </p>
        </div>
        <div className="flex justify-center md:justify-center md:w-1/2">
          <img
            src={`${process.env.PUBLIC_URL}/images/Big data.png`}
            alt="Big Data Project"
            className="w-[30.25rem] h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Water Plant Project */}
      <div className="flex items-center justify-center md:flex-row flex-col w-full p-20">
        <div className="text-center md:text-left p-10 mt-0 mb-0 md:w-1/2">
          <p className="text-lg md:text-xl font-oxanium mb-0">
            In a water treatment plant project, I developed and implemented both PLC programming and SCADA systems, ensuring efficient automation and seamless monitoring of the facility's operations
          </p>
        </div>
        <div className="flex justify-center md:justify-center md:w-1/2">
          <img
            src={`${process.env.PUBLIC_URL}/images/Water.png`}
            alt="Water Treatment Project"
            className="w-[30.25rem] h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;