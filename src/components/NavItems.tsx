import React from "react";
import { BiPhoneCall, BiRightArrowAlt } from "react-icons/bi";

const NavItems = () => {
  const navItems: string[] = ["Benefits", "Services", "Work", "Team", "Pricing", "FAQ"];
  return (
    <div className="absolute bottom-8 w-full">
      <div
        style={{ boxShadow: "0px 10px 20px 0px rgba(165, 163, 174, 0.40)" }}
        className="flex justify-center max-w-[644px] mx-auto gap-[32px] rounded-[24px] py-3 px-8 bg-white items-center"
      >
        <ul className="flex gap-8">
          {navItems.map((item, index) => {
            return (
              <li className="text-body text-[16px] leading-[24px]" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
        <div className="flex gap-[12px] ">
          <div className="p-[9px] rounded-[8px] cursor-pointer border-divider border">
            <BiPhoneCall className="text-[28px] text-heading" />
          </div>
          <button className="btn btn-primary rounded-[12px] flex gap-[10px] px-[9px]">
            <BiRightArrowAlt className="text-[28px] text-white " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
