import React from "react";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import dotImg from "../../../images/dot.png";
import circleImg from "../../../images/hero-circle.png";
import ServicesCards from "../servisesCards/ServicesCards";
import { cards } from "./data";


function ServicesOffers() {
  return (
    <div className="py-12 lg:relative flex flex-col justify-center items-center px-2">
    <img src={circleImg} className="absolute lg:block hidden right-0 top-36" />
    <div className="flex flex-col items-center justify-center lg:flex-row">
      <div className="lg:mr-auto">
        <img src={dotImg} className="lg:block hidden" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center lg:mr-auto">
        <div className="text-center font-bold text-4xl pb-6">
          <h1>Services We Offer</h1>
        </div>
        <div className="w-[150px] my-4">
          <AnimateHr bgColor={"[#00B8F1]"} />
        </div>
        <div className="pt-6 pb-4 text-center md:block hidden">
          <p>
            From Industry Titans to Emerging Ventures - Topsol Empowers You
            with the Fusion of Creative, Technical, and Business Expertise
            Needed to Thrive
          </p>
        </div>
      </div>
    </div>

    <div className="grid gap-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
      {cards?.map((item, index) => (
        <div key={index}>
          <ServicesCards
            avatar={item.avatar}
            heading={item.heading}
            desc={item.desc}
          />
        </div>
      ))}
    </div>
  </div>
  );
}

export default ServicesOffers;
