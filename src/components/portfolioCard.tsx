import React from "react";

export default function PortfolioCard({ data, index }) {
  return (
    <div>
      <div
        className={`flex flex-col md:mt-[102px] mt-[30px]  md:container md:mx-auto  items-center ${
          index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div
          className={`xl:w-[60%] lg:w-[50%] md:w-[45%] my-10 md:my-0 ${
            index % 2 == 0 ? "justify-end " : "justify-start "
          }`}
        >
          <img src={data?.imageUrl} alt="#" />
        </div>
        <div
          className={`xl:w-[50%] lg:w-[45%] md:w-[50%] flex flex-col  mx-5 md:mx-0 ${
            index % 2 == 0 ? "justify-end " : "justify-start "
          }`}
        >
          <div className="flex ">
            <div className="flex justify-center mt-3">
              <div
                className={`before:content-[''] before:block 
                     before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
                     before:transition before:ease-in-out before:duration-1000
                     w-[49px] h-[7px]  mr-[8px] mt-1 rounded-2xl`}
                style={{ backgroundColor: "#00B8F1" }}
              ></div>
            </div>
            <h1
              className={`text-[18px] lg:text-[20px]  xl:text-[25px] font-semibold  text-primary`}
            >
              {data?.subTitle}
            </h1>
          </div>
          <h3 className=" text-[25px] lg:text-[30px] xl:text-[40px] leading-normal font-semibold my-[16px] xl:my-[37px] ">
            {data?.title}
          </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: `<p style="margin-top: 20px; font-size: 1.25rem; line-height: 1.75rem margin-left: 1.5rem; margin-right: 1.5rem; font-family: Montserrat, sans-serif; ">${data?.description}</p>`,
            }}
          />
          {/* <p
            className={"text-[15px]  lg:text-[20px] font-medium whitespace-pre"}
          >
            {data?.description}
          </p> */}
        </div>
      </div>
    </div>
  );
}
