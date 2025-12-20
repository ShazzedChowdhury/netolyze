import React, { useEffect, useState } from "react";
import Button from "../Button";
import { NavLink } from "react-router";
import "./Navbar.css";
import Netolyze from "../Netolyze/Netolyze";

export const NavbarLinks = ({ isLarge = false }) => {
  const links = [
    { name: "About us", href: "#about-us" },
    { name: "Services", href: "#services" },
    { name: "Why us", href: "#why-us" },
  ];
  return (
    <>
      <div className={`flex flex-col justify-between ${isLarge && "flex-row gap-10"}`}>
        {links.map((link, idx) => {
          return (
            <li
              key={idx}
              className={`${
                isLarge && "text-white text-[1.1rem]"
              } border-b-2 border-transparent hover:border-b-[#7b53e8] transiton-[border] duration-500 ease-in`}
            >
              <NavLink to={link.href}>{link.name}</NavLink>
            </li>
          );
        })}
      </div>
      <div className="divider mt-0 mb-0 lg:hidden"></div>
      <Button
        content={"book a strategy call"}
        customStyle={"capitalize text-white text-sm inline-flex lg:hidden"}
      />
    </>
  );
};
const Navbar = () => {
  // const [ isScrolled, setScrolled ] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => setScrolled(window.scrollY > 50);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])
  return (
    <div className="navbar bg-tranparent px-5 py-5 lg:px-10">
      <div className="navbar-start">
        <span>
          <Netolyze />
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Navbar for tablet and desktop */}
          <NavbarLinks isLarge={true} />
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown">
          {/* Hamburger icon */}
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-lg right-1 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {/* Navbar hamburger */}
            <NavbarLinks />
          </ul>
        </div>
        {/* CTA button */}
        <Button
          content={"book a strategy call"}
          customStyle={"capitalize hidden lg:inline-flex"}
        />
      </div>
    </div>
  );
};

export default Navbar;
