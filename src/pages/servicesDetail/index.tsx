import React from "react";
import Navbar from "../../components/Navbar";
import InfoSection from "../../components/infoSection";
import Footer from "../../components/footerSection";
import HeroSection from "./component/HeroSection";
import ProjectSection from "./component/projectSection";
import ReadyToOutshine from "./component/ReadyToOutshine";

export default function ServiceDetails({ location }) {
  const { state } = location;

  return (
    <div>
      <Navbar />
      <HeroSection servicedata={state?.service} />
      <InfoSection servicedata={state?.service} />
      <ReadyToOutshine servicedata={state?.service} />
      {state?.service?.showProjects && <ProjectSection />}
      <Footer />
    </div>
  );
}
