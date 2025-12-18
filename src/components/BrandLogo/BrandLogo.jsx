import React from 'react';
import Marquee from "react-fast-marquee";

const BrandLogo = ({data, style, childStyle, gradient=true, isName=false, isBorder}) => {

    return (
      <div className={`overflow-hidden ${style || ""}`}>
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
                {isName && (
                  <h5 className="text-white font-semibold">
                    {singleData?.name}
                  </h5>
                )}
              </div>
            );
          })}
        </Marquee>
      </div>
    );
};

export default BrandLogo;