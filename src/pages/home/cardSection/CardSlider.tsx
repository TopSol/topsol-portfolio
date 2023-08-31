import React from "react";

type appProps = {
  reviews: any;
};

function CardSlider({ reviews }: appProps) {
  return (
    <div className="max-w-[300px]">
      <div className="text-white text-center  flex flex-col items-center w-full">
        <img src={reviews?.avatar} height={140} width={300} />
        <div className="w-[60%]  ">
          <p className="pt-4 font-popins text-xl font-bold ">
            {reviews?.heading}
          </p>
        </div>
        <p className=" mt-4 font-mont w-full">{reviews?.desc}</p>
      </div>
    </div>
  );
}

export default CardSlider;
