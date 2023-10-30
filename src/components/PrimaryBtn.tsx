import React from "react";
import Arrowup from "../images/Icons/arrowup.svg";

interface Iprops {
  text: string;
  additionalClasses?: string;
  icon?: boolean;
}

export default function PrimaryBtn({ text, additionalClasses, icon }: Iprops) {
  const buttonClasses = `bg-primary py-4 px-16  rounded hover:bg-primary  ${additionalClasses}`;

  return (
    <button className={buttonClasses}>
      {text || "enter your text"}{" "}
      {icon && (
        <img
          src={Arrowup}
          className="ml-[12px]"
          style={{
            filter:
              "invert(100%) sepia(15%) saturate(0%) hue-rotate(339deg) brightness(103%) contrast(101%)",
          }}
        />
      )}
    </button>
  );
}
