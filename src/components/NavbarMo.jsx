import React from "react";
import Shop from "../assets/mobile/Shop.svg";
import cart from "../assets/mobile/cart.svg";
import magic from "../assets/mobile/magic.svg";
import profile from "../assets/mobile/profile.svg";
import coupons from "../assets/mobile/Coupon.svg";
import openMail from "../assets/Contact Book.svg";
import { Link } from "react-router-dom";

const NavbarMo = () => {
  return (
    <div className=" bg-white z-20 p-3 mobile_navbar rounded-tr-lg rounded-tl-lg gap-14 flex-1 drop-shadow-2xl absolute bottom-0 w-[100%] flex items-center justify-evenly ">
      <Link to="/userhome">
        <div>
          <img src={Shop}></img>
        </div>
      </Link>
      <Link to="/userorder">
        <div>
          <img src={cart}></img>
        </div>
      </Link>

      <Link to="/contactpage">
        <div>
          <img src={openMail}></img>
        </div>
      </Link>
    </div>
  );
};

export default NavbarMo;
