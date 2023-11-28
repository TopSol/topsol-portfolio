import React, { useRef } from "react";
import { Link } from "gatsby";
import PrimaryBtn from "../../../components/PrimaryBtn";
import { useInView } from "framer-motion";

interface propTypes {
  servicedata?: any;
  imageHead: string;
}

export default function HeroSection({ servicedata, imageHead }: propTypes) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const splitTitle = servicedata?.heading?.split(" ");
  const firstName = splitTitle ? splitTitle[0] : "";
  const lastName = splitTitle ? splitTitle.slice(1).join(" ") : "";

  return (
    <div className=" ">
      <div
        className="flex items-center  bg-cover md:h-[70vh] h-[90vh]"
        style={{
          backgroundImage: `url(${imageHead})`,
        }}
      >
        <section
          className="   flex flex-col  md:container mx-auto "
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="     md:mx-auto md:w-[90%] ">
            <div className="  ">
              <h1 className="text-4xl hei leading-normal   text-center md:text-start md:text-[54px] font-bold font-montserrat">
                <span className={`text-white `}>{firstName}</span>{" "}
                <span className="text-primary">{lastName}</span>
              </h1>
              <h3
                className={`text-center md:text-start  md:text-[28px]  font-figtree font-light text-white  hero-text-sideLine   lg:w-[75%] mt-[56px]`}
              >
                {servicedata?.desc}
              </h3>
              <Link to="/contactUs">
                <div className="flex  justify-center md:justify-start">
                  <PrimaryBtn
                    text="Get Started"
                    icon={true}
                    additionalClasses="text-primary flex items-center font-figtree md:py-[16px]  py-[10px]  md:px-[68px] px-[58px]  bg-none text-[12px] md:text-[18px] mt-[68px] text-white rounded-[6px] "
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
