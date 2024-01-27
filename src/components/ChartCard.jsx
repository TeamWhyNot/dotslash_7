import React from "react";

const ChartCard = ({ className, children }) => {
  return (
    <div
      className={`bg-vlOrange w-[65%] border-2 border-darkOrange rounded-2xl shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default ChartCard;
