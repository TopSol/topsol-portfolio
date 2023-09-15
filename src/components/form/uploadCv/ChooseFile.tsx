import React from "react";

const FileUpload = ({ handleFileChange, resumeFile }: any) => {
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
        className="text-lg  
         rounded mr-2 px-6 border-[1px] border-[#D0D0D0]
         font-montserrat bg-primary-formInput 
        hover:cursor-pointer
        hover:text-primary"
      >
        Upload CV
      </label>
      <span className="text-lg">
        {resumeFile ? resumeFile.name : "No file chosen"}
      </span>
    </div>
  );
};

export default FileUpload;
