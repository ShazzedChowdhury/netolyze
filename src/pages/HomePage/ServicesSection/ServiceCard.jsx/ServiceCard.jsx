import React, { useEffect, useState } from "react";
import Title from "../../../../components/Title/Title";

const ServiceCard = ({ service, Icon }) => {
    const [features, setFeatures] = useState([]);
    const [ isClicked, setClicked ] = useState(false);

    useEffect(() => {
        if (isClicked) {
            setFeatures(service?.serviceFeatures);
            
        } 

        else {
            setFeatures(service?.serviceFeatures.slice(0, 4));
        }

    }, [isClicked])
    console.log(isClicked)


  return (
    <div
      className={`bg-[#140b1e] rounded-md p-5 custom_font_color font-semibold flex flex-col justify-between border border-gray-700 hover:border-[#5831C3] transition-all duration-1500 group ${
        isClicked ? 'h-130' : "h-110"
      } `}
    >
      <div className="space-y-2">
        <div className="w-20 h-20 gradient_color place-items-center place-content-center rounded-md">
          <Icon
            className={
              "text-4xl  text-[#a69daf] group-hover:text-[#fafafa] transition duration-1500 group-hover:scale-110"
            }
          />
        </div>
        <Title gradientContent={service?.serviceTitle} customStyle={"text-xl"} />
        <h4>Goal: {service?.goal}</h4>
        <span>
          Includes:
          {
            <ul className="list-disc list-inside text-[0.8rem]">
              {features.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          }
        </span>
      </div>
      {/* toggle button */}
      <div>
        {
          <button onClick={() => setClicked((value) => !value)}>
            {isClicked ? "Read Less" : "Read More"}
          </button>
        }
      </div>
    </div>
  );
};

export default ServiceCard;
