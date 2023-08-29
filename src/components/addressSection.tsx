import React from "react";
import locationIcon from "../images/Icons/svg.png";
import PhoneIcon from "../images/Icons/svg1.png";
import EmailIcon from "../images/Icons/svg2.png";
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
            <p className="text-base ml-2">+92-303-6362191</p>
          </div>
          <div className="flex items-center mt-[22px] ">
            <img
              src={EmailIcon}
              className="w-[16px] h-[16px] "
              alt=""
              srcset=""
            />
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
