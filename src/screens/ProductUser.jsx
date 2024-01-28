import React, { useContext } from "react";
import kurta from "../assets/mobile/kurtagirl.svg";
import Button from "../components/Button";
import { NewButton } from "../components/NewButton";
import GenCard from "../components/GenCard";
import NavbarMo from "../components/NavbarMo";
import shopContext from "../context/shop/shopContext";
import { useNavigate } from "react-router-dom";
import authContext from "../context/authContext";

const ProductUser = ({ location }) => {
  const navigate = useNavigate();
  const { selectedProducts, setSelectedProducts } = useContext(authContext);
  console.log(selectedProducts);

  const { productData, setProductData } = useContext(shopContext);
  const { bag, setBag } = useContext(authContext);
  //   console.log(productData);

  const generateOrderToken = () => {
    // Generate a random alphanumeric string
    const randomString = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();
    // Static string combined with random string
    const token = `#ADAX${randomString}`;
    console.log(token);
    return token;
  };

  const handleAddToBag = () => {
    const productToAdd = {
      orderToken: generateOrderToken(),
      orderItemName: selectedProducts[0].productName,
      orderPrice: selectedProducts[0].productPrice,
      orderCategory: selectedProducts[0].productType,
      imgurl: selectedProducts[0].imgurl,
      onGoing: true,
      orderDate: "30th Jan, 09:00pm",
      //   productInStock: product[0].productInStock,
      //   productQuantity: product[0].productQuantity,
    };
    console.log(productToAdd);
    setBag((prevBagData) => [...prevBagData, productToAdd]);
    navigate("/userbag");
  };

  const products = [
    {
      imgurl: require("../assets/kurtablack.jpg"),
      id: 0,
      productName: "Black solid color Kurta",
      productPrice: 999,
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
    <div className="mob fadeSide h-[100vh]">
      <div className="img">
        <img height="439" width="390" src={selectedProducts[0].imgurl} alt="" />
      </div>
      <div className="mainContainer flex flex-col gap-4 p-4 pb-[5rem]">
        <div className="flex flex-col gap-[0.3rem]">
          <h1 className="title text-[1.5rem] font-[800]">
            {selectedProducts[0].productName}
          </h1>
          <h1 className="rupees text-[1.5rem] font-[700]">
            ₹ {selectedProducts[0].productPrice}
          </h1>
          <h1 className="des  text-[1rem] font-[500]">
            {selectedProducts[0].productDescription}
          </h1>
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <h1 className=" font-[800] text-[1.2rem]">Specifications</h1>
          <h1>Material</h1>
          <div className="flex gap-2">
            <div className=" flex justify-center items-center w-[6rem] bg-[#FFDFB0] rounded-[10%] h-[2rem] ">
              Cotton 95%
            </div>
            <div className=" flex justify-center items-center w-[6rem] bg-[#FFDFB0] rounded-[10%] h-[2rem]">
              Nylon 5%
            </div>
          </div>
          <h1>Size</h1>
          <div className="flex gap-2">
            <div className=" flex justify-center items-center bg-[#FFDFB0] rounded-[10%] h-[1.5rem] w-[2.5rem]">
              S
            </div>
            <div className="flex justify-center items-center bg-[#FFDFB0] rounded-[10%] h-[1.5rem] w-[2.5rem]">
              M
            </div>
            <div className="flex justify-center items-center bg-[#FFDFB0] rounded-[10%] h-[1.5rem] w-[2.5rem]">
              XL
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <h1 className=" font-[800] text-[1.2rem]">You might also like..</h1>
          <div className="grid grid-cols-2 gap-2">
            {/* //TODO: not yet implemented properly */}
            {products.map((product, index) => (
              <GenCard
                key={product.id}
                productName={product.productName}
                productPrice={product.productPrice}
                imgurl={product.imgurl}
                onClick={() => handleAddToBag()}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" z-20  bg-slate-400 ">
        <div className="buttons p-4 bg-white fixed bottom-0 w-full flex items-center justify-center  gap-3">
          <NewButton
            className=" bg-darkOrange rounded h-[2.5rem] w-[100%] "
            onClick={handleAddToBag}
          >
            Add to bag
          </NewButton>
        </div>
      </div>
    </div>
  );
};

export default ProductUser;
