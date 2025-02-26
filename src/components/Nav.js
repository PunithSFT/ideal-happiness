import React, { useState, useEffect, useRef } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sectionsRef = useRef({});

  useEffect(() => {
    // Get references to all the sections
    const sections = ["home", "about", "services", "work", "contact"];
    sectionsRef.current = sections.reduce((acc, section) => {
      acc[section] = document.getElementById(section);
      return acc;
    }, {});

    // IntersectionObserver to detect the active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold for more precise visibility
    );

    // Observe all sections
    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="fixed bottom-4 lg:bottom-8 w-full overflow-hidden z-[75]">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[380px] mx-auto px-5 flex items-center justify-between text-2xl text-white/50">
          {/* Home Link */}
          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-200}
            className={`cursor-pointer w-[50px] h-[50px] flex items-center justify-center ${
              activeSection === "home" ? "active" : ""
            }`}
          >
            <BiHomeAlt />
          </Link>

          {/* About Link */}
          <Link
            to="about"
            smooth={true}
            duration={800}
            className={`cursor-pointer w-[50px] h-[50px] flex items-center justify-center ${
              activeSection === "about" ? "active" : ""
            }`}
          >
            <BiUser />
          </Link>

          {/* Services Link */}
          <Link
            to="services"
            smooth={true}
            duration={800}
            className={`cursor-pointer w-[50px] h-[50px] flex items-center justify-center ${
              activeSection === "services" ? "active" : ""
            }`}
          >
            <BsClipboardData />
          </Link>

          {/* Work Link */}
          <Link
            to="work"
            smooth={true}
            duration={800}
            className={`cursor-pointer w-[50px] h-[50px] flex items-center justify-center ${
              activeSection === "work" ? "active" : ""
            }`}
          >
            <BsBriefcase />
          </Link>

          {/* Contact Link */}
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className={`cursor-pointer w-[50px] h-[50px] flex items-center justify-center ${
              activeSection === "contact" ? "active" : ""
            }`}
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
