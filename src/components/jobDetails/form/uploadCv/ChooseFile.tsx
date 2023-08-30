import React, { useState } from 'react';

const FileUpload: React.FC = () => {
  const [fileName, setFileName] = useState<string>('No file chosen');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFileName(selectedFile ? selectedFile.name : 'No file chosen');
  };

  return (
    <div className="flex items-center">
      
      <input
        type="file"
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
        Upload Cv
      </label>
      <span className="text-lg">{fileName}</span>
    </div>
  );
};

export default FileUpload;
