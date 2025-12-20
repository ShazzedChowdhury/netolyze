import React from 'react';

const Description = ({content, customStyle, state, isSubtitle=false}) => {
    return (
      <p className={`custom_font_color ${customStyle || ""}`}>
        {isSubtitle || state ? content : `${content.slice(0, 400)}...`}
      </p>
    );
};

export default Description;