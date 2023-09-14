import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import dropDown from "../../../images/dropdown.png";
import { dropDownData } from "./data";
import { useAnimate, stagger, motion } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      ".dropDownUl",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      ".dropDownli",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}
function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const scope = useMenuAnimation(isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const submit = () => {
    alert("helo");
  };

  return (
    <div className=" md:border-primary  md:border-[1px] border-[0px] rounded-2xl sm:p-8 ">
      <nav className="menu " ref={scope}>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className="buttonss bg-primary-formInput border-none rounded-[10px] px-[24px] py-[17px] cursor-pointer flex justify-between items-center w-[100%] "
        >
          <h1 className=" flex text-light_Grey  font-medium   md:text-[15px] lg:text-[18px]">
            {selectedOption ? `${selectedOption?.name}?` : "How can we help you?"}
          </h1>
          <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </div>
        </motion.button>
        <ul
          className={`dropDownUl ${isOpen ? 'relative' : 'hidden'}  shadow   mt-2  flex bg-primary-formInput flex-col gap-5 `}
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
        >
          {dropDownData.map((item) => (
            <li
              key={item.id}
              className={`dropDownli  px-4 py-2  hover:bg-gray-100 origin-[-20px_50%] cursor-pointer ${selectedOption === item ? "bg-primary text-white" : ""
                }`}
              onClick={() => handleOptionClick(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* <div
        onClick={toggleDropdown}
        className="mt-[24px]  px-[24px] py-[17px] md:container md:mx-auto bg-primary-formInput sm:justify-between  justify-center  rounded-md flex relative"
      >
        <h1 className=" flex text-light_Grey  font-medium   md:text-[15px] lg:text-[18px]">
          {selectedOption ? `${selectedOption?.name}?` : "How can we help you?"}
        </h1>
        <div className="">
          <button className="ml-[18px] focus:outline-none ">
            <img src={dropDown} alt="" />
          </button>
        </div>
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-primary-formInput border-gray-300 shadow mt-2">
            {dropDownData.map((option, index) => (
              <li
                key={index}
                className={`px-4 py-2  hover:bg-gray-100 cursor-pointer ${selectedOption === option ? "bg-primary text-white" : ""
                  }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div> */}
      <div className="  md:container  mx-auto flex flex-col justify-center">
        <input
          type="text"
          placeholder="Name*"
          className="bg-primary-formInput  py-[17px] px-[24px] mt-[25px] outline-none text-[18px] font-medium rounded w-full "
        />
        <div className=" flex flex-row mt-[25px] px-[24px] bg-primary-formInput justify-between items-center">
          <input
            type="email"
            placeholder="Email*"
            className=" bg-primary-formInput py-[17px]  text-[18px] outline-none font-medium  rounded "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_63_2427)">
              <path
                d="M17.8572 2.5H2.14287C1.76399 2.5 1.40062 2.65051 1.13271 2.91842C0.864804 3.18633 0.714294 3.54969 0.714294 3.92857V16.0714C0.714294 16.4503 0.864804 16.8137 1.13271 17.0816C1.40062 17.3495 1.76399 17.5 2.14287 17.5H17.8572C18.236 17.5 18.5994 17.3495 18.8673 17.0816C19.1352 16.8137 19.2857 16.4503 19.2857 16.0714V3.92857C19.2857 3.54969 19.1352 3.18633 18.8673 2.91842C18.5994 2.65051 18.236 2.5 17.8572 2.5Z"
                stroke="#696969"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M0.714294 4.28564L9.08572 9.31993C9.34287 9.47136 9.66572 9.55279 10 9.55279C10.3343 9.55279 10.6572 9.47136 10.9143 9.31993L19.2857 4.28564"
                stroke="#696969"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_63_2427">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className=" flex flex-row mt-[25px] px-[24px] bg-primary-formInput justify-between items-center">
          <input
            type="text"
            placeholder="Organization*"
            className=" bg-primary-formInput py-[17px]  text-[18px] outline-none font-medium  rounded "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M12.1428 0.714355H7.85713C7.47825 0.714355 7.11489 0.864865 6.84698 1.13277C6.57907 1.40068 6.42856 1.76405 6.42856 2.14293V2.85721C6.42856 3.23609 6.57907 3.59946 6.84698 3.86737C7.11489 4.13527 7.47825 4.28578 7.85713 4.28578H12.1428C12.5217 4.28578 12.8851 4.13527 13.153 3.86737C13.4209 3.59946 13.5714 3.23609 13.5714 2.85721V2.14293C13.5714 1.76405 13.4209 1.40068 13.153 1.13277C12.8851 0.864865 12.5217 0.714355 12.1428 0.714355Z"
              stroke="#696969"
              stroke-width="1.42857"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.9286 2.14307H16.0714C16.4503 2.14307 16.8137 2.29358 17.0816 2.56149C17.3495 2.82939 17.5 3.19276 17.5 3.57164V17.8574C17.5 18.2362 17.3495 18.5996 17.0816 18.8675C16.8137 19.1354 16.4503 19.2859 16.0714 19.2859H3.92857C3.54969 19.2859 3.18633 19.1354 2.91842 18.8675C2.65051 18.5996 2.5 18.2362 2.5 17.8574V3.57164C2.5 3.19276 2.65051 2.82939 2.91842 2.56149C3.18633 2.29358 3.54969 2.14307 3.92857 2.14307H6.07143"
              stroke="#696969"
              stroke-width="1.42857"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <textarea
          placeholder="Message*"
          className="bg-primary-formInput text-[18px] md:h-[167px] h-[100px] outline-none  font-medium px-[24px]  py-[17px] mt-[25px] w-full"
        ></textarea>
        <div className="flex self-start pl-4 mt-[36px]">
          <input type="checkbox" className="mr-2  " />
          <label className="md:text-[18px] text-[15px] font-medium">
            I agree to term & conditions
          </label>
        </div>

        <div className=" mt-10 w-full">
          <button
            type="button"
            onClick={submit}
            aria-label="Post Comment"
            className="w-full px-6 py-[17px]  bg-[#00B8F1] border-2 rounded-md  text-white font-semibold text-[20px]  hover:bg-[#96dff6]  focus:bg-[#00B8F1]  active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
