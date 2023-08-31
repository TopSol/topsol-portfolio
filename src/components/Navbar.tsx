import React, { useState } from "react";
import logo from "../images/main-logo.png";
import navbarMenu from "../images/navbarMenu.png";
import closeImg from "../images/close.png";
import logoTwo from "../images/main-logo2.png";
import menuTwo from "../images/navbarMenu2.png";

import { Link } from "gatsby";
function Navbar() {
  const [open, setopen] = useState(false);
  const [hover, setHover] = useState(false);

  const logoImage = hover && !open ? logoTwo : logo;
  const menuIcon = hover && !open ? menuTwo : navbarMenu;
  return (
    <div
      className={`relative bg-primary-navbarBg ${
        !open ? "hover:bg-primary-white transition-colors duration-500" : "bg-primary-navbarBg"
      }`}
    >
      <div className="md:container  mx-auto " id="navbar">
        <header>
          <nav
            className="
          px-14
          flex
          w-full
         
          flex-wrap
          items-center
          justify-between
          text-lg text-white
           
        "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="py-2">
              <Link to="/">
                <img src={logoImage} alt="TopSol" decoding="async" />
              </Link>
            </div>
            <div>
              <img
                src={menuIcon}
                onClick={() => setopen((p) => !p)}
                className={` cursor-pointer ${open ? "hidden" : "block"} `}
              />
              <img
                src={closeImg}
                onClick={() => setopen(false)}
                className={`h-6 w-6 cursor-pointer ${
                  open ? "block" : "hidden"
                } `}
              />
            </div>
            <div className={`w-full  ${open ? "block" : "hidden"}`} id="menu">
              <ul
                className="
              mr-8
              pt-20
              flex justify-center items-center flex-col w-screen
              text-base text-white font-mont
              absolute bg-primary-navItemBg  left-0 right-0
               bg-opacity-80
              "
              >
                <li className="md:p-4 py-2 text-lg font-montserrat font-bold block hover:text-blue-400">
                  <Link to="/">SERVICES</Link>
                </li>
                <li className="md:p-4 py-2 text-lg font-montserrat font-bold block hover:text-blue-400">
                  <Link to="/about">PORTFOLIO</Link>
                </li>
                <li className="md:p-4 py-2 text-lg font-montserrat font-bold block hover:text-blue-400">
                  <Link to="/#services">ABOUT US</Link>
                </li>
                <li className="md:p-4 py-2 text-lg font-montserrat font-bold block hover:text-blue-400">
                  <Link to="/#contact-us">CAREER</Link>
                </li>
                <li className="md:p-4 py-2 text-lg font-montserrat font-bold block hover:text-blue-400">
                  <Link to="/blog">CONTACT US</Link>
                </li>
                <li className="md:p-4 py-2 text-lg font-montserrat font-bold block hover:text-blue-400">
                  <Link to="/blog">BLOG</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
