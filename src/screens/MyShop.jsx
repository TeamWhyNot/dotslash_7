import React, { useContext, useState } from "react";
import NavbarLogOut from "../components/NavbarLogOut";
import ProductCard from "../components/ProductCard";
import Details from "../components/Details";
import { Button } from "../components/Button";
import Modal from "../components/Modal";
import authContext from "../context/authContext";
import Sidebar from "../components/Sidebar";

const MyShop = ({ onClick }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
  const { productData } = useContext(authContext);

  // const handleAddProduct = (addedProduct) => {
  //   setProductData((prevProductData) => [...prevProductData, addedProduct]);
  //   // console.log(productData);
  // };

  return (
    <div className="desktop h-[100vh]">
       <div className="flex gap-6">
       <Sidebar/>
      <div className="flex justify-center items-center  w-full ">
      <div className="mainShopDet grid grid-cols-2 w-full gap-3">
        <div className="detailCard flex justify-center items-center h-[90vh] w-[90%] border-r-2 border-black ">
          <Details />
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
        </div>
        </div>
  );
};

export default MyShop;
