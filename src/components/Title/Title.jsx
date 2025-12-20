import React from 'react';

const Title = ({content, gradientContent, customStyle}) => {
    return (
      <h2 className={`${customStyle || ""} text-[#FAFAFA] font-bold`}>
        {content}{" "}
        <span className="gradient_color bg-clip-text text-transparent">
          {gradientContent}
        </span>
      </h2>
    );
};

export default Title;