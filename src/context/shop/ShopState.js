import React, { useState } from 'react'
import shopContext from './shopContext'


const ShopState = (props) => {

    const [shopDetailMain, setShopDetailMain] = useState({});
    const [shop, setShop] = useState({})
    const [productData, setProductData] = useState([
        //TODO: DELETE THIS LATER
        {
            imgurl: require("../../assets/sample1.png"),
            productName: "Product 1",
            productPrice: 800,
            productType: "Medicine",
            productDescription: "desc123131",
            productInStock: false,
            productQuantity: 491,
        },
        {
            imgurl: require("../../assets/sample1.png"),
            productName: "Product 2",
            productPrice: 900,
            productType: "Clothing",
            productDescription: "Deescpoaojpfaf",
            productInStock: true,
            productQuantity: 491,
        },
    ]);
    const addShop = async () => {
        const response = await fetch("http://localhost:5000/api/shop/addshop", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("authToken")
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                shopName: shopDetailMain.shopName,
                category: shopDetailMain.category,
                location: shopDetailMain.location,
                description: shopDetailMain.description,
                shopLicNo: shopDetailMain.licenceNum,
                gstNo: shopDetailMain.gstNum,
                nameOnAccount: shopDetailMain.nameOnAccount,
                AccountNo: shopDetailMain.accountNum,
                ifscCode: shopDetailMain.ifscCode,
            }), // body data type must match "Content-Type" header
        });
        const data = await response.json();
        console.log(data)
        localStorage.setItem('shop-token', data.shoptoken)
    }
    const getShop = async () => {
        const response = await fetch("http://localhost:5000/api/shop/getshop", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("authToken"),
                "shop-token": localStorage.getItem("shop-token")
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body data type must match "Content-Type" header
        });
        const data = await response.json();
        setShop(data)

    }
    const getProduct = async () => {
        const response = await fetch("http://localhost:5000/api/product/getproduct", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("authToken"),
                "shop-token": localStorage.getItem("shop-token")
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body data type must match "Content-Type" header
        });
        const data = await response.json();
        setProductData(data)
    }


    return (
        <shopContext.Provider value={{ shopDetailMain, setShopDetailMain, addShop, getShop, shop, setShop, productData, setProductData,getProduct }}>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopState