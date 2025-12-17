import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import PartnersSection from './PartnersSection/PartnersSection';
import IntroductionSection from './IntroductionSection/IntroductionSection';
import Services from './Services/Services';

const Home = () => {
    return (
        <>
        <HeroSection />
        <PartnersSection />
        <IntroductionSection />
        <Services />
        </>
    );
};

export default Home;