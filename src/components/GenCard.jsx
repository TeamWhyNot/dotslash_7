import React from "react";

const GenCard = ({ productName, productPrice, imgurl, onClick }) => {
  // console.log(imgurl);
  // console.log(typeof imgurl);
  return (
    <div onClick={onClick}>
      <div className="flex flex-col gap-1">
        <img
          height="174"
          width="155"
          className="border-2 border-gainsboro rounded-[10%] shadow-2xl aspect-[3/4]"
          src={imgurl}
          alt=""
        />
        <div className="text-sm font-medium ">{productName}</div>
        <div className="text-xl font-semibold">₹ {productPrice}</div>
      </div>
    </div>
  );
};

export default GenCard;
