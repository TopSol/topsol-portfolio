import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import dot from "../../../images/dot.png";
import LineAnimation from "../../../components/LineAnimation";
import useMenuAnimation from "../../../components/dropDownAnimaion";
import btnData from "../data";
import { motion } from "framer-motion";
import { db } from "../../../utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  const scope = useMenuAnimation(isOpen);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    if (
      !name ||
      !email ||
      !organization ||
      !message ||
      !selectedOption ||
      isChecked === false
    ) {
      toast.error("Please fill all the fields");
    } else {
      const formData = {
        selectedOption,
        name,
        email,
        organization,
        message,
        isChecked,
      };
      try {
        const data = async (data: any) => {
          const docRef = await addDoc(collection(db, "contact"), formData);

          setName("");
          setEmail("");
          setOrganization("");
          setMessage("");
          setPhone("");
          toast.success("Form submitted successfully");
        };
        data(formData);
      } catch (error) {
        toast.error("Data cannot be submitted");
      }
    }
  };
  return (
    <div id="contact">
      <div>
        <ToastContainer />
      </div>
      <div className="md:w-[70%] md:justify-center md:mx-auto">
        <div className="mt-[118px] md:container md:mx-auto  flex flex-col justify-center items-center md:justify-start md:items-start">
          <div>
            <h1 className=" text-center text-black font-semibold text-[22px] md:text-[30px] lg:text-[40px]">
              Ready to discuss your project?
            </h1>
          </div>
          <div className=" flex  md:justify-start md:items-start">
            <div className="flex justify-center items-center">
              <LineAnimation
                width="178px"
                height="7px"
                backgroundColor="#00B8F1"
                marginTop="22px"
              />
            </div>
          </div>
        </div>
        <div className="mt-[76px] md:container mx-auto w-[85%]">
          <nav className="menu " ref={scope}>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}
              className="buttons bg-formInput border-none rounded-[10px] px-[24px] py-[17px] cursor-pointer flex justify-between items-center w-[100%] "
            >
              <h1 className=" flex text-light_Grey  font-medium   md:text-[15px] lg:text-[18px]">
                {selectedOption
                  ? `${selectedOption?.name}?`
                  : "How can we help you?"}
              </h1>
              <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                <svg width="15" height="15" viewBox="0 0 20 20">
                  <path d="M0 7 L 20 7 L 10 16" />
                </svg>
              </div>
            </motion.button>
            <ul
              className={`dropDownUl ${
                isOpen ? "relative" : "hidden"
              }  shadow   mt-2  flex bg-formInput flex-col gap-5 `}
              style={{
                pointerEvents: isOpen ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50% round 10px)",
              }}
            >
              {btnData.map((item) => (
                <li
                  key={item.id}
                  className={`dropDownli  px-4 py-2  hover:bg-gray-100 origin-[-20px_50%] cursor-pointer ${
                    selectedOption === item ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => handleOptionClick(item)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-[49px]  md:container md:mx-auto  flex flex-col md:flex-row  justify-center items-center ">
          <div className="mb-[24px] md:mr-[21px] w-[85%]  md:container md:mx-auto justify-center">
            <input
              type="text"
              className="px-[10px] py-[17px] font-medium  text-[18px] text-light_Grey outline-none rounded-md w-[100%]  bg-formInput"
              placeholder="Name*"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-[24px] w-[85%]  md:container md:mx-auto justify-center ">
            <input
              type="text"
              className="px-[10px] text-[18px] font-medium  py-[17px] text-light_Grey outline-none rounded-md w-[100%] bg-formInput "
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="hidden  md:flex flex-row absolute left-20  ">
          <img src={dot} alt="" />
        </div>
        <div className="  md:container mx-auto  flex flex-col md:flex-row  justify-center items-center ">
          <div className="  mb-[24px] md:mr-[21px] w-[85%] ">
            <input
              type="text"
              className="px-[10px] text-[18px] font-medium py-[17px] text-light_Grey w-[100%] outline-none rounded-md   bg-formInput"
              placeholder="Organization*"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>
          <div className="  mb-[24px] font-medium  text-[18px] w-[85%] text-light_Grey bg-formInput">
            <PhoneInput
              inputStyle={{
                width: "100%",
                border: "none",
                backgroundColor: "#FBFBFB",
                height: 59,
              }}
              buttonStyle={{ border: "none", backgroundColor: "#FBFBFB" }}
              value={phone}
              country="pk"
              countryCodeEditable={false}
              onChange={(e) => setPhone(e)}
            />
          </div>
        </div>

        <div className="w-[100%] md:container md:mx-auto flex flex-col justify-center items-center  ">
          <div className="w-[85%] md:w-[100%] ">
            <textarea
              className=" outline-none font-medium  text-[18px] text-light_Grey px-[10px] py-[17px] h-[100px] md:h-[194px] bg-formInput  rounded-md w-[100%]"
              placeholder="Massage*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="mt-[49px] md:container md:mx-auto flex flex-col md:flex-row  justify-center items-center">
          <div className=" w-[85%] flex items-center mb-4 md:mb-0">
            <input
              type="checkbox"
              className="form-checkbox items-center h-4 w-4 text-primary"
              checked={isChecked}
              onChange={toggleCheckbox}
            />
            <label className="ml-2 text-[15px] font-medium  text-light_Grey md:text-[12px] lg:text-[18px] ">
              I agree to terms &amp; conditions
            </label>
          </div>
          <div className="w-[85%]">
            <button
              className={` w-[100%]  py-[12px] font-medium  text-center px-[37px] rounded  text-[18px]   ${
                isChecked
                  ? " bg-primary text-white cursor-pointer hover:bg-primary-lighter"
                  : "bg-primary text-white hover:bg-primary-lighter cursor-not-allowed "
              }`}
              disabled={!isChecked}
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
