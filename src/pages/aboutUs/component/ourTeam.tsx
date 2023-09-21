import React from 'react'
import PrimaryBtn from '../../../components/PrimaryBtn'
import { btnData, data } from '../data'
import { useState } from 'react'
import LineAnimation from '../../../components/LineAnimation'
export default function OurTeam() {
  const [selectWorkers, setSetWorkers] = useState("All")
  const filterData = data.filter((item: any) => {
    if (item.catagory === selectWorkers) {
      return item
    }
  })
  const showData = selectWorkers === "All" ? data : filterData
  return (
    <div className="bg-gradient-to-b from-secondary to-primary pt-[53px] pb-[150px] ">
      <div className="flex flex-col justify-center items-center     ">
        <div className="">
          <h1 className="font-extrabold text-white font-montserrat text-3xl md:text-3xl lg:text-4xl mt-6 text-center">
            Our Team
          </h1>
        </div>
        <LineAnimation width='178px' height='7px' backgroundColor='#00B8F1' marginTop="14px" />
      </div>
      <div className=" grid grid-col gap-3 mt-8 md:grid-cols-3 lg:grid-cols-6 md:container md:mx-auto ">
        {btnData.map((item: any, index) => {
          return (
            <div className="mx-5 md:mx-0  " key={index} onClick={() => {
              console.log("hello im am hear -----------------")
              setSetWorkers(item.name)
            }} >
              <PrimaryBtn
                text={item.name}
                additionalClasses="bg-transparent mt-4 md:mt-0 px-4 text-[22px] w-full 
                   md:mx-0 font-semibold hover:bg-primary  border-white border-2 text-white font-montserrat "
              />
            </div>
          );
        })}
      </div>

      <div className="grid grid-col gap-3 mt-[60px] md:grid-cols-2 lg:grid-cols-4 md:container md:mx-auto ">
        {showData.map((item: any, index) => {
          return (
            <div key={index} className="flex flex-col mt-6 justify-center items-center">
              <img
                src="https://res.cloudinary.com/asifsaythe/image/upload/v1693207552/new_portfolio/unsplash_iFgRcqHznqg_brukug.png"
                alt=""
                className=" rounded-full "
              />
              <h1 className="text-2xl font-montserrat text-white font-semibold ">
                John Deff
              </h1>
              <p className=" text-white  ">Ceo at TopSol</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}
