import React from "react";
import locate from "../../images/location.png";
import contact from "../../images/contact.png";
import email from "../../images/Icons/Mail_Send.png";
import footerBg from "../../images/footerBg.png";
import { Link } from "gatsby";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedIn.png";

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
                  TOPSOL
                </h1>
                <span className="text-[18px] font-medium ">
                  A Software development Company
                </span>
              </div>
              <div className="flex space-x-4 mt-[34px] ">
                <Link to="https://www.linkedin.com/company/topsolorg/mycompany/">
                  {/* <AiFillLinkedin className="w-[30px] h-[30px] " /> */}
                  <img
                    src={linkedin}
                    alt="linkedin"
                    decoding="async"
                    className="logo_default h-[30px] w-[30px]"
                  />
                </Link>
                <Link to="https://www.instagram.com/topsol_org/">
                  <img
                    src={instagram}
                    alt="instagram"
                    decoding="async"
                    className="logo_default h-[30px] w-[30px]"
                  />
                </Link>
                <Link to="https://www.facebook.com/topsol.org">
                  <img
                    src={facebook}
                    alt="facebook"
                    decoding="async"
                    className="logo_default h-[30px] w-[30px]"
                  />
                </Link>
              </div>
            </div>
            <div className="md:grid hidden justify-center">
              <h2 className="mb-[40px] text-[18px] font-semibold ">Services</h2>
              <ul className="text-base font-normal space-y-[26px] ">
                <li>DevOps</li>
                <li>UX/UI Design</li>
                <li>Web Development</li>
                <li>Business Strategy</li>
                <li>App Development</li>
              </ul>
            </div>
            <div className="md:grid hidden ">
              <h1 className="mb-[40px] text-[18px] font-semibold">
                Quick Links
              </h1>
              <ul className="text-base font-normal space-y-[26px]">
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/aboutUs">About us</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/contactUs">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="mt-[60px] md:mt-0">
              <h1 className="mb-[40px] text-[18px] ml-[7px]  font-semibold">
                Contact
              </h1>
              <ul className="text-base font-normal space-y-[16px]">
                <li className="flex my-4  items-center">
                  <img
                    src={locate}
                    alt="map"
                    decoding="async"
                    className="logo_default h-6 mr-4"
                  />
                  Sitara Techno Park, 2nd Floor, Lower Canal Road East
                  Faisalabad, Pakistan
                </li>
                <li className="flex flex-wrap my-4 items-center">
                  <img
                    src={contact}
                    alt="contact"
                    decoding="async"
                    className="logo_default h-6 mr-4"
                  />
                  +92-303-6362191 <br />
                  (041) 855 7244
                </li>
                <li className="flex flex-wrap my-4">
                  <img
                    src={email}
                    alt="email"
                    decoding="async"
                    className="logo_default h-6 mr-4"
                  />
                  info@topsol.org
                </li>
              </ul>
            </div>
          </div>

          <div className=" sm:grid hidden">
            <hr className="mt-[82px]  " />
            <div className="text-center text-white mt-[39px] mb-[10px] ">
              © 2023 | All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
