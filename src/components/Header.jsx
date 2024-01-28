import React from "react";
import logoDark from "../assets/logoDark.svg";
import bag from "../assets/Bag.svg";

const Header = () => {
  return (
    <div className="h-[10%] w-full flex items-center justify-around p-4">
      <img src={logoDark} className="h-full w-[20%] "></img>
      <div className="h-full w-[60%] flex items-center font-semibold text-2xl">
        shopRush
      </div>
      <div className="h-full w-[16%] bg-ghostwhite rounded-full flex items-center justify-center">
        <img src={bag} className="h-8"></img>
      </div>
    </div>
  );
};

export default Header;
