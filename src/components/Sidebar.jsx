import React, { useState } from "react";
import NavLink from "./NavLink";
import { Link, useNavigate } from "react-router-dom";
import { mainNavlinks, subNavlinks, thirdNavlinks } from "../shared/constants";
import { Logo } from "../shared/assets";
import {
  FilledButton,
  OutlineButton,
} from "../shared/components/CustomButtons";

import { BsQuestionCircle } from "react-icons/bs";
import { IoMdArrowDropleft } from "react-icons/io";
function Sidebar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("Dashboard");
  return (
    <>
      <div className="flex gap-[1rem] flex-col p-2 top-0 sticky min-w-[300px] h-screen bg-[#FFFBF7] overflow-y-scroll ">
        <div className="flex flex-col gap-y-3 ml-[1rem]">
          <Link className="text-[20px] font-[700]" to="/">
            WorldBank
          </Link>
        </div>

        <div className="flex flex-col gap-[2.5rem] mt-[0.5rem]">
          <div className="flex mx-[1rem] flex-col gap-1 ">
            <span className="text-[#8D8D8D] text-[14px]">Main Pages</span>
            {mainNavlinks.map((link) => (
              <NavLink
                key={link.name}
                {...link}
                isActive={isActive}
                handleClick={(event) => {
                  event.preventDefault();
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              />
            ))}
          </div>
          <div className="flex mx-[1rem] flex-col gap-1">
            <span className="text-[#8D8D8D] text-[14px]">Account Payments</span>

            {subNavlinks.map((link) => (
              <NavLink
                key={link.name}
                {...link}
                isActive={isActive}
                handleClick={(event) => {
                  event.preventDefault();
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              />
            ))}
          </div>
          <div className="flex mx-[1rem] flex-col gap-1">
            <span className="text-[#8D8D8D] text-[14px]">Send Payments</span>

            {thirdNavlinks.map((link) => (
              <NavLink
                key={link.name}
                {...link}
                isActive={isActive}
                handleClick={(event) => {
                  event.preventDefault();
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col m-[1rem] gap-3">
          <FilledButton
            startIcon={<BsQuestionCircle />}
            title="Support"
            styles={{
              width: "140px",
              borderRadius: "32px",

              backgroundColor: "#EF2C5A",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#EF2C5A",
                opacity: "0.9",
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
