import React from "react";
import AddressSection from "../../components/addressSection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footerSection";
import JoinTopSol from "./components/joinUs/JoinTopSol";
import LifeTopsol from "./components/lifeAtTopsol/LifeTopsol";
import AllOpenings from "./components/allOpenings";
import Process from "./components/recruitmentProcess/Process";

function Careers() {
  return (
    <div>
      <Navbar />
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
      <meta name="Career At Topsol" content="TOPSOL | Careers " />
      <link rel="icon" href="/topsol-favicon.png" type="image/png"></link>
    </>
  );
}
