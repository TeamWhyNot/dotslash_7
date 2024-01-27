import React, { useState } from "react";
import authContext from "./authContext";

const AuthState = (props) => {
  const [Uid, setUid] = useState("");
  const [userDetail, setUserDetail] = useState({});
  const [productData, setProductData] = useState([
    //TODO: DELETE THIS LATER
    {
      imgurl: require("../assets/sample1.png"),
      productName: "Product 1",
      productPrice: 800,
      productType: "Medicine",
      productDescription: "desc123131",
      productInStock: false,
      productQuantity: 491,
    },
    {
      imgurl: require("../assets/sample1.png"),
      productName: "Product 2",
      productPrice: 900,
      productType: "Clothing",
      productDescription: "Deescpoaojpfaf",
      productInStock: true,
      productQuantity: 491,
    },
  ]);

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

  const verify = () => {

  }
  return (
    <authContext.Provider
      value={{
        userDetail,
        Uid,
        setUserDetail,
        login,
        createUser,
        setUid,
        productData,
        setProductData,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
