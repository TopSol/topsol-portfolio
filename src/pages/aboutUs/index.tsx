import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import RatingSection from "../home/ratingSection";
import VidoeHero from "../../components/VidoeHero";
import Footer from "../../components/footerSection";

import PrimaryBtn from "../../components/PrimaryBtn";
import InfoSection from "../../components/infoSection";
import AddressSection from "../../components/addressSection";
import Experience from "./component/Experience";
import OurTeam from "./component/ourTeam";
export default function aboutUs() {
  return (
    <div>
      <Navbar />
      <VidoeHero />
      <InfoSection />
      <Experience />
      <div className="mt-[40px]" >
        <RatingSection />
      </div>
      <OurTeam />
      <AddressSection />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
