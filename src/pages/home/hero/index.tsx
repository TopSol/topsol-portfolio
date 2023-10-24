import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
// @ts-ignore
import heroImg from "../../../images/hero-bg.webp";
import HeroGif from '../../../images/J4o.gif';
import PrimaryBtn from "../../../components/PrimaryBtn";
import { Link } from "gatsby";
export default function Hero() {
  const [root, setRoot] = useState(null);
  // let root = document.body;

  // let root;
  useEffect(() => {
    setRoot(document.body);
  }, []);

  return (
    <div
      className="bg-cover  min-h-[100vh] bg-center flex items-center justify-center "
      style={{
        backgroundImage: `url(${HeroGif})`,
      }}
    >
      <div className="flex flex-col items-center justify-center  text-center px-4 sm:px-6 lg:px-8">
        <h1
          id="root"
          className="text-3xl sm:text-4xl  md:text-5xl text-primary  font-extrabold "
        >
          Better <span className=" mt-4 text-white"> Approach to Develop </span>
          Software
        </h1>
        <p className="mt-[52px] text-[15px] md:text-[22px] text-white ">
          Accelerate your launch by 2x with our groundbreaking development
          process, and <br /> reduce costs significantly. Say goodbye to the
          tedious process of starting from scratch <br /> and embrace the future
          of innovative app development.
        </p>
        <div className="bg-transparent    "></div>
        <div className="flex flex-col mt-[54px]   sm:flex-row gap-[17px]">
          {root && (
            <PopupButton
              // @ts-ignore
              rootElement={root}
              text="Let’s Talk!"
              url="https://calendly.com/asif-mushtaq"
              className="bg-primary py-4 px-16   text-[20px] font-semibold  hover:bg-secondary-light text-white rounded-[10px]  "
            />
          )}
          <Link to="/contactUs">
            <PrimaryBtn
              text="Get a quote"
              additionalClasses="text-white text-[20px] font-semibold bg-transparent border-2 border-white hover:text-white hover:bg-primary rounded-[10px] "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
