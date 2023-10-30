import React from "react";
import ServicesCards from "../servisesCards/ServicesCards";
import cards, { imgCards } from "../../../staticData/servisesOffersData";
import { Link } from "gatsby";
import LineAnimation from "../../../components/LineAnimation";

function ServicesOffers() {
  return (
    <div className="bg-gradient-to-b from-[#0B234C] to-[#00B8F1] py-[85px] lg:relative flex flex-col justify-center items-center px-2 ">
      <div className="w-[60%]">
        <h1 className="font-extrabold text-white uppercase font-urbanist text-[26px] md:text-34[px] lg:text-4xl ">
          Explore our <span className="text-[#10BCF2]">services</span>
        </h1>
        <LineAnimation
          width="200px"
          height="7px"
          backgroundColor="#fff"
          marginTop="22px"
        />
      </div>
      <div className="">
        <div className=""></div>
      </div>

      <div className="grid mt-[36px] md:mt-[85px] gap-x-[27px] gap-y-[48px]  sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        {imgCards?.map((item, index) => (
          <div key={index}>
            <Link to={"/servicesDetail"} state={{ service: cards[index] }}>
              <ServicesCards serviceData={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesOffers;
