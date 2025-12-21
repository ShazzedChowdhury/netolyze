import React, { use, useState } from 'react';
import Section from '../../../components/Section';
import Title from '../../../components/Title/Title';
import { IoIosArrowDown } from "react-icons/io";
import AnimatedImage from '../../../components/AnimatedImage/AnimatedImage';
import faqAnimation from '../../../assets/animations/FAQ.json'

const fetchData = fetch('/faq.json').then(res => res.json());
const FAQ = () => {
    const [opentIndex, setOpentIndex] = useState(null);
    const data = use(fetchData);  
    
    const toggle = (index) => {
        setOpentIndex(selectedIdx => (selectedIdx === index ? null : index));
    }
    return (
      <Section id="faq" customPaddingY="py-20">
        <Title
          content="Frequently Asked"
          gradientContent="Questions"
          customStyle={"text-3xl md:text-5xl text-center mb-20"}
        />
        <div className="flex gap-10 items-center">
          {/* faq container */}
          <div className='flex-1'>
            {data.map((singleData, idx) => {
              return (
                <div
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
          </div>
          <AnimatedImage data={faqAnimation} customStyle="flex-1 xl:max-w-md w-full hidden lg:block" />
        </div>
      </Section>
    );
};

export default FAQ;