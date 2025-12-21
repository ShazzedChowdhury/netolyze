import React, { use, useEffect, useState } from "react";
import Section from "../../../components/Section";
import Title from "../../../components/Title/Title";
import Description from "../../../components/Description/Description";
import AnimatedImage from "../../../components/AnimatedImage/AnimatedImage";
import animation from "../../../assets/animations/Financial-charts.json";
import SingleData from "./SingleData/SingleData";

const fetchData = fetch('/why-choose-us.json').then(res => res.json())
const WhyChooseUsSection = () => {
    const data = use(fetchData)
    console.log(data)
    return (
      <Section
        id="why-us"
        customStyle={"py-20 relative"}
      >
          <Title
            content={"Why We’re Best Choice as a"}
            gradientContent={"Digital Marketing agency"}
            customStyle={"text-3xl md:text-5xl text-center mb-5"}
          />
          <Description
            content={
              "We blend creativity with strategy to build brands that stand out, connect emotionally, and drive real results."
            }
            isSubtitle={true}
            customStyle={"text-lg text-center font-semibold mb-20"}
          />

          <div>
            {/* content section */}
            <div className="grid gap-6 row-gap-10 xl:grid-cols-2 justify-center itmes-center">
              <div className="lg:py-6 lg:pr-16">
                {data?.map((single, idx) => {
                  return <SingleData key={idx} single={single} />;
                })}
              </div>
              {/* Animation */}
              <div className="relative">
                <AnimatedImage data={animation} customStyle={"max-w-lg mx-auto"} />
              </div>
            </div>
          </div>
      </Section>
    );
};

export default WhyChooseUsSection;
