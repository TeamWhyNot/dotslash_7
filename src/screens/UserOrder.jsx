import React, { useContext, useEffect } from "react";
import NavbarMo from "../components/NavbarMo";
import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import authContext from "../context/authContext";
import CouponState from "../components/CouponState";

const UserOrder = () => {
  //

  const { orders, setOrders,isCoupon,setIsCoupon } = useContext(authContext);
  console.log(orders);
  // useEffect to log orders whenever it changes
  useEffect(() => {
    console.log("Updated Orders:", orders);
  }, [orders]);

  

  return (
    <div className="">
      <div>
        <NavbarMo />
      </div>
      <div className=" fadeSide ">
        <div>
          <Header />
        </div>
        <div className={`p-4 h-[680px] overflow-y-auto ${isCoupon && `hidden`}`}>
          <div className="  ">
            <div>
              <h1 className="text-[28px]">My Orders</h1>
            </div>
            <div className="mt-4 text-lg text-dark-main font-light">
              <div>
                <h1>On-Going Orders</h1>
              </div>
              <div className="mt-2">
                {orders
                  .filter((order) => order.onGoing)
                  .map((order, index) => (
                    <OrderCard key={index} {...order} />
                  ))}
              </div>
            </div>
            <div className="mt-4 text-lg text-dark-main font-light">
              <div>
                <h1>Previous Orders</h1>
              </div>
              <div className="mt-2">
                {orders
                  .filter((order) => !order.onGoing)
                  .map((order, index) => (
                    <OrderCard key={index} {...order} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`${!isCoupon &&`hidden`} absolute bottom-0 mb-[100px] w-[100%] flex items-center justify-center `}>

                    <CouponState/>
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
