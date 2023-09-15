import React, { useState } from "react";
import CardSection from "./cardSection";
import ServicesOffers from "./servisesOffers";
import TopSolExperts from "./topSolExpert";
import OurPortfolio from "./ourPortfolio";
import RatingSection from "./ratingSection";
import Awards from "./awards";
import GetInTouch from "./getInTouch";
import Hero from "./hero";
import Footer from "../../components/footerSection";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

function Home() {
  const [bg, setBg] = useState("#fff");
  return (
    <div className="">
      <Navbar />
      <Hero />
      {/* <motion.div
        initial={{ background: "#fff" }}
        animate={{
          background: bg,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      > */}
      {/* <CardSection setBg={setBg} /> */}
      <ServicesOffers />
      {/* </motion.div> */}
      <TopSolExperts />
      <OurPortfolio />
      <RatingSection />
      <Awards />
      <div className="mb-[116px]">
        <GetInTouch />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
