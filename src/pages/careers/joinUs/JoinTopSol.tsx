import React from "react";
import careerOneImg from '../../../images/career1.png';

function JoinTopSol() {
  return (
    <div className="bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo">
      <div className="md:container mx-auto grid md:grid-cols-2 grid-cols-1 py-20 sm:px-6">
        <div className="px-20">
          <div className="my-8">
            <h1 className="md:text-6xl text-4xl text-primary-white">
              Join Our <span className=" text-primary"> Team</span> at
              <span className=" text-primary"> Topsol</span>{" "}
            </h1>
          </div>
          <div className="my-12">
            <p className="text-primary-white font-bold font-montserrat">
              Every journey embarks with an aspiration. Come join us, as we
              delve into possibilities, build together, and foster growth within
              our united team
            </p>
          </div>
          <div className="">
            <button className="border rounded px-14 py-2 text-primary-white hover:bg-primary">
                View openings
            </button>
          </div>
        </div>

        <div className="md:mt-0 mt-8 md:ml-0 ml-8">
          <img src={careerOneImg} className="" />
        </div>
      </div>
    </div>
  );
}

export default JoinTopSol;
