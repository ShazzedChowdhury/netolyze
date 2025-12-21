import React from 'react';

const Section = ({
  id,
  children,
  customStyle,
  customWidth = "container",
  customPaddingX = "mx-auto px-5 md:px-10",
  customPaddingY 
}) => {
  return (
    <section id={id} className={`${customWidth} ${customPaddingY} ${customPaddingX} ${customStyle && customStyle}`}>
      {children}
    </section>
  );
};

export default Section;