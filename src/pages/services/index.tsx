import React from "react";
import Navbar from "../../components/Navbar";
import VideoHero from "../../components/VidoeHero";
import ServicesOffers from "../home/servisesOffers";
import RatingSection from "../home/ratingSection";
import Footer from "../../components/footerSection";
import FileIcon from "../../images/Icons/fileIcon.png";
import AddressSection from "../../components/addressSection";
import Logo from "../../images/favicon-01.png";
import metaImage from "../../images/main-logo2.png";
import { Link } from "gatsby";
import Project from "./component/project";
import heroImage from '../../images/heroImage.png'
import { ToggleBar } from "../../components/bar";
export default function index() {
  return (
    <div>
      <ToggleBar />
      <div className="services-page-hero">
        <VideoHero
          page="services"
          title="Our Services"
          image="https://res.cloudinary.com/asifsaythe/image/upload/v1697023024/new_portfolio/flat-lay-business-concept_1_q6ptf7.png"
        />
        <ServicesOffers page="services" showPrimaryBtn={false} />
      </div>
      <Project />
      <RatingSection />
      <AddressSection />
      <Footer />
    </div>
  );
}
export function Head() {
  return (
    <>
      <title>TOPSOL Innovative Solution</title>
      <meta
        name="description"
        content="Topsol Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://topsol.org/" />
      <meta property="og:title" content="TOPSOL Innovative Solution" />
      <meta
        property="og:description"
        content="Topsol Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />
      <meta property="og:image" content={metaImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="TOPSOL Innovative Solution" />
      <meta
        property="twitter:description"
        content="Topsol Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />
      <meta property="twitter:image" content={metaImage} />
      <link rel="icon" href={Logo} type="image/png"></link>
    </>
  );
}
