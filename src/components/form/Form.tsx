import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FileUpload from "./uploadCv/ChooseFile";

type FormProps = {
  // onClose: () => void;
  submit: () => void;
  heading?: string;
  formData: {};
  setFormData: () => void;
};

function Form({
  submit,
  loading,
  heading,
  formData,
  resumeFile,
  handleChange,
  handleFileChange,
}: any) {
  return (
    <div className=" border rounded py-10 md:px-20 px-10 max-w-2xl mx-auto">
      <h1 className=" text-4xl font-montserrat font-bold text-center">
        {heading}
      </h1>

      <input
        type="text"
        name="name"
        placeholder="Name*"
        value={formData.name}
        onChange={handleChange}
        className="bg-primary-formInput p-4 text-xs rounded-sm mt-4 w-full "
      />
      <input
        type="email"
        name="email"
        placeholder="Email*"
        value={formData.email}
        onChange={handleChange}
        className="bg-primary-formInput p-4  text-xs my-4 rounded-sm w-full"
      />
      <PhoneInput
        inputStyle={{
          height: 50,
          width: "100%",
          border: "none",
          backgroundColor: "#FBFBFB",
        }}
        value={formData.phone}
        country={"pk"}
        countryCodeEditable={false}
        onChange={(e) => handleChange(e, true)}
        buttonStyle={{ border: "none", backgroundColor: "#FBFBFB" }}
      />

      <textarea
        rows={5}
        cols={38}
        name="cover"
        value={formData.cover}
        onChange={handleChange}
        placeholder="Cover Letter(optional)"
        className="bg-primary-formInput text-xs p-4 my-4 w-full"
      />
      <div className="mt-4">
        <FileUpload
          resumeFile={resumeFile}
          handleFileChange={handleFileChange}
        />
      </div>

      <div className=" mt-10 w-full">
        <button
          type="button"
          onClick={submit}
          disabled={loading}
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
