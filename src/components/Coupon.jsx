import React, { useContext } from "react";
import { Button } from "./Button";
import authContext from "../context/authContext";

const Coupon = ({ discount, code }) => {

  const {isCoupon,setIsCoupon}=useContext(authContext)
  return (
    <div className="coupon h-[27%] w-[95%] flex flex-col items-center justify-center mix-blend-color-multiply ">
      <div className="text-center">
        <p className="text-3xl font-medium font-roboto pb-4   ">{discount}</p>
      </div>
      <div className="flex w-full justify-between px-12 items-center">
        <p className="w-20 text-xl font-medium">{code}</p>
        <Button onClick={()=>{
          setIsCoupon(false)
        }} className="text-white text-lg py-1 px-6 rounded-full">
          Claim
        </Button>
      </div>
    </div>
  );
};

export default Coupon;
