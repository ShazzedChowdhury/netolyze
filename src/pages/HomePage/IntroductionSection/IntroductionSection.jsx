import React, { useState } from 'react';
import Section from '../../../components/Section';
import AnimatedImage from '../../../components/AnimatedImage/AnimatedImage';
import animation from '../../../assets/animations/Office-boy-Multitasking.json'
import Button from '../../../components/Button';
import Title from '../../../components/Title/Title';
import Description from '../../../components/Description/Description';


const IntroductionSection = () => {
  const [ isReadMore, setReadMore ] = useState(false);
 
    return (
      <Section style={"h-auto xl:min-h-screen flex items-center"}>
        <div className="flex flex-col lg:flex-row items-center  py-20 lg:gap-10">
          {/* Animation image */}
          <div className="flex-1">
            <AnimatedImage data={animation} style={"max-w-lg mx-auto"} />
          </div>
          {/* Text content */}
          <div className="flex-1 flex flex-col justify-between border-l-4 border-[#5831C3] pl-5">
            <Title
              customStyle={"mb-5 text-2xl md:text-4xl"}
              content={"We’re a Full-Stack Digital"}
              gradientContent={"Marketing Company in Bangladesh"}
            />
            <Description
              customStyle={"text-lg"}
              state={isReadMore}
              content={`Despite massive digital advances worldwide, many brands in Bangladesh are still struggling with older and tiring marketing methods. If you’re still stuck in outdated methods, now’s the time to lead with smarter marketing. With pride, we take charge of shaping Bangladesh’s online marketing space.

Marketorr team guides you to find every challenge your brand faces and brings the most effective strategies that truly deliver results. About us? We have already partnered with 100+ brands across Bangladesh and generated notable outcomes. Starting from SEO and website development to social media management and paid advertising, we offer end-to-end digital marketing solutions designed to grow your online presence.

If your goal is to climb Google rankings, boost customer inquiries, or strengthen your brand’s online presence, Marketorr is the best team to have by your side. As a top marketing agency in Bangladesh, we strongly focus on ensuring measurable performance over empty promises and help you reach your business goals faster and smarter.`}
            />
            <Button
              handler={() => setReadMore((value) => !value)}
              content={isReadMore ? "Collapse" : "about more"}
              customStyle={"mt-5 w-fit"}
            />
          </div>
        </div>
      </Section>
    );
};

export default IntroductionSection;