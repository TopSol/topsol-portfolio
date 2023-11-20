import React from 'react'
import dataSciences from '../../../images/dataScience.png'

export default function Hero() {
  return (
    <div>
      <div className=' pb-[176px] md:pt-[112px] bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo'>

        <div className='md:w-[80%] md:container md:mx-auto md:flex-row flex flex-col  justify-center'>
          <div className='w-full mt-[70px] md:container md:mx-auto md:mt-0  flex flex-col justify-center text-center md:text-left '>
            <h1 className="text-[36px] md:text-[70px] xl:text-[90px]  text-white font-[600]">
              What is <br />
              <span className="md:inline xl:w-[100%] text-primary">Data </span>
              <span className="inline md:block text-primary md:text-white">Science</span>
            </h1>
          </div>
          <div className='w-[100%] mt-[56px] md:container justify-center items-center flex flex-col'>
            {/* <img className='items-center md:w-[471px] '
              src={dataSciences} alt="#" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
