import React from "react";

const FileUpload = ({ handleFileChange, resumeFile }) => {
  return (
    <div className="flex items-center">
      <input
        type="file"
        accept=".pdf"
        id="cvUpload"
        className="hidden"
        onChange={handleFileChange}
      />
      <label
        htmlFor="cvUpload"
        className="md:text-lg text-[15px]  
         rounded-[5px] md:mr-7 mr-[15px] md:px-[31px] px-6 py-[6px] border-[1px] border-[#D0D0D0]
         font-medium bg-formInput
        hover:cursor-pointer
        "
      >
        Upload CV
      </label>
      <span className="md:text-lg text-[15px] font-medium">
        {resumeFile ? resumeFile.name : "No file chosen"}
      </span>
    </div>
  );
};

export default FileUpload;
