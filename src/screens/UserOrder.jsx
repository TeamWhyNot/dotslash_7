import React, { useContext, useEffect } from "react";
import NavbarMo from "../components/NavbarMo";
import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import authContext from "../context/authContext";

const UserOrder = () => {
  //

  const { orders, setOrders } = useContext(authContext);
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
      <div className="  ">
        <div>
          <Header />
        </div>
        <div className="p-4 h-[680px] overflow-y-auto  ">
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
      </div>
    </div>
  );
};

export default UserOrder;
