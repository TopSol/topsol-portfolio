import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import InfoSection from "../../components/infoSection";
import Footer from "../../components/footerSection";
import HeroSection from "./component/HeroSection";
import ProjectSection from "./component/projectSection";
import ReadyToOutshine from "./component/ReadyToOutshine";
import { ToggleBar } from "../../components/bar";
import WorkFlow from "./component/WorkFlow";
import Tecnology from "./component/Tecnology";
import RatingSection from "../home/ratingSection/index";
import SmallFooter from "../../components/smallFooter";
export default function ServiceDetails({ location }) {
  const { state } = location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log(state?.service?.details?.paragraphs?.heading, 'paragraphs');

  return (
    <div>
      <ToggleBar />
      <HeroSection servicedata={state?.service}
        imageHead={state?.service?.details?.imageHead}
      />
      <InfoSection
        heading={state?.service?.heading}
        mainHeading={state?.service?.details?.mainHeading}
        initialText={state?.service?.details?.initialText}
        image={state?.service?.details?.image}
      />
      <WorkFlow servicedata={state?.service} />
      <Tecnology servicedata={state?.service} />
      {/* <RatingSection /> */}
      <div className="mb-[69px]">
        <SmallFooter />
      </div>
      {/* <ReadyToOutshine servicedata={state?.service} />
      {state?.service?.showProjects && <ProjectSection />} */}
      <Footer />
    </div>
  );
}
