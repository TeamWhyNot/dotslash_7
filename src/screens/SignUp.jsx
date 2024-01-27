import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../components/Button';
import Navbar from '../components/Navbar';
import Art from '../assets/Growth.svg';
import authContext from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate=useNavigate()
  useEffect(() => {
    
    if(localStorage.getItem('authToken')){
      navigate('/shopkeeper')
    }else{
      console.log("do signup")
    }
  
    
  }, [])
  
  const { userDetail, setUserDetail, login,createUser } = useContext(authContext);
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setUserDetail((prev)=>{
      return({
        ...prev,
        ...formData
      })
    })

  };

  const handleSignUp = async () => {
    await createUser();
    navigate('/shopkeeper')
  };

  return (
    <div>
      <div className="desk">
      <div className="desktop deskLogin h-[100vh]">
        <Navbar />
        <div className="flex justify-center items-center  gap-16 m-auto p-auto">
          <div className="container grid  ">
            <div className="  flex justify-end h-full">
              <div className="logincard flex-col bg-white rounded-[1.25rem] w-[33rem] mt-[10%] gap-[3rem] h-[34rem] flex items-center  p-4">
                <h1 className="font-bold text-[1.5rem]">Create Account</h1>
                <div className="flex flex-col gap-7 justify-center items-center  w-[80%]">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-[100%] h-[3rem] p-[0.2rem] border-[3px] border-solid rounded-[0.5rem] border-darkOrange"
                    type="text"
                    placeholder="Name"
                    required
                  />
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
                  <input
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-[100%] h-[3rem] p-[0.2rem] border-[3px] border-solid rounded-[0.5rem] border-darkOrange"
                    type="password"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <Button onClick={handleSignUp} className="w-[80%] h-[2.5rem]">
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
            <h1 className=' font-bold text-[3rem] leading-normal'>Create</h1>
            <h1 className='font-bold text-[3rem] leading-normal'>Account</h1>
            </div>
            <div className="flex flex-col gap-7  items-center mt-[16%] justify-center  w-[100%]">
                  <div className="w-[85%] flex flex-col gap-5">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-[100%] h-[4rem] p-[1.2rem] border-[3px] border-solid rounded-[30rem] border-darkOrange"
                    type="text"
                    placeholder="Name"
                    required
                  />
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
                  <input
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-[100%] h-[4rem] p-[1.2rem] border-[3px] border-solid rounded-[25rem] border-darkOrange"
                    type="password"
                    placeholder="Confirm Password"
                    required
                  />
                  </div>
                  <Button onClick={handleSignUp} className="w-[80%] h-[3.5rem]">
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

export default SignUp;
