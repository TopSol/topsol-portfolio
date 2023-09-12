import React, { useState, useEffect, useRef } from 'react'
import { AnimatedValue } from './NumberAnimation';
import { useInView } from 'react-intersection-observer';

export default function Experience() {

  const [animationVisible, setAnimationVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  // You can customize the animation effect here
  const animationStyles = {
    opacity: animationVisible ? 1 : 0,
    transform: animationVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.5s, transform 0.5s',
  };

  useEffect(() => {
    if (inView) {
      // When the element is in the viewport, set animationVisible to true
      setAnimationVisible(true);
    }
  }, [inView]);
  return (
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
        <div className=" md:w-[60%] lg:w-1/2  mt-10 md:mt-0  flex flex-col justify-center items-center ">
          <div className="flex space-x-4">
            <div className="bg-white rounded-[10px]  justify-center flex flex-col items-center  px-12 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]  ">
                <div
                  className="animation-container"
                  ref={ref}
                  style={animationStyles}
                >
              <h1 className=" md:text-[35px] inline-flex text-secondary lg:text-[50px] font-bold  ">
                  <AnimatedValue start={0} end={100} duration={6000} />+
              </h1>
                </div>
              <p className="text-secondary md:text-3xl lg:text-4xl font-semibold ">
                Clients
              </p>
            </div>
            <div className="bg-white  rounded-[10px] justify-center flex flex-col items-center px-12 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]">
            <div
                  className="animation-container"
                  ref={ref}
                  style={animationStyles}
                >
              <h1 className=" md:text-[35px] inline-flex text-secondary lg:text-[50px] font-bold  ">
                  <AnimatedValue start={0} end={200} duration={6000} />+
              </h1>
                </div>
              <p className="text-secondary md:text-3xl lg:text-4xl font-semibold ">
                Clients
              </p>
            </div>
          </div>
          <div className="flex space-x-5 mt-5">
            <div className="bg-white rounded-[10px] justify-center flex flex-col items-center  px-12 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]  ">
            <div
                  className="animation-container"
                  ref={ref}
                  style={animationStyles}
                >
              <h1 className=" md:text-[35px] inline-flex text-secondary lg:text-[50px] font-bold  ">
                  <AnimatedValue start={0} end={100} duration={6000} />+
              </h1>
                </div>
              <p className="text-secondary md:text-3xl lg:text-4xl font-semibold ">
                Clients
              </p>
            </div>
            <div className="bg-white rounded-[10px] justify-center flex flex-col items-center px-12 sm:px-[100px] md:px-[60px] lg:px-[100px]  py-6 sm:py-[55px] md:py-[30px] lg:py-[56px]">
            <div
                  className="animation-container"
                  ref={ref}
                  style={animationStyles}
                >
              <h1 className=" md:text-[35px] inline-flex text-secondary lg:text-[50px] font-bold  ">
                  <AnimatedValue start={0} end={20} duration={6000} />+
              </h1>
                </div>
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
