import React from "react";
//@ts-ignore
import jobImg from "../../../../images/jobDt1.png";

function Designer({ jobDetails = {} }: any) {
  const total_miliseconds =
    (jobDetails?.postedAt?.seconds +
      jobDetails?.postedAt?.nanoseconds * 0.00000001) *
    1000;

  return (
    <div className="bg-primary py-[60px]">
      <div className="md:container md:mx-auto flex flex-col justify-center items-center ">
        <div className="flex flex-row">
          <h1 className="text-primary-white capitalize pr-3 text-[18px] font-figtree font-medium  border-r-2 border-white ">{jobDetails?.experience}</h1>
          <h1 className="text-primary-white capitalize px-3 text-[18px] font-figtree font-medium  border-r-2 border-white ">{jobDetails?.type}</h1>
          <h1 className="text-primary-white capitalize px-3 text-[18px] font-figtree font-medium   ">onSite</h1>
        </div>
        <h1 className="md:text-[60px] mt-10 font-urbanist uppercase leading-[1.2]  text-4xl font-bold  text-center text-primary-white"> {jobDetails?.title?.split(" ")?.[0]}{" "}
          {jobDetails?.title?.split(" ")?.length > 1 ? (
            <span className=" text-[#333]">
              {jobDetails?.title?.split(" ")?.[1]}
            </span>
          ) : null}</h1>
        <h1 className="text-primary-white  mt-7 px-3 text-[24px] font-figtree font-light text-center w-[75%]  ">{jobDetails?.description}</h1>
      </div>
      {/* <div className=" md:container  mx-auto flex lg:flex-row flex-col justify-center items-center">
        <div className=" lg:mt-0  mt-[72px] lg:mb-0 mb-[29px] ">
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
          <div className="md:my-8 md:mb-0 ">
            <h1 className=" md:text-[70px] leading-[1.2] mb-[22px] text-4xl font-semibold md:text-start text-center text-primary-white">
              {jobDetails?.title?.split(" ")?.[0]}{" "}
              {jobDetails?.title?.split(" ")?.length > 1 ? (
                <span className=" text-black">
                  {jobDetails?.title?.split(" ")?.[1]}
                </span>
              ) : null}
            </h1>
          </div>
          <div className="mb-4  text-center lg:mx-0 mx-[18px]">
            <p className="text-primary-white font-medium md:text-lg text-sm font-montserrat">
              {jobDetails?.description}
            </p>
          </div>
          <div>
            <div className="flex flex-row md:justify-start justify-center  text-primary-white">
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
      </div> */}
    </div>
  );
}

export default Designer;
