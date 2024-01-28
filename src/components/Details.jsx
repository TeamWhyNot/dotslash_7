import React from "react";
import sample from "../assets/sample1.png";
import { Button } from "./Button";
const Details = ({ shopname, shoptype, location, description }) => {
  return (
    <div className="h-[85%] shadow-lg drop-shadow-lg  border-2 z-[999] border-darkOrange rounded-3xl  overflow-hidden">
      <div className="detailcard  h-full  w-[32rem] py-2 bg-white ">
        <div className="image p-2 h-[45%] ">
          <img className="w-full px-4 h-[250px] " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRNTyXnEtPjvXvm9HlxYWm4LUGKGUcsKs0Q&usqp=CAU" alt="" srcset="" />
        </div>
        <div className="h-[100%] w-[100%] flex flex-col gap-4">
          <div className="h-[10%]  flex justify-between px-8 items-center font-dark-main font-roboto">
            <div className="flex flex-col">
              <div className=" text-3xl font-semibold ">{shopname}</div>
              <div className="text-lg font-extralight text-gray">{shoptype}</div>
            </div>
            <Button className={"px-4 py-2 rounded-lg font-semibold "}>
              + Edit details
            </Button>
          </div>
          <div className="h-[50%]  px-8 flex flex-col gap-8">
            <div className="h-[20%]">
              <p className="text-xl font-extralight text-dark-main ">Address:</p>
              <div className="text-sm ">
                {location}
              </div>
            </div>
            <div className="h-[50%] ">
              <p className="text-xl font-extralight text-dark-main">Description:</p>
              <div className="text-sm">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
