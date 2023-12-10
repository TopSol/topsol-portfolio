import React, { useEffect, useRef } from "react";
import PrimaryBtn from "./PrimaryBtn";
import heroImg from "../images/hero-bg.png";
import heroImage from '../images/heroImage.png'
import { Link } from "gatsby";

interface Iprops {
  title: string;
  image?: string;
  page: string
}

export default function VideoHero({ title, image, page }: Iprops) {
  const splitTitle = title?.split(" ");
  const firstName = splitTitle[0];
  const lastName = splitTitle.slice(1).join(" ");

  return (
    <div className=" ">
      <div
        className={`lg:h-[70vh] h-[90vh]  flex items-center ${page === 'services' ? "none" : 'bg-cover '}`}
        style={{
          backgroundImage: page === 'services' ? "none" : `url(${image})`,
        }}
      >
        <section data-aos="fade-up" className="   flex flex-col  md:container mx-auto "

        >
          <div className="   mx-6   md:mx-auto md:w-[90%] ">
            <div className="  ">
              <h1 className="text-4xl  text-center md:text-start lg:text-[60px] font-bold font-urbanist uppercase">
                <span className={`${page === 'services' || 'about' ? 'text-white' : 'text-textColors'}  font-bold font-urbanist`}>{firstName}</span>{" "}
                <span className="text-primary font-bold font-urbanist ">{lastName}</span>
              </h1>
              <h3 className={`text-center md:text-start md:text-[22px]  font-figtree font-light  ${page === 'services' || 'about' ? 'text-white' : 'text-textColors'} hero-text-sideLine   lg:w-[75%] mt-[56px]`} >
                TOPSOL is a software and mobile app development company with a
                world-class team of talented data scientists, developers,
                designers, mathematicians, engineers, and creative artists. We
                are motivated to build elegant and functional digital products
                that solve complex problem.
              </h3>
              <div className="flex  justify-center md:justify-start">
                <Link to="/contactUs">
                  <PrimaryBtn
                    text="Get Started"
                    icon={true}
                    additionalClasses="text-primary flex items-center font-figtree py-[16px] sm:px-[68px] px-[68px] bg-none text-[18px] mt-[68px] text-white rounded-[6px] "
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
