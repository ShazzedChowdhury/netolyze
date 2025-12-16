import React from 'react';

const Section = ({ children, style, customWidth="container" }) => {
  return (
    <section
      className={`${customWidth} mx-auto px-5 md:px-10 ${
        style && style
      }`}
    >
      {children}
    </section>
  );
};

export default Section;