import React, { useContext,useEffect } from "react";
import ProductEditCard from "./ProductEditCard";
import authContext from "../context/authContext";
import shopContext from "../context/shop/shopContext";

const ProductCard = ({ onClick }) => {
  const handleOnClick = () => {
    console.log("hello");
  };

  const {productData}=useContext(shopContext)
  

  return (
    <div className="h-[85%]   flex  w-full flex-wrap gap-y-2 gap-x-4 overflow-y-auto scrollbar-hidden">
      {productData.map((product, index) => (
        <ProductEditCard
          key={index}
          imgurl={product.imgurl}
          productName={product.productName}
          productPrice={product.productPrice}
          productType={product.productType}
          productDescription={product.productDescription}
          productInStock={product.productInStock}
          productQuantity={product.productQuantity}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default ProductCard;
