import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Scroll = ({name, href}) => {
    return (
      <HashLink
        smooth
        to={`${href}`}
        scroll={(el) => {
          const yOffset = -96; // fixed navbar height
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }}
      >
        {name}
      </HashLink>
    );
};

export default Scroll;