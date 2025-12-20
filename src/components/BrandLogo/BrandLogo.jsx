import React from 'react';
import Marquee from "react-fast-marquee";

const BrandLogo = ({data, customStyle, childStyle, gradient=true, isBorder}) => {

    return (
      <div className={`overflow-hidden ${customStyle || ""}`}>
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          gradient={gradient}
          gradientColor="#0f0717"
        >
          {data.map((singleData, idx) => {
            return (
              <div key={idx} className={`my-0 flex gap-2 items-center ${isBorder && "border border-gray-700"} ${childStyle || ""}`}>
                <img
                  className="h-10 w-auto"
                  src={singleData?.img}
                  alt={singleData?.name}
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    );
};

export default BrandLogo;