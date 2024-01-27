import React from 'react'
import kurta from "../assets/mobile/kurtagirl.svg"
import { Button } from './Button'

const BagCard = () => {
    return (
        <div className=' border-t-2 p-2 w-[100%]  '>
            <div className=' gap-2 flex items-center '>
                <div>
                    <img src={kurta}></img>
                </div>
                <div className='flex-col space-y-2'>
                    <div>
                        <h1 className='text-xl'>Kurta Black</h1>
                    </div>
                    <div className=''>
                        <h1 className='text-sm'>Fancy</h1>
                    </div>
                    <div>
                        <h1>Rs 2300</h1>
                    </div>
                    <div>
                        <Button className=" p-2 w-fit  rounded-full text-white ">Click and Collect</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BagCard