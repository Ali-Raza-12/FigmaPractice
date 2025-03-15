import React from "react";
import chevLeft from "../../assets/Arrow---Left-2.svg";
import chevRight from "../../assets/Arrow---Right-2.svg";
import paginationImg from "../../assets/Pagination numbers.png"; // Ensure this path is correct

const CardBottom = () => {
  return (
    <div className="w-full h-auto flex justify-between items-center">
      <div className="w-[92px] h-[32px]">
        <img src={paginationImg} alt="pagination" />
      </div>

      <div className="flex gap-2">
        <div className="w-[32px] h-[32px] flex justify-center items-center bg-[#575859] rounded-full swiper-button-prev">
          <img src={chevLeft} alt="previous" />
        </div>

        <div className="w-[32px] h-[32px] flex justify-center items-center bg-[#575859] rounded-full swiper-button-next">
          <img src={chevRight} alt="next" />
        </div>
      </div>
    </div>
  );
};

export default CardBottom;