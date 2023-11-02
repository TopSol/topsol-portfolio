import React from 'react'
import LineAnimation from '../../../components/LineAnimation'
import { tecnology } from '../../../staticData/servisesOffersData'
import bgImage from '../../../images/bgImage.png'

export default function Tecnology() {
    return (
        <div>
            <div className="py-[90px] flex px-2 bg-cover items-center"
                style={{
                    backgroundImage: `url(${bgImage})`
                }}
            >
                <div className=' flex flex-col md:w-[80%] w-[100%] mx-auto justify-center md:justify-start '>
                    <div className=" flex flex-col md:justify-start justify-center  items-center md:items-start  ">
                        <h1 className="font-bold text-textColors  uppercase font-urbanist text-[26px] md:text-34[px] lg:text-4xl text-center md:text-left">
                            TECHNOLOGIES <span className="text-primary">WE USE</span>
                        </h1>
                        <LineAnimation
                            width="178px"
                            height="7px"
                            backgroundColor="#00B8F1"
                            marginTop="22px"
                        />
                        <p className='text-textColors font-figtree text-[24px] font-medium leading-[120%] mt-8 text-center md:text-left'>Empowering Business with Cutting-Edge Custom Software Solutions</p>
                    </div>
                    <div className="grid mt-[36px] md:mt-[95px] gap-x-[30px] gap-y-[48px]  grid-cols-2 lg:grid-cols-5 ">
                        {tecnology?.map((item, index) => (
                            <div className='flex flex-col items-center justify-center '>
                                <div className='border-[4px] border-white rounded-[8px] w-[136px] h-[136px] justify-center flex items-center flex-col'>
                                    <img src={item.img} alt="" className='' />
                                    <h1 className='text-textColors mt-5 font-urbanist text-[18px] leading-[120%] font-semibold'>{item.title}</h1>
                                </div>
                            </div>


                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}
