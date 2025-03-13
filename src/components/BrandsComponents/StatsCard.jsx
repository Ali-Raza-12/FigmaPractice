import React from "react";
import signal from "../../assets/streamline_money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow.svg";
import chevLeftRight from "../../assets/Frame 1000002976.svg";
import Ellipse from "../../assets/Ellipse 60.svg";
import spy from "../../assets/tabler_spy.svg";
import magic from "../../assets/bitcoin-icons_magic-wand-outline.svg";
import video from "../../assets/tabler_video.svg";

const StatsCard = () => {
  return (
    <>
      <div className="bg-[#575859] h-[290px] rounded-[12px] text-white w-full">
        <div className="border-b border-[#707172] p-3">
          <div className="flex justify-between items-center">
            <h2 className="text-[14px] font-medium leading-[140%] tracking-[-2%]">Following</h2>
            <button className="flex items-center justify-center bg-[#FEFFFF] text-[#101010] text-[10px] font-medium rounded-full gap-1 px-[6px] py-1">
              <img src={signal} alt="Signal" />
              <span className="whitespace-nowrap">5,789%</span>
            </button>
          </div>
        </div>

        <div className="p-3">
          <p className="text-sm text-[#D9D9D9]">
            <span className="text-white text-[12px] font-bold">5,824</span> Fresh Campaigns from this Brand Group
          </p>

          <div className="flex-grow flex flex-col justify-between mt-4">
            {[
              { name: "Nectar Sleep", ads: "1,718 new ads", type: "Competitor" },
              { name: "Purple", ads: "2,786 new ads", type: "Competitor" },
              { name: "Casper", ads: "1,320 new ads", type: "Followed" },
            ].map((brand, index) => (
              <div key={index} className="flex justify-between items-center my-2">
                <div className="flex gap-2">
                  <img src={Ellipse} alt="" />
                  <div>
                    <p className="text-[#FFFFFF] text-[14px] font-medium leading-[140%]">{brand.name}</p>
                    <p className="text-[#D9D9D9] text-[12px]">{brand.ads}</p>
                  </div>
                </div>
                <button className="flex items-center justify-center w-[90px] h-[25px] bg-[#FEFFFF] text-[#101010] text-[10px] font-medium rounded-full gap-1 px-3 shadow-md">
                  <img src={spy} className="w-4 h-4" alt="Spy Icon" />
                  <span className="whitespace-nowrap">{brand.type}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#575859] h-[290px] rounded-[12px] text-white w-full">
        <div className="border-b border-[#707172] p-3">
          <div className="flex justify-between items-center">
            <h2 className="text-[14px] font-medium leading-[140%] tracking-[-2%]">Brand Spotlight</h2>
            <img src={chevLeftRight} alt="Chevron Icon" />
          </div>
        </div>

        <div className="flex flex-col gap-2 p-3">
          <div className="flex gap-2">
            <img src={Ellipse} alt="" />
            <div className="flex flex-col gap-[2px]">
              <p className="text-[#FFFFFF] text-[14px] font-medium leading-[140%] tracking-[-2%]">Nectar Sleep</p>
              <p className="text-sm text-[#D9D9D9]">
                <span className="text-white text-[12px] font-bold">1,718 new ads</span> last 30 days
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img src={magic} alt="" />
            <p className="text-white text-[10px] font-medium leading-[100%]">Marketing overview</p>
          </div>

          <ul className="space-y-2">
            {[
              "More carousel & video ads for engagement",
              "AI-driven messaging boosts personalization",
              "Seasonal promos drive conversions",
            ].map((item, index) => (
              <li key={index} className="text-[10px] font-medium text-[#FFFFFF] leading-[140%]">• {item}</li>
            ))}
          </ul>
        </div>

        <div className="flex w-full p-3 gap-2">
          {[
            { label: "Video ads", value: 87 },
            { label: "Image ads", value: 117 },
            { label: "Carousel Ads", value: 21_375 },
          ].map((stat, index) => (
            <div key={index} className="flex-1 bg-[#707172] p-3 rounded-[6px] flex flex-col justify-center">
              <div className="flex gap-1 items-center">
                <img src={video} alt="" className="w-4 h-4" />
                <p className="text-[12px] leading-[100%] text-[#FFFFFF] font-bold">{stat.value}</p>
              </div>
              <p className="text-[8px] leading-[100%] text-[#FFFFFF] font-normal mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#575859] h-[290px] rounded-[12px] text-white w-full">
        <div className="border-b border-[#707172] p-3">
          <h2 className="text-[14px] font-medium leading-[140%] tracking-[-2%]">What’s New</h2>
        </div>

        <div className="p-3">
          <div className="flex items-center gap-2">
            <img src={magic} alt="Magic Icon" />
            <p className="text-white text-[10px] font-medium leading-[100%]">AI summary</p>
          </div>

          <div className="mt-3">
            {[
              { name: "Nectar Sleep", description: "More carousel ads for engagement" },
              { name: "Purple", description: "Higher video ad spend for awareness" },
              { name: "Casper", description: "Focus on seasonal offers for conversions" },
            ].map((brand, index) => (
              <div key={index} className="flex justify-between items-center my-[10px]">
                <div className="flex gap-2">
                  <img src={Ellipse} className="w-[28px] h-[28px]" alt="Brand Icon" />
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[#D9D9D9] text-[10px] font-medium leading-[100%] tracking-[-1%]">{brand.name}</p>
                    <p className="text-[#FFFFFF] text-[10px] font-normal leading-[100%] tracking-[-1%]">{brand.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full p-3 gap-2">
            {[
              { label: "New Ads", value: 3_675 },
              { label: "New Concepts", value: 872 },
              { label: "New Offers", value: 396 },
            ].map((stat, index) => (
              <div key={index} className="flex-1 bg-[#707172] p-3 rounded-[6px] flex flex-col justify-center">
                <div className="flex gap-1 items-center">
                  <img src={video} alt="" className="w-4 h-4" />
                  <p className="text-[12px] leading-[100%] text-[#FFFFFF] font-bold">{stat.value}</p>
                </div>
                <p className="text-[8px] leading-[100%] text-[#FFFFFF] font-normal mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCard  ;