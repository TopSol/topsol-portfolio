import React from "react";
import PrimaryBtn from "../../../components/PrimaryBtn";
import check1 from "../../../images/check1.png";
import { dataList } from "../data";

export default function PortfolioDetailBody({ data }) {
  return (
    <div>
      <div className="flex font-montserrat mt-[250px] md:mt-[350px] flex-col md:flex-row md:container justify-between  md:mx-auto">
        <div className=" mx-6 md:0 md:w-[50%] lg:w-[50%]">
          <h1 className="text-[36px] md:text-[30px] lg:text-[36px] font-bold font-montserrat  ">
            About Video Downloader
          </h1>
          <p className="text-[22px] md:text-[18px]  lg:text-[22px]  font-montserrat mt-[36px] ">
            {data?.aboutDesc}
          </p>
          <p className="mt-[30px] text-[22px] md:text-[18px]  lg:text-[22px]  ">
            The app's intuitive interface makes organizing and accessing your
            downloaded content a breeze, allowing you to curate your own
            personalized video library
          </p>
        </div>
        <div className=" md:w-[50%]  mt-6 md:mt-0 mx-6 md:0 lg:w-[30%] border-2 border-gray-300 px-[40px] rounded-[10px] py-[40px]">
          <h1 className="text-[25px] font-bold font-montserrat text-textColors ">
            Looking for something similar?
          </h1>
          <p className="text-[18px] font-montserrat my-[28px] ">
            Our experienced and talented team is always ready to help you
            achieve your goal.Our team has provided a lot of people their
            business solutions
          </p>
          <div className="mt-[28px]">
            <PrimaryBtn text="Content Us" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center mx-6 md:mx-0">
          <video
            src={data?.videoUrl}
            className="h-[50vh] my-[20px] mx-6 md:mx-0 md:my-[70px]"
            autoPlay
            muted
            loop
          ></video>
        </div>

        <div className="flex flex-col justify-center items-center     ">
          <div className="">
            <h1 className="font-extrabold text-textColors font-montserrat text-3xl md:text-3xl lg:text-4xl mt-6 text-center">
              Unlock Media Magic with VidMaster
            </h1>
          </div>
          <div
            className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#00B8F1] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44 mt-4"
          ></div>
        </div>

        <div className="md:container mx-auto">
          <p className=" text-xl mx-6 md:text-2xl font-montserrat  mt-[20px] ">
            VidMaster stands as a mobile application designed to redefine your
            entertainment experience. Seamlessly search and instantly download
            videos from a variety of platforms with this user-friendly app.
            <br />
            <br />
            The app empowers content seekers to swiftly download their desired
            videos by simply entering the video's URL. It's a one-tap solution
            to enjoying your favorite videos offline, anytime.
            <br />
            <br />
            VidMaster not only caters to users but also provides a space for
            content creators. Video enthusiasts can promote their content by
            setting up professional profiles on the service provider interface.
            With a consumer interface, a service provider portal, and an admin
            panel, VidMaster is designed for a seamless experience
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-7">
        <img src={data?.imageCollection?.[0]} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[36px] font-semibold my-6">Client's Vision</h2>
        <div className="mt-[53px] mx-[15px] flex flex-col ">
          {data?.clientVisions?.map((item: any, index) => {
            return (
              <div>
                <div className="flex py-2 items-center">
                  <img
                    src={check1}
                    className="mr-4 md:h-[26px] h-[20px] md:w-[26px] w-[20px]"
                  />
                  <p className="text-[16px] md:text-[24px] font-medium ">
                    {item}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
