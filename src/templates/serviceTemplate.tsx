import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ToggleBar } from "../components/bar";
import HeroSection from "../pages/services/component/HeroSection";
import InfoSection from "../components/infoSection";
import WorkFlow from "../pages/services/component/WorkFlow";
import Technology from "../pages/services/component/Tecnology";
import SmallFooter from "../components/rightsFooter";
import Footer from "../components/footerSection";
import Logo from "../images/favicon-01.png";
import metaImage from "../images/main-logo2.png";
import "../styles/global.css";

export default function ServiceDetails({ pageContext }) {
  const [service, setService] = useState([pageContext?.service]);

  return (
    <>
      <Navbar />
      <ToggleBar />
      <HeroSection servicedata={service[0]} />
      <InfoSection
        heading={service[0]?.heading}
        mainHeading={service[0]?.infoHeading}
        initialText={service[0]?.infoDesc}
        image={service[0]?.infoImage}
      />
      <WorkFlow workFlowData={service[0]?.paragraph} />
      <Technology servicedata={service[0]?.tecnology} />
      <SmallFooter />
      <div className="mt-[69px]">
        <Footer />
      </div>
    </>
  );
}

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