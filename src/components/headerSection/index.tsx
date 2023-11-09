import React from 'react';


const Header = () => {

  return (
    <div className=' bg-primary py-[120px]'>
      <div className='md:container  md:mx-auto   flex flex-col justify-center  text-center  '>
        <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-[70px] mb-0 md:mb-[21px] font-urbanist  text-white font-bold'>BLOGS & <span className='text-textColors'>ARTICLES</span></h1>
        <p className='text-[20px] md:text-lg lg:text-xl xl:text-[24px] mt-[26px] font-figtree font-light  md:mt-[10px] text-white  '>Dive into our Blog web page to explore the our latest articles and blogs</p>
      </div>
    </div>
  );
};

export default Header;
