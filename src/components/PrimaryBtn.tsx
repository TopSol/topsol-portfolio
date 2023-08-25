import React from 'react'

interface Iprops {
    text:string
   
}

export default function PrimaryBtn({text}:Iprops) {
  return (
    <button className="bg-primary py-4 px-16 mt-16 rounded hover:bg-primary-light font-montserrat " >{text || "enter your text"}</button>
  )
}
