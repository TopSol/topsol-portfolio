import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import { Link } from "gatsby";
export default function SmallFooter() {
  return (
    <div className="bg-gradient-to-b mt-[100px] md:container mx-auto flex flex-col rounded-[16px]  justify-center items-center  from-secondary to-primary py-[56px]  ">
      <h1 className="font-bold text-[40px]  md:text-[36px] font-urbanist text-center  text-white ">
        Ready to discuss your project now?
      </h1>
      <p className="mt-[40px] text-center text-white text-[20px] leading-[120%] font-light font-figtree">Collaborate with us to turn your vision into a reality that surpasses your expectations and goals</p>
      <Link to="/contactUs">
        <PrimaryBtn
          text="Get Started"
          icon={true}
          additionalClasses="text-primary border-2 border-white hover:border-primary flex items-center font-figtree py-[16px] sm:px-[88px] px-[68px] bg-transparent text-[18px] mt-[40px] text-white rounded-[6px] "
        />
      </Link>
    </div>
  );
}
