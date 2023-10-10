
import React from "react";

export default function PortfolioCard({
  data,
  index,
  textColor,
  subTitleColor,
  lineColor,
}: any) {
  return (
    <div>
      <div
        className={`flex flex-col md:mt-[102px] mt-[30px]  md:container md:mx-auto gap-x-[122px] xl:px-0 md:px-4 justify-center  items-center ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
      >
        <div
          className={` sm:px-0  px-4 my-10 md:my-0 ${index % 2 == 0 ? "justify-end " : "justify-end "
            }`}
        >
          {" "}
          <img
            src={data?.imageUrl}
            alt="#"
            className="w-[446px] object-cover bg-cover min-w-[246px] min-h-[201px] max-h-[501px]"
          />
        </div>
        <div
          className={` flex flex-col md:w-[40%]  mx-5 md:mx-0 ${index % 2 == 0 ? "justify-start " : "justify-start "
            }`}
        >
          <div className="flex ">
            <div className="flex justify-center mt-3">
              <div
                className={`before:content-[''] before:block 
                     before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
                     before:transition before:ease-in-out before:duration-1000

                     w-[49px] h-[7px]  mr-[8px] mt-0 rounded-2xl ${lineColor}`}
              // style={{ backgroundColor: "#FFFFFF" }}
              ></div>
            </div>
            <h1
              className={`text-[18px] lg:text-[20px]  xl:text-[25px] font-semibold   ${subTitleColor}`}
            >
              {data?.subTitle}
            </h1>
          </div>
          <h3
            className={`text-[25px] lg:text-[30px] xl:text-[40px] leading-normal font-semibold my-[16px] xl:my-[37px] ${textColor}`}
          >
            {data?.title}
          </h3>
          <div
            className={`font-medium text-[20px]  ${textColor}`}
            dangerouslySetInnerHTML={{
              __html: `<p style=margin-top: 20px; font-size: 1.25rem; line-height: 1.75rem margin-left: 1.5rem; margin-right: 1.5rem;  font-family: Montserrat, sans-serif; ">${data?.description}</p>`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
