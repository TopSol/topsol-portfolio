import React from "react";
import locationIcon from "../images/Icons/svg.png";
import PhoneIcon from "../images/Icons/svg1.png";
import EmailIcon from "../images/Icons/Mail_Send.png";
import LineAnimation from "./LineAnimation";
export default function AddressSection() {
  return (
    <div className="flex mt-[100px]  flex-col md:flex-row md:container mx-auto justify-between">
      <div className="mx-5">
        <h1 className="text-[26px] md:text-[34px] uppercase font-urbanist font-bold  ">
          Where to <span className="text-primary"> Find us ?</span>
        </h1>
        <LineAnimation
          width="178px"
          height="7px"
          backgroundColor="#00B8F1"
          marginTop="20px"
        />
        <img
          src="https://res.cloudinary.com/asifsaythe/image/upload/v1692963971/new_portfolio/xpsckv18mrdifj1hzvlz.png"
          alt=""
          className="mt-[30px]"
        />
        <div className="mt-8">
          <h1 className="text-primary uppercase">Location</h1>
          <div className="flex items-center  ">

            <p className="text-base ">
              Sitara Techno Park, 2nd Floor, Lower Canal Road East Faisalabad,
              Pakistan
            </p>
          </div>
          <h1 className="text-primary uppercase mt-[22px]">cALL NOW</h1>
          <div className="flex items-center  ">
            <p className="text-base ">
              +92-303-6362191 <br />
              (041) 855 7244
            </p>
          </div>
          <h1 className="text-primary uppercase mt-[22px]">Email</h1>
          <div className="flex items-center  ">
            <p className="text-base ">admin@topsol.org</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <img
          src="https://res.cloudinary.com/asifsaythe/image/upload/v1692964174/new_portfolio/svmimvcbnjgiqe3bnwoc.png"
          alt=""
        />
      </div>
    </div>
  );
}
