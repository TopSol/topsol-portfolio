import React, { useState } from "react";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import commentImage from "../../../../images/commentImage.png";
import CircleImage from "../../../../components/CircleImage";
export default function CommentSection() {
  return (
    <div>
      <div className=" mt-[96px]  bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo pb-[86px]">
        <div className="md:w-[80%] md:justify-center md:mx-auto">
          <div className=" flex justify-center  ">
            <h1 className="text-[22px] md:text-[45px] text-white  font-[700px] mt-[36px] justify-center text-center">
              Leave comment here
            </h1>
          </div>
          <div className=" flex justify-center mt-[31px] ">
            <img
              src={commentImage}
              className="w-[258px] h-[204px] align-center"
              alt=""
            />
          </div>
          <div className="mt-[49px] md:w-[90%]  md:container md:mx-auto  flex flex-col md:flex-row  justify-center items-center ">
            <div className="mb-[24px] md:mb-0 md:mr-[21px] w-[85%]  md:container md:mx-auto justify-center">
              <input
                type="text"
                className="px-[10px] py-[17px] outline-none rounded-md w-[100%]  bg-light_Grey_bg"
                placeholder="Name"
              />
            </div>
            <div className="mb-[24px] md:mb-0 w-[85%]  md:container md:mx-auto justify-center ">
              <input
                type="Email"
                className="px-[10px] py-[17px] outline-none rounded-md w-[100%] bg-light_Grey_bg "
                placeholder="Email"
              />
            </div>
          </div>
          <div className="w-[100%]  md:container md:mx-auto flex flex-col justify-center items-center ">
            <div className="w-[85%] md:w-[100%] relative  ">
              <div className="absolute top-0 md:right-0 lg:right-0 xl:right-4">
                <CircleImage showFlex={false} />
              </div>
              <div className=" flex md:w-[100%]  justify-center ">
                <textarea
                  className="outline-none px-[10px] md:w-[90%] w-[100%]  md:mt-[40px] py-[17px] h-[164px] md:h-[275px] bg-light_Grey_bg rounded-md"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="md:mt-[42px]  mt-[22px] md:w-[90%]  md:container md:mx-auto  flex flex-col justify-center items-center md:items-end ">
            <PrimaryBtn
              text="Send"
              additionalClasses=" w-[85%] md:w-[198px] rounded-md  bg-white  font-semibold hover:bg-primary hover:text-white text-primary "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
