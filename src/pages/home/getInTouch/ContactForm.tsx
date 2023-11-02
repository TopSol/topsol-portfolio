import React, { useState } from "react";
import { db } from "../../../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection } from "firebase/firestore";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PrimaryBtn from "../../../components/PrimaryBtn";
function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [phone, setPhone] = useState("");
  const [isFocused, setIsFocused] = useState("");

  const handleFocus = (inputName) => {
    setIsFocused(inputName);
  };

  const handleBlur = () => {
    setIsFocused("");
  };

  const submit = async () => {
    if (!name || !email || !message || !phone) {
      toast.error("Please fill all the fields");
      return;
    }
    const body = {
      name,
      email,
      phone,
      message,
    };
    try {
      await addDoc(collection(db, "getInTouch"), body);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      toast.success(
        "Your message is received. We will contact you back shortly."
      );
    } catch (error) {
      toast.error("Data cannot be submitted");
    }
  };

  return (
    <div className=" ">
      <div>
        <ToastContainer />
      </div>
      <div className=" mx-auto  w-[100%] mt-10 md:mt-0">
        <div
          className={`flex flex-row rounded-lg border-[1px] items-center py-[10px]  pl-[20px] ${isFocused === "name" ? "border-primary" : "border-[#1F1F1F]"
            }`}
        >
          <div className="md:w-[6%] w-[13%]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 14 17" fill="none">
              <path d="M6.5735 8.20728C7.63234 8.20728 8.54909 7.82751 9.29836 7.07825C10.0474 6.3291 10.4273 5.41248 10.4273 4.35352C10.4273 3.29492 10.0475 2.37817 9.29824 1.62878C8.54897 0.879761 7.63222 0.5 6.5735 0.5C5.51454 0.5 4.59791 0.879761 3.84876 1.62891C3.09962 2.37805 2.71973 3.2948 2.71973 4.35352C2.71973 5.41248 3.09962 6.32922 3.84876 7.07837C4.59815 7.82739 5.5149 8.20728 6.5735 8.20728ZM4.51185 2.29187C5.08668 1.71704 5.761 1.43762 6.5735 1.43762C7.38588 1.43762 8.06032 1.71704 8.63527 2.29187C9.2101 2.86682 9.48964 3.54126 9.48964 4.35352C9.48964 5.16602 9.2101 5.84033 8.63527 6.41528C8.06032 6.99023 7.38588 7.26965 6.5735 7.26965C5.76124 7.26965 5.08692 6.99011 4.51185 6.41528C3.9369 5.84045 3.65736 5.16602 3.65736 4.35352C3.65736 3.54126 3.9369 2.86682 4.51185 2.29187Z" fill={isFocused === "name" ? "#00B8F1" : "#999"} />
              <path d="M13.3166 12.8032C13.2949 12.4915 13.2512 12.1514 13.1869 11.7922C13.122 11.4304 13.0384 11.0884 12.9383 10.7758C12.8347 10.4526 12.6942 10.1335 12.5203 9.82776C12.34 9.51038 12.1281 9.23401 11.8903 9.00659C11.6416 8.76868 11.3372 8.57739 10.9851 8.43787C10.6343 8.29907 10.2455 8.22876 9.82961 8.22876C9.66628 8.22876 9.50832 8.29578 9.20326 8.49438C9.01552 8.61682 8.79592 8.75842 8.5508 8.91504C8.3412 9.04858 8.05727 9.17371 7.70656 9.28699C7.36439 9.39771 7.01698 9.45386 6.67396 9.45386C6.33119 9.45386 5.98378 9.39771 5.64137 9.28699C5.29103 9.17383 5.00697 9.04871 4.79774 8.91516C4.55494 8.76001 4.33521 8.61841 4.14466 8.49426C3.83985 8.29565 3.68189 8.22864 3.51856 8.22864C3.10255 8.22864 2.71387 8.29907 2.36316 8.43799C2.01136 8.57727 1.70679 8.76855 1.45789 9.00671C1.2201 9.23425 1.00818 9.5105 0.828004 9.82776C0.654298 10.1335 0.513673 10.4525 0.410157 10.7759C0.310181 11.0885 0.226563 11.4304 0.161621 11.7922C0.0971682 12.1509 0.053589 12.4911 0.0319825 12.8036C0.0107422 13.1091 0 13.4271 0 13.7484C0 14.5836 0.265503 15.2598 0.789064 15.7584C1.30615 16.2505 1.99024 16.5 2.82239 16.5H10.5265C11.3584 16.5 12.0425 16.2505 12.5597 15.7584C13.0834 15.2601 13.3489 14.5837 13.3489 13.7483C13.3488 13.4259 13.3379 13.1079 13.3166 12.8032ZM11.9132 15.0791C11.5716 15.4043 11.1179 15.5624 10.5264 15.5624H2.82239C2.23072 15.5624 1.7771 15.4043 1.43555 15.0792C1.10047 14.7603 0.937624 14.3248 0.937624 13.7484C0.937624 13.4486 0.947512 13.1526 0.967287 12.8684C0.986574 12.5896 1.026 12.2833 1.08447 11.9579C1.14221 11.6365 1.2157 11.3348 1.3031 11.0618C1.38697 10.7999 1.50135 10.5406 1.64319 10.2909C1.77857 10.0529 1.93433 9.84863 2.10621 9.68408C2.26697 9.53015 2.46961 9.40417 2.70838 9.30969C2.9292 9.22229 3.17737 9.17444 3.44678 9.16724C3.47962 9.18469 3.53809 9.21802 3.63282 9.27979C3.82557 9.4054 4.04774 9.54871 4.29334 9.70557C4.5702 9.88208 4.92689 10.0415 5.35304 10.1791C5.78871 10.3199 6.23304 10.3915 6.67409 10.3915C7.11513 10.3915 7.55958 10.3199 7.99501 10.1792C8.42153 10.0414 8.77809 9.88208 9.05532 9.70532C9.30666 9.54468 9.5226 9.40552 9.71535 9.27979C9.81008 9.21814 9.86855 9.18469 9.90139 9.16724C10.1709 9.17444 10.4191 9.22229 10.64 9.30969C10.8787 9.40417 11.0813 9.53027 11.2421 9.68408C11.414 9.84851 11.5697 10.0527 11.7051 10.291C11.8471 10.5406 11.9616 10.8 12.0453 11.0616C12.1328 11.3351 12.2064 11.6366 12.2641 11.9578C12.3224 12.2838 12.362 12.5902 12.3812 12.8685C12.4011 13.1516 12.4112 13.4478 12.4113 13.7484C12.4112 14.325 12.2483 14.7603 11.9132 15.0791Z" fill={isFocused === "name" ? "#00B8F1" : "#999"} />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Name*"
            onChange={(e) => setName(e.target.value as string)}
            value={name}
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            className="outline-none text-[18px] font-medium w-[90%] font-figtree"
          />
        </div>
        <div className="flex flex-col md:flex-row md:mt-7  mt-3 justify-between">
          <div className={`flex flex-row rounded-lg md:w-[48%] w-[100%] border-[1px] items-center py-[7px]  px-[20px] ${isFocused === "email" ? "border-primary" : "border-[#1F1F1F]"}`}>
            <div className="w-[9%] mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 16 13" fill="none">
                <path d="M16 1.98071C16 1.16883 15.3395 0.508301 14.5276 0.508301H1.47241C0.66069 0.508332 0.000281251 1.16855 0 1.98096V11.0187C0 11.8408 0.667253 12.4916 1.47291 12.4916H14.5271C15.3491 12.4916 16 11.8244 16 11.0187V1.98121C16 1.98115 16 1.98128 16 1.98121C16 1.98112 16 1.98084 16 1.98071ZM1.47241 1.44584H14.5276C14.8225 1.44584 15.0625 1.68581 15.0625 1.98149C15.0625 2.13862 14.9844 2.28446 14.8535 2.37171L8.29703 6.74286C8.11663 6.86314 7.88344 6.86317 7.703 6.74286C7.703 6.74286 1.14641 2.37162 1.14654 2.37171C1.14657 2.37175 1.14657 2.37175 1.14654 2.37171C1.01572 2.28456 0.937504 2.13862 0.937504 1.98071C0.937504 1.68577 1.17747 1.44584 1.47241 1.44584ZM14.5271 11.5541H1.47291C1.18107 11.5541 0.937504 11.3182 0.937504 11.0187V3.35912L7.18293 7.52286C7.43112 7.68833 7.71556 7.77105 8 7.77105C8.28447 7.77105 8.56894 7.68833 8.8171 7.52286L15.0625 3.35912V11.0187C15.0625 11.3106 14.8265 11.5541 14.5271 11.5541Z" fill={isFocused === "email" ? "#00B8F1" : "#999"} />
              </svg>
            </div>
            <input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value as string)}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              className="outline-none text-[18px] font-medium w-[90%] font-figtree"
            />
          </div>
          <div
            className={`flex flex-row rounded-lg md:w-[48%] w-[100%] md:mt-0  mt-3 border-[1px] items-center py-[7px]  px-[20px] ${isFocused === "phone" ? "border-primary" : "border-[#1F1F1F]"
              }`}
          >
            <PhoneInput
              inputStyle={{
                width: "100%",
                border: "none",
                backgroundColor: "white",

              }}
              buttonStyle={{ border: "none", backgroundColor: 'white' }}
              value={phone}
              country="pk"
              countryCodeEditable={false}
              onChange={(e) => setPhone(e)}
              onFocus={() => handleFocus("phone")}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div
          className={`flex flex-row rounded-lg md:mt-7  mt-3 border-[1px] items-center py-[10px]  px-[20px] ${isFocused === "message" ? "border-primary" : "border-[#1F1F1F]"
            }`}
        >
          <input
            type="text"
            placeholder="Write your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value as string)}
            className="outline-none text-[18px] font-medium w-[90%] font-figtree"
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
          />
        </div>
        <div className="mt-10 md:w-[30%] w-[50%] ">
          <button
            type="button"
            onClick={submit}
            aria-label="Post Comment"
          >
            <PrimaryBtn
              text="Send"
              icon={true}
              additionalClasses="text-primary flex items-center font-figtree py-[16px] sm:px-[68px] px-[68px] bg-none text-[18px]  text-white rounded-[6px] "
            />

          </button>
        </div>
      </div>
      <div className="flex flex-col mt-[37px] md:flex-row justify-between">
        <div className=" md:w-[30%] w-[100%]">
          <h1 className="font-figtree text-[16px] text-primary leading-[90%] uppercase">lOCATION</h1>
          <p className="mt-3 text-[#1F1F1F] text-[14px] leading-[125%] ">Lorem ipsum street 1880 1990 Baseline Faisalabad, Pakistan</p>
        </div>
        <div className="md:w-[30%] mt-3 md:mt-0 w-[100%]">
          <h1 className="font-figtree text-[16px] text-primary leading-[90%] uppercase">cALL NOW</h1>
          <p className="mt-3 text-[#1F1F1F] text-[14px] leading-[125%] ">092 1234 12324 123</p>
        </div>
        <div className="md:w-[30%] mt-3 md:mt-0 w-[100%]">
          <h1 className="font-figtree text-[16px] text-primary leading-[90%] uppercase">Email</h1>
          <p className="mt-3 text-[#1F1F1F] text-[14px] leading-[125%] ">info@topsol.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
