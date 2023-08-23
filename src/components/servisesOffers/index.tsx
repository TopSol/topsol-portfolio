import React from "react";
import dotImg from "../../images/dot.png";
import groupImg from "../../images/group.png";
import circleImg from "../../images/hero-circle.png";

function ServicesOffers() {
  return (
    <div className="py-12 relative">
      <img src={circleImg} className="absolute right-0 top-36" />
      <div className="flex">
        <div className="">
          <img src={dotImg} className=" px-10" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center  font-bold text-4xl pb-6">
            <h1>Services We Offer</h1>
          </div>
          <div
            className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#00B8F1] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44"
          ></div>

          <div className="w-[55%] pt-6 text-center justify-center">
            <p>
              From Industry Titans to Emerging Ventures - Topsol Empowers You
              with the Fusion of Creative, Technical, and Business Expertise
              Needed to Thrive
            </p>
          </div>
        </div>
      </div>

      <div className="px-24 pt-14 grid grid-cols-4 grid-rows-2 gap-x-6 gap-y-6">
        <div className=" border-2  hover:bg-[#32CFFF] hover:text-white border-[#32CFFF] rounded-2xl  w-[264px] h-[369px]  items-center">
            <div className="flex flex-col hover:translate-y-2 w-full items-center px-4 ">
          <div className="mb-2">
            <img src={groupImg} />
          </div>
          <div className="py-4 font-extrabold">
            <p>CUSTOM SOFTWARE</p>
          </div>
          <div className="text-center pt-4 leading-8">
            <p>
              Our Custom Software Solutions are meticulously designed to fit
              your unique needs, delivering efficiency, scalability, and a
              technological edge
            </p>
          </div>
          </div>
        </div>
        <div className="border-2 hover:bg-[#32CFFF] hover:text-white border-[#32CFFF] rounded-2xl w-[264px] h-[369px]">
        <div className="flex flex-col hover:translate-y-2 w-full items-center px-4 ">
          <div>
            <img src={groupImg} />
          </div>
          <div className="py-6 font-extrabold">
            <p>DEVOPS</p>
          </div>
          <div className="text-center pt-2 leading-8">
            <p>
              Our DevOps Services unify development and operations, streamlining
              workflows for faster, reliable software delivery
            </p>
          </div>
          </div>
        </div>
        <div className="border-2 hover:bg-[#32CFFF] hover:text-white border-[#32CFFF] rounded-2xl w-[264px] h-[369px]">
        <div className="flex flex-col hover:translate-y-2 w-full items-center px-4 ">
          <div>
            <img src={groupImg} />
          </div>
          <div className="py-6 font-extrabold">
            <p>TEAM AUGMENTATION</p>
          </div>
          <div className="text-center pt-2 leading-8">
            <p>
              Our Team Augmentation services integrate skilled professionals
              seamlessly into your projects, amplifying your capabilities and
              accelerating success
            </p>
          </div>
          </div>
        </div>
        <div className="border-2 hover:bg-[#32CFFF] hover:text-white border-[#32CFFF] rounded-2xl w-[264px] h-[369px]">
        <div className="flex flex-col hover:translate-y-2 w-full items-center px-4 ">
          <div>
            <img src={groupImg} />
          </div>
          <div className="py-6 font-extrabold">
            <p>DISCOVER WORKSHOP</p>
          </div>
          <div className="text-center pt-2 leading-8">
            <p>
              Our Discovery Workshops dive into your goals, identifying
              technology solutions that fuel growth, efficiency, and innovation
            </p>
          </div>
          </div>
        </div>

        <div className="border-2 hover:bg-[#32CFFF] hover:text-white border-[#32CFFF] rounded-2xl w-[264px] h-[369px]">
        <div className="flex flex-col hover:translate-y-2 w-full items-center px-4 ">
          <div>
            <img src={groupImg} />
          </div>
          <div className="py-6 font-extrabold">
            <p>MOBILE APPS</p>
          </div>
          <div className="text-center pt-2 leading-8">
            <p>
              Our Mobile App solutions blend innovation and functionality,
              crafting dynamic experiences that connect users with your brand on
              the go
            </p>
          </div>
          </div>
        </div>
        <div className="border-2 hover:bg-[#32CFFF] hover:text-white border-[#32CFFF] rounded-2xl w-[264px] h-[369px]">
        <div className="flex flex-col hover:translate-y-2 w-full items-center px-4 ">
          <div>
            <img src={groupImg} />
          </div>
          <div className="py-6 font-extrabold">
            <p>QUALITY ASSURANCE</p>
          </div>
          <div className="text-center pt-2 leading-8">
            <p>
              Our Quality Assurance Services fine-tune solutions, ensuring
              flawless performance and seamless user experiences
            </p>
          </div>
          </div>
        </div>
        <div className="border-2 hover:bg-[#32CFFF] hover:text-white border-[#32CFFF] rounded-2xl w-[264px] h-[369px]">
        <div className="flex flex-col hover:translate-y-2 w-full items-center px-4 ">
          <div>
            <img src={groupImg} />
          </div>
          <div className="py-6 font-extrabold">
            <p>UI/UX DESIGN</p>
          </div>
          <div className="text-center pt-2 leading-8">
            <p>
              Our UI/UX Design expertise crafts intuitive interfaces, marrying
              aesthetics with functionality for unparalleled user journeys
            </p>
          </div>
          </div>
        </div>
        <div className="border-2 hover:bg-[#32CFFF] hover:text-white border-[#32CFFF] rounded-2xl w-[264px] h-[369px]">
        <div className="flex flex-col hover:translate-y-2 w-full items-center px-4 ">
          <div>
            <img src={groupImg} />
          </div>
          <div className="py-6 font-extrabold">
            <p>AI & CHAT GPT</p>
          </div>
          <div className="text-center pt-2 leading-8">
            <p>
              Our AI & Chat GPT services harness the potential of advanced
              technology, engaging users in dynamic conversations and automating
              tasks with intelligence
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesOffers;
