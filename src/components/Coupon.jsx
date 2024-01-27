import React from "react";
import { Button } from "./Button";

const Coupon = ({ discount, code }) => {
  return (
    <div className="coupon h-[27%] w-[95%] flex flex-col items-center justify-center mix-blend-color-multiply ">
      <div className="text-center">
        <p className="text-3xl font-medium font-roboto py-4 ">{discount}</p>
      </div>
      <div className="flex w-full justify-between px-12 items-center">
        <p className="w-20 text-xl font-medium">{code}</p>
        <Button className="text-white text-lg py-1 px-6 rounded-full">
          ISSUE
        </Button>
      </div>
    </div>
  );
};

export default Coupon;
