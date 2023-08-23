import React from "react";
import portfolioIm1 from "../../images/portfolioImg1.png";
import dot1 from "../../images/dot1.png";

function OurPortfolio() {
  return (
    <div className="px-4 pt-20">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="py-4 text-4xl font-bold">Our Portfolio</h1>
        </div>
        <div>
          <div
            className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#00B8F1] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44"
          ></div>
        </div>
      </div>
      <div className="my-10 grid grid-cols-4 grid-rows-1 gap-4">
        <div className="border hover:translate-x-2  overflow-hidden hover:from-white hover:to-white bg-gradient-to-b from-[#00B8F1] to-[#FFFFFF] justify-center border-[#00B8F1] w-[300px] h-[384px]">
          <div className=" flex flex-col items-center hover:scale-110 transition duration-500">
            <div className="mb-20 mt-16 ">
              <img src={portfolioIm1} />
            </div>
            <div className="bg-white w-full py-4 text-center">
              <h1>Mobile Website</h1>
            </div>
          </div>
        </div>
        <div className="border overflow-hidden bg-gradient-to-b from-[#00B8F1] to-[#FFFFFF] justify-center  border-[#00B8F1] w-[300px] h-[384px]">
        <div className=" flex flex-col items-center hover:scale-110 transition duration-500">

          <div className="mb-20 mt-16 ">
            <img src={portfolioIm1} />
          </div>
          <div className="bg-white w-full py-4 text-center">
            <h1>Mobile Website</h1>
          </div>
          </div>
        </div>
        <div className="border overflow-hidden bg-gradient-to-b from-[#00B8F1] to-[#FFFFFF]  border-[#00B8F1] w-[300px] h-[384px]">
        <div className=" flex flex-col items-center hover:scale-110 transition duration-500">

          <div className="mb-20 mt-16 ">
            <img src={portfolioIm1} />
          </div>
          <div className="bg-white w-full py-4 text-center">
            <h1>Mobile Website</h1>
          </div>
          </div>
        </div>
        <div className="border overflow-hidden bg-gradient-to-b from-[#00B8F1] to-[#FFFFFF] border-[#00B8F1] w-[300px] h-[384px]">
        <div className=" flex flex-col items-center hover:scale-110 transition duration-500">
          <div className="mb-20 mt-16 ">
            <img src={portfolioIm1} />
          </div>
          <div className="bg-white w-full py-4 text-center">
            <h1>Mobile Website</h1>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="px-6 py-2 rounded bg-[#00B8F1] text-white ">
          View more
        </button>
      </div>
      <div className="flex justify-end">
        <img src={dot1}/>
      </div>
    </div>
  );
}

export default OurPortfolio;
