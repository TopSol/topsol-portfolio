import React from "react";
import AboutUs from "./components/details/AboutUs";
import Designer from "./components/productDesigner/Designer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footerSection";
function JobDetail(props: any) {
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
