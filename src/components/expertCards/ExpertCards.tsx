import React from 'react'

type appProps={
    title?:string,
    avatar:string,
}

function ExpertCards({title,avatar}:appProps) {
    const hasTitle = !!title; 

  return (
    
      <div className={`flex py-2 flex-col hover:bg-[#00B8F1] ${!hasTitle?'shadow-md':'shadow-none'}  hover:text-white items-center justify-center rounded-md ${!hasTitle?'':'border'} border-[#00B8F1] ${ hasTitle ? 'max-w-[198px]' : 'max-w-[100px]'} ${hasTitle?'max-h-[140px]':'max-h-[100px]'} ${hasTitle?'hover:scale-y-125':'hover:scale-y-none'} transform origin-top transition-transform duration-500 ease-in-out`}>
            <div className="bg-white rounded-full p-2">
              <img src={avatar} />
            </div>
            <div className={`pt-${hasTitle?6:0} text-center`}>
              <p>{title}</p>
            </div>
          </div>
    
  )
}

export default ExpertCards
