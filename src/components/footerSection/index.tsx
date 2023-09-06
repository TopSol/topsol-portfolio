import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillSkype } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import locate from "../../images/location.png";
import contact from "../../images/contact.png";
import email from "../../images/email.png";
import footerBg from "../../images/footerBg.png";

export default function Footer() {
  return (
    <div
      className="bg-cover bg-center font-mont p-10 "
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      <div className=" md:container md:mx-auto ">
        <div className="flex flex-col  py-6 text-white">
          <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <div>
              <div className="">
                <h1 className="mb-4 text-primary text-[28px]  font-medium ">
                  TopSol Solutions
                </h1>
                <span className="text-[18px] font-medium ">
                  A Software development Company
                </span>
              </div>
              <div className="flex space-x-4 mt-[34px] ">
                <AiFillLinkedin className="w-[30px] h-[30px] " />
                <BsInstagram  className="w-[30px] h-[30px] " />
                <FaFacebook  className="w-[30px] h-[30px] " />

              </div>
            </div>
            <div className="sm:grid hidden">
              <h2 className="mb-[40px] text-[18px] font-semibold ">Services</h2>
              <ul className="text-base font-normal space-y-[26px] " >
                <li >DevOps</li>
                <li >UX/UI Design</li>
                <li >Web Development</li>
                <li >Business Strategy</li>
                <li >App Development</li>
              </ul>
            </div>
            <div className="sm:grid hidden">
              <h1 className="mb-[40px] text-[18px] font-semibold">Quick Links</h1>
              <ul className="text-base font-normal space-y-[26px]">
                <li >Blog</li>
                <li >About us</li>
                <li >Portfolio</li>
                <li >Careers</li>
                <li >Contact us</li>
              </ul>
            </div>
            <div className="">
              <h1 className="mb-[40px] text-[18px] font-semibold">Contact</h1>
              <ul className="text-base font-normal space-y-[26px]" >
                <li className="flex my-4 ">
                  <img
                    src={locate}
                    alt="map"
                    decoding="async"
                    className="logo_default h-6 mr-4"
                  />
                  Sitara Techno Park, 2nd Floor, Lower Canal Road East
                  Faisalabad, Pakistan
                </li>
                <li className="flex flex-wrap my-4">
                  <img
                    src={contact}
                    alt="contact"
                    decoding="async"
                    className="logo_default h-6 mr-4"
                  />
                  +92-303-6362191
                </li>
                <li className="flex flex-wrap my-4">
                  <img
                    src={email}
                    alt="email"
                    decoding="async"
                    className="logo_default h-6 mr-4"
                  />
                  admin@topsol.org
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="border-t  border-white my-4 w-full sm:grid hidden"></div>
           */}
            <hr className="mt-[82px]" />
          <div className="text-center text-white mt-[39px] mb-[70px] ">
            © 2023 | All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}
