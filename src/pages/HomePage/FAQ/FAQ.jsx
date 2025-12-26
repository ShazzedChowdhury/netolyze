import React, { use, useState } from 'react';
import Section from '../../../components/Section';
import Title from '../../../components/Title/Title';
import { IoIosArrowDown } from "react-icons/io";
import AnimatedImage from '../../../components/AnimatedImage/AnimatedImage';
import faqAnimation from '../../../assets/animations/FAQ.json'
import { motion } from 'motion/react'
import TitleAnimation from '../../../components/TitleAnimation/TitleAnimation';

const fetchData = fetch('/faq.json').then(res => res.json());
const FAQ = () => {
    const [opentIndex, setOpentIndex] = useState(null);
    const data = use(fetchData);  
    
    const toggle = (index) => {
        setOpentIndex(selectedIdx => (selectedIdx === index ? null : index));
    }
    return (
      <Section id="faq" customPaddingY="py-20">
        <TitleAnimation>
          <Title
            content="Frequently Asked"
            gradientContent="Questions"
            customStyle={"text-3xl md:text-5xl text-center mb-20"}
          />
        </TitleAnimation>
        <div className="flex gap-10 justify-between items-center">
          {/* faq container */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5"
          >
            {data.map((singleData, idx) => {
              return (
                <div
                  key={idx}
                  className={`bg-[#140b1e] mb-2 transition-[border] rounded-sm p-5 ease-in-out duration-1000 ${
                    opentIndex === idx && "border border-[#7b53e8]"
                  }`}
                  onClick={() => toggle(idx)}
                >
                  <div className="flex justify-between text-xl">
                    <h4 className="gradient_font">{singleData?.question}</h4>
                    <span>
                      <IoIosArrowDown
                        className={`text-[#7b53e8] text-3xl transition-transform duration-1000 ${
                          opentIndex === idx ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
                      opentIndex === idx ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="custom_font_color mt-5">
                      {singleData?.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
          <motion.div
            className="w-2/5 hidden lg:block"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedImage
              data={faqAnimation}
              customStyle="xl:max-w-md w-full"
            />
          </motion.div>
        </div>
      </Section>
    );
};

export default FAQ;