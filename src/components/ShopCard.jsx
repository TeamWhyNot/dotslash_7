import React from "react";
import shopImg from "../assets/mobile/shopimg.svg";

const ShopCard = ({ name, type, imgurl, onClick }) => {
  return (
    <div
      className="bg-[#F3F3F3] space-y-2 shadow-md drop-shadow-md p-3 rounded-[25px] w-fit h-fit"
      onClick={onClick}
    >
      <div className="rounded-2xl overflow-hidden">
        <img src={imgurl} className="h-[150px] w-[200px] "></img>
      </div>
      <div className="flex  items-center">
        <div>
          <h1>{name}</h1>
        </div>
        {/* <div className='w-[60%]'>
                    <div className=' justify-end flex w-[100%] '>
                        <h1>view all</h1>
                    </div>
                </div> */}
      </div>
      <div>
        <h1 className="text-sm">{type}</h1>
      </div>
    </div>
  );
};

export default ShopCard;
