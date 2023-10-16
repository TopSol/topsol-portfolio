import React from "react";

interface Iprops {
  data: any
}
export default function Hero({ data }: Iprops) {
  return (
    <div>
      <div className=" pb-[50px] bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo">
        <div className="md:w-[80%] min-h-[100vh] md:container md:mx-auto md:flex-row flex flex-col  justify-center items-center">
          <div className="w-full mt-[70px]  md:container md:mx-auto md:mt-0  flex flex-col justify-center text-center md:text-left ">
            <h1 className="text-[36px] md:text-[70px] xl:text-[80px] break-words text-white font-[600]">
              {data.title}
            </h1>
          </div>
          <div className="w-[100%] mt-[56px] md:mt-0 md:container justify-center items-center flex flex-col">
            <img
              className=" md:w-[471px] w-[90%] object-cover rounded-lg xl:h-[445px] h-[274px]"
              src={data?.image}
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
