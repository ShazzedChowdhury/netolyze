import React from 'react';
import Marquee from "react-fast-marquee";
import google from '../../../../assets/partners-logo/google.png'
import meta from '../../../../assets/partners-logo/meta.png'
import linkedin from '../../../../assets/partners-logo/linkedin.png'
import shopify from '../../../../assets/partners-logo/shopify.png'

const PartnersLogo = () => {
  const partners = [
    {img: google, name: "Google"},
    {img: meta, name: "Meta"},
    {img: shopify, name: "Shopify"},
    {img: linkedin, name: "LinedIn"}
  ]
    return (
      <div className="overflow-hidden w-full">
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          gradient={true}
          gradientColor="#0f0717"
        >
          {partners.map((partner) => {
            return (
              <div className="my-0 mx-7 flex gap-2 items-center">
                <img
                  className="h-10 w-auto"
                  src={partner?.img}
                  alt={partner?.name}
                />
                <h5 className="text-white font-semibold">Marketing Partners</h5>
              </div>
            );
          })}
        </Marquee>
      </div>
    );
};

export default PartnersLogo;