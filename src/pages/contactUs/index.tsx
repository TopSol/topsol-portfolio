import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import line from '../../images/Frame 74.png'
import dropDown from '../../images/dropdown.png'
import { btnData } from './data'
export default function index() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    return (

        <div>
            <Navbar />
            <div className='mt-[24px] md:container md:mx-auto  flex flex-col justify-center items-center md:justify-start md:items-start'>
                <div>
                    <h1 className=' text-center text-black font-montserrat text-[22px] md:text-[40px]'>Ready to discuss your project?</h1>
                </div>
                <div className=" flex  md:justify-start md:items-start">
                    <img
                        src={line}
                        className="w-[103px]  h-[7px] mt-[22px]"
                        alt=""
                    />
                </div>
            </div>
            <div className="mt-[24px] mx-[50px] py-[17px] md:container md:mx-auto border rounded-md flex relative">
                <h1 className='text-left flex text-black font-montserrat text-[15px]  md:text-[18px]'>
                    {selectedOption ? `${selectedOption?.name}?` : 'How can we help you?'}
                </h1>
                <div className='md:justify-end md:items-end'>
                <button
                    className="ml-[18px] focus:outline-none "
                    onClick={toggleDropdown}
                >
                    <img
                        src={dropDown}
                        alt=""
                    />
                </button>
                </div>
                {isOpen && (
                    <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow mt-2">
                        {btnData.map((option, index) => (
                            <li
                                key={index}
                                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${selectedOption === option ? 'bg-blue-500 text-white' : ''
                                    }`}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
