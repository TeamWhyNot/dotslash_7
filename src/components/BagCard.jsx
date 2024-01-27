import React, { useContext, useEffect, useState } from "react";
import kurta from "../assets/mobile/kurtagirl.svg";
import { Button } from "./Button";
import authContext from "../context/authContext";
import { useNavigate } from "react-router-dom";
import deleteicon from "../assets/deleteicon.svg";

const BagCard = ({
  orderToken,
  orderItemName,
  orderCategory,
  orderPrice,
  onGoing,
  orderDate,
  // onClick
}) => {
  const { orders, setOrders } = useContext(authContext);
  const { bag, setBag } = useContext(authContext);
  const [selected, setSelected] = useState(false);
  // console.log(bag);
  const navigate = useNavigate();

  const handlePickup = () => {
    const checkedOutProduct = {
      orderToken: orderToken,
      orderItemName: orderItemName,
      orderCategory: orderCategory,
      orderPrice: orderPrice,
      onGoing: onGoing,
      orderDate: orderDate,
    };
    console.log(checkedOutProduct);
    setSelected(!selected);

    // if (!selected) {
    //   // If selected is false, remove checkedOutProduct from orders
    //   setOrders((prevOrders) =>
    //     prevOrders.filter(
    //       (order) => order.orderToken !== checkedOutProduct.orderToken
    //     )
    //   );
    // } else {
    //   // If selected is true, add checkedOutProduct to orders
    //   setOrders((prevOrders) => [...prevOrders, checkedOutProduct]);
    // }

    // useEffect(() => {
    //   console.log(orders);
    // }, [orders]);

    setOrders((prevOrders) => [...prevOrders, checkedOutProduct]);
    // navigate("/userorder");
    // console.log(orders);
    // console.log(orders);

    // console.log(bag);
  };

  const handleDeleteBag = () => {
    setBag((prevBag) =>
      prevBag.filter((order) => order.orderToken !== orderToken)
    );

    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.orderToken !== orderToken)
    );
  };

  // const handleCancelPickup = () => {
  //   setOrders((prevOrders) =>
  //     prevOrders.filter((order) => order.orderToken !== orderToken)
  //   );
  // };

  const handleCheckout = () => {
    navigate("/userorder");
  };

  return (
    <div
      className={`border-t-[0.001rem] p-2 w-[100%] ${
        selected ? "bg-green-300" : ""
      }`}
    >
      <div className=" gap-2 flex items-center ">
        <div>
          <img src={kurta} className="rounded-lg"></img>
        </div>
        <div className="flex-col space-y-2 w-[70%]">
          <div className="flex justify-between">
            <h1 className="text-xl">{orderItemName}</h1>
            <p>{orderToken}</p>
          </div>
          <div className="">
            <h1 className="text-sm">{orderCategory}</h1>
          </div>
          <div>
            <h1 className=" text-darkOrange">Rs {orderPrice}</h1>
          </div>
          <div className="flex items-center justify-between">
            <select className=" w-[60%] h-[40%]  bg-transparent rounded text-sm">
              <option value="" disabled selected hidden>
                Choose time slot
              </option>
              <option value="02:00pm" className="bg-white text-darkOrange">
                29 Jan, 02:00pm
              </option>
              <option value="04:00pm" className="bg-white text-darkOrange">
                29 Jan, 04:00pm
              </option>
              <option value="06:00pm" className="bg-white text-darkOrange">
                29 Jan, 06:00pm
              </option>
              <option value="08:00pm" className="bg-white text-darkOrange">
                29 Jan, 08:00pm
              </option>
            </select>
            <div className="flex gap-x-2">
              <Button
                className=" px-2 py-1.5 w-fit  rounded-full text-white text-xs  "
                onClick={handlePickup}
              >
                Add +
              </Button>
              <img src={deleteicon} onClick={handleDeleteBag}></img>
            </div>
          </div>
        </div>
      </div>
      <Button
        className={
          "absolute bottom-[80px] right-[20px] px-2.5 py-4 text-black font-medium text-xl"
        }
        onClick={handleCheckout}
        //   onClick={onClick}
      >
        Collect at Store &#8594;
      </Button>
    </div>
  );
};

export default BagCard;
