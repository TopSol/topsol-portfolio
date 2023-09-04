

import React from 'react';

interface Iprops {
  text: string;
  additionalClasses?: string; // Allow for optional additional classes
}

export default function PrimaryBtn({ text, additionalClasses }: Iprops) {
  const buttonClasses = `bg-primary py-4 px-16  rounded hover:bg-primary  ${additionalClasses}`;

  return (
    <button className={buttonClasses}>{text || "enter your text"}</button>
  );
}
