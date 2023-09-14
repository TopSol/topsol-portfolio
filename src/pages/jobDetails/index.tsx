import React from "react";
import AboutUs from "./components/details/AboutUs";
import Designer from "./components/productDesigner/Designer";

function JobDetail(props: any) {
  const details = props?.location?.state
  return (
    <div>
      <Designer jobDetails={details} />
      <AboutUs jobDetails={details} />
    </div>
  );
}

export default JobDetail;
