import React from "react";
import { motion } from "framer-motion";
import reviews from "../../../../staticData/cardSectionData";

export default function Modal({
  id,
  closeModal,
}: {
  id: string;
  closeModal: () => void;
}) {
  const res = reviews?.find((item) => item.id === id);

  return (
    <>
      <motion.div
        initial={{
          opacity: 1,
          width: "0",
          height: "0",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        animate={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "100%",
          height: "100vh",
        }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.8 }}
        style={{
          pointerEvents: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.1,
          zIndex: 2000,
          backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }}
        className=""

      >
        <motion.div
          className="card-content-container open bg-[#efefef] xl:mx-[12%] md:mx-[4%] lg:mx-[8%] xl:min-h-[70vh] md:min-h-[60vh] sm:min-h-[65vh] min-h-[80vh] mx-[1%] rounded-2xl px-[60px] xl:py-[100px] lg:py-[40px] relative"
          initial={{ opacity: 0, width: "0px", height: "0px" }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ overflow: "hidden" }}
        >
          <div className="absolute top-12 right-12 px-[11px] py-1 text-white text-center align-middle cursor-pointer font-bold rounded-full bg-[#309BD3]" onClick={() => closeModal()}>
            X
          </div>

          <motion.div
            className="card-content flex md:justify-between justify-center items-center h-full md:flex-row flex-col-reverse"
            layoutId={`card-container-${id}`}
          >
            <div className="md:w-[62%] w-full mt-6">
              <p className="font-montserrat md:text-[18px] lg:text-[36px]  md:text-left text-center font-bold text-[#309BD3] capitalize">
                {res?.heading}
              </p>
              <p className="font-montserrat md:text-[18px] lg:text-[36px]  md:text-left text-center font-bold text-[#309BD3] capitalize">
                {res?.subheading}
              </p>
              <p className="font-montserrat lg:pr-7 pr-3 lg:mt-5 md:mt-3 md:text-[13px]  md:text-left text-justify text-[10px]">
                {res?.desc}
              </p>
            </div>
            <motion.div className="md:w-[38%] w-[50%]">
              <img
                className="modalCardImage h-full max-w-full"
                src={res?.avatar}
                alt=""
              />
            </motion.div>
            <motion.div className="content-container" animate></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
