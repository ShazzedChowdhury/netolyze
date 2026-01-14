import React, { use } from "react";
import Section from "../../../components/Section";
import Title from "../../../components/Title/Title";
import mahinChowdhury from '../../../assets/founders-image/mahin-chowdhury.png'
import sultanMahmud from '../../../assets/founders-image/sultan-mahmud.png'
import asmaAkter from '../../../assets/founders-image/asma-akter.png'
import { motion } from "motion/react"
import TitleAnimation from "../../../components/TitleAnimation/TitleAnimation";

const fetchData = fetch("/founders.json").then((res) => res.json());
const AboutFounders = () => {
  const data = use(fetchData);

  const founders = {
    asmaAkter,
    mahinChowdhury,
    sultanMahmud,
  }

  return (
    <Section customPaddingY="py-20">
      <TitleAnimation>
        <Title
          content={"Meet Our"}
          gradientContent={"Founders"}
          customStyle={"text-3xl md:text-5xl text-center mb-20"}
        />
      </TitleAnimation>
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-5">
        {data.map((singleData, idx) => {
          const foundersImage = founders[singleData?.id];
          const animationDelay = idx === 0 ? idx : 0.2 ; 
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: animationDelay }}
              className={`${idx === 0 && "md:col-span-2 lg:col-span-1 xl:col-span-2"}`}
            >
              <div className="flex-1 flex h-full xl:h-70  border border-gray-700 xl:border-l-0 xl:border-b-0  xl:rounded-r-xl gap-5  relative group flex-col xl:flex-row overflow-hidden bg-[#140b1e] w-full md:max-w-83.5 lg:max-w-none xl:max-w-180 mx-auto">
                <div className="w-2/5 hidden xl:block absolute bg-linear-to-b from-[#7B53E8] via-[#5831C3] to-[#0f0717] rounded-r-xl inset-0 group-hover:w-full transition-all duration-1000"></div>
                {/* profile */}
                <div className="xl:w-2/5 w-full flex items-center justify-center p-5 bg-linear-to-t from-[#7B53E8] to-[#5831C3] xl:bg-transparent xl:rounded-b-0 rounded-b-xl py-10 xl:py-0">
                  <div className="avatar">
                    <div className="w-50 rounded-full ring-black ring-offset-black ring-2 ring-offset-2">
                      <img src={foundersImage} />
                    </div>
                  </div>
                </div>
                {/* content */}
                <div className="xl:w-3/5 w-full flex flex-col justify-center font-semibold relative z-10 p-5">
                  <h3 className="text-xl bg-linear-to-r from-[#fafafa] to-[#0f0717] text-transparent bg-clip-text">
                    {singleData?.role}
                  </h3>
                  <h4 className="text-2xl text-[#fafafa] mb-2">
                    {singleData?.name}
                  </h4>
                  <p className="text-lg custom_font_color">
                    {singleData?.skills.join(" | ")}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default AboutFounders;
