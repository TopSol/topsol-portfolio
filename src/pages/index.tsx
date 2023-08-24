import * as React from "react"
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/footerSection";
import Hero from "../components/hero";
import CardSection from "../components/cardSection";
import ServicesOffers from "../components/servisesOffers";
import TopSolExperts from "../components/topSolExpert";
import OurPortfolio from "../components/ourPortfolio";
import RatingSection from "../components/ratingSection";
import Awards from "../components/awards";
import GetInTouch from "../components/getInTouch";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <CardSection/>
      <ServicesOffers/>
      <TopSolExperts/>
      <OurPortfolio/>
      <RatingSection/>
      <Awards/>
      <GetInTouch/>
      <Footer/>
    </div>
  )
}

export default IndexPage

export function Head() {
  return (
    <>
      <title>TopSol Portfolio</title>
      <meta name="description" content="TopSol Portfolio " />
    </>
  );
}
