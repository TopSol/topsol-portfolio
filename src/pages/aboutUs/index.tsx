import React from "react";
import Navbar from "../../components/Navbar";
import RatingSection from "../home/ratingSection";
import VidoeHero from "../../components/VidoeHero";
import Footer from "../../components/footerSection";
import InfoSection from "../../components/infoSection";
import AddressSection from "../../components/addressSection";
import Experience from "./component/Experience";
import aboutUsData from "../../staticData/aboutusData";
import Logo from "../../images/favicon-01.png";
import metaImage from "../../images/main-logo2.png";
import aboutHero from "../../images/aboutTopsolIcon/aboutHeader/aboutHero.webp";
import aboutInfo from "../../images/aboutTopsolIcon/aboutHeader/aboutInfo.webp";
import { ToggleBar } from "../../components/bar";

const aboutUs = () => {
  return (
    <div>
      <div>
        <Navbar />
        <ToggleBar />
      </div>
      <VidoeHero page="about" image={aboutHero} title="ABOUT US" />
      <InfoSection
        heading={aboutUsData?.heading}
        mainHeading={aboutUsData?.mainHeading}
        initialText={aboutUsData?.initialText}
        image={aboutInfo}
      />
      <Experience />
      <div className="mt-[40px]">
        <RatingSection />
      </div>
      <AddressSection />
      {/* <div className="mt-10"> */}
      <Footer />
      {/* </div> */}
    </div>
  );
};
export default aboutUs;

export function Head() {
  return (
    <>
      <title>TOPSOL Innovative Solution</title>
      <meta
        name="description"
        content="TOPSOL Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://topsol.org/" />
      <meta property="og:title" content="TOPSOL Innovative Solution" />
      <meta
        property="og:description"
        content="TOPSOL Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />
      <meta property="og:image" content={metaImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://topsol.org/" />
      <meta property="twitter:title" content="TOPSOL Innovative Solution" />
      <meta
        property="twitter:description"
        content="TOPSOL Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />
      <meta property="twitter:image" content={metaImage} />
      <link rel="icon" href={Logo} type="image/png"></link>
    </>
  );
}
