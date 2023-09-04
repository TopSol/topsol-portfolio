import React from "react";
import heroImg from '../../../images/hero-bg.png';
import PrimaryBtn from "../../../components/PrimaryBtn";
export default function Hero() {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="flex flex-col items-center h-screen text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-[54px]  font-extrabold mt-[203px] ">
           <span className="text-primary">Better</span> Approach to Develop{" "}
          <span className="text-primary">Software</span>
        </h1>
        <p className="mt-[52px] text-[15px] md:text-[22px]  ">
          Accelerate your launch by 2x with our groundbreaking development
          process, and <br /> reduce costs significantly. Say goodbye to the tedious
          process of starting from scratch <br />  and embrace the future of innovative
          app development.
        </p>
        <div className="bg-transparent    " ></div>
        <div className="flex flex-col mt-[54px]  sm:flex-row gap-2">
        <PrimaryBtn text="Get Started" additionalClasses=" text-[20px] font-semibold  hover:bg-secondary text-white rounded-[10px]  " />
        <PrimaryBtn text="Learn More" additionalClasses="text-primary text-[20px] font-semibold bg-transparent border-2 border-primary hover:text-white hover:bg-primary rounded-[10px] " />

        </div>
      </div>
    </div>
  );
}
