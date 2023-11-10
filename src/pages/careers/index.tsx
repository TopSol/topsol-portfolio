import React from "react";
import AddressSection from "../../components/addressSection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footerSection";
import JoinTopSol from "./components/joinUs/JoinTopSol";
import LifeTopsol from "./components/lifeAtTopsol/LifeTopsol";
import AllOpenings from "./components/allOpenings";
import Process from "./components/recruitmentProcess/Process";
import Logo from "../../images/favicon-01.png";
import metaImage from "../../images/main-logo2.png";
import { ToggleBar } from "../../components/bar";

function Careers() {
  return (
    <div>
      <ToggleBar />
      <JoinTopSol />
      <LifeTopsol />
      <AllOpenings />
      <Process />
      <AddressSection />
      <Footer />
    </div>
  );
}

export default Careers;

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
      <meta property="twitter:url" content="https://topsol.org/" />
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
