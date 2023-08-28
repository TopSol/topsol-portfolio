import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import locate from '../../images/location.png'
import contact from '../../images/contact.png'
import email from '../../images/email.png'
export default function Footer() {
  return (
    <div className="main-footer-container bg-[#1A1A1A] font-mont px-10">
      <div className="md:container md:mx-auto " id="contect-us">
        <div className="flex flex-col  py-6 text-white">
          <div className="flex justify-between">
            <div>
              <div className="mb-8">
                <h1 className="mb-4 text-blue-700 font-extrabold">
                  TopSol Solutions
                </h1>
                <span>A Software development Company</span>
              </div>
              <div className="flex space-x-6 pt-4 md:p-0   text-white text-2xl mt-3">
                <a
                  href="https://www.linkedin.com/company/topsolorg/"
                  aria-label="Topsol LinkedIn page"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/topsol.org"
                  aria-label="Topsol Facebook Page"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.instagram.com/topsol_org/"
                  aria-label="Topsol Instagram page"
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
            <div className="">
              <h2 className="mb-6">Services</h2>
              <ul>
                <li className="my-3">DevOps</li>
                <li className="my-3">UX/UI Design</li>
                <li className="my-3">Web Development</li>
                <li className="my-3">Business Strategy</li>
                <li className="my-3">App Development</li>
              </ul>
            </div>
            <div className="">
              <h1 className="mb-6">Quick Links</h1>
              <ul>
                <li className="my-3">Blog</li>
                <li className="my-3">About us</li>
                <li className="my-3">Portfolio</li>
                <li className="my-3">Careers</li>
                <li className="my-3">Contact us</li>
              </ul>
            </div>
            <div className="">
              <h1 className="mb-6">Contact</h1>
              <ul>
                <li className="flex my-4 flex-wrap">
                <img src={locate} 
                  alt="map"
                  decoding="async"
                  className="logo_default h-6 mr-4"/>
                  Sitara Techno Park, 2nd Floor, Lower Canal Road East
                  Faisalabad, Pakistan
                </li>
                <li className="flex flex-wrap my-4">
                <img src={contact} 
                  alt="contact"
                  decoding="async"
                  className="logo_default h-6 mr-4"/> 
                    +92-303-6362191</li>
                 <li className="flex flex-wrap my-4">
                 <img src={email} 
                  alt="email"
                  decoding="async"
                  className="logo_default h-6 mr-4"/>
                    admin@topsol.org</li>
        
              </ul>
            </div>
          </div>

          <div className="border-t border-white my-4 w-full"></div>

          <div className="text-center text-white">
            © 2023 | All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}
