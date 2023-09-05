import React from "react";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import dotImg from "../../../images/dot.png";
import circleImg from "../../../images/hero-circle.png";
import ServicesCards from "../servisesCards/ServicesCards";
import { cards } from "./data";
import { Link } from "gatsby";


function ServicesOffers() {
  return (
    <div className="my-[85px] lg:relative flex flex-col justify-center items-center px-2">
    {/* <img src={circleImg} className="absolute lg:block hidden right-0 top-36" /> */}
    <div className="flex flex-col items-center justify-center lg:flex-row">
      <div className="lg:mr-auto">
        <img src={dotImg} className="lg:block hidden" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center lg:mr-auto">
        <div className="text-center font-semibold text-[24px] md:text-[34px] ">
          <h1>Services We Offer</h1>
        </div>
       
        <div className=" text-[20px] md:mt-[27px] text-center md:block hidden">
          <p>
            From Industry Titans to Emerging Ventures - Topsol Empowers You
            with the Fusion of Creative, Technical, and Business Expertise
            Needed to Thrive
          </p>
        </div>
      </div>
    </div>

    <div className="grid mt-[36px] md:mt-[85px] gap-[27px] md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
      {cards?.map((item, index) => (
        <div key={index}>
          <Link to={"/services"}>
          <ServicesCards
            avatar={item.avatar}
            heading={item.heading}
            desc={item.desc}
          />
          </Link>
        </div>
      ))}
    </div>
  </div>
  );
}

export default ServicesOffers;
