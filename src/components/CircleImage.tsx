import React,{useState} from 'react'
import commentCircle from '../images/rating1.png'
import hoverCircle from '../images/ratingCircle.png'
export default function CircleImage({showFlex}) {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`md:flex ${showFlex ? 'flex' : 'hidden'}`}>
<img
            src={isHovered ? hoverCircle : commentCircle}
            className=" overflow-visible"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            alt="Image"
          />
    </div>
  )
}
