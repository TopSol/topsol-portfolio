import React from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import FileUpload from "./uploadCv/ChooseFile";

type FormProps = {
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
    <div className="md:border border-formBorder rounded-[10px] max-w-[689px] mx-auto md:px-[81px] px-[23] md:mb-[80px]">
      <h1 className="md:text-4xl text-xl font-semibold text-center md:mt-[47px] md:mb-10 mb-[51px]">
        {heading}
      </h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          className="bg-formInput p-4 text-xs rounded-sm  w-full "
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          className="bg-formInput p-4  text-xs md:my-[31px] my-[35px] rounded-sm w-full"
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
          value={formData?.cover}
          onChange={handleChange}
          placeholder="Cover Letter(optional)"
          className="bg-formInput text-xs p-4 md:my-[31px] my-[35px] w-full"
        />
        <div className="">
          <FileUpload
            resumeFile={resumeFile}
            handleFileChange={handleFileChange}
          />
        </div>

        <div className="md:mt-[31px] mt-[35px] md:mb-[34px] mb-[81px] w-full">
          <button
            type="submit"
            onClick={submit}
            disabled={loading}
            aria-label="Post Comment"
            className={`w-full px-8 py-3 ${loading ? "bg-[#bbbb]" : "bg-primary hover:bg-primary-light"
              }  rounded-md  text-white text-2xl font-semibold `}
          >
            {loading ? "loading.." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
