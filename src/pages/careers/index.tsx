import React from "react";
import AddressSection from "../../components/addressSection";
import LifeTopsol from "./components/recruitmentProcess/lifeAtTopsol/LifeTopsol";
import Process from "./components/recruitmentProcess/recruitmentProcess/Process";
import JoinTopSol from "./components/recruitmentProcess/joinUs/JoinTopSol";
import AllOpenings from "./components/recruitmentProcess/allOpenings";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footerSection";
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
