import React,{useState} from "react";

type appProps = {
  title?: string | null;
  avatar: string;
};

function ExpertCards({ title, avatar }: appProps) {
  const [isHover, setIsHover] = useState(false);
  const hasTitle = !!title;
  console.log(hasTitle, "true false value is hear -----");

  return (
    <div
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
      className={` ${isHover ? "bg-primary-light ": "bg-white "} flex flex-col items-center  ${
        hasTitle ? "rounded-[10px] border-2 border-primary-light " : " border-none shadow-lg shadow-gray-400 rounded-[20px]"
      }`}
    >
      <img
        src={avatar}
        alt=""
        className={`   ${hasTitle ? "mt-[28px] bg-white p-4 rounded-full " : "m-[26px]"} `}
      />
      {hasTitle ? (
        <h1 className={`  mt-[35px]  mb-[21px]  px-[41px] text-[13px] font-bold `}>
          {title}
        </h1>
      ) : null}
    </div>
  );
}

export default ExpertCards;
