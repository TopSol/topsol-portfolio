import React from "react";
import Navbar from "../../components/Navbar";
import VideoHero from "../../components/VidoeHero";
import ServicesOffers from "../home/servisesOffers";
import RatingSection from "../home/ratingSection";
import Footer from "../../components/footerSection";
import FileIcon from "../../images/Icons/fileIcon.png";
import AddressSection from "../../components/addressSection";
import { data } from "./data";

export default function index() {
  return (
    <div>
      <Navbar />
      <VideoHero />
      <ServicesOffers />

      <div className="bg-gradient-to-b from-secondary to-primary  py-10 mt-12">
        <div className="flex flex-col justify-center items-center     ">
          <div className="">
            <h1 className="font-extrabold text-white  text-3xl md:text-3xl lg:text-4xl mt-6 text-center">
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
          <div className=" my-[100px] md:container mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
            {data.map((item: any, index) => {
              return (
                <div className="px-[25px] mx-5 md:mx-0 bg-white  hover:bg-primary hover:text-white  rounded-xl  py-2 ">
                  <img
                    src={FileIcon}
                    className="w-[60px] bg-white rounded-full p-3 h-[60px] "
                    alt=""
                  />
                  <h1 className="font-semibold text-[20px]  my-3 ">
                    {item.heading}
                  </h1>
                  <p className="text-[11px] ">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <RatingSection />
      <AddressSection />
      {/* <Footer/> */}
    </div>
  );
}
