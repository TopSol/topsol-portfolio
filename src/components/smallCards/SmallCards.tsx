import React, { useState } from "react";

type CardsProps = {
  avatar: string;
  hoverAvatar?: string;
  heading: string;
  text: string;
  color?: string;
  className?: string;
  headingClass?: string;
  textClass?: string;
};

function SmallCards({
  avatar,
  hoverAvatar,
  heading,
  text,
  color,
  className,
  headingClass,
  textClass,
}: CardsProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={` bg-primary-${color} ${className} rounded hover:bg-primary hover:text-primary-white`}
    >
      <div className=" group-hover:bg-primary-white group-hover:rounded-full group-hover:w-16 group-hover:h-16 group-hover:p-2">
        <img src={hover ? (hoverAvatar ? hoverAvatar : avatar) : avatar} />
      </div>
      <div className="my-4">
        <h1 className={`${headingClass}`}>{heading}</h1>
      </div>
      <div className={`${textClass}`}>{text}</div>
    </div>
  );
}

export default SmallCards;
