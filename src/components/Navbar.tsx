import React, { useState } from "react";
import logo from "../images/main-logo.png";
import navbarMenu from "../images/navbarMenu.png";
import closeImg from "../images/close.png";
import logoTwo from "../images/main-logo2.png";
import menuTwo from "../images/navbarMenu2.png";
import { motion } from "framer-motion";

import { Link } from "gatsby";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <motion.div
      variants={variants}
      className={`relative bg-primary-navbarBg  ${
        !open
          ? "hover:bg-primary-white transition-colors duration-500"
          : "bg-primary-navbarBg"
      }`}
    >
      <motion.div className="md:container  mx-auto " id="navbar">
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
                <img
                  src={hover ? logoTwo : logo}
                  alt="TopSol"
                  decoding="async"
                />
              </Link>
            </div>
            <div>
              <img
                src={hover ? menuTwo : navbarMenu}
                onClick={() => setOpen(true)}
                className={` cursor-pointer ${open ? "hidden" : "block"} `}
              />
              <img
                src={closeImg}
                onClick={() => setOpen(false)}
                className={`h-6 w-6 cursor-pointer ${
                  open ? "block" : "hidden"
                } `}
              />
            </div>
            <div className={`w-full  ${open ? "block" : "hidden"}`} id="menu">
              <ul
                className="
                z-50
              mr-8
              md:pt-20 pt-8 md:pb-0 pb-2
              flex items-center flex-col w-full
              text-base text-white font-mont
              absolute bg-primary-navItemBg  left-0 right-0
              space-y-[53px]
               bg-opacity-80
              "
              >
                <li className="md:p-4 py-2 text-[35px] font-montserrat font-bold block hover:text-blue-400">
                  <Link to="/services">SERVICES</Link>
                </li>
                <li className="md:p-4 py-2 text-[35px] font-montserrat font-bold block hover:text-blue-400">
                  <Link to="/portfolio">PORTFOLIO</Link>
                </li>
                <li className="md:p-4 py-2 text-[35px] font-montserrat font-bold block hover:text-blue-400">
                  <Link to="/aboutUs">ABOUT US</Link>
                </li>
                <li className="md:p-4 py-2 text-[35px]  font-montserrat font-bold block hover:text-blue-400">
                  <Link to="/careers">CAREER</Link>
                </li>
                <li className="md:p-4 py-2 text-[35px] font-montserrat font-bold block hover:text-blue-400">
                  <Link to="/contactUs">CONTACT US</Link>
                </li>
                <li className="md:p-4 py-2  text-[35px] font-montserrat font-bold block hover:text-blue-400">
                  <Link to="/blogs">BLOG</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
