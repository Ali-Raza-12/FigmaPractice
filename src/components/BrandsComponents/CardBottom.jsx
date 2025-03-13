import React from "react";
import pagination from "../../assets/Pagination numbers.png";
import chevLeft from "../../assets/Arrow---Left-2.svg";
import chevRight from "../../assets/Arrow---Right-2.svg";

const CardBottom = () => {
  return (
    <div className="w-full h-auto flex justify-between items-center">
      <div className="w-[92px] h-[32px]">
        <img src={pagination} alt="" />
      </div>

      <div className="flex gap-2">
        <div className="w-[32px] h-[32px] flex justify-center items-center bg-[#575859] rounded-full">
          <img src={chevLeft} alt="" />
        </div>

        <div className="w-[32px] h-[32px] flex justify-center items-center bg-[#575859] rounded-full">
          <img src={chevRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardBottom;
