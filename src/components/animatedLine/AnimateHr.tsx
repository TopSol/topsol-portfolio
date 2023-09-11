import React from 'react'

type appProps={
  bgColor:string,
  className?:string,
}

function AnimateHr({bgColor,className}:appProps) {
  return (
    <div>
      <div
            className={`relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-${bgColor} ${className} before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-8`}
          ></div>
    </div>
  )
}

export default AnimateHr
