import React from "react";
import PrimaryBtn from "../../../components/PrimaryBtn";
import { portfolioDetailType } from "../../../types/interfaceTypes";
export default function Hero({ detail }: { detail: portfolioDetailType }) {
  return (
    <div className="">
      <div className="bg-gradient-to-b from-secondary  to-primary  ">
        <div className="flex flex-col  text-white justify-center items-center mx-6   lg:w-[55%] xl:w-[50%] md:mx-auto  ">
          <h1 className="text-[50px]  text-center font-bold mt-[70px] ">
            {detail?.title}
          </h1>
          {/* <p className="text-2xl text-center mt-[50px] ">{data?.description}</p> */}
          <div
            className=" text-center"
            dangerouslySetInnerHTML={{
              __html: `<p style="margin-top: 20px; font-size: 1.25rem; line-height: 1.75rem margin-left: 1.5rem; margin-right: 1.5rem;  ">${detail?.description}</p>`,
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
          src={detail?.detailImageUrl}
          alt=""
          className="absolute mx-4 h-[500px] "
        />
      </div>
    </div>
  );
}
