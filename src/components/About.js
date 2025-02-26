import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
// Intersection Observer
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// Variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (inView && !startCounting) {
      const timer = setTimeout(() => {
        setStartCounting(true); // Start the count after a 2-second delay
      }, 800); // Adjust the delay here (in milliseconds)

      return () => clearTimeout(timer); // Clean up the timer if the component unmounts or inView changes
    }
  }, [inView, startCounting]); // Only run when inView or startCounting changes

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-32 lg:gap-y-0 h-screen">
          {/* Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-[url('/src/assets/digital-art-style-illustration-graphic-designer-removebg-preview.png')] bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Freelance Front-end Developer with over 1 year of
              experience.
            </h3>

            <p className="mb-6">
              A dedicated and results-driven Software Engineer with a passion
              for designing, building, and optimizing software solutions that
              address complex challenges.
            </p>

            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {startCounting && inView ? (
                    <CountUp start={0} end={2} duration={3} />
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {startCounting && inView ? (
                    <CountUp start={0} end={4} duration={3} />
                  ) : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {startCounting && inView ? (
                    <CountUp start={0} end={2} duration={3} />
                  ) : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
