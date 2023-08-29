import React from "react";
import notFoundImg from "../../../src/images/Frame.png";


function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center px-6 py-28">
      <div className="max-w-[590px]">
        <img src={notFoundImg} className="" />
      </div>
      <div className="pt-10 text-center">
        <h1 className="md:text-8xl text-4xl font-extrabold">
          PAGE NOT <span className=" text-primary">FOUND</span>
        </h1>
      </div>
    </div>
  );
}

export default PageNotFound;
