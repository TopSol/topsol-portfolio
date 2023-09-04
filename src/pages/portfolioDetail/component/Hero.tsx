import React from 'react'
import PrimaryBtn from '../../../components/PrimaryBtn'

export default function Hero() {
  return (
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
  )
}
