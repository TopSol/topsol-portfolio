import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import heroImg from "../images/hero-bg.png";
import heroImage from '../images/heroImage.png'
import { Link } from "gatsby";
import ServicesOffers from "../pages/home/servisesOffers";
interface Iprops {
  title: string;
  image?: string;
}

export default function VideoHero({ title, image }: Iprops) {
  const splitTitle = title?.split(" ");
  const firstName = splitTitle[0];
  const lastName = splitTitle.slice(1).join(" ");

  return (
    <div className=" ">
      <div
      // className="bg-cover  bg-center xl:h-[100vh]"
      // style={{
      //   backgroundImage: `url(${heroImage})`,
      // }}
      >
        <section className="   flex flex-col  md:container mx-auto ">
          <div className="   mx-6   md:mx-auto md:w-[90%] ">
            <div className="  ">
              <h1 className="text-4xl mt-[158px] text-center md:text-start md:text-[54px] font-bold font-montserrat">
                <span className="text-white">{firstName}</span>{" "}
                <span className="text-primary">{lastName}</span>
              </h1>{" "}
              <h3 className="text-center md:text-start md:text-[22px]  font-figtree font-light  text-white hero-text-sideLine   lg:w-[75%] mt-[56px] ">
                Topsol is a software and mobile app development company with a
                world-class team of talented data scientists, developers,
                designers, mathematicians, engineers, and creative artists. We
                are motivated to build elegant and functional digital products
                that solve complex problem.
              </h3>
              <Link to="/contactUs">
                <div className="flex  justify-center md:justify-start">
                  <PrimaryBtn
                    text="Get Started"
                    additionalClasses="px-[68px] py-[17px] mt-[68px] text-[22px] mb-[113px] text-white "
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
