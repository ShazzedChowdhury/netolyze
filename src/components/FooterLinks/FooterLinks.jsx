import React from 'react';
import { Link } from 'react-router';

const FooterLinks = ({links, isSocial=false, isLink=true}) => {

    if(!isLink) {
        return (
          <ul className="mt-2 space-y-2">
            {links.map((link, idx) => {
              return (
                <li key={idx}>
                  {link.name}
                </li>
              );
            })}
          </ul>
        );
    }
    return (
      <>
        {isSocial ? (
          <ul className=" flex gap-2 mt-2 space-y-2">
            {links.map((link, idx) => {
              return (
                <li key={idx}>
                  <Link to={link?.href}>
                    <img
                      src={link.icon}
                      alt="social image"
                      className="w-10 border-2 border-white rounded-full hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul className="mt-2 space-y-2">
            {links.map((link, idx) => {
              return (
                <li key={idx}>
                  <Link to={link.href}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
};

export default FooterLinks;