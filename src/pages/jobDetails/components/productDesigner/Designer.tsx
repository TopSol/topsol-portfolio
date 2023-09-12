import React from "react";
//@ts-ignore
import jobImg from "../../../../images/jobDt1.png";

function Designer({ jobDetails }: any) {
  const total_miliseconds =
    (jobDetails.postedAt.seconds +
      jobDetails.postedAt.nanoseconds * 0.00000001) *
    1000;

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 py-20 sm:px-6 bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo">
      <div className="px-20">
        <div className="flex">
          <div className=" border-r-2 border-primary mr-4 text-lg">
            <h1 className="pr-4 text-primary">
              <span className="text-primary-white ">Min Experience</span>{" "}
              {jobDetails.experience}
            </h1>
          </div>
          <div>
            <h1 className=" text-primary-white text-lg">
              <span className="text-primary">Job Type</span> {jobDetails?.type}
            </h1>
          </div>
        </div>
        <div className="my-8">
          <h1 className="md:text-6xl text-4xl font-bold text-primary-white">
            {jobDetails?.title.split(" ")[0]}{" "}
            {jobDetails?.title.split(" ").length > 1 ? (
              <span className=" text-primary">
                {jobDetails?.title.split(" ")[1]}
              </span>
            ) : null}
          </h1>
        </div>
        <div className="mb-4">
          <p className="text-primary-white font-bold font-montserrat">
            {jobDetails?.description}
          </p>
        </div>
        <div>
          <div className="flex sm:flex-row flex-col text-primary-white">
            <div className="border-r-2 border-primary-white">
              <p className="font-bold font-montserrat pr-4">
                {jobDetails?.location}
              </p>
            </div>
            <p className="font-bold font-montserrat sm:ml-4">
              Posted on {new Date(total_miliseconds).toDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="md:mt-0 mt-8 md:ml-0 ml-8">
        <img src={jobImg} alt="careers" />
      </div>
    </div>
  );
}

export default Designer;
