import React, { useState, useEffect, useRef } from 'react'
import { AnimatedValue } from './NumberAnimation';
import { useInView } from 'react-intersection-observer';

export default function Experience() {

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="bg-gradient-to-b from-secondary to-primary mt-[80px]  ">
      <div className="md:w-[90%] 2xl:container mx-auto flex flex-col md:flex-row pt-[48px] pb-[140px] md:pt-[160px] md:pb-[160px] items-center justify-between">
        <div className=" xl:w-[35%] lg:w-[35%] lg:text-center  text-white ">
          <h1 className="  lg:ml-0 text-center text-[120px] font-semibold md:text-[100px] lg:text-[120px]">
            12
          </h1>
          <p className=" text-[35px] md:text-[28px] xl:text-[35px] font-semibold ">
            Years Experience
          </p>
        </div>
        <div className=" md:w-[50%] md:mx-auto mt-10 md:mt-0 mx-[18px] flex flex-col justify-center items-center ">
          <div className="flex space-x-4">
            <div className="bg-white rounded-[10px]  justify-center flex flex-col items-center  px-10 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]  ">
              <div
                ref={ref}
              >
                <h1 className=" md:text-[35px] inline-flex text-secondary lg:text-[50px] font-bold  ">
                  <AnimatedValue start={0} end={100} duration={6000} /> +
                </h1>
              </div>
              <p className="text-secondary md:text-3xl lg:text-4xl font-semibold ">
                Clients
              </p>
            </div>
            <div className="bg-white  rounded-[10px] justify-center flex flex-col items-center px-10 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]">
              <div
                ref={ref}
              >
                <h1 className=" md:text-[35px] inline-flex text-secondary lg:text-[50px] font-bold  ">
                  <AnimatedValue start={0} end={200} duration={6000} /> +
                </h1>
              </div>
              <p className="text-secondary md:text-3xl lg:text-4xl font-semibold ">
                Clients
              </p>
            </div>
          </div>
          <div className="flex space-x-5 mt-5">
            <div className="bg-white rounded-[10px] justify-center flex flex-col items-center  px-10 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]  ">
              <div
                ref={ref}
              >
                <h1 className=" md:text-[35px] inline-flex text-secondary lg:text-[50px] font-bold  ">
                  <AnimatedValue start={0} end={100} duration={6000} /> +
                </h1>              </div>
              <p className="text-secondary md:text-3xl lg:text-4xl font-semibold ">
                Clients
              </p>
            </div>
            <div className="bg-white rounded-[10px] justify-center flex flex-col items-center px-10 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]">
              <div
                ref={ref}
              >
                <h1 className=" md:text-[35px] inline-flex  text-secondary lg:text-[50px] font-bold  ">
                  <AnimatedValue start={0} end={20} duration={6000} /> +
                </h1>              </div>
              <p className="text-secondary md:text-3xl lg:text-4xl font-semibold ">
                Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
