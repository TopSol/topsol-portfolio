import React from 'react'
import dot from '../../images/dot.png'
import LineAnimation from '../../components/LineAnimation'
export default function Heading() {
  return (
    <div>
      <div className='md:container md:mx-auto   flex flex-row mt-[43px] md:mt-[76px] items-center justify-center '>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-4xl text-center md:text-5xl lg:text-6xl font-semibold text-black'>
            Top Niches
          </p>
          <div className='hidden  md:flex flex-row absolute left-12  '>
                    <img src={dot} alt="" />
                </div>
                <LineAnimation width='178px' height='7px' backgroundColor='#00B8F1' marginTop="22px"/>
        </div>
      </div>

    </div>
  )
}
