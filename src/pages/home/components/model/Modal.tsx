import React, { useState } from "react";
import { MdOutlineClear } from "react-icons/md";
import PulseLoader from "react-spinners/PulseLoader";
import AnimateHr from "../../../../components/animatedLine/AnimateHr";
import Code_modules from "../../../../images/code_modules.png";

type AppProps = {
  setShowModal: (value: boolean) => void;
  isLoader: boolean;
};

const Modal = ({ setShowModal, isLoader }: AppProps) => {
  const handleUpdateClick = () => {
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  console.log("loader", isLoader);
  return (
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70"
    >
      {isLoader ? (
        <div className="flex justify-center items-center">
          <PulseLoader color="#8E8E8E" size={18} />
        </div>
      ) : (
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex   px-8 w-[90%] lg:[70%]  flex-col bg-white rounded-md p-4"
        >
          <div
            className=" hover:cursor-pointer flex justify-end "
            onClick={handleCloseModal}
          >
            <MdOutlineClear className=" rounded-full  bg-primary w-10 h-10 text-primary-white" />
          </div>
          {/* Modal content */}
          <div className="flex flex-col lg:flex-row-reverse justify-center mt-5 lg:mt-[100px] mb-5 lg:mb-[71px]  ">
            <div className="lg:ml-[77px] justify-center flex ">
              <img src={Code_modules} alt="" />
            </div>
            <div className="lg:w-[40%] mt-[30px] lg:mt-0 ">
              <h3 className="text-[20px] flex items-center text-secondary  font-semibold ">
                <hr className=" bg-secondary  w-7 rounded-full h-1  " />
                we are here
              </h3>
              <h1 className=" text:[30px] md:text-[36px] font-bold text-primary-blue ">
                Ready-To-Use Set of Modules
              </h1>
              <p className=" text-base md:text-[18px] mt-[23] md:mt-[30px] fotn  ">
                Our team consists of experienced master trainers, certified
                product genius and professional project managers who have set
                themselves the goal of successfully marketing your brand and
                conveying your values.
                <br />
                <br />
                The professional master trainers from our team train the Mobile
                Product Genius internally twice a year on the product range,
                brand, customer treatment.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
