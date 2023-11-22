import React, { useState } from "react";
import "./animation.css";
type appProps = {
  title?: string | null;
  avatar: string;
};

function ExpertCards({ title, avatar }: appProps) {
  return (
    <div
      className={` flex-col flex items-center justify-center mx-auto`}
    >
      <div
        className={` flex flex-col items-center justify-center 
           border-none   md:px-4 py-2 w-[80px] md:w-[150px] px-0
        `}
      >
        <img
          src={avatar}
          alt=""
          className={`  h-[60px] w-auto  `}
        />
        <div>
          <h1
            className={`  mt-[19px] text-black text-[13px] font-bold `}
          >
            {title}
          </h1>
        </div>

      </div>
    </div>
  );
}

export default ExpertCards;
