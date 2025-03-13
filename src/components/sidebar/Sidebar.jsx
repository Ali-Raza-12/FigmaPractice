import React from "react";
import logo from "../../assets/mainLogo.svg";
import notificationIcon from "../../assets/Notification - Iconly Pro.svg";
import profilePic from "../../assets/Ellipse 59.png";
import nadiraLogo from "../../assets/Group 1312.png";
import chevDown from "../../assets/Vector.svg";
import Brands from "../../assets/Home - Iconly Pro.svg";
import Inspire from "../../assets/Search.svg";
import Market from "../../assets/Market.svg";
import Ad from "../../assets/Adsense.svg";
import Track from "../../assets/track.svg";
import Brief from "../../assets/module.svg";
import settings from "../../assets/Setting.svg";
import user from "../../assets/Add-User.svg";
import star from "../../assets/Star - Iconly Pro.svg";

const Sidebar = () => {
  const sidebarItems = [
    // { title: "Brands", icon: Brands, path: "/" },
    { title: "Inspire", icon: Inspire, path: "/inspire" },
    {
      title: "Market Intelligence",
      icon: Market,
      path: "/market-intelligence",
    },
    { title: "Ad Spend", icon: Ad, path: "/ad-spend" },
    { title: "Track Brand", icon: Track, path: "/ad-spend" },
    { title: "Brief Module", icon: Brief, path: "/ad-spend" },
  ];

  return (
    <>
      <div className="w-[288px] h-fit flex flex-col bg-[#1F2121] rounded-[16px] p-[24px] gap-[24px]">
        {/* Head  */}
        <div className="flex justify-between">
          <div className="flex items-center gap-[8px]">
            <img src={logo} className="w-[20px] h-[20px]" alt="" />
            <h2 className="text-[20px] text-[#FFFFFF] font-bold leading-[120%] tracking-[-2%]">
              ADOLOGY
            </h2>
          </div>

          <div className="flex gap-[8px] items-center">
            <div className="w-[32px] h-[32px] bg-[#575859] rounded-[100%] items-center flex justify-center">
              <img src={notificationIcon} className="" alt="" />
            </div>
            <img src={profilePic} alt="" />
          </div>
        </div>

        {/* Content  */}
        <div className="py-4 border-y border-[#2F3132] flex flex-col gap-4">
          <div className="flex justify-between items-center bg-[#575859] rounded-[100px] py-[16px] px-[20px]">
            <div className="flex gap-[8px] items-center">
              <div className="w-[20px] h-[20px] rounded-[100%]">
                <img src={nadiraLogo} alt="" />
              </div>
              <h1 className="text-[#FFFFFF] text-[16px] font-semibold leading-[140%] tracking-[-2%]">
                Nadira Sleep
              </h1>
            </div>
            <img src={chevDown} alt="" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center py-4 px-5 bg-[#ffffff] rounded-[100px]">
              <div className="w-5 h-5 rounded-full">
                <img src={Brands} alt="" />
              </div>
              <h1 className="text-black text-base font-semibold leading-[140%] tracking-tight">
                Brands
              </h1>
            </div>
            {sidebarItems.map((item, index) => (
              <div key={index} className="flex gap-2 items-center py-4 px-5">
                <div className="w-5 h-5 rounded-full">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h1 className="text-white text-base font-semibold leading-[140%] tracking-tight">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center py-4 px-5">
              <div className="w-5 h-5 rounded-full">
                <img src={settings} alt="" />
              </div>
              <h1 className="text-white text-base font-semibold leading-[140%] tracking-tight">
                Setting
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center py-4 px-5">
              <div className="w-5 h-5 rounded-full">
                <img src={user} alt="" />
              </div>
              <h1 className="text-white text-base font-semibold leading-[140%] tracking-tight">
                Invite
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-[16px] p-4 bg-[#5D6062] text-center">
          <div className="flex flex-col gap-2 px-4">
            <h2 className="text-[18px] font-semibold leading-[140%] tracking-[-2%] text-[#FFFFFF]">
              Become Pro Acces
            </h2>
            <p className="text-[12px] font-normal leading-[100%] tracking-[-1%] text-[#ffffff]">
              Try your experience for using more features
            </p>
          </div>
          <div className="flex justify-between items-center bg-[#575859] rounded-[100px] py-[16px] px-[20px]">
            <div className="flex gap-[8px] items-center">
              <div className="w-[20px] h-[20px] rounded-[100%] items-center">
                <img src={star} alt="" />
              </div>
              <h1 className="text-[#17191A] text-[16px] font-semibold leading-[140%] tracking-[-2%]">
                Upgrade Pro Plan
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
