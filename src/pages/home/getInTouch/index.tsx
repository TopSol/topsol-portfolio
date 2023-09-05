import React from "react";
import touchImg1 from "../../../images/touchImg1.png";
import check1 from "../../../images/check1.png";
import ContactForm from "./ContactForm";

function GetInTouch() {
  return (
    <div className=" sm:px-24 px-10 md:container md:mx-auto ">
      <div className="flex flex-col items-center">
        <div>
          <h1 className="font-extrabold text-3xl md:text-3xl lg:text-4xl mt-[137px] text-center">
            Get In Touch
          </h1>
        </div>
        <div className="">
          <div
            className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#00B8F1] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44 mt-[18px] "
          ></div>
        </div>
      </div>

      <div className=" mt-[84px] ">
        <div className="lg:flex flex-col  hidden">
          <div>
            <img src={touchImg1} className="w-[144px h-[102px]]" />
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

        <div className="">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
