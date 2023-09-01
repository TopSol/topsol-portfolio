import React from "react";

interface Iprops {
  direction: string;
  heading: string;
  discription: string;
  textColor?: string;
}
export default function PortfolioCard({
  direction,
  heading,
  discription,
  textColor,
}: Iprops) {
  return (
    <div
      className={`flex flex-col  mt-[100px] md:container md:mx-auto items-center ${textColor} ${direction}`}
    >
      <div className="md:w-1/2">
        <img
          src="https://res.cloudinary.com/asifsaythe/image/upload/v1693218773/new_portfolio/Group_9059_xlercr.png"
          alt=""
          srcset=""
        />
      </div>
      <div className="md:w-1/2 flex flex-col  justify-between mx-5 md:mx-0 ">
        <h1
          className={` text-xl  md:text-[25px] font-semibold  text-primary ${textColor} `}
        >
          Green tea studio, a useful website UK based
        </h1>
        <h3 className=" text-3xl md:text-[40px]  font-semibold my-[37px] ">
          {heading}
        </h3>
        <p className={` text-base md:text-[20px] ${textColor} `}>
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per
        </p>
      </div>
    </div>
  );
}
