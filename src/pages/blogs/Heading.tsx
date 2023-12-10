import React from 'react'
import dot from '../../images/dot.png'
import LineAnimation from '../../components/LineAnimation'
export default function Heading() {
  return (
    <div>
      <div className='w-[95%] md:w-[80%] md:mx-auto flex flex-row mt-[43px] md:mt-[76px] items-center justify-center md:justify-start'>
        <div className='flex flex-col items-center md:items-start' data-aos="fade-up">
          <p className='text-4xl text-center md:text-5xl lg:text-6xl font-bold font-urbanist text-black'>
            LATEST <span className='text-primary font-urbanist font-bold'>BLOGS </span>
          </p>
          <LineAnimation width='200px' height='7px' backgroundColor='#00B8F1' marginTop="22px" />
        </div>
      </div>
    </div>
  )
}
