import React from "react";
import HeaderButtons from "../components/BrandsComponents/BrandsButtons/HeaderButtons";
import search from "../assets/mingcute_search-line.svg";
import trends from "../assets/fluent_arrow-trending-lines-20-filled.svg";
import like from "../assets/like.svg";
import savedAds from "../assets/savedAds.svg";
import cup from "../assets/cup.svg";
import fileicon from "../assets/fileicon.svg";
import measure from "../assets/lucide_scale.svg";
import CardHeader from "../components/BrandsComponents/CardHeader";
import CardBottom from "../components/BrandsComponents/CardBottom";
import Card from "../components/BrandsComponents/Card";
import StatsCard from "../components/BrandsComponents/StatsCard";
import cardData from "../dummyData";

const Brands = () => {
  const headerButtons = [
    { title: "Trends", icon: trends },
    { title: "Recommendations", icon: like },
    { title: "Saved Ads", icon: savedAds },
  ];

  return (
    <div className="w-full h-auto">
      {/* Search and Header Buttons */}
      <div className="border-b border-[#575859]">
        <div className="flex gap-4 p-6">
          <div className="flex gap-2 bg-[#ffffff] px-4 py-3 rounded-[100px]">
            <img src={search} alt="Search Icon" />
            <h1 className="text-[16px] text-[#101010] font-medium leading-[140%] tracking-[-2%]">
              Explore
            </h1>
          </div>

          {headerButtons.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <HeaderButtons className="text-white" icon={item.icon} title={item.title} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-4 border-b border-[#575859] px-6">
        <div className="w-[87px] py-6 border-b-2 border-white">
          <p className="text-[16px] text-center font-medium leading-[140%] tracking-[-2%] text-[#ffffff]">
            For You
          </p>
        </div>

        <div className="w-[87px] py-6">
          <p className="text-[16px] text-center font-medium leading-[140%] tracking-[-2%] text-[#808080]">
            Ad Library
          </p>
        </div>
      </div>

      <div className="flex gap-4 p-6">
        <StatsCard />
      </div>

      {/* Sections */}
      {[
        { title: "Proven Winners", icon: cup },
        { title: "Scaled Concepts", icon: measure },
        { title: "New Ads", icon: fileicon },
      ].map((section, index) => (
        <div key={index} className="w-full py-4 px-6">
          <CardHeader title={section.title} icon={section.icon} />
          <div className="w-full flex gap-2 py-4 overflow-x-auto">
            {[...Array(4)].map((_, i) => (
              <Card key={i} />
            ))}
          </div>
          <CardBottom />
        </div>
      ))}
    </div>
  );
};

export default Brands;
