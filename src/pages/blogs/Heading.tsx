import React from 'react'
import dot from '../../images/dot.png'

export default function Heading() {
  return (
    <div>
        <div className='md:container md:mx-auto   flex flex-row mt-[43px] md:mt-[76px] items-center md:justify-between justify-center '>
  <div className='hidden md:flex '>
    <img src={dot} alt="" />
  </div>
  <div className='flex flex-col justify-center items-center'>
    <p className='text-4xl text-center md:text-5xl lg:text-6xl text-black'>
      Top Niches
    </p>
    <div className="before:content-[''] before:block before:h-[7px] 
      before:bg-[#00B8F1] before:rounded-3xl
      before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
      before:transition before:ease-in-out before:duration-1000
      w-[103px] md:w-[178px] mt-[10px] md:mt-[16px] items-center">
    </div>
  </div>
  <div className='hidden md:flex' ></div>
</div>

    </div>
  )
}
