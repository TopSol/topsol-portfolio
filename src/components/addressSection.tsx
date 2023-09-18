import React from "react";
import locationIcon from "../images/Icons/svg.png";
import PhoneIcon from "../images/Icons/svg1.png";
import EmailIcon from "../images/Icons/Mail_Send.png";
export default function AddressSection() {
  return (
    <div className="flex mt-[100px]  flex-col md:flex-row md:container mx-auto justify-between">
      <div className="mx-5">
        <h1 className="text-[34px] font-semibold font-montserrat ">
          Where to Find us
        </h1>
        <img
          src="https://res.cloudinary.com/asifsaythe/image/upload/v1692963971/new_portfolio/xpsckv18mrdifj1hzvlz.png"
          alt=""
          srcset=""
          className="mt-[30px]"
        />
        <div className="mt-8">
          <div className="flex items-center  ">
            <img
              src={locationIcon}
              className="w-[16px] h-[16px] "
              alt=""
              srcset=""
            />
            <p className="text-base ml-2">
              Sitara Techno Park, 2nd Floor, Lower Canal Road East Faisalabad,
              Pakistan
            </p>
          </div>
          <div className="flex items-center mt-[22px] ">
            <img
              src={PhoneIcon}
              className="w-[16px] h-[16px] "
              alt=""
              srcset=""
            />
            <p className="text-base ml-2">
              +92-303-6362191 <br />
              (041)8557244
            </p>
          </div>
          <div className="flex items-center mt-[22px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.2821 3H2.94017C2.42093 3 2 3.4264 2 3.95238V12.0476C2 12.5736 2.42093 13 2.94017 13H13.2821C13.8013 13 14.2222 12.5736 14.2222 12.0476V3.95238C14.2222 3.4264 13.8013 3 13.2821 3Z"
                stroke="black"
                stroke-width="1.14286"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.00002 4.11133L7.50942 7.29708C7.67836 7.39244 7.89127 7.44466 8.11113 7.44466C8.33099 7.44466 8.5439 7.39244 8.71284 7.29708L14.2222 4.11133"
                stroke="black"
                stroke-width="1.14286"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill=""
              />
            </svg>
            <p className="text-base ml-2">admin@topsol.org</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <img
          src="https://res.cloudinary.com/asifsaythe/image/upload/v1692964174/new_portfolio/svmimvcbnjgiqe3bnwoc.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}
