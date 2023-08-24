import React from "react";

type appProps = {
  review: any;
};

function ImagSlider({ review }: appProps) {
  return (
    <div>
      <img src={review.avatar} alt=" " className="" />
    </div>
  );
}

export default ImagSlider;
