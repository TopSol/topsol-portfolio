import React from 'react'
type appProps={
    heading:string,
    desc:string,
    avatar:string,
    bg:String,
}

function ServicesCards({heading,desc,avatar,bg}:appProps) {
  return (
   <div className="border-2 border-[#32CFFF] rounded-2xl w-[264px] h-[369px] overflow-hidden relative hoverDive">
  <div className="flex flex-col w-full items-center px-4">
  <div className="mb-2 w-[70px] h-[70px] mt-2 z-10">
    <img src={avatar} alt="Avatar" />
  </div>
    <div className="mb-2 w-[70px] h-[70px] mt-2 translate-x-[-50%] absolute top-0 left-[50%] hoverImage">
    <img src={bg} alt="" />
    </div>
    <div className="py-4 font-extrabold z-10">
      <p>{heading}</p>
    </div>
    <div className="text-center pt-4 leading-8 z-10">
      <p>{desc}</p>
    </div>
  </div>
</div>

  )
}

export default ServicesCards

{/* <div className="relative border-2 border-[#32CFFF] hover:border-none rounded-2xl w-[264px] h-[369px] group ">
<span className="w-0 h-0 rounded-2xl bg-primary absolute top-0 left-0 ease-out duration-700 transition-all group-hover:w-full group-hover:h-full -z-1 "></span>
  <div className="flex flex-col w-full items-center px-4 py-4  hover:text-white group-hover:translate-y-1">
  <div className="mb-2 w-[70px] h-[70px] mt-2">
    <img src={avatar} alt="Avatar" />
  </div>
  <div className="py-4 font-extrabold">
    <p>{heading}</p>
  </div>
  <div className="text-center leading-8">
    <p>{desc}</p>
  </div>
</div>
</div> */}