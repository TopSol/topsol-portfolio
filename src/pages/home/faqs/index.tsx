import React, { useState } from "react";
import LineAnimation from "../../../components/LineAnimation";
import faqs from "../../../staticData/faqsData";
function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div>
      <div className="pb-[108px] pt-[38px] bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo">
        <div className="md:w-[80%] items-center container md:mx-auto ">
          <div className="flex flex-col md:items-start items-center ">
            <h1 className="text-white md:text-[48px] text-[40px] text-center md:text-left  font-bold font-urbanist">
              FAQ's
            </h1>
            {/* <h1 className='text-primary md:text-[48px] text-[40px] text-center md:text-left font-bold font-urbanist'>QUESTIONS</h1> */}
            <LineAnimation
              width="170px"
              height="5px"
              backgroundColor="#fff"
              marginTop="5px"
            />
          </div>
          <div className="mt-16 space-y-2 mx-3 md:mx-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className=" border-t-white border-t-[0.738px] borderss p-4"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <div className="text-white font-figtree md:text-[24px] text-[18px] font-medium leading-[90%] tracking-normal md:-tracking-[1.477px] borderss">
                    {faq.question}
                  </div>
                  <div
                    className={`transform ${openIndex === index ? "-rotate-90" : ""
                      } transition-transform`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="31"
                      viewBox="0 0 48 49"
                      fill="none"
                    >
                      <path
                        d="M10.4359 13.0979L13.1928 10.3409L32.0976 29.2458L32.0976 12.3102L36.0361 12.3102L36.0361 35.9412L12.4051 35.9412L12.4051 32.0027L29.3407 32.0027L10.4359 13.0979Z"
                        fill={openIndex === index ? "#00B8F1" : "#fff"}
                      />
                    </svg>
                  </div>
                </div>
                {openIndex === index && (
                  <div className="mt-[22px] text-white font-figtree md:text-[18px] text-[14px] leading-[125%]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Faqs;
