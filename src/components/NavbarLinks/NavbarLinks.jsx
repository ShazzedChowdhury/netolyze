import { useNavigate } from "react-router";
import Button from "../Button";
import FooterLinks from "../FooterLinks/FooterLinks";
import Scroll from "../Scroll/Scroll";

export const NavbarLinks = ({ isLarge = false, isFooter=false }) => {

  const links = [
    { name: "About us", href: "#about-us" },
    { name: "Services", href: "#services" },
    { name: "Why us", href: "#why-us" },
    { name: "FAQ", href: "#faq" },
  ];
  return (
    <>
      {isFooter ? (
        <FooterLinks links={links} />
      ) : (
        <>
          <div
            className={`flex flex-col justify-between ${
              isLarge && "flex-row gap-10"
            }`}
          >
            {links.map((link, idx) => {
              return (
                <li
                  key={idx}
                  className={`${
                    isLarge && "text-white text-[1.1rem]"
                  } border-b-2 border-transparent hover:border-b-[#7b53e8] transiton-[border] duration-500 ease-in`}
                >
                  <Scroll name={link?.name} href={link?.href} />
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
      )}
    </>
  );
};

export default NavbarLinks