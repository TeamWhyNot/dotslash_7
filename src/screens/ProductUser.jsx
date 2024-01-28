import React from 'react'
import kurta from "../assets/mobile/kurtagirl.svg"
import Button from "../components/Button"
import { NewButton } from '../components/NewButton'
import GenCard from '../components/GenCard'
import NavbarMo from '../components/NavbarMo'

const ProductUser = () => {
  return (
    <div className='mob h-[100vh]'>
        <div className="img">
            <img height='439' width='390' src={kurta} alt="" />
        </div>
        <div className="mainContainer flex flex-col gap-4 p-4 pb-[5rem]">
            <div className="flex flex-col gap-[0.3rem]">
            <h1 className='title text-[1.5rem] font-[800]'>Black solid color Kurta</h1>
            <h1 className='rupees text-[1.5rem] font-[700]'>₹ 1700</h1>
            <h1 className='des  text-[1rem] font-[500]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.</h1>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
                <h1 className=' font-[800] text-[1.2rem]'>Specifications</h1>
                <h1>Material</h1>
                <div className="flex gap-2">
                    <div className=' flex justify-center items-center w-[6rem] bg-[#FFDFB0] rounded-[10%] h-[2rem]'>Cotton 95%</div>
                    <div className=' flex justify-center items-center w-[6rem] bg-[#FFDFB0] rounded-[10%] h-[2rem]'>Nylon 5%</div>
                </div>
                <h1>Size</h1>
                <div className="flex gap-2">
                    <div className=' flex justify-center items-center bg-[#FFDFB0] rounded-[10%] h-[1.5rem] w-[2.5rem]'>S</div>
                    <div className='flex justify-center items-center bg-[#FFDFB0] rounded-[10%] h-[1.5rem] w-[2.5rem]'>M</div>
                    <div className='flex justify-center items-center bg-[#FFDFB0] rounded-[10%] h-[1.5rem] w-[2.5rem]'>XL</div>
                </div>
                
            </div>
            <div className="flex flex-col gap-[0.5rem]">
                <h1 className=' font-[800] text-[1.2rem]'>You might also like..</h1>
                <div className="grid grid-cols-2 gap-2">
                    <GenCard/>
                    <GenCard/>
                    <GenCard/>
                    <GenCard/>
                </div>
            </div>
        </div>
        <div className=" z-20  bg-slate-400 ">
            <div className="buttons p-4 bg-white fixed bottom-0 w-full flex items-center justify-center  gap-3">
                
                <NewButton  className=' bg-darkOrange rounded h-[2.5rem] w-[100%]   '>Add to bag</NewButton>

            </div>
            </div>
        

    </div>
  )
}

export default ProductUser