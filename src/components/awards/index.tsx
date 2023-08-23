import React, { useState } from "react";
// import imgOne from '../../images/imgSlider1.png';

function Awards() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const imagePaths = [
        "/../../images/imgSlider1.png",
        "../../images/imgSlider1.png",
        "../../images/imgSlider1.png",
        "../../images/imgSlider1.png",
        "../../images/imgSlider1.png",
        "../../images/imgSlider1.png",
        "../../images/imgSlider1.png",
        "../../images/imgSlider1.png",
        
      ];
      const showPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : imagePaths.length - 1
        );
      };
    
      const showNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex < imagePaths.length - 1 ? prevIndex + 1 : 0
        );
      };
    
      const displayedImages = imagePaths.slice(
        currentImageIndex,
        currentImageIndex + 5
      );
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="font-extrabold text-3xl md:text-3xl lg:text-4xl mt-6 text-center">
          Awards and Honor
        </h1>
      </div>
      <div>
        <div
          className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#00B8F1] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44 my-6"
        ></div>
      </div>
    </div>
    <div className="flex justify-center items-center">
        <button onClick={showPreviousImage}>Previous</button>
        <div className="flex">
          {displayedImages.map((imagePath, index) => (
            <div key={index} className="m-2">
              <img src={imagePath} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
        <button onClick={showNextImage}>Next</button>
      </div>
    </>
  );
}

export default Awards;
