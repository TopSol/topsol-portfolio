import React from 'react'

type appProps={
    heading:string,
    desc:string,
    avatar:string,
}

function ServicesCards({heading,desc,avatar}:appProps) {
  return (
    <div>
      <div className=" border-2  hover:bg-[#32CFFF] hover:text-white border-[#32CFFF] rounded-2xl  w-[264px] h-[369px]  items-center">
            <div className="flex flex-col hover:translate-y-2 w-full items-center px-4 ">
          <div className="mb-2">
            <img src={avatar} />
          </div>
          <div className="py-4 font-extrabold">
            <p>{heading}</p>
          </div>
          <div className="text-center pt-4 leading-8">
            <p>
              {desc}
            </p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default ServicesCards
