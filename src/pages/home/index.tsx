import React, { useEffect, useState } from "react";
import Hero from "./hero";
import CardSection from "./cardSection";
import ServicesOffers from "./servisesOffers";
import TopSolExperts from "./topSolExpert";
import OurPortfolio from "./ourPortfolio";
import RatingSection from "./ratingSection";
import Awards from "./awards";
import GetInTouch from "./getInTouch";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footerSection";
import { motion } from "framer-motion";

function Home() {
  const [bg, setBg] = useState("#fff");
  return (
    <>
      <Hero />
      <motion.div
        initial={{ background: "#fff" }}
        animate={{
          background: bg,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <CardSection setBg={setBg} />
        <ServicesOffers />
      </motion.div>
      <TopSolExperts />
      <OurPortfolio />
      <RatingSection />
      <Awards />
      <GetInTouch />
    </>
  );
}

export default Home;
