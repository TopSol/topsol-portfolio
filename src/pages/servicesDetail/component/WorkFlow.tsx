import React from "react";
import LineAnimation from "../../../components/LineAnimation";
import arrow from "../../../images/Icons/arrow.png";

export default function WorkFlow(servicedata) {
    return (
        <div className=" mt-8 py-[92px]    px-2  bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo">
            <div className=" flex flex-col md:w-[80%] w-[100%] mx-auto justify-center md:justify-start ">
                <div className=" flex flex-col md:justify-start justify-center  items-center md:items-start ">
                    <h1 className="font-bold text-white leading-[120%] uppercase font-urbanist text-[26px] md:text-[34px] lg:text-[48px] text-center md:text-left">
                        OUR <span className="text-primary">WORKFLOW</span>
                    </h1>
                    <LineAnimation
                        width="178px"
                        height="7px"
                        backgroundColor="#FFFFFF"
                        marginTop="22px"
                    />
                    <p className="text-white font-figtree text-[24px] font-medium leading-[120%] text-center md:text-left mt-8">
                        Efficiently guiding projects from conception to successful delivery
                    </p>
                </div>
                <div className="grid mt-[36px] md:mt-[95px] md:gap-x-[20px]  gap-y-[48px]  md:grid-cols-2 grid-cols-1 lg:grid-cols-4   ">
                    {servicedata?.servicedata?.details?.paragraphs?.map((item, index) => (
                        <div className="flex flex-row items-center justify-center arrowhide ">
                            <div className="flex flex-col items-center justify-center  ">
                                <div className="bg-white shadow-lg shadow-gray-300 z-20 rounded-full p-6 items-center justify-start">
                                    <img src={item?.img} alt="" className="" />
                                </div>
                                <div className="grid mt-[36px] md:mt-[95px] gap-x-[24px] gap-y-[24px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
                                    {servicedata?.servicedata?.details?.paragraphs?.map((item, index) => (
                                        // <div className='flex flex-row items-center justify-center arrowhide '>
                                        //     <div className='flex flex-col items-center justify-center  '>
                                        //         <div className='bg-white shadow-lg shadow-gray-300 z-20 rounded-full p-6 items-center justify-start'>
                                        //             <img src={item?.img} alt="" className='' />
                                        //         </div>
                                        //         <div className='bg-white lg:w-[313px] box -mt-10  py-[43px] px-[27px] rounded-lg'>
                                        //             <h1 className='text-primary mt-5 font-urbanist text-[22px] leading-[120%] font-semibold'>{item?.heading}</h1>
                                        //             <p className=' text-[16px] h-[172px] lg:h-[150px]   mt-4 font-figtree leading-[120%] font-light '>
                                        //                 {item?.text.slice(0, 250)}
                                        //             </p>
                                        //         </div>

                                        //     </div>
                                        // </div>
                                        <div className="px-[25px] shadow-md  mx-5 md:mx-0 p-3 bg-white  hover:border-primary hover:border-2 border-2 border-white rounded-xl  py-6 hover:scale-[1.02] "
                                            style={{ transition: "all .50s ease " }}
                                        >
                                            <div className="bg-white w-[70px] justify-center flex items-center rounded-full h-[70px] ">
                                                <img src={item.img} className="h-[40px] w-[40px]  " alt="" />
                                            </div>
                                            <h1 className="font-normal text-[20px] font-figtree text-primary   my-3 ">
                                                {item.heading}
                                            </h1>
                                            <p className="text-[18px] mb-4 font-figtree leading-[125%] font-light">{item?.text.slice(0, 100)}</p>
                                        </div>

                                    ))}

                                </div>
                            </div>
                            {/* <div className='lg:flex hidden flex-row  w-[100%] ml-3  items-center justify-center  imagearrow'>
                                <img src={arrow} alt="" className='' />
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
