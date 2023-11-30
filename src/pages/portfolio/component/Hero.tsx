import React from 'react'

export default function Hero() {
    return (
        <div className='bg-[#00B8F1] py-[119px]'>
            <div className='flex flex-col' data-aos="fade-up">
                <h1 className='text-center text-white font-urbanist text-[35px] md:text-[60px] uppercase font-bold' >
                    OUR  <span className='text-black font-urbanist text-[35px] md:text-[60px] uppercase font-bold'>PORTFOLIO</span></h1>
                <p className='font-figtree font-light md:text-[26px] text-[18px] mt-2 text-white text-center'>Dive into our portfolio web page to witness the breadth of our expertise</p>
            </div>
        </div>
    )
}
