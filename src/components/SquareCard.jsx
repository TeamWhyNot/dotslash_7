import React from "react";

const SquareCard = ({ className, children }) => {
  return (
    <div
      className={`bg-vlOrange  w-[35%] border-2 border-darkOrange rounded-2xl shadow-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default SquareCard;
