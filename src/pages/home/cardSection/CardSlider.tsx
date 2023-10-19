import React from "react";

type Review = {
  avatar: string;
  heading: string;
  desc: string;
};

type ImagSliderProps = {
  review: Review;
};

function CardSlider({ review }: ImagSliderProps) {
  return (
    <div className="max-w-[300px]">
      <div className="text-white text-center  flex flex-col items-center w-full">
        <img src={review?.avatar} height={140} width={300} />
        <div className="w-[60%]">
          <p className="pt-4 font-popins text-xl font-bold ">
            {review?.heading}
          </p>
        </div>
        <p className="mt-4 font-mont w-full">{review?.desc}</p>
      </div>
    </div>
  );
}

export default CardSlider;
