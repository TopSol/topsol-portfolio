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
        <div className="ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
            <path d="M2.45207 11.6698L8.66528 4.92997L8.67333 10.3977C8.67422 11.0461 9.20069 11.571 9.84914 11.57C10.1733 11.5695 10.4667 11.4377 10.6789 11.2249C10.891 11.0121 11.022 10.7183 11.0215 10.3941L11.0092 2.09199C11.0083 1.44359 10.4819 0.918674 9.83341 0.919629L1.53126 0.931851C0.882914 0.932806 0.357996 1.45927 0.358895 2.10767C0.359794 2.75607 0.886261 3.28099 1.53471 3.28003L7.0024 3.27198L0.789192 10.0119C0.331366 10.471 0.332461 11.2145 0.791637 11.6723C1.25081 12.1301 1.99424 12.129 2.45207 11.6698Z" fill="white" />
          </svg>
        </div>
      )}
    </motion.button >
  );
}
