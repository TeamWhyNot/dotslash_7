import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Art from "../assets/Growth.svg";
import { Button } from "../components/Button";
import authContext from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/shopkeeper");
    } else {
      console.log("Do login");
    }
  }, []);

  const { userDetail, setUserDetail, login } = useContext(authContext);
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setUserDetail((prev) => {
      return {
        ...prev,
        ...formData,
      };
    });
  };

  const handleLogin = async () => {
    await login();
    navigate("/shopkeeper");
  };

  return (
    <div>
      <div className="desk">
        <div className="desktop deskLogin h-[100vh]">
          <Navbar />
          <div className="flex justify-center items-center  gap-16 m-auto p-auto">
            <div className="container grid  ">
              <div className="  flex justify-end h-full">
                <div className="logincard flex-col bg-white rounded-[1.25rem] w-[33rem] mt-[10%] gap-y-8 h-[30rem] flex items-center  p-4">
                  <h1 className=" font-bold text-[1.5rem] mt-16">
                    Login to Your Account
                  </h1>
                  <div className="flex flex-col gap-8 justify-center items-center  w-[80%]">
                    <input
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className="w-[100%] h-[3rem] p-[0.2rem] border-[3px] border-solid rounded-[0.5rem] border-darkOrange"
                      type="text"
                      placeholder="Mobile Number"
                      required
                    />
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-[100%] h-[3rem] p-[0.2rem] border-[3px] border-solid rounded-[0.5rem] border-darkOrange"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <Button onClick={handleLogin} className="w-[80%] h-[3.5rem]">
                    Continue
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img src={Art} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mob">
        <div className="mobile mobSignup h-[100vh]">
          <div className="flex w-full">
            <div className="flex flex-col h-auto w-full ">
              <div className="flex flex-col mt-[25%] p-5">
                <h1 className=" font-bold text-[3rem] leading-normal">
                  Login{" "}
                </h1>
                <h1 className="font-bold text-[3rem] leading-normal">
                  to Account
                </h1>
                <p>Good to see you back !!🖤</p>
              </div>
              <div className="flex flex-col gap-[9rem]  items-center mt-[25%] justify-center  w-[100%]">
                <div className="w-[85%] flex flex-col gap-10">
                  <input
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="w-[100%] h-[4rem] p-[1.2rem] border-[3px] border-solid rounded-[30rem] border-darkOrange"
                    type="text"
                    placeholder="Mobile Number"
                    required
                  />
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-[100%] h-[4rem] p-[1.2rem] border-[3px] border-solid rounded-[30rem] border-darkOrange"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <Button onClick={handleLogin} className="w-[80%] h-[3.5rem]">
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
