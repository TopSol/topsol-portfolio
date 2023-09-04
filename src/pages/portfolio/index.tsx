import React from "react";
import Navbar from "../../components/Navbar";
import VideoHero from "../../components/VidoeHero";
import { data, data2 } from "./data";
import PrimaryBtn from "../../components/PrimaryBtn";
import Footer from "../../components/footerSection";
import PortfolioCard from "../../components/portfolioCard";
import SmallFooter from "../../components/SmallFooter";
export default function index() {
  const [selectWorkers, setSetWorkers] = React.useState("All");

  return (
    <div>
      <Navbar />
      <VideoHero />
      <div className="flex  flex-col justify-center items-center     ">
        <div className="">
          <h1 className="font-extrabold text-textColors font-montserrat text-3xl md:text-3xl lg:text-4xl mt-6 text-center">
            Our Recent work
          </h1>
        </div>
        <div
          className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#00B8F1] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44 mt-4"
        ></div>
      </div>
      <div className=" grid grid-col gap-3 items-center mt-[100px] md:grid-cols-3 lg:grid-cols-4  md:container md:mx-auto ">
        {data.map((item: any, index) => {
          return (
            <div
              className="mx-5 md:mx-0 flex justify-between   "
              key={index}
              onClick={() => {
                console.log("hello im am hear -----------------");
                setSetWorkers(item.name);
              }}
            >
              <PrimaryBtn
                text={item.name}
                additionalClasses="bg-primary mt-4 md:mt-0 px-4 text-[22px] w-full 
                   md:mx-0 font-semibold hover:bg-primary text-white font-montserrat "
              />
            </div>
          );
        })}
      </div>

      {data2.map((item: any, index) => {
        return (
          // <div
          //   key={index}
          //   className={`flex flex-col  md:container md:mx-auto items-center ${item.side}`}
          // >
          //   <div className="md:w-1/2">
          //     <img
          //       src="https://res.cloudinary.com/asifsaythe/image/upload/v1693218773/new_portfolio/Group_9059_xlercr.png"
          //       alt=""
          //       srcset=""
          //     />
          //   </div>
          //   <div className="md:w-1/2 flex flex-col  justify-between mx-5 md:mx-0 ">
          //     <h1 className=" text-xl  md:text-[25px] font-semibold font-montserrat text-primary  ">
          //       Green tea studio, a useful website UK based
          //     </h1>
          //     <h3 className=" text-3xl md:text-[40px] font-montserrat font-semibold my-[37px] ">
          //       Green Tea Studios, developed by our experienced team
          //     </h3>
          //     <p className=" text-base md:text-[20px] ">
          //       Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          //       eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
          //       metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
          //       interdum tellus elit sed risus. Maecenas eget condimentum velit,
          //       sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
          //       torquent per
          //     </p>
          //   </div>
          // </div>
          <PortfolioCard heading={item.heading} discription={item.discription}  direction={item.side} />
        );
      })}

      <SmallFooter/>

      {/* <Footer /> */}
    </div>
  );
}
