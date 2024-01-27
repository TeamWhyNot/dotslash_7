import React, { useContext, useState } from 'react'
import shopdet from "../assets/shopdet.svg"
import shopLogo from "../assets/logoDark.svg"
import { Button } from '../components/Button'
import arrow from "../assets/arrow.svg"
import authContext from '../context/authContext'
import shopContext from '../context/shop/shopContext'
import { useNavigate } from 'react-router-dom'

const InfoTwo = () => {
    const navigate=useNavigate()
    const {shopDetailMain,setShopDetailMain,addShop}=useContext(shopContext)
    const [bankDetail, setBankDetail] = useState({
        licenceNum:0,
        gstNum:0,
        nameOnAccount:"",
        accountNum:0,
        ifscCode:0
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setBankDetail((prev)=>{
            return({
                ...prev,
                [name]:value
            })
        })
        setShopDetailMain((prev)=>{
            return({
                ...prev,
                ...bankDetail
            })
        })
    }
    const handleNext=async(e)=>{
        e.preventDefault();
        await addShop()
        console.log(shopDetailMain)
        navigate('/myshop')

    }
    return (
        <div className='h-[100vh] w-[100vw] flex items-center justify-start overflow-hidden'>
            <div className='h-[100vh] w-[60%]'>
                <img className='bg-darkOrange' src={shopdet} ></img>
            </div>
            <div className='h-[100vh] w-[100%] flex-col space-y-2 ml-10 items-start justify-start '>
                <div className='h-fit gap-2 flex items-center justify-start  py-2.5'>
                    <div>
                        <img src={shopLogo} ></img>
                    </div>
                    <div>
                        <h1 className='font-semibold text-2xl'>ShopRush</h1>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-2xl py-2'>Your'e almost there!</h1>

                </div>
                <div>
                    <h1 className='font-semibold text-xl text-dark-main'>More Details</h1>
                </div>
                <div className='  flex items-start  w-[100%] h-[100%] '>
                    <div className='bg-[#FAFAFA] p-4 rounded-md w-[80%] space-y-4 h-auto'>
                        <div className='flex  w-[100%] justify-center items-center'>
                            <div className='space-y-2 w-[100%] '>
                                <div>
                                    <h1>Shop Licence No.*</h1>
                                </div>
                                <div className='w-[100%]'>
                                    <input onChange={handleChange} name="licenceNum" className='w-[100%] border-solid border-[1px] rounded-md p-2' type='text' placeholder='Your Shop Licence number'></input>
                                </div>
                            </div>
                        </div>

                        <div className='flex  w-[100%] justify-center items-center'>
                            <div className='space-y-2 w-[100%] '>
                                <div>
                                    <h1>GST No.*</h1>
                                </div>
                                <div className='w-[100%]'>
                                    <input onChange={handleChange} name='gstNum' className='w-[100%] border-solid border-[1px] rounded-md p-2' type='text' placeholder='Enter GST number'></input>
                                </div>
                            </div>
                        </div>
                        <div className='flex  w-[100%] justify-center items-center'>
                            <div className='space-y-2 w-[100%] '>
                                <div>
                                    <h1>Name on Account*</h1>
                                </div>
                                <div className='w-[100%]'>
                                    <input onChange={handleChange} name='nameOnAccount' className='w-[100%] border-solid border-[1px] rounded-md p-2' type='text' placeholder='Name on your Bank Account'></input>
                                </div>
                            </div>
                        </div>
                        <div className='flex  w-[100%] justify-center items-center'>
                            <div className='space-y-2 w-[100%] '>
                                <div>
                                    <h1>Account No.*</h1>
                                </div>
                                <div className='w-[100%]'>
                                    <input onChange={handleChange} name='accountNum' className='w-[100%] border-solid border-[1px] rounded-md p-2' type='text' placeholder='Bank Account Number'></input>
                                </div>
                            </div>
                        </div>
                        <div className='flex  w-[100%] justify-center items-center'>
                            <div className='space-y-2 w-[100%] '>
                                <div>
                                    <h1>IFSC Code*</h1>
                                </div>
                                <div className='w-[100%]'>
                                    <input onChange={handleChange} name='ifscCode' className='w-[100%] border-solid border-[1px] rounded-md p-2' type='text' placeholder='IFSC Code of your bank'></input>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center w-[100%]  justify-center gap-2 mt-10  space-y-2'>
                            <div className='flex justify-start w-[100%] gap-2 p-2 items-center'>
                                <div>
                                    <input type='checkbox' />
                                </div>
                                <div className='w-full'>
                                    <h1>Acept terms and conditions.</h1>
                                </div>
                                <div className=' ml-10 justify-center flex items-center w-[100%]'>
                                    <Button onClick={handleNext} className='gap-4 p-2 w-[200px] rounded-full'>
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
    )
}

export default InfoTwo