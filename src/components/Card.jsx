import React from "react";

const Card = ({ className, children, img, amount, title }) => {
  return (
    <div
      className={`bg-vlOrange w-full border-2 border-darkOrange rounded-2xl shadow-md ${className}`}
    >
      {/* {children} */}
      <div className="w-[100%] h-[100%] flex items-center gap-4">
        <div className="bg-darkOrange rounded-full w-10 h-10 flex items-center justify-center">
          <img src={img}></img>
        </div>
        <div>
          <p className="text-lg font-semibold font-inter text-[#222]">
            {amount} 
          </p>
          <p className="text-sm font-medium font-inter">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
