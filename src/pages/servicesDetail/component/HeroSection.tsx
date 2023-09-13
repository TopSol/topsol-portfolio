import React from 'react'
import ServicesDet from '../../../images/ServicesDet.png'

export default function HeroSection() {
  return (
    <div>
          <div className='pb-[30px] md:pb-[123px] md:pt-[101px] bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo'>

<div className='md:w-[80%] container md:mx-auto md:flex-row flex flex-col  justify-center'>
    <div className=' mt-[70px] md:container md:mx-auto md:mt-0  flex flex-col justify-center text-center md:text-left '>
        <p className="text-[36px] md:text-[30px] lg:text-[50px] xl:text-[70px] leading-normal  text-white font-[600]">Our<br />
            <span className="md:inline xl:w-[100%] text-primary">Website</span><br />
            Development <br />
            <span className="inline md:block text-primary md:text-white">Services</span>
        </p>
        <div className="xl:my-12 lg:my-8 my-4 md:container md:mx-auto mx-[24px]">
            <p className="text-primary-white font-medium text-[16px] lg:text-[22px] ">
            Norem ipsum dolor sit amet,consectetur adipiscing. Etiam eu turpis molestie, dictum est a, mattis tellus            </p>
        </div>
        <div className="">
            <button className="border lg:text-[26px] text-[18px] font-semibold rounded md:px-[56px] px-[23px] md:py-[19px] py-[15px] text-primary-white hover:bg-primary hover:border-primary">
                Start your project
            </button>
        </div>
    </div>
    <div className='mt-[36px] md:container  md:mx-auto justify-center items-center flex flex-col'>
        <img className='items-center w-[80%] md:w-[100%] lg:ml-[58px] ml-0'
            src={ServicesDet} alt="#" />
    </div>
</div>
</div>
    </div>
  )
}
