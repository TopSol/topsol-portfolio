import React from "react";
import ratingCircle from "../../../images/rating1.png";
import fiveStart from "../../../images/fiveStars.png";
import CircleImage from "../../../components/CircleImage";
type appProps = {
  review: any;
};
export default function RatingSlider({ review }: appProps) {
  return (
    <div className="">
      <div className=" pl-4 md:container md:mx-auto pr-4 md:pl-16 border rounded-2xl relative">
        <div className="absolute top-0 right-0">
          <CircleImage />
        </div>
        <div className="flex text-yellow-500 mt-10 space-x-2  ">
          <img src={fiveStart} alt="" />
        </div>
        <p className="mt-4 font-[15px] w-[90%] text-[#000000]">
          {review?.text}
        </p>
        <div className="flex my-8">
          <img
            src={review?.avatar}
            alt=""
            className=" rounded-full w-[50px] h-[50px]"
          />
          <div className=" text-sm ml-4">
            <p className=" font-semibold text-[22px]">{review?.clientName}</p>
            <p className="mt-2 text-[#4E5FD0] fotn-[18px] ">{review?.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
