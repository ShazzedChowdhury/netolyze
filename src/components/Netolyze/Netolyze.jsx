import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png'

const Netolyze = () => {
    return (
        <Link to={"/"} className='flex items-center'>
            {/* <img src={logo} className='h-10' /> */}
            <p className='text-white font-bold text-2xl'>Neto<span className='font-thin'>lyze</span></p>
        </Link>
    );
};

export default Netolyze;