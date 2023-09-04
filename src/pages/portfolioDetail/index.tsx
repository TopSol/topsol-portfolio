import React from "react";
import Navbar from "../../components/Navbar";
import SmallFooter from "../../components/SmallFooter";
import Footer from "../../components/footerSection";
import PrimaryBtn from "../../components/PrimaryBtn";
import check1 from "../../images/check1.png";
import { dataList } from "./data";
export default function index() {
  console.log(dataList, "dataList is hear -----------------");
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="bg-gradient-to-b from-secondary  to-primary  ">
          <div className="flex flex-col font-montserrat text-white justify-center items-center mx-6   lg:w-[55%] xl:w-[50%] md:mx-auto te ">
            <h1 className="text-[50px] text-center font-bold mt-[70px] ">
              Video Downloader App
            </h1>
            <p className="text-2xl text-center mt-[50px] ">
              This is App developed by talented team of topsol. Through this app
              you can download any video from any social media platform. And it
              is totally free and also avialable on Playstore{" "}
            </p>
            <div className="w-[270px] my-[50px] pb-[200px]  md:pb-[300px] ">
              <PrimaryBtn
                text="Download Now"
                additionalClasses=" bg-white text-primary hover:bg-primary hover:text-white "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center" >
          <img
            src="https://res.cloudinary.com/asifsaythe/image/upload/v1693297052/new_portfolio/image_1_1_my7upi.png"
            alt=""
            className="absolute  "
          />
        </div>
      </div>

      <div className="flex font-montserrat mt-[250px] md:mt-[350px] flex-col md:flex-row md:container justify-between  md:mx-auto">
        <div className=" mx-6 md:0 md:w-[50%] lg:w-[50%]">
          <h1 className="text-[36px] md:text-[30px] lg:text-[36px] font-bold font-montserrat  ">
            About Video Downloader
          </h1>
          <p className="text-[22px] md:text-[18px]  lg:text-[22px]  font-montserrat mt-[36px] ">
            Effortlessly capture your favorite videos with our Video Downloader
            App. Simply paste the video URL, and our app swiftly converts and
            saves the content to your device. Enjoy seamless downloads from
            popular platforms, ensuring you can watch offline without any
            connectivity constraints.
          </p>
          <p className="mt-[30px] text-[22px] md:text-[18px]  lg:text-[22px]  ">
            The app's intuitive interface makes organizing and accessing your
            downloaded content a breeze, allowing you to curate your own
            personalized video library
          </p>
        </div>
        <div className=" md:w-[50%]  mt-6 md:mt-0 mx-6 md:0 lg:w-[30%] border-2 border-gray-300 px-[40px] rounded-[10px] py-[40px]">
          <h1 className="text-[25px] font-bold font-montserrat text-textColors ">
            Looking for something similar?
          </h1>
          <p className="text-[18px] font-montserrat my-[28px] ">
            Our experienced and talented team is always ready to help you
            achieve your goal.Our team has provided a lot of people their
            business solutions
          </p>
          <div className="mt-[28px]">
            <PrimaryBtn text="Content Us" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center mx-6 md:mx-0">
          <video
            src="https://tecdn.b-cdn.net/img/video/forest.mp4"
            className="h-[50vh] my-[20px] mx-6 md:mx-0 md:my-[70px]"
            autoPlay
            muted
            loop
          ></video>
        </div>

        <div className="flex flex-col justify-center items-center     ">
          <div className="">
            <h1 className="font-extrabold text-textColors font-montserrat text-3xl md:text-3xl lg:text-4xl mt-6 text-center">
              Unlock Media Magic with VidMaster
            </h1>
          </div>
          <div
            className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#00B8F1] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44 mt-4"
          ></div>
        </div>

        <div className="md:container mx-auto">
          <p className=" text-xl mx-6 md:text-2xl font-montserrat  mt-[20px] ">
            VidMaster stands as a mobile application designed to redefine your
            entertainment experience. Seamlessly search and instantly download
            videos from a variety of platforms with this user-friendly app.
            <br />
            <br />
            The app empowers content seekers to swiftly download their desired
            videos by simply entering the video's URL. It's a one-tap solution
            to enjoying your favorite videos offline, anytime.
            <br />
            <br />
            VidMaster not only caters to users but also provides a space for
            content creators. Video enthusiasts can promote their content by
            setting up professional profiles on the service provider interface.
            With a consumer interface, a service provider portal, and an admin
            panel, VidMaster is designed for a seamless experience
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-7">
        <img
          src="https://res.cloudinary.com/asifsaythe/image/upload/v1693228997/new_portfolio/image_2_d8157f.png"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold my-6">Client's Vision</h2>
        <div>
          {dataList.map((item: any, index) => {
            return (
              <div>
                <div className="flex py-2">
                  <img src={check1} className="mr-4" />
                  <p>{item.item}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SmallFooter />
      {/* <Footer /> */}
    </div>
  );
}
