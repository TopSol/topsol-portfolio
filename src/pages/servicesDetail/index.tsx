import React from "react";
import Navbar from "../../components/Navbar";
import InfoSection from "../../components/infoSection";
import Footer from "../../components/footerSection";
import { data, data2 } from "./data";
import PrimaryBtn from "../../components/PrimaryBtn";
import PortfolioCard from "../../components/portfolioCard";
import HeroSection from "./component/HeroSection";
import FileIcon from "../../images/Icons/fileIcon.png";
import ProjectSection from "./component/projectSection";
export default function index() {


  const showData = data2.slice(1, 3);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <InfoSection />

      <div className="  mx-5 md:container md:mx-auto md:my-[100px] my-[50px] flex flex-row  justify-center">
        <div className=" md:w-[90%] w-[100%] text-center md:text-left flex flex-col md:justify-center" >
          <h1 className=" text-[20px] lg:text-[40px] font-semibold">
            Ready to Outshine Your Competitors Online?
          </h1>
          <p className="lg:text-[24px] text-[20px] font-medium mt-[30px]">
            Topsol crafts websites that captivate customers, load swiftly, offer
            effortless maintenance, and adapt seamlessly to your business growth.
          </p>
        </div>
      </div>

      <div className="md:container mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
        {data.map((item: any, index) => {
          return (
            <div className="px-[25px] mx-5 md:mx-0 border-primary hover:bg-primary hover:text-white border-2 rounded-xl  py-2 ">
              <img src={FileIcon} className="w-[60px] bg-white rounded-full p-3 h-[60px] " alt="" />
              <h1 className="font-semibold text-[20px] font-montserrat my-3 ">
                {item.heading}
              </h1>
              <p className="text-[11px] font-montserrat">
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>

      <ProjectSection />
      <Footer />
    </div>
  );
}
