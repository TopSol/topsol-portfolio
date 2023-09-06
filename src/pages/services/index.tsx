import React from "react";
import Navbar from "../../components/Navbar";
import VideoHero from "../../components/VidoeHero";
import ServicesOffers from "../home/servisesOffers";
import RatingSection from "../home/ratingSection";
import Footer from "../../components/footerSection";
import FileIcon from "../../images/Icons/fileIcon.png";
import AddressSection from "../../components/addressSection";
import {data} from "./data";
import { Link } from "gatsby";

export default function index() {
  return (
    <div>
      <Navbar />
      <VideoHero />
      <ServicesOffers />

      <div className="bg-gradient-to-b from-secondary to-primary  ">
        <div className="flex flex-col justify-center items-center     ">
          <div className=" mt-[48px] ">
            <h1 className="font-extrabold text-white  text-3xl md:text-3xl lg:text-4xl text-center">
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

        <div className=" pb-[123px] mt-[111px] md:container mx-auto grid gap-x-[93px] gap-y-[51px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {data.map((item: any, index) => {
          return (
          <Link to={"/servicesDetail"}>
            <div className="px-[25px]  mx-5 md:mx-0 bg-white  hover:bg-primary hover:text-white  rounded-xl  py-2 ">
              <img src={FileIcon}  className="w-[60px] bg-white rounded-full p-3 h-[60px] " alt="" />
              <h1 className="font-semibold text-[20px]  my-3 ">
               {item.heading}
              </h1>
              <p className="text-[11px] mb-4 ">
                {item.detail}
              </p>
            </div>
            </Link>
          );
        })}
      </div>


        </div>
      </div>
      <div className="mt-[76px]" >
      <RatingSection />
      </div>
      <AddressSection />
      <div className="mt-[200px]">
      <Footer/>
      </div>
    </div>
  );
}
