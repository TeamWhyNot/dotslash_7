import React, { useState } from "react";
import editicon from "../assets/edit.svg";
import Modal from "./Modal";
import ProductModal from "./ProductModal";

const ProductEditCard = ({
  imgurl,
  productName,
  productPrice,
  productType,
  productDescription,
  productQuantity,
  productInStock,
  onClick,
}) => {
  const onClickHandler = () => {
    console.log(
      // imgurl,
      // productName,
      // productPrice,
      // productType,
      // productDescription,
      // productQuantity,
      // productInStock,
      currentProduct
    );
  };

  const currentProduct = {
    imgurl: imgurl,
    productName: productName,
    productPrice: productPrice,
    productType: productType,
    productDescription: productDescription,
    productQuantity: productQuantity,
    productInStock: productInStock,
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="h-[35%] w-[25%]  border-darkOrange border-2 rounded-lg flex flex-col justify-center">
      <div className="m-2 border-darkOrange border-2 rounded-lg h-[50%]">
        <img src={require('../assets/proImage2.jpeg')} className="h-[100%]" alt="Product" />
      </div>

      <div className="flex flex-col ">
        <p className="px-2 text-dark-main">{productName}</p>
        <p className="px-2 text-sm text-[#777]">{productType}</p>

        <div className="flex justify-between items-center px-2">
          <p className="text-2xl">${productPrice}</p>
          <div className="px-2" onClick={onClickHandler}>
            <ProductModal
              name="Edit"
              className={"h-5 w-5 text-sm"}
              onOpen={openModal}
              onClose={closeModal}
              currentProduct={currentProduct}
            ></ProductModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEditCard;
