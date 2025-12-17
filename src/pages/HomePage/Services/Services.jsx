import React, { use, useEffect, useRef, useState } from "react";
import Section from "../../../components/Section";
import Title from "../../../components/Title/Title.jsx";
import Description from "../../../components/Description/Description.jsx";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Button from '../../../components/Button.jsx'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  FaSearch,
  FaMapMarkedAlt,
  FaPenNib,
  FaYoutube,
  FaShareAlt,
  FaBullhorn,
  FaBriefcase,
  FaLightbulb,
  FaProjectDiagram,
  FaNewspaper,
  FaPaintBrush,
  FaChartLine,
  FaPenFancy,
  FaMapSigns,
  FaUserFriends,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrNext, GrPrevious } from "react-icons/gr";

const fetchServices = fetch("/services.json").then((res) => res.json());
const Services = () => {
  const [ readMore , setReadMore ] = useState(false);
  const services = use(fetchServices);

  const icons = {
    FaSearch,
    FaMapMarkedAlt,
    FaPenNib,
    FaYoutube,
    FaShareAlt,
    FaBullhorn,
    FaBriefcase,
    FaLightbulb,
    FaProjectDiagram,
    FaNewspaper,
    FaPaintBrush,
    FaChartLine,
    FaPenFancy,
    FaMapSigns,
    FaUserFriends,
    MdEmail,
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);


  if (!services) {
    return <p>Loading......</p>;
  }
 
  return (
    <Section style={"py-20"}>
      <Title
        content={"Digital Marketing"}
        gradientContent={"Services at TradeFigur"}
        style={"text-5xl text-center mb-5"}
      />
      <Description
        content={
          "Complete range of services designed for better visibility, revenue, growth & success for your business."
        }
        isSubtitle={true}
        style={"text-lg text-center font-semibold mb-20"}
      />

      {/* External Navigation Buttons */}
      <div className="flex justify-end gap-5 mb-4">
        <button
          ref={prevRef}
          className="gradient_color text-white px-4 py-2 rounded"
        >
          <GrPrevious />
        </button>
        <button
          ref={nextRef}
          className="gradient_color text-white px-4 py-2 rounded"
        >
          <GrNext />
        </button>
      </div>

      {/* main container */}
      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation
        >
          {services.map((service, idx) => {
            const Icon = icons[service?.icon];
            return (
              <SwiperSlide key={idx}>
                <div className="bg-[#140b1e] rounded-md p-5 custom_font_color font-semibold space-y-2 border border-transparent hover:border-[#5831C3] transition-all duration-1500 group">
                  <div className="w-20 h-20 gradient_color place-items-center place-content-center rounded-md">
                    <Icon
                      className={
                        "text-4xl  text-[#a69daf] group-hover:text-[#fafafa] transition duration-1500"
                      }
                    />
                  </div>
                  <Title
                    gradientContent={service?.serviceTitle}
                    style={"text-xl"}
                  />
                  <h4>Goal: {service?.goal}</h4>
                  <p>
                    Includes:
                    {
                      <ul className="list-disc list-inside text-[0.8rem]">
                        {readMore
                          ? service?.serviceFeatures.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))
                          : service?.serviceFeatures
                              .slice(0, 4)
                              .map((point, idx) => <li key={idx}>{point}</li>)}
                      </ul>
                    }
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Section>
  );
};

export default Services;
