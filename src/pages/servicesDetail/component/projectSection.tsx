import React,{useState} from 'react'
import PortfolioCard from '../../../components/portfolioCard'
import PrimaryBtn from '../../../components/PrimaryBtn'
import {data2} from '../data'
import LineAnimation from '../../../components/LineAnimation'

export default function ProjectSection() {
    const showData = data2.slice(1, 3);
    const initialVisibleCards = 4;
  const [visibleCards, setVisibleCards] = useState<number>(initialVisibleCards);

  const handleViewMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };
  return (
    <div>
        <div className="bg-gradient-to-b from-secondary to-primary  py-10 mt-12" >
      <div className="flex flex-col justify-center items-center     ">
          <div className="">
            <h1 className="font-extrabold text-white  text-3xl md:text-3xl lg:text-4xl mt-6 text-center">
            Our Web Projects
            </h1>
          </div>
          <LineAnimation width='178px' height='7px' backgroundColor='#00B8F1' marginTop="22px"/>
        </div>
        <div>
            {
                showData.map((item:any,index)=>{
                    return <PortfolioCard direction={item.side} textColor={"text-white"} heading={item.heading} discription={item.detail} lineBgColor='#CCF3FF'/>
                })
            }      
        </div>
        <div className="flex justify-center items-center">
          <button
            className=" w-[180px] py-[15px] mt-[73px] text-[20px] font-semibold group flex text-center 
            items-center justify-center rounded bg-[#ffffff] text-primary hover:scale-x-125 hover:pl-4 m hover:duration-500
             transform origin-left transition-transform duration-500 ease-in-outy"
            onClick={handleViewMore}
          >
            <div className=" group-hover:scale-x-[.8] ">View more</div>

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
      </div>
      </div>
    </div>
  )
}
