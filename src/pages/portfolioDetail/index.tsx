import React from "react";
import Navbar from "../../components/Navbar";
import SmallFooter from "../../components/smallFooter";
import Footer from "../../components/footerSection";
import PrimaryBtn from "../../components/PrimaryBtn";
import check1 from "../../images/check1.png";
import Hero from "./component/Hero";
import PortfolioDetailBody from "./component/portfolioDetailBody";
import { dataList } from "./data";
export default function index() {
  console.log(dataList, "dataList is hear -----------------");
  return (
    <div>
      <Navbar />
      <Hero/>
      <PortfolioDetailBody/>
      <SmallFooter />
      <Footer />
    </div>
  );
}
