import React, { useState } from "react";
import LineAnimation from "../../../components/LineAnimation";
import ContactForm from "../../home/getInTouch/ContactForm";
import contactImage from '../../../images/contactImage.webp'
export default function Contact() {
  return (
    <div id="contact">
      <div className=" mt-[84px] flex md:w-[85%] w-[100%] items-center justify-center mx-auto  md:flex-row flex-col-reverse ">
        <div className=" md:w-[60%] w-[95%] justify-center items-center">
          <div className='flex flex-col mt-6 md:mt-0 items-center md:items-start'>
            <p className='text-4xl text-center sm:text-left md:text-5xl lg:text-6xl font-bold font-urbanist text-black'>
              LET’S GET <span className='text-primary lg:text-6xl font-bold font-urbanist'>IN TOUCH</span>
            </p>
            <LineAnimation width='200px' height='7px' backgroundColor='#00B8F1' marginTop="22px" />
          </div>
          <div className="mt-[52px]">
            <ContactForm addressInfo={false} />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center  w-[50%] ">
          <img src={contactImage} alt="" />
        </div>
      </div>
    </div>
  );
}
