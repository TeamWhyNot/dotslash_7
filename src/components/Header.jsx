import React from "react";
import logoDark from "../assets/logoDark.svg";
import bag from "../assets/Bag.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[10%] w-full flex items-center justify-around p-4">
      <Link to="/userhome" className="w-full ">
        <div className="flex items-center">
          <img src={logoDark} className="h-full w-[20%] "></img>
          <div className="h-full w-[60%] flex items-center font-semibold text-2xl">
            ShopRush
          </div>
        </div>
      </Link>
      <div className="h-full w-[16%] bg-ghostwhite rounded-full flex items-center justify-center">
        <Link to="/userbag">
          <img src={bag} className="h-8"></img>
        </Link>
      </div>
    </div>
  );
};

export default Header;
