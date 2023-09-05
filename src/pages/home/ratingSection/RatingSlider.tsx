import React from "react";
import { AiFillStar } from "react-icons/ai";
import ratingCircle from "../../../images/rating1.png";

type appProps ={
    review:any
}
export default function RatingSlider({ review }:appProps) {
  return (
    <div className="my-8">
      <div className=" pl-4 pr-4 md:pl-16 border rounded-2xl relative">
        <div className="absolute top-0 right-0">
            <img src={ratingCircle} className="w-10 h-10"/>
        </div>
        <div className="flex text-yellow-500 mt-10 space-x-2  ">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className="mt-4 font-[13px] text-justify text-[#000000]">{review?.text}</p>
        <div className="flex my-8">
          <img
            src={review?.avatar}
            alt=""
            className=" rounded-full w-[50px] h-[50px]"
            
          />
          <div className=" text-sm ml-4">
            <p className=" font-bold">{review?.clientName}</p>
            <p className="mt-2 text-[#4E5FD0]">{review?.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
