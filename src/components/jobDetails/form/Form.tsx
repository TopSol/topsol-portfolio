import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FileUpload from "./uploadCv/ChooseFile";

type FormProps = {
  onClose: () => void;
};

function Form({ onClose }: FormProps) {
  const [phone, setPhone] = useState("pk");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [help, setHelp] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  const submit = () => {
    alert("helo");
    onClose();
  };
  return (
    <div className=" border rounded py-10 md:px-20 px-10 max-w-2xl mx-auto">
      <h1 className=" text-4xl font-montserrat font-bold text-center">
        Apply for Product Designer
      </h1>

      <input
        type="text"
        placeholder="Name*"
        className="bg-primary-formInput p-4 text-xs rounded-sm mt-4 w-full "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email*"
        className="bg-primary-formInput p-4  text-xs my-4 rounded-sm w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PhoneInput
        inputStyle={{
          width: "100%",
          border: "none",
          backgroundColor: "#FBFBFB",
          height: 50,
        }}
        buttonStyle={{ border: "none", backgroundColor: "#FBFBFB" }}
        country={phone}
        countryCodeEditable={false}
        onChange={(e) => setPhone(e)}
      />

      <textarea
        name=""
        id=""
        cols={38}
        rows={5}
        placeholder="Cover Letter(optional)"
        className="bg-primary-formInput text-xs p-4 my-4 w-full"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      ></textarea>
      <div className="mt-4">
      
       <FileUpload/> 
      </div>

      <div className=" mt-10 w-full">
        <button
          type="button"
          onClick={submit}
          aria-label="Post Comment"
          className="w-full px-8 py-3  bg-primary border-2 rounded-md  text-white font-bold font-montserrat text-xs leading-tight uppercase hover:bg-primary-light  focus:bg-[#00B8F1]  active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Form;
