import React from "react";
import heroImg from '../../../images/hero-bg.png';

export default function Hero() {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          A <span className="text-[#00B8F1]">Better</span> Approach to Develop{" "}
          <span className="text-[#00B8F1]">Software</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-8">
          Accelerate your launch by 2x with our groundbreaking development
          process, and reduce costs significantly. Say goodbye to the tedious
          process of starting from scratch and embrace the future of innovative
          app development.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            className="px-6 py-2 bg-[#00B8F1] text-white font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out mb-2 sm:mb-0"
          >
            Let's Talk
          </button>
          <button
            type="button"
            className="px-6 py-2 border border-[#00B8F1] text-[#00B8F1] font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight uppercase rounded shadow-md hover:text-white hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            Get a quote
          </button>
        </div>
      </div>
    </div>
  );
}
