import React from "react";
import vrImg from "../../../images/verticalLine.png";
import jobImg from "../../../images/jobDt1.png";

function Designer() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 py-20 px-6 bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo">
      <div className="px-20">
        <div className="flex">
          <div className=" border-r-2 border-primary mr-4 text-lg">
            <h1 className="pr-4 text-primary">Senior Level</h1>
          </div>

          <div>
            <h1 className=" text-primary-white text-lg">Full Time</h1>
          </div>
        </div>
        <div className="my-8">
          <h1 className="md:text-6xl text-4xl font-bold">Product Designer</h1>
        </div>
        <div className="mb-4">
          <p className="text-primary-white font-montserrat">
            As a product designer at TOPSOL, you'll shape the future of
            user-centered web solutions, seamlessly blending aesthetics and
            functionality to create captivating digital experiences
          </p>
        </div>
        <div>
          <div className="flex sm:flex-row flex-col text-primary-white">
            <div className="border-r-2 border-primary-white">
              <p className="pr-4">Faisalabad, Pakistan</p>
            </div>
            <p className="sm:ml-4">Posted on 08/21/2023</p>
          </div>
        </div>
      </div>

      <div className="">
        <img src={jobImg} className="" />
      </div>
    </div>
  );
}

export default Designer;
