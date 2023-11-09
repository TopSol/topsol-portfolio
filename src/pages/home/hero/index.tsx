import React, { useEffect, useState, useRef } from "react";
import { PopupButton } from "react-calendly";
// @ts-ignore
import PrimaryBtn from "../../../components/PrimaryBtn";
import arrowup from "../../../images/Icons/arrowup.svg";
import { Link } from "gatsby";
import { useInView } from "framer-motion";

export default function Hero() {
  const [root, setRoot] = useState(null);
  // let root = document.body;

  // let root;
  useEffect(() => {
    setRoot(document.body);
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="bg-cover  min-h-[95vh] bg-center flex items-center xl:px-[167px] lg:px-[130px] sm:px-1 heroBackground sm:justify-normal justify-center">
      <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-2"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        <h1
          id="root"
          className="lg:text-[60px] sm:text-4xl uppercase md:text-5xl text-white font-extrabold font-urbanist leading-10 text-center sm:text-left "
        >
          A Better Approach to
          <p className="md:mt-[30px] sm:text-4xl md:text-5xl lg:text-[60px] text-primary font-figtree">
            Develop Software
          </p>
        </h1>
        <p className="md:mt-[52px] mt-[25px] text-[12px] md:text-[22px] text-white font-figtree hero-text-sideLine text-center sm:text-left ">
          Accelerate your launch by 2x with our groundbreaking development
          process, and <br /> reduce costs significantly. Say goodbye to the
          tedious process of starting from scratch <br /> and embrace the future
          of innovative app development.
        </p>
        <div className="bg-transparent    "></div>
        <div className="flex flex-col mt-[54px] sm:flex-row gap-[17px] sm:items-normal items-center">
          {root && (
            <div className="relative">
              <PopupButton
                // @ts-ignore
                text={`Let's Talk`}
                rootElement={root}
                url="https://calendly.com/asif-mushtaq"
                className="bg-primary sm:px-[45px] px-[16px] sm:pr-[70px] pr-[40px] py-[12px] rounded-[6px] text-[18px] font-figtree text-white hover:bg-[#009ccc]"
              />
              <img
                src={arrowup}
                className="absolute md:top-[40%] md:left-[66%] invert  left-[72%] top-[38%]"
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
