import * as React from "react"
import type { HeadFC, PageProps } from "gatsby";
import Hero from "../components/hero";
import CardSection from "../components/cardSection";
import ServicesOffers from "../components/servisesOffers";
import TopSolExperts from "../components/topSolExpert";
import OurPortfolio from "../components/ourPortfolio";
import RatingSection from "../components/ratingSection";
import Awards from "../components/awards";
import GetInTouch from "../components/getInTouch";
import PageNotFound from "./pageNotFound";
import JobDetail from "./jobDetails";
import Layout from "../components/Layout";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Layout>
      {/* <Hero/>
      <CardSection/>
      <ServicesOffers/>
      <TopSolExperts/>
      <OurPortfolio/>
      <RatingSection/>
      <Awards/>
      <GetInTouch/> */}
      {/* <PageNotFound/> */}
      <JobDetail/>
      </Layout>
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
