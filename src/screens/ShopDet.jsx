import React, { useContext, useState } from "react";
import shopdet from "../assets/shopdet.svg";
import shopLogo from "../assets/logoDark.svg";
import { Button } from "../components/Button";
import arrow from "../assets/arrow.svg";
import authContext from "../context/authContext";
import { useNavigate } from "react-router-dom";
import shopContext from "../context/shop/shopContext";

const ShopDet = () => {
  const navigate = useNavigate();
  const { shopDetailMain, setShopDetailMain } = useContext(shopContext);
  const [shopDetail, setShopDetail] = useState({
    shopName: "",
    category: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShopDetail((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setShopDetailMain((prev) => {
      return {
        ...prev,
        ...shopDetail,
      };
    });
  };

  const handleNext = () => {
    console.log(shopDetailMain);
    navigate("/infotwo");
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-start overflow-hidden">
      <div className="h-[100vh] w-[60%] flex flex-col bg-darkOrange  ">
        <img className="" src={shopdet}></img>
       
      </div>
      <div className="h-[100vh] w-[100%] flex-col space-y-2 ml-10 items-start justify-start ">
        <div className="h-fit gap-2 flex items-center justify-start  py-2.5">
          <div>
            <img src={shopLogo}></img>
          </div>
          <div>
            <h1 className="font-semibold text-2xl">ShopRush</h1>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">WELCOME</h1>
          <h1>Let's setup your Profile!</h1>
        </div>
        <div>
          <h1 className="font-semibold text-2xl">Shop Details</h1>
        </div>
        <div className="  flex items-start justify-start w-[100%] h-[100%] ">
          <div className="bg-[#FAFAFA] p-4 rounded-md  w-[80%] space-y-4 h-[72%]">
            <div className="flex  w-[100%] justify-center items-center">
              <div className="space-y-2 w-[100%] ">
                <div>
                  <h1>Shop Name*</h1>
                </div>
                <div className="w-[100%]">
                  <input
                    onChange={handleChange}
                    className="w-[100%] border-solid border-[1px] rounded-md p-2"
                    type="text"
                    name="shopName"
                    placeholder="Enter Shop Name"
                  ></input>
                </div>
              </div>
            </div>

            <div className="flex  w-[100%] justify-center items-center">
              <div className="space-y-2 w-[100%] ">
                <div>
                  <h1>Category*</h1>
                </div>
                <div className="w-[100%]">
                  <select
                    onChange={handleChange}
                    className="w-[100%] border-solid border-[1px] rounded-md p-2"
                    name="category"
                    type="text"
                    placeholder="Enter Category"
                  >
                    <option value="">None</option>
                    <option value="clothing">Clothing</option>
                    <option value="general store">General store</option>
                    <option value="footware">Footware</option>
                    <option value="medical store">Medical store</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex  w-[100%] justify-center items-center">
              <div className="space-y-2 w-[100%] ">
                <div>
                  <h1>Location*</h1>
                </div>
                <div className="w-[100%]">
                  <textarea
                    onChange={handleChange}
                    className="w-[100%] h-[100px] border-solid border-[1px] rounded-md p-2"
                    name="location"
                    type="text"
                    placeholder="Write full address of your Shop"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex  w-[100%] justify-center items-center">
              <div className="space-y-2 w-[100%] ">
                <div>
                  <h1>Description*</h1>
                </div>
                <div className="w-[100%]">
                  <input
                    onChange={handleChange}
                    className="w-[100%] border-solid border-[1px] rounded-md p-2"
                    type="text"
                    name="description"
                    placeholder="Tell about your shop"
                  ></input>
                </div>
              </div>
            </div>

            <div className="flex items-center w-[100%]  justify-center gap-2 mt-10  space-y-2">
              <div className="flex justify-start w-[100%] gap-2 p-2 items-center">
                <div>
                  <input type="checkbox" />
                </div>
                <div className="w-full">
                  <h1>Acept terms and conditions.</h1>
                </div>
                <div className=" ml-10 justify-center flex items-center w-[100%]">
                  <Button
                    onClick={handleNext}
                    className="gap-4 p-2 w-[200px] rounded-full"
                  >
                    <div>
                      <h1>Next</h1>
                    </div>
                    <div>
                      <img src={arrow}></img>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDet;
