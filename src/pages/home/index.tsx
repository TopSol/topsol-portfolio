import React from "react";
import CardSection from "./cardSection";
import ServicesOffers from "./servisesOffers";
import TopSolExperts from "./topSolExpert";
import OurPortfolio from "./ourPortfolio";
import RatingSection from "./ratingSection";
import Awards from "./awards";
import GetInTouch from "./getInTouch";
import Hero from "./hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footerSection";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <CardSection/> */}
      <ServicesOffers />
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
