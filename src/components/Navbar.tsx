import React, { useState } from "react";
import closeImg from "../images/close.png";
import logoTwo from "../images/main_logo2.png";
import Arrowup from "../images/Icons/arrowup.svg";
import { motion } from "framer-motion";
import PrimaryBtn from "./PrimaryBtn";
import { Link } from "gatsby";
function Navbar() {


  return (
    <div className="bg-white py-4 ">
      <div className="lg:flex md:container hidden  mx-auto flex-row justify-between items-center">
        <div className="py-2 ml-2 ">
          <Link to="/">
            <img src={logoTwo} alt="TopSol" decoding="async" />
          </Link>
        </div>
        <div>
          <ul className="flex flex-row items-center justify-center space-x-6 xl:space-x-12 ">
            <li className=" text-[14px] xl:text-[16px] capitalize font-figtree text-[#333] font-semibold block hover:text-blue-400">
              <Link to="/services" activeClassName="border-b-4 border-[#00B8F1] pb-2 ">Services</Link>
            </li>
            <li className=" text-[14px] xl:text-[16px] capitalize font-figtree text-[#333] font-semibold block hover:text-blue-400">
              <Link to="/portfolio" activeClassName="border-b-4 border-[#00B8F1] pb-2 ">portfolio</Link>
            </li>
            <li className="text-[14px] xl:text-[16px] capitalize font-figtree text-[#333] font-semibold block hover:text-blue-400">
              <Link to="/aboutUs" activeClassName="border-b-4 border-[#00B8F1] pb-2 ">about Us</Link>
            </li>
            <li className=" text-[14px] xl:text-[16px] capitalize  font-figtree text-[#333] font-semibold block hover:text-blue-400">
              <Link to="/careers" activeClassName="border-b-4 border-[#00B8F1] pb-2 ">careers</Link>
            </li>
            <li className=" text-[14px] xl:text-[16px] capitalize font-figtree text-[#333] font-semibold block hover:text-blue-400">
              <Link to="/blogs" activeClassName="border-b-4 border-[#00B8F1] pb-2 ">blogs</Link>
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
