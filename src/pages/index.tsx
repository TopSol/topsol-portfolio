import * as React from "react"
import type { HeadFC, PageProps } from "gatsby";
import PageNotFound from "./pageNotFound";
import JobDetail from "./jobDetails";
import Layout from "../components/Layout";
import Home from "./home";


const IndexPage: React.FC<PageProps> = () => {
  return (
<<<<<<< HEAD
    <div>
      <Layout>
      {/* <Home/> */}
      {/* <PageNotFound/> */}
      <JobDetail/>
      </Layout>
=======
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

      <div></div>
>>>>>>> 926bcba (bug fix)
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
