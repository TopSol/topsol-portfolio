import React from "react";
import FileIcon from "../../../images/Icons/fileIcon.png";
import { ServiceData } from "../../../types/interfaceTypes";
type CardsProps = {
  item: ServiceData
}
function Cards({ item }: CardsProps) {
  return (
    <div className="px-[25px] mx-5 md:mx-0 border-primary hover:bg-primary hover:text-white border-2 rounded-xl  py-2 ">
      <img
        src={FileIcon}
        className="w-[60px] bg-white rounded-full p-3 h-[60px] "
        alt=""
      />
      <h1 className="font-semibold text-[20px] font-montserrat my-3 ">
        {item.heading}
      </h1>
      <p className="text-[11px] font-montserrat">{item.detail}</p>
    </div>
  );
}

export default Cards;
