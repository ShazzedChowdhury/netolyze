import React from "react";
import Button from "../../../components/Button";
import BannerAnimation from "./BannerAnimation/BannerAnimation";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="h-full xl:min-h-[calc(100vh-95px)] flex items-center overflow-x-hidden">
      <div className="container mx-auto px-5 md:px-10 flex items-center flex-col-reverse lg:flex-row py-20">
        {/* content */}
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full lg:w-2/3 h-full space-y-7 md:text-center lg:text-left">
          <h1 className="text-transparent bg-clip-text gradient_color text-3xl md:text-5xl font-bold lg:leading-15">
            Best Digital Marketing Agency In Bangladesh
          </h1>
          <p className="custom_font_color text-lg w-full lg:w-4/5">
            Full-stack digital marketing agency in Bangladesh to accelerate your
            business growth. We develop impactful digital strategies that
            elevate your online presence, outperform competitors, and convert
            audiences into loyal customers. Let’s lead your brand to
            unparalleled online success.
          </p>
          <Button
            content={"get your free consultation now"}
            customStyle={"capitalize"}
          />
        </motion.div>
        {/* Image */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }} className="w-full lg:w-1/3">
          <BannerAnimation />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
