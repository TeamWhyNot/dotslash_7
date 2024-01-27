import React from 'react'
import shopImg from '../assets/mobile/shopimg.svg'

const ShopCard = () => {
    return (
        <div className='bg-[#F3F3F3] space-y-2 shadow-md drop-shadow-md p-3 rounded-[25px] w-fit h-fit'>
            <div>
                <img src={shopImg}></img>
            </div>
            <div className='flex  items-center'>
                <div>
                    <h1>Wellness Forever</h1>
                </div>
                {/* <div className='w-[60%]'>
                    <div className=' justify-end flex w-[100%] '>
                        <h1>view all</h1>
                    </div>
                </div> */}
            </div>
            <div>
                <h1 className='text-sm'>Chemist</h1>
            </div>
        </div>
    )
}

export default ShopCard