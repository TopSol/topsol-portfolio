import React from "react";

interface Iprops {
  direction: string;
  heading: string;
  discription: string;
  textColor?: string;
  lineBgColor?: string
}
export default function PortfolioCard({
  direction,
  heading,
  discription,
  textColor,
  lineBgColor
}: Iprops) {
  return (
    <div>
      <div
        className={`flex flex-col md:mt-[102px] mt-[30px]  md:container md:mx-auto  items-center ${textColor} ${direction}`}
      >
        <div className={`xl:w-[60%] lg:w-[50%] md:w-[45%] my-10 md:my-0
        ${
          direction === "flex-row-reverse"
            ? "justify-start "
            : "justify-end "
        }
        `}>
          <img
            src="https://res.cloudinary.com/asifsaythe/image/upload/v1693218773/new_portfolio/Group_9059_xlercr.png"
            alt="#"
          />
        </div>
        <div className={`xl:w-[50%] lg:w-[45%] md:w-[50%] flex flex-col  mx-5 md:mx-0
        ${
          direction === "flex-row-reverse"
            ? "justify-start "
            : "justify-end "
        }
        `} >
          <div className="flex ">
          <div className="flex justify-center mt-3">
      <div
        className={`before:content-[''] before:block 
                     before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
                     before:transition before:ease-in-out before:duration-1000
                     w-[49px] h-[7px]  mr-[8px] mt-1 rounded-2xl`}
        style={{ backgroundColor: lineBgColor }}
      ></div>
    </div>
                  <h1
            className={`text-[18px] lg:text-[20px]  xl:text-[25px] font-semibold  text-primary ${textColor} `}
          >Green tea studio, a useful website UK based
                  </h1>
                </div>
          <h3 className=" text-[25px] lg:text-[30px] xl:text-[40px] leading-normal font-semibold my-[16px] xl:my-[37px] ">
            {heading}
          </h3>
          <p className={`text-[15px]  lg:text-[20px] font-medium ${textColor} `}>
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
          </p>
        </div>
      </div>
    </div>
  );
}
