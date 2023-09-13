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
      <VideoHero />
      <RecentWork />
      <SmallFooter />
      <Footer />
    </div>
  );
}
