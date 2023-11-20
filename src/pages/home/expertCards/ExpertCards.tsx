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
           border-none   px-4 py-2
        `}
      >
        <img
          src={avatar}
          alt=""
          className={`  w-[48px] h-[48px]  `}
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
