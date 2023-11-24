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
      <h1 className="md:text-4xl text-xl font-urbanist font-semibold text-center md:mt-[47px] md:mb-10 mb-[51px]">
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

        <div className="md:mt-[31px] mt-[35px] md:mb-[34px] mb-[81px] w-full ">
          <button
            type="submit"
            onClick={submit}
            disabled={loading}
            aria-label="Post Comment"
            className={`w-full flex flex-row items-center justify-center  px-8 py-3 ${loading ? "bg-[#bbbb]" : "bg-primary hover:bg-primary-light"
              }  rounded-md font-figtree  text-white text-2xl font-semibold `}
          >
            {loading ? "loading.." : "Send"}
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="16" height="16" viewBox="0 0 12 12" fill="none">
              <path d="M2.73332 11.384L8.94653 4.64408L8.95458 10.1118C8.95547 10.7602 9.48194 11.2851 10.1304 11.2841C10.4546 11.2836 10.7479 11.1518 10.9601 10.939C11.1723 10.7262 11.3032 10.4324 11.3027 10.1083L11.2905 1.8061C11.2896 1.1577 10.7631 0.632785 10.1147 0.63374L1.81251 0.645962C1.16416 0.646917 0.639246 1.17338 0.640145 1.82178C0.641044 2.47018 1.16751 2.9951 1.81596 2.99414L7.28365 2.98609L1.07044 9.72597C0.612616 10.1851 0.613711 10.9286 1.07289 11.3864C1.53206 11.8442 2.27549 11.8431 2.73332 11.384Z" fill="white" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
