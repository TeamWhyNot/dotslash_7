import React from 'react'
import pic from "../assets/mobile/pic.svg"

const CardCategory = () => {
    return (
        <div className='flex items-center  space-y-2'>
            <div className=' space-y-2 '>
                <div className='flex items-center justify-center'>
                    <img src={pic} ></img>
                </div>

                <div className='flex items-center justify-center'>
                    <h1>Women</h1>
                </div>
            </div>

        </div>
    )
}

export default CardCategory