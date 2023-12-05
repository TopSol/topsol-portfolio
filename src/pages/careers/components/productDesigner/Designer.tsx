import React from "react";
//@ts-ignore

function Designer({ jobDetails = {} }: any) {
  const total_miliseconds =
    (jobDetails?.postedAt?.seconds +
      jobDetails?.postedAt?.nanoseconds * 0.00000001) *
    1000;

  return (
    <div className="bg-primary py-[60px]">
      <div className="md:container md:mx-auto flex flex-col justify-center items-center ">
        <div className="flex flex-row">
          <h1 className="text-primary-white capitalize pr-3 text-[14px] md:text-[18px] font-figtree font-medium  border-r-2 border-white ">{jobDetails?.experience}</h1>
          <h1 className="text-primary-white capitalize px-3 text-[14px] md:text-[18px] font-figtree font-medium  border-r-2 border-white ">{jobDetails?.type}</h1>
          <h1 className="text-primary-white capitalize px-3 text-[14px] md:text-[18px] font-figtree font-medium   ">onSite</h1>
        </div>
        <h1 className="md:text-[60px]  mt-10 font-urbanist uppercase leading-[1.2]  text-3xl font-bold  text-center text-primary-white"> {jobDetails?.title?.split(" ")?.[0]}{" "}
          {jobDetails?.title?.split(" ")?.length > 1 ? (
            <span className=" text-[#333] font-urbanist font-bold">
              {jobDetails?.title?.split(" ")?.[1]}
            </span>
          ) : null}</h1>
        <h1 className="text-primary-white  mt-7 px-3 md:text-[24px] text-[14px] font-figtree font-light text-center w-[75%]  ">{jobDetails?.description}</h1>
      </div>

    </div>
  );
}

export default Designer;
