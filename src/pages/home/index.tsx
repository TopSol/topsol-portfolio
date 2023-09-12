import React from "react";
import CardSection from "./cardSection";
import ServicesOffers from "./servisesOffers";
import TopSolExperts from "./topSolExpert";
import OurPortfolio from "./ourPortfolio";
import RatingSection from "./ratingSection";
import Awards from "./awards";
import GetInTouch from "./getInTouch";
import Hero from "./hero";
import Footer from "../../components/footerSection";
import Navbar from "../../components/bar/sidebar";
function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      {/* <CardSection /> */}
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
