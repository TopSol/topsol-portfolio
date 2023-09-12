import React from "react";
import AboutUs from "./components/details/AboutUs";
import Designer from "./components/productDesigner/Designer";

function JobDetail(props: any) {
  return (
    <div>
      <Designer />
      <AboutUs jobDetails={props?.location.state} />
    </div>
  );
}

export default JobDetail;
