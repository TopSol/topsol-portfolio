import React from "react";
import { PopupButton } from "react-calendly";
// @ts-ignore
import heroImg from "../../../images/hero-bg.png";
import PrimaryBtn from "../../../components/PrimaryBtn";
export default function Hero() {
  let root = document.body;

  return (
    <div
<<<<<<< HEAD
      className="bg-cover bg-center h-[100vh] flex items-center justify-center"
=======
      className="bg-cover h-screen bg-center flex items-center justify-center "
>>>>>>> 7e4dd78c559ac5674ac8e5ec49908e7dd9ad7d41
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
<<<<<<< HEAD
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1
          id="root"
          className="text-3xl sm:text-4xl  md:text-5xl text-primary  font-extrabold  lg:mt-0 mt-[200px]"
=======
      <div className="flex flex-col items-center justify-center  text-center px-4 sm:px-6 lg:px-8">
        <h1
          id="root"
          className="text-3xl sm:text-4xl  md:text-5xl text-primary  font-extrabold "
>>>>>>> 7e4dd78c559ac5674ac8e5ec49908e7dd9ad7d41
        >
          Better <span className=" mt-4 text-black"> Approach to Develop </span>
          Software
        </h1>
        <p className="mt-[52px] text-[15px] md:text-[22px]  ">
          Accelerate your launch by 2x with our groundbreaking development
          process, and <br /> reduce costs significantly. Say goodbye to the
          tedious process of starting from scratch <br /> and embrace the future
          of innovative app development.
        </p>
        <div className="bg-transparent    "></div>
        <div className="flex flex-col mt-[54px] mb-[203px]  sm:flex-row gap-[17px]">
          {root && (
            <PopupButton
              // @ts-ignore
              rootElement={root}
              text="Let’s Talk!"
              url="https://calendly.com/asif-mushtaq"
              className="bg-primary py-4 px-16  rounded hover:bg-primary text-[20px] font-semibold  hover:bg-secondary-light text-white rounded-[10px]  "
            />
          )}

          <PrimaryBtn
            text="Get a quote"
            additionalClasses="text-primary text-[20px] font-semibold bg-transparent border-2 border-primary hover:text-white hover:bg-primary rounded-[10px] "
          />
        </div>
      </div>
    </div>
  );
}
