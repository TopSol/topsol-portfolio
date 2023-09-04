import React from "react";
import PrimaryBtn from "./PrimaryBtn";
export default function VideoHero() {
  return (
    <div>
      <section className=" h-screen flex flex-col items-center justify-center  text-white ">   
        <div className="video-docker  w-full h-full overflow-hidden">
          <video
            src="https://tecdn.b-cdn.net/img/video/forest.mp4"
            type="video/mp4"
            loop
            className="w-full h-[100vh] object-cover"
            autoPlay
            muted
          ></video>
        </div>
        <div className="video-content space-y-8 absolute mx-6   md:mx-auto md:container ">
          <h1 className=" text-4xl  md:text-[54px] font-bold text-textColors font-montserrat">About <samp className=" font-montserrat text-primary" >TopSol</samp></h1>
          <h3 className="text-base md:text-[27px] font-medium font-montserrat text-textColors   lg:w-1/2 mb-8 ">
            Topsol is a software and mobile app development company with a
            world-class team of talented data scientists, developers, designers,
            mathematicians, engineers, and creative artists. We are motivated to
            build elegant and functional digital products that solve complex
            problem.
          </h3>
          <PrimaryBtn text="Get Started"  />
        </div>
      </section>
    </div>
  ); 
}
