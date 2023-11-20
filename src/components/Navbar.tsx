import React, { useState } from "react";
import closeImg from "../images/close.png";
import logoTwo from "../images/main_logo2.png";
import Arrowup from "../images/Icons/arrowup.svg";
import { motion } from "framer-motion";
import PrimaryBtn from "./PrimaryBtn";
import { Link } from "gatsby";
function Navbar() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    // <motion.div
    //   variants={variants}
    //   className={`relative  ${
    //     !open
    //       ? "hover:bg-primary-white transition-colors duration-500"
    //       : "bg-primary-navbarBg"
    //   }`}
    // >
    //   <motion.div className="md:container  mx-auto " id="navbar">
    //     <header>
    //       <nav
    //         className="
    //       sm:px-2
    //       px-[8px]
    //       flex
    //       w-full
    //      py-2
    //       items-center
    //       justify-between
    //       text-lg text-white

    //     "
    //       >
    //         <div className="py-2 w-full">
    //           <Link to="/">
    //             <img src={logoTwo} alt="TopSol" decoding="async" />
    //           </Link>
    //         </div>
    //         <div>
    //           {!open && (
    //             <div
    //               className="flex gap-1 -ml-4 md:-ml-0 items-center cursor-pointer "
    //               onClick={() => setOpen(true)}
    //             >
    //               <h3 className="text-black font-figtree text-[18px]">Menu</h3>
    //               <img
    //                 src={Arrowup}
    //                 className={` cursor-pointer ${open ? "hidden" : "block"} `}
    //               />
    //             </div>
    //           )}
    //           <img
    //             src={closeImg}
    //             onClick={() => setOpen(false)}
    //             className={`h-6 w-6 cursor-pointer ${
    //               open ? "block" : "hidden"
    //             } `}
    //           />
    //           {/* helo */}
    //         </div>
    //         <div className={`w-full  ${open ? "block" : "hidden"}`} id="menu">
    // <ul
    //   className="
    // z-50 mr-8
    // md:pt-20 pt-8 md:pb-0 pb-2
    // flex items-center flex-col h-screen w-full
    // text-base text-white font-mont
    // absolute bg-primary-navItemBg min-h-[100vh]  left-0 right-0
    // space-y-[53px]
    //  bg-opacity-80
    // "
    // >
    //   <li className=" text-[35px] font-montserrat font-bold block hover:text-blue-400">
    //     <Link to="/services">SERVICES</Link>
    //   </li>
    //   <li className=" text-[35px] font-montserrat font-bold block hover:text-blue-400">
    //     <Link to="/portfolio">PORTFOLIO</Link>
    //   </li>
    //   <li className="text-[35px] font-montserrat font-bold block hover:text-blue-400">
    //     <Link to="/aboutUs">ABOUT US</Link>
    //   </li>
    //   <li className=" text-[35px]  font-montserrat font-bold block hover:text-blue-400">
    //     <Link to="/careers">CAREER</Link>
    //   </li>
    //   <li className="text-[35px] font-montserrat font-bold block hover:text-blue-400">
    //     <Link to="/contactUs">CONTACT US</Link>
    //   </li>
    //   <li className=" text-[35px] font-montserrat font-bold block hover:text-blue-400">
    //     <Link to="/blogs">BLOG</Link>
    //   </li>
    // </ul>
    //         </div>
    //       </nav>
    //     </header>
    //   </motion.div>
    // </motion.div>
    <div className="bg-white py-4 ">
      <div className="lg:flex md:container hidden  mx-auto flex-row justify-between items-center">
        <div className="py-2 ml-2 ">
          <Link to="/">
            <img src={logoTwo} alt="TopSol" decoding="async" />
          </Link>
        </div>
        <div>
          <ul className="flex flex-row items-center justify-center space-x-6 xl:space-x-12 ">
            <li className=" text-[14px] xl:text-[16px] capitalize font-figtree font-semibold block hover:text-blue-400">
              <Link to="/services">Services</Link>
            </li>
            <li className=" text-[14px] xl:text-[16px] capitalize font-figtree font-semibold block hover:text-blue-400">
              <Link to="/portfolio">portfolio</Link>
            </li>
            <li className="text-[14px] xl:text-[16px] capitalize font-figtree font-semibold block hover:text-blue-400">
              <Link to="/aboutUs">about Us</Link>
            </li>
            <li className=" text-[14px] xl:text-[16px] capitalize  font-figtree font-semibold block hover:text-blue-400">
              <Link to="/careers">careers</Link>
            </li>
            <li className="text-[14px] xl:text-[16px] capitalize font-figtree font-semibold block hover:text-blue-400">
              <Link to="/contactUs">contact Us</Link>
            </li>
            <li className=" text-[14px] xl:text-[16px] capitalize font-figtree font-semibold block hover:text-blue-400">
              <Link to="/blogs">blogs</Link>
            </li>
          </ul>
        </div>
        <Link to="/contactUs">
          <div className="flex  justify-center md:justify-start mr-2">
            <PrimaryBtn
              text="Contact us"
              icon={true}
              additionalClasses="text-primary flex items-center font-figtree py-[12px] px-[18px]  xl:px-[26px] bg-none text-[16px] xl:text-[18px]  text-white rounded-[6px] "
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
