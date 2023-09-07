import React from "react";

type appProps = {
  bgColor: string;
};

function AnimateHr({ bgColor }: appProps) {
  return (
    <div>
      <div
        className={`relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-${bgColor} before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000`}
      ></div>
    </div>
  );
}

export default AnimateHr;
