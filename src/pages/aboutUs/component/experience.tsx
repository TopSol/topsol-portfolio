import React from "react";

export default function Experience() {
  return (
    <div className="bg-gradient-to-b from-secondary to-primary mt-[80px]  ">
      <div className="md:container md:mx-auto flex flex-col md:flex-row  py-[160px] items-center justify-between">
        <div className=" md:w-[40%] lg:w-1/2 lg:text-center  text-white ">
          <h1 className=" ml-16 lg:ml-0  text-[150px] font-semibold md:text-[100px] lg:text-[150px]">
            12
          </h1>
          <p className=" text-[35px] md:text-[28px] lg:text-[35px] font-semibold ">
            Years Experience
          </p>
        </div>
        <div className=" md:w-[60%]lg:w-1/2 text-secondary  mt-10 md:mt-0  flex flex-col justify-center items-center ">
          <div className="flex space-x-5">
            <div className="bg-white rounded-[10px] justify-center flex flex-col items-center  px-12 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]  ">
              <h1 className=" md:text-[35px]  lg:text-[50px] font-bold  ">
                100+
              </h1>
              <p className=" md:text-3xl lg:text-4xl font-semibold ">Clients</p>
            </div>
            <div className="bg-white  rounded-[10px] justify-center flex flex-col items-center px-12 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]">
              <h1 className=" md:text-[35px]  lg:text-[50px] font-bold  ">
                100+
              </h1>
              <p className=" md:text-3xl lg:text-4xl font-semibold ">Clients</p>
            </div>
          </div>
          <div className="flex space-x-5 mt-5">
            <div className="bg-white rounded-[10px] justify-center flex flex-col items-center  px-12 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]  ">
              <h1 className=" md:text-[35px]  lg:text-[50px] font-bold  ">
                100+
              </h1>
              <p className="md:text-3xl lg:text-4xl font-semibold ">Clients</p>
            </div>
            <div className="bg-white rounded-[10px] justify-center flex flex-col items-center px-12 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]">
              <h1 className=" md:text-[35px]  lg:text-[50px] font-bold  ">
                200+
              </h1>
              <p className=" md:text-3xl lg:text-4xl font-semibold ">Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
