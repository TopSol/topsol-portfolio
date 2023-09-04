import React,{useState} from "react";
import Navbar from "../../components/Navbar";
import RatingSection from "../home/ratingSection";
import VidoeHero from "../../components/VidoeHero";
import Footer from "../../components/footerSection";

import PrimaryBtn from "../../components/PrimaryBtn";
import InfoSection from "../../components/infoSection";
import AddressSection from "../../components/addressSection";
import { btnData, data } from "./data";
export default function aboutUs() {
  const [ selectWorkers , setSetWorkers] = useState("All")
  const filterData = data.filter((item:any)=>{
    if(item.catagory === selectWorkers){
      return item
    }
  })
  const showData = selectWorkers === "All" ? data : filterData
  return (
    <div>
      <Navbar />
      <VidoeHero />
      
      <InfoSection/>
      <div className="bg-gradient-to-b from-secondary to-primary mt-[80px]  ">
        <div className="md:container mx-auto flex flex-col md:flex-row  py-[160px] items-center justify-between">
          <div className=" md:w-[40%] lg:w-1/2 lg:text-center  text-white ">
            <h1 className="font-montserrat ml-16 lg:ml-0  text-[150px] font-semibold md:text-[100px] lg:text-[150px]">
              12
            </h1>
            <p className=" text-[35px] md:text-[28px] lg:text-[35px] font-semibold font-montserrat">
              Years Experience
            </p>
          </div>
          <div className=" md:w-[60%]lg:w-1/2  mt-10 md:mt-0  flex flex-col justify-center items-center ">
            <div className="flex space-x-5">
              <div className="bg-white rounded-[10px] justify-center flex flex-col items-center  px-12 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]  ">
                <h1 className="font-montserrat md:text-[35px]  lg:text-[50px] font-bold  ">
                  100+
                </h1>
                <p className="text-secondary md:text-3xl lg:text-4xl font-semibold ">
                  Clients
                </p>
              </div>
              <div className="bg-white  rounded-[10px] justify-center flex flex-col items-center px-12 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]">
                <h1 className="font-montserrat md:text-[35px]  lg:text-[50px] font-bold  ">
                  100+
                </h1>
                <p className="text-secondary md:text-3xl lg:text-4xl font-semibold ">
                  Clients
                </p>
              </div>
            </div>
            <div className="flex space-x-5 mt-5">
              <div className="bg-white rounded-[10px] justify-center flex flex-col items-center  px-12 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]  ">
                <h1 className="font-montserrat md:text-[35px]  lg:text-[50px] font-bold  ">
                  100+
                </h1>
                <p className="text-secondary md:text-3xl lg:text-4xl font-semibold ">
                  Clients
                </p>
              </div>
              <div className="bg-white rounded-[10px] justify-center flex flex-col items-center px-12 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]">
                <h1 className="font-montserrat md:text-[35px]  lg:text-[50px] font-bold  ">
                  200+
                </h1>
                <p className="text-secondary md:text-3xl lg:text-4xl font-semibold ">
                  Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RatingSection />

      <div className="bg-gradient-to-b from-secondary to-primary pt-[53px] pb-[150px] ">
        <div className="flex flex-col justify-center items-center     ">
          <div className="">
            <h1 className="font-extrabold text-white font-montserrat text-3xl md:text-3xl lg:text-4xl mt-6 text-center">
              Our Team
            </h1>
          </div>
          <div
            className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#00B8F1] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44 mt-4"
          ></div>
        </div>
        <div className=" grid grid-col gap-3 mt-8 md:grid-cols-3 lg:grid-cols-6 md:container md:mx-auto ">
          {btnData.map((item: any,index) => {
            return (
              <div className="mx-5 md:mx-0  " key={index} onClick={()=>{
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
          { showData.map((item: any ,index) => {
            return (
              <div key={index} className="flex flex-col mt-6 justify-center items-center">
                <img
                  src="https://res.cloudinary.com/asifsaythe/image/upload/v1693207552/new_portfolio/unsplash_iFgRcqHznqg_brukug.png"
                  alt=""
                  srcset=""
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
          <AddressSection/>
     
<div className="mt-10">
      <Footer />
</div>
    </div>
  );
}
