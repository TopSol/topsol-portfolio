import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageNotFound from "./pageNotFound";
import JobDetail from "./jobDetails";
import Layout from "../components/Layout";
import Home from "./home";
// import Navbar from "../components/Navbar";
import Hero from "./home/hero";
import CardSection from "./home/cardSection";
import ServicesOffers from "./home/servisesOffers";
import TopSolExperts from "./home/topSolExpert";
import OurPortfolio from "./home/ourPortfolio";
import RatingSection from "./home/ratingSection";
import Awards from "./home/awards";
import GetInTouch from "./home/getInTouch";
// import Footer from "../components/footerSection";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="">
      <Layout>
        <Hero />
        <CardSection />
        <ServicesOffers />
        <TopSolExperts />
        <OurPortfolio />
        <RatingSection />
        <Awards />
        <GetInTouch />
      </Layout>
    </div>
  );
};

export default IndexPage;

export function Head() {
  return (
    <>
      <title>TopSol Portfolio</title>
      <meta name="description" content="TopSol Portfolio " />
    </>
  );
}
