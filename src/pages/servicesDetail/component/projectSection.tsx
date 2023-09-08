import React from 'react'
import PortfolioCard from '../../../components/portfolioCard'
import PrimaryBtn from '../../../components/PrimaryBtn'
import {data2} from '../data'


export default function ProjectSection() {
    const showData = data2.slice(1, 3);
  return (
    <div>
        <div className="bg-gradient-to-b from-secondary to-primary  py-10 mt-12" >
      <div className="flex flex-col justify-center items-center     ">
          <div className="">
            <h1 className="font-extrabold text-white font-montserrat text-3xl md:text-3xl lg:text-4xl mt-6 text-center">
            Our Web Projects
            </h1>
          </div>
          <div
            className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#ffff] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44 mt-4"
          ></div>
        </div>
        <div>
            {
                showData.map((item:any,index)=>{
                    return <PortfolioCard direction={item.side} textColor={"text-white"} heading={item.heading} discription={item.detail} lineBgColor='#CCF3FF'/>
                })
            }      
        </div>
        <div className="flex flex-col justify-center mt-[67px]  mx-auto w-[250px]" >
        <PrimaryBtn text="View More" additionalClasses="bg-white text-primary" />  
        </div>
      </div>
    </div>
  )
}
