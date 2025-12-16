import React from 'react';
import Button from '../../../components/Button';
import BannerAnimation from './BannerAnimation/BannerAnimation';

const HeroSection = () => {
    return (
      <section className="h-full lg:min-h-[calc(100vh-95px)] flex items-center  ">
        <div className="container mx-auto px-5 md:px-10 flex items-center flex-col-reverse lg:flex-row py-20">
          {/* content */}
          <div className="w-full lg:w-2/3 h-full space-y-7 md:text-center lg:text-left">
            <h1 className="text-transparent bg-clip-text gradient_color text-3xl md:text-5xl font-bold lg:leading-15">
              Best Digital Marketing Agency In Bangladesh
            </h1>
            <p className="custom_font_color text-lg w-full lg:w-4/5">
              Full-stack digital marketing agency in Bangladesh to accelerate
              your business growth. We develop impactful digital strategies that
              elevate your online presence, outperform competitors, and convert
              audiences into loyal customers. Let’s lead your brand to
              unparalleled online success.
            </p>
            <Button
              content={"get your free consultation now"}
              style={"capitalize"}
            />
          </div>
          {/* Image */}
          <div className="w-full lg:w-1/3">
            <BannerAnimation />
          </div>
        </div>
      </section>
    );
};

export default HeroSection;