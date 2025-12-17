import React from 'react';

const Description = ({content, style, state, isSubtitle=false}) => {
    return (
       <p className={`custom_font_color ${style || ""}`}>
        {isSubtitle || state ? content : `${content.slice(0, 400)}...`}
       </p>
    );
};

export default Description;