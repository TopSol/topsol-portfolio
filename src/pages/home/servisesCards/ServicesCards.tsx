import React from "react";
type appProps = {
  heading: string;
  desc: string;
  avatar: string;
  bg: String;
};

function ServicesCards({ heading, desc, avatar, bg }: appProps) {
  return (
    <div className="border-2 border-[#32CFFF] rounded-2xl w-[264px] h-[369px] overflow-hidden relative hoverDive">
      <div className="flex flex-col w-full items-center px-4">
        <div className="mb-2 w-[70px] h-[70px] mt-2 z-[2]">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="mb-2 w-[70px] h-[70px] mt-2 translate-x-[-50%] absolute top-0 left-[50%] hoverImage">
          <img src={bg} alt="" />
        </div>
        <div className="py-4 font-extrabold z-[2] ">
          <p>{heading}</p>
        </div>
        <div className="text-center pt-4 leading-8 z-[2] ">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
