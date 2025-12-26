import React from "react";
import Section from "../../../components/Section";
import google from "../../../assets/partners-logo/google.png";
import shopify from "../../../assets/partners-logo/shopify.png";
import meta from "../../../assets/partners-logo/meta.png";
import linkedin from "../../../assets/partners-logo/linkedin.png";
import { motion } from "motion/react"

const PartnersSection = () => {
  const partners = [
    { logo: meta, name: "meta" },
    { logo: google, name: "google" },
    { logo: shopify, name: "shopify" },
    { logo: linkedin, name: "linkedin" },
  ];
  return (
    <Section
      customStyle="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-3 border border-l-0 border-r-0 border-gray-800"
      customPadding="px-0 md:px-0"
      customWidth="w-full mx-auto container"
    >
      {partners.map((partner, idx) => {
        return (
          <motion.div
          key={idx}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx }}
            className="max-w-80 md:grayscale hover:grayscale-0 transition-[filter] duration-1000 max-h-30 w-full h-full flex items-center"
          >
            <img
              src={partner?.logo}
              alt={partner?.name}
              className="object-cover w-full h-full"
            />
          </motion.div>
        );
      })}
    </Section>
  );
};

export default PartnersSection;
