import React, { useContext } from "react";
import Header from "../components/Header";
import GenCard from "../components/GenCard";
import { useNavigate } from "react-router-dom";
import authContext from "../context/authContext";

const ProductSection = () => {
  const navigate = useNavigate();
  const { selectedProducts, setSelectedProducts } = useContext(authContext);
  const handleAddToBag = (index) => {
    const selectedProduct = products[index];
    console.log(selectedProduct);
    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      selectedProduct,
    ]);

    // const { imgurl, productName, productPrice, id } = selectedProduct;
    // console.log(productName, productPrice, id);

    navigate("/productuser");

    // const productToAdd = {
    //   orderToken: generateOrderToken(),
    //   orderItemName: product[0].productName,
    //   orderPrice: product[0].productPrice,
    //   orderCategory: product[0].productType,
    //   onGoing: true,
    //   orderDate: "30th Jan, 09:00pm",
    //   //   productInStock: product[0].productInStock,
    //   //   productQuantity: product[0].productQuantity,
    // };

    // console.log(productToAdd);

    // setBag((prevBagData) => [...prevBagData, productToAdd]);

    // navigate("/userbag");
  };

  const products = [
    {
      imgurl: require("../assets/kurtablack.jpg"),
      id: 0,
      productName: "Black solid color Kurta",
      productPrice: 1,
      productType: "Clothing",
      productDescription:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.",
      productInStock: true,
      productQuantity: 150,
    },
    {
      imgurl: require("../assets/kurtared.jpg"),
      id: 1,
      productName: "Red solid color Kurta",
      productPrice: 10,
      productType: "Clothing",
      productDescription:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.",
      productInStock: true,
      productQuantity: 150,
    },
    {
      imgurl: require("../assets/kurtagreen.jpg"),
      id: 2,
      productName: "Green solid color Kurta",
      productPrice: 100,
      productType: "Clothing",
      productDescription:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.",
      productInStock: true,
      productQuantity: 150,
    },
    {
      imgurl: require("../assets/kurtayellow.jpg"),
      id: 3,
      productName: "Yellow solid color Kurta",
      productPrice: 1000,
      productType: "Clothing",
      productDescription:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.",
      productInStock: true,
      productQuantity: 150,
    },
  ];

  return (
    <div>
      <div className="flex  flex-col gap-5 "></div>
      <Header />
      <div className="p-4">
        <h1 className="text-[28px]">Products</h1>
      </div>
      <div className="grid grid-cols-2 gap-y-4 justify-center items-center w-full pl-6">
        {products.map((product, index) => (
          <GenCard
            key={product.id}
            productName={product.productName}
            productPrice={product.productPrice}
            imgurl={product.imgurl}
            onClick={() => handleAddToBag(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
