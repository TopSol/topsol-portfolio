import React from "react";

type appProps = {
  review: any;
};

function ImagSlider({ review }: appProps) {
  return (
   
      <img src={review.avatar} alt="#" className="" />
   
  );
}

export default ImagSlider;
