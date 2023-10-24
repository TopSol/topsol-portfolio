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

export function Head() {
  return (
    <>
      <title>TOPSOL Innovative Solution</title>
      <meta
        name="description"
        content="Topsol Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://topsol.org/" />
      <meta property="og:title" content="TOPSOL Innovative Solution" />
      <meta
        property="og:description"
        content="Topsol Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />
      <meta property="og:image" content="/icons/logo.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://topsol.org/" />
      <meta property="twitter:title" content="TOPSOL Innovative Solution" />
      <meta
        property="twitter:description"
        content="Topsol Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />
      <meta property="twitter:image" content="/icons/logo.png" />
      <link rel="icon" href="/icons/icon.png" type="image/png"></link>
    </>
  );
}
