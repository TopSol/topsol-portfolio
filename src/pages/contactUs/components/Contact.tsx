import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import dropDown from '../../../images/dropdown.png'
import dot from '../../../images/dot.png'
import { btnData } from '../data'
export default function Contact() {
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
            <div className='mt-[118px] md:container md:mx-auto flex flex-row '>
                <div className='hidden md:flex  md:mx-auto flex-col items-center justify-center'>
                    <img src={dot} alt="" />
                </div>
                <div className='md:w-[90%] w-[100%] md:mx-auto  flex flex-col justify-center items-center'>
            <div className=' md:container md:mx-auto  flex flex-col justify-center items-center md:justify-start md:items-start'>
                <div>
                    <h1 className=' text-center text-black  text-[22px] md:text-[30px] lg:text-[40px]'>Ready to discuss your project?</h1>
                </div>
                <div className=" flex  md:justify-start md:items-start">
                    <div className="flex justify-center items-center">
                        <div
                            className="before:content-[''] before:block before:h-[7px] 
                                before:bg-[#00B8F1] before:rounded-3xl
                                before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
                                before:transition before:ease-in-out before:duration-1000
                                w-[103px] md:w-[178px] mt-[21px] md:mt-[25px]  "
                        ></div>
                    </div>
                </div>
            </div>
            <div className="mt-[24px] mx-[27px] px-[10px] py-[17px] md:container md:mx-auto bg-primary-formInput sm:justify-between  justify-center  rounded-md flex relative">
                <h1 className=' flex text-light_Grey    md:text-[18px]'>
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
                    <ul className="absolute top-full left-0 w-full bg-primary-formInput border-gray-300 shadow mt-2">
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

                <div className="mb-[24px] md:mr-[21px]   md:container md:mx-auto justify-center">
                    <input
                        type="text"
                        className="px-[10px] py-[17px] text-[18px] text-light_Grey outline-none rounded-md w-[100%]  bg-primary-formInput"
                        placeholder="Name*"
                    />
                </div>
                <div className="mb-[24px]   md:container md:mx-auto justify-center ">
                    <input
                        type="text"
                        className="px-[10px] text-[18px] py-[17px] text-light_Grey outline-none rounded-md w-[100%] bg-primary-formInput "
                        placeholder="Email*"
                    />
                </div>
            </div>
            <div className='  md:container mx-auto  flex flex-col md:flex-row  justify-center items-center '>

                <div className="  mb-[24px] md:mr-[21px]  ">
                    <input
                        type="text"
                        className="px-[10px] text-[18px] py-[17px] text-light_Grey w-[100%] outline-none rounded-md   bg-primary-formInput"
                        placeholder="Organization*"
                    />
                </div>
                <div className="  mb-[24px] text-[18px]  text-light_Grey bg-primary-formInput">
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
                <div className=' md:w-[100%] '>
                    <textarea
                        className=" outline-none text-[18px] text-light_Grey px-[10px] py-[17px] h-[100px] md:h-[194px] bg-primary-formInput  rounded-md w-[100%]"
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
                        className={` w-[100%]  py-[12px] text-center px-[37px] rounded  text-[18px]   ${isChecked ? 'bg-blue-500 text-white cursor-pointer' : 'bg-primary-formInput text-gray-500 cursor-not-allowed'
                            }`}
                        disabled={!isChecked}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>
        </div>
            </div>
    )
}
