import React from "react";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import dotImg from "../../../images/dot.png";
import circleImg from "../../../images/hero-circle.png";
import ServicesCards from "../servisesCards/ServicesCards";
import cards from "../../../staticData/servisesOffersData";
import { Link } from "gatsby";
import LineAnimation from "../../../components/LineAnimation";

function ServicesOffers() {
  return (
    <div className="bg-gradient-to-b from-[#0B234C] to-[#00B8F1] py-[85px] lg:relative flex flex-col justify-center items-center px-2 ">
      <div className="">
        <div className="">
          <div className="">
            <h1 className="font-extrabold text-white uppercase font-urbanist text-[26px] md:text-34[px] lg:text-4xl">
              Explore our <span className="text-[#10BCF2]">services</span>
            </h1>
          </div>
          <LineAnimation
            width="178px"
            height="7px"
            backgroundColor="#fff"
            marginTop="22px"
          />
        </div>
      </div>

      <div className="grid mt-[36px] md:mt-[85px] gap-x-[27px] gap-y-[48px] md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        {cards?.map((item, index) => (
          <div key={index}>
            <Link to={"/servicesDetail"} state={{ service: item }}>
              <ServicesCards serviceData={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesOffers;
