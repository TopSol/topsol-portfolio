import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import line from '../../images/Frame 74.png'
import dropDown from '../../images/dropdown.png'
import { btnData } from './data'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
export default function index() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [phone, setPhone] = useState('');

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
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
            
            <div className='md:w-[60%] md:justify-center md:mx-auto'>
                <div className='mt-[24px] md:container md:mx-auto  flex flex-col justify-center items-center md:justify-start md:items-start'>
                    <div>
                        <h1 className=' text-center text-black  text-[22px] md:text-[30px] lg:text-[40px]'>Ready to discuss your project?</h1>
                    </div>
                    <div className=" flex  md:justify-start md:items-start">
                        <img
                            src={line}
                            className="w-[103px]  h-[7px] mt-[22px]"
                            alt=""
                        />
                    </div>
                </div>
                <div className="mt-[24px] mx-[27px] px-[10px] py-[17px] md:container md:mx-auto  bg-light_Grey_bg sm:justify-between  justify-center  rounded-md flex relative">
                    <h1 className=' flex text-light_Grey  text-[15px]  md:text-[18px]'>
                        {selectedOption ? `${selectedOption?.name}?` : 'How can we help you?'}
                    </h1>
                    <div className=''>
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
                        <ul className="absolute top-full left-0 w-full bg-light_Grey_bg border-gray-300 shadow mt-2">
                            {btnData.map((option, index) => (
                                <li
                                    key={index}
                                    className={`px-4 py-2  hover:bg-gray-100 cursor-pointer ${selectedOption === option ? 'bg-blue-500 text-white' : ''
                                        }`}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className='mt-[49px]  md:container md:mx-auto  flex flex-col md:flex-row  justify-center items-center '>

                    <div className="mb-[24px] md:mr-[21px] w-[85%]  md:container md:mx-auto justify-center">
                        <input
                            type="text"
                            className="px-[10px] py-[17px] text-light_Grey outline-none rounded-md w-[100%]  bg-light_Grey_bg"
                            placeholder="Name*"
                        />
                    </div>
                    <div className="mb-[24px] w-[85%]  md:container md:mx-auto justify-center ">
                        <input
                            type="text"
                            className="px-[10px] py-[17px] text-light_Grey outline-none rounded-md w-[100%] bg-light_Grey_bg "
                            placeholder="Email*"
                        />
                    </div>
                </div>
                <div className='  md:container mx-auto  flex flex-col md:flex-row  justify-center items-center '>

                    <div className="  mb-[24px] md:mr-[21px] w-[85%] ">
                        <input
                            type="text"
                            className="px-[10px] py-[17px] text-light_Grey w-[100%] outline-none rounded-md   bg-light_Grey_bg"
                            placeholder="Organization*"
                        />
                    </div>
                    <div className="  mb-[24px] w-[85%] text-light_Grey bg-light_Grey_bg">
                        <PhoneInput
                            inputStyle={{
                                width: "100%",
                                border: "none",
                                backgroundColor: "#FBFBFB",
                                height: 59,
                            
                            }}
                            buttonStyle={{ border: "none", backgroundColor: "#FBFBFB" }}
                            value={phone}
                            country="pk" 
                            countryCodeEditable={false}
                            onChange={(e) => setPhone(e)}
                        />
                    </div>
                </div>
                    <div className="w-[100%] md:container md:mx-auto flex flex-col justify-center items-center  ">
                        <div className='w-[85%] md:w-[100%] '>
                        <textarea
                            className=" outline-none text-light_Grey px-[10px] py-[17px] h-[100px] md:h-[194px] bg-light_Grey_bg  rounded-md w-[100%]"
                            placeholder="Massage*"
                        ></textarea>
                        </div>
                    </div>
                <div className="mt-[49px] md:container md:mx-auto flex flex-col md:flex-row  justify-center items-center">
                    <div className=" w-[85%] flex items-center mb-4 md:mb-0">
                        <input
                            type="checkbox"
                            className="form-checkbox items-center h-4 w-4 text-blue-500"
                            checked={isChecked}
                            onChange={toggleCheckbox}
                        />
                        <label className="ml-2 text-[15px] text-light_Grey md:text-[12px] lg:text-[18px] ">I agree to terms &amp; conditions</label>
                    </div>
                    <div className='w-[85%]'>
                        <button
                            className={` w-[100%] py-[12px] text-center px-[37px] rounded  text-[18px]   ${isChecked ? 'bg-blue-500 text-white cursor-pointer' : 'bg-light_Grey_bg text-gray-500 cursor-not-allowed'
                                }`}
                            disabled={!isChecked}
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
