import React from "react";
//@ts-ignore
import jobImg from "../../../../images/jobDt1.png";

function Designer({ jobDetails }: any) {
  const total_miliseconds =
    (jobDetails.postedAt.seconds +
      jobDetails.postedAt.nanoseconds * 0.00000001) *
    1000;

  return (
    <div className="   bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo">
      <div className=" md:container min-h-[100vh] mx-auto flex lg:flex-row flex-col justify-center items-center">
        <div className=" lg:mt-0  mt-[72px] xl:ml-[157px] mx-[34px] lg:mb-0 mb-[29px] lg:w-[50%]">
          <div className="flex lg:mx-0 mx-[48px] md:mb-0 mb-[25px]">
            <div className=" border-r-2 border-primary mr-4 text-lg">
              <h1 className="pr-4 text-primary font-medium text-lg">
                <span className="text-primary-white ">Min Experience</span>{" "}
                {jobDetails.experience}
              </h1>
            </div>
            <div>
              <h1 className=" text-primary-white text-lg">
                <span className="text-primary">Job Type</span>{" "}
                {jobDetails?.type}
              </h1>
            </div>
          </div>
          <div className="md:my-8 md:mb-0 lg:ml-0 sm:ml-10">
            <h1 className=" md:text-[70px] leading-[1.2] mb-[22px] text-4xl font-semibold md:text-start text-center text-primary-white">
              {jobDetails?.title.split(" ")[0]}{" "}
              {jobDetails?.title.split(" ").length > 1 ? (
                <span className=" text-primary">
                  {jobDetails?.title.split(" ")[1]}
                </span>
              ) : null}
            </h1>
          </div>
          <div className="mb-4 md:text-start text-center lg:mx-0 mx-[18px] lg:ml-0 sm:ml-10">
            <p className="text-primary-white font-medium md:text-lg text-sm font-montserrat">
              {jobDetails?.description}
            </p>
          </div>
          <div>
            <div className="flex flex-row md:justify-start justify-center  text-primary-white lg:ml-0 sm:ml-10">
              <div className="border-r-2 border-primary-white">
                <p className=" font-semibold md:text-lg text-xs font-montserrat lg:pr-4 pr-2">
                  {jobDetails?.location}
                </p>
              </div>
              <p className="font-semibold md:text-lg text-xs font-montserrat sm:ml-4 ml-2">
                Posted on {new Date(total_miliseconds).toDateString()}
              </p>
            </div>
          </div>
        </div>
        <div className=" ml-[35px] xl:mr-[160px] mr-[34px] lg:mb-0  mb-[63px] lg:w-[50%]">
          <img src={jobImg} alt="careers" className=" w-[592px]" />
        </div>
      </div>
    </div>
  );
}

export default Designer;
