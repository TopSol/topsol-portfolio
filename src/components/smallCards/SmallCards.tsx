import React from 'react'

type CardsProps ={
    avatar:string,
    heading:string,
    text:string,
    color?:string,
    className?:string,
}

function SmallCards({avatar,heading,text,color,className}:CardsProps) {
  return (
    <div className={`max-w-[208px] max-h-[217px] p-[22px] bg-primary-${color} ${className} rounded hover:bg-primary hover:text-primary-white`}>
      <div className=' group-hover:bg-primary-white group-hover:rounded-full group-hover:w-16 group-hover:h-16 group-hover:p-2'>
        <img src={avatar}/>
      </div>  
      <div className='my-4'>
        <h1 className=' font-semibold text-sm'>
            {heading}
        </h1>
      </div>  
      <div className=' text-[11px] font-normal'>
        {text}
      </div>  
    </div>
  )
}

export default SmallCards
