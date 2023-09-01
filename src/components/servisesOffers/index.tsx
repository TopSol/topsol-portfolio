import React from "react";
import dotImg from "../../images/dot.png";
import groupImg from "../../images/group.png";
import circleImg from "../../images/hero-circle.png";
import ServicesCards from "../servisesCards/ServicesCards";
import AnimateHr from "../animatedLine/AnimateHr";

const cards = [
  {
    heading: "CUSTOM SOFTWARE",
    desc: "Our Custom Software Solutions are meticulously designed to fit your unique needs, delivering efficiency, scalability, and a technological edge",
    avatar: groupImg,
  },
  {
    heading: "DEVOPS",
    desc: "Our DevOps Services unify development and operations,streamlining workflows for faster, reliable software delivery",
    avatar: groupImg,
  },
  {
    heading: "TEAM AUGMENTATION",
    desc: "Our Team Augmentation services integrate skilled professionals seamlessly into your projects, amplifying your capabilities and accelerating success",
    avatar: groupImg,
  },
  {
    heading: "DISCOVER WORKSHOP",
    desc: "Our Discovery Workshops dive into your goals, identifying technology solutions that fuel growth, efficiency, and innovation",
    avatar: groupImg,
  },
  {
    heading: "MOBILE APPS",
    desc: "Our Mobile App solutions blend innovation and functionality, crafting dynamic experiences that connect users with your brand on the go",
    avatar: groupImg,
  },
  {
    heading: "QUALITY ASSURANCE",
    desc: "Our Quality Assurance Services fine-tune solutions, ensuring flawless performance and seamless user experiences",
    avatar: groupImg,
  },
  {
    heading: "UI/UX DESIGN",
    desc: "Our UI/UX Design expertise crafts intuitive interfaces, marrying aesthetics with functionality for unparalleled user journeys",
    avatar: groupImg,
  },
  {
    heading: "AI & CHAT GPT",
    desc: "Our AI & Chat GPT services harness the potential of advanced technology, engaging users in dynamic conversations and automating tasks with intelligence",
    avatar: groupImg,
  },
];

function ServicesOffers() {
  return (
    <div className="py-12 lg:relative flex flex-col justify-center items-center px-2">
   
    <div className="">

      <div className="w-1/2 mx-auto flex flex-col justify-center items-center lg:mr-auto">
        <div className="text-center font-bold text-4xl pb-6">
          <h1>Services We Offer</h1>
        </div>
        <div className="w-[150px] my-4">
          <AnimateHr bgColor={"[#00B8F1]"} />
        </div>
        <div className="pt-6 mb-[65px] pb-4 text-center md:block hidden">
          <p>
            From Industry Titans to Emerging Ventures - Topsol Empowers You
            with the Fusion of Creative, Technical, and Business Expertise
            Needed 
          </p>
        </div>
      </div>
    </div>

    <div className="grid  md:container mx-auto gap-x-3 gap-y-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
      {cards?.map((item, index) => (
        <div key={index}>
          <ServicesCards
            avatar={item.avatar}
            heading={item.heading}
            desc={item.desc}
          />
        </div>
      ))}
    </div>
  </div>
  );
}

export default ServicesOffers;
