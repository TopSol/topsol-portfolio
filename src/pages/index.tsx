import * as React from "react"
import type { HeadFC, PageProps } from "gatsby";
import PageNotFound from "./pageNotFound";
import JobDetail from "./jobDetails";
import Layout from "../components/Layout";
import Home from "./home";
import Careers from "./careers";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Layout>
      {/* <Home/> */}
      {/* <PageNotFound/> */}
      {/* <JobDetail/> */}
      <Careers/>
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
