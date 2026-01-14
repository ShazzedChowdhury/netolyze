import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo/netolyze-logo.png'
import footeLogo from '../../assets/logo/footer-netolyze-logo.png'
import magnifierLogo from "../../assets/logo/magnifier.png";
const Netolyze = ({isFooter=false}) => {
    return (
      <Link to={"/"} className="flex relative">
        {/* <img src={logo} className='h-10' /> */}
        {isFooter ? (
          <img src={footeLogo} className="w-10.5" alt="logo" />
        ) : (
          <img src={logo} className="w-10" alt="logo" />
        )}

        <p className="text-white font-bold text-3xl flex absolute top-2 left-10.5">
          <span className={`-mr-2 ${!isFooter && " bg-clip-text"}`}>et</span>
          <img
            src={magnifierLogo}
            className="w-10 mt-1 -rotate-160"
            alt="magnifier image"
          />
          <span
            className={`font-thin text-2xl -ml-2 mt-1 ${
              !isFooter && "bg-clip-text"
            }`}
          >
            lyze
          </span>
        </p>
      </Link>
    );
};

export default Netolyze;