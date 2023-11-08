import React from 'react'
import LineAnimation from '../../../components/LineAnimation'
import arrow from '../../../images/Icons/arrow.png'

export default function WorkFlow(servicedata) {


    return (
        <div className=" mt-8 py-[92px]    px-2  bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo" >
            <div className=' flex flex-col md:w-[80%] w-[100%] mx-auto justify-center md:justify-start '>
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
                    <p className='text-white font-figtree text-[24px] font-medium leading-[120%] text-center md:text-left mt-8'>Efficiently guiding projects from conception to successful delivery</p>
                </div>
                <div className="grid mt-[36px] md:mt-[95px] md:gap-x-[20px]  gap-y-[48px]  md:grid-cols-2 grid-cols-1 lg:grid-cols-4   ">
                    {servicedata?.servicedata?.details?.paragraphs?.map((item, index) => (
                        <div className='flex flex-row items-center justify-center arrowhide '>
                            <div className='flex flex-col items-center justify-center  '>
                                <div className='bg-white shadow-lg shadow-gray-300 z-20 rounded-full p-6 items-center justify-start'>
                                    <img src={item?.img} alt="" className='' />
                                </div>
                                <div className='bg-white lg:w-[313px] box -mt-8  py-[43px] px-[27px] rounded-lg'>
                                    <div className='bg-primary opacity-70 rounded-full inline-block px-8 py-2 mt-5  '>
                                        <p className='text-white text-[16px]  font-figtree font-light '>{item?.step}</p>
                                    </div>
                                    <h1 className='text-primary mt-5 font-urbanist text-[22px] leading-[120%] font-semibold'>{item?.heading}</h1>
                                    <p className=' text-[16px] h-[172px] lg:h-[150px]   mt-4 font-figtree leading-[120%] font-light '>
                                        {item?.text.slice(0, 250)}
                                    </p>
                                </div>

                            </div>
                            <div className='lg:flex hidden flex-row  w-[100%] ml-3  items-center justify-center  imagearrow'>
                                <img src={arrow} alt="" className='' />
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </div>
    )
}
