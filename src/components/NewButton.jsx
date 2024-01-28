import React from "react";

export const NewButton = ({ className, onClick, children }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`color-black flex justify-center items-center bg-darkOrange  rounded-[0.7rem] duration-500 ${className}`}
      >
        {children}
      </button>
    </>
  );
};
