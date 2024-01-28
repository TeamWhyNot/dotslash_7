import React, { useContext } from "react";
import NavbarMo from "../components/NavbarMo";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CardCategory from "../components/CardCategory";
import ShopCard from "../components/ShopCard";
import BagCard from "../components/BagCard";
import authContext from "../context/authContext";
import { Button } from "../components/Button";
const UserBags = () => {
  const orderDetails = [
    // {
    //   orderToken: "#ADADX",
    //   orderItemName: "Kurta",
    //   orderCategory: "Clothes",
    //   orderPrice: 500,
    //   onGoing: false,
    //   orderDate: "24/01/2024, 08:00pm",
    // },
    // {
    //   orderToken: "#ADADX",
    //   orderItemName: "Kurta2",
    //   orderCategory: "Ethnic",
    //   orderPrice: 5000,
    //   onGoing: false,
    //   orderDate: "20/01/2024, 04:00pm",
    // },
    // {
    //   orderToken: "#ADADX",
    //   orderItemName: "Kurta3",
    //   orderCategory: "Marriage",
    //   orderPrice: 500,
    //   onGoing: true,
    //   orderDate: "29/01/2024, 02:00pm",
    // },
  ];

  const { bag, setBag } = useContext(authContext);
  console.log(bag);

  return (
    <div className="">
      <div>
        <NavbarMo />
      </div>
      <div className="  ">
        <div>
          <Header />
        </div>
        <div className="p-4 h-[680px] overflow-y-auto  ">
          <div className="  ">
            <div>
              <h1 className="text-[28px]">Your Bag</h1>
            </div>
            <div className="mt-4 ">
              {bag.map((order, index) => (
                <BagCard
                  key={index}
                  imgurl={order.imgurl}
                  orderToken={order.orderToken}
                  orderItemName={order.orderItemName}
                  orderCategory={order.orderCategory}
                  orderPrice={order.orderPrice}
                  onGoing={order.onGoing}
                  orderDate={order.orderDate}
                />
              ))}
            </div>
            {/* <Button
              className={
                "absolute bottom-[80px] right-[20px] px-2.5 py-4 text-black font-medium text-xl"
              }
            //   onClick={onClick}
            >
              Checkout &#8594;
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBags;
