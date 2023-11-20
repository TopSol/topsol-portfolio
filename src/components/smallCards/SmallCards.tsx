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
      className={` bg-primary-${color} ${className} hover:scale-[1.02]`}
      style={{
        transition: "all .50s ease "
      }}
    >
      <div className=" ">
        <img src={avatar} />
      </div>
      <div className="my-2">
        <h1 className={`${headingClass}`}>{heading}</h1>
      </div>
      <div className={`${textClass}`}>{text}</div>
    </div>
  );
}

export default SmallCards;
