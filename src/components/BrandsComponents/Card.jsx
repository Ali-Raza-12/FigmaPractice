import React from "react";
import CardHeader from "./CardHeader";
import CarddBottom from "./CardBottom";
import cup from "../../assets/cup.svg";
import cardLogo from "../../assets/Ellipse 61.png";
import redCup from "../../assets/redVector.png";
import img from "../../assets/image 1097.png";
import plus from "../../assets/Plus - Iconly Pro.svg";
import chevVector from "../../assets/Arrow - Down Circle - Iconly Pro.svg";

const Card = () => {
  return (
    <div className="">
      {/* Proven Winner */}

      <div className="w-[246px] h-[391px] rounded-[12px] bg-[#575859]">
        <div className="flex justify-between p-3">
          <div className="flex gap-2">
            <img src={cardLogo} alt="Brand Logo" />
            <p className="text-[14px] font-medium leading-[140%] tracking-[-2%] text-white">
              Nectar
            </p>
          </div>

          <div className="flex items-center gap-2 py-1 px-2 bg-white rounded-[100px]">
            <img src={redCup} alt="Cup Icon" />
            <p className="text-[8px] text-[#16603B] font-medium leading-[100%] tracking-[-1%]">
              Proven Winners
            </p>
          </div>
        </div>

        <div>
          <img src={img} alt="Product Image" />
        </div>

        <div className="p-3 flex flex-col gap-3">
          <div className="flex justify-between">
            <p className="text-[10px] font-normal leading-[100%] text-[#D9D9D9]">
              www.nectarsleep.com
            </p>
            <button className="text-[10px] text-[#FFFFFF] font-normal leading-[100%] py-2 px-3 bg-[#707172] rounded-[100px]">
              Shop Now
            </button>
          </div>

          <div>
            <div className="flex justify-between py-2 px-4 bg-white rounded-[100px]">
              <img src={plus} alt="Plus Icon" />
              <p className="text-[12px] font-medium leading-[140%] tracking-[-2%]">
                Save to Inspiration
              </p>
              <img src={chevVector} alt="Chevron Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
