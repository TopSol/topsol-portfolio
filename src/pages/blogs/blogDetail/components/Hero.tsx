import React from "react";

export default function Hero({ data }) {
  return (
    <div>
      <div className=" pb-[50px] bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo">
        <div className="md:w-[80%] h-[100vh] md:container md:mx-auto md:flex-row flex flex-col  justify-center items-center">
          <div className="w-full mt-[70px]  md:container md:mx-auto md:mt-0  flex flex-col justify-center text-center md:text-left ">
            <h1 className="text-[36px] md:text-[70px] xl:text-[90px]  text-white font-[600]">
              What is <br />
              <span className="md:inline xl:w-[100%] text-primary">Data </span>
              <span className="inline md:block text-primary md:text-white">
                Science
              </span>
              {/* {data?.heading} */}
            </h1>
          </div>
          <div className="w-[100%] mt-[56px] md:mt-0 md:container justify-center items-center flex flex-col">
            <img
              className=" md:w-[471px] w-[90%] object-cover  xl:h-[445px] h-[274px]"
              src={data?.image}
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
