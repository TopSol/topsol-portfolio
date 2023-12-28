import React, { useState } from "react";
import fiveStart from "../../../images/fiveStars.svg";
import { Link } from "gatsby";
import PrimaryBtn from "../../../components/PrimaryBtn";
type appProps = {
  review: any;
};
export default function RatingSlider({ review }: appProps) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="">
      <div className=" pl-4  md:mx-auto pr-4 md:pl-16  ">
        <div className={`bg-[#70707005] p-4 ${expand ? "h-auto" : "h-[160px]"} `}>
          <p className={`mt-4  font-figtree font-light text-[#1F1F1F]  `}>
            {review?.text?.length < 110 ? (
              review?.text
            ) :
              !expand ? (
                <>
                  {review?.text?.slice(0, 110)}...
                  <span
                    onClick={() => setExpand((prev) => !prev)}
                    className="text-[#00B8F1] cursor-pointer "
                  >
                    {"Show more"}
                  </span>
                </>
              ) : (
                <>
                  {review?.text}{" "}
                  <span
                    onClick={() => setExpand((prev) => !prev)}
                    className="text-[#00B8F1] cursor-pointer "
                  >
                    {"Show less"}
                  </span>
                </>
              )}
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
            <p className="mt-2 text-[#1F1F1F] font-figtree font-[18px] ">
              {review?.type}
            </p>
          </div>
          <div className="cursor-pointer">
            <Link
              to={`${review?.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PrimaryBtn
                text="View Profile"
                icon={true}
                additionalClasses="text-primary flex items-center font-figtree py-[12px] px-[18px]   bg-none text-[12px]   text-white rounded-full "
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
