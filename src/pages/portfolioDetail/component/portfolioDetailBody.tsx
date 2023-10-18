import React from "react";
import PrimaryBtn from "../../../components/PrimaryBtn";
import check1 from "../../../images/check1.png";
import LineAnimation from "../../../components/LineAnimation";
import { portfolioDetailType } from "../../../types/interfaceTypes";


export default function PortfolioDetailBody({ detail }: { detail: portfolioDetailType }) {
  return (
    <div>
      <div className="flex font-montserrat mt-[250px] md:mt-[350px] flex-col md:flex-row md:container justify-between  md:mx-auto">
        <div className="mx-6 md:0 md:w-[50%] lg:w-[50%]">
          <h1 className="text-[36px] mt-6 md:mt-0 md:text-[30px] lg:text-[36px] font-bold font-montserrat">
            About {detail?.title}
          </h1>
          {/* <p className="text-[22px] md:text-[18px] lg:text-[22px] font-montserrat mt-[36px]">
            {data?.aboutDesc}
          </p> */}
          <div
            dangerouslySetInnerHTML={{
              __html: `<p style="margin-top: 20px; font-size: 1.25rem; line-height: 1.75rem margin-left: 1.5rem; margin-right: 1.5rem; font-family: Montserrat, sans-serif; ">${detail?.aboutDesc}</p>`,
            }}
          />
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
            src={detail?.videoUrl}
            className="h-[50vh] my-[20px] mx-6 md:mx-0 md:my-[70px]"
            autoPlay
            muted
            loop
          ></video>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="">
            <h1 className="font-extrabold text-textColors  text-3xl md:text-3xl lg:text-4xl mt-6 text-center">
              {detail?.unlockTitle}
            </h1>
          </div>
          <LineAnimation
            width="178px"
            height="7px"
            backgroundColor="#00B8F1"
            marginTop="22px"
          />
        </div>

        <div className="md:w-[80%]  mx-5 md:mx-auto">
          <div className="font-montserrat font-medium text-[24px] text-black  break-words text-justify mt-5"
            dangerouslySetInnerHTML={{
              __html: `<p>        ${detail?.unlockDesc}    </p>`,
            }}
          />
        </div>
      </div>

      <div className="flex justify-center mx-4  mt-7">
        <img src={detail?.imageCollection?.[0]} alt="" className="w-[500px] " />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[36px] font-semibold my-6">Key Features</h2>
        <div className="mt-[53px] mx-[15px] flex flex-col ">
          {detail?.clientVisions?.map((item: any, index: number) => {
            return (
              <div key={index} className="md:container md:mx-auto">
                <div className="flex py-2 items-center">
                  <img
                    src={check1}
                    className="mr-4 md:h-[26px] h-[20px] md:w-[26px] w-[20px]"
                  />
                  <p className="text-[16px] md:text-[24px] font-medium  break-all">
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
