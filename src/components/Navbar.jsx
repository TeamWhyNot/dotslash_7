import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import logo from "../assets/logoDark.svg";

const Navbar = () => {
  return (
    <div className="h-auto z-[100] w-full pt-2 ">
      <div className="flex gap-[50%] justify-center">
        <div className="logo flex gap-2 items-center  ">
          <img src={logo} alt="" />
          <Link to="/">
            <h1 className=" font-semibold text-2xl ">ShopRush</h1>
          </Link>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <Link to="/login">
            <h1 className=" text-lg font-semibold">Login</h1>
          </Link>
          <Link to="/category">
            <Button className="  h-10 text-lg max-w-full overflow-hidden w-32 rounded-2xl  ">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
