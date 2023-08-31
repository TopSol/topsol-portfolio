import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../components/Navbar"
import Footer from "../components/footerSection"
import Hero from "../components/hero"
import CardSection from "../components/cardSection"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <CardSection/>
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
