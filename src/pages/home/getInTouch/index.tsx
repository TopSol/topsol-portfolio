import React from "react";
import touchImg1 from "../../../images/touchImg1.png";
import check1 from "../../../images/check1.png";
import ContactForm from "./ContactForm";

function GetInTouch() {
  return (
    <div>
       <div className="flex flex-col mt-[137px] justify-center items-center">
        <div className="">
          <h1 className="font-extrabold font-montserrat text-[26px] md:text-[34px] lg:text-4xl  text-center">
          Get in Touch
          </h1>
        </div>
        <div
            className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#00B8F1] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44 mt-[18px]"
          ></div>
          </div>
      <div className=" mt-[84px] flex justify-center items-center md:container mx-auto ">
        <div className=" mr-[74px]">
          <div>
            <img src={touchImg1} className="" />
          </div>
          <div>
            <h2 className="text-2xl font-bold my-6">
              Let's Discuss Your Project
            </h2>
            <ul className="">
              <li className="flex py-2 ">
                <img src={check1} className="mr-4" /> Efficient Communication
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4" /> Privacy and Security{" "}
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4" /> Fast Response{" "}
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4" /> Reduced Email Clutter{" "}
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4" /> Customization{" "}
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4" /> Automated Routing{" "}
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4" /> Consistency{" "}
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4" /> Professionalism{" "}
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4" /> Less Spam{" "}
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4" /> Engagement{" "}
              </li>
              <li className="flex py-2">
                <img src={check1} className="mr-4" /> 24/7 Availability
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[40%] ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
