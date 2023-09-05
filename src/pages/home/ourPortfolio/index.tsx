import React, { useState } from "react";
import dot1 from "../../../images/dot1.png";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import { cardData } from "./data";
import { Link } from "gatsby";

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
    <div className="px-4 pt-20 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="py-4 text-4xl font-bold">Our Portfolio</h1>
        </div>
        <div className="w-[150px]">
          <AnimateHr bgColor={'[#00B8F1]'}/>
        </div>
      </div>
      <div className="my-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-x-8  gap-y-6  ">
        {cardData.slice(0, visibleCards).map((card, index) => (
          <Link to={"/portfolio"}>
          <div
            key={index}
            className="rounded  border overflow-hidden hover:from-white hover:to-white bg-gradient-to-b from-[#00B8F1] to-[#FFFFFF] border-[#00B8F1] w-[250px] h-[374px]"
          >
            <div className="h-full relative group ">
              <div className="flex flex-col items-center ">
                <div className="px-4 mt-16 ">
                  <img src={card.image} alt={`Portfolio ${index}`} />
                </div>
              </div>
              <div className="absolute group-hover:bg-[#00B8F1] bottom-0 bg-white font-bold w-full py-4 text-center  group-hover:text-white">
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
          className="px-[35px] py-[15px] group flex items-center justify-center rounded bg-[#00B8F1] text-white hover:scale-x-125 transform origin-left transition-transform duration-500 ease-in-out"
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
