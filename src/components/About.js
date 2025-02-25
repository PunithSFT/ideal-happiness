import React from "react";
import CountUp from "react-countup";
//intersection Observer
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div>
          {/*img*/}
          <div className="flex-1 bg-services bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">
            img
          </div>

          <div>text</div>
        </div>
      </div>
    </div>
  );
};

export default About;
