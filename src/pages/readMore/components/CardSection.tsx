import React from 'react'
import dot from '../../../images/dot.png'
import LineAnimation from '../../../components/LineAnimation'
export default function CardSection() {
  return (
    <div className='md:w-[80%] md:justify-center md:mx-auto'>
      <div className=' mt-[50px] mx-[37px] md:container md:mx-auto  flex flex-col  justify-center  '>
        <h1 className='text-[22px] md:text-[30px] justify-center  text-center md:text-left text-black font-semibold '>Unraveling the Power of Data Science</h1>
        <div className=" flex justify-center items-center md:justify-start md:items-start">
          <div className="flex justify-center items-center">
            <div className='md:ml-[149px] ml-0'>
          <LineAnimation width='178px' height='7px' backgroundColor='#00B8F1' marginTop="22px"/>
          </div>
          </div>
        </div>
        <p className='text-[16px] md:text-[22px] text-center md:text-left text-black font-medium mt-[37px] '> In the vast landscape of modern technology, data has emerged as the new gold. From the intricate
          patterns of consumer behavior to the deep insights hidden withinbusiness operations, data holds
          the key to unlocking unprecedented opportunities. This is where the realm of Data Science steps in,
          transforming raw information into actionable intelligence</p>
        <div className='w-[100%] mt-[37px] md:mt-[50px] md:container md:mx-auto justify-center items-center flex flex-col'>
          <img
            className='items-center w-[100%]'
            src="https://res.cloudinary.com/asifsaythe/image/upload/v1693305603/new_portfolio/businesswoman-networking-using-digital-devices_tibomc.png"
            alt="#"
          />
          <div className='hidden 2xl:hidden md:flex flex-row absolute left-16  '>
            <img src={dot} alt="" />
          </div>
        </div>

      </div>

    </div>
  )
}
