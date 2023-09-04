import React, { useState } from "react";
import AnimateHr from "../../../../../components/animatedLine/AnimateHr";
import SmallCards from "../../../../../components/smallCards/SmallCards";
import careerCardOne from "../../../../../images/careerCard1.png";

function LifeTopsol() {
  const [showMore, setShowMore] = useState(false);

  const toggleButton = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="py-20 px-10 md:container mx-auto">
      <div className="grid lg:grid-cols-2 ">
        <div>
          <h1 className="md:text-6xl text-4xl font-montserrat font-bold my-4">
            Life at Topsol
          </h1>

          <AnimateHr bgColor="[#00B8F1]" />
          <p className="my-10">
            Life at Topsol is more than just a job - it's an immersive
            experience that combines innovation, camaraderie, and personal
            growth. From the moment you step through our doors, you'll become a
            part of a thriving community that values creativity, collaboration,
            and the pursuit of excellence From the moment you step through our
            doors, you'll become a part of a thriving community that values
            creativity, collaboration, and the pursuit of excellence
            {showMore && (
              <>
                From the moment you step through our doors, you'll become a part
                of a thriving community that values creativity, collaboration,
                and the pursuit of excellence From the moment you step through
                our doors, you'll become a part of a thriving community that
                values creativity, collaboration,
              </>
            )}
          </p>
          <button
            onClick={toggleButton}
            className="px-10 py-2 rounded bg-primary text-primary-white hover:bg-primary-light"
          >
            {showMore ? "Show less" : "Learn more"}
          </button>
        </div>

        <div className="">
          <div className="flex items-center justify-center lg:mt-0 mt-10 gap-x-12">
            <div className="flex flex-col gap-y-12 overflow-x-hidden">
              <SmallCards
                avatar={careerCardOne}
                heading={"Large Beautiful Office"}
                text="lorum ispum fdg gogjg dfdffgg fdsdffd fdjfidjfn oogoh epepe rere topo kjor reooir rerieoer reiroru"
                color='cardBg'
              />
              <SmallCards
                avatar={careerCardOne}
                heading={"Large Beautiful Office"}
                text="lorum ispum fdg gogjg dfdffgg fdsdffd fdjfidjfn oogoh epepe rere topo kjor reooir rerieoer reiroru"
                color='cardBg'
              />
            </div>
            <div className="lg:mt-20 gap-y-12 flex flex-col">
              <SmallCards
                avatar={careerCardOne}
                heading={"Large Beautiful Office"}
                text="lorum ispum fdg gogjg dfdffgg fdsdffd fdjfidjfn oogoh epepe rere topo kjor reooir rerieoer reiroru"
                color='cardBg'
              />
              <SmallCards
                avatar={careerCardOne}
                heading={"Large Beautiful Office"}
                text="lorum ispum fdg gogjg dfdffgg fdsdffd fdjfidjfn oogoh epepe rere topo kjor reooir rerieoer reiroru"
                color='cardBg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeTopsol;
