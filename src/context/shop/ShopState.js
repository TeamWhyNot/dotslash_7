import React, { useState } from 'react'
import shopContext from './shopContext'


const ShopState = (props) => {

    const [shopDetailMain, setShopDetailMain] = useState({});
    const addShop = async () => {
        const response = await fetch("http://localhost:5000/api/shop/addshop", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("authToken")
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

    return (
        <shopContext.Provider value={{ shopDetailMain, setShopDetailMain, addShop }}>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopState