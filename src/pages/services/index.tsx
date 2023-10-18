import React from "react";
import Navbar from "../../components/Navbar";
import VideoHero from "../../components/VidoeHero";
import ServicesOffers from "../home/servisesOffers";
import RatingSection from "../home/ratingSection";
import Footer from "../../components/footerSection";
import AddressSection from "../../components/addressSection";
import Project from "./component/project";
export default function index() {
  return (
    <div>
      <Navbar />
      <VideoHero
        title="Our Services"
        image="https://res.cloudinary.com/asifsaythe/image/upload/v1697023024/new_portfolio/flat-lay-business-concept_1_q6ptf7.png"
      />
      <ServicesOffers />
      <Project />
      <div className="mt-[76px]">
        <RatingSection />
      </div>
      <AddressSection />
      <div className="mt-[200px]">
        <Footer />
      </div>
    </div>
  );
}
