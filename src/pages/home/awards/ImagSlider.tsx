import React from "react";
type Review = {
  avatar: string;
};

type ImagSliderProps = {
  review: Review;
};
function ImagSlider({ review }: ImagSliderProps) {
  return (

    <img src={review.avatar} alt="#" className="" />

  );
}

export default ImagSlider;
