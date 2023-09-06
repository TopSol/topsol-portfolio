import React,{useState} from "react";

type appProps = {
  title?: string | null;
  avatar: string;
};

function ExpertCards({ title, avatar }: appProps) {
  const hasTitle = !!title;
  console.log(hasTitle, "true false value is hear -----");
  // transform origin-top transition-transform ease-in-out  hover:scale-y-125
  return (
    <div
  
      className={`   hover:bg-primary-light group    hover:duration-500   flex flex-col items-center  ${
        hasTitle ? "rounded-[10px] border-2 w-[198px]  border-primary-light  " : "  border-none shadow-lg shadow-gray-400 rounded-[20px]"
      }`}
    >
      <img
        src={avatar}
        alt=""
        className={`   ${hasTitle ? "group-hover:bg-white p-4 mt-[12px] group-hover:duration-200 rounded-full " : "m-[26px]"} `}
      />
      {hasTitle ? (
        <div>
        <h1 className={`  mt-[19px] mb-[21px]   group-hover:mt-[40px] group-hover:mb-[44px] group-hover:text-white  group-hover:duration-200 max-h-[140px] text-[13px] font-bold `}>
          {title}
        </h1>
        </div>
      ) : null}
    </div>
  );
}

export default ExpertCards;
