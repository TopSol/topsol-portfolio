import React from 'react'
import contactUs from '../../../images/contactUs.png'

export default function Hero() {
  return (
    <div>
          <div className='pb-[30px] md:pb-[123px] md:pt-[101px] bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo'>

<div className='md:w-[80%] md:container md:mx-auto md:flex-row flex flex-col  justify-center'>
    <div className='w-full mt-[70px] md:container md:mx-auto md:mt-0  flex flex-col justify-center text-center md:text-left '>
        <p className="text-[36px] md:text-[50px] xl:text-[70px]  text-white font-[600]">
            Initiate a <br />
            <span className="md:inline xl:w-[100%] text-primary">Conversation</span><br />
            About Your <br />
            <span className="inline md:block text-primary md:text-white">Business</span>
        </p>
        <div className="my-12 md:container md:mx-auto">
            <p className="text-primary-white font-bold font-montserrat">
                Every endeavor takes root from a concept. Let's explore,<br /> construct, and nurture your online enterprise
            </p>
        </div>
        <div className="">
            <button className="border text-[26px] font-semibold rounded px-[56px] py-[19px] text-primary-white hover:bg-primary hover:border-primary">
                Start your project
            </button>
        </div>
    </div>
    <div className='mt-[36px] md:container md:mx-auto justify-center items-center flex flex-col'>
        <img className='items-center w-[90%] md:w-[100%]'
            src={contactUs} alt="#" />
    </div>
</div>
</div>
    </div>
  )
}