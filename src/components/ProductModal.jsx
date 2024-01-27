import React, { useContext, useState } from "react";
import { Button } from "../components/Button";
import authContext from "../context/authContext";

const ProductModal = ({
  onOpen,
  onClose,
  children,
  onClick,
  name,
  className,
  currentProduct,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [productImage, setProductImage] = useState(null);

  const { productData, setProductData } = useContext(authContext);

  const [formData, setFormData] = useState({
    imgurl: require("../assets/sample1.png"),
    productName: currentProduct.productName,
    productPrice: currentProduct.productPrice,
    productType: currentProduct.productType,
    productDescription: currentProduct.productDescription,
    productInStock: currentProduct.productInStock,
    productQuantity: currentProduct.productQuantity,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "productInStock") {
      const inStock = e.target.checked;
      setFormData((prevData) => ({
        ...prevData,
        [name]: inStock,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const onSubmit = () => {
    console.log(formData);
    setProductData((prevProductData) => [...prevProductData, formData]);
    
    console.log(productData);

    
  };

  const openModal = () => {
    setShowModal(true);
    onOpen && onOpen();
  };

  const closeModal = () => {
    setShowModal(false);
    onClose && onClose();
  };

  const handleOnClick = () => {
    closeModal();
    onClick && onClick();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(require(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleInStock = (e) => {
  //   const { name, checked } = e.target;
  //   console.log(name, checked);
  // };

  return (
    <>
      {children}
      {/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={openModal}
      >
        Fill Details
      </button> */}
      <Button
        className={`flex items-center px-6 py-2 text-lg ${className}`}
        onClick={openModal}
      >
        {name}
      </Button>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[9999] bg-graydark outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={closeModal}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Product Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      // onChange={(e) => {
                      //   setProductName(e.target.value);
                      // }}
                      onChange={handleInputChange}
                      name="productName"
                      value={formData.productName}
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Product Price
                    </label>
                    <input
                      type="number"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      step="0.01"
                      onChange={handleInputChange}
                      name="productPrice"
                      value={formData.productPrice}
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Product Type
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      onChange={handleInputChange}
                      name="productType"
                      value={formData.productType}
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Product Description
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      onChange={handleInputChange}
                      name="productDescription"
                      value={formData.productDescription}
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Product Quantity
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      onChange={handleInputChange}
                      name="productQuantity"
                      type="number"
                      step="1"
                      value={formData.productQuantity}
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      In Stock?
                    </label>
                    <input
                      className=""
                      onChange={handleInputChange}
                      name="productInStock"
                      type="checkbox"
                      value={formData.productInStock}
                      checked={formData.productInStock}
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Product Image
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      name="imgUrl"
                    //   value={formData.imgurl} TODO:
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    // onClick={() => {
                    //   closeModal();
                    //   handleOnClick();
                    // }}
                    onClick={() => {
                      handleOnClick();
                      onSubmit();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ProductModal;
