import React from "react";
import sample from "../assets/sample1.png";
import { Button } from "./Button";
const Details = () => {
  return (
    <div className="h-[85%]  border-2 z-[999] border-darkOrange rounded-3xl  overflow-hidden">
      <div className="detailcard  h-full  w-[32rem] py-2 bg-white ">
        <div className="image p-2 h-[45%] ">
          <img className="w-full px-4 " src={sample} alt="" srcset="" />
        </div>
        <div className="h-[100%] w-[100%] flex flex-col gap-4">
          <div className="h-[10%]  flex justify-between px-8 items-center font-dark-main font-roboto">
            <div className="flex flex-col">
              <div className=" text-3xl font-semibold ">Shop name</div>
              <div className="text-lg font-extralight text-gray">Shop type</div>
            </div>
            <Button className={"px-4 py-2 rounded-lg font-semibold "}>
              + Edit details
            </Button>
          </div>
          <div className="h-[50%]  px-8 flex flex-col gap-8">
            <div className="h-[20%]">
              <p className="text-xl font-extralight text-dark-main ">Address:</p>
              <div className="text-sm ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. 
              </div>
            </div>
            <div className="h-[50%] ">
              <p className="text-xl font-extralight text-dark-main">Description:</p>
              <div className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius dignissimos, laboriosam repudiandae molestiae consectetur quidem illo repellat! Excepturi quasi laboriosam sapiente pariatur molestias illum beatae, quibusdam quod, placeat, recusandae numquam!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;