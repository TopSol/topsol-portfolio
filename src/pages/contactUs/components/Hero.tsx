import React from "react";
import contactUs from "../../../images/contactUs.png";
import { Link } from "gatsby";

export default function Hero() {
  return (
    <div className=' bg-primary py-[120px]'>
      <div className='md:container  md:mx-auto mx-3   flex flex-col justify-center  text-center  '>
        <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-[60px] mb-0 md:mb-[21px] font-urbanist  text-white font-bold'>CONTACT <span className='text-textColors  xl:text-[60px] font-urbanist font-bold '>US</span></h1>
        <p className='text-[20px] md:text-lg lg:text-xl xl:text-[24px] mt-[26px] font-figtree font-light  md:mt-[10px] text-white  '>Let's explore, construct, and nurture your online enterprise</p>
      </div>
    </div>
  );
}
