import React, { useState } from "react";
import logo from "../images/main-logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "gatsby";
function Navbar() {
  const [open, setopen] = useState(false);
  return (
    <div className=" bg-[#0B234C] pt-[8px]">
      <div className="md:container  mx-auto " id="navbar">
        <header>
          <nav
            className="
          px-4
          flex
          py-4
          w-full
          md:py-0
         
          flex-wrap
          items-center
          justify-between
          text-lg text-white
        "
          >
            <div className="w-[150px]">
              <Link to="/">
                <img
                  src={logo}
                  alt="TopSol"
                  decoding="async"
                  className="logo_default"
                />
              </Link>
            </div>
            <div>
              <FaBars
                onClick={() => setopen((p) => !p)}
                className="h-6 w-6 cursor-pointer md:hidden block"
              />
            </div>
            <div
              className={` w-full md:flex md:items-center md:w-auto ${
                open ? "flex" : "hidden"
              }`}
              id="menu"
            >
              <ul
                className="
              mr-8
              pt-4
              md:flex
              md:pt-0
              md:justify-
              text-base text-white font-mont
               
              "
              >
                <li className="md:p-4 py-2 block hover:text-blue-400">
                  <Link to="/">SERVICES</Link>
                </li>
                <li className="md:p-4 py-2 block hover:text-blue-400">
                  <Link to="/about">PORTFOLIO</Link>
                </li>
                <li className="md:p-4 py-2 block hover:text-blue-400">
                  <Link to="/#services">ABOUT US</Link>
                </li>
                <li className="md:p-4 py-2 block hover:text-blue-400">
                  <Link to="/#contact-us">CAREER</Link>
                </li>
                <li className="md:p-4 py-2 block hover:text-blue-400">
                  <Link to="/blog">CONTACT US</Link>
                </li>
                <li className="md:p-4 py-2 block hover:text-blue-400">
                  <Link to="/blog">BLOG</Link>
                </li>
                {/* <li className="md:p-4 py-2 block hover:text-blue-400">
                  <Link to="/careers">Careers</Link>
                </li> */}
                {/* <li className="md:p-4 py-2 block hover:text-blue-400">
                  <Link to="/detail">Detail</Link>
                </li>
               
                {/* <li className="flex w-full md:hidden">
                  <button
                    type="button"
                    className="mr-1 inline-block px-6 py-2.5 border-2 border-gray-200 hover:border-blue-500 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-white hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                </li>
                <li className="flex w-full md:hidden">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-400 border-2 border-blue-400 hover:border-blue-500  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Sign Up
                  </button>
                </li> */}
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Navbar;