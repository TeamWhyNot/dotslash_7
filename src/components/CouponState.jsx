import React, { useState } from 'react'
import Coupon from './Coupon'

const CouponState = () => {

    return (
        <div>
            <div className=' bg-[#F6EEEE] shadow-md drop-shadow-md p-2 rounded-lg w-[100%] flex flex-col'>

                <div>
                    <h1>
                        Hurray!!!
                    </h1>
                </div>
                <div className='space-y-2'>
                    <Coupon discount='20%' code='ADXYYS' />
                    <Coupon discount='40%' code='ADXYYS' />

                </div>
            </div>
        </div>
    )
}

export default CouponState