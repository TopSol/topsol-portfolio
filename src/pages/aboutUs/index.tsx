import React from "react";
import Navbar from "../../components/Navbar";
import RatingSection from "../home/ratingSection";
import VidoeHero from "../../components/VidoeHero";
import Footer from "../../components/footerSection";
import InfoSection from "../../components/infoSection";
import AddressSection from "../../components/addressSection";
import Experience from "./component/Experience";
import aboutUsData from "../../staticData/aboutusData";

const aboutUs = () => {
  return (
    <div>
      <Navbar />
      <VidoeHero
        image="https://res.cloudinary.com/asifsaythe/image/upload/v1697092135/new_portfolio/about_us_lcfcpj.png"
        title="About TopSol"
      />
      <InfoSection
        heading={aboutUsData?.heading}
        mainHeading={aboutUsData?.mainHeading}
        initialText={aboutUsData?.initialText}
      />
      <Experience />
      <div className="mt-[40px]">
        <RatingSection />
      </div>
      <AddressSection />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};
export default aboutUs;

export function Head() {
  return (
    <>
      <title>TOPSOL Innovative Solution</title>
      <meta name="description" content="TOPSOL | About Us " />
      <link rel="icon" href="/topsol-favicon.png" type="image/png"></link>
    </>
  );
}
