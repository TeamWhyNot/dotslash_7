import React, { useContext, useEffect, useState } from "react";
import NavbarLogOut from "../components/NavbarLogOut";
import ProductCard from "../components/ProductCard";
import Details from "../components/Details";
import { Button } from "../components/Button";
import Modal from "../components/Modal";
import authContext from "../context/authContext";
import shopContext from "../context/shop/shopContext";

const MyShop = ({ onClick }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { getShop, shop, getProduct, productData } = useContext(shopContext)
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // const shopit= async()=>{
  //   await getShop()
  // }
  useEffect(() => {

    getShop()
    getProduct()

  }, [])
  console.log(productData)



  //REMOVE THIS LATER TODO:
  // const [productData, setProductData] = useState([
  //   {
  //     imgurl: require("../assets/sample1.png"),
  //     productName: "Product 1",
  //     productPrice: 800,
  //   },
  //   {
  //     imgurl: require("../assets/sample1.png"),
  //     productName: "Product 2",
  //     productPrice: 900,
  //   },
  //   {
  //     imgurl: require("../assets/sample1.png"),
  //     productName: "Product 3",
  //     productPrice: 1000,
  //   },
  //   {
  //     imgurl: require("../assets/sample1.png"),
  //     productName: "Product 1",
  //     productPrice: 800,
  //   },
  //   {
  //     imgurl: require("../assets/sample1.png"),
  //     productName: "Product 2",
  //     productPrice: 900,
  //   },
  //   {
  //     imgurl: require("../assets/sample1.png"),
  //     productName: "Product 3",
  //     productPrice: 1000,
  //   },
  //   {
  //     imgurl: require("../assets/sample1.png"),
  //     productName: "Product 1",
  //     productPrice: 800,
  //   },
  //   {
  //     imgurl: require("../assets/sample1.png"),
  //     productName: "Product 2",
  //     productPrice: 900,
  //   },
  // ]);


  // const handleAddProduct = (addedProduct) => {
  //   setProductData((prevProductData) => [...prevProductData, addedProduct]);
  //   // console.log(productData);
  // };

  return (
    <div className="desktop h-[100vh]">
      <NavbarLogOut />
      <div className="mainShopDet grid grid-cols-2  gap-3">
        <div className="detailCard flex justify-center items-center h-[90vh] w-[90%] border-r-2 border-black ">
          <Details
            shopname={shop.shopName}
            shoptype={shop.category}
            location={shop.location}
            description={shop.description}
          />
        </div>
        <div className="h-[80vh] w-[90%] flex items-center justify-center flex-col gap-y-6 mt-10">
          <ProductCard

            onClick={() => {
              console.log("editing product, not implemented yet");
            }}
          />
          <div className="w-full ">
            <Modal
              name="+ Add Product"
              onOpen={openModal}
              onClose={closeModal}
            // onAddProduct={handleAddProduct}
            ></Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyShop;
