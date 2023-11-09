import React from "react";
import Arrowup from "../images/Icons/arrowup.svg";
import { motion } from "framer-motion";

interface Iprops {
  text: string;
  additionalClasses?: string;
  icon?: boolean;
}

export default function PrimaryBtn({ text, additionalClasses, icon }: Iprops) {
  const buttonClasses = `bg-primary py-4 px-16  rounded   ${additionalClasses}`;

  return (
    <motion.button className={`${buttonClasses} `}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
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
    </motion.button >
  );
}
