import React from "react";
import Section from "../../../components/Section";
import BrandLogo from "../../../components/BrandLogo/BrandLogo";
import autoMart from "../../../assets/customers-logo/auto-mart.png";
import ddLab from "../../../assets/customers-logo/dd-lab.png";
import dentalTown from "../../../assets/customers-logo/dental-town.png";
import empothy from "../../../assets/customers-logo/empothy.png";
import fokus24 from "../../../assets/customers-logo/fokus24.png";
import lavoce from "../../../assets/customers-logo/lavoce.png";
import Description from "../../../components/Description/Description";

const CustomersLogo = () => {
  const customers = [
    { img: autoMart },
    { img: ddLab },
    { img: dentalTown },
    { img: empothy },
    { img: fokus24 },
    { img: lavoce },
  ];
  return (
    <Section
      style="bg-gradient-to-b from-[#5831C3] to-[#0F0817] lg:bg-gradient-to-r from-[#5831C3] to-[#0F0817] py-10"
      customWidth="w-full"
      customPaddingX="px-0"
    >
      <div className="container flex flex-col lg:flex-row gap-5 lg:gap-0 mx-auto items-center">
        <div className="w-full md:w-3/5 lg:w-2/6 flex items-center p-2 lg:pl-10 mx-auto">
          <p className="text-[#fafafa] text-xl font-semibold text-center lg:text-left">
            Here we've been featured and clients share their working experience
            with us.
          </p>
        </div>
        <BrandLogo
          data={customers}
          gradient={false}
          childStyle="mx-1 w-45 h-20 grid justify-center"
          style="w-full lg:w-4/6"
          isBorder={true}
        />
      </div>
    </Section>
  );
};

export default CustomersLogo;
