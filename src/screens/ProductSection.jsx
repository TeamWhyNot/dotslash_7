import React, { useContext } from "react";
import Header from "../components/Header";
import GenCard from "../components/GenCard";
import { useNavigate } from "react-router-dom";
import authContext from "../context/authContext";

const ProductSection = ({}) => {
  const navigate = useNavigate();
  const { selectedProducts, setSelectedProducts } = useContext(authContext);
  const { selectedShop, setSelectedShop } = useContext(authContext);

  const handleAddToBag = (index) => {
    const selectedProduct = products1[index];
    console.log(selectedProduct);
    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      selectedProduct,
    ]);
    console.log(selectedShop);

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

  const products1 = [
    {
      imgurl: require("../assets/kurtablack.jpg"),
      id: 0,
      shopName: "Kapde Di Dukaan",
      productName: "Black Kurta",
      productPrice: 899,
      productType: "Clothing",
      productDescription:
        "Timelessly chic, the black kurta exudes sophistication and versatility for any occasion.",
      productInStock: true,
      productQuantity: 150,
    },
    {
      imgurl: require("../assets/kurtared.jpg"),
      id: 1,
      shopName: "Kapde Di Dukaan",
      productName: "Red Kurta",
      productPrice: 1199,
      productType: "Clothing",
      productDescription:
        "Vibrant and bold, the red kurta adds a touch of passion and elegance to your ethnic wardrobe.",
      productInStock: true,
      productQuantity: 150,
    },
    {
      imgurl: require("../assets/kurtagreen.jpg"),
      id: 2,
      shopName: "Kapde Di Dukaan",
      productName: "Green Kurta",
      productPrice: 799,
      productType: "Clothing",
      productDescription:
        "Refreshing and lively, the green kurta radiates a natural and youthful charm in ethnic fashion.",
      productInStock: true,
      productQuantity: 150,
    },
    {
      imgurl: require("../assets/kurtayellow.jpg"),
      id: 3,
      shopName: "Kapde Di Dukaan",
      productName: "Yellow Kurta",
      productPrice: 2899,
      productType: "Clothing",
      productDescription:
        "Bright and cheerful, the yellow kurta brings a sunlit warmth, perfect for festive and joyful occasions.",
      productInStock: true,
      productQuantity: 150,
    },
    {
      imgurl: require("../assets/products2/lantern1.jpg"),
      id: 4,
      shopName: "The Lantern Store",
      productName: "Red and Orange Lantern",
      productPrice: 299,
      productType: "Decor",
      productDescription:
        "Elegant lantern with a vibrant fusion, casting a warm and inviting glow for enchanting ambiance.",
      productInStock: true,
      productQuantity: 150,
    },
    {
      imgurl: require("../assets/products2/lantern2.jpg"),
      id: 5,
      shopName: "The Lantern Store",
      productName: "Black and Red Lantern",
      productPrice: 499,
      productType: "Decor",
      productDescription:
        "Chic lantern blending bold colors, offering sophistication and a captivating aura to your decor.",
      productInStock: true,
      productQuantity: 150,
    },
    {
      imgurl: require("../assets/products2/lantern3.jpg"),
      id: 6,
      shopName: "The Lantern Store",
      productName: "Red and Yellow Lantern",
      productPrice: 349,
      productType: "Decor",
      productDescription:
        "Lively lantern featuring a refreshing blend, adding a natural charm and joyous ambiance to any space.",
      productInStock: true,
      productQuantity: 150,
    },
    {
      imgurl: require("../assets/products2/lantern4.jpg"),
      id: 7,
      shopName: "The Lantern Store",
      productName: "White and Gold Lantern",
      productPrice: 899,
      productType: "Decor",
      productDescription:
        "Opulent lantern in white and gold, radiating festive warmth and elegance for celebratory moments.",
      productInStock: true,
      productQuantity: 150,
    },
  ];

  // const products2 = [

  // ];
  const filteredProducts = products1.filter(
    (product) => product.shopName === selectedShop
  );
  return (
    <div>
      <div className=" fadeSide flex fade flex-col gap-5 "></div>
      <Header />
      <div className="p-4">
        <h1 className="text-[28px]">Products</h1>
      </div>
      <div className="grid grid-cols-2 gap-y-4 justify-center items-center w-full pl-6">
        {filteredProducts.map((product, index) => (
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
