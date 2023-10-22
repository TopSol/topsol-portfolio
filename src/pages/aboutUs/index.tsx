import React from "react";
import Navbar from "../../components/Navbar";
import RatingSection from "../home/ratingSection";
import VidoeHero from "../../components/VidoeHero";
import Footer from "../../components/footerSection";
import InfoSection from "../../components/infoSection";
import AddressSection from "../../components/addressSection";
import Experience from "./component/Experience";

const aboutUsData = {
  heading: "Work with the Tech Leader.",
  mainHeading: "Topsol brings ideas to life, leveraging modern technologies.",
  initialText:
    "Founded 2020, Topsol's evolution from a compact team to a dynamic mobile-first software development ompany showcases our commitment. With industry-leading team satisfaction, recognized by analysts, and a growing lient roster including, we're honored to have supported startups and distinguished brands alike.",
};

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
