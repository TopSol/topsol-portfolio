import React from "react";
import PrimaryBtn from "../../../components/PrimaryBtn";

export default function Hero({ data }) {
  return (
    <div className="">
      <div className="bg-gradient-to-b from-secondary  to-primary  ">
        <div className="flex flex-col font-montserrat text-white justify-center items-center mx-6   lg:w-[55%] xl:w-[50%] md:mx-auto te ">
          <h1 className="text-[50px]  text-center font-bold mt-[70px] ">
            {data?.title}
          </h1>
          {/* <p className="text-2xl text-center mt-[50px] ">{data?.description}</p> */}
          <div
            dangerouslySetInnerHTML={{
              __html: `<p style="margin-top: 20px; font-size: 1.25rem; line-height: 1.75rem margin-left: 1.5rem; margin-right: 1.5rem; font-family: Montserrat, sans-serif; ">${data?.description}</p>`,
            }}
          />
          <div className="w-[270px] my-[50px] pb-[250px]  md:pb-[300px] ">
            <PrimaryBtn
              text="Download Now"
              additionalClasses=" bg-white text-primary hover:bg-primary hover:text-white "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center">
        <img
          src={data?.detailImageUrl}
          alt=""
          className="absolute mx-4 h-[500px] "
        />
      </div>
    </div>
  );
}
