import React, { useState } from "react";
import cancelBtn from "../../../../images/cancel.png";
import PulseLoader from "react-spinners/PulseLoader";
import { reviewTypes } from "../../../../types/interfaceTypes";

type AppProps = {
  setShowModal: (value: boolean) => void;
  isLoader: boolean;
  selectedId: reviewTypes;
};

const Modal = ({ setShowModal, isLoader, selectedId }: AppProps) => {
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
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70 overflow-scroll"
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
            className=" hover:cursor-pointer flex justify-end  mt-[600px] md:mt-[420px] lg:mt-[300px] xl:mt-[77px] mb-7  "
            onClick={handleCloseModal}
          >
            <img src={cancelBtn} alt="" className="h-[30px] w-[30px]" />
          </div>

          <div className="flex flex-col lg:flex-row-reverse justify-center  mb-5 lg:mb-[71px] ">
            <div className="lg:ml-[77px] justify-center flex">
              <img
                src={selectedId?.avatar}
                alt=""
                className="resize object-cover rounded-md"
              />
            </div>
            <div className="lg:w-[40%] mt-[30px] lg:mt-0 ">
              <h3 className="text-[20px] flex items-center text-secondary  font-semibold ">
                <hr className=" bg-secondary  w-7 rounded-full h-1  " />
                we are here
              </h3>
              <h1 className=" text:[30px] md:text-[36px] font-bold text-primary-blue ">
                {selectedId?.heading}
              </h1>
              <p className=" text-base md:text-[18px] mt-[23] md:mt-[30px] fotn  ">
                {selectedId?.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
