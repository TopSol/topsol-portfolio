import React from "react";
import heroImg from '../../images/hero-bg.png';
export default function Hero() {
  return (
    <div
    className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
      >
     
          <div className="flex text-center justify-center py-40 px-10  ">
            <div className="  ">
              <h1 className=" text-5xl font-bold ">
                A <span className="text-[#00B8F1]">Better</span> Approach to Develop <span className="text-[#00B8F1]">Software</span>
              </h1>
              <p className="mt-10 px-44 lg:leading-6 text-sm xl:text-lg ">
                Accelerate your launch by 2x with our groundbreaking development
                process, and reduce costs significantly. Say goodbye to the
                tedious process of starting from scratch and embrace the future
                of innovative app development.
              </p>
              <div className=" flex items-center justify-center mt-12">
                {/* <a href="#contact-us"> */}
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 mr-2  bg-[#00B8F1]  hover:border-blue-700  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Let's Talk
                  </button>
                  <button
                   type="button"
                   className="px-6 py-2 ml-2 border border-[#00B8F1] text-[#00B8F1] hover:text-white  font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                   >
                    Get a quote
                  </button>
                {/* </a> */}
              </div>
            </div>
          </div>
    </div>
  );
}
