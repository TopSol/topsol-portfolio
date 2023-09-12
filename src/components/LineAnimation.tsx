import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
interface Iprops {
    width: string;
    height: string; 
    backgroundColor:string,
    marginTop?:string,
  }
export default function LineAnimation({   
    width,
    height,
    backgroundColor,
    marginTop,
   }:Iprops) {
    const [animationVisible, setAnimationVisible] = useState(false);
    const { ref, inView } = useInView({
      triggerOnce: true, 
    });
  console.log("dsaf",ref)
    const initialWidth = '0px'; 
      const widths = animationVisible ? width : initialWidth;
  
    useEffect(() => {
      if (inView) {
        setAnimationVisible(true);
      }
    }, [inView]);
    const transformStyle = animationVisible
    ? `scaleX(1)`
    : `scaleX(0)`;
  return (
    <div
      className="relative "
      style={{
        width:widths,
        height,
        backgroundColor,
        marginTop,
        borderRadius: '3px',
        transition: 'transform 1s ease-in-out',
        transformOrigin: 'left',
        transform: transformStyle,
        
      }}
      ref={ref}
    ></div>
  )
}
