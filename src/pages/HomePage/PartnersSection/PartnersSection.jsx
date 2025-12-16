import React from "react";
import PartnersLogo from "./PartnersLogo/PartnersLogo";
import Section from "../../../components/Section";

const PartnersSection = () => {
  return (
    <Section style={"py-5"} customWidth="max-w-5xl w-full">
      <PartnersLogo />
    </Section>
  );
};

export default PartnersSection;
