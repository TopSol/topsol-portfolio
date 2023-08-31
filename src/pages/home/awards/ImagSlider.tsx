import React from "react";

type appProps = {
  review: any;
};

function ImagSlider({ review }: appProps) {
  return (
    <div className="w-[105px] h-[105px]">
      <img src={review.avatar} alt="#" className="w-[100%] h-auto" />
    </div>
  );
}

export default ImagSlider;
