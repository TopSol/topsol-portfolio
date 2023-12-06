import React, { useEffect, useState, useRef } from "react";
import { PopupButton } from "react-calendly";
// @ts-ignore
import PrimaryBtn from "../../../components/PrimaryBtn";
import arrowup from "../../../images/Icons/arrowup.svg";
import { Link } from "gatsby";

export default function Hero() {
  const [root, setRoot] = useState(null);
  // let root = document.body;

  // let root;
  useEffect(() => {
    setRoot(document.body);
  }, []);

  return (
    <div className="bg-cover min-h-[100vh] md:min-h-[100vh] xl:min-h-[75vh] bg-center flex items-center xl:px-[167px] lg:px-[130px] sm:px-1 heroBackground  justify-center">
      <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-2"
        data-aos="fade-up"
      >
        <h1
          id="root"
          className="lg:text-[48px] sm:text-3xl text-[25px] uppercase md:text-5xl text-white font-extrabold font-urbanist leading-[50px] text-center  "
        >
          A Better Approach to <span className="text-primary font-urbanist">Develop Software</span>
        </h1>
        <p className="md:mt-[52px] mt-[25px] text-[16px] md:text-[22px] text-white font-figtree md:w-[70%] mx-auto  w-[95%] text-center  ">
          Accelerate your launch by 2x with our groundbreaking development
          process, and  reduce costs significantly. Say goodbye to the
          tedious process of starting from scratch  and embrace the future
          of innovative app development.
        </p>
        <div className="bg-transparent    "></div>
        <div className="flex flex-col mt-[54px] sm:flex-row gap-[17px] justify-center  items-center">
          {root && (
            <div className="relative">
              <PopupButton
                // @ts-ignore
                text={`Let's Talk`}
                rootElement={root}
                url="https://calendly.com/asif-mushtaq"
                className="bg-primary sm:px-[45px] px-[36px] sm:pr-[70px] pr-[40px] py-[12px] rounded-[6px] text-[18px] font-figtree text-white hover:bg-[#009ccc]"
              />
              <img
                src={arrowup}
                className="absolute md:top-[40%] md:left-[66%]  left-[80%] top-[36%]"
              />
            </div>
          )}
          <Link to="/contactUs">
            <PrimaryBtn
              text="Get a quote"
              additionalClasses="text-primary font-figtree py-[10px] sm:px-[88px] px-[26px] text-[18px] bg-transparent border-2 border-white text-white hover:bg-primary hover:border-primary rounded-[6px] "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
