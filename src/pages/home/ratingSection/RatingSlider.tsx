import React from "react";
import fiveStart from "../../../images/fiveStars.svg";
type appProps = {
  review: any;
};
export default function RatingSlider({ review }: appProps) {
  return (
    <div className="">
      <div className=" pl-4  md:mx-auto pr-4 md:pl-16  ">
        <div className="bg-[#70707005] p-4">
          <p className="mt-4  font-figtree font-light text-[#1F1F1F] ">
            {review?.text?.slice(0, 180)}...
          </p>
          <div className="flex justify-end space-x-2  ">
            <img src={fiveStart} alt="" className="mt-5" />
          </div>
        </div>
        <div className="flex  my-8">
          <img
            src={review?.avatar}
            alt=""
            className=" rounded-full w-[50px] h-[50px]"
          />
          <div className=" text-sm ml-4">
            <p className=" text-[#1F1F1F] font-semibold  font-figtree text-[22px]">{review?.clientName}</p>
            <p className="mt-2 text-[#1F1F1F] font-figtree fotn-[18px] ">{review?.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
