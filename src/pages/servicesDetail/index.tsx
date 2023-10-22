import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import InfoSection from "../../components/infoSection";
import Footer from "../../components/footerSection";
import HeroSection from "./component/HeroSection";
import ProjectSection from "./component/projectSection";
import ReadyToOutshine from "./component/ReadyToOutshine";

export default function ServiceDetails({ location }) {
  const { state } = location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection servicedata={state?.service} />
      <InfoSection
        heading={state?.service?.heading}
        mainHeading={state?.service?.details?.mainHeading}
        initialText={state?.service?.details?.initialText}
      />
      <ReadyToOutshine servicedata={state?.service} />
      {state?.service?.showProjects && <ProjectSection />}
      <Footer />
    </div>
  );
}
