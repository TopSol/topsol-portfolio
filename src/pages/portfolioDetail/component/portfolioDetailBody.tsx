import React from "react";
import PrimaryBtn from "../../../components/PrimaryBtn";
import check1 from "../../../images/check1.png";
import LineAnimation from "../../../components/LineAnimation";
import portfolioDetails from "../../../images/portfolio-details.png";
import { portfolioImg } from "../../../staticData/portfolioData";
import porfolioDetailsStar from "../../../images/porfolioDetailsStar.png";
export default function PortfolioDetailBody({ data }: any) {
  const shadowStyles = {
    boxShadow: "0px 16px 32px 0px rgba(98, 183, 210, 0.25)",
  };
  return (
    <div>
      {/* <div className="flex font-montserrat mt-[250px] md:mt-[350px] flex-col md:flex-row md:container justify-between  md:mx-auto"> */}
      {/* <div className="mx-6 md:0 md:w-[50%] lg:w-[50%]">
          <h1 className="text-[36px] mt-6 md:mt-0 md:text-[30px] lg:text-[36px] font-bold font-montserrat">
            About {data?.title}
          </h1> */}
      {/* <p className="text-[22px] md:text-[18px] lg:text-[22px] font-montserrat mt-[36px]">
            {data?.aboutDesc}
          </p> */}
      {/* <div
            dangerouslySetInnerHTML={{
              __html: `<p style="margin-top: 20px; font-size: 1.25rem; line-height: 1.75rem margin-left: 1.5rem; margin-right: 1.5rem; font-family: Montserrat, sans-serif; ">${data?.aboutDesc}</p>`,
            }}
          />
        </div> */}

      {/* <div className=" md:w-[50%]  mt-6 md:mt-0 mx-6 md:0 lg:w-[30%] border-2 border-gray-300 px-[40px] rounded-[10px] py-[40px]">
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
        </div> */}
      {/* </div> */}
      {/* <div> */}
      <div
        className="mt-[250px] md:mt-[270px] py-[58px] px-[40px]  rounded-[20px] bg-white  w-[80%] flex justify-center flex-col mx-auto"
        style={shadowStyles}
      >
        <h1 className="text-textColors font-urbanist  font-bold md:text-[34px] text-[25px] leading-[150%]">
          Project <span className="text-primary">Overview</span>
        </h1>
        <p className="text-[#333] font-figtree mt-[15px] font-light md:text-[20px] text-[16px] leading-[150%]">
          {data?.overview}
        </p>
        <h1 className="text-textColors font-urbanist mt-[20px] font-bold  md:text-[34px] text-[25px] leading-[150%]">
          The Problem <span className="text-primary">Statement</span>
        </h1>
        <p className="text-[#333] font-figtree mt-[15px] font-light md:text-[20px] text-[16px] leading-[150%]">
          {data?.problem}
        </p>
      </div>
      <div>
        {/* <div className="flex justify-center mx-6 md:mx-0">
          <video
            src={data?.videoUrl}
            className="h-[50vh] my-[20px] mx-6 md:mx-0 md:my-[70px]"
            autoPlay
            muted
            loop
          ></video>
        </div> */}

        <div className="flex flex-col justify-center items-center">
          <div className="">
            <h1 className="font-extrabold text-textColors  text-3xl md:text-3xl lg:text-4xl mt-6 text-center">
              {data?.unlockTitle}
            </h1>
          </div>
          <LineAnimation
            width="178px"
            height="7px"
            backgroundColor="#00B8F1"
            marginTop="22px"
          />
        </div>
        <div className="flex md:flex-row flex-col  justify-around mt-[49px]">
          {portfolioImg?.map((item: any, index: any) => (
            <div className="bg-[#E7F9FF]   flex flex-col justify-center mt-5 p-3 rounded-[10px]  items-center">
              <div>
                <img src={item.img} alt="" />
              </div>
              <h1 className="text-center font-figtree md:text-[20px] text-[16px] leading-[150%] font-light mt-2 w-[179px]">
                {data && data.goals && data.goals[index]
                  ? data.goals[index]
                  : "Default Value"}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-col bg-cover py-[90px] my-20 mx-auto"
        style={{
          backgroundImage: `url(${data?.bg})`,
        }}
      >
        <div className="flex flex-col  container mx-auto items-center md:items-start">
          <h2 className="text-[36px]  text-textColors font-semibold my-6">
            TOP <span className="text-primary">FEATURES </span>
          </h2>
          <LineAnimation
            width="178px"
            height="7px"
            backgroundColor="#00B8F1"
            marginTop="0px"
          />
          <div className="mt-[53px]  flex flex-col   mx-4 md:mx-0">
            {data?.clientVisions?.map((item: any, index: number) => {
              return (
                <div key={index} className="md:container md:mx-auto">
                  <div className="flex py-2 items-center ">
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
    </div>
  );
}
