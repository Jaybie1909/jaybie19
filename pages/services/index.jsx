import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-16 sm:py-20 lg:py-24 xl:py-36 flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 xl:px-0">
      {/* background circles */}
      <Circles />

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 gap-y-8 xl:gap-y-0">
          {/* text */}
          <div className="text-center xl:w-[30vw] flex flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 sm:mb-6 max-w-[400px] mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg"
            >
              I help brands and businesses grow by combining creativity with strategy. From crafting strong identities to building seamless digital experiences, my services are designed to deliver impact. Each project is tailored to meet your goals and bring your vision to life.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>

      {/* decorative bulb */}
      <Bulb />
    </div>
  );
};

export default Services;