import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import logo from "../assets/logoDark.svg";

const NavbarLogOut = () => {
  return (
    <div className="h-auto z-[100] w-full pt-2 ">
      <div className="flex gap-[20%] justify-center">
        <div className="logo flex gap-2 items-center  ">
          <img src={logo} alt="" />
          <Link to="/">
            <h1 className=" font-semibold text-2xl ">Shoppify</h1>
          </Link>
        </div>
        <div className="flex items-center font-medium justify-between w-[30%] text-black text-lg gap-x-5 font-inter ">
          <div className="cursor-pointer">Shop</div>
          <div className=" cursor-pointer">Advice</div>
          <div className=" cursor-pointer">Analytics</div>
        </div>

        <div className="flex gap-5 justify-center items-center">
          {/* <Link to="/login">
            <h1 className=" text-lg font-semibold">Login</h1>
          </Link> */}
          {/* <Link to="/category">
            <Button className=" h-[2rem]  text-lg w-[5.5rem]">Register</Button>
          </Link> */}
          <Link to="/category">
            <Button className=" h-10 text-lg max-w-full overflow-hidden w-32 rounded-full text-white font-semibold hover:text-black">
              LogOut
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarLogOut;
