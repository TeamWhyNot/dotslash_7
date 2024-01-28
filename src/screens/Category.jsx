import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import shopArt from '../assets/shopLg.svg'
import customerArt from '../assets/customerLg.svg'


import { Link } from 'react-router-dom'
import authContext from '../context/authContext'
const Category = () => {

  const { userDetail, setUserDetail } = useContext(authContext)

  const shopekeeper = () => {
    setUserDetail({
      category: "shopkeeper"
    })
  }
  const customer = () => {
    setUserDetail({
      category: "customer"
    })
  }
 

  return (
    <div>
      <div className="desk">
      <div className="desktop fade deskCategory h-[100vh]">
        <Navbar />
        <div className='flex flex-col mt-12 items-center gap-24'>
          <h1 className=' font-semibold text-4xl'>Choose a category</h1>
          <div className="cate flex gap-[12rem]">
          <Link to='/signup'><button className=' font-medium text-lg' onClick={shopekeeper}><div className="flex flex-col gap-5 justify-center items-center">
            <img className='shop' src={shopArt} alt="" />
            Shopkeeper
            </div></button></Link>
            <Link to='/switch'><button className=' font-medium text-lg' onClick={customer}><div className="flex flex-col gap-5 justify-center items-center">
            <img className='cust' src={customerArt} alt="" />
            Customer
            </div></button></Link>
            
          </div>
        </div>
      </div>
      </div>

         <div className="mob">
         <div className="mobile mobCategory fadeSide h-[100vh]">
          <div className="flex flex-col h-auto ">
            <div className="flex flex-col mt-[25%] p-5">
            <h1 className=' font-bold text-[3rem] leading-normal'>Select</h1>
            <h1 className='font-bold text-[3rem] leading-normal'>Category</h1>
            </div>
            <div className="categ h-auto mt-11 gap-y-9">
              <Link to="/switch">
              <button className='flex flex-col gap-2 justify-center items-center'>
                <img  className="shop"src={shopArt} height="145" width="145" alt="shopkeeper" />
                <h1 className=' font-medium text-base'>Shopkeeper</h1>
              </button>
              </Link>
              
              <Link to='/signup' className=''><button className=" w-full flex flex-col gap-2 justify-center items-center ">
                <img className="cust" src={customerArt} height="145" width="145" alt="customer" />
                <h1 className=' font-medium text-base'>Customer</h1>
                </button></Link>
            </div>
            
        
            </div>
          
         </div>
         </div>




        
    </div>
  )
}

export default Category