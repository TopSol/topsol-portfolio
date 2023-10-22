import React from "react";
import Navbar from "../../components/Navbar";
import VideoHero from "../../components/VidoeHero";
import Footer from "../../components/footerSection";
import SmallFooter from "../../components/smallFooter";
import RecentWork from "./component/recentWork";
export default function index() {
  return (
    <div>
      <Navbar />
      <VideoHero
        image="https://res.cloudinary.com/asifsaythe/image/upload/v1697092135/new_portfolio/portfolio_fhqqft.png"
        title="Our Portfolio"
      />
      <RecentWork />
      <SmallFooter />
      <Footer />
    </div>
  );
}

export function Head() {
  return (
    <>
      <title>TOPSOL Innovative Solution</title>
      <meta name="description" content="TopSol Portfolio " />
      <link rel="icon" href="/topsol-favicon.png" type="image/png"></link>
    </>
  );
}
