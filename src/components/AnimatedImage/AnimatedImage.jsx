import React from 'react';
import Lottie from 'lottie-react';

const AnimatedImage = ({data, customStyle}) => {
    return (
        <Lottie animationData={data} className={customStyle} loop={true} />
    );
};

export default AnimatedImage;