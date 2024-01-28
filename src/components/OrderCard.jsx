import React, { useContext } from "react";
import kurta from "../assets/mobile/kurtagirl.svg";
import { Button } from "./Button";
import authContext from "../context/authContext";

const OrderCard = ({
  onGoing,
  orderToken,
  orderItemName,
  orderPrice,
  orderCategory,
  orderDate,
  imgurl,
}) => {
  const { orders, setOrders,setIsCoupon } = useContext(authContext);

  const handleCancelPickup = () => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.orderToken !== orderToken)
    );
  };
  

  return (
    <div className={`border-t-[0.001rem] p-2 w-[100%] `}>
      <div className={`gap-2 flex items-center `}>
        <div>
          <img
            src={imgurl}
            className="rounded-lg h-[180px] w-[150px]"
          ></img>
        </div>
        <div className="flex-col space-y-2 w-[70%]">
          <div className="flex justify-between w-full">
            <h1 className="text-xl">{orderItemName}</h1>
            <p className="text-sm font-light text-dark-main">
              {" "}
              Token ID: {orderToken}
            </p>
          </div>
          <div className="flex justify-between gap-x-8">
            <h1 className="text-sm">{orderCategory}</h1>
            <div>
              <span className="text-sm font-medium text-dark-main">Date: </span>
              <span className="text-xs font-light text-dark-main">
                {orderDate}
              </span>
            </div>
          </div>
          <div className="text-2xl">
            <h1 className=" text-darkOrange">Rs {orderPrice}</h1>
          </div>

          <div className="flex items-center justify-between">
            {onGoing ? (
              <Button
                className="px-2 py-1.5 rounded-full text-xs w-full bg-white text-darkOrange border border-darkOrange"
                onClick={handleCancelPickup}
              >
                Cancel Pickup
              </Button>
            ) : (
              <Button onClick={()=>{
                setIsCoupon(true)
              }} className="px-2 py-1.5 rounded-full text-xs w-full bg-darkOrange text-white">
                Get Coupons
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
