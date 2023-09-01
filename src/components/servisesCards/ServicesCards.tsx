import React, { useState } from "react";

type appProps = {
  heading: string;
  desc: string;
  avatar: string;
};

function ServicesCards({ heading, desc, avatar }: appProps) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className={` ${ isShown ? "bg-primary" : "bg-white"}  border-2  border-primary rounded-2xl   h-[450px]  items-center`}
      >
        <div className="flex flex-col hover:translate-y-1 w-full items-center px-4 ">
          <div className="mt-5">
            <img src={avatar} />
          </div>
          <div
            className={`py-4 font-extrabold  ${
              isShown ? "text-white" : "text-primary"
            } `}
          >
            <p>{heading}</p>
          </div>
          <div className="text-center pt-4 leading-8">
            <p className={` ${
              isShown ? "text-white" : "text-grayColor"
            } `}>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
