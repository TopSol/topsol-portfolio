import React, { useEffect, useState } from "react";
import Hero from "./hero";
import CardSection from "./cardSection";
import ServicesOffers from "./servisesOffers";
import TopSolExperts from "./topSolExpert";
import OurPortfolio from "./ourPortfolio";
import RatingSection from "./ratingSection";
import Awards from "./awards";
import GetInTouch from "./getInTouch";

function Home() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Hero />
      <CardSection scrollY={scrollY} setScrollY={setScrollY} />
      <ServicesOffers />
      <TopSolExperts />
      <OurPortfolio />
      <RatingSection />
      <Awards />
      <GetInTouch />
    </div>
  );
}

export default Home;
