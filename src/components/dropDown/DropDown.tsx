import React, { useEffect, useState } from "react";
import { ExpType } from "../../types/interfaceTypes";

type Option = {
  id: string;
  [key: string]: string;
};

type DropDownProps = {
  buttonTitle: string;
  className?: string;
  setExpType: React.Dispatch<React.SetStateAction<ExpType>>;
  type: keyof ExpType;
  options: Option[];
  handleDropdownChange: (type: keyof ExpType, value: string) => void;
};

function DropDown({ buttonTitle, options, className, setExpType, type, handleDropdownChange }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [dropOptions, setDropOptions] = useState<string[]>([]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (item: string) => {
    toggleDropdown();
    setSelectedItem(item);
    setExpType((prevExpType) => ({ ...prevExpType, [type]: item }));
    handleDropdownChange(type, item);
  };

  const initialOptions = () => {
    if (options) {
      const uniqueOptions = Array.from(new Set(options.map((elem) => elem[type])));
      setDropOptions(uniqueOptions);
    }
  };

  useEffect(() => {
    initialOptions();
  }, [options, type]);

  return (
    <div className={`relative ${className}`}>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-primary py-4 w-[100%] h-[100%]  bg-primary-white font-medium rounded-lg text-xl px-5 flex items-center justify-between "
        type="button"
      >
        {selectedItem ? selectedItem : buttonTitle}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none">
          <path d="M1.5 1L10 9.5L18.5 1" stroke="#00C3FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="absolute mt-2  w-[100%] "
        >
          <ul
            className="py-2 text-sm rounded-lg shadow   mt-2   bg-formInput"
            aria-labelledby="dropdownDefaultButton"
          >
            {dropOptions.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item)}
                className=" hover:cursor-pointer px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;