import React from "react";
import ServicesCards from "../servisesCards/ServicesCards";
import cards, { imgCards } from "../../../staticData/servisesOffersData";
import { Link } from "gatsby";
import LineAnimation from "../../../components/LineAnimation";

function ServicesOffers() {
  return (
    <div className="  py-[50px] relative flex flex-col justify-center items-center px-2">
      <div className=" flex flex-col md:justify-start justify-center items-center  ">
        <h1 className="font-extrabold text-white  uppercase font-urbanist text-[26px] md:text-34[px] lg:text-4xl text-center md:text-left">
          Explore our <span className="text-primary">services</span>
        </h1>
        <LineAnimation
          width="178px"
          height="7px"
          backgroundColor="#FFFFFF"
          marginTop="22px"
        />
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
