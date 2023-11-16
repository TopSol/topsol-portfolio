import React, { useState } from "react";
import "./animation.css";
type appProps = {
  title?: string | null;
  avatar: string;
  border?: boolean;
};

function ExpertCards({ title, avatar, border }: appProps) {
  return (
    <div
      className={`${border ? "min-h-[180px]" : ""} flex-col flex items-center `}
    >
      <div
        className={`hover:duration-500  flex flex-col items-center justify-center  ${
          border
            ? "rounded-[10px]  border-2 w-[198px]  hover:bg-primary-light group  border-primary-light  "
            : "border-none   px-4 py-2"
        }`}
      >
        <img
          src={avatar}
          alt=""
          className={`   ${
            border
              ? "  group-hover:bg-white p-4 mt-[12px] rounded-full "
              : "w-[48px] h-[48px] "
            // : "m-[26px] w-[48px] h-[48px] "
          } `}
        />
        {/* {border ? ( */}
        <div>
          <h1
            className={`  mt-[19px] ${
              border && "mb-[20px] "
            } group-hover:mt-10  group-hover:mb-6 group-hover:text-white  group-hover:duration-200 text-[13px] font-bold `}
          >
            {title}
          </h1>
        </div>
        {/* ) : null} */}
      </div>
    </div>
  );
}

export default ExpertCards;
