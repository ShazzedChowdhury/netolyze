import React from 'react';
import Lottie from 'lottie-react';
import growthChart from "../../../../assets/animations/Growth-Chart.json";

const BannerAnimation = () => {
    return (
       <Lottie className='max-w-lg mx-auto' animationData={growthChart} loop={true} />
    );
};

export default BannerAnimation;