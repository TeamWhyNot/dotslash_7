import React, { useState, useEffect } from "react";
import authContext from "./authContext";

const AuthState = (props) => {
  useEffect(() => {}, [localStorage.getItem("authToken")]);

  const [Uid, setUid] = useState("");
  const [userDetail, setUserDetail] = useState({});

  const [bag, setBag] = useState([
    // {
    //   orderToken: "#ADADX1",
    //   orderItemName: "Kurta",
    //   orderCategory: "Clothes",
    //   orderPrice: 500,
    //   onGoing: false,
    //   orderDate: "24/01/2024, 08:00pm",
    // },
    // {
    //   orderToken: "#ADADX2",
    //   orderItemName: "Kurta2",
    //   orderCategory: "Ethnic",
    //   orderPrice: 5000,
    //   onGoing: false,
    //   orderDate: "20/01/2024, 04:00pm",
    // },
    // {
    //   orderToken: "#ADADX3",
    //   orderItemName: "Kurta3",
    //   orderCategory: "Marriage",
    //   orderPrice: 500,
    //   onGoing: true,
    //   orderDate: "30/01/2024, 02:00pm",
    // },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const [orders, setOrders] = useState([]);

  const createUser = async () => {
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        name: userDetail.name,
        password: userDetail.password,
        phone: userDetail.mobileNumber,
        category: userDetail.category,
      }), // body data type must match "Content-Type" header
    });
    const data = await response.json();
    console.log(data);
    localStorage.setItem("authToken", data.token);
    // parses JSON response into native JavaScript objects
  };
  const login = async () => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        phone: userDetail.mobileNumber,
      }), // body data type must match "Content-Type" header
    });
    const data = await response.json();
    console.log(data);
    localStorage.setItem("authToken", data.token);
  };

  const verify = () => {};
  return (
    <authContext.Provider
      value={{
        userDetail,
        Uid,
        setUserDetail,
        login,
        createUser,
        setUid,

        bag,
        setBag,
        orders,
        setOrders,

        selectedProducts,
        setSelectedProducts,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
