import React, { use, useEffect, useRef, useState } from "react";
import Section from "../../../components/Section.jsx";
import Title from "../../../components/Title/Title.jsx";
import Description from "../../../components/Description/Description.jsx";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Button from '../../../components/Button.jsx'
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
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { GrNext, GrPrevious } from "react-icons/gr";
import ServiceCard from "./ServiceCard.jsx/ServiceCard.jsx";

const fetchServices = fetch("/services.json").then((res) => res.json());
const ServicesSection = () => {
  const [readMore, setReadMore] = useState(false);
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
    <Section customStyle={"py-20"}>
      <Title
        content={"Digital Marketing"}
        gradientContent={"Services at TradeFigur"}
        customStyle={"text-5xl text-center mb-5"}
      />
      <Description
        content={
          "Complete range of services designed for better visibility, revenue, growth & success for your business."
        }
        isSubtitle={true}
        customStyle={"text-lg text-center font-semibold mb-20"}
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
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {services.map((service, idx) => {
            const Icon = icons[service?.icon];
            return (
              <SwiperSlide key={idx}>
              <ServiceCard service={service}  Icon={Icon} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Section>
  );
};

export default ServicesSection;
