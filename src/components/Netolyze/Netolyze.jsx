import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo/netolyze-logo.png'
import footerLogo from '../../assets/logo/netolyze-footer-logo.png'
const Netolyze = ({isFooter=false}) => {
    return (
      <Link to={"/"} className="flex items-center">
        {/* <img src={logo} className='h-10' /> */}
        <p className="text-white font-bold text-3xl flex">
          <span
            className={`-mr-2 ${
              !isFooter && "gradient_color text-transparent bg-clip-text"
            }`}
          >
            Net
          </span>
          {isFooter ? (
            <img
              src={footerLogo}
              className="w-10 mt-1 -rotate-160"
              alt="netolyze logo"
            />
          ) : (
            <img src={logo} className="w-10 mt-1 -rotate-160" alt="netolyze logo" />
          )}
          <span
            className={`font-thin text-2xl -ml-2 mt-1 ${
              !isFooter && "gradient_color text-transparent bg-clip-text"
            }`}
          >
            lyze
          </span>
        </p>
      </Link>
    );
};

export default Netolyze;