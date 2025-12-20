import React from "react";
import Netolyze from "../Netolyze/Netolyze";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import FooterLinks from "../FooterLinks/FooterLinks";
import facebook from '../../assets/social-icons/facebook.png'
import youtube from '../../assets/social-icons/youtube.png'
import linkedin from '../../assets/social-icons/linkedin.png'

export const Footer = () => {
   const services = [
     { name: "About usSearch Engine Optimization", href: "" },
     { name: "ServicesWeb Design & Development", href: "" },
     { name: "Social Media Marketing", href: "" },
     { name: "Brand Design", href: "" },
   ];
   
   const socials = [
    {icon: facebook, href: "" },
    {icon: linkedin, href: "" },
    {icon: youtube, href: "" }
   ]
 
  return (
    <div className="relative mt-16 gradient_color">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7B53E8" />
            <stop offset="100%" stopColor="#5831C3" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      {/* main footer container */}
      <div className="container mx-auto px-5 md:px-10 pt-20 text-white">
        <div className="grid gap-10 row-gap-10 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Netolyze />
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm text-deep-purple-50">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        
            <div className="lg:col-span-2">
              <p className="font-semibold tracking-wide">Service</p>
              <FooterLinks links={services} isLink={false} />
            </div>
            <div>
              <p className="font-semibold tracking-wide">Links</p>
              <NavbarLinks isFooter={true} />
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Social links
              </p>
              <FooterLinks links={socials} isSocial={true} />
            </div>
          
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-white sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2025 Netolyze All rights reserved.
          </p>
          {/* social icons */}
          <div className="flex items-center mt-4 space-x-4 sm:mt-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
