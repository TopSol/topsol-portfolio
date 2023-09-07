import React, { useState } from "react";
import dot1 from "../../../images/dot1.png";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import { cardData } from "./data";
import { Link } from "gatsby";
import "./style.css";
interface CardData {
  title: string;
  image: string;
}

function OurPortfolio() {
  const initialVisibleCards = 4;
  const [visibleCards, setVisibleCards] = useState<number>(initialVisibleCards);

  const handleViewMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };
  return (
    <div className="px-4 mt-[126px] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <h1 className="font-extrabold text-black font-montserrat text-[26px] md:text-34[px] lg:text-4xl text-center">
            Our Portfolio
          </h1>
        </div>
        <div
          className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#00B8F1] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44 mt-[22px] card "
        ></div>
      </div>
      <div className=" mt-[53px] grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-x-[30px]  ">
        {cardData.slice(0, visibleCards).map((card, index) => (
          <Link to={"/portfolio"}>
            <div
              key={index}
              className="rounded group hover:origin-left hover:scale-x-105 hover:duration-600 hover:border-none 
              border overflow-hidden w-[300px]  hover:from-white hover:to-white bg-gradient-to-b 
              from-[#00B8F1] to-[#FFFFFF] border-[#00B8F1] "
            >
              <div className="  ">
                <div className="flex flex-col items-center ">
                  <img
                    src={card.image}
                    style={{ transition: "all .50s ease " }}
                    className="  my-[66px] group-hover:transition group-hover:duration-500 group-hover:scale-110
                      group-hover:ease-in-out "
                    alt={`Portfolio ${index}`}
                  />
                </div>
                <div
                  className=" group-hover:bg-[#00B8F1] text-[21px]  bg-white font-bold pt-[24px] pb-[28px]
                 text-center group-hover:duration-700  group-hover:text-white"
                >
                  <h1>{card.title}</h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to={"/portfolio"}>
          <button
            className=" w-[180px] py-[15px] mt-[73px] text-[20px] font-semibold group flex text-center 
            items-center justify-center rounded bg-[#00B8F1] text-white hover:scale-x-125 hover:pl-4 m hover:duration-500
             transform origin-left transition-transform duration-500 ease-in-outy"
            onClick={handleViewMore}
          >
            View more
            <svg
              className="w-4 h-4 hidden group-hover:inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </Link>
      </div>

      <div className="lg:block ml-auto mr-20  hidden">
        <img src={dot1} alt="Dot" />
      </div>
    </div>
  );
}

export default OurPortfolio;
