import React, { useState } from "react";
import { MdOutlineClear } from "react-icons/md";
import PulseLoader from "react-spinners/PulseLoader";

type AppProps = {
  setShowModal: (value: boolean) => void,
  isLoader:boolean,
};

const Modal = ({ setShowModal, isLoader }: AppProps) => {

  const handleUpdateClick = () => {
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
console.log('loader',isLoader)
  return (
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70"
    >
        {isLoader?(<div className="flex justify-center items-center">
    <PulseLoader color="#8E8E8E" size={18}  />
  </div>):(
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex xs:w-3/4 sm:w-2/3 md:w-2/4 flex-col bg-white rounded-md p-4"
      >
        {/* Modal content */}
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-xl">Animated Modal</h1>
        </div>
        <p className="mb-10 lg:text-[50px] md:font-semibold md:mt-4  text-black">
              Build Smarter <br /> Not From Scratch
            </p>
        <div className="flex justify-center">
          <button onClick={handleUpdateClick}>click</button>
        </div>
      </div>
      )}
      <div
        className="absolute top-24 2xl:right-60 right-2 hover:cursor-pointer"
        onClick={handleCloseModal}
      >
        <MdOutlineClear className=" w-10 h-10 text-primary-white" />
      </div>
    </div>
  );
};

export default Modal;
