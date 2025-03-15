import React, { useRef } from "react";
import HeaderButtons from "../components/BrandsComponents/BrandsButtons/HeaderButtons";
import search from "../assets/mingcute_search-line.svg";
import trends from "../assets/fluent_arrow-trending-lines-20-filled.svg";
import like from "../assets/like.svg";
import savedAds from "../assets/savedAds.svg";
import cup from "../assets/cup.svg";
import fileicon from "../assets/fileicon.svg";
import measure from "../assets/lucide_scale.svg";
import Card from "../components/BrandsComponents/Card";
import StatsCard from "../components/BrandsComponents/StatsCard";
import chevLeft from "../assets/Arrow---Left-2.svg";
import chevRight from "../assets/Arrow---Right-2.svg";
import CardHeader from "../components/BrandsComponents/CardHeader";

const Brands = () => {
  const headerButtons = [
    { title: "Trends", icon: trends },
    { title: "Recommendations", icon: like },
    { title: "Saved Ads", icon: savedAds },
  ];

  const sections = [
    { title: "Proven Winners", icon: cup },
    { title: "Scaled Concepts", icon: measure },
    { title: "New Ads", icon: fileicon },
  ];

  // Create an array of refs for each section
  const scrollRefs = sections.map(() => useRef(null));

  const scrollLeft = (index) => {
    if (scrollRefs[index].current) {
      scrollRefs[index].current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (index) => {
    if (scrollRefs[index].current) {
      scrollRefs[index].current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-[1900px] h-auto">
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
              <HeaderButtons
                className="text-white"
                icon={item.icon}
                title={item.title}
              />
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
      {sections.map((section, index) => (
        <div key={index} className="pb-8 px-6">
          <h2 className="text-white text-lg font-medium flex items-center gap-2">
            <img src={section.icon} alt={section.title} />
            {section.title}
          </h2>

          {/* Cards Section */}
          <div className="relative">
            <div
              ref={scrollRefs[index]}
              className="flex overflow-x-auto scrollbar-hide gap-3 mt-4 pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {[...Array(8)].map((_, i) => (
                <div key={i} className="min-w-[250px]">
                  <Card />
                </div>
              ))}
            </div>

            {/* Pagination Buttons */}
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => scrollLeft(index)}
                className="w-[32px] h-[32px] flex justify-center items-center bg-[#575859] rounded-full swiper-button-prev"
              >
                <img src={chevLeft} alt="previous" />
              </button>
              <button
                onClick={() => scrollRight(index)}
                className="w-[32px] h-[32px] flex justify-center items-center bg-[#575859] rounded-full swiper-button-next"
              >
                <img src={chevRight} alt="next" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brands;
