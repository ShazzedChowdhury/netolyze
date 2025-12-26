import React from 'react';

const Section = ({
  id,
  children,
  customStyle,
  customWidth = "container mx-auto ",
  customPaddingX = "px-5 md:px-10",
  customPaddingY,
}) => {
  return (
    <section
      id={id}
      className={`${customWidth} ${customPaddingY} ${customPaddingX} ${
        customStyle && customStyle
      } overflow-x-hidden`}
    >
      {children}
    </section>
  );
};

export default Section;