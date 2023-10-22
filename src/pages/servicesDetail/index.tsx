import React from "react";
import Navbar from "../../components/Navbar";
import InfoSection from "../../components/infoSection";
import Footer from "../../components/footerSection";
import HeroSection from "./component/HeroSection";
import ProjectSection from "./component/projectSection";
import ReadyToOutshine from "./component/ReadyToOutshine";
export default function index({ location }) {
  const { state } = location;

  return (
    <div>
      <Navbar />
      <HeroSection servicedata={state?.serviceData} />
      <InfoSection />
      <ReadyToOutshine />
      <ProjectSection />
      <Footer />
    </div>
  );
}
