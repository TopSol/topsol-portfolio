import React from "react";
import Navbar from "../components/Navbar";
import RatingSection from "../components/ratingSection";
import VidoeHero from "../components/VidoeHero";
import Footer from "../components/footerSection";
export default function aboutUs() {
  return (
    <div>
      <Navbar />
      <VidoeHero />
      <div className="flex flex-col md:flex-row  lg:container mx-auto mt-14 ">
        <div className=" w-full justify-center   md:w-[60%]">
          <img
            src="https://res.cloudinary.com/asifsaythe/image/upload/v1692950236/new_portfolio/z18gbk01ycabyflhuixa.png"
            alt=""
            srcset=""
            className="w-[90%] justify-center mr-auto "
          />
        </div>
        <div className=" mx-6  md:w-[40%] flex flex-col md:justify-center mt-5 md:mt-0 ">
          <p className=" text-justify text-lg font-montserrat text-primary">
            Work with the Tech Leader.
          </p>
          <h1 className=" text-justify text-[20px]  lg:text-[30px] font-semibold font-montserrat my-5 md:my-10 ">
            Topsol brings ideas to life, leveraging modern technologies.
          </h1>
          <p className=" text-base md:text-xl font-montserrat text-justify">
            Founded [Year], Topsol's evolution from a compact team to a dynamic
            mobile-first software development company showcases our commitment.
            With industry-leading team satisfaction, recognized by analysts, and
            a growing client roster including, we're honored to have supported
            startups and distinguished brands alike.
          </p>
        </div>
      </div>
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
                  100+
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
      <div className="flex my-[90px] flex-col md:flex-row md:container mx-auto justify-between" >
        <div>
          <h1 className="text-[34px] font-semibold font-montserrat " >Where to Find us</h1>
          <img
            src="https://res.cloudinary.com/asifsaythe/image/upload/v1692963971/new_portfolio/xpsckv18mrdifj1hzvlz.png"
            alt=""
            srcset=""
            className="mt-[30px]"
          />
          <div>
            <div className="flex">
                <p>Sitara Techno Park, 2nd Floor,
Lower Canal Road East Faisalabad, Pakistan</p>
            </div>
           
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/asifsaythe/image/upload/v1692964174/new_portfolio/svmimvcbnjgiqe3bnwoc.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
     
      <Footer />
    </div>
  );
}
