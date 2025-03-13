import React from "react";

function CardHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-2">
      <img src={icon} className="text-white" alt="" />
      <p className="text-[16px] text-white font-medium leading-[140%] tracking-[-2%]">
        {title}
      </p>
    </div>
  );
}

export default CardHeader;
