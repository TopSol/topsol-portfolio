import React, { useState } from "react";
import downImg from "../../images/down.png";

type DropDownProps = {
  buttonTitle: string;
  data: any[];
  className?:string,
};

function DropDown({ buttonTitle, data, className }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (item) => {
    toggleDropdown();
    setSelectedItem(item.label)
  };

  return (
    <div className={`relative ${className}`}>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-primary py-4 w-[100%] h-[100%]  bg-primary-white font-medium rounded-lg text-xl px-5 flex items-center justify-between "
        type="button"
      >
        {selectedItem?selectedItem: buttonTitle}
        <img src={downImg} alt="Dropdown" />
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {data.map((item, index) => (
              <li key={index} onClick={()=>handleItemClick(item)}
              className="block hover:cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"

              >
                
                  {item.label}
                
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;
