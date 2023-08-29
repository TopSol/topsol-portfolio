import React from 'react'

export default function InfoSection() {
  return (
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
  )
}
