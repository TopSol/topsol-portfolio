import React from "react";
import AboutUs from "./components/details/AboutUs";
import Designer from "./components/productDesigner/Designer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footerSection";
import { jobDetailsType } from "../../types/interfaceTypes";
function JobDetail(props: jobDetailsType | any) {
  const details = props?.location?.state;
  return (
    <div>
      <Navbar />
      <Designer jobDetails={details} />
      <AboutUs jobDetails={details} />
      <Footer />
    </div>
  );
}

export default JobDetail;
