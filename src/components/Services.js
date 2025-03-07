import React from "react";
import ReactIcon from "../assets/icons/icons8-react-100.png";
import NextjsIcon from "../assets/icons/icons8-nextjs-100.png";
import NodejsIcon from "../assets/icons/icons8-nodejs-100.png";
import JavaIcon from "../assets/icons/icons8-java-100 (1).png";
import JavascriptIcon from "../assets/icons/icons8-javascript-100.png";
import Html5Icon from "../assets/icons/icons8-html-5-100.png";
import Css3Icon from "../assets/icons/icons8-css3-100.png";
import TailwindIcon from "../assets/icons/icons8-tailwindcss-100.png";
import PhpIcon from "../assets/icons/icons8-php-100.png";
import PythonIcon from "../assets/icons/icons8-python-100.png";
import CppIcon from "../assets/icons/icons8-c++-100.png";
import MongodbIcon from "../assets/icons/icons8-mongodb-100.png";
import MysqlIcon from "../assets/icons/icons8-my-sql-100.png";
import CsharpIcon from "../assets/icons/icons8-c-sharp-logo-2-100.png";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Services = () => {
  // Frontend Development data
  const frontendServices = [
    { name: "React JS", level: "Experienced", icon: ReactIcon },
    { name: "Next Js", level: "Experienced", icon: NextjsIcon },
    { name: "Node Js", level: "Experienced", icon: NodejsIcon },
    { name: "Java", level: "Experienced", icon: JavaIcon },
    { name: "JavaScript", level: "Experienced", icon: JavascriptIcon },
    { name: "HTML5", level: "Experienced", icon: Html5Icon },
    { name: "CSS3", level: "Experienced", icon: Css3Icon },
    { name: "Tailwind", level: "Experienced", icon: TailwindIcon },
  ];

  // Backend Development data
  const backendServices = [
    { name: "PHP", level: "Experienced", icon: PhpIcon },
    { name: "Python", level: "Basic", icon: PythonIcon },
    { name: "C++", level: "Basic", icon: CppIcon },
    { name: "MongoDB", level: "Intermediate", icon: MongodbIcon },
    { name: "MySQL", level: "Experienced", icon: MysqlIcon },
    { name: "C#", level: "Basic", icon: CsharpIcon },
  ];

  return (
    <section className="section text-accent" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="h2 text-center text-accent">What Skills I Have</h2>
          <h3 className="h3 text-center text-gradient btn-link">
            My Experience
          </h3>
        </motion.div>
        <div className="flex justify-center">
          <div className="flex flex-col w-full max-w-5xl gap-8 lg:flex-row lg:gap-x-12">
            {/* Frontend Development Box */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="rounded-2xl p-4 sm:p-6 w-full lg:w-1/2 bg-gray-800/50"
            >
              <h4 className="text-xl font-semibold text-center mb-4 text-gradient btn-link">
                Frontend Development
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {frontendServices.map((service, index) => (
                  <li key={index} className="flex">
                    <div className="flex items-center w-full p-3 border border-accent rounded-xl hover:opacity-75 transition-opacity duration-300">
                      <div className="w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <img
                          src={service.icon}
                          alt={`${service.name} icon`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white text-base sm:text-lg">
                          {service.name}
                        </span>
                        <span className="text-gray-400 text-sm sm:text-base">
                          {service.level}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Backend Development Box */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="rounded-2xl p-4 sm:p-6 w-full lg:w-1/2 bg-gray-800/50"
            >
              <h4 className="text-xl font-semibold text-center mb-4 text-gradient btn-link">
                Backend Development
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {backendServices.map((service, index) => (
                  <li key={index} className="flex">
                    <div className="flex items-center w-full p-3 border border-accent rounded-xl hover:opacity-75 transition-opacity duration-300">
                      <div className="w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <img
                          src={service.icon}
                          alt={`${service.name} icon`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white text-base sm:text-lg">
                          {service.name}
                        </span>
                        <span className="text-gray-400 text-sm sm:text-base">
                          {service.level}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
