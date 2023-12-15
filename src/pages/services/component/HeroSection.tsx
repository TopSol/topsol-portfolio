import React, { useRef } from "react";
import { Link } from "gatsby";
import PrimaryBtn from "../../../components/PrimaryBtn";

interface propTypes {
  servicedata?: any;
}

export default function HeroSection({ servicedata }: propTypes) {
  const splitTitle = servicedata?.heading?.split(" ");
  const firstName = splitTitle ? splitTitle[0] : "";
  const lastName = splitTitle ? splitTitle.slice(1).join(" ") : "";

  return (
    <div className=" ">
      <div
        className="flex items-center  bg-cover lg:h-[70vh] md:h-[90vh] h-[70vh]"
        style={{
          backgroundImage: `url(${servicedata?.servicesHeader})`,
        }}
      >
        <section
          className="   flex flex-col  md:container mx-auto "
          data-aos="fade-up"
        >
          <div className="     md:mx-auto md:w-[90%] ">
            <div className="  ">
              <h1 className="text-4xl hei leading-normal   text-center md:text-start lg:text-[54px] font-bold font-montserrat">
                <span className={`text-white `}>{firstName}</span>{" "}
                <span className="text-primary">{lastName}</span>
              </h1>
              <h3
                className={`text-center md:text-start  md:text-[22px]  font-figtree font-light text-white  hero-text-sideLine   lg:w-[75%] mt-[56px]`}
              >
                {servicedata?.desc}
              </h3>
              <div className="flex  justify-center md:justify-start">
                <Link to="/contactUs">
                  <PrimaryBtn
                    text="Get Started"
                    icon={true}
                    additionalClasses="text-primary flex items-center font-figtree md:py-[16px]  py-[10px]  md:px-[68px] px-[58px]  bg-none text-[12px] md:text-[18px] mt-[68px] text-white rounded-[6px] "
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
