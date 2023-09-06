import React from 'react'

export default function ImageSection() {
  return (
    <div className='md:w-[80%] md:justify-center md:mx-auto'>
        <div className='mt-[57px] mx-[37px]  md:mt-0  md:container md:mx-auto  flex flex-col md:flex-row md:justify-between items-center'>
            <div className='w-[100%] '>
              <img
                className='mt-[37px] md:w-[95%] w-[100%]'
                src="https://res.cloudinary.com/asifsaythe/image/upload/v1693305708/new_portfolio/standard-quality-control-concept-m_xmlsh0.png"
                alt="#"
              />
            </div>
            <div className='w-[100%] '>
              <img
                className='mt-[37px]  md:w-[95%] w-[100%]'
                src="https://res.cloudinary.com/asifsaythe/image/upload/v1693305678/new_portfolio/html-css-collage-concept-with-person_mkcttq.png"
                alt="#"
              />
          </div>
        </div>
    </div>
  )
}
