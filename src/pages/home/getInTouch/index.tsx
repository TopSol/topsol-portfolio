import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import touchImg1 from "../../../images/touchImg1.png";
import check1 from "../../../images/check1.png";
import ContactForm from "./ContactForm";
import LineAnimation from "../../../components/LineAnimation";

function GetInTouch() {
  return (
    <div>
      <div className="flex flex-col mt-[137px] justify-center items-center">
        <div className="">
          <h1 className="font-extrabold font-montserrat text-[26px] md:text-[34px] lg:text-4xl  text-center">
            Get in Touch
          </h1>
        </div>
        <LineAnimation
          width="178px"
          height="7px"
          backgroundColor="#00B8F1"
          marginTop="18px"
        />
      </div>
      <div className=" mt-[84px] flex justify-center  md:container mx-auto ">
        <div className=" mr-[74px] lg:flex flex-col hidden ">
          <div className="flex justify-center">
            <img src={touchImg1} className="h-[102px] w-[144px]" />
          </div>
          <div>
            <h2 className="text-[30px] mt-[40px] font-semibold my-6">
              Let's Discuss Your Project
            </h2>
            <ul className=" mt-[36px] ">
              <li className="flex py-2  ">
                <img src={check1} className="mr-4 w-[26px]  h-[26px] mt-1" />{" "}
                <p className=" text-[22px] font-medium">
                  Efficient Communication
                </p>
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4 w-[26px]  h-[26px] mt-1" />{" "}
                <p className=" text-[22px] font-medium">Privacy and Security</p>
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4 w-[26px]  h-[26px] mt-1" />{" "}
                <p className=" text-[22px] font-medium">Fast Response</p>
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4 w-[26px]  h-[26px] mt-1" />{" "}
                <p className=" text-[22px] font-medium">
                  Reduced Email Clutter
                </p>
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4 w-[26px]  h-[26px] mt-1" />{" "}
                <p className=" text-[22px] font-medium">Customization</p>
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4 w-[26px]  h-[26px] mt-1" />{" "}
                <p className=" text-[22px] font-medium">Automated Routing</p>
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4 w-[26px]  h-[26px] mt-1" />{" "}
                <p className=" text-[22px] font-medium">Consistency</p>
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4 w-[26px]  h-[26px] mt-1" />{" "}
                <p className=" text-[22px] font-medium">Professionalism</p>
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4 w-[26px]  h-[26px] mt-1" />{" "}
                <p className=" text-[22px] font-medium">Less Spam</p>
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4 w-[26px]  h-[26px] mt-1" />{" "}
                <p className=" text-[22px] font-medium">Engagement</p>
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4 w-[26px]  h-[26px] mt-1" />{" "}
                <p className=" text-[22px] font-medium">24/7 Availability</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:w-[45%] w-[90%]  ">
          <GoogleReCaptchaProvider reCaptchaKey="6Ld3fhcoAAAAAH4-XdxVLnTpos0snr6RyoJDARtn">
            <ContactForm />
          </GoogleReCaptchaProvider>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
