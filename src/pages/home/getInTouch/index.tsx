import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import touchImg1 from "../../../images/touchImg1.webp";
import ContactForm from "./ContactForm";
import LineAnimation from "../../../components/LineAnimation";

function GetInTouch() {
  return (
    <div className=" mt-[84px] flex md:w-[80%] w-[100%] items-center justify-center mx-auto  md:flex-row flex-col ">
      <div className=" flex flex-col justify-center items-center md:items-start w-[50%] ">
        <div className=" flex ">
          <img src={touchImg1} className="" />
        </div>
        <h1 className="font-extrabold mt-4 uppercase font-urbanist text-[26px] md:text-[40px] lg:text-[60px]  md:text-left  text-center">
          let’s
        </h1>
        <h1 className="font-extrabold uppercase font-urbanist text-[26px] md:text-[40px] lg:text-[60px]  md:text-left  text-center">
          get in <span className="text-primary">touch</span>
        </h1>
        <LineAnimation
          width="160px"
          height="7px"
          backgroundColor="#00B8F1"
          marginTop="10px"
        />
      </div>
      <div className=" md:w-[60%] w-[95%] justify-center items-center">
        <GoogleReCaptchaProvider reCaptchaKey="6Ld3fhcoAAAAAH4-XdxVLnTpos0snr6RyoJDARtn">
          <ContactForm addressInfo={true} />
        </GoogleReCaptchaProvider>
      </div>
    </div>
  );
}

export default GetInTouch;
