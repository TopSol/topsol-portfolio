import React, { useState } from "react";
import fiveStart from "../../../images/fiveStars.svg";
import { Link } from "gatsby";
type appProps = {
  review: any;
};
export default function RatingSlider({ review }: appProps) {
  const [expand, setExpand] = useState(false);
  return (
    <div className="">
      <div className=" pl-4  md:mx-auto pr-4 md:pl-16  ">
        <div className="bg-[#70707005] p-4">
          <p className="mt-4  font-figtree font-light text-[#1F1F1F] ">
            {review?.text?.length < 180 ? (
              review?.text
            ) : // {review?.text?.slice(0, 180)}<span className="text-gray-400 font-semibold">{expand? "Show less":"Show more"}</span>
              !expand ? (
                <>
                  {review?.text?.slice(0, 180)}...
                  <span
                    onClick={() => setExpand((prev) => !prev)}
                    className="text-[#00B8F1] cursor-pointer"
                  >
                    {"Show more"}
                  </span>
                </>
              ) : (
                <>
                  {review?.text}{" "}
                  <span
                    onClick={() => setExpand((prev) => !prev)}
                    className="text-[#00B8F1] cursor-pointer"
                  >
                    {"Show less"}
                  </span>
                </>
              )}
            {/* <span
              onClick={() => setExpand((prev) => !prev)}
              className="text-gray-400 cursor-pointer"
            >
              {expand ? "Show less" : "Show more"}
            </span> */}
          </p>
          <div className="flex justify-end space-x-2  ">
            <img src={fiveStart} alt="" className="mt-5" />
          </div>
        </div>
        <div className="flex  my-8 justify-between">

          <div className=" text-sm ml-4">
            <p className=" text-[#1F1F1F] font-semibold  font-figtree text-[22px]">
              {review?.clientName}
            </p>
            <p className="mt-2 text-[#1F1F1F] font-figtree fotn-[18px] ">
              {review?.type}
            </p>
          </div>
          <div className="cursor-pointer">
            <Link
              to={`${review.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                <path d="M15 0.0825195C6.72632 0.0825195 0 6.80884 0 15.0825C0 23.3562 6.72632 30.0825 15 30.0825C23.2737 30.0825 30 23.3562 30 15.0825C30 6.80884 23.2737 0.0825195 15 0.0825195ZM15 8.67199C17.5895 8.67199 19.7053 10.7878 19.7053 13.3773C19.7053 15.9667 17.5895 18.0825 15 18.0825C12.4105 18.0825 10.2947 15.9667 10.2947 13.3773C10.2947 10.7878 12.4105 8.67199 15 8.67199ZM6.78947 24.1773V23.4825C6.78947 21.493 8.4 19.8509 10.4211 19.8509H19.5789C21.5684 19.8509 23.2105 21.4615 23.2105 23.4825V24.1773C21.0316 26.1352 18.1579 27.3352 15 27.3352C11.8421 27.3352 8.96842 26.1352 6.78947 24.1773Z" fill="#333333" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
