import React, { useState } from "react";
import { btnData, data } from "../data";
import PrimaryBtn from "../../../components/PrimaryBtn";

export default function OurTeam() {
  const [selectWorkers, setSetWorkers] = useState("All");
  const filterData = data.filter((item: any) => {
    if (item.catagory === selectWorkers) {
      return item;
    }
  });
  const showData = selectWorkers === "All" ? data : filterData;
  return (
    <div className="bg-gradient-to-b from-secondary to-primary  ">
      <div className="flex flex-col justify-center items-center     ">
        <h1 className="font-extrabold text-white mt-[53px]  text-3xl md:text-3xl lg:text-4xl text-center">
          Our Team
        </h1>
        <div
          className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-primary before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44 mt-4"
        ></div>
      </div>
      <div className=" grid grid-col gap-3 mt-[39px] md:5 md:grid-cols-3 lg:grid-cols-6 md:container md:mx-auto ">
        {btnData.map((item: any, index) => {
          return (
            <div
              className="mx-5 md:mx-0  "
              key={index}
              onClick={() => {
                setSetWorkers(item.name);
              }}
            >
              <PrimaryBtn
                text={item.name}
                additionalClasses="bg-transparent mt-4 md:mt-0 px-4 text-[22px] w-full 
                   md:mx-0 font-semibold hover:bg-primary  border-white border-2 text-white  "
              />
            </div>
          );
        })}
      </div>

      <div className="grid  grid-col gap-3 pb-[168px] mt-[69px] md:grid-cols-2 lg:grid-cols-4 md:container md:mx-auto ">
        {showData.map((item: any, index) => {
          return (
            <div
              key={index}
              className="flex flex-col mt-6 justify-center items-center"
            >
              <img
                src="https://res.cloudinary.com/asifsaythe/image/upload/v1693207552/new_portfolio/unsplash_iFgRcqHznqg_brukug.png"
                alt=""
                srcset=""
                className=" rounded-full "
              />
              <h1 className="text-2xl  text-white font-semibold ">John Deff</h1>
              <p className=" text-white text-[18px]  ">Ceo at TopSol</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
