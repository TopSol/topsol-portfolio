import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import RatingSection from "../home/ratingSection";
import VidoeHero from "../../components/VidoeHero";
import Footer from "../../components/footerSection";
import Experience from "./component/experience";
import InfoSection from "../../components/infoSection";
import AddressSection from "../../components/addressSection";
import OurTeam from "./component/ourTeam";
export default function aboutUs() {
  return (
    <div className="">
      <Navbar />
      <VidoeHero />
      <InfoSection />
      <Experience />
      <RatingSection />
      <OurTeam />
      <AddressSection />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
